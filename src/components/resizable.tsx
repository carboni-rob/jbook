import "./resizable.css";
import React, { useEffect } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface Props {
  direction: "horizontal" | "vertical";
  children: React.ReactNode | React.ReactNode[];
}

const Resizable: React.FC<Props> = ({
  direction,
  children,
}: Props): JSX.Element => {
  const [browserWidth, setBrowserWidth] = React.useState(window.innerWidth);
  const [browserHeight, setBrowserHeight] = React.useState(window.innerHeight);
  const [boxWidth, setBoxWidth] = React.useState(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;

    const resizeListener = () => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setBrowserHeight(window.innerHeight);
        setBrowserWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < boxWidth)
          setBoxWidth(window.innerWidth * 0.75);
      }, 100);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, [boxWidth]);

  let resizableProps: ResizableBoxProps;

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      height: Infinity,
      width: boxWidth,
      resizeHandles: ["e"],
      maxConstraints: [browserWidth * 0.75, Infinity],
      minConstraints: [browserWidth * 0.2, Infinity],
      onResizeStop: (event, data) => {
        setBoxWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      className: "resize-vertical",
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
      maxConstraints: [Infinity, browserHeight * 0.9],
      minConstraints: [Infinity, 50],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
