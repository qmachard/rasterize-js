# SVG to PNG, JPEG and PDF converter using PhantomJS

## Requirements

* [NodeJS v6.x](https://nodejs.org/)

## CLI

```
$ node bin/rasterize.js --help

Converts SVGs to PNGs, PDFs, JPEGs, using PhantomJS

rasterizejs input.svg [--output=output.png] [--width=300] [--height=150]

Options:
  -o, --output  The output filename; if not provided, will be inferred  [string]
  -s, --scale   The scale of file				                       [int]
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
```

## Node.js requirements
   
RasterizeJS uses the latest in ES2015 features, and as such requires a recent version of Node.js. Only the 6.x series onward is supported.