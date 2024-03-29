'use strict';

// Inspired by: https://github.com/commitizen/cz-conventional-changelog and https://github.com/commitizen/cz-cli

var CZ_CONFIG_NAME = '.cz-config.js';
var CZ_CONFIG_EXAMPLE_LOCATION =
  'node_modules/git-commit-norm/cz-config-example.js';
var findConfig = require('find-config');
var log = require('winston');
var editor = {};
var temp = require('temp').track();
var fs = require('fs');
var path = require('path');
var buildCommit = require('./buildCommit');

/* istanbul ignore next */
function readConfigFile() {
  // First try to find the .cz-config.js config file
  var czConfig =
    findConfig.require(CZ_CONFIG_NAME, { home: false }) ||
    findConfig.require(CZ_CONFIG_EXAMPLE_LOCATION, { home: false });
  if (czConfig) {
    return czConfig;
  } else {
    console.error('.cz-config.js 文件不存在');
  }
}

module.exports = {
  prompter: function(cz, commit) {
    var config = readConfigFile();

    log.info(
      '\n\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n'
    );

    var questions = require('./questions').getQuestions(config, cz);

    cz.prompt(questions).then(function(answers) {
      if (answers.confirmCommit === 'edit') {
        temp.open(null, function(err, info) {
          /* istanbul ignore else */
          if (!err) {
            fs.write(info.fd, buildCommit(answers, config));
            fs.close(info.fd, function(err) {
              editor(info.path, function(code, sig) {
                if (code === 0) {
                  var commitStr = fs.readFileSync(info.path, {
                    encoding: 'utf8'
                  });
                  commit(commitStr);
                } else {
                  log.info(
                    'Editor returned non zero value. Commit message was:\n' +
                      buildCommit(answers, config)
                  );
                }
              });
            });
          }
        });
      } else if (answers.confirmCommit === 'yes') {
        commit(buildCommit(answers, config));
      } else {
        log.info('Commit has been canceled.');
      }
    });
  }
};
