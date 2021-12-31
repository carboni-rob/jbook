import "./preview.css";
import React, { useEffect, useRef } from "react";

interface Props {
  code: string;
  status: string;
}

const successHtml = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
            const handleError = (err) => {
                const root = document.getElementById("root");
                root.innerHTML = '<div style="color: red"><h4>Runtime Error:</h4>'+err.message+'</div>';
                console.error(err);
            }

            window.addEventListener('error', (event) => {
                event.preventDefault();
                handleError(event.error);
            });

            window.addEventListener("message", (event) => {
            try {
              eval(event.data);
            } catch(err) {
                handleError(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<Props> = ({ code, status }: Props): JSX.Element => {
  const iframe = useRef<any>();

  useEffect(() => {
    // reset iframe content
    iframe.current.srcdoc = successHtml;

    // send code to iframe, debounce to be sure there is time to post message
    setTimeout(() => {
      iframe.current.contentWindow?.postMessage(code, "*");
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={successHtml}
        title="preview"
      />
      {status !== "" && <div className="preview-error">{status}</div>}
    </div>
  );
};

export default Preview;
