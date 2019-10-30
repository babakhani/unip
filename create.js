const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const pkg = require('./package.json');
const colors = require("colors/safe");
const snakeToCamel = (str) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
);
prompt.message = colors.blue("Config");
module.exports = (args, options, logger) => {
  logger.info(colors.green(`UNIP v${pkg.version}`));
  const variant = options.variant || 'default';
  const templatePath = `${__dirname}/templates/${args.template}/${variant}`;
  shell.mkdir(`./${args.name}`)
  shell.cd(`./${args.name}`)
  const localPath = process.cwd();
  if (fs.existsSync(templatePath)) {
    logger.info('Copying files…');
    shell.cp('-R', `${templatePath}/*`, localPath);
    logger.info('✔ The files have been copied!');
  } else {
    logger.error(`The requested template for ${args.template} wasn’t found.`)
    process.exit(1);
  }
  const variables = require(`${templatePath}/_variables`);
  if (fs.existsSync(`${localPath}/_variables.js`)) {
    shell.rm(`${localPath}/_variables.js`);
  }
  logger.info('Please fill the following values…');
  prompt.start().get(variables, (err, result) => {
    shell.ls('-Rl', '.').forEach(entry => {
      if (entry.isFile()) {
        variables.forEach(variable => {
          var pattern = new RegExp(`\\[${variable.name.toUpperCase()}\\]`, "ig")
          shell.sed('-i', pattern, result[variable.name], entry.name);
          var patternSanitize = new RegExp(`\\[${variable.name.toUpperCase()}_SANITIZED\\]`, "ig")
          shell.sed('-i', patternSanitize, snakeToCamel(result[variable.name]), entry.name);
        });
      }
    });
    logger.info('Init git');
    shell.exec('git init')
    logger.info('Install Packages (npm install)');
    shell.exec('npm install --verbose', function () {
        logger.info('Install React Packages (npm install)');
        logger.info('All Package Installed Success!');
        logger.info('Start Development Server');
        logger.info('Available Commands:');
        logger.info('npm run dev');
        logger.info('npm run esm')
        logger.info('npm run vue')
        logger.info('npm run react')
        logger.info(colors.green("✔ Success!"));
    });
  });
}
