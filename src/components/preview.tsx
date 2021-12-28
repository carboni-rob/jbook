import React, { useEffect, useRef } from "react";

interface Props {
  code: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener("message", (event) => {
            try {
              eval(event.data);
            } catch(err) {
              const root = document.getElementById("root");
              root.innerHTML = '<div style="color: red"><h4>Runtime Error:</h4>'+err.message+'</div>';
              console.error(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<Props> = ({ code }: Props): JSX.Element => {
  const iframe = useRef<any>();

  useEffect(() => {
    // reset iframe content
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <iframe
      ref={iframe}
      sandbox="allow-scripts"
      srcDoc={html}
      title="preview"
    />
  );
};

export default Preview;
