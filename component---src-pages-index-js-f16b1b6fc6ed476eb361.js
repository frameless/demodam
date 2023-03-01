"use strict";(self.webpackChunk_frameless_demodam=self.webpackChunk_frameless_demodam||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,i=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,c=new RegExp("^"+s.source),M=new RegExp(s.source+n.source,"gu"),r=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,i,n)=>{let s=!1,c=!1,M=!1;for(let r=0;r<e.length;r++){const o=e[r];s&&t.test(o)?(e=e.slice(0,r)+"-"+e.slice(r),s=!1,M=c,c=!0,r++):c&&M&&a.test(o)?(e=e.slice(0,r-1)+"-"+e.slice(r-1),M=c,c=!1,s=!0):(s=i(o)===o&&n(o)!==o,M=c,c=n(o)===o&&i(o)!==o)}return e})(e,s,o)),e=e.replace(c,""),e=n.preserveConsecutiveUppercase?((e,t)=>(i.lastIndex=0,e.replace(i,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(M.lastIndex=0,r.lastIndex=0,e.replace(M,((e,a)=>t(a))).replace(r,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return N},M:function(){return p},P:function(){return z},S:function(){return U},_:function(){return M},a:function(){return c},b:function(){return l},g:function(){return w},h:function(){return r}});var i=a(7294),n=(a(3204),a(5697)),s=a.n(n);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},c.apply(this,arguments)}function M(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t.indexOf(a=s[i])>=0||(n[a]=e[a]);return n}const r=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const i={};let n="gatsby-image-wrapper";return"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:i}}function l(e,t,a,i,n){return void 0===n&&(n={}),c({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:c({},n,{opacity:t?1:0})})}function w(e,t,a,i,n,s,M,r){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=i,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),M&&(o.objectFit=M),r&&(o.objectPosition=r);const l=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return l}const d=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},N=function(e){let{children:t}=e,a=M(e,d);return i.createElement(i.Fragment,null,i.createElement(m,c({},a)),t,null)},D=["src","srcSet","loading","alt","shouldLoad"],u=["fallback","sources","shouldLoad"],g=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:r}=e,o=M(e,D);return i.createElement("img",c({},o,{decoding:"async",loading:n,src:r?t:void 0,"data-src":r?void 0:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,alt:s}))},j=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=M(e,u);const r=s.sizes||(null==t?void 0:t.sizes),o=i.createElement(g,c({},s,t,{sizes:r,shouldLoad:n}));return a.length?i.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return i.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:r})})),o):o};var L;g.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},j.displayName="Picture",j.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const I=["fallback"],z=function(e){let{fallback:t}=e,a=M(e,I);return t?i.createElement(j,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",c({},a))};z.displayName="Placeholder",z.propTypes={fallback:n.string,sources:null==(L=j.propTypes)?void 0:L.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const p=function(e){return i.createElement(i.Fragment,null,i.createElement(j,c({},e)),i.createElement("noscript",null,i.createElement(j,c({},e,{shouldLoad:!0}))))};p.displayName="MainImage",p.propTypes=j.propTypes;const y=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],E=["style","className"],b=e=>e.replace(/\n/g,""),h=function(e,t,a){for(var i=arguments.length,n=new Array(i>3?i-3:0),c=3;c<i;c++)n[c-3]=arguments[c];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:h},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],A=new Set;let f,S;const C=function(e){let{as:t="div",image:n,style:s,backgroundColor:l,className:w,class:d,onStartLoad:m,onLoad:N,onError:D}=e,u=M(e,k);const{width:g,height:j,layout:L}=n,I=o(g,j,L),{style:z,className:p}=I,y=M(I,x),E=(0,i.useRef)(),b=(0,i.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(w=d);const h=function(e,t,a){let i="";return"fullWidth"===e&&(i='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(i='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(L,g,j);return(0,i.useEffect)((()=>{f||(f=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&r())return e.complete?(null==m||m({wasCached:!0}),null==N||N({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==N||N({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(b);if(S&&A.has(b))return;let t,i;return f.then((e=>{let{renderImageToString:a,swapPlaceholderImage:M}=e;E.current&&(E.current.innerHTML=a(c({isLoading:!0,isLoaded:A.has(b),image:n},u)),A.has(b)||(t=requestAnimationFrame((()=>{E.current&&(i=M(E.current,b,A,s,m,N,D))}))))})),()=>{t&&cancelAnimationFrame(t),i&&i()}}),[n]),(0,i.useLayoutEffect)((()=>{A.has(b)&&S&&(E.current.innerHTML=S(c({isLoading:A.has(b),isLoaded:A.has(b),image:n},u)),null==m||m({wasCached:!0}),null==N||N({wasCached:!0}))}),[n]),(0,i.createElement)(t,c({},y,{style:c({},z,s,{backgroundColor:l}),className:p+(w?" "+w:""),ref:E,dangerouslySetInnerHTML:{__html:h},suppressHydrationWarning:!0}))},Y=(0,i.memo)((function(e){return e.image?(0,i.createElement)(C,e):null}));Y.propTypes=T,Y.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function v(e){return function(t){let{src:a,__imageData:n,__error:s}=t,r=M(t,O);return s&&console.warn(s),n?i.createElement(e,c({image:n},r)):(console.warn("Image not loaded",a),null)}}const Q=v((function(e){let{as:t="div",className:a,class:n,style:s,image:r,loading:d="lazy",imgClassName:m,imgStyle:D,backgroundColor:u,objectFit:g,objectPosition:j}=e,L=M(e,y);if(!r)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),D=c({objectFit:g,objectPosition:j,backgroundColor:u},D);const{width:I,height:h,layout:T,images:k,placeholder:x,backgroundColor:A}=r,f=o(I,h,T),{style:S,className:C}=f,Y=M(f,E),O={fallback:void 0,sources:[]};return k.fallback&&(O.fallback=c({},k.fallback,{srcSet:k.fallback.srcSet?b(k.fallback.srcSet):void 0})),k.sources&&(O.sources=k.sources.map((e=>c({},e,{srcSet:b(e.srcSet)})))),i.createElement(t,c({},Y,{style:c({},S,s,{backgroundColor:u}),className:C+(a?" "+a:"")}),i.createElement(N,{layout:T,width:I,height:h},i.createElement(z,c({},w(x,!1,T,I,h,A,g,j))),i.createElement(p,c({"data-gatsby-image-ssr":"",className:m},L,l("eager"===d,!1,O,d,D)))))})),Z=function(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),n=2;n<a;n++)i[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(i)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),P={src:s().string.isRequired,alt:h,width:Z,height:Z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};Q.displayName="StaticImage",Q.propTypes=P;const U=v(Y);U.displayName="StaticImage",U.propTypes=P},7347:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return u}});var i=a(5663),n=a(7294),s=a(8032);var c=()=>n.createElement("section",{className:"blackbar-section"},n.createElement("div",{className:"blackbar-container"},n.createElement("div",{className:"blackbar-image-block"},n.createElement("a",{href:"https://conduction.nl/"},n.createElement(s.S,{height:"100%",width:150,className:"blackbar-image",alt:"bedrijfs logo van conduction.",src:"../images/conduction.png",imgStyle:{objectFit:"contain"},__imageData:a(9678)})),n.createElement("a",{href:"https://www.maykinmedia.nl/nl/"},n.createElement(s.S,{height:"100%",width:150,className:"blackbar-image",alt:"bedrijfs logo van maykin media.",src:"../images/maykinmedia.png",imgStyle:{objectFit:"contain"},__imageData:a(1263)})),n.createElement("a",{href:"https://www.dimpact.nl/"},n.createElement(s.S,{height:"100%",width:150,className:"blackbar-image",alt:"bedrijf logo dimpact.",src:"../images/dimpact.png",imgStyle:{objectFit:"contain"},__imageData:a(1297)})),n.createElement("a",{href:"https://www.kadaster.nl/"},n.createElement(s.S,{height:"100%",width:150,className:"blackbar-image",alt:"bedrijfs logo kadaster",src:"../images/kadaster.png",imgStyle:{objectFit:"contain"},__imageData:a(4970)})),n.createElement("a",{href:"https://publiccode.net/"},n.createElement(s.S,{height:"100%",width:150,className:"blackbar-image",alt:"bedrijfs logo van foundation for public code",src:"../images/foundation-for-public-code.png",imgStyle:{objectFit:"contain"},__imageData:a(1809)}))))),M=a(3579),r=a.p+"static/person-data-c3e96a8a7bf3c2fa147fd8ab6c79919e.svg",o=a.p+"static/person-document-e98dafda73f2e65905403ce5a847cafd.svg",l=a.p+"static/women-checklist-de6bafde10ec9c3b980a031d6a868811.svg";var w=()=>n.createElement(M.JH,{className:"content-container alignment"},n.createElement("section",{className:"content-section"},n.createElement("heading2",{class:"sr-only"},"Introductie"),n.createElement("p",{className:"content-p utrecht-paragraph"},"Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten. Op Demodam.nl kun je straks zien welke Common Ground componenten (bouwstenen) achter die diensten al klaar zijn en hoe ze met elkaar samenwerken. Gemeenten kunnen vervolgens besluiten om zo`n dienst, bijvoorbeeld een applicatie voor online geboorteaangifte, ook in te zetten voor hun inwoners. Ook is het mogelijk om verder te bouwen bovenop wat al beschikbaar is door zowel leveranciers als gemeenten."),n.createElement("p",{className:"content-p utrecht-paragraph"},"Demodam wordt gemaakt en onderhouden door de Common Ground community, bestaande uit mensen en organisaties vanuit zowel de overheid als het bedrijfsleven. De Foundation for Public Code ziet erop toe dat alle partijen gelijkwaardig zijn. Iedereen is welkom om bij te dragen.")),n.createElement("section",{className:"content-section"},n.createElement(M.XJ,null,"Demodam.nl is tijdelijk niet beschikbaar."),n.createElement("p",{className:"content-p utrecht-paragraph"},"Wegens de log4j bug hebben we Demodam.nl tijdelijk offline gehaald. Gezien er ook een migratie op handen staat, zullen we dit hierin meenemen. Vanaf eind januari 2022 komt Demodam.nl weer in de lucht. Onze excuses voor het ongemak.")),n.createElement("div",{className:"content-vid"},n.createElement("figure",{className:"content-figure"},n.createElement("iframe",{className:"content-iframe",width:"100%",height:"100%",src:"https://www.youtube-nocookie.com/embed/jTK-sbee2qM",title:"Demodam kickoff op YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),n.createElement("figcaption",{class:"sr-only"},"Opname Kickoff 31 mei 2021"))),n.createElement("div",{className:"content-iblock"},n.createElement("section",{className:"content-isection"},n.createElement(M.XJ,null,"Op Demodam.nl laten we zien wat er beschikbaar is"),n.createElement("p",{className:"content-p utrecht-paragraph"},"op ",n.createElement("a",{href:"#"},"Demodam.nl")," kun je zien hoe digitale diensten werken voor burgers en ambtenaren. Het maakt tastbaar wat je met Common Ground kunt.")),n.createElement("div",{className:"content-image-container"},n.createElement(M.Ee,{className:"utrecht-img--scale-down",alt:"Illustratie van een laptop die een encrypte verificatie stuurd naar een telefoon en een website die de verificatie code vraagt met een vinkje",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iYTNhNDRiZDItMWQ1Yy00NmEwLWFiODgtZmJkMmZmODkzY2EwIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjExMDAuNTAwNjQiIGhlaWdodD0iNjkxLjcwNjgyIiB2aWV3Qm94PSIwIDAgMTEwMC41MDA2NCA2OTEuNzA2ODIiPjx0aXRsZT50d29fZmFjdG9yX2F1dGhlbnRpY2F0aW9uPC90aXRsZT48cGF0aCBkPSJNMTE1MC4yNTAzMiwzODguMjM3NDNoLTEuODU4NTlWMzM3LjMyMTk0YTI5LjQ2ODUsMjkuNDY4NSwwLDAsMC0yOS40Njg1OS0yOS40Njg1M0gxMDExLjA1MTg2YTI5LjQ2ODUsMjkuNDY4NSwwLDAsMC0yOS40Njg1OSwyOS40Njg1M1Y2MTYuNjQ4MjdhMjkuNDY4NTEsMjkuNDY4NTEsMCwwLDAsMjkuNDY4NTksMjkuNDY4NTRoMTA3Ljg3MTI4YTI5LjQ2ODUxLDI5LjQ2ODUxLDAsMCwwLDI5LjQ2ODU5LTI5LjQ2ODU0VjQyNC40Nzk5NGgxLjg1ODU5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5Ljc0OTY4IC0xMDQuMTQ2NTkpIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTExNDIuMTIxLDMzOS4wNTM0MnYyNzguOTJhMjIuMDExMTEsMjIuMDExMTEsMCwwLDEtMjIuMDEsMjIuMDFoLTEwOC4zOWEyMi4wMDI0OCwyMi4wMDI0OCwwLDAsMS0yMi0yMi4wMXYtMjc4LjkyYTIyLjAwMDMxLDIyLjAwMDMxLDAsMCwxLDIyLTIyaDEzLjE1YTEwLjQ2MDgsMTAuNDYwOCwwLDAsMCw5LjY4LDE0LjRoNjEuOGExMC40NDAyNywxMC40NDAyNywwLDAsMCw5LjY3OTkzLTE0LjRIMTEyMC4xMTFBMjIuMDA4OTQsMjIuMDA4OTQsMCwwLDEsMTE0Mi4xMjEsMzM5LjA1MzQyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5Ljc0OTY4IC0xMDQuMTQ2NTkpIiBmaWxsPSIjZDBjZGUxIi8+PHJlY3QgeD0iOTQ1Ljg1MTI5IiB5PSIzNTUuNzA2ODIiIHdpZHRoPSIxMjYiIGhlaWdodD0iMzQiIGZpbGw9IiNmNzZjNmMiLz48cGF0aCBkPSJNMTEyNi42MDEsNDg3Ljg1MzQxaC0xMjJhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLTMtM3YtMzBhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMtM2gxMjJhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMsM3YzMEEzLjAwMzI4LDMuMDAzMjgsMCwwLDEsMTEyNi42MDEsNDg3Ljg1MzQxWm0tMTIyLTM0YTEuMDAxLDEuMDAxLDAsMCwwLTEsMXYzMGExLjAwMDY3LDEuMDAwNjcsMCwwLDAsMSwxaDEyMmExLjAwMDY3LDEuMDAwNjcsMCwwLDAsMS0xdi0zMGExLjAwMSwxLjAwMSwwLDAsMC0xLTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI5NTkuODUxMjkiIHk9IjM3NC43MDY4MiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI5ODEuODUxMjkiIHk9IjM3NC43MDY4MiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIxMDAzLjg1MTI5IiB5PSIzNzQuNzA2ODIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMTAyNS44NTEyOSIgeT0iMzc0LjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjEwNDcuODUxMjkiIHk9IjM3NC43MDY4MiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMTE0Mi4xMjEsNTg5LjYxMzQydjI4LjM2YTIyLjAxMTExLDIyLjAxMTExLDAsMCwxLTIyLjAxLDIyLjAxaC0xMDguMzlhMjIuMDAyNDgsMjIuMDAyNDgsMCwwLDEtMjItMjIuMDF2LTEzMC40NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OS43NDk2OCAtMTA0LjE0NjU5KSIgb3BhY2l0eT0iMC4xIi8+PHJlY3QgeD0iOTkuODUxMjkiIHk9IjQ1OS43MDY4MiIgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyMzIiIGZpbGw9IiNkMGNkZTEiLz48cGF0aCBkPSJNNTAyLjM1MSw3OTUuODUzNDFIMTUxLjYwMWEyLjAwNTkxLDIuMDA1OTEsMCwwLDEtMi0ydi0yMjhhMi4wMDU4NywyLjAwNTg3LDAsMCwxLDItMmg0LjQ0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5Ljc0OTY4IC0xMDQuMTQ2NTkpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB4PSIzMTguODUxMjkiIHk9IjQ5MC43MDY4MiIgd2lkdGg9IjczMi45OTk1MSIgaGVpZ2h0PSIyIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTYwMC4zNDI2OCwxMDguNDY0MzVIMzkwLjg1M3YtNC4zMTc3NkgyOTUuODYyMTd2NC4zMTc3Nkg4NS41MDg5YTE0LjE3MDM5LDE0LjE3MDM5LDAsMCwwLTE0LjE3MDQsMTQuMTcwNFY0MDkuNDkwNmExNC4xNzA0MywxNC4xNzA0MywwLDAsMCwxNC4xNzA0LDE0LjE3MDQ1SDYwMC4zNDI2OGExNC4xNzA0NCwxNC4xNzA0NCwwLDAsMCwxNC4xNzA0LTE0LjE3MDQ1VjEyMi42MzQ3NUExNC4xNzAzOSwxNC4xNzAzOSwwLDAsMCw2MDAuMzQyNjgsMTA4LjQ2NDM1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5Ljc0OTY4IC0xMDQuMTQ2NTkpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDAuNTkxMjgiIHk9IjI5LjM1Njc5IiB3aWR0aD0iNTA1LjE2OTk4IiBoZWlnaHQ9IjI4NC45ODAwNCIgZmlsbD0iI2QwY2RlMSIvPjxjaXJjbGUgY3g9IjI5Mi43NDQzMyIgY3k9IjE2LjQwNzUiIHI9IjUuMTgxMzIiIGZpbGw9IiNmNzZjNmMiLz48cGF0aCBkPSJNMjQwLjYwMSwyMzkuODUzNDFoLTEyYTMuMDAzMjgsMy4wMDMyOCwwLDAsMS0zLTN2LTEyYTMuMDAzMjgsMy4wMDMyOCwwLDAsMSwzLTNoMTJhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMsM3YxMkEzLjAwMzI4LDMuMDAzMjgsMCwwLDEsMjQwLjYwMSwyMzkuODUzNDFabS0xMi0xNmExLjAwMTMsMS4wMDEzLDAsMCwwLTEsMXYxMmExLjAwMTMsMS4wMDEzLDAsMCwwLDEsMWgxMmExLjAwMTMsMS4wMDEzLDAsMCwwLDEtMXYtMTJhMS4wMDEzLDEuMDAxMywwLDAsMC0xLTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIxNzYuODUxMjkiIHk9IjEzMy43MDY4MiIgd2lkdGg9IjIyOCIgaGVpZ2h0PSIyIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMzQ1Ljg1MTI5IiB5PSIxODguNzA2ODIiIHdpZHRoPSI1MyIgaGVpZ2h0PSIxNiIgZmlsbD0iI2Y3NmM2YyIvPjxwYXRoIGQ9Ik00NTIuNjAxLDMwNC44NTM0MWgtNDlhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLTMtM3YtMTJhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMtM2g0OWEzLjAwMzI4LDMuMDAzMjgsMCwwLDEsMywzdjEyQTMuMDAzMjgsMy4wMDMyOCwwLDAsMSw0NTIuNjAxLDMwNC44NTM0MVptLTQ5LTE2YTEuMDAxMywxLjAwMTMsMCwwLDAtMSwxdjEyYTEuMDAxMywxLjAwMTMsMCwwLDAsMSwxaDQ5YTEuMDAxMywxLjAwMTMsMCwwLDAsMS0xdi0xMmExLjAwMTMsMS4wMDEzLDAsMCwwLTEtMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OS43NDk2OCAtMTA0LjE0NjU5KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjcwMy44NTEyOSIgeT0iMjA2LjcwNjgyIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjZjc2YzZjIi8+PHBhdGggZD0iTTg2My42MDEsMzc1LjM1MzQxaC05NmE0LjAwNDI3LDQuMDA0MjcsMCwwLDEtNC00di02NmE0LjAwNDI3LDQuMDA0MjcsMCwwLDEsNC00aDk2YTQuMDA0MjYsNC4wMDQyNiwwLDAsMSw0LDR2NjZBNC4wMDQyNiw0LjAwNDI2LDAsMCwxLDg2My42MDEsMzc1LjM1MzQxWm0tOTYtNzB2NjZIODYzLjYwMzlsLS4wMDI5My02NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OS43NDk2OCAtMTA0LjE0NjU5KSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik04NTIuNjAxLDMwMi44NTM0MWgtNGEzMywzMywwLDEsMC02NiwwaC00YTM3LDM3LDAsMSwxLDc0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNODI1LjYwMSwzMzAuMzUzNDFhMTAuMDAwMjMsMTAuMDAwMjMsMCwxLDAtMTUuMjk0MTIsOC40NzI1OFYzNDkuNTU5M2E1LjI5NDExLDUuMjk0MTEsMCwwLDAsNS4yOTQxMiw1LjI5NDExaDBhNS4yOTQxMSw1LjI5NDExLDAsMCwwLDUuMjk0MTEtNS4yOTQxMVYzMzguODI2QTkuOTgzMjcsOS45ODMyNywwLDAsMCw4MjUuNjAxLDMzMC4zNTM0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OS43NDk2OCAtMTA0LjE0NjU5KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjI4NC4zNTEyOSIgeT0iNTYyLjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMwNi4zNTEyOSIgeT0iNTYyLjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMyOC4zNTEyOSIgeT0iNTYyLjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjM1MC4zNTEyOSIgeT0iNTYyLjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjM3Mi4zNTEyOSIgeT0iNTYyLjcwNjgyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik02NDMuNjAwNTksNzc4Ljg1MzUySDE3NC42MDEwN2E0LjAwNDI4LDQuMDA0MjgsMCwwLDEtNC00di0yMjhhNC4wMDQyNyw0LjAwNDI3LDAsMCwxLDQtNEg2NDMuNjAwNTlhNC4wMDQsNC4wMDQsMCwwLDEsNCw0djIyOEE0LjAwNCw0LjAwNCwwLDAsMSw2NDMuNjAwNTksNzc4Ljg1MzUyWm0tNDY4Ljk5OTUyLTIzMnYyMjhINjQzLjYwMzUybC0uMDAyOTMtMjI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5Ljc0OTY4IC0xMDQuMTQ2NTkpIiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMTQ1Ljg1MTI5IiBjeT0iNDcwLjcwNjgyIiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMTY2Ljg1MTI5IiBjeT0iNDcwLjcwNjgyIiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMTg3Ljg1MTI5IiBjeT0iNDcwLjcwNjgyIiByPSI2IiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTQ1My42MDEsNjgwLjg1MzQxaC0xMzVhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLTMtM3YtMzRhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMtM2gxMzVhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMsM3YzNEEzLjAwMzI4LDMuMDAzMjgsMCwwLDEsNDUzLjYwMSw2ODAuODUzNDFabS0xMzUtMzhhMS4wMDEsMS4wMDEsMCwwLDAtMSwxdjM0YTEuMDAxLDEuMDAxLDAsMCwwLDEsMWgxMzVhMS4wMDEsMS4wMDEsMCwwLDAsMS0xdi0zNGExLjAwMSwxLjAwMSwwLDAsMC0xLTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSI0MzcuODUxMjkiIGN5PSI1NTkuNzA2ODIiIHI9IjE4IiBmaWxsPSIjZjc2YzZjIi8+PHBhdGggZD0iTTQ5My42MDEsNjc5Ljg1MzQxYTE5LDE5LDAsMSwxLDE5LTE5QTE5LjAyMTYyLDE5LjAyMTYyLDAsMCwxLDQ5My42MDEsNjc5Ljg1MzQxWm0wLTM2YTE3LDE3LDAsMSwwLDE3LDE3QTE3LjAxOSwxNy4wMTksMCwwLDAsNDkzLjYwMSw2NDMuODUzNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cG9seWdvbiBwb2ludHM9IjQ0NC4xMTggNTYzLjgwMyA0MzQuNDM3IDU1NC4xMjEgNDM3LjI2NSA1NTEuMjkzIDQ0My41ODQgNTU3LjYxMSA0NjEuMjE2IDUzMi41NTUgNDY0LjQ4NyA1MzQuODU4IDQ0NC4xMTggNTYzLjgwMyIgZmlsbD0iIzNmM2Q1NiIvPjxwb2x5Z29uIHBvaW50cz0iNDMzLjc2MSAzMTQuMzM3IDQwLjU5MSAzMTQuMzM3IDQwLjU5MSA1MC45NDcgNDMzLjc2MSAzMTQuMzM3IiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNjI4LjY5NzM5LDQxMy4yOTg0SDU3OS4zOTUyN3YtMy41NTIxOGEuNzA0My43MDQzLDAsMCwwLS43MDQzMS0uNzA0MzJINTYxLjc4NzM3YS43MDQyOS43MDQyOSwwLDAsMC0uNzA0MzEuNzA0MzJ2My41NTIxOEg1NTAuNTE4MzJ2LTMuNTUyMThhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzItLjcwNDMySDUzMi45MTA0MmEuNzA0My43MDQzLDAsMCwwLS43MDQzMi43MDQzMnYzLjU1MjE4SDUyMS42NDEzNnYtMy41NTIxOGEuNzA0MjkuNzA0MjksMCwwLDAtLjcwNDMxLS43MDQzMkg1MDQuMDMzNDdhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzIuNzA0MzJ2My41NTIxOEg0OTIuNzY0NDF2LTMuNTUyMThhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzItLjcwNDMySDQ3NS4xNTY1MWEuNzA0MjkuNzA0MjksMCwwLDAtLjcwNDMxLjcwNDMydjMuNTUyMThINDYzLjg4NzQ2di0zLjU1MjE4YS43MDQzLjcwNDMsMCwwLDAtLjcwNDMyLS43MDQzMkg0NDYuMjc5NTZhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzIuNzA0MzJ2My41NTIxOEg0MzUuMDEwNXYtMy41NTIxOGEuNzA0MjkuNzA0MjksMCwwLDAtLjcwNDMxLS43MDQzMkg0MTcuNDAyNmEuNzA0My43MDQzLDAsMCwwLS43MDQzMS43MDQzMnYzLjU1MjE4SDQwNi4xMzM1NXYtMy41NTIxOGEuNzA0My43MDQzLDAsMCwwLS43MDQzMi0uNzA0MzJIMjczLjAxNzg0YS43MDQzLjcwNDMsMCwwLDAtLjcwNDMyLjcwNDMydjMuNTUyMThIMjYxLjc0ODc4di0zLjU1MjE4YS43MDQzLjcwNDMsMCwwLDAtLjcwNDMyLS43MDQzMkgyNDQuMTQwODhhLjcwNDI5LjcwNDI5LDAsMCwwLS43MDQzMS43MDQzMnYzLjU1MjE4SDIzMi44NzE4M3YtMy41NTIxOGEuNzA0My43MDQzLDAsMCwwLS43MDQzMi0uNzA0MzJIMjE1LjI2MzkzYS43MDQzLjcwNDMsMCwwLDAtLjcwNDMyLjcwNDMydjMuNTUyMThIMjAzLjk5NDg3di0zLjU1MjE4YS43MDQyOS43MDQyOSwwLDAsMC0uNzA0MzEtLjcwNDMySDE4Ni4zODdhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzEuNzA0MzJ2My41NTIxOEgxNzUuMTE3OTJ2LTMuNTUyMThhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzItLjcwNDMySDE1Ny41MWEuNzA0My43MDQzLDAsMCwwLS43MDQzMi43MDQzMnYzLjU1MjE4SDE0Ni4yNDF2LTMuNTUyMThhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzItLjcwNDMySDEyOC42MzMwN2EuNzA0My43MDQzLDAsMCwwLS43MDQzMi43MDQzMnYzLjU1MjE4SDExNy4zNjR2LTMuNTUyMThhLjcwNDMuNzA0MywwLDAsMC0uNzA0MzEtLjcwNDMySDk5Ljc1NjExYS43MDQyOS43MDQyOSwwLDAsMC0uNzA0MzEuNzA0MzJ2My41NTIxOEg2Ni42NTMyNkExNi45MDM1OSwxNi45MDM1OSwwLDAsMCw0OS43NDk2OCw0MzAuMjAydjcuNjQzNGExNi45MDM1OCwxNi45MDM1OCwwLDAsMCwxNi45MDM1OCwxNi45MDM1NEg2MjguNjk3MzlBMTYuOTAzNTgsMTYuOTAzNTgsMCwwLDAsNjQ1LjYwMSw0MzcuODQ1MzlWNDMwLjIwMkExNi45MDM1OSwxNi45MDM1OSwwLDAsMCw2MjguNjk3MzksNDEzLjI5ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNDc0LjYwMSwzMjEuODUzNDFoLTI2NGEzLjAwMzI4LDMuMDAzMjgsMCwwLDEtMy0zdi0xMTBhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMtM2gyNjRhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMsM3YxMTBBMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDQ3NC42MDEsMzIxLjg1MzQxWm0tMjY0LTExNGExLjAwMTMsMS4wMDEzLDAsMCwwLTEsMXYxMTBhMS4wMDEzLDEuMDAxMywwLDAsMCwxLDFoMjY0YTEuMDAxMywxLjAwMTMsMCwwLDAsMS0xdi0xMTBhMS4wMDEzLDEuMDAxMywwLDAsMC0xLTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMjQwLjYwMSwyNjkuODUzNDFoLTEyYTMuMDAzMjgsMy4wMDMyOCwwLDAsMS0zLTN2LTEyYTMuMDAzMjgsMy4wMDMyOCwwLDAsMSwzLTNoMTJhMy4wMDMyOCwzLjAwMzI4LDAsMCwxLDMsM3YxMkEzLjAwMzI4LDMuMDAzMjgsMCwwLDEsMjQwLjYwMSwyNjkuODUzNDFabS0xMi0xNmExLjAwMTMsMS4wMDEzLDAsMCwwLTEsMXYxMmExLjAwMTMsMS4wMDEzLDAsMCwwLDEsMWgxMmExLjAwMTMsMS4wMDEzLDAsMCwwLDEtMXYtMTJhMS4wMDEzLDEuMDAxMywwLDAsMC0xLTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuNzQ5NjggLTEwNC4xNDY1OSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIxNzYuODUxMjkiIHk9IjE2My43MDY4MiIgd2lkdGg9IjIyOCIgaGVpZ2h0PSIyIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMjY0Ljg1MTI5IiB5PSIyNjkuNzA2ODIiIHdpZHRoPSI3MzIuOTk5NTEiIGhlaWdodD0iMiIgZmlsbD0iIzNmM2Q1NiIvPjxjaXJjbGUgY3g9IjI2NC44NTEyOSIgY3k9IjI2OS43MDY4MiIgcj0iMTQiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSI5OTcuODUxMjkiIGN5PSIyNzEuNzA2ODIiIHI9IjExIiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iMTA1MS44NTEyOSIgY3k9IjQ5Mi43MDY4MiIgcj0iMTEiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIzMjEuODUxMjkiIGN5PSI0OTIuNzA2ODIiIHI9IjExIiBmaWxsPSIjM2YzZDU2Ii8+PC9zdmc+"}))),n.createElement("div",{className:"content-iblock"},n.createElement("section",{className:"content-isection"},n.createElement(M.XJ,null,"Demodam is een omgeving voor samenwerken"),n.createElement("p",{className:"content-p utrecht-paragraph"},"Overheden en hun leveranciers kunnen elkaar makkelijker vinden. Het helpt ons om onze werkwijzen op elkaar af te stemmen en het maakt het makkelijker om componenten met elkaar te laten samenwerken. Hierbij wordt je even niet gehinderd door legacy systemen en ontwikkelagenda’s van gemeenten, zodat je makkelijker proof of concepts kunt maken. We werken hierbij overigens samen met NL Design System, zodat een burger een consistente gebruikerservaring krijgt, ook al bestaat een dienst uit componenten die door verschillende leveranciers gebouwd zijn.")),n.createElement("div",{className:"content-image-container"},n.createElement("p",null,n.createElement(M.Ee,{className:"utrecht-img--scale-down",alt:"illustratie van een persoon die een checklijst afvinkt",src:l})))),n.createElement("div",{className:"content-iblock"},n.createElement("section",{className:"content-isection"},n.createElement(M.XJ,null,"Demodam helpt om Common Ground te verbeteren."),n.createElement("p",{className:"content-p utrecht-paragraph"},"We stellen samen vast wat de minimale eisen aan componenten zijn op bijvoorbeeld het gebied van beveiliging, gebruiksvriendelijkheid en (code) standaarden. We leren daarbij van elkaar wat de best practises zijn. Het doel is uiteindelijk dat alle componenten op Demodam te zien zijn in een app store vergelijkbaar met die op je mobiele telefoon, waarbij je met een klik componenten en applicaties kunt installeren. Uiteraard moet je daarbij blind kunnen vertrouwen op de kwaliteit van de componenten. Daarmee verbetert Demodam de kwaliteit van het achterliggende Common Ground ecosysteem. Met name gebruiksvriendelijkheid en veiligheid hebben daarbij onze bijzondere aandacht.")),n.createElement("div",{className:"content-image-container"},n.createElement("p",null,n.createElement(M.Ee,{className:"utrecht-img--scale-down",alt:"illustratie van een persoon die een document bekijkt",src:o})))),n.createElement("div",{className:"content-iblock"},n.createElement("section",{className:"content-isection"},n.createElement(M.XJ,null,"Met Demodam kun je innoveren"),n.createElement("p",{className:"content-p utrecht-paragraph"},"Juist doordat er straks al een stevige basis staat, kun je daar makkelijk op voortborduren. Ter illustratie: stel je wilt een dienst ontwikkelen over verschillende overheden heen, bijvoorbeeld een klantreis waarbij je als burger in een vloeiend proces zowel je geboorteaangifte kunt doen (bij je gemeente) als kinderdagopvangtoeslag kunt aanvragen (bij de Belastingdienst). Dat is nu technisch en organisatorisch nog heel lastig, maar met Demodam staan er straks al een zaaksysteem, een BRP systeem en NLX voor je klaar, zodat je gelijk een vliegende start kunt maken.")),n.createElement("div",{className:"content-image-container"},n.createElement("p",null,n.createElement(M.Ee,{className:"utrecht-img--scale-down",alt:"illustratie van persoon met scherm acht de persoon met data",src:r}))))),d=a(9238),m=a(9341);var N=()=>n.createElement("div",{className:"hero-container"},n.createElement("hgroup",{className:"container"},n.createElement(M.nL,{className:"heading1"},"Demodam"),n.createElement("br",null),n.createElement(M.aC,{className:"heading3"},"Een digitale gemeente gebouwd op open source commonground componenten"),n.createElement("br",null),n.createElement("p",{className:"content-hero"},"Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten."),n.createElement("br",null),n.createElement("p",null,n.createElement("a",{"aria-label":"Link naar informatie voor demodam",href:"https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website",className:"lowerlink"},"Lees hier meer over Demodam"))),n.createElement("p",null,n.createElement(s.S,{className:"imghero",src:"../images/hero.png",alt:"artistieke illustratie van vrouw die naar huizen en een boom kijkt",imgStyle:{objectFit:"contain"},__imageData:a(9960)})));var D=()=>n.createElement(n.Fragment,null,n.createElement(M.nL,{className:"timelineheading"},"Tijdlijn"),n.createElement("section",{className:"timeline"},n.createElement("div",{className:"containert left"},n.createElement("section",{className:"textbox"},n.createElement("hgroup",null,n.createElement("p",{className:"datum"},"Juli 2021"),n.createElement(M.aC,{style:{margin:"1rem 0px 0.75rem"}},"Innovatiesubsidie toegekend")),n.createElement("p",null,"Het ministerie van Binnenlandse Zaken en Koninkrijksrelaties heeft Demodam een subsidie van 150.000 euro toegekend."))),n.createElement("div",{className:"containert right"},n.createElement("section",{className:"textbox"},n.createElement("hgroup",null,n.createElement("p",{className:"datum"},"5 Juli tot 9 Juli 2021"),n.createElement(M.aC,{style:{margin:"1rem 0px 0.75rem"}},"Eerste demodam hackathon")),n.createElement("p",null,"Samen werken aan een commonground etalage"),n.createElement("br",null),n.createElement("a",{href:"#",style:{color:"gray"}},"Informatie en inschrijven"))),n.createElement("div",{className:"containert left"},n.createElement("section",{className:"textbox"},n.createElement("hgroup",null,n.createElement("p",{className:"datum"},"24 Juni 2021 13:00"),n.createElement(M.aC,{style:{margin:"1rem 0px 0.75rem"}},"Tweede demodam hackathon")),n.createElement("p",null,"Onboarding en planning"),n.createElement("br",null),n.createElement("a",{href:"#",style:{color:"gray"}},"Informatie en inschrijven"))),n.createElement("div",{className:"containert right"},n.createElement("section",{className:"textbox"},n.createElement("hgroup",null,n.createElement("p",{className:"datum"},"Juli 2021"),n.createElement(M.aC,{style:{margin:"1rem 0px 0.75rem"}},"Kick-off Demodam")),n.createElement("p",null,"Lancering van Demodam")))));var u=()=>n.createElement(n.Fragment,null,n.createElement(i.GX,{href:"#main"},"Naar de inhoud"),n.createElement("div",{className:"page-container"},n.createElement(m.Z,null),n.createElement(N,null),n.createElement("div",{className:"content-wrap"},n.createElement("main",{id:"main"},n.createElement(c,null),n.createElement(w,null),n.createElement(D,null))),n.createElement(d.Z,null)));const g=()=>n.createElement(n.Fragment,null,n.createElement("html",{lang:"nl",dir:"ltr"}),n.createElement("meta",{charset:"utf-8"}),n.createElement("title",null,"Home Page — Demodam"))},4970:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/15ee4127b0aacca0104822f00588191b/e10cc/kadaster.png","srcSet":"/static/15ee4127b0aacca0104822f00588191b/20e60/kadaster.png 38w,\\n/static/15ee4127b0aacca0104822f00588191b/2f772/kadaster.png 75w,\\n/static/15ee4127b0aacca0104822f00588191b/e10cc/kadaster.png 150w,\\n/static/15ee4127b0aacca0104822f00588191b/3e681/kadaster.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/15ee4127b0aacca0104822f00588191b/690d5/kadaster.webp 38w,\\n/static/15ee4127b0aacca0104822f00588191b/c1186/kadaster.webp 75w,\\n/static/15ee4127b0aacca0104822f00588191b/03191/kadaster.webp 150w,\\n/static/15ee4127b0aacca0104822f00588191b/a74cc/kadaster.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":116}')},9678:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/832707d8a6083bcd68995c081148915c/e10cc/conduction.png","srcSet":"/static/832707d8a6083bcd68995c081148915c/20e60/conduction.png 38w,\\n/static/832707d8a6083bcd68995c081148915c/2f772/conduction.png 75w,\\n/static/832707d8a6083bcd68995c081148915c/e10cc/conduction.png 150w,\\n/static/832707d8a6083bcd68995c081148915c/3e681/conduction.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/832707d8a6083bcd68995c081148915c/690d5/conduction.webp 38w,\\n/static/832707d8a6083bcd68995c081148915c/c1186/conduction.webp 75w,\\n/static/832707d8a6083bcd68995c081148915c/03191/conduction.webp 150w,\\n/static/832707d8a6083bcd68995c081148915c/a74cc/conduction.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":37}')},1297:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6967843c671fb397d2824e6d7763c78a/e10cc/dimpact.png","srcSet":"/static/6967843c671fb397d2824e6d7763c78a/20e60/dimpact.png 38w,\\n/static/6967843c671fb397d2824e6d7763c78a/2f772/dimpact.png 75w,\\n/static/6967843c671fb397d2824e6d7763c78a/e10cc/dimpact.png 150w,\\n/static/6967843c671fb397d2824e6d7763c78a/3e681/dimpact.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/6967843c671fb397d2824e6d7763c78a/690d5/dimpact.webp 38w,\\n/static/6967843c671fb397d2824e6d7763c78a/c1186/dimpact.webp 75w,\\n/static/6967843c671fb397d2824e6d7763c78a/03191/dimpact.webp 150w,\\n/static/6967843c671fb397d2824e6d7763c78a/a74cc/dimpact.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":44}')},9960:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/50bbfa59b2031d5cf4344d6ac5166acf/1a366/hero.png","srcSet":"/static/50bbfa59b2031d5cf4344d6ac5166acf/8bb43/hero.png 219w,\\n/static/50bbfa59b2031d5cf4344d6ac5166acf/f7911/hero.png 439w,\\n/static/50bbfa59b2031d5cf4344d6ac5166acf/1a366/hero.png 877w","sizes":"(min-width: 877px) 877px, 100vw"},"sources":[{"srcSet":"/static/50bbfa59b2031d5cf4344d6ac5166acf/3a9de/hero.webp 219w,\\n/static/50bbfa59b2031d5cf4344d6ac5166acf/02404/hero.webp 439w,\\n/static/50bbfa59b2031d5cf4344d6ac5166acf/1fb8b/hero.webp 877w","type":"image/webp","sizes":"(min-width: 877px) 877px, 100vw"}]},"width":877,"height":650}')},1263:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/881e5ff0ebe176b4a429f31e6576e52d/e10cc/maykinmedia.png","srcSet":"/static/881e5ff0ebe176b4a429f31e6576e52d/20e60/maykinmedia.png 38w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/2f772/maykinmedia.png 75w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/e10cc/maykinmedia.png 150w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/3e681/maykinmedia.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/881e5ff0ebe176b4a429f31e6576e52d/690d5/maykinmedia.webp 38w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/c1186/maykinmedia.webp 75w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/03191/maykinmedia.webp 150w,\\n/static/881e5ff0ebe176b4a429f31e6576e52d/a74cc/maykinmedia.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":32}')},1809:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/03041e98969241c7d2d2dadfaff70e20/e10cc/foundation-for-public-code.png","srcSet":"/static/03041e98969241c7d2d2dadfaff70e20/20e60/foundation-for-public-code.png 38w,\\n/static/03041e98969241c7d2d2dadfaff70e20/2f772/foundation-for-public-code.png 75w,\\n/static/03041e98969241c7d2d2dadfaff70e20/e10cc/foundation-for-public-code.png 150w,\\n/static/03041e98969241c7d2d2dadfaff70e20/3e681/foundation-for-public-code.png 300w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/03041e98969241c7d2d2dadfaff70e20/690d5/foundation-for-public-code.webp 38w,\\n/static/03041e98969241c7d2d2dadfaff70e20/c1186/foundation-for-public-code.webp 75w,\\n/static/03041e98969241c7d2d2dadfaff70e20/03191/foundation-for-public-code.webp 150w,\\n/static/03041e98969241c7d2d2dadfaff70e20/a74cc/foundation-for-public-code.webp 300w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":52}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f16b1b6fc6ed476eb361.js.map