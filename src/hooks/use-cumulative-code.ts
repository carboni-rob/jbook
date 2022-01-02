import { useTypedSelector } from "./use-typed-selector";

export const useCumulativeCode = (cellId: string) => {
  return useTypedSelector((state) => {
    const { data, order } = state.cells!;

    const orderedCells = order.map((id) => data[id]);

    const showFunc = `
          // Avoid naming collisions by using _React and _ReactDOM for the 'show()' function
          import _React from "react";
          import _ReactDOM from "react-dom";
          const rootElement = document.querySelector("#root");
          rootElement.innerHTML = "";
          var show = (value) => {
            if (typeof value === 'object') {
              if (value.$$typeof && value.props) {
                _ReactDOM.render(value, rootElement);
              } else {
                rootElement.innerHTML = JSON.stringify(value);
              }
            } else {
              rootElement.innerHTML = value;
            }
          }
        `;

    const showFuncNoop = "var show = () => {}";

    const cumulativeCode = [];

    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.cellId === cellId) {
          cumulativeCode.push(showFunc);
        } else {
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.cellId === cellId) break;
    }

    return cumulativeCode.join("\n");
  });
};
