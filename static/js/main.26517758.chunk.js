(this.webpackJsonpface_detect=this.webpackJsonpface_detect||[]).push([[0],{34:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},76:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var o=n(5),c=n.n(o),a=n(24),i=n.n(a),r=(n(34),n(25)),s=n(26),l=n(29),b=n(28),u=n(0),d=(n(36),function(t){var e=t.onInputChange,n=t.onButtonSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"f2 b mt5 mb2 helvetica light-purple washed-green",children:"[ face.detect ]"}),Object(u.jsx)("p",{className:"f4 mt1 mb5 helvetica gold",children:"detect faces in images"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"center form pa4 br3 shadow-5",children:[Object(u.jsx)("input",{className:"f4 pa2 w-70 center1 b--gold",type:"text",placeHolder:"Enter an image URL here ..",onChange:e}),Object(u.jsx)("button",{className:"w-30 br1 b--gold ml2 f5 b link ph3 pv2 dib near-black bg-gold pointer",onClick:n,children:" Detect "})]})})]})}),f=(n(37),function(t){var e=t.imageUrl,n=(t.box,t.boxInfo);return Object(u.jsx)("div",{className:"center mt5",children:Object(u.jsxs)("div",{className:"imageContainer",children:[Object(u.jsx)("img",{id:"inputImage",className:"imageArea",alt:"",src:e}),n.map((function(t,e){return Object(u.jsx)("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}},e)}))]})})}),m=n(27),h=n.n(m),p=(n(76),new h.a.App({apiKey:"35426aed9e7c48d7b630462d82d494bb"})),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).onInputChange=function(t){o.setState({input:t.target.value}),o.setState({boxInfo:[]})},o.onButtonSubmit=function(){p.models.predict({id:"a403429f2ddf4b49b307e318f00e528b",version:"34ce21a40cc24b6b96ffee54aabff139"},o.state.input).then((function(t){console.log(t),o.setRegionInfo(t)})).catch((function(t){return console.log("Clarifai Error:",t)}))},o.calculateFaceLocation=function(t){var e=t.region_info.bounding_box,n=document.getElementById("inputImage"),o=Number(n.width),c=Number(n.height);return{leftCol:e.left_col*o,topRow:e.top_row*c,rightCol:o-e.right_col*o,bottomRow:c-e.bottom_row*c}},o.setRegionInfo=function(t){var e=t.outputs[0].data.regions,n=[];e.forEach((function(t){var e=o.calculateFaceLocation(t),c={id:t.id,leftCol:e.leftCol,topRow:e.topRow,rightCol:e.rightCol,bottomRow:e.bottomRow};n.push(c)})),o.setState({boxInfo:n})},o.drawBoundingBox=function(t){o.setState({box:t})},o.state={input:"",imageUrl:"",boxInfo:[]},o}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(u.jsx)(f,{box:this.state.box,boxInfo:this.state.boxInfo,imageUrl:this.state.input})]})}}]),n}(o.Component);n(77);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.26517758.chunk.js.map