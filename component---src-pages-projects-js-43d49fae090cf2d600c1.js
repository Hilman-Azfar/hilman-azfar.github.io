(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return m}));var a=r("4416"),i=r("7t0v"),n=r("q1tI"),s=r.n(n),o=r("9eSz"),l=r.n(o),d=r("vOnD"),u=r("vrFN"),c=d.default.div.withConfig({displayName:"projects__Panel",componentId:"sc-1bxmbzc-0"})(["background:#c4c4c4;width:100%;height:100%;flex:0 0 100%;display:flex;justify-content:center;transition:0.3s ease-in;"]),f=d.default.div.withConfig({displayName:"projects__Slide",componentId:"sc-1bxmbzc-1"})(["width:100%;height:100%;flex:0 0 100%;padding:10px;background:black;color:white;transition:0.3s ease-in;"]),p=d.default.div.withConfig({displayName:"projects__SlideWrapper",componentId:"sc-1bxmbzc-2"})(["display:flex;overflow-x:hidden;&:hover{> div:first-child{opacity:0;}> div:last-child{transform:translatex(-100%);}}"]),g=function(e){var t=e.img;return s.a.createElement(p,null,s.a.createElement(c,null,s.a.createElement(l.a,{fixed:t})),s.a.createElement(f,null,s.a.createElement("h3",null,"Work In Progress"),s.a.createElement("p",null,"I still working on the projects!")))};t.default=function(e){var t=e.data,r=Object(n.useContext)(a.a);return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{title:"Home"}),s.a.createElement(i.a,{columns:"small"===r?{count:1,size:"auto"}:{count:3,size:"auto"},gap:"medium",rows:["350px"]},s.a.createElement(g,{img:t.project1.childImageSharp.fixed}),s.a.createElement(g,null),s.a.createElement(g,null)))};var m="3385426498"},"7t0v":function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var a=r("q1tI"),i=r.n(a),n=r("vOnD"),s=r("/Rk8"),o=r("+Wdg"),l={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},d=Object(n.css)(["align-items:",";"],(function(e){return l[e.align]})),u={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},c=Object(n.css)(["align-content:",";"],(function(e){return u[e.alignContent]})),f={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},p=Object(n.css)(["justify-items:",";"],(function(e){return f[e.justify]})),g={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},m=Object(n.css)(["justify-content:",";"],(function(e){return g[e.justifyContent]})),h={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},b=function(e,t){return Array.isArray(e)?"minmax("+(t.global.size[e[0]]||e[0])+", "+(t.global.size[e[1]]||e[1])+")":"flex"===e?"1fr":"minmax("+(t.global.size[e]||e)+", 1fr)"},y=function(e,t,r){var a=h[e];return!r||!a||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),a||t.theme.global.size[e]||e},v=n.default.div.attrs((function(e){return{"aria-label":e.a11yTitleProp}})).withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," "," ",""],s.c,(function(e){return e.fillContainer&&("horizontal"===(t=e.fillContainer)?"width: 100%;":"vertical"===t?"height: 100%;":t?"\n      width: 100%;\n      height: 100%;\n    ":void 0);var t}),(function(e){return e.align&&d}),(function(e){return e.alignContent&&c}),(function(e){return e.areas&&function(e){if(Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays."),Array.isArray(e.areas)&&e.areas.every((function(e){return Array.isArray(e)})))return"grid-template-areas: "+e.areas.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";";var t=e.rowsProp.map((function(){return e.columns.map((function(){return"."}))}));return e.areas.forEach((function(e){for(var r=e.start[1];r<=e.end[1];r+=1)for(var a=e.start[0];a<=e.end[0];a+=1)t[r][a]=e.name})),"grid-template-areas: "+t.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";"}(e)}),(function(e){return e.columns&&function(e){return Array.isArray(e.columns)?Object(n.css)(["grid-template-columns:",";"],e.columns.map((function(t){return Array.isArray(t)?"minmax("+y(t[0],e)+", "+y(t[1],e)+")":y(t,e)})).join(" ")):"object"==typeof e.columns?Object(n.css)(["grid-template-columns:repeat( ",","," );"],"number"==typeof(t=e.columns.count)?t:"auto-"+t,b(e.columns.size,e.theme)):Object(n.css)(["grid-template-columns:repeat( auto-fill,"," );"],b(e.columns,e.theme));var t}(e)}),(function(e){return e.gap&&function(e){if("string"==typeof e.gap){var t=e.theme.global.edgeSize[e.gap]||e.gap;return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":e.gap.row?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n    ":e.gap.column?"\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":""}(e)}),(function(e){return e.justify&&p}),(function(e){return e.justifyContent&&m}),(function(e){return e.pad&&Object(s.b)("padding",e.pad,e.responsive,e.theme.global.edgeSize.responsiveBreakpoint,e.theme)}),(function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?Object(n.css)(["grid-template-rows:",";"],e.rowsProp.map((function(t){return Array.isArray(t)?"minmax("+y(t[0],e,!0)+", "+y(t[1],e,!0)+")":y(t,e,!0)})).join(" ")):Object(n.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)}),(function(e){return e.theme.grid&&e.theme.grid.extend}));function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}v.defaultProps={},Object.setPrototypeOf(v.defaultProps,o.a);var S=Object(a.forwardRef)((function(e,t){var r=e.a11yTitle,a=e.fill,n=e.responsive,s=void 0===n||n,o=e.rows,l=e.tag,d=e.as,u=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["a11yTitle","fill","responsive","rows","tag","as"]);return i.a.createElement(v,w({ref:t,a11yTitleProp:r,as:!d&&l?l:d,fillContainer:a,responsive:s,rowsProp:o},u))}));S.displayName="Grid";var x=S;x.available="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")},"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),l=a(r("pVnL")),d=a(r("q1tI")),u=a(r("17x9")),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=g(t||r||[]);return a&&a.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),r=p(t);return m[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+o+r+a+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(R,(0,l.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,i(a),o):o})),R=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,O=e.draggable,z=m||h;if(!z)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:C?1:0,transition:P?"opacity "+y+"ms":"none"},o),k="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},A=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&T,o,f),H={title:t,alt:this.state.isVisible?"":r,style:A,className:p,itemProp:w},N=this.state.isHydrated?g(z):z[0];if(m)return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),k&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&T)}),N.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:H,imageVariants:z,generateSources:j}),N.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:H,imageVariants:z,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(z),d.default.createElement(R,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:r,title:t,loading:x},N,{imageVariants:z}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},k&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},P&&T)}),N.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:H,imageVariants:z,generateSources:j}),N.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:H,imageVariants:z,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(z),d.default.createElement(R,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:r,title:t,loading:x},N,{imageVariants:z}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}C.propTypes={resolutions:P,sizes:V,fixed:k(u.default.oneOfType([P,u.default.arrayOf(P)])),fluid:k(u.default.oneOfType([V,u.default.arrayOf(V)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=C;t.default=T}}]);
//# sourceMappingURL=component---src-pages-projects-js-43d49fae090cf2d600c1.js.map