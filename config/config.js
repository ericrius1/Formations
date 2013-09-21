
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/symbols-dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngMagnets - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/ngff-test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngMagnets - Test'
    }
  },
  production: {
    db: process.env.NES_MONGO_URI,
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ngMagnets - Production'
    }
  }
}
