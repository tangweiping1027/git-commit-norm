'use strict';

module.exports = {
  entry: {
    feat: {
      // commit类型
      value: 'feat',
      name: 'feat:新功能', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '添加了什么新功能'
      },
      subject: {
        // 内容头
        prefix: '描述: ',
        message: '新功能的一些描述'
      }
    },
    fix: {
      // commit类型
      value: 'fix',
      name: 'fix:修复Bug', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '解决了什么问题？'
      },
      subject: {
        // 内容头
        prefix: '描述: ',
        message: '引入这个问题的原因'
      }
    },
    docs: {
      // commit类型
      value: 'docs',
      name: 'docs:文档', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '简单的文档描述'
      }
    },
    style: {
      // commit类型
      value: 'style',
      name: 'style:格式', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '描述'
      }
    },
    test: {
      // commit类型
      value: 'test',
      name: 'test:增加测试', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '描述'
      }
    },
    refactor: {
      // commit类型
      value: 'refactor',
      name: 'refactor:重构', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '描述'
      }
    },
    chore: {
      // commit类型
      value: 'chore',
      name: 'chore:构建过程或辅助工具的变动', // 标题
      scope: {
        // 副标题
        custom: true, // 是否
        message: '描述'
      },
      subject: {
        // 内容头
        prefix: '构建或者变动的详情: ',
        message: '构建或者变动的详情'
      }
    }
  },
  messages: {
    type: '请选择本次commit的类型:',
    confirmCommit: '您确认要提交以上的commit吗?'
  }
};
