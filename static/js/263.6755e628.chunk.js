(this["webpackJsonpjs-notebook-web"]=this["webpackJsonpjs-notebook-web"]||[]).push([[263],{449:function(e,n){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/_~!@$%^=<>{}\\w]+",s="(\\()",o="(?=\\))",i="(?=\\s)",r={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp(s+"(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)"+i),lookbehind:!0},{pattern:RegExp(s+"(?:for|do|collect|return|finally|append|concat|in|by)"+i),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp(s+"def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp(s+"(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(s+"lambda\\s+\\(\\s*(?:&?"+t+"(?:\\s+&?"+t+")*\\s*)?\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(s+t),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},l={"lisp-marker":RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(s+t+"\\s+\\S[\\s\\S]*"+o),lookbehind:!0,inside:{string:r.string,boolean:r.boolean,number:r.number,symbol:r.symbol,punctuation:/[()]/}}}},p="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(s+"[\\s\\S]*"+o),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+p),inside:l},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+p),inside:l},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:l},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};r.lambda.inside.arguments=d,r.defun.inside.arguments=e.util.clone(d),r.defun.inside.arguments.inside.sublist=d,e.languages.lisp=r,e.languages.elisp=r,e.languages.emacs=r,e.languages["emacs-lisp"]=r}(Prism)}}]);
//# sourceMappingURL=263.6755e628.chunk.js.map