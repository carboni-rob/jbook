(this["webpackJsonpjs-notebook-web"]=this["webpackJsonpjs-notebook-web"]||[]).push([[298],{484:function(e,n){!function(e){var n=/\{[^\r\n\[\]{}]*\}/,a={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:n,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function t(e){return"string"===typeof e?e:Array.isArray(e)?e.map(t).join(""):t(e.content)}e.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:n,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:a}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:n,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:a},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},e.languages.nani=e.languages.naniscript,e.hooks.add("after-tokenize",(function(e){e.tokens.forEach((function(e){if("string"!==typeof e&&"generic-text"===e.type){var n=t(e);(function(e){for(var n="[]{}",a=[],t=0;t<e.length;t++){var o=e[t],r=n.indexOf(o);if(-1!==r)if(r%2===0)a.push(r+1);else if(a.pop()!==r)return!1}return 0===a.length})(n)||(e.type="bad-line",e.content=n)}}))}))}(Prism)}}]);
//# sourceMappingURL=298.d03eb897.chunk.js.map