(window.webpackJsonpfindrhyme=window.webpackJsonpfindrhyme||[]).push([[0],{10:function(e,t,n){e.exports=n(26)},15:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(15),n(4)),l=n(5),i=n(8),u=n(6),h=n(9),m=n(7);n(25);function d(e){var t=e.result;return r.a.createElement("div",{className:"resultContainer"},r.a.createElement("a",{target:"_blank",href:"https://www.dictionary.com/browse/".concat(t.word),className:"word",rel:"noopener noreferrer"},t.word),r.a.createElement("div",{className:"definition"},t.defs&&t.defs.length>0&&t.defs[0]))}var f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.target.value.split(" "),a=t[t.length-1];fetch("http://api.datamuse.com/words?rel_rhy=".concat(a,"&md=d")).then(function(e){return e.json()}).then(function(e){return n.setState({searchResults:e})})},n.state={searchResults:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.searchResults),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.Helmet,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},"Find a Rhyme"),r.a.createElement("input",{className:"searchInput",placeholder:"start typing to find words that rhyme",onChange:this.onChange}),r.a.createElement("div",{className:"resultsContainer"},this.state.searchResults.map(function(e,t){return r.a.createElement(d,{result:e})}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b30bd42c.chunk.js.map