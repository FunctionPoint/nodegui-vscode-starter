# nodegui-vscode-starter

A NodeGui starter application for VSCode TypeScript users.

It is based in this repo: https://github.com/sedwards2009/nodegui-simple-starter

But with the following changes:
- Minimal devtool dependencies, no linters, packagers.
- Removed package "source-map-support", VSCode has this built-in.
- TypeScript package removed, assumed to be global\
  Install with: `npm -g install typescript`
- Minimized package.json.
- Minimized tsconfig.json, latest code and modules.
- Single, fixed launch configuration.
- Generate code for ESM modules iso CommonJS.
- Made example code object oriented, with a class and smaller, modular methods.
- Moved hardcoded CSS to separate file that is is loaded dynamically.
- Used 'official' NodeGui website support color as background :-).
- Add event to pushbutton.
