#!/usr/bin/env node
import { Command } from 'commander'
import pkg from '../package.json' assert { type: 'json' }
import { login } from './commands/login'
import { whoami } from './commands/whoami'
import { init } from './commands/init'
import { link } from './commands/link'
import { publish } from './commands/publish'
import { projects } from './commands/projects'

const program = new Command()

program
    .name('heapfox')
    .description('HeapFox CLI')
    .version(pkg.version)

program.command('login').description('Authenticate with HeapFox').action(login)
program.command('whoami').description('Show current user').action(whoami)
program
    .command('init')
    .description('Initialize HeapFox in current folder')
    .option('--api <url>', 'API URL', 'http://localhost:3001')
    .action(init)

program
    .command('link')
    .description('Link current folder to a project')
    .requiredOption('-p, --project <slug>', 'Project slug')
    .action(link)

program
    .command('publish [path]')
    .description('Publish docs from a local folder')
    .option('-p, --project <slug>', 'Project slug')
    .option('--api <url>', 'API URL', 'http://localhost:3001')
    .action(publish)

program
    .command('projects')
    .description('List projects')
    .option('--api <url>', 'API URL', 'http://localhost:3001')
    .action(projects)

program.parseAsync()
