#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const rasterize = require("..");
const packageJSON = require("../package.json");

const argv = yargs
    .usage(`${packageJSON.description}\n\n${packageJSON.name} input.svg ` + `[--output=output.png] [--width=300] [--height=150]`)
    .option("o", {
        alias: "output",
        type: "string",
        describe: "The output filename; if not provided, will be inferred"
    })
    .option("s", {
        alias: "scale",
        type: "string",
        describe: "The output file width, in pixels"
    })
    .demand(1)
    .help(false)
    .version()
    .argv;

const outputFilename = argv.output || path.basename(argv._[0], ".svg") + ".png";
rasterize(argv._[0], outputFilename, argv.scale);