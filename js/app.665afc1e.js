(function(e){function t(t){for(var a,r,i=t[0],u=t[1],c=t[2],m=0,b=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&b.push(l[r][0]),l[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==l[u]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("f2bf"),l=n("3fd4");n("7dd6");function o(e,t,n,l,o,r){var i=Object(a["K"])("FakeImage");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["m"])(i)])}n("99af");var r=Object(a["l"])("Fake Image Generator"),i=Object(a["m"])("div",{class:"github"},[Object(a["m"])("a",{style:{"text-decoration":"none",color:"#fff"},href:"http://youtube.com/fullstackweb",target:"_blank"},"Youtube")],-1),u={style:{margin:"0 auto"}},c={alt:"Preview Image",id:"imagePreview"},d=Object(a["l"])("Download Image");function m(e,t,n,l,o,m){var b=Object(a["K"])("el-col"),f=Object(a["K"])("el-row"),g=Object(a["K"])("el-header"),O=Object(a["K"])("el-input"),h=Object(a["K"])("el-form-item"),j=Object(a["K"])("el-color-picker"),p=Object(a["K"])("el-slider"),s=Object(a["K"])("el-radio"),y=Object(a["K"])("el-radio-group"),v=Object(a["K"])("el-form"),x=Object(a["K"])("el-main"),w=Object(a["K"])("el-container"),_=Object(a["K"])("el-button");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["m"])(w,null,{default:Object(a["Z"])((function(){return[Object(a["m"])(g,null,{default:Object(a["Z"])((function(){return[Object(a["m"])(f,null,{default:Object(a["Z"])((function(){return[Object(a["m"])(b,{span:12},{default:Object(a["Z"])((function(){return[r]})),_:1}),Object(a["m"])(b,{span:12},{default:Object(a["Z"])((function(){return[i]})),_:1})]})),_:1})]})),_:1}),Object(a["m"])(x,null,{default:Object(a["Z"])((function(){return[Object(a["m"])(f,null,{default:Object(a["Z"])((function(){return[Object(a["m"])(b,{span:12,offset:6},{default:Object(a["Z"])((function(){return[Object(a["m"])(v,{"label-width":"150px",size:"mini","label-position":"left",class:"image-form"},{default:Object(a["Z"])((function(){return[Object(a["m"])(h,{label:"Width"},{default:Object(a["Z"])((function(){return[Object(a["m"])(O,{onChange:m.generateImage,modelValue:o.image.width,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.image.width=e})},null,8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Height"},{default:Object(a["Z"])((function(){return[Object(a["m"])(O,{onChange:m.generateImage,modelValue:o.image.height,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.image.height=e})},null,8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Text Color"},{default:Object(a["Z"])((function(){return[Object(a["m"])(j,{onChange:m.generateImage,modelValue:o.image.textcolor,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.image.textcolor=e})},null,8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Background Color"},{default:Object(a["Z"])((function(){return[Object(a["m"])(j,{onChange:m.generateImage,modelValue:o.image.bgcolor,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.image.bgcolor=e})},null,8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Font Size"},{default:Object(a["Z"])((function(){return[Object(a["m"])(p,{onChange:m.generateImage,min:10,max:200,modelValue:o.image.textSize,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.image.textSize=e}),"show-input":""},null,8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Font Style"},{default:Object(a["Z"])((function(){return[Object(a["m"])(y,{onChange:m.generateImage,modelValue:o.image.textFontStyle,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.image.textFontStyle=e})},{default:Object(a["Z"])((function(){return[Object(a["m"])(s,{label:"Normal"}),Object(a["m"])(s,{label:"Bold"}),Object(a["m"])(s,{label:"Italic"})]})),_:1},8,["onChange","modelValue"])]})),_:1}),Object(a["m"])(h,{label:"Data URI"},{default:Object(a["Z"])((function(){return[Object(a["m"])(O,{type:"textarea",modelValue:o.inputDataUrl,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.inputDataUrl=e}),readonly:"readonly"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(a["m"])(f,null,{default:Object(a["Z"])((function(){return[Object(a["m"])("div",u,[Object(a["ab"])(Object(a["m"])("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=function(e){return o.inputDataUrl=e}),readonly:""},null,512),[[a["W"],!1],[a["V"],o.inputDataUrl]]),Object(a["ab"])(Object(a["m"])("img",c,null,512),[[a["W"],!1]])])]})),_:1}),m.downloadValidate?(Object(a["D"])(),Object(a["i"])("a",{key:0,style:{"text-decoration":"none"},href:o.inputDataUrl,download:"fake-image-".concat(o.image.width,"_").concat(e.image_height)},[Object(a["m"])(_,{type:"primary",style:{margin:"20px auto",display:"block"}},{default:Object(a["Z"])((function(){return[d]})),_:1})],8,["href","download"])):Object(a["j"])("",!0)])}var b={name:"FakeImage",data:function(){return{inputDataUrl:"",image:{width:600,height:200,bgcolor:"#ddd",textcolor:"#000",text:"sumon",textSize:20,textFontStyle:"normal"}}},computed:{downloadValidate:function(){return this.image.height>50&&this.image.width>50}},methods:{downloadImage:function(){console.log(this.inputDataUrl)},generateImage:function(){var e=this.createPlaceholderCanvas(),t=e.toDataURL(),n=document.getElementById("imagePreview");this.inputDataUrl=t,n.src=t,n.style.display="block",n.style.maxWidth="".concat(this.image.width,"px")},createPlaceholderCanvas:function(){var e=document.createElement("canvas"),t=e.getContext("2d");return e.width=this.image.width,e.height=this.image.height,t.fillStyle=this.image.bgcolor,t.fillRect(0,0,e.width,e.height),t.font=this.image.textFontStyle+" "+this.image.textSize+"px sans-serif",t.fillStyle=this.image.textcolor,t.textAlign="center",t.textBaseline="middle",t.fillText("".concat(this.image.width,"x").concat(this.image.height),e.width/2,e.height/2),e}},mounted:function(){this.generateImage()}};n("b0b5");b.render=m;var f=b,g={name:"App",components:{FakeImage:f}};g.render=o;var O=g,h=Object(a["h"])(O);h.use(l["a"]),h.mount("#app")},"5a91":function(e,t,n){},b0b5:function(e,t,n){"use strict";n("5a91")}});
//# sourceMappingURL=app.665afc1e.js.map