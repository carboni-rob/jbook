import { Cell } from "../state/cell";

const headerTextCell: Cell = {
  cellId: "examples-header",
  type: "text",
  content: `# CarbonCoding's JS-Notebook
### Features:

- Inspired to how [Jupyter Notebooks](https://hub.mybinder.turing.ac.uk/user/ipython-ipython-in-depth-gc63wy6f/notebooks/binder/Index.ipynb) work, features multiple rich markdown editors and live code cells;
- Javascript typed in a code cell is evaluated, bundled in the browser and its result is immediately displayed in the preview iframe;
- code cells use the Monaco editor (the same code editor that VSCode uses) with code suggestions and intelligent syntax highlighting;
- text cells use the popular MDEditor package.

### What can you do?

- You can write plain Javascript in a code cell, it will be immediately evaluated, bundled and its result shown in the preview window. The whole process happens **in the browser**, no external API calls. This makes it much faster than the commonly used online editors (CodePen, JSFiddle, etc.):
`,
};

const plainJSCodeCell: Cell = {
  cellId: "examples-plain-js",
  type: "code",
  content: `// You can access the preiew iframe via the #root element
const newDiv = document.createElement('div');
const newContent = document.createTextNode(
'You can write plain Javascript in a code cell. It will be evaluted and bundled in the browser. You will immediately see the result here.'
);
newDiv.appendChild(newContent);
document.querySelector('#root').append(newDiv);`,
};

const importPackagesTextCell: Cell = {
  cellId: "examples-import-packages",
  type: "text",
  content: `### Import NPM packages with caching:

- You can import any NPM packge in a code cell using the ES6 syntax;
- packages are cached locally and reused in any other future call, so they only have to be downloded once:`,
};

const importAxiosCodeCell: Cell = {
  cellId: "examples-import-axios",
  type: "code",
  content: `import axios from 'axios';

const img = document.createElement('img');
img.style.objectFit = 'contain';
img.style.width = '100%';
img.style.height = '100%';
document.querySelector('#root').append(img);

axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
  const src = response.data.message;
  img.src = src;
});`,
};

const reuseItemsTextCell: Cell = {
  cellId: "examples-reuse-items",
  type: "text",
  content: `### Incremental code execution:
- Entities defined in a cell can be reused in any following cell:`,
};

const reuseItemsCodeCell: Cell = {
  cellId: "examples-reuse-items-code",
  type: "code",
  content: `document.querySelector('#root').append(img);`,
};

const importCSSTextCell: Cell = {
  cellId: "examples-import-css",
  type: "text",
  content: `### Import CSS packages:
- You can import any publicly hosted CSS file and use it straight away:`,
};

const importCSSCodeCell: Cell = {
  cellId: "examples-import-css-code",
  type: "code",
  content: `import 'bulmaswatch/superhero/bulmaswatch.min.css';

const button = document.createElement('button');
button.textContent = 'I am a styled button';
button.className = 'button is-primary';
button.style.margin = '10px';
document.querySelector('#root').append(button);`,
};

const JSXTextCell: Cell = {
  cellId: "examples-jsx",
  type: "text",
  content:
    "### Use JSX syntax:\n- The React and ReactDOM packages are preloaded in the application;\n- you can start writing functional components without the need of further imports;\n- elements can be displayed in the preview iframe using the built-in `show()` function:",
};

const JSXCodeCell: Cell = {
  cellId: "examples-jsx-code",
  type: "code",
  content: `const ReactButton = () => (
  <button className="button is-primary" style={{ margin: '10px' }}>
    I am a React button
  </button>
);
show(<ReactButton />);
`,
};

const AppTextCell: Cell = {
  cellId: "examples-app",
  type: "text",
  content:
    "### Write complete applications:\n- By importing the `React` package, you can access hooks and write complete apps:",
};

const AppCodeCell: Cell = {
  cellId: "examples-app-code",
  type: "code",
  content: `import React from 'react';

const App = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setCounter(10);
  });

  return (
    <>
      <button
        className="button is-info"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        className="button is-success"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <h4 className="title is-4">Count: {counter}</h4>
    </>
  );
};

show(<App />);`,
};

const kudosTextCell: Cell = {
  cellId: "examples-kudos",
  type: "text",
  content: `## Kudos:
  > This is my own implementation of Stephen Grider's idea as detailed in [his Course on Udemy](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/).  Stephen is both an amazing software engineer and an incredible teacher; I have probably learned from him more than from any other human being on the subject of software engneering. If you are considering learning or deepening your existing knowledge in web development, please check out his courses. You will thank me later. 😁`,
};

export const examples = {
  [headerTextCell.cellId]: headerTextCell,
  [plainJSCodeCell.cellId]: plainJSCodeCell,
  [importPackagesTextCell.cellId]: importPackagesTextCell,
  [importAxiosCodeCell.cellId]: importAxiosCodeCell,
  [reuseItemsTextCell.cellId]: reuseItemsTextCell,
  [reuseItemsCodeCell.cellId]: reuseItemsCodeCell,
  [importCSSTextCell.cellId]: importCSSTextCell,
  [importCSSCodeCell.cellId]: importCSSCodeCell,
  [JSXTextCell.cellId]: JSXTextCell,
  [JSXCodeCell.cellId]: JSXCodeCell,
  [AppTextCell.cellId]: AppTextCell,
  [AppCodeCell.cellId]: AppCodeCell,
  [kudosTextCell.cellId]: kudosTextCell,
};

export const examplesOrder = Object.keys(examples);
