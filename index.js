#! /usr/bin/env node
const commander = require('commander');
const help_option = require("./lib/core/help_option")
const createCommands = require('./lib/core/create')

commander.version(require('./package.json').version);

//显示选项
help_option();
//创建指令
createCommands();

commander.parse(process.arvg)