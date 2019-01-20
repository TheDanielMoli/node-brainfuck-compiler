# node-brainfuck-compiler [![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/node-brainfuck-compiler.svg
[npm-url]: https://www.npmjs.com/package/node-brainfuck-compiler


A CLI Brainfuck to Node.js compiler, written in Node.js. Brainfuck is an esoteric programming language (or esolang). It's a Turing-complete minimalist language and can be thought as software art or as a joke, depending on how you want to see it. Find out more on [Wikipedia](https://en.wikipedia.org/wiki/Brainfuck).

## Installation

In order to use the CLI command, you need to install it globally:

```
npm install --g node-brainfuck-compiler
```

## Usage

Then, execute:

```
brainfuck-compiler
```

You should see "hello world", as it is the default "Brainfuck code", if no input is provided.

To provide input and output:

```
brainfuck-compiler -i path/to/input.bf -o path/to/output.js
```

Paths must be relative to the current working directory.

## Options

CLI options available:
* ***-i*** for the input file path (Brainfuck source code)
* ***-o*** for the output file path (Node.js JavaScript output)

## Contributing

Feel free to open an Issue or send me a direct message.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Sadkit/node-brainfuck-compiler/tags). 

## Authors

* **Daniele Molinari** - [Sadkit](https://github.com/Sadkit)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.
