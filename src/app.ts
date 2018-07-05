import * as yargs from 'yargs'

export const run = (): void => {
  const parsedArgs = yargs
    .command({
      command: 'issue [--list|-l]',
      aliases: ['is'],
      desc: 'List issues from Github repository',
      handler: argv => {
        console.log('argv', argv)
      },
    })
    .help().argv

  console.log('parsedArgs', parsedArgs)
}