import { Cell } from "../state/cell";

export const headerTextCell: Cell = {
  cellId: "examples-header",
  type: "text",
  content: `# CarbonCoding's JS-Notebook
### Features:

- Inspired to how [Jupyter Notebooks](https://hub.mybinder.turing.ac.uk/user/ipython-ipython-in-depth-gc63wy6f/notebooks/binder/Index.ipynb) work, features multiple rich markdown editors and live code cells;
- Javascript typed in a code cell is evaluated, bundled in the browser and its result is immediately displayed in the preview iframe;
- code cells use the Monaco editor (the same code editor that VSCode uses) with code suggestions and intelligent syntax highlighting;
- text cells use the popular MDEditor package.

### What can you do?

- You can write plain Javascript in a code cell, it will be immediately evaluated, bundled and its result shown in the preview window. The whole process happens **in the browser**, no external API calls. This makes it much faster than the common online editors (CodePen, JSFiddle, etc.):
`,
};

export const plainJSCodeCell: Cell = {
  cellId: "examples-plain-js",
  type: "code",
  content: `const newDiv = document.createElement('div');
const newContent = document.createTextNode('You can write plain Javascript in a code cell. It will be evaluted and bundled in the browser. You will immediately see the result here.');
newDiv.appendChild(newContent);
document.body.append(newDiv);`,
};
