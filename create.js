const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const pkg = require('./package.json')
const colors = require('colors/safe')

const snakeToCamel = str =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  )

prompt.message = colors.blue('Config')

module.exports = (args, options, logger) => {

  logger.info(colors.green(`UNIP v${pkg.version}`))

  const variant = options.variant || 'default'
  const templatePath = `${__dirname}/templates/${args.template}/${variant}`
  const variables = require(`${templatePath}/_variables`)

  shell.mkdir(`./${args.name}`)
  shell.cd(`./${args.name}`)

  const localPath = process.cwd()
  if (fs.existsSync(templatePath)) {
    shell.cp('-R', `${templatePath}/.*`, `${localPath}/`)
    shell.cp('-R', `${templatePath}/*`, `${localPath}/`)
  } else {
    logger.error(`The requested template for ${args.template} wasn’t found.`)
    process.exit(1)
  }


  if (fs.existsSync(`${localPath}/_variables.js`)) {
    shell.rm(`${localPath}/_variables.js`)
  }
  logger.info('Please fill the following values…')
  prompt.start().get(variables, (err, result) => {
    shell.ls('-Rl', `${localPath}/`).forEach(entry => {
      if (entry.isFile()) {
        variables.forEach(variable => {
          var pattern = new RegExp(`<%-${variable.name.toUpperCase()}>`, 'ig')
          shell.sed('-i', pattern, result[variable.name], entry.name)
          var patternSanitize = new RegExp(
            `<%-${variable.name.toUpperCase()}_SANITIZED>`,
            'ig'
          )
          shell.sed(
            '-i',
            patternSanitize,
            snakeToCamel(result[variable.name]),
            entry.name
          )
        })
      }
    })

    logger.info('Init git')

    shell.exec('git init')
    shell.exec('git add .')
    shell.exec('git commit -m "init"')

    logger.info('Start Development Server')
    logger.info(`cd ${args.name}`)
    logger.info('npm run dev')
    logger.info(colors.green('✔ Success!'))
  })
}
