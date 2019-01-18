/** Declaration file generated by dts-gen */

export class Command {
  constructor(name: any);

  action(fn: any): any;

  addImplicitHelpCommand(): void;

  alias(alias: any, ...args: any[]): any;

  allowUnknownOption(arg: any, ...args: any[]): any;

  arguments(desc: any): any;

  command(name: any, desc?: any, opts?: any): any;

  commandHelp(): any;

  description(str: any, argsDescription: any, ...args: any[]): any;

  executeSubCommand(argv: any, args: any, unknown: any): void;

  help(cb: any): void;

  helpInformation(): any;

  largestArgLength(): any;

  largestCommandLength(): any;

  largestOptionLength(): any;

  missingArgument(name: any): void;

  name(str: any, ...args: any[]): any;

  normalize(args: any): any;

  option(flags: any, description: any, fn: any, defaultValue: any): any;

  optionFor(arg: any): any;

  optionHelp(): any;

  optionMissingArgument(option: any, flag: any): void;

  opts(): any;

  outputHelp(cb: any): any;

  padWidth(): any;

  parse(argv: any): any;

  parseArgs(args: any, unknown: any): any;

  parseExpectedArgs(args: any): any;

  parseOptions(argv: any): any;

  prepareCommands(): any;

  unknownOption(flag: any): void;

  usage(str: any, ...args: any[]): any;

  variadicArgNotLast(name: any): void;

  version(str: any, flags: any, ...args: any[]): any;
}

export class Option {
  constructor(flags: any, description: any);

  attributeName(): any;

  is(arg: any): any;

  name(): any;
}

export const args: any[];

export const commands: any[];

export const options: any[];

export function action(fn: any): any;

export function addImplicitHelpCommand(): void;

export function addListener(type: any, listener: any): any;

export function alias(alias: any, ...args: any[]): any;

export function allowUnknownOption(arg: any, ...args: any[]): any;

export function command(name: any, desc?: any, opts?: any): any;

export function commandHelp(): any;

export function description(
  str: any,
  argsDescription: any,
  ...args: any[]
): any;

export function emit(type: any, args: any): any;

export function eventNames(): any;

export function executeSubCommand(argv: any, args: any, unknown: any): void;

export function getMaxListeners(): any;

export function help(cb?: any): void;

export function helpInformation(): any;

export function largestArgLength(): any;

export function largestCommandLength(): any;

export function largestOptionLength(): any;

export function listenerCount(type: any): any;

export function listeners(type: any): any;

export function missingArgument(name: any): void;

export function name(str: any, ...args: any[]): any;

export function normalize(args: any): any;

export function off(type: any, listener: any): any;

export function on(type: any, listener: any): any;

export function once(type: any, listener: any): any;

export function option(
  flags: any,
  description: any,
  fn: any,
  defaultValue: any
): any;

export function optionFor(arg: any): any;

export function optionHelp(): any;

export function optionMissingArgument(option: any, flag: any): void;

export function opts(): any;

export function outputHelp(cb: any): any;

export function padWidth(): any;

export function parse(argv: any): any;

export function parseArgs(args: any, unknown: any): any;

export function parseExpectedArgs(args: any): any;

export function parseOptions(argv: any): any;

export function prepareCommands(): any;

export function prependListener(type: any, listener: any): any;

export function prependOnceListener(type: any, listener: any): any;

export function rawListeners(type: any): any;

export function removeAllListeners(type: any, ...args: any[]): any;

export function removeListener(type: any, listener: any): any;

export function setMaxListeners(n: any): any;

export function unknownOption(flag: any): void;

export function usage(str: any, ...args: any[]): any;

export function variadicArgNotLast(name: any): void;

export function version(str: any, flags: any, ...args: any[]): any;


export namespace action {
  const prototype: {};
}

export namespace addImplicitHelpCommand {
  const prototype: {};
}

export namespace addListener {
  const prototype: {};
}

export namespace alias {
  const prototype: {};
}

export namespace allowUnknownOption {
  const prototype: {};
}

export namespace command {
  const prototype: {};
}

export namespace commandHelp {
  const prototype: {};
}

export namespace description {
  const prototype: {};
}

export namespace emit {
  const prototype: {};
}

export namespace eventNames {
  const prototype: {};
}

export namespace executeSubCommand {
  const prototype: {};
}

export namespace getMaxListeners {
  const prototype: {};
}

export namespace help {
  const prototype: {};
}

export namespace helpInformation {
  const prototype: {};
}

export namespace largestArgLength {
  const prototype: {};
}

export namespace largestCommandLength {
  const prototype: {};
}

export namespace largestOptionLength {
  const prototype: {};
}

export namespace listenerCount {
  const prototype: {};
}

export namespace listeners {
  const prototype: {};
}

export namespace missingArgument {
  const prototype: {};
}

export namespace name {
  const prototype: {};
}

export namespace normalize {
  const prototype: {};
}

export namespace off {
  const prototype: {};
}

export namespace on {
  const prototype: {};
}

export namespace once {
  const prototype: {};
}

export namespace option {
  const prototype: {};
}

export namespace optionFor {
  const prototype: {};
}

export namespace optionHelp {
  const prototype: {};
}

export namespace optionMissingArgument {
  const prototype: {};
}

export namespace opts {
  const prototype: {};
}

export namespace outputHelp {
  const prototype: {};
}

export namespace padWidth {
  const prototype: {};
}

export namespace parse {
  const prototype: {};
}

export namespace parseArgs {
  const prototype: {};
}

export namespace parseExpectedArgs {
  const prototype: {};
}

export namespace parseOptions {
  const prototype: {};
}

export namespace prepareCommands {
  const prototype: {};
}

export namespace prependListener {
  const prototype: {};
}

export namespace prependOnceListener {
  const prototype: {};
}

export namespace rawListeners {
  const prototype: {};
}

export namespace removeAllListeners {
  const prototype: {};
}

export namespace removeListener {
  const prototype: {};
}

export namespace setMaxListeners {
  const prototype: {};
}

export namespace unknownOption {
  const prototype: {};
}

export namespace usage {
  const prototype: {};
}

export namespace variadicArgNotLast {
  const prototype: {};
}

export namespace version {
  const prototype: {};
}
