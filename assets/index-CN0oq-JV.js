var kl=Object.defineProperty;var Fl=(s,t,e)=>t in s?kl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var B=(s,t,e)=>Fl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="174",Nl=0,ka=1,Bl=2,Vo=1,Wo=2,dn=3,Cn=0,Re=1,Je=2,En=0,ui=1,Fa=2,Na=3,Ba=4,Ol=5,zn=100,zl=101,Gl=102,Hl=103,Vl=104,Wl=200,Xl=201,ql=202,Yl=203,Sr=204,wr=205,$l=206,Kl=207,jl=208,Zl=209,Jl=210,Ql=211,tc=212,ec=213,nc=214,br=0,Tr=1,Er=2,gi=3,Ar=4,Cr=5,Rr=6,Pr=7,Xo=0,ic=1,sc=2,An=0,rc=1,ac=2,oc=3,qo=4,lc=5,cc=6,hc=7,Yo=300,_i=301,vi=302,Lr=303,Dr=304,Ds=306,Vi=1e3,Vn=1001,Ir=1002,Oe=1003,dc=1004,Zi=1005,tn=1006,Ns=1007,Wn=1008,gn=1009,$o=1010,Ko=1011,Wi=1012,ha=1013,Xn=1014,en=1015,qi=1016,da=1017,ua=1018,xi=1020,jo=35902,Zo=1021,Jo=1022,Ke=1023,Qo=1024,tl=1025,fi=1026,yi=1027,fa=1028,pa=1029,el=1030,ma=1031,ga=1033,Ss=33776,ws=33777,bs=33778,Ts=33779,Ur=35840,kr=35841,Fr=35842,Nr=35843,Br=36196,Or=37492,zr=37496,Gr=37808,Hr=37809,Vr=37810,Wr=37811,Xr=37812,qr=37813,Yr=37814,$r=37815,Kr=37816,jr=37817,Zr=37818,Jr=37819,Qr=37820,ta=37821,Es=36492,ea=36494,na=36495,nl=36283,ia=36284,sa=36285,ra=36286,uc=3200,fc=3201,il=0,pc=1,bn="",Ne="srgb",Mi="srgb-linear",Cs="linear",ae="srgb",Kn=7680,Oa=519,mc=512,gc=513,_c=514,sl=515,vc=516,xc=517,yc=518,Mc=519,za=35044,Ga="300 es",un=2e3,Rs=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,aa=180/Math.PI;function Yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function Sc(s,t){return(s%t+t)%t}function Os(s,t,e){return(1-e)*s+e*t}function Li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],M=i[1],_=i[4],v=i[7],A=i[2],E=i[5],T=i[8];return r[0]=a*x+o*M+l*A,r[3]=a*m+o*_+l*E,r[6]=a*f+o*v+l*T,r[1]=c*x+h*M+u*A,r[4]=c*m+h*_+u*E,r[7]=c*f+h*v+u*T,r[2]=d*x+p*M+g*A,r[5]=d*m+p*_+g*E,r[8]=d*f+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new Vt;function rl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wc(){const s=Ps("canvas");return s.style.display="block",s}const Ha={};function Nn(s){s in Ha||(Ha[s]=!0,console.warn(s))}function bc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ec(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Va=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ac(){const s={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=pn(i.r),i.g=pn(i.g),i.b=pn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?Cs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mi]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const ne=Ac();function pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jn;class Cc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Ps("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rc=0;class _a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class Ee extends Ti{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Vn,i=Vn,r=tn,a=Wn,o=Ke,l=gn,c=Ee.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Yi(),this.name="",this.source=new _a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Yo;Ee.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(p+1)/2,A=(f+1)/2,E=(h+d)/4,T=(u+x)/4,C=(g+m)/4;return _>v&&_>A?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=T/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=C/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new _a(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class al extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dc extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*x,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,f*M);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const v=o*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new P,Xa=new Ei;class Yn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),Qi.subVectors(this.max,Di),Zn.subVectors(t.a,Di),Jn.subVectors(t.b,Di),Qn.subVectors(t.c,Di),vn.subVectors(Jn,Zn),xn.subVectors(Qn,Jn),Ln.subVectors(Zn,Qn);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Ln.z,Ln.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Ln.z,0,-Ln.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Ln.y,Ln.x,0];return!Vs(e,Zn,Jn,Qn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Zn,Jn,Qn,Qi))?!1:(ts.crossVectors(vn,xn),e=[ts.x,ts.y,ts.z],Vs(e,Zn,Jn,Qn,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new P,new P,new P,new P,new P,new P,new P,new P],Xe=new P,Ji=new Yn,Zn=new P,Jn=new P,Qn=new P,vn=new P,xn=new P,Ln=new P,Di=new P,Qi=new P,ts=new P,Dn=new P;function Vs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Dn.fromArray(s,r);const o=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ic=new Yn,Ii=new P,Ws=new P;class Ai{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ic.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(Ws)),this.expandByPoint(Ii.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new P,Xs=new P,es=new P,yn=new P,qs=new P,ns=new P,Ys=new P;class ol{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xs.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=yn.dot(this.direction),l=-yn.dot(es),c=yn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xs).addScaledVector(es,d),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){qs.subVectors(e,t),ns.subVectors(n,t),Ys.crossVectors(qs,ns);let a=this.direction.dot(Ys),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,t);const l=o*this.direction.dot(ns.crossVectors(yn,ns));if(l<0)return null;const c=o*this.direction.dot(qs.cross(yn));if(c<0||l+c>a)return null;const h=-o*yn.dot(Ys);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),a=1/ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uc,t,kc)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Mn.crossVectors(n,ke),Mn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Mn.crossVectors(n,ke)),Mn.normalize(),is.crossVectors(ke,Mn),i[0]=Mn.x,i[4]=is.x,i[8]=ke.x,i[1]=Mn.y,i[5]=is.y,i[9]=ke.y,i[2]=Mn.z,i[6]=is.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],_=n[7],v=n[11],A=n[15],E=i[0],T=i[4],C=i[8],S=i[12],y=i[1],L=i[5],U=i[9],F=i[13],q=i[2],Z=i[6],X=i[10],J=i[14],z=i[3],rt=i[7],at=i[11],wt=i[15];return r[0]=a*E+o*y+l*q+c*z,r[4]=a*T+o*L+l*Z+c*rt,r[8]=a*C+o*U+l*X+c*at,r[12]=a*S+o*F+l*J+c*wt,r[1]=h*E+u*y+d*q+p*z,r[5]=h*T+u*L+d*Z+p*rt,r[9]=h*C+u*U+d*X+p*at,r[13]=h*S+u*F+d*J+p*wt,r[2]=g*E+x*y+m*q+f*z,r[6]=g*T+x*L+m*Z+f*rt,r[10]=g*C+x*U+m*X+f*at,r[14]=g*S+x*F+m*J+f*wt,r[3]=M*E+_*y+v*q+A*z,r[7]=M*T+_*L+v*Z+A*rt,r[11]=M*C+_*U+v*X+A*at,r[15]=M*S+_*F+v*J+A*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,_=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,A=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,E=e*M+n*_+i*v+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*T,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*T,t[4]=_*T,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*T,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*T,t[8]=v*T,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=A*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,M=l*c,_=l*h,v=l*u,A=n.x,E=n.y,T=n.z;return i[0]=(1-(x+f))*A,i[1]=(p+v)*A,i[2]=(g-_)*A,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+f))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(m-M)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ti.set(i[0],i[1],i[2]).length();const a=ti.set(i[4],i[5],i[6]).length(),o=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/r,h=1/a,u=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=un){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===un)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=un){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,x;if(o===un)g=(a+r)*u,x=-2*u;else if(o===Rs)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ti=new P,qe=new le,Uc=new P(0,0,0),kc=new P(1,1,1),Mn=new P,is=new P,ke=new P,qa=new le,Ya=new Ei;class sn{constructor(t=0,e=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ya.setFromEuler(this),this.setFromQuaternion(Ya,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fc=0;const $a=new P,ei=new Ei,ln=new le,ss=new P,Ui=new P,Nc=new P,Bc=new Ei,Ka=new P(1,0,0),ja=new P(0,1,0),Za=new P(0,0,1),Ja={type:"added"},Oc={type:"removed"},ni={type:"childadded",child:null},$s={type:"childremoved",child:null};class pe extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new sn,n=new Ei,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Vt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis(Za,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis(Za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ui,ss,this.up):ln.lookAt(ss,Ui,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(ln),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),ni.child=t,this.dispatchEvent(ni),ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oc),$s.child=t,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),ni.child=t,this.dispatchEvent(ni),ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new P,cn=new P,Ks=new P,hn=new P,ii=new P,si=new P,Qa=new P,js=new P,Zs=new P,Js=new P,Qs=new oe,tr=new oe,er=new oe;class $e{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),cn.subVectors(n,e),Ks.subVectors(t,e);const a=Ye.dot(Ye),o=Ye.dot(cn),l=Ye.dot(Ks),c=cn.dot(cn),h=cn.dot(Ks),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Qs.setScalar(0),tr.setScalar(0),er.setScalar(0),Qs.fromBufferAttribute(t,e),tr.fromBufferAttribute(t,n),er.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Qs,r.x),a.addScaledVector(tr,r.y),a.addScaledVector(er,r.z),a}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),cn.subVectors(t,e),Ye.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ye.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),js.subVectors(t,n);const l=ii.dot(js),c=si.dot(js);if(l<=0&&c<=0)return e.copy(n);Zs.subVectors(t,i);const h=ii.dot(Zs),u=si.dot(Zs);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ii,a);Js.subVectors(t,r);const p=ii.dot(Js),g=si.dot(Js);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(si,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Qa.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Qa,o);const f=1/(m+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function nr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Sc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nr(a,r,t+1/3),this.g=nr(a,r,t),this.b=nr(a,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ne.fromWorkingColorSpace(Te.copy(this),t),Math.round($t(Te.r*255,0,255))*65536+Math.round($t(Te.g*255,0,255))*256+Math.round($t(Te.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ne){ne.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(rs);const n=Os(Sn.h,rs.h,e),i=Os(Sn.s,rs.s,e),r=Os(Sn.l,rs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=cl;let zc=0;class Ci extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=ui,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=wr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kn,this.stencilZFail=Kn,this.stencilZPass=Kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==wr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Is extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new P,as=new Kt;let Gc=0;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Li(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Li(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Li(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class hl extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dl extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hc=0;const He=new le,ir=new pe,ri=new P,Fe=new Yn,ki=new Yn,Me=new P;class Pe extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rl(t)?dl:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return ir.lookAt(t),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Fe.min,ki.min),Fe.expandByPoint(Me),Me.addVectors(Fe.max,ki.max),Fe.expandByPoint(Me)):(Fe.expandByPoint(ki.min),Fe.expandByPoint(ki.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(t,c),Me.add(ri)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;const c=new P,h=new P,u=new P,d=new Kt,p=new Kt,g=new Kt,x=new P,m=new P;function f(C,S,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(x),o[S].add(x),o[y].add(x),l[C].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){const y=M[C],L=y.start,U=y.count;for(let F=L,q=L+U;F<q;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new P,v=new P,A=new P,E=new P;function T(C){A.fromBufferAttribute(i,C),E.copy(A);const S=o[C];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(E,S);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,L)}for(let C=0,S=M.length;C<S;++C){const y=M[C],L=y.start,U=y.count;for(let F=L,q=L+U;F<q;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new le,In=new ol,os=new Ai,eo=new P,ls=new P,cs=new P,hs=new P,sr=new P,ds=new P,no=new P,us=new P;class Y extends pe{constructor(t=new Pe,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(sr.fromBufferAttribute(u,t),a?ds.addScaledVector(sr,h):ds.addScaledVector(sr.sub(e),h))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(os.containsPoint(In.origin)===!1&&(In.intersectSphere(os,eo)===null||In.origin.distanceToSquared(eo)>(t.far-t.near)**2))&&(to.copy(r).invert(),In.copy(t.ray).applyMatrix4(to),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,A=_;v<A;v+=3){const E=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=fs(this,f,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);i=fs(this,a,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,A=_;v<A;v+=3){const E=v,T=v+1,C=v+2;i=fs(this,f,t,n,c,h,u,E,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=m,_=m+1,v=m+2;i=fs(this,a,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Vc(s,t,e,n,i,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Cn,o),l===null)return null;us.copy(o),us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:s}}function fs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ls),s.getVertexPosition(l,cs),s.getVertexPosition(c,hs);const h=Vc(s,t,e,n,ls,cs,hs,no);if(h){const u=new P;$e.getBarycoord(no,ls,cs,hs,u),i&&(h.uv=$e.getInterpolatedAttribute(i,o,l,c,u,new Kt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,o,l,c,u,new Kt)),a&&(h.normal=$e.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};$e.getNormal(ls,cs,hs,d.normal),h.face=d,h.barycoord=u}return h}class yt extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(x,m,f,M,_,v,A,E,T,C,S){const y=v/T,L=A/C,U=v/2,F=A/2,q=E/2,Z=T+1,X=C+1;let J=0,z=0;const rt=new P;for(let at=0;at<X;at++){const wt=at*L-F;for(let K=0;K<Z;K++){const ct=K*y-U;rt[x]=ct*M,rt[m]=wt*_,rt[f]=q,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[f]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(K/T),u.push(1-at/C),J+=1}}for(let at=0;at<C;at++)for(let wt=0;wt<T;wt++){const K=d+wt+Z*at,ct=d+wt+Z*(at+1),O=d+(wt+1)+Z*(at+1),V=d+(wt+1)+Z*at;l.push(K,ct,V),l.push(ct,O,V),z+=6}o.addGroup(p,z,S),p+=z,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Si(s[e]);for(const i in n)t[i]=n[i]}return t}function Wc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ul(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Xc={clone:Si,merge:Ce};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=Wc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new P,io=new Kt,so=new Kt;class Be extends fl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,io,so),e.subVectors(so,io)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class $c extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(ai,oi,t,e);i.layers=this.layers,this.add(i);const r=new Be(ai,oi,t,e);r.layers=this.layers,this.add(r);const a=new Be(ai,oi,t,e);a.layers=this.layers,this.add(a);const o=new Be(ai,oi,t,e);o.layers=this.layers,this.add(o);const l=new Be(ai,oi,t,e);l.layers=this.layers,this.add(l);const c=new Be(ai,oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pl extends Ee{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kc extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yt(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:En});r.uniforms.tEquirect.value=e;const a=new Y(i,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=tn),new $c(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Lt extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jc={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class va{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new va(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zc extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jc extends Ee{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Oe,h=Oe,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const li=new le,ao=new le,ps=[],oo=new Yn,Qc=new le,Fi=new Y,Ni=new Ai;class Bi extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,li),oo.copy(t.boundingBox).applyMatrix4(li),this.boundingBox.union(oo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,li),Ni.copy(t.boundingSphere).applyMatrix4(li),this.boundingSphere.union(Ni)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(n),t.ray.intersectsSphere(Ni)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,li),ao.multiplyMatrices(n,li),Fi.matrixWorld=ao,Fi.raycast(t,ps);for(let a=0,o=ps.length;a<o;a++){const l=ps[a];l.instanceId=r,l.object=this,e.push(l)}ps.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jc(new Float32Array(i*this.count),i,this.count,fa,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ar=new P,th=new P,eh=new Vt;class Bn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ar.subVectors(n,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||eh.getNormalMatrix(t),i=this.coplanarPoint(ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Ai,ms=new P;class xa{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],M=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+g,v+M).normalize(),n[3].setComponents(l-a,d-h,m-g,v-M).normalize(),n[4].setComponents(l-o,d-u,m-x,v-_).normalize(),e===un)n[5].setComponents(l+o,d+u,m+x,v+_).normalize();else if(e===Rs)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lo=new le,oa=new ol,gs=new Ai,_s=new P;class nh extends pe{constructor(t=new Pe,e=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;lo.copy(i).invert(),oa.copy(t.ray).applyMatrix4(lo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);_s.fromBufferAttribute(u,m),co(_s,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)_s.fromBufferAttribute(u,g),co(_s,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function co(s,t,e,n,i,r,a){const o=oa.distanceSqToPoint(s);if(o<e){const l=new P;oa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ih extends Ee{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gl extends Ee{constructor(t,e,n,i,r,a,o,l,c,h=fi){if(h!==fi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=Xn),n===void 0&&h===yi&&(n=xi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sh{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Kt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,i=[],r=[],a=[],o=new P,l=new le;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($t(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos($t(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ya(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const vs=new P,or=new ya,lr=new ya,cr=new ya;class rh extends sh{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(vs.subVectors(i[0],i[1]).add(i[0]),c=vs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(vs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),or.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),lr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),cr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(or.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(or.calc(l),lr.calc(l),cr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ma extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new Kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function M(){const v=new P,A=new P;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const S=[],y=C/r,L=y*(e-t)+t;for(let U=0;U<=i;U++){const F=U/i,q=F*l+o,Z=Math.sin(q),X=Math.cos(q);A.x=L*Z,A.y=-y*n+m,A.z=L*X,u.push(A.x,A.y,A.z),v.set(Z,T,X).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-y),S.push(g++)}x.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const y=x[S][C],L=x[S+1][C],U=x[S+1][C+1],F=x[S][C+1];(t>0||S!==0)&&(h.push(y,L,F),E+=3),(e>0||S!==r-1)&&(h.push(L,U,F),E+=3)}c.addGroup(f,E,0),f+=E}function _(v){const A=g,E=new Kt,T=new P;let C=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let U=0;U<=i;U++){const q=U/i*l+o,Z=Math.cos(q),X=Math.sin(q);T.x=S*X,T.y=m*y,T.z=S*Z,u.push(T.x,T.y,T.z),d.push(0,y,0),E.x=Z*.5+.5,E.y=X*.5*y+.5,p.push(E.x,E.y),g++}for(let U=0;U<i;U++){const F=A+U,q=L+U;v===!0?h.push(q,q+1,F):h.push(q+1,q,F),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nn extends Zt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $i extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new P,v=new P,A=new P;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],v),p(e[E+2],A),l(_,v,A,M)}function l(M,_,v,A){const E=A+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const S=M.clone().lerp(v,C/E),y=_.clone().lerp(v,C/E),L=E-C;for(let U=0;U<=L;U++)U===0&&C===E?T[C][U]=S:T[C][U]=S.clone().lerp(y,U/L)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const y=Math.floor(S/2);S%2===0?(d(T[C][y+1]),d(T[C+1][y]),d(T[C][y])):(d(T[C][y+1]),d(T[C+1][y+1]),d(T[C+1][y]))}}function c(M){const _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const M=new P;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const v=m(M)/2/Math.PI+.5,A=f(M)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const _=a[M+0],v=a[M+2],A=a[M+4],E=Math.max(_,v,A),T=Math.min(_,v,A);E>.9&&T<.1&&(_<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const M=new P,_=new P,v=new P,A=new P,E=new Kt,T=new Kt,C=new Kt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),A.copy(M).add(_).add(v).divideScalar(3);const L=m(A);x(E,y+0,M,L),x(T,y+2,_,L),x(C,y+4,v,L)}}function x(M,_,v,A){A<0&&M.x===1&&(a[_]=M.x-1),v.x===0&&v.z===0&&(a[_]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.vertices,t.indices,t.radius,t.details)}}class wi extends $i{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class Sa extends $i{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sa(t.radius,t.detail)}}class wa extends $i{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wa(t.radius,t.detail)}}class bi extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let _=0;_<c;_++){const v=_*u-r;g.push(v,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const _=M+c*f,v=M+c*(f+1),A=M+1+c*(f+1),E=M+1+c*f;p.push(_,v,E),p.push(v,A,E)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ba extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const M=[],_=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+E*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-_),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const _=h[f][M+1],v=h[f][M],A=h[f+1][M],E=h[f+1][M+1];(f!==0||a>0)&&p.push(_,v,E),(f!==n-1||l<Math.PI)&&p.push(v,A,E)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mn extends Pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,M=(i+1)*p+g;a.push(x,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lt extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ah extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oh extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ta extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lh extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hr=new le,ho=new P,uo=new P;class _l{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ho.setFromMatrixPosition(t.matrixWorld),e.position.copy(ho),uo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uo),e.updateMatrixWorld(),hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fo=new le,Oi=new P,dr=new P;class ch extends _l{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),dr.copy(n.position),dr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dr),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo)}}class hh extends Ta{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vl extends fl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class dh extends _l{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fh extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function po(s,t,e,n){const i=ph(n);switch(e){case Zo:return s*t;case Qo:return s*t;case tl:return s*t*2;case fa:return s*t/i.components*i.byteLength;case pa:return s*t/i.components*i.byteLength;case el:return s*t*2/i.components*i.byteLength;case ma:return s*t*2/i.components*i.byteLength;case Jo:return s*t*3/i.components*i.byteLength;case Ke:return s*t*4/i.components*i.byteLength;case ga:return s*t*4/i.components*i.byteLength;case Ss:case ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bs:case Ts:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kr:case Nr:return Math.max(s,16)*Math.max(t,8)/4;case Ur:case Fr:return Math.max(s,8)*Math.max(t,8)/2;case Br:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Es:case ea:case na:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nl:case ia:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sa:case ra:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ph(s){switch(s){case gn:case $o:return{byteLength:1,components:1};case Wi:case Ko:case qi:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case Xn:case ha:case en:return{byteLength:4,components:1};case jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xl(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Su=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Uu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:gh,alphahash_pars_fragment:_h,alphamap_fragment:vh,alphamap_pars_fragment:xh,alphatest_fragment:yh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:wh,batching_pars_vertex:bh,batching_vertex:Th,begin_vertex:Eh,beginnormal_vertex:Ah,bsdfs:Ch,iridescence_fragment:Rh,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Uh,color_fragment:kh,color_pars_fragment:Fh,color_pars_vertex:Nh,color_vertex:Bh,common:Oh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,colorspace_fragment:qh,colorspace_pars_fragment:Yh,envmap_fragment:$h,envmap_common_pars_fragment:Kh,envmap_pars_fragment:jh,envmap_pars_vertex:Zh,envmap_physical_pars_fragment:ld,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:dd,lights_phong_pars_fragment:ud,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:wd,map_particle_fragment:bd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Cd,morphcolor_vertex:Rd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Dd,normal_fragment_begin:Id,normal_fragment_maps:Ud,normal_pars_fragment:kd,normal_pars_vertex:Fd,normal_vertex:Nd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:$d,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tu,skinbase_vertex:eu,skinning_pars_vertex:nu,skinning_vertex:iu,skinnormal_vertex:su,specularmap_fragment:ru,specularmap_pars_fragment:au,tonemapping_fragment:ou,tonemapping_pars_fragment:lu,transmission_fragment:cu,transmission_pars_fragment:hu,uv_pars_fragment:du,uv_pars_vertex:uu,uv_vertex:fu,worldpos_vertex:pu,background_vert:mu,background_frag:gu,backgroundCube_vert:_u,backgroundCube_frag:vu,cube_vert:xu,cube_frag:yu,depth_vert:Mu,depth_frag:Su,distanceRGBA_vert:wu,distanceRGBA_frag:bu,equirect_vert:Tu,equirect_frag:Eu,linedashed_vert:Au,linedashed_frag:Cu,meshbasic_vert:Ru,meshbasic_frag:Pu,meshlambert_vert:Lu,meshlambert_frag:Du,meshmatcap_vert:Iu,meshmatcap_frag:Uu,meshnormal_vert:ku,meshnormal_frag:Fu,meshphong_vert:Nu,meshphong_frag:Bu,meshphysical_vert:Ou,meshphysical_frag:zu,meshtoon_vert:Gu,meshtoon_frag:Hu,points_vert:Vu,points_frag:Wu,shadow_vert:Xu,shadow_frag:qu,sprite_vert:Yu,sprite_frag:$u},dt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ce([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ce([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ce([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ce([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ce([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ce([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ce([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ce([dt.lights,dt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ze.physical={uniforms:Ce([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const xs={r:0,b:0,g:0},kn=new sn,Ku=new le;function ju(s,t,e,n,i,r,a){const o=new qt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const A=g(_);A===null?f(o,l):A&&A.isColor&&(f(A,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Ds)?(h===void 0&&(h=new Y(new yt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Si(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),kn.copy(v.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ku.makeRotationFromEuler(kn)),h.material.toneMapped=ne.getTransfer(A.colorSpace)!==ae,(u!==A||d!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Y(new bi(2,2),new _n({name:"BackgroundMaterial",uniforms:Si(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,v){_.getRGB(xs,ul(s)),n.buffers.color.setClear(xs.r,xs.g,xs.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:x,addToRenderList:m,dispose:M}}function Zu(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(y,L,U,F,q){let Z=!1;const X=u(F,U,L);r!==X&&(r=X,c(r.object)),Z=p(y,F,U,q),Z&&g(y,F,U,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(y,L,U,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,L,U){const F=U.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let Z=q[L.id];Z===void 0&&(Z={},q[L.id]=Z);let X=Z[F];return X===void 0&&(X=d(l()),Z[F]=X),X}function d(y){const L=[],U=[],F=[];for(let q=0;q<e;q++)L[q]=0,U[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,L,U,F){const q=r.attributes,Z=L.attributes;let X=0;const J=U.getAttributes();for(const z in J)if(J[z].location>=0){const at=q[z];let wt=Z[z];if(wt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),at===void 0||at.attribute!==wt||wt&&at.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(y,L,U,F){const q={},Z=L.attributes;let X=0;const J=U.getAttributes();for(const z in J)if(J[z].location>=0){let at=Z[z];at===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const wt={};wt.attribute=at,at&&at.data&&(wt.data=at.data),q[z]=wt,X++}r.attributes=q,r.attributesNum=X,r.index=F}function x(){const y=r.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function m(y){f(y,0)}function f(y,L){const U=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;U[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),q[y]!==L&&(s.vertexAttribDivisor(y,L),q[y]=L)}function M(){const y=r.newAttributes,L=r.enabledAttributes;for(let U=0,F=L.length;U<F;U++)L[U]!==y[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function _(y,L,U,F,q,Z,X){X===!0?s.vertexAttribIPointer(y,L,U,q,Z):s.vertexAttribPointer(y,L,U,F,q,Z)}function v(y,L,U,F){x();const q=F.attributes,Z=U.getAttributes(),X=L.defaultAttributeValues;for(const J in Z){const z=Z[J];if(z.location>=0){let rt=q[J];if(rt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const at=rt.normalized,wt=rt.itemSize,K=t.get(rt);if(K===void 0)continue;const ct=K.buffer,O=K.type,V=K.bytesPerElement,$=O===s.INT||O===s.UNSIGNED_INT||rt.gpuType===ha;if(rt.isInterleavedBufferAttribute){const tt=rt.data,gt=tt.stride,_t=rt.offset;if(tt.isInstancedInterleavedBuffer){for(let ht=0;ht<z.locationSize;ht++)f(z.location+ht,tt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<z.locationSize;ht++)m(z.location+ht);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let ht=0;ht<z.locationSize;ht++)_(z.location+ht,wt/z.locationSize,O,at,gt*V,(_t+wt/z.locationSize*ht)*V,$)}else{if(rt.isInstancedBufferAttribute){for(let tt=0;tt<z.locationSize;tt++)f(z.location+tt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let tt=0;tt<z.locationSize;tt++)m(z.location+tt);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let tt=0;tt<z.locationSize;tt++)_(z.location+tt,wt/z.locationSize,O,at,wt*V,wt/z.locationSize*tt*V,$)}}else if(X!==void 0){const at=X[J];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(z.location,at);break;case 3:s.vertexAttrib3fv(z.location,at);break;case 4:s.vertexAttrib4fv(z.location,at);break;default:s.vertexAttrib1fv(z.location,at)}}}}M()}function A(){C();for(const y in n){const L=n[y];for(const U in L){const F=L[U];for(const q in F)h(F[q].object),delete F[q];delete L[U]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const U in L){const F=L[U];for(const q in F)h(F[q].object),delete F[q];delete L[U]}delete n[y.id]}function T(y){for(const L in n){const U=n[L];if(U[y.id]===void 0)continue;const F=U[y.id];for(const q in F)h(F[q].object),delete F[q];delete U[y.id]}}function C(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Ju(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qu(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Ke&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==en&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function tf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Bn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,_=M*4;let v=f.clippingState||null;l.value=v,v=h(g,d,_,p);for(let A=0;A!==_;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,v=p;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ef(s){let t=new WeakMap;function e(a,o){return o===Lr?a.mapping=_i:o===Dr&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lr||o===Dr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,mo=[.125,.215,.35,.446,.526,.582],Gn=20,ur=new vl,go=new qt;let fr=null,pr=0,mr=0,gr=!1;const On=(1+Math.sqrt(5))/2,ci=1/On,_o=[new P(-On,ci,0),new P(On,ci,0),new P(-ci,0,On),new P(ci,0,On),new P(0,On,-ci),new P(0,On,ci),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],nf=new P;class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=nf}=r;fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,pr,mr),this._renderer.xr.enabled=gr,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:qi,format:Ke,colorSpace:Mi,depthBuffer:!1},i=xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,t,e)}return i}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,i,r){const l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(go),u.toneMapping=An,u.autoClear=!1;const g=new Is({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),x=new Y(new yt,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(go),m=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const v=this._cubeSize;ys(i,_*v,M>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(x,l),u.render(t,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_o[(i-r-1)%_o.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Y(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const f=[];let M=0;for(let T=0;T<Gn;++T){const C=T/x,S=Math.exp(-C*C/2);f.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const v=this._sizeLods[i],A=3*v*(i>_-hi?i-_+hi:0),E=4*(this._cubeSize-v);ys(e,A,E,3*v,2*v),l.setRenderTarget(e),l.render(u,ur)}}function sf(s){const t=[],e=[],n=[];let i=s;const r=s-hi+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-hi?l=mo[a-s+hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(S,x*g*E),_.set(d,m*g*E);const y=[E,E,E,E,E,E];v.set(y,f*g*E)}const A=new Pe;A.setAttribute("position",new Ie(M,x)),A.setAttribute("uv",new Ie(_,m)),A.setAttribute("faceIndex",new Ie(v,f)),t.push(A),i>hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xo(s,t,e){const n=new qn(s,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function rf(s,t,e){const n=new Float32Array(Gn),i=new P(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function yo(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Mo(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lr||l===Dr,h=l===_i||l===vi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new vo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new vo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function of(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Nn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let _=0,v=M.length;_<v;_+=3){const A=M[_+0],E=M[_+1],T=M[_+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const A=_+0,E=_+1,T=_+2;d.push(A,E,E,T,T,A)}}else return;const m=new(rl(d)?dl:hl)(d,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function cf(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*x[M];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*u),C=new al(T,A,E,u);C.type=en,C.needsUpdate=!0;const S=v*4;for(let L=0;L<u;L++){const U=f[L],F=M[L],q=_[L],Z=A*E*4*L;for(let X=0;X<U.count;X++){const J=X*S;g===!0&&(i.fromBufferAttribute(U,X),T[Z+J+0]=i.x,T[Z+J+1]=i.y,T[Z+J+2]=i.z,T[Z+J+3]=0),x===!0&&(i.fromBufferAttribute(F,X),T[Z+J+4]=i.x,T[Z+J+5]=i.y,T[Z+J+6]=i.z,T[Z+J+7]=0),m===!0&&(i.fromBufferAttribute(q,X),T[Z+J+8]=i.x,T[Z+J+9]=i.y,T[Z+J+10]=i.z,T[Z+J+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Kt(A,E)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function uf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const yl=new Ee,So=new gl(1,1),Ml=new al,Sl=new Dc,wl=new pl,wo=[],bo=[],To=new Float32Array(16),Eo=new Float32Array(9),Ao=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=wo[i];if(r===void 0&&(r=new Float32Array(i),wo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Us(s,t){let e=bo[t];e===void 0&&(e=new Int32Array(t),bo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function _f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Ao.set(n),s.uniformMatrix2fv(this.addr,!1,Ao),ye(e,n)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Eo.set(n),s.uniformMatrix3fv(this.addr,!1,Eo),ye(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;To.set(n),s.uniformMatrix4fv(this.addr,!1,To),ye(e,n)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function bf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(So.compareFunction=sl,r=So):r=yl,e.setTexture2D(t||r,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sl,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wl,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ml,i)}function Df(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return yf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return wf;case 5125:return bf;case 36294:return Tf;case 36295:return Ef;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function If(s,t){s.uniform1fv(this.addr,t)}function Uf(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function kf(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function Ff(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function Nf(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Bf(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Of(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zf(s,t){s.uniform1iv(this.addr,t)}function Gf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Xf(s,t){s.uniform2uiv(this.addr,t)}function qf(s,t){s.uniform3uiv(this.addr,t)}function Yf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||yl,r[a])}function Kf(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Sl,r[a])}function jf(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||wl,r[a])}function Zf(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ml,r[a])}function Jf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return kf;case 35666:return Ff;case 35674:return Nf;case 35675:return Bf;case 35676:return Of;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Df(e.type)}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function Co(s,t){s.seq.push(t),s.map[t.id]=t}function np(s,t,e){const n=s.name,i=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),a=_r.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Co(e,c===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ep(o),Co(e,u)),e=u}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);np(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ro(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ip=37297;let sp=0;function rp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Po=new Vt;function ap(s){ne._getMatrix(Po,ne.workingColorSpace,s);const t=`mat3( ${Po.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Cs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Lo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+rp(s.getShaderSource(t),a)}else return i}function op(s,t){const e=ap(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lp(s,t){let e;switch(t){case rc:e="Linear";break;case ac:e="Reinhard";break;case oc:e="Cineon";break;case qo:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new P;function cp(){ne.getLuminanceCoefficients(Ms);const s=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function up(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function zi(s){return s!==""}function Do(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Io(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(s){return s.replace(fp,mp)}const pp=new Map;function mp(s,t){let e=Xt[t];if(e===void 0){const n=pp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(s){return s.replace(gp,_p)}function _p(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ko(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function xp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xo:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function Sp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=vp(e),c=xp(e),h=yp(e),u=Mp(e),d=Sp(e),p=hp(e),g=dp(r),x=i.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),f.length>0&&(f+=`
`)):(m=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),f=[ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Xt.tonemapping_pars_fragment:"",e.toneMapping!==An?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,op("linearToOutputTexel",e.outputColorSpace),cp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zi).join(`
`)),a=la(a),a=Do(a,e),a=Io(a,e),o=la(o),o=Do(o,e),o=Io(o,e),a=Uo(a),o=Uo(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=M+m+a,v=M+f+o,A=Ro(i,i.VERTEX_SHADER,_),E=Ro(i,i.FRAGMENT_SHADER,v);i.attachShader(x,A),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(L){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(A).trim(),q=i.getShaderInfoLog(E).trim();let Z=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const J=Lo(i,A,"vertex"),z=Lo(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+J+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||q==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:f}})}i.deleteShader(A),i.deleteShader(E),C=new As(i,x),S=up(i,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,ip)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let bp=0;class Tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ep(t),e.set(t,n)),n}}class Ep{constructor(t){this.id=bp++,this.code=t,this.usedTimes=0}}function Ap(s,t,e,n,i,r,a){const o=new ll,l=new Tp,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,L,U,F){const q=U.fog,Z=F.geometry,X=S.isMeshStandardMaterial?U.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),z=J&&J.mapping===Ds?J.image.height:null,rt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=at!==void 0?at.length:0;let K=0;Z.morphAttributes.position!==void 0&&(K=1),Z.morphAttributes.normal!==void 0&&(K=2),Z.morphAttributes.color!==void 0&&(K=3);let ct,O,V,$;if(rt){const re=Ze[rt];ct=re.vertexShader,O=re.fragmentShader}else ct=S.vertexShader,O=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const tt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),_t=F.isInstancedMesh===!0,ht=F.isBatchedMesh===!0,Dt=!!S.map,Gt=!!S.matcap,Ut=!!J,D=!!S.aoMap,Yt=!!S.lightMap,Ft=!!S.bumpMap,zt=!!S.normalMap,xt=!!S.displacementMap,jt=!!S.emissiveMap,At=!!S.metalnessMap,R=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,et=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Ct=S.transmission>0,pt=w&&!!S.anisotropyMap,St=G&&!!S.clearcoatMap,Qt=G&&!!S.clearcoatNormalMap,ot=G&&!!S.clearcoatRoughnessMap,bt=it&&!!S.iridescenceMap,kt=it&&!!S.iridescenceThicknessMap,Nt=Q&&!!S.sheenColorMap,Tt=Q&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Wt=!!S.specularColorMap,ce=!!S.specularIntensityMap,I=Ct&&!!S.transmissionMap,ut=Ct&&!!S.thicknessMap,j=!!S.gradientMap,nt=!!S.alphaMap,vt=S.alphaTest>0,mt=!!S.alphaHash,Ht=!!S.extensions;let ue=An;S.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const we={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:O,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ht,batchingColor:ht&&F._colorsTexture!==null,instancing:_t,instancingColor:_t&&F.instanceColor!==null,instancingMorph:_t&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Mi,alphaToCoverage:!!S.alphaToCoverage,map:Dt,matcap:Gt,envMap:Ut,envMapMode:Ut&&J.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:Yt,bumpMap:Ft,normalMap:zt,displacementMap:d&&xt,emissiveMap:jt,normalMapObjectSpace:zt&&S.normalMapType===pc,normalMapTangentSpace:zt&&S.normalMapType===il,metalnessMap:At,roughnessMap:R,anisotropy:w,anisotropyMap:pt,clearcoat:G,clearcoatMap:St,clearcoatNormalMap:Qt,clearcoatRoughnessMap:ot,dispersion:et,iridescence:it,iridescenceMap:bt,iridescenceThicknessMap:kt,sheen:Q,sheenColorMap:Nt,sheenRoughnessMap:Tt,specularMap:Jt,specularColorMap:Wt,specularIntensityMap:ce,transmission:Ct,transmissionMap:I,thicknessMap:ut,gradientMap:j,opaque:S.transparent===!1&&S.blending===ui&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:mt,combine:S.combine,mapUv:Dt&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:Yt&&x(S.lightMap.channel),bumpMapUv:Ft&&x(S.bumpMap.channel),normalMapUv:zt&&x(S.normalMap.channel),displacementMapUv:xt&&x(S.displacementMap.channel),emissiveMapUv:jt&&x(S.emissiveMap.channel),metalnessMapUv:At&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:pt&&x(S.anisotropyMap.channel),clearcoatMapUv:St&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(S.sheenRoughnessMap.channel),specularMapUv:Jt&&x(S.specularMap.channel),specularColorMapUv:Wt&&x(S.specularColorMap.channel),specularIntensityMapUv:ce&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:ut&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(zt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Dt||nt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Dt&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:jt&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Je,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&S.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)y.push(L),y.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(y,S),_(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let L;if(y){const U=Ze[y];L=Xc.clone(U.uniforms)}else L=S.uniforms;return L}function A(S,y){let L;for(let U=0,F=h.length;U<F;U++){const q=h[U];if(q.cacheKey===y){L=q,++L.usedTimes;break}}return L===void 0&&(L=new wp(s,y,S,r),h.push(L)),L}function E(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function Cp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function No(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Rp),n.length>1&&n.sort(d||Fo),i.length>1&&i.sort(d||Fo)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Pp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new No,s.set(n,[a])):i>=r.length?(a=new No,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new qt};break;case"SpotLight":e={position:new P,direction:new P,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ip=0;function Up(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kp(s){const t=new Lp,e=Dp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new le,a=new le;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,_=0,v=0,A=0,E=0,T=0;c.sort(Up);for(let S=0,y=c.length;S<y;S++){const L=c[S],U=L.color,F=L.intensity,q=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],F);T++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,z=e.get(L);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=L.shadow.matrix,M++}n.directional[p]=X,p++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(F),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;const J=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Z,v++}x++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,z=e.get(L);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=X,g++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(F),X.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==M||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=M,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=T,n.version=Ip++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const _=c[f];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Bo(s){const t=new kp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Bo(s),t.set(i,[o])):r>=a.length?(o=new Bo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(s,t,e){let n=new xa;const i=new Kt,r=new Kt,a=new oe,o=new ah({depthPacking:fc}),l=new oh,c={},h=e.maxTextureSize,u={[Cn]:Re,[Re]:Cn,[Je]:Je},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Np,fragmentShader:Bp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Y(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let f=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(En),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=f!==dn&&this.type===dn,q=f===dn&&this.type!==dn;for(let Z=0,X=E.length;Z<X;Z++){const J=E[Z],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const rt=z.getFrameExtents();if(i.multiply(rt),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||F===!0||q===!0){const wt=this.type!==dn?{minFilter:Oe,magFilter:Oe}:{};z.map!==null&&z.map.dispose(),z.map=new qn(i.x,i.y,wt),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const at=z.getViewportCount();for(let wt=0;wt<at;wt++){const K=z.getViewport(wt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a),z.updateMatrices(J,wt),n=z.getFrustum(),v(T,C,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===dn&&M(z,C),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,L)};function M(E,T){const C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,p,x,null)}function _(E,T,C,S){let y=null;const L=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)y=L;else if(y=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,F=T.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let Z=q[F];Z===void 0&&(Z=y.clone(),q[F]=Z,T.addEventListener("dispose",A)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,S===dn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=C}return y}function v(E,T,C,S,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===dn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=t.update(E),q=E.material;if(Array.isArray(q)){const Z=F.groups;for(let X=0,J=Z.length;X<J;X++){const z=Z[X],rt=q[z.materialIndex];if(rt&&rt.visible){const at=_(E,rt,S,y);E.onBeforeShadow(s,E,T,C,F,at,z),s.renderBufferDirect(C,null,F,at,E,z),E.onAfterShadow(s,E,T,C,F,at,z)}}}else if(q.visible){const Z=_(E,q,S,y);E.onBeforeShadow(s,E,T,C,F,Z,null),s.renderBufferDirect(C,null,F,Z,E,null),E.onAfterShadow(s,E,T,C,F,Z,null)}}const U=E.children;for(let F=0,q=U.length;F<q;F++)v(U[F],T,C,S,y)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const S=c[C],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const zp={[br]:Tr,[Er]:Rr,[Ar]:Pr,[gi]:Cr,[Tr]:br,[Rr]:Er,[Pr]:Ar,[Cr]:gi};function Gp(s,t){function e(){let I=!1;const ut=new oe;let j=null;const nt=new oe(0,0,0,0);return{setMask:function(vt){j!==vt&&!I&&(s.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){I=vt},setClear:function(vt,mt,Ht,ue,we){we===!0&&(vt*=ue,mt*=ue,Ht*=ue),ut.set(vt,mt,Ht,ue),nt.equals(ut)===!1&&(s.clearColor(vt,mt,Ht,ue),nt.copy(ut))},reset:function(){I=!1,j=null,nt.set(-1,0,0,0)}}}function n(){let I=!1,ut=!1,j=null,nt=null,vt=null;return{setReversed:function(mt){if(ut!==mt){const Ht=t.get("EXT_clip_control");ut?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ue=vt;vt=null,this.setClear(ue)}ut=mt},getReversed:function(){return ut},setTest:function(mt){mt?tt(s.DEPTH_TEST):gt(s.DEPTH_TEST)},setMask:function(mt){j!==mt&&!I&&(s.depthMask(mt),j=mt)},setFunc:function(mt){if(ut&&(mt=zp[mt]),nt!==mt){switch(mt){case br:s.depthFunc(s.NEVER);break;case Tr:s.depthFunc(s.ALWAYS);break;case Er:s.depthFunc(s.LESS);break;case gi:s.depthFunc(s.LEQUAL);break;case Ar:s.depthFunc(s.EQUAL);break;case Cr:s.depthFunc(s.GEQUAL);break;case Rr:s.depthFunc(s.GREATER);break;case Pr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=mt}},setLocked:function(mt){I=mt},setClear:function(mt){vt!==mt&&(ut&&(mt=1-mt),s.clearDepth(mt),vt=mt)},reset:function(){I=!1,j=null,nt=null,vt=null,ut=!1}}}function i(){let I=!1,ut=null,j=null,nt=null,vt=null,mt=null,Ht=null,ue=null,we=null;return{setTest:function(re){I||(re?tt(s.STENCIL_TEST):gt(s.STENCIL_TEST))},setMask:function(re){ut!==re&&!I&&(s.stencilMask(re),ut=re)},setFunc:function(re,Ve,rn){(j!==re||nt!==Ve||vt!==rn)&&(s.stencilFunc(re,Ve,rn),j=re,nt=Ve,vt=rn)},setOp:function(re,Ve,rn){(mt!==re||Ht!==Ve||ue!==rn)&&(s.stencilOp(re,Ve,rn),mt=re,Ht=Ve,ue=rn)},setLocked:function(re){I=re},setClear:function(re){we!==re&&(s.clearStencil(re),we=re)},reset:function(){I=!1,ut=null,j=null,nt=null,vt=null,mt=null,Ht=null,ue=null,we=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,_=null,v=null,A=null,E=null,T=new qt(0,0,0),C=0,S=!1,y=null,L=null,U=null,F=null,q=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=J>=2);let rt=null,at={};const wt=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ct=new oe().fromArray(wt),O=new oe().fromArray(K);function V(I,ut,j,nt){const vt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(I,mt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<j;Ht++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(ut+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return mt}const $={};$[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(s.DEPTH_TEST),a.setFunc(gi),Ft(!1),zt(ka),tt(s.CULL_FACE),D(En);function tt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function gt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function _t(I,ut){return u[I]!==ut?(s.bindFramebuffer(I,ut),u[I]=ut,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function ht(I,ut){let j=p,nt=!1;if(I){j=d.get(ut),j===void 0&&(j=[],d.set(ut,j));const vt=I.textures;if(j.length!==vt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Ht=vt.length;mt<Ht;mt++)j[mt]=s.COLOR_ATTACHMENT0+mt;j.length=vt.length,nt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,nt=!0);nt&&s.drawBuffers(j)}function Dt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Gt={[zn]:s.FUNC_ADD,[zl]:s.FUNC_SUBTRACT,[Gl]:s.FUNC_REVERSE_SUBTRACT};Gt[Hl]=s.MIN,Gt[Vl]=s.MAX;const Ut={[Wl]:s.ZERO,[Xl]:s.ONE,[ql]:s.SRC_COLOR,[Sr]:s.SRC_ALPHA,[Jl]:s.SRC_ALPHA_SATURATE,[jl]:s.DST_COLOR,[$l]:s.DST_ALPHA,[Yl]:s.ONE_MINUS_SRC_COLOR,[wr]:s.ONE_MINUS_SRC_ALPHA,[Zl]:s.ONE_MINUS_DST_COLOR,[Kl]:s.ONE_MINUS_DST_ALPHA,[Ql]:s.CONSTANT_COLOR,[tc]:s.ONE_MINUS_CONSTANT_COLOR,[ec]:s.CONSTANT_ALPHA,[nc]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,ut,j,nt,vt,mt,Ht,ue,we,re){if(I===En){x===!0&&(gt(s.BLEND),x=!1);return}if(x===!1&&(tt(s.BLEND),x=!0),I!==Ol){if(I!==m||re!==S){if((f!==zn||v!==zn)&&(s.blendEquation(s.FUNC_ADD),f=zn,v=zn),re)switch(I){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.ONE,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,_=null,A=null,E=null,T.set(0,0,0),C=0,m=I,S=re}return}vt=vt||ut,mt=mt||j,Ht=Ht||nt,(ut!==f||vt!==v)&&(s.blendEquationSeparate(Gt[ut],Gt[vt]),f=ut,v=vt),(j!==M||nt!==_||mt!==A||Ht!==E)&&(s.blendFuncSeparate(Ut[j],Ut[nt],Ut[mt],Ut[Ht]),M=j,_=nt,A=mt,E=Ht),(ue.equals(T)===!1||we!==C)&&(s.blendColor(ue.r,ue.g,ue.b,we),T.copy(ue),C=we),m=I,S=!1}function Yt(I,ut){I.side===Je?gt(s.CULL_FACE):tt(s.CULL_FACE);let j=I.side===Re;ut&&(j=!j),Ft(j),I.blending===ui&&I.transparent===!1?D(En):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const nt=I.stencilWrite;o.setTest(nt),nt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function zt(I){I!==Nl?(tt(s.CULL_FACE),I!==L&&(I===ka?s.cullFace(s.BACK):I===Bl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):gt(s.CULL_FACE),L=I}function xt(I){I!==U&&(X&&s.lineWidth(I),U=I)}function jt(I,ut,j){I?(tt(s.POLYGON_OFFSET_FILL),(F!==ut||q!==j)&&(s.polygonOffset(ut,j),F=ut,q=j)):gt(s.POLYGON_OFFSET_FILL)}function At(I){I?tt(s.SCISSOR_TEST):gt(s.SCISSOR_TEST)}function R(I){I===void 0&&(I=s.TEXTURE0+Z-1),rt!==I&&(s.activeTexture(I),rt=I)}function w(I,ut,j){j===void 0&&(rt===null?j=s.TEXTURE0+Z-1:j=rt);let nt=at[j];nt===void 0&&(nt={type:void 0,texture:void 0},at[j]=nt),(nt.type!==I||nt.texture!==ut)&&(rt!==j&&(s.activeTexture(j),rt=j),s.bindTexture(I,ut||$[I]),nt.type=I,nt.texture=ut)}function G(){const I=at[rt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function et(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){ct.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function Tt(I){O.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),O.copy(I))}function Jt(I,ut){let j=c.get(ut);j===void 0&&(j=new WeakMap,c.set(ut,j));let nt=j.get(I);nt===void 0&&(nt=s.getUniformBlockIndex(ut,I.name),j.set(I,nt))}function Wt(I,ut){const nt=c.get(ut).get(I);l.get(ut)!==nt&&(s.uniformBlockBinding(ut,nt,I.__bindingPointIndex),l.set(ut,nt))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,at={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,_=null,v=null,A=null,E=null,T=new qt(0,0,0),C=0,S=!1,y=null,L=null,U=null,F=null,q=null,ct.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:gt,bindFramebuffer:_t,drawBuffers:ht,useProgram:Dt,setBlending:D,setMaterial:Yt,setFlipSided:Ft,setCullFace:zt,setLineWidth:xt,setPolygonOffset:jt,setScissorTest:At,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:bt,texImage3D:kt,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:Qt,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:St,scissor:Nt,viewport:Tt,reset:ce}}function Hp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Ps("canvas")}function x(R,w,G){let et=1;const it=At(R);if((it.width>G||it.height>G)&&(et=G/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(et*it.width),Ct=Math.floor(et*it.height);u===void 0&&(u=g(Q,Ct));const pt=w?g(Q,Ct):u;return pt.width=Q,pt.height=Ct,pt.getContext("2d").drawImage(R,0,0,Q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Ct+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,w,G,et,it=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=w;if(w===s.RED&&(G===s.FLOAT&&(Q=s.R32F),G===s.HALF_FLOAT&&(Q=s.R16F),G===s.UNSIGNED_BYTE&&(Q=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.R8UI),G===s.UNSIGNED_SHORT&&(Q=s.R16UI),G===s.UNSIGNED_INT&&(Q=s.R32UI),G===s.BYTE&&(Q=s.R8I),G===s.SHORT&&(Q=s.R16I),G===s.INT&&(Q=s.R32I)),w===s.RG&&(G===s.FLOAT&&(Q=s.RG32F),G===s.HALF_FLOAT&&(Q=s.RG16F),G===s.UNSIGNED_BYTE&&(Q=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RG8UI),G===s.UNSIGNED_SHORT&&(Q=s.RG16UI),G===s.UNSIGNED_INT&&(Q=s.RG32UI),G===s.BYTE&&(Q=s.RG8I),G===s.SHORT&&(Q=s.RG16I),G===s.INT&&(Q=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),G===s.UNSIGNED_INT&&(Q=s.RGB32UI),G===s.BYTE&&(Q=s.RGB8I),G===s.SHORT&&(Q=s.RGB16I),G===s.INT&&(Q=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),G===s.UNSIGNED_INT&&(Q=s.RGBA32UI),G===s.BYTE&&(Q=s.RGBA8I),G===s.SHORT&&(Q=s.RGBA16I),G===s.INT&&(Q=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),w===s.RGBA){const Ct=it?Cs:ne.getTransfer(et);G===s.FLOAT&&(Q=s.RGBA32F),G===s.HALF_FLOAT&&(Q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Q=Ct===ae?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(R,w){let G;return R?w===null||w===Xn||w===xi?G=s.DEPTH24_STENCIL8:w===en?G=s.DEPTH32F_STENCIL8:w===Wi&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xn||w===xi?G=s.DEPTH_COMPONENT24:w===en?G=s.DEPTH_COMPONENT32F:w===Wi&&(G=s.DEPTH_COMPONENT16),G}function A(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){const w=R.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),y(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const G=R.source,et=d.get(G);if(et){const it=et[w.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(R),Object.keys(et).length===0&&d.delete(G)}n.remove(R)}function S(R){const w=n.get(R);s.deleteTexture(w.__webglTexture);const G=R.source,et=d.get(G);delete et[w.__cacheKey],a.memory.textures--}function y(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let it=0;it<w.__webglFramebuffer[et].length;it++)s.deleteFramebuffer(w.__webglFramebuffer[et][it]);else s.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)s.deleteFramebuffer(w.__webglFramebuffer[et]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let et=0,it=G.length;et<it;et++){const Q=n.get(G[et]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[et])}n.remove(R)}let L=0;function U(){L=0}function F(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function q(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function Z(R,w){const G=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(G,R,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function X(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){O(G,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function J(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){O(G,R,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function z(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){V(G,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const rt={[Vi]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Ir]:s.MIRRORED_REPEAT},at={[Oe]:s.NEAREST,[dc]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Ns]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},wt={[mc]:s.NEVER,[Mc]:s.ALWAYS,[gc]:s.LESS,[sl]:s.LEQUAL,[_c]:s.EQUAL,[yc]:s.GEQUAL,[vc]:s.GREATER,[xc]:s.NOTEQUAL};function K(R,w){if(w.type===en&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===tn||w.magFilter===Ns||w.magFilter===Zi||w.magFilter===Wn||w.minFilter===tn||w.minFilter===Ns||w.minFilter===Zi||w.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,rt[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,rt[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,rt[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,at[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,wt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Oe||w.minFilter!==Zi&&w.minFilter!==Wn||w.type===en&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ct(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));const et=w.source;let it=d.get(et);it===void 0&&(it={},d.set(et,it));const Q=q(w);if(Q!==R.__cacheKey){it[Q]===void 0&&(it[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[Q].usedTimes++;const Ct=it[R.__cacheKey];Ct!==void 0&&(it[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(w)),R.__cacheKey=Q,R.__webglTexture=it[Q].texture}return G}function O(R,w,G){let et=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=s.TEXTURE_3D);const it=ct(R,w),Q=w.source;e.bindTexture(et,R.__webglTexture,s.TEXTURE0+G);const Ct=n.get(Q);if(Q.version!==Ct.__version||it===!0){e.activeTexture(s.TEXTURE0+G);const pt=ne.getPrimaries(ne.workingColorSpace),St=w.colorSpace===bn?null:ne.getPrimaries(w.colorSpace),Qt=w.colorSpace===bn||pt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ot=x(w.image,!1,i.maxTextureSize);ot=jt(w,ot);const bt=r.convert(w.format,w.colorSpace),kt=r.convert(w.type);let Nt=_(w.internalFormat,bt,kt,w.colorSpace,w.isVideoTexture);K(et,w);let Tt;const Jt=w.mipmaps,Wt=w.isVideoTexture!==!0,ce=Ct.__version===void 0||it===!0,I=Q.dataReady,ut=A(w,ot);if(w.isDepthTexture)Nt=v(w.format===yi,w.type),ce&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Nt,ot.width,ot.height,0,bt,kt,null));else if(w.isDataTexture)if(Jt.length>0){Wt&&ce&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,Jt[0].width,Jt[0].height);for(let j=0,nt=Jt.length;j<nt;j++)Tt=Jt[j],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,bt,kt,Tt.data):e.texImage2D(s.TEXTURE_2D,j,Nt,Tt.width,Tt.height,0,bt,kt,Tt.data);w.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,ot.width,ot.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,bt,kt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,ot.width,ot.height,0,bt,kt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Nt,Jt[0].width,Jt[0].height,ot.depth);for(let j=0,nt=Jt.length;j<nt;j++)if(Tt=Jt[j],w.format!==Ke)if(bt!==null)if(Wt){if(I)if(w.layerUpdates.size>0){const vt=po(Tt.width,Tt.height,w.format,w.type);for(const mt of w.layerUpdates){const Ht=Tt.data.subarray(mt*vt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,mt,Tt.width,Tt.height,1,bt,Ht)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,ot.depth,bt,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Nt,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,ot.depth,bt,kt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Nt,Tt.width,Tt.height,ot.depth,0,bt,kt,Tt.data)}else{Wt&&ce&&e.texStorage2D(s.TEXTURE_2D,ut,Nt,Jt[0].width,Jt[0].height);for(let j=0,nt=Jt.length;j<nt;j++)Tt=Jt[j],w.format!==Ke?bt!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Tt.width,Tt.height,bt,kt,Tt.data):e.texImage2D(s.TEXTURE_2D,j,Nt,Tt.width,Tt.height,0,bt,kt,Tt.data)}else if(w.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Nt,ot.width,ot.height,ot.depth),I)if(w.layerUpdates.size>0){const j=po(ot.width,ot.height,w.format,w.type);for(const nt of w.layerUpdates){const vt=ot.data.subarray(nt*j/ot.data.BYTES_PER_ELEMENT,(nt+1)*j/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,ot.width,ot.height,1,bt,kt,vt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,bt,kt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,bt,kt,ot.data);else if(w.isData3DTexture)Wt?(ce&&e.texStorage3D(s.TEXTURE_3D,ut,Nt,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,bt,kt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,bt,kt,ot.data);else if(w.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(s.TEXTURE_2D,ut,Nt,ot.width,ot.height);else{let j=ot.width,nt=ot.height;for(let vt=0;vt<ut;vt++)e.texImage2D(s.TEXTURE_2D,vt,Nt,j,nt,0,bt,kt,null),j>>=1,nt>>=1}}else if(Jt.length>0){if(Wt&&ce){const j=At(Jt[0]);e.texStorage2D(s.TEXTURE_2D,ut,Nt,j.width,j.height)}for(let j=0,nt=Jt.length;j<nt;j++)Tt=Jt[j],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt,kt,Tt):e.texImage2D(s.TEXTURE_2D,j,Nt,bt,kt,Tt);w.generateMipmaps=!1}else if(Wt){if(ce){const j=At(ot);e.texStorage2D(s.TEXTURE_2D,ut,Nt,j.width,j.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,kt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Nt,bt,kt,ot);m(w)&&f(et),Ct.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function V(R,w,G){if(w.image.length!==6)return;const et=ct(R,w),it=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const Q=n.get(it);if(it.version!==Q.__version||et===!0){e.activeTexture(s.TEXTURE0+G);const Ct=ne.getPrimaries(ne.workingColorSpace),pt=w.colorSpace===bn?null:ne.getPrimaries(w.colorSpace),St=w.colorSpace===bn||Ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Qt=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let nt=0;nt<6;nt++)!Qt&&!ot?bt[nt]=x(w.image[nt],!0,i.maxCubemapSize):bt[nt]=ot?w.image[nt].image:w.image[nt],bt[nt]=jt(w,bt[nt]);const kt=bt[0],Nt=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),Jt=_(w.internalFormat,Nt,Tt,w.colorSpace),Wt=w.isVideoTexture!==!0,ce=Q.__version===void 0||et===!0,I=it.dataReady;let ut=A(w,kt);K(s.TEXTURE_CUBE_MAP,w);let j;if(Qt){Wt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Jt,kt.width,kt.height);for(let nt=0;nt<6;nt++){j=bt[nt].mipmaps;for(let vt=0;vt<j.length;vt++){const mt=j[vt];w.format!==Ke?Nt!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,mt.width,mt.height,Nt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,mt.width,mt.height,Nt,Tt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,mt.width,mt.height,0,Nt,Tt,mt.data)}}}else{if(j=w.mipmaps,Wt&&ce){j.length>0&&ut++;const nt=At(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ot){Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt[nt].width,bt[nt].height,Nt,Tt,bt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,bt[nt].width,bt[nt].height,0,Nt,Tt,bt[nt].data);for(let vt=0;vt<j.length;vt++){const Ht=j[vt].image[nt].image;Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Ht.width,Ht.height,Nt,Tt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,Ht.width,Ht.height,0,Nt,Tt,Ht.data)}}else{Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,Tt,bt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Nt,Tt,bt[nt]);for(let vt=0;vt<j.length;vt++){const mt=j[vt];Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Nt,Tt,mt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,Nt,Tt,mt.image[nt])}}}m(w)&&f(s.TEXTURE_CUBE_MAP),Q.__version=it.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function $(R,w,G,et,it,Q){const Ct=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),St=_(G.internalFormat,Ct,pt,G.colorSpace),Qt=n.get(w),ot=n.get(G);if(ot.__renderTarget=w,!Qt.__hasExternalTextures){const bt=Math.max(1,w.width>>Q),kt=Math.max(1,w.height>>Q);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,St,bt,kt,w.depth,0,Ct,pt,null):e.texImage2D(it,Q,St,bt,kt,0,Ct,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),zt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,it,ot.__webglTexture,0,Ft(w)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,it,ot.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(R,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){const et=w.depthTexture,it=et&&et.isDepthTexture?et.type:null,Q=v(w.stencilBuffer,it),Ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Ft(w);zt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Q,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,R)}else{const et=w.textures;for(let it=0;it<et.length;it++){const Q=et[it],Ct=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),St=_(Q.internalFormat,Ct,pt,Q.colorSpace),Qt=Ft(w);G&&zt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,St,w.width,w.height):zt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,St,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,St,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const it=et.__webglTexture,Q=Ft(w);if(w.depthTexture.format===fi)zt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===yi)zt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function _t(R){const w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const et=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const it=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),w.__depthDisposeCallback=it}w.__boundDepthTexture=et}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");gt(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=s.createRenderbuffer(),tt(w.__webglDepthbuffer[et],R,!1);else{const it=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),tt(w.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(R,w,G){const et=n.get(R);w!==void 0&&$(et.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&_t(R)}function Dt(R){const w=R.texture,G=n.get(R),et=n.get(w);R.addEventListener("dispose",T);const it=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=w.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let St=0;St<w.mipmaps.length;St++)G.__webglFramebuffer[pt][St]=s.createFramebuffer()}else G.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)G.__webglFramebuffer[pt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let pt=0,St=it.length;pt<St;pt++){const Qt=n.get(it[pt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&zt(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const St=it[pt];G.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const Qt=r.convert(St.format,St.colorSpace),ot=r.convert(St.type),bt=_(St.internalFormat,Qt,ot,St.colorSpace,R.isXRRenderTarget===!0),kt=Ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,bt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),K(s.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)$(G.__webglFramebuffer[pt][St],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,St);else $(G.__webglFramebuffer[pt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(w)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,St=it.length;pt<St;pt++){const Qt=it[pt],ot=n.get(Qt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),K(s.TEXTURE_2D,Qt),$(G.__webglFramebuffer,R,Qt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(Qt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,et.__webglTexture),K(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let St=0;St<w.mipmaps.length;St++)$(G.__webglFramebuffer[St],R,w,s.COLOR_ATTACHMENT0,pt,St);else $(G.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,pt,0);m(w)&&f(pt),e.unbindTexture()}R.depthBuffer&&_t(R)}function Gt(R){const w=R.textures;for(let G=0,et=w.length;G<et;G++){const it=w[G];if(m(it)){const Q=M(R),Ct=n.get(it).__webglTexture;e.bindTexture(Q,Ct),f(Q),e.unbindTexture()}}}const Ut=[],D=[];function Yt(R){if(R.samples>0){if(zt(R)===!1){const w=R.textures,G=R.width,et=R.height;let it=s.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(R),pt=w.length>1;if(pt)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let St=0;St<w.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const Qt=n.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qt,0)}s.blitFramebuffer(0,0,G,et,0,0,G,et,it,s.NEAREST),l===!0&&(Ut.length=0,D.length=0,Ut.push(s.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ut.push(Q),D.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[St]);const Qt=n.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ft(R){return Math.min(i.maxSamples,R.samples)}function zt(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xt(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function jt(R,w){const G=R.colorSpace,et=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Mi&&G!==bn&&(ne.getTransfer(G)===ae?(et!==Ke||it!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=ht,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=$,this.useMultisampledRTT=zt}function Vp(s,t){function e(n,i=bn){let r;const a=ne.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jo)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return s.BYTE;if(n===Ko)return s.SHORT;if(n===Wi)return s.UNSIGNED_SHORT;if(n===ha)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===Zo)return s.ALPHA;if(n===Jo)return s.RGB;if(n===Ke)return s.RGBA;if(n===Qo)return s.LUMINANCE;if(n===tl)return s.LUMINANCE_ALPHA;if(n===fi)return s.DEPTH_COMPONENT;if(n===yi)return s.DEPTH_STENCIL;if(n===fa)return s.RED;if(n===pa)return s.RED_INTEGER;if(n===el)return s.RG;if(n===ma)return s.RG_INTEGER;if(n===ga)return s.RGBA_INTEGER;if(n===Ss||n===ws||n===bs||n===Ts)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ur||n===kr||n===Fr||n===Nr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===Or||n===zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Br||n===Or)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===jr||n===Zr||n===Jr||n===Qr||n===ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$r)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===ea||n===na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===ia||n===sa||n===ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:Wp,fragmentShader:Xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yp extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new qp,m=e.getContextAttributes();let f=null,M=null;const _=[],v=[],A=new Kt;let E=null;const T=new Be;T.viewport=new oe;const C=new Be;C.viewport=new oe;const S=[T,C],y=new fh;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=_[O];return V===void 0&&(V=new rr,_[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=_[O];return V===void 0&&(V=new rr,_[O]=V),V.getGripSpace()},this.getHand=function(O){let V=_[O];return V===void 0&&(V=new rr,_[O]=V),V.getHandSpace()};function F(O){const V=v.indexOf(O.inputSource);if(V===-1)return;const $=_[V];$!==void 0&&($.update(O.inputSource,O.frame,c||a),$.dispatchEvent({type:O.type,data:O.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Z);for(let O=0;O<_.length;O++){const V=v[O];V!==null&&(v[O]=null,_[O].disconnect(V))}L=null,U=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,tt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?yi:fi,tt=m.stencil?xi:Xn);const _t={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new qn(d.textureWidth,d.textureHeight,{format:Ke,type:gn,depthTexture:new gl(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new qn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(O){for(let V=0;V<O.removed.length;V++){const $=O.removed[V],tt=v.indexOf($);tt>=0&&(v[tt]=null,_[tt].disconnect($))}for(let V=0;V<O.added.length;V++){const $=O.added[V];let tt=v.indexOf($);if(tt===-1){for(let _t=0;_t<_.length;_t++)if(_t>=v.length){v.push($),tt=_t;break}else if(v[_t]===null){v[_t]=$,tt=_t;break}if(tt===-1)break}const gt=_[tt];gt&&gt.connect($)}}const X=new P,J=new P;function z(O,V,$){X.setFromMatrixPosition(V.matrixWorld),J.setFromMatrixPosition($.matrixWorld);const tt=X.distanceTo(J),gt=V.projectionMatrix.elements,_t=$.projectionMatrix.elements,ht=gt[14]/(gt[10]-1),Dt=gt[14]/(gt[10]+1),Gt=(gt[9]+1)/gt[5],Ut=(gt[9]-1)/gt[5],D=(gt[8]-1)/gt[0],Yt=(_t[8]+1)/_t[0],Ft=ht*D,zt=ht*Yt,xt=tt/(-D+Yt),jt=xt*-D;if(V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(jt),O.translateZ(xt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),gt[10]===-1)O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const At=ht+xt,R=Dt+xt,w=Ft-jt,G=zt+(tt-jt),et=Gt*Dt/R*At,it=Ut*Dt/R*At;O.projectionMatrix.makePerspective(w,G,et,it,At,R),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function rt(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let V=O.near,$=O.far;x.texture!==null&&(x.depthNear>0&&(V=x.depthNear),x.depthFar>0&&($=x.depthFar)),y.near=C.near=T.near=V,y.far=C.far=T.far=$,(L!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,U=y.far),T.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const tt=O.parent,gt=y.cameras;rt(y,tt);for(let _t=0;_t<gt.length;_t++)rt(gt[_t],tt);gt.length===2?z(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),at(O,y,tt)};function at(O,V,$){$===null?O.matrix.copy(V.matrixWorld):(O.matrix.copy($.matrixWorld),O.matrix.invert(),O.matrix.multiply(V.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=aa*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let wt=null;function K(O,V){if(h=V.getViewerPose(c||a),g=V,h!==null){const $=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let tt=!1;$.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let ht=0;ht<$.length;ht++){const Dt=$[ht];let Gt=null;if(p!==null)Gt=p.getViewport(Dt);else{const D=u.getViewSubImage(d,Dt);Gt=D.viewport,ht===0&&(t.setRenderTargetTextures(M,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(M))}let Ut=S[ht];Ut===void 0&&(Ut=new Be,Ut.layers.enable(ht),Ut.viewport=new oe,S[ht]=Ut),Ut.matrix.fromArray(Dt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Dt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),ht===0&&(y.matrix.copy(Ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push(Ut)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ht=u.getDepthInformation($[0]);ht&&ht.isValid&&ht.texture&&x.init(t,ht,i.renderState)}}for(let $=0;$<_.length;$++){const tt=v[$],gt=_[$];tt!==null&&gt!==void 0&&gt.update(tt,V,c||a)}wt&&wt(O,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const ct=new xl;ct.setAnimationLoop(K),this.setAnimationLoop=function(O){wt=O},this.dispose=function(){}}}const Fn=new sn,$p=new le;function Kp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ul(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,Fn.copy(v),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4($p.makeRotationFromEuler(Fn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jp(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(M,A);const E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){const _=u();M.__bindingPointIndex=_;const v=s.createBuffer(),A=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=i[M.id],v=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,y=C.length;S<y;S++){const L=C[S];if(p(L,E,S,A)===!0){const U=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Z=0;Z<F.length;Z++){const X=F[Z],J=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,U+q,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,_,v,A){const E=M.value,T=_+"_"+v;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const C=A[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const _=M.uniforms;let v=0;const A=16;for(let T=0,C=_.length;T<C;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,L=S.length;y<L;y++){const U=S[y],F=Array.isArray(U.value)?U.value:[U.value];for(let q=0,Z=F.length;q<Z;q++){const X=F[q],J=x(X),z=v%A,rt=z%J.boundary,at=z+rt;v+=rt,at!==0&&A-at<J.storage&&(v+=A-at),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=J.storage}}}const E=v%A;return E>0&&(v+=A-E),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Zp{constructor(t={}){const{canvas:e=wc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=An,this.toneMappingExposure=1;const v=this;let A=!1,E=0,T=0,C=null,S=-1,y=null;const L=new oe,U=new oe;let F=null;const q=new qt(0);let Z=0,X=e.width,J=e.height,z=1,rt=null,at=null;const wt=new oe(0,0,X,J),K=new oe(0,0,X,J);let ct=!1;const O=new xa;let V=!1,$=!1;this.transmissionResolutionScale=1;const tt=new le,gt=new le,_t=new P,ht=new oe,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Ut(){return C===null?z:1}let D=n;function Yt(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const k="webgl2";if(D=Yt(k,b),D===null)throw Yt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,zt,xt,jt,At,R,w,G,et,it,Q,Ct,pt,St,Qt,ot,bt,kt,Nt,Tt,Jt,Wt,ce,I;function ut(){Ft=new of(D),Ft.init(),Wt=new Vp(D,Ft),zt=new Qu(D,Ft,t,Wt),xt=new Gp(D,Ft),zt.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),jt=new hf(D),At=new Cp,R=new Hp(D,Ft,xt,At,zt,Wt,jt),w=new ef(v),G=new af(v),et=new mh(D),ce=new Zu(D,et),it=new lf(D,et,jt,ce),Q=new uf(D,it,et,jt),Nt=new df(D,zt,R),ot=new tf(At),Ct=new Ap(v,w,G,Ft,zt,ce,ot),pt=new Kp(v,At),St=new Pp,Qt=new Fp(Ft),kt=new ju(v,w,G,xt,Q,p,l),bt=new Op(v,Q,zt),I=new jp(D,jt,zt,xt),Tt=new Ju(D,Ft,jt),Jt=new cf(D,Ft,jt),jt.programs=Ct.programs,v.capabilities=zt,v.extensions=Ft,v.properties=At,v.renderLists=St,v.shadowMap=bt,v.state=xt,v.info=jt}ut();const j=new Yp(v,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(X,J,!1))},this.getSize=function(b){return b.set(X,J)},this.setSize=function(b,k,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,J=k,e.width=Math.floor(b*z),e.height=Math.floor(k*z),H===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(X*z,J*z).floor()},this.setDrawingBufferSize=function(b,k,H){X=b,J=k,z=H,e.width=Math.floor(b*H),e.height=Math.floor(k*H),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,k,H,W){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,k,H,W),xt.viewport(L.copy(wt).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,k,H,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,k,H,W),xt.scissor(U.copy(K).multiplyScalar(z).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){xt.setScissorTest(ct=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,H=!0){let W=0;if(b){let N=!1;if(C!==null){const st=C.texture.format;N=st===ga||st===ma||st===pa}if(N){const st=C.texture.type,ft=st===gn||st===Xn||st===Wi||st===xi||st===da||st===ua,Mt=kt.getClearColor(),Et=kt.getClearAlpha(),Bt=Mt.r,Ot=Mt.g,Rt=Mt.b;ft?(g[0]=Bt,g[1]=Ot,g[2]=Rt,g[3]=Et,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Bt,x[1]=Ot,x[2]=Rt,x[3]=Et,D.clearBufferiv(D.COLOR,0,x))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),kt.dispose(),St.dispose(),Qt.dispose(),At.dispose(),w.dispose(),G.dispose(),Q.dispose(),ce.dispose(),I.dispose(),Ct.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ca),j.removeEventListener("sessionend",Ra),Rn.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=jt.autoReset,k=bt.enabled,H=bt.autoUpdate,W=bt.needsUpdate,N=bt.type;ut(),jt.autoReset=b,bt.enabled=k,bt.autoUpdate=H,bt.needsUpdate=W,bt.type=N}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){const k=b.target;k.removeEventListener("dispose",Ht),ue(k)}function ue(b){we(b),At.remove(b)}function we(b){const k=At.get(b).programs;k!==void 0&&(k.forEach(function(H){Ct.releaseProgram(H)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,H,W,N,st){k===null&&(k=Dt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Rl(b,k,H,W,N);xt.setMaterial(W,ft);let Et=H.index,Bt=1;if(W.wireframe===!0){if(Et=it.getWireframeAttribute(H),Et===void 0)return;Bt=2}const Ot=H.drawRange,Rt=H.attributes.position;let te=Ot.start*Bt,ie=(Ot.start+Ot.count)*Bt;st!==null&&(te=Math.max(te,st.start*Bt),ie=Math.min(ie,(st.start+st.count)*Bt)),Et!==null?(te=Math.max(te,0),ie=Math.min(ie,Et.count)):Rt!=null&&(te=Math.max(te,0),ie=Math.min(ie,Rt.count));const ge=ie-te;if(ge<0||ge===1/0)return;ce.setup(N,W,Mt,H,Et);let fe,ee=Tt;if(Et!==null&&(fe=et.get(Et),ee=Jt,ee.setIndex(fe)),N.isMesh)W.wireframe===!0?(xt.setLineWidth(W.wireframeLinewidth*Ut()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(N.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),xt.setLineWidth(Pt*Ut()),N.isLineSegments?ee.setMode(D.LINES):N.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else N.isPoints?ee.setMode(D.POINTS):N.isSprite&&ee.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Nn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,Se=N._multiDrawCounts,se=N._multiDrawCount,We=Et?et.get(Et).bytesPerElement:1,$n=At.get(W).currentProgram.getUniforms();for(let Ue=0;Ue<se;Ue++)$n.setValue(D,"_gl_DrawID",Ue),ee.render(Pt[Ue]/We,Se[Ue])}else if(N.isInstancedMesh)ee.renderInstances(te,ge,N.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,Pt);ee.renderInstances(te,ge,Se)}else ee.render(te,ge)};function re(b,k,H){b.transparent===!0&&b.side===Je&&b.forceSinglePass===!1?(b.side=Re,b.needsUpdate=!0,ji(b,k,H),b.side=Cn,b.needsUpdate=!0,ji(b,k,H),b.side=Je):ji(b,k,H)}this.compile=function(b,k,H=null){H===null&&(H=b),f=Qt.get(H),f.init(k),_.push(f),H.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const Mt=st[ft];re(Mt,H,N),W.add(Mt)}else re(st,H,N),W.add(st)}),f=_.pop(),W},this.compileAsync=function(b,k,H=null){const W=this.compile(b,k,H);return new Promise(N=>{function st(){if(W.forEach(function(ft){At.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){N(b);return}setTimeout(st,10)}Ft.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ve=null;function rn(b){Ve&&Ve(b)}function Ca(){Rn.stop()}function Ra(){Rn.start()}const Rn=new xl;Rn.setAnimationLoop(rn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(b){Ve=b,j.setAnimationLoop(b),b===null?Rn.stop():Rn.start()},j.addEventListener("sessionstart",Ca),j.addEventListener("sessionend",Ra),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,C),f=Qt.get(b,_.length),f.init(k),_.push(f),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O.setFromProjectionMatrix(gt),$=this.localClippingEnabled,V=ot.init(this.clippingPlanes,$),m=St.get(b,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&ks(st,k,-1/0,v.sortObjects)}ks(b,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,at),Gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Gt&&kt.addToRenderList(m,b),this.info.render.frame++,V===!0&&ot.beginShadows();const H=f.state.shadowsArray;bt.render(H,b,k),V===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(f.setupLights(),k.isArrayCamera){const st=k.cameras;if(N.length>0)for(let ft=0,Mt=st.length;ft<Mt;ft++){const Et=st[ft];La(W,N,b,Et)}Gt&&kt.render(b);for(let ft=0,Mt=st.length;ft<Mt;ft++){const Et=st[ft];Pa(m,b,Et,Et.viewport)}}else N.length>0&&La(W,N,b,k),Gt&&kt.render(b),Pa(m,b,k);C!==null&&T===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,k),ce.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(f=_[_.length-1],V===!0&&ot.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ks(b,k,H,W){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){W&&ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const ft=Q.update(b),Mt=b.material;Mt.visible&&m.push(b,ft,Mt,H,ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||O.intersectsObject(b))){const ft=Q.update(b),Mt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ht.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ht.copy(ft.boundingSphere.center)),ht.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){const Et=ft.groups;for(let Bt=0,Ot=Et.length;Bt<Ot;Bt++){const Rt=Et[Bt],te=Mt[Rt.materialIndex];te&&te.visible&&m.push(b,ft,te,H,ht.z,Rt)}}else Mt.visible&&m.push(b,ft,Mt,H,ht.z,null)}}const st=b.children;for(let ft=0,Mt=st.length;ft<Mt;ft++)ks(st[ft],k,H,W)}function Pa(b,k,H,W){const N=b.opaque,st=b.transmissive,ft=b.transparent;f.setupLightsView(H),V===!0&&ot.setGlobalState(v.clippingPlanes,H),W&&xt.viewport(L.copy(W)),N.length>0&&Ki(N,k,H),st.length>0&&Ki(st,k,H),ft.length>0&&Ki(ft,k,H),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function La(b,k,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new qn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?qi:gn,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const st=f.state.transmissionRenderTarget[W.id],ft=W.viewport||L;st.setSize(ft.z*v.transmissionResolutionScale,ft.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(q),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&kt.render(H);const Et=v.toneMapping;v.toneMapping=An;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),V===!0&&ot.setGlobalState(v.clippingPlanes,W),Ki(b,H,W),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Rt=0,te=k.length;Rt<te;Rt++){const ie=k[Rt],ge=ie.object,fe=ie.geometry,ee=ie.material,Pt=ie.group;if(ee.side===Je&&ge.layers.test(W.layers)){const Se=ee.side;ee.side=Re,ee.needsUpdate=!0,Da(ge,H,W,fe,ee,Pt),ee.side=Se,ee.needsUpdate=!0,Ot=!0}}Ot===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}v.setRenderTarget(Mt),v.setClearColor(q,Z),Bt!==void 0&&(W.viewport=Bt),v.toneMapping=Et}function Ki(b,k,H){const W=k.isScene===!0?k.overrideMaterial:null;for(let N=0,st=b.length;N<st;N++){const ft=b[N],Mt=ft.object,Et=ft.geometry,Bt=W===null?ft.material:W,Ot=ft.group;Mt.layers.test(H.layers)&&Da(Mt,k,H,Et,Bt,Ot)}}function Da(b,k,H,W,N,st){b.onBeforeRender(v,k,H,W,N,st),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,k,H,W,b,st),N.transparent===!0&&N.side===Je&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,v.renderBufferDirect(H,k,W,N,b,st),N.side=Cn,N.needsUpdate=!0,v.renderBufferDirect(H,k,W,N,b,st),N.side=Je):v.renderBufferDirect(H,k,W,N,b,st),b.onAfterRender(v,k,H,W,N,st)}function ji(b,k,H){k.isScene!==!0&&(k=Dt);const W=At.get(b),N=f.state.lights,st=f.state.shadowsArray,ft=N.state.version,Mt=Ct.getParameters(b,N.state,st,k,H),Et=Ct.getProgramCacheKey(Mt);let Bt=W.programs;W.environment=b.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(b.isMeshStandardMaterial?G:w).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",Ht),Bt=new Map,W.programs=Bt);let Ot=Bt.get(Et);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===ft)return Ua(b,Mt),Ot}else Mt.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Mt,v),Ot=Ct.acquireProgram(Mt,Et),Bt.set(Et,Ot),W.uniforms=Mt.uniforms;const Rt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),Ua(b,Mt),W.needsLights=Ll(b),W.lightsStateVersion=ft,W.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function Ia(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ua(b,k){const H=At.get(b);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Rl(b,k,H,W,N){k.isScene!==!0&&(k=Dt),R.resetTextureUnits();const st=k.fog,ft=W.isMeshStandardMaterial?k.environment:null,Mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mi,Et=(W.isMeshStandardMaterial?G:w).get(W.envMap||ft),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color;let ge=An;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ge=v.toneMapping);const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=fe!==void 0?fe.length:0,Pt=At.get(W),Se=f.state.lights;if(V===!0&&($===!0||b!==y)){const Ae=b===y&&W.id===S;ot.setState(W,b,Ae)}let se=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Se.state.version||Pt.outputColorSpace!==Mt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==Et||W.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Bt||Pt.vertexTangents!==Ot||Pt.morphTargets!==Rt||Pt.morphNormals!==te||Pt.morphColors!==ie||Pt.toneMapping!==ge||Pt.morphTargetsCount!==ee)&&(se=!0):(se=!0,Pt.__version=W.version);let We=Pt.currentProgram;se===!0&&(We=ji(W,k,N));let $n=!1,Ue=!1,Pi=!1;const he=We.getUniforms(),ze=Pt.uniforms;if(xt.useProgram(We.program)&&($n=!0,Ue=!0,Pi=!0),W.id!==S&&(S=W.id,Ue=!0),$n||y!==b){xt.buffers.depth.getReversed()?(tt.copy(b.projectionMatrix),Tc(tt),Ec(tt),he.setValue(D,"projectionMatrix",tt)):he.setValue(D,"projectionMatrix",b.projectionMatrix),he.setValue(D,"viewMatrix",b.matrixWorldInverse);const Le=he.map.cameraPosition;Le!==void 0&&Le.setValue(D,_t.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&he.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ue=!0,Pi=!0)}if(N.isSkinnedMesh){he.setOptional(D,N,"bindMatrix"),he.setOptional(D,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),he.setValue(D,"boneTexture",Ae.boneTexture,R))}N.isBatchedMesh&&(he.setOptional(D,N,"batchingTexture"),he.setValue(D,"batchingTexture",N._matricesTexture,R),he.setOptional(D,N,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",N._indirectTexture,R),he.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",N._colorsTexture,R));const Ge=H.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&Nt.update(N,H,We),(Ue||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,he.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ze.envMap.value=Et,ze.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(ze.envMapIntensity.value=k.environmentIntensity),Ue&&(he.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&Pl(ze,Pi),st&&W.fog===!0&&pt.refreshFogUniforms(ze,st),pt.refreshMaterialUniforms(ze,W,z,J,f.state.transmissionRenderTarget[b.id]),As.upload(D,Ia(Pt),ze,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(As.upload(D,Ia(Pt),ze,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&he.setValue(D,"center",N.center),he.setValue(D,"modelViewMatrix",N.modelViewMatrix),he.setValue(D,"normalMatrix",N.normalMatrix),he.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ae=W.uniformsGroups;for(let Le=0,Fs=Ae.length;Le<Fs;Le++){const Pn=Ae[Le];I.update(Pn,We),I.bind(Pn,We)}}return We}function Pl(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Ll(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,k,H){At.get(b.texture).__webglTexture=k,At.get(b.depthTexture).__webglTexture=H;const W=At.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const H=At.get(b);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0};const Dl=D.createFramebuffer();this.setRenderTarget=function(b,k=0,H=0){C=b,E=k,T=H;let W=!0,N=null,st=!1,ft=!1;if(b){const Et=At.get(b);if(Et.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Et.__hasExternalTextures)R.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Rt=b.depthTexture;if(Et.__boundDepthTexture!==Rt){if(Rt!==null&&At.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ft=!0);const Ot=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?N=Ot[k][H]:N=Ot[k],st=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?N=At.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[H]:N=Ot,L.copy(b.viewport),U.copy(b.scissor),F=b.scissorTest}else L.copy(wt).multiplyScalar(z).floor(),U.copy(K).multiplyScalar(z).floor(),F=ct;if(H!==0&&(N=Dl),xt.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&xt.drawBuffers(b,N),xt.viewport(L),xt.scissor(U),xt.setScissorTest(F),st){const Et=At.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Et.__webglTexture,H)}else if(ft){const Et=At.get(b.texture),Bt=k;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,H,Bt)}else if(b!==null&&H!==0){const Et=At.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(b,k,H,W,N,st,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const Et=b.texture,Bt=Et.format,Ot=Et.type;if(!zt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-W&&H>=0&&H<=b.height-N&&D.readPixels(k,H,W,N,Wt.convert(Bt),Wt.convert(Ot),st)}finally{const Et=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,k,H,W,N,st,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const Et=b.texture,Bt=Et.format,Ot=Et.type;if(!zt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-W&&H>=0&&H<=b.height-N){xt.bindFramebuffer(D.FRAMEBUFFER,Mt);const Rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(k,H,W,N,Wt.convert(Bt),Wt.convert(Ot),0);const te=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,te);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bc(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(Rt),D.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,H=0){b.isTexture!==!0&&(Nn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-H),N=Math.floor(b.image.width*W),st=Math.floor(b.image.height*W),ft=k!==null?k.x:0,Mt=k!==null?k.y:0;R.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ft,Mt,N,st),xt.unbindTexture()};const Il=D.createFramebuffer(),Ul=D.createFramebuffer();this.copyTextureToTexture=function(b,k,H=null,W=null,N=0,st=null){b.isTexture!==!0&&(Nn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],k=arguments[2],st=arguments[3]||0,H=null),st===null&&(N!==0?(Nn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=N,N=0):st=0);let ft,Mt,Et,Bt,Ot,Rt,te,ie,ge;const fe=b.isCompressedTexture?b.mipmaps[st]:b.image;if(H!==null)ft=H.max.x-H.min.x,Mt=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Bt=H.min.x,Ot=H.min.y,Rt=H.isBox3?H.min.z:0;else{const Ge=Math.pow(2,-N);ft=Math.floor(fe.width*Ge),Mt=Math.floor(fe.height*Ge),b.isDataArrayTexture?Et=fe.depth:b.isData3DTexture?Et=Math.floor(fe.depth*Ge):Et=1,Bt=0,Ot=0,Rt=0}W!==null?(te=W.x,ie=W.y,ge=W.z):(te=0,ie=0,ge=0);const ee=Wt.convert(k.format),Pt=Wt.convert(k.type);let Se;k.isData3DTexture?(R.setTexture3D(k,0),Se=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Se=D.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),We=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$n=D.getParameter(D.UNPACK_SKIP_PIXELS),Ue=D.getParameter(D.UNPACK_SKIP_ROWS),Pi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const he=b.isDataArrayTexture||b.isData3DTexture,ze=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Ge=At.get(b),Ae=At.get(k),Le=At.get(Ge.__renderTarget),Fs=At.get(Ae.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Le.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Pn=0;Pn<Et;Pn++)he&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(b).__webglTexture,N,Rt+Pn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(k).__webglTexture,st,ge+Pn)),D.blitFramebuffer(Bt,Ot,ft,Mt,te,ie,ft,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||At.has(b)){const Ge=At.get(b),Ae=At.get(k);xt.bindFramebuffer(D.READ_FRAMEBUFFER,Il),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ul);for(let Le=0;Le<Et;Le++)he?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,N,Rt+Le):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,N),ze?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,st,ge+Le):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,st),N!==0?D.blitFramebuffer(Bt,Ot,ft,Mt,te,ie,ft,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):ze?D.copyTexSubImage3D(Se,st,te,ie,ge+Le,Bt,Ot,ft,Mt):D.copyTexSubImage2D(Se,st,te,ie,Bt,Ot,ft,Mt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ze?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Se,st,te,ie,ge,ft,Mt,Et,ee,Pt,fe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,st,te,ie,ge,ft,Mt,Et,ee,fe.data):D.texSubImage3D(Se,st,te,ie,ge,ft,Mt,Et,ee,Pt,fe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,te,ie,ft,Mt,ee,Pt,fe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,te,ie,fe.width,fe.height,ee,fe.data):D.texSubImage2D(D.TEXTURE_2D,st,te,ie,ft,Mt,ee,Pt,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$n),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),st===0&&k.generateMipmaps&&D.generateMipmap(Se),xt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,H=null,W=null,N=0){return b.isTexture!==!0&&(Nn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,b=arguments[2],k=arguments[3],N=arguments[4]||0),Nn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,H,W,N)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,xt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Jp{constructor(){B(this,"ctx",null);B(this,"masterGain",null);B(this,"noiseBuffer",null);B(this,"tireSource",null);B(this,"tireFilter",null);B(this,"tireGain",null);B(this,"windSource",null);B(this,"windFilter",null);B(this,"windGain",null);B(this,"hubOsc",null);B(this,"hubLfo",null);B(this,"hubLfoGain",null);B(this,"hubFilter",null);B(this,"hubGain",null);B(this,"skidSource",null);B(this,"skidFilter",null);B(this,"skidGain",null);B(this,"volume",.7);B(this,"initialized",!1)}unlock(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination);const e=this.ctx.sampleRate,n=e*2;this.noiseBuffer=this.ctx.createBuffer(1,n,e);const i=this.noiseBuffer.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1;this.tireSource=this.ctx.createBufferSource(),this.tireSource.buffer=this.noiseBuffer,this.tireSource.loop=!0,this.tireFilter=this.ctx.createBiquadFilter(),this.tireFilter.type="bandpass",this.tireFilter.frequency.value=320,this.tireFilter.Q.value=1.1,this.tireGain=this.ctx.createGain(),this.tireGain.gain.value=0,this.tireSource.connect(this.tireFilter),this.tireFilter.connect(this.tireGain),this.tireGain.connect(this.masterGain),this.tireSource.start(),this.windSource=this.ctx.createBufferSource(),this.windSource.buffer=this.noiseBuffer,this.windSource.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=450,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windSource.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windSource.start(),this.hubOsc=this.ctx.createOscillator(),this.hubOsc.type="sawtooth",this.hubOsc.frequency.value=160,this.hubFilter=this.ctx.createBiquadFilter(),this.hubFilter.type="bandpass",this.hubFilter.frequency.value=1800,this.hubFilter.Q.value=3.2,this.hubGain=this.ctx.createGain(),this.hubGain.gain.value=0,this.hubLfo=this.ctx.createOscillator(),this.hubLfo.type="square",this.hubLfo.frequency.value=28,this.hubLfoGain=this.ctx.createGain(),this.hubLfoGain.gain.value=.02,this.hubOsc.connect(this.hubFilter),this.hubFilter.connect(this.hubGain),this.hubGain.connect(this.masterGain),this.hubOsc.start(),this.hubLfo.start(),this.skidSource=this.ctx.createBufferSource(),this.skidSource.buffer=this.noiseBuffer,this.skidSource.loop=!0,this.skidFilter=this.ctx.createBiquadFilter(),this.skidFilter.type="highpass",this.skidFilter.frequency.value=950,this.skidGain=this.ctx.createGain(),this.skidGain.gain.value=0,this.skidSource.connect(this.skidFilter),this.skidFilter.connect(this.skidGain),this.skidGain.connect(this.masterGain),this.skidSource.start(),this.initialized=!0}catch{}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.04)}silenceContinuous(){var e,n,i,r;if(!this.initialized||!this.ctx)return;const t=this.ctx.currentTime;(e=this.tireGain)==null||e.gain.setTargetAtTime(0,t,.05),(n=this.windGain)==null||n.gain.setTargetAtTime(0,t,.05),(i=this.hubGain)==null||i.gain.setTargetAtTime(0,t,.05),(r=this.skidGain)==null||r.gain.setTargetAtTime(0,t,.05)}updateContinuous(t,e){var c,h,u,d,p,g,x,m,f;if(!this.initialized||!this.ctx)return;const n=this.ctx.currentTime,i=Math.abs(t.speed),r=Math.min(1,i/24);if(t.grounded&&!t.crashed&&i>.4){const v=({dirt:340,mud:195,wood:520,rock:660,metal:880,grass:240,concrete:460}[t.surface]??340)+r*380,A=(t.surface==="mud"?.16:t.surface==="wood"?.14:.11)*r;(c=this.tireFilter)==null||c.frequency.setTargetAtTime(v,n,.06),(h=this.tireGain)==null||h.gain.setTargetAtTime(A,n,.05)}else(u=this.tireGain)==null||u.gain.setTargetAtTime(0,n,.05);const a=t.grounded?1:1.5,o=Math.max(0,(r-.15)*.14*a);if((d=this.windFilter)==null||d.frequency.setTargetAtTime(280+r*950,n,.08),(p=this.windGain)==null||p.gain.setTargetAtTime(t.crashed?0:o,n,.08),!e&&i>2.2&&!t.crashed){const M=65+Math.min(260,i*11.5);(g=this.hubOsc)==null||g.frequency.setTargetAtTime(M,n,.04),(x=this.hubGain)==null||x.gain.setTargetAtTime(.032*Math.min(1,i/12),n,.05)}else(m=this.hubGain)==null||m.gain.setTargetAtTime(0,n,.04);const l=t.skidding&&t.grounded&&!t.crashed?.14*Math.min(1,i/8):0;(f=this.skidGain)==null||f.gain.setTargetAtTime(l,n,.04)}playHop(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(260,t+.11),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.13),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.14)}playLanding(t,e){if(!this.initialized||!this.ctx||!this.masterGain)return;const n=this.ctx.currentTime,i=Math.max(.15,Math.min(1,t)),r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine";const o=e==="wood"?145:e==="metal"?210:105;if(r.frequency.setValueAtTime(o,n),r.frequency.exponentialRampToValueAtTime(34,n+.16),a.gain.setValueAtTime(.28*i,n),a.gain.exponentialRampToValueAtTime(.001,n+.18),r.connect(a),a.connect(this.masterGain),r.start(n),r.stop(n+.19),this.noiseBuffer){const l=this.ctx.createBufferSource();l.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=e==="mud"?450:1650;const h=this.ctx.createGain();h.gain.setValueAtTime(.12*i,n),h.gain.exponentialRampToValueAtTime(.001,n+.11),l.connect(c),c.connect(h),h.connect(this.masterGain),l.start(n),l.stop(n+.12)}}playPumpBoost(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(440,t+.14),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.17)}playTrick(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523.25,659.25].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.045),a.gain.setValueAtTime(.12,t+i*.045),a.gain.exponentialRampToValueAtTime(.001,t+i*.045+.16),r.connect(a),a.connect(this.masterGain),r.start(t+i*.045),r.stop(t+i*.045+.17)})}playCheckpoint(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,t+i*.06),a.gain.setValueAtTime(.14,t+i*.06),a.gain.exponentialRampToValueAtTime(.001,t+i*.06+.2),r.connect(a),a.connect(this.masterGain),r.start(t+i*.06),r.stop(t+i*.06+.22)})}playCargoTag(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[587.33,880,1174.66].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.05),a.gain.setValueAtTime(.15,t+i*.05),a.gain.exponentialRampToValueAtTime(.001,t+i*.05+.24),r.connect(a),a.connect(this.masterGain),r.start(t+i*.05),r.stop(t+i*.05+.25)})}playChallengeComplete(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,t+i*.07),a.gain.setValueAtTime(.16,t+i*.07),a.gain.exponentialRampToValueAtTime(.001,t+i*.07+.3),r.connect(a),a.connect(this.masterGain),r.start(t+i*.07),r.stop(t+i*.07+.32)})}playCrash(){if(!this.initialized||!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();if(e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(28,t+.35),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.38),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.4),this.noiseBuffer){const i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=600;const a=this.ctx.createGain();a.gain.setValueAtTime(.26,t),a.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(r),r.connect(a),a.connect(this.masterGain),i.start(t),i.stop(t+.32)}}}function Qp(s){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e.fillStyle=s.primaryColor,e.fillRect(0,0,256,256),s.pattern!=="solid"){if(e.fillStyle=s.accentColor,s.pattern==="stripes")for(let i=-256;i<512;i+=38)e.beginPath(),e.moveTo(i,0),e.lineTo(i+15,0),e.lineTo(i+115,256),e.lineTo(i+100,256),e.closePath(),e.fill();else if(s.pattern==="splatter")for(let i=0;i<50;i++){const r=i*73%256,a=i*137%256,o=4+i%13;e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()}else if(s.pattern==="camo")for(let i=0;i<28;i++){const r=i*53%256,a=i*97%256;e.fillStyle=i%2===0?s.accentColor:"#1f2937",e.beginPath(),e.ellipse(r,a,24+i%18,12+i%12,i%5*.5,0,Math.PI*2),e.fill()}else if(s.pattern==="racing"){e.fillRect(0,98,256,60),e.fillStyle="#ffffff";const i=16;for(let r=0;r<256;r+=i)r/i%2===0&&(e.fillRect(r,84,i,10),e.fillRect(r,162,i,10))}}const n=new ih(t);return n.wrapS=Vi,n.wrapT=Vi,n.colorSpace=Ne,n}function me(s,t,e,n,i,r=7){const a=new P().subVectors(t,s),o=Math.max(.001,a.length()),l=new Zt(n,e,o,r),c=new Y(l,i);return c.position.copy(s).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),c.castShadow=!0,c.receiveShadow=!0,c}function je(s,t,e,n,i,r=6){const a=new P().subVectors(t,s),o=Math.max(.001,a.length()),l=new Zt(n,e,o,r),c=new Y(l,i);return c.position.copy(s).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),c.castShadow=!0,c.receiveShadow=!0,c}function tm(s,t){const e=new Lt,n=new P().subVectors(t,s),i=n.length(),r=new lt({color:2237739,roughness:.4,metalness:.55,flatShading:!0}),a=new lt({color:13358561,roughness:.2,metalness:.85,flatShading:!0}),o=new lt({color:1513757,roughness:.5,metalness:.4,flatShading:!0}),l=new Y(new Zt(.011,.011,i,6),a);l.position.y=i*.5;const c=new Y(new Zt(.02,.02,i*.45,7),r);c.position.y=i*.72;const h=new Y(new Zt(.015,.015,i*.32,6),r);h.position.set(0,i*.76,.03),e.add(l,c,h);const u=7,d=i*.16,p=i*.54,g=new mn(.029,.0075,5,10);for(let x=0;x<u;x++){const m=new Y(g,o);m.rotation.x=Math.PI/2+.14,m.position.y=d+x/(u-1)*p,m.castShadow=!0,e.add(m)}return e.position.copy(s),e.quaternion.setFromUnitVectors(new P(0,1,0),n.normalize()),e}function Oo(s,t,e){const n=new Lt,i=new lt({color:1645086,roughness:.9,metalness:.05,flatShading:!0}),r=new Y(new mn(s-.052,.058,8,22),i);r.rotation.y=Math.PI/2,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const a=new yt(.088,.024,.036),o=24;for(let f=0;f<o;f++){const M=f/o*Math.PI*2,_=new Y(a,i);_.position.set(0,Math.cos(M)*(s+.004),Math.sin(M)*(s+.004)),_.rotation.x=-M,_.castShadow=!0,n.add(_)}const l=new lt({color:t,roughness:.34,metalness:.55,flatShading:!0}),c=new Y(new mn(s-.105,.026,6,22),l);c.rotation.y=Math.PI/2,n.add(c);const h=new lt({color:13949150,roughness:.3,metalness:.78,flatShading:!0}),u=new Y(new Zt(.034,.034,.135,8),h);u.rotation.z=Math.PI/2,n.add(u);const d=new lt({color:14870768,roughness:.25,metalness:.85,flatShading:!0}),p=new Y(new mn(.095,.013,5,14),d);p.rotation.y=Math.PI/2,p.position.x=.055,n.add(p);for(let f=0;f<6;f++){const M=f/6*Math.PI,_=new Y(new yt(.007,.18,.015),d);_.position.x=.055,_.rotation.x=M,n.add(_)}if(e){const f=new lt({color:9741240,roughness:.35,metalness:.75,flatShading:!0}),M=new Y(new Zt(.075,.075,.012,10),f);M.rotation.z=Math.PI/2,M.position.x=-.052;const _=new Y(new Zt(.052,.052,.018,10),f);_.rotation.z=Math.PI/2,_.position.x=-.064,n.add(M,_)}const g=new lt({color:13358561,roughness:.4,metalness:.75}),x=12,m=new Zt(.0032,.0032,(s-.105)*2,4);for(let f=0;f<x;f++){const M=f/x*Math.PI,_=new Y(m,g);_.rotation.x=M,_.position.x=f%2===0?.014:-.014,n.add(_)}return n}class em{constructor(t,e,n){B(this,"root",new Lt);B(this,"wheelPivot",new Lt);B(this,"bikeBody",new Lt);B(this,"chassis",new Lt);B(this,"steerGroup",new Lt);B(this,"forkLowerGroup",new Lt);B(this,"rearSwingarm",new Lt);B(this,"frontWheel",new Lt);B(this,"rearWheel",new Lt);B(this,"crankGroup",new Lt);B(this,"riderGroup",new Lt);B(this,"fpCockpit",new Lt);B(this,"fpSteerAssembly",new Lt);B(this,"fpBarGroup",new Lt);B(this,"fpLeftArm",new Lt);B(this,"fpRightArm",new Lt);B(this,"fpHelmetAnchor",new pe);B(this,"riderTorso",new Lt);B(this,"riderHead",new Lt);B(this,"spec");B(this,"upgrades");B(this,"livery");B(this,"liveryTex",null);B(this,"firstPerson",!1);this.spec=t,this.upgrades=e,this.livery=n,this.root.add(this.wheelPivot),this.wheelPivot.add(this.bikeBody),this.rebuild(t,e,n)}rebuild(t,e,n){this.spec=t,this.upgrades=e,this.livery=n,this.bikeBody.clear(),this.liveryTex&&this.liveryTex.dispose(),this.liveryTex=Qp(n),this.chassis=new Lt,this.steerGroup=new Lt,this.forkLowerGroup=new Lt,this.rearSwingarm=new Lt,this.crankGroup=new Lt,this.riderGroup=new Lt,this.fpCockpit=new Lt,this.fpSteerAssembly=new Lt,this.fpBarGroup=new Lt,this.fpLeftArm=new Lt,this.fpRightArm=new Lt,this.fpHelmetAnchor=new pe;const i=t.wheelRadius,r=t.wheelbase*.5,a=new lt({map:this.liveryTex,roughness:.42,metalness:.12,flatShading:!0}),o=new lt({color:1711136,roughness:.45,metalness:.55,flatShading:!0}),l=new lt({color:n.forkColor,roughness:.42,metalness:.3,flatShading:!0}),c=e.fork===2?2237739:14195740,h=new lt({color:c,roughness:.22,metalness:.78,flatShading:!0}),u=new lt({color:1447964,roughness:.88,flatShading:!0}),d=new lt({color:14261030,roughness:.3,metalness:.75,flatShading:!0}),p=new P(0,i,-r),g=new P(0,i-.035,-.06),x=new P(0,i+.03,.08),m=new P(0,i+.27,-.14),f=new P(0,i+.41,-.21),M=new P(0,i+.55,r-.26),_=new P(0,i+.39,r-.18);this.chassis.add(me(g,x,.033,.035,a,7)),this.chassis.add(me(x,_,.035,.034,a,7)),this.chassis.add(me(f,M,.026,.028,a,7)),this.chassis.add(me(new P(0,i+.44,r-.36),_,.02,.02,a,6)),this.chassis.add(me(g,m,.027,.026,a,7)),this.chassis.add(me(m,f,.025,.024,a,7)),this.chassis.add(me(_,M,.034,.034,a,8));const v=new Y(new Zt(.036,.036,.095,8),a);v.rotation.z=Math.PI/2,v.position.copy(g),this.chassis.add(v);const A=new P(0,i+.49,-.26);this.chassis.add(me(f,A,.017,.016,o,6));const E=new Y(new yt(.125,.04,.24),new lt({color:1513500,roughness:.82,flatShading:!0}));if(E.position.copy(A).add(new P(0,.015,-.02)),E.rotation.x=.14,E.castShadow=!0,this.chassis.add(E),t.fullSuspension){const _t=new P(0,i+.21,-.26),ht=new P(0,i+.35,.13);this.chassis.add(tm(_t,ht));for(const Dt of[-1,1])this.chassis.add(me(new P(Dt*.035,i+.28,-.14),new P(Dt*.035,i+.21,-.27),.012,.012,o,5))}this.rearSwingarm.position.copy(g);const T=new P().subVectors(p,g),C=new P(0,.25,-.18);for(const _t of[-1,1]){const ht=new P(_t*.078,0,0);this.rearSwingarm.add(me(new P(_t*.042,0,0),T.clone().add(ht),.017,.014,a,6)),this.rearSwingarm.add(me(C.clone().add(new P(_t*.04,0,0)),T.clone().add(ht),.015,.013,a,6))}const S=new Y(new yt(.035,.05,.06),o);S.position.copy(T).add(new P(.065,.08,.03)),this.rearSwingarm.add(S);const y=new lt({color:2500912,roughness:.5,metalness:.6});this.rearSwingarm.add(me(new P(-.055,.055,0),T.clone().add(new P(-.055,.05,0)),.005,.005,y,4)),this.rearSwingarm.add(me(new P(-.055,-.055,0),T.clone().add(new P(-.055,-.075,.04)),.005,.005,y,4));const L=new Y(new yt(.025,.09,.035),o);L.position.copy(T).add(new P(-.062,-.055,.025)),this.rearSwingarm.add(L),this.rearWheel=Oo(i,n.rimColor,!0),this.rearWheel.position.copy(T),this.rearSwingarm.add(this.rearWheel),this.chassis.add(this.rearSwingarm),this.crankGroup.position.copy(g);const U=new Y(new mn(.068,.011,5,14),o);U.rotation.y=Math.PI/2,U.position.x=-.055,this.crankGroup.add(U);const F=new P(.115,-.02,-.11),q=new P(-.115,.02,.11);this.crankGroup.add(me(new P(.065,0,0),F,.014,.012,o,5)),this.crankGroup.add(me(new P(-.065,0,0),q,.014,.012,o,5));const Z=new yt(.095,.018,.105),X=new Y(Z,o);X.position.copy(F);const J=new Y(Z,o);J.position.copy(q),this.crankGroup.add(X,J),this.chassis.add(this.crankGroup),this.steerGroup.position.copy(M);const z=.46;this.steerGroup.rotation.x=z;const rt=new yt(.195,.026,.062),at=new Y(rt,o);if(at.position.set(0,-.175,.012),at.castShadow=!0,this.steerGroup.add(at),t.dualCrown){const _t=new Y(rt,o);_t.position.set(0,.005,.012),_t.castShadow=!0,this.steerGroup.add(_t)}const wt=t.dualCrown?.45:.3,K=t.dualCrown?-.195:-.3;for(const _t of[-1,1]){const ht=new Y(new Zt(.02,.02,wt,8),h);ht.position.set(_t*.074,K,.012),ht.castShadow=!0,this.steerGroup.add(ht);const Dt=new Y(new Zt(.023,.023,.016,8),o);Dt.position.set(_t*.074,.024,.012),this.steerGroup.add(Dt)}const ct=new Y(new yt(.048,.036,.068),o);ct.position.set(0,.032,.028);const O=new Y(new Zt(.016,.016,.014,6),d);O.position.set(0,.026,-.002),this.steerGroup.add(ct,O);const V=new Lt;V.position.set(0,.048,.048),V.rotation.x=-z;const $=new Y(new Zt(.018,.018,.18,7),o);$.rotation.z=Math.PI/2,V.add($);for(const _t of[-1,1]){const ht=new P(_t*.085,0,0),Dt=new P(_t*.18,.036,-.012),Gt=new P(_t*.39,.042,-.038);V.add(me(ht,Dt,.016,.015,o,7)),V.add(me(Dt,Gt,.015,.014,o,7));const Ut=new P(_t*.255,.039,-.022);V.add(me(Ut,Gt,.02,.02,u,7));const D=new Y(new yt(.07,.011,.016),o);D.position.set(_t*.24,.022,.028),D.rotation.y=_t*-.25,V.add(D)}this.steerGroup.add(V),this.forkLowerGroup.position.set(0,-.42,.012);for(const _t of[-1,1]){const ht=new Y(new Zt(.026,.022,.42,8),l);ht.position.set(_t*.074,-.05,0),ht.castShadow=!0,this.forkLowerGroup.add(ht)}const tt=new Y(new yt(.18,.032,.042),l);tt.position.set(0,.145,.022);const gt=new Y(new yt(.035,.055,.05),o);gt.position.set(.07,-.18,-.045),this.forkLowerGroup.add(tt,gt),this.frontWheel=Oo(i,n.rimColor,!1),this.frontWheel.position.set(0,-.225,.025),this.forkLowerGroup.add(this.frontWheel),this.steerGroup.add(this.forkLowerGroup),this.chassis.add(this.steerGroup),this.buildRiderExact(i,g,F,q,n),this.chassis.add(this.riderGroup),this.buildExactFPCockpit(i,a,o,d,u),this.chassis.add(this.fpCockpit),this.chassis.add(this.fpHelmetAnchor),this.bikeBody.add(this.chassis),this.setFirstPerson(this.firstPerson)}buildRiderExact(t,e,n,i,r){this.riderTorso=new Lt,this.riderHead=new Lt;const a=new lt({color:2237484,roughness:.82,flatShading:!0}),o=new lt({color:14935788,roughness:.85,flatShading:!0}),l=new lt({color:15446925,roughness:.72,flatShading:!0}),c=new lt({color:1842723,roughness:.88,flatShading:!0}),h=new lt({color:3027257,roughness:.84,flatShading:!0}),u=new lt({color:1382172,roughness:.9,flatShading:!0}),d=new lt({color:16053494,roughness:.35,flatShading:!0}),p=new lt({color:r.accentColor||"#f97316",roughness:.4,flatShading:!0}),g=new lt({color:4936028,roughness:.85,flatShading:!0}),x=new lt({color:14256683,roughness:.16,metalness:.55,flatShading:!0}),m=e.clone().add(n).add(new P(0,.04,.02)),f=e.clone().add(i).add(new P(0,.04,.02)),M=t+.67,_=-.23;for(const ht of[m,f]){const Dt=new Y(new yt(.092,.068,.22),c);Dt.position.copy(ht).add(new P(0,.005,.03)),Dt.castShadow=!0;const Gt=new Y(new Zt(.036,.038,.075,6),l);Gt.position.copy(ht).add(new P(0,.06,-.02)),this.riderGroup.add(Dt,Gt)}const v=new P(.105,M,_),A=new P(-.105,M,_),E=new P(.115,t+.36,-.14),T=new P(-.115,t+.38,-.02);this.riderGroup.add(je(v,E,.078,.062,o,6)),this.riderGroup.add(je(E,m.clone().add(new P(0,.08,-.02)),.06,.046,o,6)),this.riderGroup.add(je(A,T,.078,.062,o,6)),this.riderGroup.add(je(T,f.clone().add(new P(0,.08,-.02)),.06,.046,o,6));const C=new Y(new Zt(.135,.145,.15,7),o);C.scale.set(1.15,1,.8),C.position.set(0,M+.02,_),C.castShadow=!0,this.riderGroup.add(C),this.riderTorso.position.set(0,M+.06,_);const S=new Y(new Zt(.155,.132,.45,7),a);S.scale.set(1.18,1,.78),S.position.set(0,.21,.11),S.rotation.x=.56,S.castShadow=!0,this.riderTorso.add(S);const y=new Y(new Zt(.145,.16,.12,7),a);y.scale.set(1.18,1,.82),y.position.set(0,.03,.01),y.rotation.x=.48,this.riderTorso.add(y);const L=new Lt;L.position.set(0,.26,-.035),L.rotation.x=.58;const U=new Y(new yt(.24,.34,.13),h);U.castShadow=!0;const F=new Y(new Zt(.11,.12,.23,6),h);F.rotation.z=Math.PI/2,F.position.set(0,.16,-.01);const q=new Y(new yt(.05,.15,.085),new lt({color:3883083,roughness:.85,flatShading:!0}));q.position.set(.125,-.04,-.01);const Z=q.clone();Z.position.x=-.125;const X=new Y(new yt(.35,.045,.23),u);X.position.set(0,-.1,.11),L.add(U,F,q,Z,X),this.riderTorso.add(L);const J=t+.59-(M+.06),z=this.spec.wheelbase*.5-.23-_;for(const ht of[-1,1]){const Dt=new P(ht*.175,.34,.18),Gt=new P(ht*.245,.18,.37),Ut=new P(ht*.305,J+.04,z-.05),D=new P(ht*.32,J+.01,z+.01);this.riderTorso.add(je(Dt,Gt,.056,.046,a,6)),this.riderTorso.add(je(Gt,Ut,.046,.036,a,6)),this.riderTorso.add(je(Ut,D,.034,.032,l,6));const Yt=new Y(new wi(.04,0),l);Yt.position.copy(D),this.riderTorso.add(Yt)}this.riderHead.position.set(0,.43,.27);const rt=new Y(new Zt(.052,.058,.11,6),l);rt.position.set(0,.02,-.01),this.riderHead.add(rt);const at=new Lt;at.position.set(0,.15,.025),at.rotation.x=.08;const wt=new Y(new Sa(.158,1),d);wt.scale.set(.92,1,1.15),wt.castShadow=!0,at.add(wt);const K=new Y(new yt(.055,.04,.25),p);K.position.set(0,.145,.02),K.rotation.x=.12,at.add(K);const ct=new Y(new yt(.21,.022,.175),d);ct.position.set(0,.12,.185),ct.rotation.x=-.14,ct.castShadow=!0;const O=new Y(new yt(.055,.026,.175),p);O.position.set(0,.122,.185),O.rotation.x=-.14,at.add(ct,O);const V=new Y(new yt(.185,.095,.175),d);V.position.set(0,-.075,.115),V.rotation.x=.24,V.castShadow=!0,at.add(V);const $=new Y(new yt(.15,.11,.12),l);$.position.set(0,-.005,.085),at.add($);const tt=new Y(new Zt(.155,.155,.048,10,1,!0),g);tt.scale.set(.95,1,1.16),tt.position.set(0,.022,.005),tt.rotation.x=.1;const gt=new Y(new yt(.21,.088,.055),u);gt.position.set(0,.015,.155);const _t=new Y(new yt(.185,.068,.03),x);_t.position.set(0,.015,.176),at.add(tt,gt,_t),this.riderHead.add(at),this.riderTorso.add(this.riderHead),this.riderGroup.add(this.riderTorso)}buildExactFPCockpit(t,e,n,i,r){const a=t+1.08,o=.02;this.fpHelmetAnchor.position.set(0,a,o),this.fpCockpit.position.set(0,a-.34,o+.56);const l=new Y(new yt(.052,.048,.78),e);l.position.set(0,-.15,-.28),l.rotation.x=.56,this.fpCockpit.add(l),this.fpSteerAssembly.position.set(0,0,0),this.fpCockpit.add(this.fpSteerAssembly);const c=new Y(new yt(.24,.032,.092),new lt({color:2497815,roughness:.45,metalness:.38,flatShading:!0}));c.position.set(0,-.046,.008),c.rotation.x=.26,this.fpSteerAssembly.add(c);const h=new lt({color:2234644,roughness:.4,metalness:.42,flatShading:!0});for(const v of[-1,1]){const A=new Y(new Zt(.037,.039,.038,8),h);A.position.set(v*.088,-.028,.01),A.rotation.x=.26,this.fpSteerAssembly.add(A)}const u=new Y(new yt(.056,.052,.115),n);u.position.set(0,0,.042);const d=new Y(new Zt(.022,.022,.022,7),i);d.position.set(0,-.018,-.008),d.rotation.x=.32,this.fpSteerAssembly.add(u,d);const p=new lt({color:1447706,roughness:.9,flatShading:!0}),g=new Y(new Zt(.038,.042,.15,7),p);g.rotation.x=Math.PI/2,g.position.set(0,.044,.185),this.fpSteerAssembly.add(g);for(let v=0;v<4;v++){const A=new Y(new yt(.052,.018,.022),p);A.position.set(0,.07-v*.004,.14+v*.03),this.fpSteerAssembly.add(A)}this.fpBarGroup.position.set(0,.026,.055),this.fpSteerAssembly.add(this.fpBarGroup);const x=new Y(new Zt(.018,.018,.14,7),n);x.rotation.z=Math.PI/2,this.fpBarGroup.add(x);for(const v of[-1,1]){const A=new P(v*.065,0,0),E=new P(v*.165,.03,-.015),T=new P(v*.42,.025,-.058);this.fpBarGroup.add(me(A,E,.017,.016,n,7)),this.fpBarGroup.add(me(E,T,.016,.015,n,7));const C=new P(v*.295,.027,-.038);this.fpBarGroup.add(me(C,T,.022,.022,r,7));const S=new Y(new yt(.036,.03,.042),n);S.position.set(v*.275,.028,-.012),this.fpBarGroup.add(S)}const m=new lt({color:2106160,roughness:.82,flatShading:!0}),f=new lt({color:9128984,roughness:.78,flatShading:!0}),M=new lt({color:15446925,roughness:.7,flatShading:!0}),_=(v,A)=>{const E=new P(v*.37,.028,-.052),T=new P(v*.56,.025,-.175),C=new P(v*.94,.145,-.36),S=new Y(new wi(.056,0),M);S.scale.set(1.1,.85,1),S.position.copy(E),A.add(S),A.add(je(E,T,.046,.058,M,6)),A.add(je(T,C,.068,.108,m,6));const y=T.clone().add(new P(v*.09,.072,-.04)),L=C.clone().add(new P(v*.02,.108,-.02));A.add(je(y,L,.042,.088,f,5))};_(1,this.fpLeftArm),_(-1,this.fpRightArm),this.fpCockpit.add(this.fpLeftArm,this.fpRightArm)}setFirstPerson(t){this.firstPerson=t,this.fpCockpit.visible=t;for(const e of this.chassis.children)e!==this.fpCockpit&&e!==this.fpHelmetAnchor&&(e.visible=!t)}getHelmetWorldTransform(t,e){this.root.updateMatrixWorld(!0),this.fpHelmetAnchor.getWorldPosition(t),this.root.getWorldQuaternion(e)}applyPhysicsState(t){const e=this.spec.wheelbase*.5;this.root.position.set(t.x,t.y,t.z),this.root.rotation.order="YXZ",this.root.rotation.set(0,t.yaw,0);let n=0,i=t.grounded?0:this.spec.wheelRadius+.35;t.grounded&&t.pivotMode==="rear"?(n=-e,i=0):t.grounded&&t.pivotMode==="front"&&(n=e,i=0),this.wheelPivot.position.set(0,i,n),this.bikeBody.position.set(0,-i,-n),this.wheelPivot.rotation.order="YXZ",this.wheelPivot.rotation.set(-t.pitch,t.whipAngle*.72,t.roll+t.tabletopAmount*.92+t.whipAngle*.32);const r=this.spec.forkTravel*t.frontCompression;this.forkLowerGroup.position.y=-.42+r;const a=this.spec.fullSuspension?t.rearCompression*.24:0;this.rearSwingarm.rotation.x=a;const o=(t.frontCompression*.5+t.rearCompression*.5)*.12;this.chassis.position.y=-o,this.steerGroup.rotation.y=t.steerAngle+t.barspinAngle,this.fpSteerAssembly.rotation.y=t.steerAngle*.85+t.barspinAngle,this.fpCockpit.position.y=this.spec.wheelRadius+1.08-.34-t.frontCompression*.055-t.crouchAmount*.04,this.fpCockpit.rotation.z=t.leanAngle*.18,this.fpLeftArm.position.set(0,0,Math.sin(t.steerAngle)*.16),this.fpRightArm.position.set(0,0,-Math.sin(t.steerAngle)*.16),this.frontWheel.rotation.x=t.wheelSpin,this.rearWheel.rotation.x=t.wheelSpin;const l=t.manualActive?-.14:t.stoppieActive?.12:0;this.riderGroup.position.set(t.leanAngle*.08,-t.crouchAmount*.15,l),this.riderTorso.rotation.z=-t.leanAngle*.26,this.riderTorso.rotation.x=t.crouchAmount*.2+(t.manualActive?-.18:t.stoppieActive?.18:0),t.crashed?(this.bikeBody.rotation.z=Math.min(1.42,t.crashTimer*3.8),this.bikeBody.position.y=-i+Math.max(0,Math.sin(Math.min(Math.PI,t.crashTimer*4))*.4)):this.bikeBody.rotation.z=0}}const Xi=[{id:"camber_ht",name:"Loamline DH-1",category:"Freeride / Downhill",description:"Signature dual-crown white freeride rig with Kashima gold stanchions, coil rear shock, and gold alloy rims. Balanced for manuals, stoppies, jumps, and rough trails.",cost:0,fullSuspension:!0,dualCrown:!0,wheelRadius:.37,wheelbase:1.26,forkTravel:.18,shockTravel:.17,maxSpeed:13.5,pedalPower:8.4,brakePower:16.5,hopPower:7.9,agility:1.15,grip:1.15,stability:1.22,defaultLivery:{primaryColor:"#f1f0ec",accentColor:"#f97316",forkColor:"#1b1d21",rimColor:"#d99b26",pattern:"solid"}},{id:"timber_150",name:"Timber 150",category:"All-Mountain",description:"150mm full-suspension trail bike built for Timber Shore roots, cedar bridges, and fast berm-to-berm flow.",cost:400,fullSuspension:!0,dualCrown:!1,wheelRadius:.365,wheelbase:1.24,forkTravel:.15,shockTravel:.14,maxSpeed:14,pedalPower:8.7,brakePower:17,hopPower:8.1,agility:1.22,grip:1.22,stability:1.24,defaultLivery:{primaryColor:"#2d6a4f",accentColor:"#d9ed92",forkColor:"#181a1f",rimColor:"#d99b26",pattern:"camo"}},{id:"kicker_dj",name:"Kicker DJ",category:"Slopestyle / Dirt Jump",description:"Lightweight slopestyle rig with snappy bunny hops, quick barspins, huge whips, and ultra-fast backflip & frontflip rotation.",cost:750,fullSuspension:!0,dualCrown:!1,wheelRadius:.345,wheelbase:1.16,forkTravel:.13,shockTravel:.11,maxSpeed:13.8,pedalPower:9,brakePower:17.2,hopPower:9,agility:1.42,grip:1.18,stability:1.28,defaultLivery:{primaryColor:"#0284c7",accentColor:"#facc15",forkColor:"#f8fafc",rimColor:"#facc15",pattern:"splatter"}},{id:"enduro_170",name:"Enduro 170",category:"Enduro Race",description:"Long, slack 170mm enduro frame. Eats deep mud ruts, rock gardens, and Harbour Yard container drops.",cost:1200,fullSuspension:!0,dualCrown:!0,wheelRadius:.37,wheelbase:1.28,forkTravel:.18,shockTravel:.17,maxSpeed:15,pedalPower:9.3,brakePower:18.2,hopPower:8.3,agility:1.24,grip:1.32,stability:1.38,defaultLivery:{primaryColor:"#dc2626",accentColor:"#f59e0b",forkColor:"#1b1d21",rimColor:"#dc2626",pattern:"racing"}},{id:"ridge_dh200",name:"Ridge DH 200",category:"World Cup Downhill",description:"Dual-crown 200mm carbon downhill rig. Built to hold warp speed down Summit Line and stomp massive road gaps.",cost:2e3,fullSuspension:!0,dualCrown:!0,wheelRadius:.375,wheelbase:1.31,forkTravel:.2,shockTravel:.2,maxSpeed:16.5,pedalPower:9.8,brakePower:19.5,hopPower:8.6,agility:1.28,grip:1.44,stability:1.52,defaultLivery:{primaryColor:"#1d2228",accentColor:"#a3e635",forkColor:"#111418",rimColor:"#a3e635",pattern:"racing"}}],zo={2:180,3:420},Go=[{name:"Alpine White",livery:{primaryColor:"#f1f0ec",accentColor:"#f97316",forkColor:"#1b1d21",rimColor:"#d99b26",pattern:"solid"}},{name:"Factory Lime",livery:{primaryColor:"#181d22",accentColor:"#a3e635",forkColor:"#111418",rimColor:"#a3e635",pattern:"racing"}},{name:"Timber Camo",livery:{primaryColor:"#2d6a4f",accentColor:"#b7e4c7",forkColor:"#1b2024",rimColor:"#d99b26",pattern:"camo"}},{name:"Harbour Crane",livery:{primaryColor:"#f59e0b",accentColor:"#111827",forkColor:"#1f2937",rimColor:"#f59e0b",pattern:"stripes"}},{name:"Red Bullion",livery:{primaryColor:"#dc2626",accentColor:"#fbbf24",forkColor:"#1b1d21",rimColor:"#d99b26",pattern:"racing"}},{name:"Glacier Sky",livery:{primaryColor:"#0284c7",accentColor:"#e0f2fe",forkColor:"#0f172a",rimColor:"#38bdf8",pattern:"splatter"}}];function Tn(s){return Xi.find(t=>t.id===s)??Xi[0]}function bl(s,t){const e=1+(t.fork-1)*.14,n=1+(t.shock-1)*.14,i=1+(t.tires-1)*.12,r=1+(t.brakes-1)*.15;return{...s,forkTravel:s.forkTravel*(1+(t.fork-1)*.08),shockTravel:s.fullSuspension?s.shockTravel*(1+(t.shock-1)*.08):0,maxSpeed:s.maxSpeed*(1+(t.tires-1)*.045+(t.shock-1)*.02),pedalPower:s.pedalPower*(1+(t.tires-1)*.06),brakePower:s.brakePower*r,hopPower:s.hopPower*(1+(t.fork-1)*.065),agility:s.agility*(1+(t.fork-1)*.04),grip:s.grip*i,stability:s.stability*(.5*e+.5*n)}}const Tl="loamline_profile_v2",Ls="loamline_replays_v1",El={cameraMode:"first_person",steeringSensitivity:1,tiltSteering:!1,touchControls:"auto",fov:88,shadows:!0,volume:.7,units:"kmh",showKeyHints:!0};function vr(){const s={},t={};for(const e of Xi)s[e.id]={fork:1,shock:1,tires:1,brakes:1},t[e.id]={...e.defaultLivery};return{mudCoins:250,selectedBikeId:"camber_ht",unlockedBikes:["camber_ht"],upgrades:s,liveries:t,completedChallenges:{},bestTimes:{},bestScores:{},collectedTags:{},settings:{...El}}}function nm(){var s;try{const t=localStorage.getItem(Tl);if(!t)return vr();const e=JSON.parse(t),n=vr(),i={...n,...e,settings:{...El,...e.settings??{}},upgrades:{...n.upgrades,...e.upgrades??{}},liveries:{...n.liveries,...e.liveries??{}},completedChallenges:e.completedChallenges??{},bestTimes:e.bestTimes??{},bestScores:e.bestScores??{},collectedTags:e.collectedTags??{},unlockedBikes:(s=e.unlockedBikes)!=null&&s.length?e.unlockedBikes:["camber_ht"]};return i.unlockedBikes.includes(i.selectedBikeId)||(i.selectedBikeId=i.unlockedBikes[0]),i}catch{return vr()}}function Qe(s){try{localStorage.setItem(Tl,JSON.stringify(s))}catch{}}function di(s,t){return s.upgrades[t]??{fork:1,shock:1,tires:1,brakes:1}}function Hi(s,t){return s.liveries[t]??{...Tn(t).defaultLivery}}function Aa(){try{const s=localStorage.getItem(Ls);if(!s)return[];const t=JSON.parse(s);return Array.isArray(t)?t:[]}catch{return[]}}function im(s){const t=Aa().filter(n=>n.id!==s.id),e=[s,...t].slice(0,6);try{localStorage.setItem(Ls,JSON.stringify(e))}catch{try{localStorage.setItem(Ls,JSON.stringify(e.slice(0,3)))}catch{}}return e}function sm(s){const t=Aa().filter(e=>e.id!==s);try{localStorage.setItem(Ls,JSON.stringify(t))}catch{}return t}const Hn=[{id:"training_hall",name:"GROUND PARK",subtitle:"7 Tasks · Valley Skills Trail",difficulty:1,accent:"#f59e0b",description:"Sunlit alpine valley skills line starting on a timber plank drop-in. Practice manuals, stoppies, bunny-hopping logs, berms, tabletops, and flips.",parTime:44,cargoTagCount:0,challenges:[{id:"th_1",title:"Manual for 2 s",description:"Hold Arrow Down while riding to manual for 2 seconds",reward:70,type:"manual_time",target:2},{id:"th_2",title:"Manual for 4 s",description:"Balance a continuous manual for 4 seconds",reward:110,type:"manual_time",target:4},{id:"th_3",title:"Stoppie for 1 s",description:"Hold S (Brake) + Arrow Up to nose-manual / stoppie for 1s",reward:95,type:"stoppie_time",target:1},{id:"th_4",title:"Clear the 15 cm log",description:"Bunny hop (Space) cleanly over the first trail log",reward:80,type:"log_clear",target:1},{id:"th_5",title:"Clear the 25 cm log",description:"Bunny hop cleanly over the medium trail log",reward:100,type:"log_clear",target:2},{id:"th_6",title:"Clear the 35 cm log",description:"Charge Space and hop cleanly over the tall trail log",reward:130,type:"log_clear",target:3},{id:"th_7",title:"Complete Ground Park",description:"Ride through the finish arch",reward:150,type:"finish_run",target:1}]},{id:"jump_park",name:"JUMP PARK",subtitle:"8 Jump Tasks · Big Air Dirt Line",difficulty:2,accent:"#f97316",description:"Sculpted golden dirt kickers, tabletops, and wooden booters built for massive air, sideways whips, barspins, frontflips, and backflips.",parTime:48,cargoTagCount:0,challenges:[{id:"jp_1",title:"Send It!",description:"Hit 3.5m vertical air height",reward:90,type:"air_height",target:3.5},{id:"jp_2",title:"Hangtime",description:"Stay airborne for 1.5 seconds in one jump",reward:100,type:"air_time",target:1.5},{id:"jp_3",title:"Whip Styles",description:"Stomp 2 Air Whips (Arrow Left/Right in air)",reward:110,type:"whip",target:2},{id:"jp_4",title:"Barspin Line",description:"Land 2 Barspins in one run (F in air)",reward:120,type:"barspin",target:2},{id:"jp_5",title:"Backflip",description:"Stomp a Backflip (Hold Arrow Down in air)",reward:180,type:"backflip",target:1},{id:"jp_6",title:"Frontflip",description:"Stomp a Frontflip (Hold Arrow Up in air)",reward:190,type:"frontflip",target:1},{id:"jp_7",title:"Flow Master",description:"Score 2,500+ points in a single run",reward:160,type:"total_score",target:2500},{id:"jp_8",title:"Clean Park Run",description:"Finish Jump Park with 4+ clean landings",reward:190,type:"clean_landings",target:4}]},{id:"timber_shore",name:"TIMBER SHORE",subtitle:"14 Challenges · Coastal Forest & North Shore",difficulty:3,accent:"#22c55e",description:"Pine-lined coastal singletrack loaded with wet mud pits, elevated North Shore cedar bridges, rock gardens, banked berms, and creek gaps.",parTime:65,cargoTagCount:0,challenges:[{id:"ts_1",title:"Mud Slinger",description:"Ride 35m through wet mud pits without crashing",reward:90,type:"mud_traverse",target:35},{id:"ts_2",title:"North Shore Rider",description:"Cover 45m on elevated timber bridges",reward:100,type:"wood_ride",target:45},{id:"ts_3",title:"Trail Pace",description:"Reach 52 km/h down Timber Shore",reward:100,type:"speed",target:52},{id:"ts_4",title:"Pump the Forest",description:"Land 4 Pump Boosts along the rollers (Shift)",reward:110,type:"pump_boosts",target:4},{id:"ts_5",title:"Creek Booster",description:"Hit 3.0m height over the forest jumps",reward:110,type:"air_height",target:3},{id:"ts_6",title:"Cedar Manual",description:"Manual for 3.0 seconds",reward:120,type:"manual_time",target:3},{id:"ts_7",title:"Trail Stoppie",description:"Hold a Stoppie for 1.2 seconds",reward:110,type:"stoppie_time",target:1.2},{id:"ts_8",title:"Smooth Suspension",description:"Nail 5 clean landings",reward:120,type:"clean_landings",target:5},{id:"ts_9",title:"Forest Whip",description:"Land 2 Whips between the pines",reward:130,type:"whip",target:2},{id:"ts_10",title:"Timber Barspin",description:"Throw 2 Barspins in one run",reward:140,type:"barspin",target:2},{id:"ts_11",title:"Drop Stomper",description:"Stomp 2 high drops cleanly",reward:150,type:"drop_stomp",target:2},{id:"ts_12",title:"Trail Combo",description:"Land a 900+ point single trick combo",reward:160,type:"combo_score",target:900},{id:"ts_13",title:"Shore Finisher",description:"Cross the Timber Shore finish arch",reward:170,type:"finish_run",target:1},{id:"ts_14",title:"Clean Descent",description:"Finish Timber Shore with zero crashes",reward:260,type:"no_crash_finish",target:1}]},{id:"harbour_yard",name:"HARBOUR YARD",subtitle:"17 Challenges · 13 Cargo Tags · Dockside Freeride",difficulty:4,accent:"#0ea5e9",description:"Industrial shipping port freeride zone packed with stacked cargo containers, steel ramps, dock gaps, cranes, and 13 collectible Cargo Tags.",parTime:78,cargoTagCount:13,challenges:[{id:"hy_1",title:"Dock Scout",description:"Collect 3 Cargo Tags in Harbour Yard",reward:100,type:"cargo_tags",target:3},{id:"hy_2",title:"Manifest Hunter",description:"Collect 7 Cargo Tags in Harbour Yard",reward:180,type:"cargo_tags",target:7},{id:"hy_3",title:"Full Cargo Sweep",description:"Collect all 13 Cargo Tags in Harbour Yard",reward:400,type:"cargo_tags",target:13},{id:"hy_4",title:"Container Speed",description:"Blast past 58 km/h across the pier",reward:110,type:"speed",target:58},{id:"hy_5",title:"Crane Air",description:"Launch 4.0m high off dockside ramps",reward:130,type:"air_height",target:4},{id:"hy_6",title:"Pier Hangtime",description:"Stay airborne for 1.7s off container drops",reward:140,type:"air_time",target:1.7},{id:"hy_7",title:"Loading Dock Manual",description:"Manual for 3.5 seconds along the dock",reward:140,type:"manual_time",target:3.5},{id:"hy_8",title:"Dockside Stoppie",description:"Hold a Stoppie for 1.5 seconds",reward:130,type:"stoppie_time",target:1.5},{id:"hy_9",title:"Steel Drop Stomp",description:"Stomp 3 container drops cleanly",reward:150,type:"drop_stomp",target:3},{id:"hy_10",title:"Harbour Whip",description:"Land 3 Air Whips",reward:140,type:"whip",target:3},{id:"hy_11",title:"Dockside Bars",description:"Land 3 Barspins",reward:150,type:"barspin",target:3},{id:"hy_12",title:"Yard Tabletop",description:"Land 2 Tabletops",reward:150,type:"tabletop",target:2},{id:"hy_13",title:"Port Backflip",description:"Stomp a Backflip in Harbour Yard",reward:220,type:"backflip",target:1},{id:"hy_14",title:"Yard Flow",description:"Score 3,500+ points in a single run",reward:180,type:"total_score",target:3500},{id:"hy_15",title:"Big Combo",description:"Land a 1,200+ point single combo",reward:200,type:"combo_score",target:1200},{id:"hy_16",title:"Pier Express",description:"Finish Harbour Yard in under 78 seconds",reward:240,type:"finish_time",target:78},{id:"hy_17",title:"Untouched Freight",description:"Finish Harbour Yard with zero crashes",reward:300,type:"no_crash_finish",target:1}]},{id:"dream_track",name:"SUMMIT LINE",subtitle:"18 Tasks · Alpine Downhill Descent",difficulty:5,accent:"#a3e635",description:"High-altitude alpine descent starting on an exposed rocky ridge: steep chutes, massive road gaps, mud bogs, cedar drops, colossal berms, and pure flow.",parTime:85,cargoTagCount:0,challenges:[{id:"dt_1",title:"Summit Drop-In",description:"Reach 55 km/h on the upper ridge",reward:100,type:"speed",target:55},{id:"dt_2",title:"Terminal Velocity",description:"Hit 72 km/h down the alpine chute",reward:160,type:"speed",target:72},{id:"dt_3",title:"Skyline Sender",description:"Hit 4.5m vertical air height",reward:140,type:"air_height",target:4.5},{id:"dt_4",title:"Road Gap Clear",description:"Hit 6.0m vertical air off the Summit Road Gap",reward:220,type:"air_height",target:6},{id:"dt_5",title:"Flight Time",description:"Hold 1.9 seconds of continuous air",reward:170,type:"air_time",target:1.9},{id:"dt_6",title:"Bog Crusher",description:"Blast through 45m of alpine mud",reward:130,type:"mud_traverse",target:45},{id:"dt_7",title:"Bridge Runner",description:"Ride 55m of wooden ladders & drops",reward:140,type:"wood_ride",target:55},{id:"dt_8",title:"Pump Machine",description:"Trigger 6 Pump Boosts in one run",reward:150,type:"pump_boosts",target:6},{id:"dt_9",title:"Ridge Manual",description:"Hold a 4.0s Manual down the flow trail",reward:160,type:"manual_time",target:4},{id:"dt_10",title:"Alpine Stoppie",description:"Hold a 1.5s Stoppie",reward:140,type:"stoppie_time",target:1.5},{id:"dt_11",title:"Whip Show",description:"Stomp 4 Whips in a single run",reward:160,type:"whip",target:4},{id:"dt_12",title:"Barspin Clinic",description:"Land 3 Barspins on Summit Line",reward:170,type:"barspin",target:3},{id:"dt_13",title:"Alpine Tabletop",description:"Land 2 Tabletops on the big kickers",reward:160,type:"tabletop",target:2},{id:"dt_14",title:"Alpine Backflip",description:"Stomp a Backflip on Summit Line",reward:250,type:"backflip",target:1},{id:"dt_15",title:"Alpine Frontflip",description:"Stomp a Frontflip on Summit Line",reward:260,type:"frontflip",target:1},{id:"dt_16",title:"Summit Score",description:"Rack up 5,000+ points in a single run",reward:240,type:"total_score",target:5e3},{id:"dt_17",title:"Beat the Clock",description:"Finish Summit Line under 85 seconds",reward:280,type:"finish_time",target:85},{id:"dt_18",title:"Clean Descent",description:"Finish Summit Line with zero crashes",reward:400,type:"no_crash_finish",target:1}]}];function mi(s){return Hn.find(t=>t.id===s)??Hn[0]}class rm{constructor(){B(this,"points");B(this,"maxParticles",320);B(this,"particles",[]);B(this,"positions");B(this,"colors");B(this,"geometry");this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.geometry=new Pe,this.geometry.setAttribute("position",new Ie(this.positions,3)),this.geometry.setAttribute("color",new Ie(this.colors,3));const t=new ml({size:.24,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1});this.points=new nh(this.geometry,t),this.points.frustumCulled=!1}emit(t,e,n,i,r,a,o,l=4){const c={dirt:[.62,.44,.28],mud:[.28,.18,.1],wood:[.76,.56,.34],rock:[.62,.65,.68],metal:[.75,.82,.9],grass:[.36,.58,.25],concrete:[.72,.74,.76],sparkle:[1,.88,.22]},[h,u,d]=c[o]??[.6,.45,.3];for(let p=0;p<l;p++)this.particles.length>=this.maxParticles&&this.particles.shift(),this.particles.push({x:t+(Math.random()-.5)*.28,y:e+Math.random()*.15,z:n+(Math.random()-.5)*.28,vx:i+(Math.random()-.5)*2.6,vy:r+1.2+Math.random()*2.8,vz:a+(Math.random()-.5)*2.6,life:0,maxLife:.35+Math.random()*.45,size:.2,r:h,g:u,b:d})}clear(){this.particles=[],this.geometry.setDrawRange(0,0)}update(t){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life+=t,i.life>=i.maxLife){this.particles.splice(n,1);continue}i.vy-=9.5*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t}const e=this.particles.length;for(let n=0;n<e;n++){const i=this.particles[n],r=1-i.life/i.maxLife;this.positions[n*3]=i.x,this.positions[n*3+1]=i.y,this.positions[n*3+2]=i.z,this.colors[n*3]=i.r*r,this.colors[n*3+1]=i.g*r,this.colors[n*3+2]=i.b*r}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.setDrawRange(0,e)}}class am{constructor(){B(this,"keys",new Set);B(this,"justPressed",new Set);B(this,"hopCharge",0);B(this,"prevHopHeld",!1);B(this,"prevGamepadButtons",[]);B(this,"prevRightStickDown",!1);B(this,"rightStickDownCharge",0);B(this,"tiltEnabled",!1);B(this,"tiltBaseline",null);B(this,"currentTiltRaw",0);B(this,"currentTiltSteer",0);B(this,"touch",{steer:0,throttle:0,brake:0,pitch:0,lean:0,hopHeld:!1,pumpHeld:!1,barspinQueued:!1,tabletopHeld:!1});B(this,"lastState");B(this,"onKeyDown",t=>{var n;const e=t.code;(e==="Space"||e==="ArrowUp"||e==="ArrowDown"||e==="ArrowLeft"||e==="ArrowRight")&&((n=document.activeElement)==null?void 0:n.tagName)!=="INPUT"&&t.preventDefault(),this.keys.has(e)||this.justPressed.add(e),this.keys.add(e)});B(this,"onKeyUp",t=>{this.keys.delete(t.code)});B(this,"onBlur",()=>{this.keys.clear(),this.justPressed.clear()});B(this,"onDeviceOrientation",t=>{if(t.beta===null&&t.gamma===null)return;const n=window.innerWidth>=window.innerHeight?t.beta??0:t.gamma??0;this.currentTiltRaw=n,this.tiltBaseline===null&&(this.tiltBaseline=n);const i=n-this.tiltBaseline;this.currentTiltSteer=Math.max(-1,Math.min(1,-i/26))});this.lastState=this.createEmptyState(),window.addEventListener("keydown",this.onKeyDown,{passive:!1}),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),window.addEventListener("deviceorientation",this.onDeviceOrientation)}createEmptyState(){return{throttle:0,brake:0,steer:0,pitch:0,lean:0,hopHeld:!1,hopJustReleased:!1,hopCharge:0,pumpHeld:!1,barspinPressed:!1,tabletopHeld:!1,cameraTogglePressed:!1,checkpointPressed:!1,restartPressed:!1,setMarkerPressed:!1,gotoMarkerPressed:!1,pausePressed:!1,usingGamepad:!1,tiltAngleDeg:0}}calibrateTilt(){this.tiltBaseline=this.currentTiltRaw}setTiltEnabled(t){if(this.tiltEnabled=t,t){this.calibrateTilt();const e=DeviceOrientationEvent;typeof(e==null?void 0:e.requestPermission)=="function"&&e.requestPermission().catch(()=>{})}}getLastState(){return this.lastState}poll(t,e){var C,S;const n=this.createEmptyState(),i=e.steeringSensitivity,r=this.keys.has("KeyW")?1:0,a=this.keys.has("KeyS")?1:0,o=this.keys.has("KeyA")?1:0,l=this.keys.has("KeyD")?1:0,c=this.keys.has("ArrowDown")||this.keys.has("KeyK")?1:0,h=this.keys.has("ArrowUp")||this.keys.has("KeyI")?1:0,u=this.keys.has("ArrowLeft")||this.keys.has("KeyJ")?1:0,d=this.keys.has("ArrowRight")||this.keys.has("KeyL")?1:0;let p=Math.max(r,this.touch.throttle),g=Math.max(a,this.touch.brake),x=o-l;Math.abs(this.touch.steer)>Math.abs(x)&&(x=this.touch.steer),this.tiltEnabled&&e.tiltSteering&&Math.abs(this.currentTiltSteer)>.05&&(x=this.currentTiltSteer);let m=c-h;Math.abs(this.touch.pitch)>Math.abs(m)&&(m=this.touch.pitch);let f=u-d;Math.abs(this.touch.lean)>Math.abs(f)&&(f=this.touch.lean);let M=this.keys.has("Space")||this.touch.hopHeld,_=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touch.pumpHeld,v=this.justPressed.has("KeyF")||this.touch.barspinQueued;this.touch.barspinQueued=!1;let A=this.keys.has("KeyG")||this.touch.tabletopHeld;n.cameraTogglePressed=this.justPressed.has("KeyC"),n.checkpointPressed=this.justPressed.has("KeyR"),n.restartPressed=this.justPressed.has("Backspace"),n.setMarkerPressed=this.justPressed.has("KeyT"),n.gotoMarkerPressed=this.justPressed.has("KeyY"),n.pausePressed=this.justPressed.has("Escape")||this.justPressed.has("KeyP");const T=(navigator.getGamepads?navigator.getGamepads():[]).find(y=>y&&y.connected);if(T){const y=(z,rt=.14)=>Math.abs(z)<rt?0:Math.sign(z)*((Math.abs(z)-rt)/(1-rt)),L=y(T.axes[0]??0),U=y(T.axes[2]??0),F=y(T.axes[3]??0),q=((C=T.buttons[7])==null?void 0:C.value)??0,Z=((S=T.buttons[6])==null?void 0:S.value)??0,X=z=>{var rt;return!!((rt=T.buttons[z])!=null&&rt.pressed)},J=z=>X(z)&&!(this.prevGamepadButtons[z]??!1);(Math.abs(L)>.01||q>.05||Z>.05||Math.abs(U)>.01||Math.abs(F)>.01)&&(n.usingGamepad=!0),q>p&&(p=q),Z>g&&(g=Z),Math.abs(L)>Math.abs(x)&&(x=-L),Math.abs(F)>Math.abs(m)&&(m=F),Math.abs(U)>Math.abs(f)&&(f=-U),F>.6?(this.rightStickDownCharge=Math.min(1,this.rightStickDownCharge+t*2.4),this.prevRightStickDown=!0):this.prevRightStickDown&&F<-.35?(n.hopJustReleased=!0,n.hopCharge=Math.max(.45,this.rightStickDownCharge),this.prevRightStickDown=!1,this.rightStickDownCharge=0):Math.abs(F)<.25&&(this.rightStickDownCharge=Math.max(0,this.rightStickDownCharge-t*3),this.rightStickDownCharge<=0&&(this.prevRightStickDown=!1)),X(0)&&(M=!0),X(4)&&(_=!0),J(2)&&(v=!0),X(1)&&(A=!0),J(3)&&(n.cameraTogglePressed=!0),J(5)&&(n.checkpointPressed=!0),J(9)&&(n.pausePressed=!0),this.prevGamepadButtons=T.buttons.map(z=>!!(z!=null&&z.pressed))}return M?this.hopCharge=Math.min(1,this.hopCharge+t*2.6):this.prevHopHeld?(n.hopJustReleased=!0,n.hopCharge=Math.max(.35,this.hopCharge),this.hopCharge=0):this.hopCharge=Math.max(0,this.hopCharge-t*5),this.prevHopHeld=M,n.throttle=Math.max(0,Math.min(1,p)),n.brake=Math.max(0,Math.min(1,g)),n.steer=Math.max(-1,Math.min(1,x*i)),n.pitch=Math.max(-1,Math.min(1,m)),n.lean=Math.max(-1,Math.min(1,f)),n.hopHeld=M,n.hopJustReleased||(n.hopCharge=this.hopCharge),n.pumpHeld=_,n.barspinPressed=v,n.tabletopHeld=A,n.tiltAngleDeg=this.tiltBaseline!==null?this.currentTiltRaw-this.tiltBaseline:0,this.justPressed.clear(),this.lastState=n,n}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),window.removeEventListener("deviceorientation",this.onDeviceOrientation)}}class om{constructor(t,e){B(this,"state");B(this,"spec");B(this,"callbacks");B(this,"pumpCooldown",0);B(this,"lastGroundHeight",0);B(this,"wasInAir",!1);B(this,"airStartY",0);B(this,"hopGraceTimer",0);B(this,"barspinDoneInAir",!1);B(this,"whipAwardedInAir",!1);B(this,"tabletopTimeInAir",0);B(this,"tabletopAwardedInAir",!1);B(this,"manualActivePrev",!1);B(this,"stoppieActivePrev",!1);B(this,"manualHoldPitch",0);B(this,"stoppieHoldPitch",0);this.spec=t,this.callbacks=e,this.state=this.createInitialState(0,0,0,0)}setSpec(t){this.spec=t}createInitialState(t,e,n,i){return{x:t,y:e,z:n,vx:0,vy:0,vz:0,yaw:i,pitch:0,roll:0,pitchVel:0,rollVel:0,yawVel:0,steerAngle:0,leanAngle:0,speed:0,wheelSpin:0,crankAngle:0,frontCompression:.12,rearCompression:.12,frontGrounded:!0,rearGrounded:!0,grounded:!0,surface:"dirt",groundPitch:0,groundRoll:0,airTime:0,airPeakHeight:0,groundHeightBelow:e,crouchAmount:0,hopCharge:0,manualActive:!1,manualTime:0,manualDist:0,stoppieActive:!1,stoppieTime:0,pivotMode:"center",barspinAngle:0,barspinActive:!1,whipAngle:0,tabletopAmount:0,flipAccumulator:0,spinAccumulator:0,mudSplashIntensity:0,skidding:!1,pumping:!1,crashed:!1,crashReason:"",crashTimer:0,mudVisorAmount:0}}reset(t,e,n,i){this.state=this.createInitialState(t,e,n,i),this.lastGroundHeight=e,this.wasInAir=!1,this.airStartY=e,this.hopGraceTimer=0,this.pumpCooldown=0,this.barspinDoneInAir=!1,this.whipAwardedInAir=!1,this.tabletopTimeInAir=0,this.tabletopAwardedInAir=!1,this.manualActivePrev=!1,this.stoppieActivePrev=!1,this.manualHoldPitch=0,this.stoppieHoldPitch=0}step(t,e,n){const i=this.state;if(i.mudVisorAmount>0&&(i.mudVisorAmount=Math.max(0,i.mudVisorAmount-t*(.09+Math.abs(i.speed)*.008))),i.crashed){i.crashTimer+=t,i.vx*=Math.pow(.22,t),i.vz*=Math.pow(.22,t),i.x+=i.vx*t,i.z+=i.vz*t;const _=n.sampleGround(i.x,i.z,i.y);i.y=Math.max(_.height,i.y+i.vy*t),i.vy=Math.max(-18,i.vy-20*t),i.y<=_.height+.01&&(i.vy=0),i.speed=Math.hypot(i.vx,i.vz),i.mudSplashIntensity=0,i.skidding=!1;return}this.hopGraceTimer>0&&(this.hopGraceTimer-=t),this.pumpCooldown>0&&(this.pumpCooldown-=t),i.leanAngle+=(e.lean-i.leanAngle)*Math.min(1,t*11);const r=Math.sin(i.yaw),a=Math.cos(i.yaw),o=-Math.cos(i.yaw),l=Math.sin(i.yaw),c=this.spec.wheelbase*.5,h=n.sampleGround(i.x,i.z,i.y),u=n.sampleGround(i.x+r*c,i.z+a*c,i.y),d=n.sampleGround(i.x-r*c,i.z-a*c,i.y);i.groundHeightBelow=h.height,i.surface=h.surface;const p=Math.atan2(u.height-d.height,this.spec.wheelbase),g=h.nx*o+h.nz*l,x=Math.asin(Math.max(-.7,Math.min(.7,-g)));i.groundPitch=p,i.groundRoll=x;const m=i.y-h.height,f=i.grounded?.34:.14;if(this.hopGraceTimer<=0&&m<=f&&i.vy<=3){if(this.wasInAir&&i.airTime>.22&&(this.evaluateLanding(i,p,x),i.crashed))return;i.grounded=!0,this.wasInAir=!1,i.airTime=0,i.airPeakHeight=0,i.flipAccumulator=0,i.spinAccumulator=0,this.barspinDoneInAir=!1,this.whipAwardedInAir=!1,this.tabletopTimeInAir=0,this.tabletopAwardedInAir=!1,i.y=h.height;let _=i.vx*r+i.vz*a,v=i.vx*o+i.vz*l;const E=-Math.sin(p)*20*.92;_+=E*t;const T=h.surface==="mud"&&e.throttle>.85?.65:1,C=Math.max(0,_/this.spec.maxSpeed),S=Math.max(0,1-C*.96);e.throttle>.02&&S>.01&&!i.stoppieActive&&(_+=e.throttle*this.spec.pedalPower*S*T*t);const y=e.pitch>.2&&_>2.2&&!e.hopHeld,L=e.pitch<-.2&&_>2&&!e.hopHeld;if(y){this.stoppieActivePrev&&i.stoppieTime>=.45&&this.callbacks.onStoppieComplete(i.stoppieTime),i.stoppieActive=!1,i.stoppieTime=0,this.stoppieHoldPitch=0,i.manualActive=!0,i.pivotMode="rear",i.frontGrounded=!1,i.rearGrounded=!0;const D=.52+(e.pitch-.2)*.14;this.manualHoldPitch+=(D-this.manualHoldPitch)*Math.min(1,t*8.5),i.pitch=p+this.manualHoldPitch,i.manualTime+=t,i.manualDist+=_*t,i.frontCompression*=Math.exp(-12*t),i.rearCompression+=(.58-i.rearCompression)*Math.min(1,t*10)}else if(L){this.manualActivePrev&&i.manualTime>=.6&&this.callbacks.onManualComplete(i.manualTime,i.manualDist),i.manualActive=!1,i.manualTime=0,i.manualDist=0,this.manualHoldPitch=0,i.stoppieActive=!0,i.pivotMode="front",i.frontGrounded=!0,i.rearGrounded=!1;const D=e.brake>.1?.32+e.brake*.18:.18;_=Math.max(0,_-this.spec.brakePower*D*t);const Yt=-.44-(Math.abs(e.pitch)-.2)*.12;this.stoppieHoldPitch+=(Yt-this.stoppieHoldPitch)*Math.min(1,t*9.5),i.pitch=p+this.stoppieHoldPitch,i.stoppieTime+=t,i.frontCompression+=(.76-i.frontCompression)*Math.min(1,t*12),i.rearCompression*=Math.exp(-12*t)}else this.manualActivePrev&&i.manualTime>=.6&&this.callbacks.onManualComplete(i.manualTime,i.manualDist),this.stoppieActivePrev&&i.stoppieTime>=.45&&this.callbacks.onStoppieComplete(i.stoppieTime),i.manualActive=!1,i.manualTime=0,i.manualDist=0,i.stoppieActive=!1,i.stoppieTime=0,i.frontGrounded=!0,i.rearGrounded=!0,this.manualHoldPitch*=Math.exp(-12*t),this.stoppieHoldPitch*=Math.exp(-12*t),Math.abs(this.manualHoldPitch)<.02&&Math.abs(this.stoppieHoldPitch)<.02&&(i.pivotMode="center"),i.pitch+=(p-i.pitch)*Math.min(1,t*14);if(this.manualActivePrev=i.manualActive,this.stoppieActivePrev=i.stoppieActive,i.skidding=!1,e.brake>.05&&!i.stoppieActive)if(_>.3){const D=h.grip*this.spec.grip,Yt=e.brake*this.spec.brakePower*Math.min(1.25,D);_=Math.max(0,_-Yt*t),e.brake>.75&&_>5.2&&!i.manualActive&&(i.skidding=!0)}else _=Math.max(-3,_-e.brake*5.5*t);const U=.0036*_*Math.abs(_),F=h.drag*(h.surface==="mud"?4.2:1.45)*_;_-=(U+F)*t,i.pumping=e.pumpHeld;const q=(this.lastGroundHeight-h.height)/Math.max(t,.001);if(e.pumpHeld&&_>4.2&&q>.95&&p<-.045&&this.pumpCooldown<=0){const D=Math.min(2.3,.85+q*.14);_+=D,this.pumpCooldown=.9,this.callbacks.onPumpBoost(D)}const Z=this.spec.maxSpeed*1.65;_=Math.max(-3.5,Math.min(Z,_));const X=Math.abs(_),J=1/(1+X*.068),z=Math.max(-1.35,Math.min(1.35,e.steer+i.leanAngle*.65)),rt=e.steer*.56*J+i.leanAngle*.12;i.steerAngle+=(rt-i.steerAngle)*Math.min(1,t*13);const at=h.grip*this.spec.grip*(1+Math.abs(i.leanAngle)*.18),wt=z*(1.82*this.spec.agility)*Math.min(1,X/2.6)*(.5+.5*J)*(h.surface==="mud"?.8:1),K=-x*Math.min(1,X/9.5)*.55,ct=_>=-.1?1:-1;i.yaw+=(wt+K)*ct*t,h.surface==="mud"&&X>3.5?(i.mudSplashIntensity=Math.min(1,X/13),i.mudVisorAmount=Math.min(1,i.mudVisorAmount+t*.2*i.mudSplashIntensity),e.throttle>.85&&(i.yaw+=Math.sin(performance.now()*.015)*.3*t)):i.mudSplashIntensity=0;const O=(i.skidding?2.8:11.5)*at;v*=Math.exp(-O*t);const V=Math.sin(i.yaw),$=Math.cos(i.yaw),tt=-Math.cos(i.yaw),gt=Math.sin(i.yaw);i.vx=V*_+tt*v,i.vz=$*_+gt*v,i.vy=Math.tan(p)*_,i.speed=_;const _t=-e.steer*Math.min(.32,X*.022),ht=-i.leanAngle*.44,Dt=Math.max(-.68,Math.min(.68,_t+ht+x*.72));i.roll+=(Dt-i.roll)*Math.min(1,t*11),i.pitchVel=0,i.rollVel=0,i.whipAngle*=Math.exp(-12*t),i.tabletopAmount*=Math.exp(-12*t);const Gt=e.hopHeld?.38+e.hopCharge*.62:e.pumpHeld?.72:0;if(i.crouchAmount+=(Gt-i.crouchAmount)*Math.min(1,t*16),i.hopCharge=e.hopCharge,!i.manualActive&&!i.stoppieActive){const D=h.surface==="rock"?Math.abs(Math.sin(i.x*2.5+i.z*2.5))*.24:0,Yt=e.brake*Math.min(.38,X*.026),Ft=.14+i.crouchAmount*.46+Yt+D,zt=.14+i.crouchAmount*.5+D-Yt*.25;i.frontCompression+=(Math.min(1,Math.max(0,Ft))-i.frontCompression)*Math.min(1,t*15),i.rearCompression+=(Math.min(1,Math.max(0,zt))-i.rearCompression)*Math.min(1,t*15)}const Ut=h.isRampLip&&_>6.5&&p>.16;if(e.hopJustReleased){i.manualActive&&i.manualTime>=.6&&this.callbacks.onManualComplete(i.manualTime,i.manualDist),i.stoppieActive&&i.stoppieTime>=.45&&this.callbacks.onStoppieComplete(i.stoppieTime),i.manualActive=!1,i.stoppieActive=!1,i.pivotMode="center";const D=this.spec.hopPower*(.58+e.hopCharge*.58),Yt=h.isRampLip?2.2:0;i.vy=Math.max(i.vy,0)+D+Yt,i.y+=.12,i.grounded=!1,this.wasInAir=!0,this.airStartY=i.y,this.hopGraceTimer=.16,i.pitchVel=1.25,i.frontCompression=0,i.rearCompression=0,this.callbacks.onHop(e.hopCharge)}else if(Ut&&u.height<h.height-.12){const D=Math.max(2.4,Math.sin(p)*_*1.18);i.vy=D,i.y+=.08,i.grounded=!1,i.pivotMode="center",this.wasInAir=!0,this.airStartY=i.y,this.hopGraceTimer=.14,i.frontCompression=0,i.rearCompression=0}if(i.x+=i.vx*t,i.z+=i.vz*t,i.grounded){const D=n.sampleGround(i.x,i.z,i.y),Yt=i.y+i.vy*t;D.height<Yt-.42&&_>4.8?(i.y=Yt,i.grounded=!1,i.pivotMode="center",this.wasInAir=!0,this.airStartY=i.y,this.hopGraceTimer=.12):i.y=D.height}this.lastGroundHeight=h.height}else{this.wasInAir||(this.wasInAir=!0,this.airStartY=i.y),i.grounded=!1,i.frontGrounded=!1,i.rearGrounded=!1,i.manualActive=!1,i.stoppieActive=!1,i.pivotMode="center",i.skidding=!1,i.pumping=!1,i.mudSplashIntensity=0,i.airTime+=t;const _=Math.max(0,i.y-h.height);_>i.airPeakHeight&&(i.airPeakHeight=_);const v=20;if(i.vy-=v*t,i.vx*=Math.exp(-.04*t),i.vz*=Math.exp(-.04*t),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.speed=Math.hypot(i.vx,i.vz),i.frontCompression*=Math.exp(-9*t),i.rearCompression*=Math.exp(-9*t),i.crouchAmount*=Math.exp(-8*t),Math.abs(e.pitch)>.08){const S=5.45*this.spec.agility;i.pitchVel+=(e.pitch*S-i.pitchVel)*Math.min(1,t*12)}else i.pitchVel*=Math.exp(-7*t),i.vy<-3&&i.pitch>-.35&&Math.abs(i.flipAccumulator)<1.1&&(i.pitchVel-=.35*t);const A=i.pitchVel*t;i.pitch+=A,i.flipAccumulator+=A,i.flipAccumulator>Math.PI*1.68?(i.flipAccumulator-=Math.PI*2,i.pitch-=Math.PI*2,this.callbacks.onTrick("BACKFLIP",650,"#f43f5e")):i.flipAccumulator<-Math.PI*1.68&&(i.flipAccumulator+=Math.PI*2,i.pitch+=Math.PI*2,this.callbacks.onTrick("FRONTFLIP",700,"#fb7185"));const E=i.leanAngle*1.05;i.whipAngle+=(E-i.whipAngle)*Math.min(1,t*9.5),!this.whipAwardedInAir&&Math.abs(i.whipAngle)>.62&&i.airTime>.32&&_>.85&&(this.whipAwardedInAir=!0,this.callbacks.onTrick("AIR WHIP",300,"#38bdf8"));const T=-i.leanAngle*.55-e.steer*.22;i.roll+=(T-i.roll)*Math.min(1,t*7),i.yaw+=e.steer*.65*t,i.steerAngle+=(e.steer*.35-i.steerAngle)*Math.min(1,t*10),e.barspinPressed&&!i.barspinActive&&(i.airTime>.08||_>.4)&&(i.barspinActive=!0,i.barspinAngle=0);const C=e.tabletopHeld&&_>.55?1:0;i.tabletopAmount+=(C-i.tabletopAmount)*Math.min(1,t*10),i.tabletopAmount>.68&&(this.tabletopTimeInAir+=t,!this.tabletopAwardedInAir&&this.tabletopTimeInAir>.24&&(this.tabletopAwardedInAir=!0,this.callbacks.onTrick("TABLETOP",350,"#a3e635")))}i.barspinActive&&(i.barspinAngle+=t*15.5*this.spec.agility,i.barspinAngle>=Math.PI*2&&(i.barspinAngle=0,i.barspinActive=!1,this.barspinDoneInAir||(this.barspinDoneInAir=!0,this.callbacks.onTrick("BARSPIN",320,"#facc15")))),i.wheelSpin+=i.speed/Math.max(.2,this.spec.wheelRadius)*t,e.throttle>.08&&i.grounded&&(i.crankAngle+=(4.5+Math.abs(i.speed)*.45)*t);for(let _=0;_<n.obstacles.length;_++){const v=n.obstacles[_];if(i.y>v.maxY||i.y+1.4<v.minY)continue;const A=i.x-v.x,E=i.z-v.z,T=v.radius+.42,C=A*A+E*E;if(C<T*T){const S=Math.sqrt(C)||.01,y=A/S,L=E/S;i.x=v.x+y*T,i.z=v.z+L*T;const U=-(i.vx*y+i.vz*L);if(U>9.5){this.triggerCrash(`Hit ${v.label}!`);return}else U>0&&(i.vx+=y*U*1.2,i.vz+=L*U*1.2,i.vx*=.65,i.vz*=.65)}}if(n.waterY!==void 0&&i.y<n.waterY+.15){this.triggerCrash("Splashed into the Bay!");return}i.x<n.bounds.minX+2?(i.x=n.bounds.minX+2,i.vx=Math.abs(i.vx)*.4):i.x>n.bounds.maxX-2&&(i.x=n.bounds.maxX-2,i.vx=-Math.abs(i.vx)*.4),i.z<n.bounds.minZ+2?(i.z=n.bounds.minZ+2,i.vz=Math.abs(i.vz)*.4):i.z>n.bounds.maxZ-2&&(i.z=n.bounds.maxZ-2,i.vz=-Math.abs(i.vz)*.4)}evaluateLanding(t,e,n){let i=(t.pitch+Math.PI)%(Math.PI*2);i<0&&(i+=Math.PI*2),i-=Math.PI,t.pitch=i;const r=Math.abs(i-e),a=Math.abs(t.vy),o=this.airStartY-t.y>1.75,l=Math.min(1,a/12.5);t.frontCompression=Math.max(t.frontCompression,l),t.rearCompression=Math.max(t.rearCompression,l);const h=1.12+(this.spec.stability-1)*.18;if(Math.abs(i)>1.98){this.triggerCrash("Inverted Landing!");return}if(r>h&&a>5.4){const u=i<e?"Over the Bars (OTB)!":"Looped Out on Landing!";this.triggerCrash(u);return}if(t.tabletopAmount>.72&&a>6.2){this.triggerCrash("Landed Sideways!");return}if(r<.36&&Math.abs(t.whipAngle)<.5){const u=Math.sin(t.yaw),d=Math.cos(t.yaw);t.vx+=u*1.15,t.vz+=d*1.15,this.callbacks.onLanding("stomped",a,t.airPeakHeight,t.airTime,o)}else r<.68?this.callbacks.onLanding("clean",a,t.airPeakHeight,t.airTime,o):(t.vx*=.78,t.vz*=.78,this.callbacks.onLanding("sketchy",a,t.airPeakHeight,t.airTime,o))}triggerCrash(t){const e=this.state;e.crashed||(e.crashed=!0,e.crashReason=t,e.crashTimer=0,e.barspinActive=!1,e.manualActive=!1,e.stoppieActive=!1,this.callbacks.onCrash(t))}}class lm{constructor(){B(this,"frames",[]);B(this,"sampleAccum",0);B(this,"sampleInterval",1/25);B(this,"maxFrames",3500)}reset(){this.frames=[],this.sampleAccum=0}record(t,e,n){if(this.sampleAccum+=e,this.sampleAccum<this.sampleInterval)return;this.sampleAccum-=this.sampleInterval,this.frames.length>=this.maxFrames&&this.frames.shift();const i=a=>Math.round(a*1e3)/1e3,r=a=>Math.round(a*100)/100;this.frames.push({t:r(t),x:i(n.x),y:i(n.y),z:i(n.z),yaw:i(n.yaw),pitch:i(n.pitch),roll:i(n.roll),steer:r(n.steerAngle),lean:r(n.leanAngle),fc:r(n.frontCompression),rc:r(n.rearCompression),ws:r(n.wheelSpin),bs:r(n.barspinAngle),whip:r(n.whipAngle),tt:r(n.tabletopAmount),crouch:r(n.crouchAmount),spd:r(n.speed),gnd:n.grounded,crash:n.crashed,pm:n.pivotMode==="rear"?1:n.pivotMode==="front"?2:0})}hasFrames(){return this.frames.length>=15}buildSavedReplay(t,e,n,i,r,a,o){const l=new Date,c=`${l.toLocaleDateString()} ${l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`;return{id:`rep_${Date.now()}`,zoneId:t,zoneName:e,bikeId:n,livery:{...i},dateStr:c,duration:Math.round(r*10)/10,score:Math.round(a),finished:o,frames:this.frames.slice()}}}function cm(s,t,e){if(s.length===0)return;if(t<=s[0].t){Ho(s[0],e);return}const n=s[s.length-1];if(t>=n.t){Ho(n,e);return}let i=0,r=s.length-1;for(;i+1<r;){const d=i+r>>1;s[d].t<=t?i=d:r=d}const a=s[i],o=s[r],l=Math.max(1e-4,o.t-a.t),c=Math.max(0,Math.min(1,(t-a.t)/l)),h=(d,p)=>d+(p-d)*c,u=(d,p)=>{let g=(p-d+Math.PI)%(Math.PI*2)-Math.PI;return g<-Math.PI&&(g+=Math.PI*2),d+g*c};e.x=h(a.x,o.x),e.y=h(a.y,o.y),e.z=h(a.z,o.z),e.yaw=u(a.yaw,o.yaw),e.pitch=u(a.pitch,o.pitch),e.roll=u(a.roll,o.roll),e.steerAngle=h(a.steer,o.steer),e.leanAngle=h(a.lean??0,o.lean??0),e.frontCompression=h(a.fc,o.fc),e.rearCompression=h(a.rc,o.rc),e.wheelSpin=h(a.ws,o.ws),e.barspinAngle=h(a.bs,o.bs),e.whipAngle=h(a.whip,o.whip),e.tabletopAmount=h(a.tt,o.tt),e.crouchAmount=h(a.crouch,o.crouch),e.speed=h(a.spd,o.spd),e.grounded=a.gnd,e.crashed=a.crash,e.crashTimer=a.crash?.5:0,e.pivotMode=a.pm===1?"rear":a.pm===2?"front":"center"}function Ho(s,t){t.x=s.x,t.y=s.y,t.z=s.z,t.yaw=s.yaw,t.pitch=s.pitch,t.roll=s.roll,t.steerAngle=s.steer,t.leanAngle=s.lean??0,t.frontCompression=s.fc,t.rearCompression=s.rc,t.wheelSpin=s.ws,t.barspinAngle=s.bs,t.whipAngle=s.whip,t.tabletopAmount=s.tt,t.crouchAmount=s.crouch,t.speed=s.spd,t.grounded=s.gnd,t.crashed=s.crash,t.crashTimer=s.crash?.5:0,t.pivotMode=s.pm===1?"rear":s.pm===2?"front":"center"}const Al={dirt:{grip:1,drag:.012},mud:{grip:.52,drag:.048},wood:{grip:.96,drag:.008},rock:{grip:.92,drag:.018},metal:{grip:.94,drag:.007},grass:{grip:.82,drag:.024},concrete:{grip:1.08,drag:.006}};function Gi(s,t){const e=s.length*.5,n=(t+e)/s.length;if(s.kind==="kicker"){const i=Math.max(0,Math.min(1,n)),r=s.height*Math.pow(i,1.65),a=s.height*1.65*Math.pow(Math.max(.01,i),.65)/s.length;return{h:r,slope:a,isLip:i>.72}}if(s.kind==="landing"){const r=1-Math.max(0,Math.min(1,n)),a=s.height*Math.pow(r,1.35),o=-(s.height*1.35*Math.pow(Math.max(.01,r),.35))/s.length;return{h:a,slope:o,isLip:!1}}if(s.kind==="ramp"){const i=Math.max(0,Math.min(1,n)),r=s.height*i,a=s.height/s.length;return{h:r,slope:a,isLip:i>.8}}if(s.kind==="tabletop"){const i=s.rampInLength??s.length*.32,r=s.rampOutLength??s.length*.34,a=t+e;if(a<i){const o=a/i,l=s.height*Math.pow(o,1.45),c=s.height*1.45*Math.pow(Math.max(.01,o),.45)/i;return{h:l,slope:c,isLip:o>.75}}if(a>s.length-r){const l=1-(a-(s.length-r))/r,c=s.height*Math.pow(l,1.25),h=-(s.height*1.25*Math.pow(Math.max(.01,l),.25))/r;return{h:c,slope:h,isLip:!1}}return{h:s.height,slope:0,isLip:!1}}if(s.kind==="bridge"){const i=s.rampInLength??Math.min(4.5,s.length*.22),r=s.rampOutLength??Math.min(4.5,s.length*.22),a=t+e;if(i>0&&a<i){const o=a/i;return{h:s.height*o,slope:s.height/i,isLip:!1}}if(r>0&&a>s.length-r){const o=1-(a-(s.length-r))/r;return{h:s.height*o,slope:-s.height/r,isLip:!1}}return{h:s.height,slope:0,isLip:!1}}if(s.kind==="drop"){const i=s.rampInLength??s.length*.55,r=t+e;if(r<i){const a=r/i;return{h:s.height*a,slope:s.height/i,isLip:!1}}return{h:s.height,slope:0,isLip:r>s.length-1.2}}return{h:s.height,slope:0,isLip:t>e-1}}function hm(s,t,e,n){const i=t-s.x,r=e-s.z,a=Math.sin(s.yaw),o=Math.cos(s.yaw),l=i*a+r*o,c=i*o-r*a,h=s.length*.5,u=s.width*.5;if(Math.abs(l)>h||Math.abs(c)>u)return null;const{h:d,slope:p,isLip:g}=Gi(s,l),x=s.y+d;if(n!==void 0&&x>n+1.35)return null;const m=1/Math.sqrt(1+p*p),f=m,M=-p*m,_=M*a,v=M*o,A=Al[s.surface];return{height:x,nx:_,ny:f,nz:v,surface:s.surface,grip:A.grip,drag:A.drag,isRampLip:g&&(s.lipBoost??!0),bankAngle:0}}function dm(s,t=1.6){if(s.length<2)return[];const e=s.map(c=>new P(c.x,c.y,c.z)),n=new rh(e,!1,"centripetal",.5),i=n.getLength(),r=Math.max(20,Math.ceil(i/t)),a=[];let o=0,l=null;for(let c=0;c<=r;c++){const h=c/r,u=n.getPoint(h),d=n.getTangent(h).normalize();l&&(o+=u.distanceTo(l)),l=u;const p=h*(s.length-1),g=Math.floor(p),x=Math.min(s.length-1,g+1),m=p-g,f=s[g],M=s[x],_=f.width+(M.width-f.width)*m,v=(f.bank??0)+((M.bank??0)-(f.bank??0))*m,A=(f.rollerAmp??0)+((M.rollerAmp??0)-(f.rollerAmp??0))*m,E=(f.rollerFreq??.45)+((M.rollerFreq??.45)-(f.rollerFreq??.45))*m,T=m<.5?f:M,C=T.mudPatch?"mud":T.rockGarden?"rock":T.surface??"dirt",S=Math.hypot(d.x,d.z)||1,y=d.x/S,U=-(d.z/S),F=y,q=A>.01?Math.sin(o*E)*A:0;a.push({s:o,x:u.x,y:u.y+q,z:u.z,tx:d.x,ty:d.y,tz:d.z,rx:U,rz:F,width:_,bank:v,surface:C,mudPatch:!!T.mudPatch,rockGarden:!!T.rockGarden,rollerAmp:A,rollerFreq:E})}return a}class um{constructor(t,e=14){B(this,"cellSize");B(this,"buckets",new Map);B(this,"samples");this.samples=t,this.cellSize=e;for(let n=0;n<t.length;n++){const i=t[n],r=Math.floor(i.x/e),a=Math.floor(i.z/e);for(let o=-1;o<=1;o++)for(let l=-1;l<=1;l++){const c=`${r+o},${a+l}`;let h=this.buckets.get(c);h||(h=[],this.buckets.set(c,h)),h.push(n)}}}query(t,e){const n=Math.floor(t/this.cellSize),i=Math.floor(e/this.cellSize),r=this.buckets.get(`${n},${i}`);if(!r||r.length===0)return null;let a=-1,o=1/0;for(let d=0;d<r.length;d++){const p=r[d],g=this.samples[p],x=t-g.x,m=e-g.z,f=x*x+m*m;f<o&&(o=f,a=p)}if(a<0)return null;const l=this.samples[a],c=t-l.x,h=e-l.z,u=c*l.rx+h*l.rz;return{sample:l,index:a,distSq:o,lateral:u}}}function fm(s){const t=new Lt;t.position.set(s.x,s.y,s.z),t.rotation.y=s.yaw;const e=s.length*.5,n=s.width*.5;if(s.kind==="container"){const m=s.color??"#c1121f",f=new lt({color:m,roughness:.55,metalness:.35}),M=new Y(new yt(s.width,s.height,s.length),f);M.position.y=s.height*.5,M.castShadow=!0,M.receiveShadow=!0,t.add(M);const _=new lt({color:new qt(m).multiplyScalar(.76),roughness:.6,metalness:.4}),v=Math.max(4,Math.floor(s.length/.85)),A=new yt(s.width+.08,s.height-.25,.14);for(let y=0;y<v;y++){const L=-e+.45+y/Math.max(1,v-1)*(s.length-.9),U=new Y(A,_);U.position.set(0,s.height*.5,L),t.add(U)}const E=new lt({color:16436245,roughness:.5}),T=new yt(.14,.04,s.length-.1),C=new Y(T,E);C.position.set(-n+.1,s.height+.02,0);const S=new Y(T,E);return S.position.set(n-.1,s.height+.02,0),t.add(C,S),t}const i=Math.max(12,Math.ceil(s.length*1.5)),r=[],a=[],o=[],l=[];for(let m=0;m<=i;m++){const f=-e+m/i*s.length;l.push(Gi(s,f).h)}const c=s.kind==="bridge"||s.kind==="drop",h=c?.24:0;for(let m=0;m<=i;m++){const f=-e+m/i*s.length,M=l[m];r.push(-n,M,f),r.push(n,M,f),a.push(0,m/i),a.push(1,m/i)}for(let m=0;m<i;m++){const f=m*2,M=f+1,_=f+2,v=f+3;o.push(f,_,M,M,_,v)}r.length/3;for(const m of[-1,1]){const f=m*n,M=r.length/3;for(let _=0;_<=i;_++){const v=-e+_/i*s.length,A=l[_],E=c?Math.max(0,A-h):-1.2;r.push(f,A,v),r.push(f,E,v),a.push(_/i,1),a.push(_/i,0)}for(let _=0;_<i;_++){const v=M+_*2,A=v+1,E=v+2,T=v+3;m>0?o.push(v,A,E,A,T,E):o.push(v,E,A,A,E,T)}}const u=l[i];if(u>.08){const m=r.length/3,f=c?Math.max(0,u-h):-1.2;r.push(-n,u,e),r.push(n,u,e),r.push(-n,f,e),r.push(n,f,e),a.push(0,1,1,1,0,0,1,0),o.push(m,m+2,m+1,m+1,m+2,m+3)}const d=new Pe;d.setAttribute("position",new de(r,3)),d.setAttribute("uv",new de(a,2)),d.setIndex(o),d.computeVertexNormals();const p={dirt:10249796,mud:6044968,wood:11566408,rock:7765125,metal:6583435,grass:5078079,concrete:9278878},g=new lt({color:s.color?new qt(s.color):new qt(p[s.surface]),roughness:s.surface==="metal"?.45:s.surface==="wood"?.82:.92,metalness:s.surface==="metal"?.45:.04,flatShading:!0}),x=new Y(d,g);if(x.castShadow=!0,x.receiveShadow=!0,t.add(x),s.surface==="wood"){const m=new lt({color:7291677,roughness:.86,flatShading:!0}),f=new lt({color:6043158,roughness:.88,flatShading:!0}),M=new lt({color:4926740,roughness:.9,flatShading:!0}),_=Math.max(5,Math.floor(s.length/.56)),v=new yt(s.width+.08,.065,.42);for(let A=0;A<_;A++){const E=-e+.28+A/Math.max(1,_-1)*(s.length-.56),{h:T,slope:C}=Gi(s,E),S=new Y(v,A%2===0?m:f);S.position.set(0,T+.005,E),S.rotation.x=-Math.atan(C),S.castShadow=!0,S.receiveShadow=!0,t.add(S)}if(c){const E=Math.max(2,Math.floor(s.length/3.2));for(let T=0;T<=E;T++){const C=-e+.4+T/Math.max(1,E)*(s.length-.8),S=Gi(s,C).h;if(S>.35){const y=S+1.4,L=new Zt(.11,.13,y,6),U=new Y(L,M);U.position.set(-n+.2,S-y*.5-.1,C),U.castShadow=!0;const F=new Y(L,M);F.position.set(n-.2,S-y*.5-.1,C),F.castShadow=!0,t.add(U,F)}}}}if(s.kind==="kicker"||s.kind==="tabletop"||s.kind==="drop"){const m=s.kind==="tabletop"?-e+(s.rampInLength??s.length*.32)-.15:e-.18,{h:f,slope:M}=Gi(s,m),_=new Y(new yt(s.width+.04,.04,.24),new lt({color:s.kind==="drop"?16347926:10741301,emissive:s.kind==="drop"?8138002:3560212,emissiveIntensity:.35,roughness:.4}));_.position.set(0,f+.015,m),_.rotation.x=-Math.atan(M),t.add(_)}return t}function pm(s,t){const e=Math.max(0,Math.min(s.length-1,Math.floor(t*(s.length-1)))),n=s[e],i=Math.atan2(n.tx,n.tz);return{sample:n,yaw:i}}function It(s,t){let e=s[s.length-1];for(let i=0;i<s.length;i++)if(s[i].s>=t){e=s[i];break}const n=Math.atan2(e.tx,e.tz);return{sample:e,yaw:n}}function mm(s){return s==="training_hall"?{zoneId:s,nodes:[{x:0,y:5.2,z:0,width:6.4,surface:"dirt"},{x:0,y:2,z:22,width:6.8,surface:"dirt"},{x:0,y:1.5,z:75,width:7.2,surface:"dirt"},{x:0,y:1.2,z:138,width:7.4,surface:"dirt",rollerAmp:.32,rollerFreq:.42},{x:4,y:.9,z:205,width:7.6,surface:"dirt"},{x:24,y:.6,z:265,width:8.2,bank:.28,surface:"dirt"},{x:52,y:.4,z:315,width:8.4,bank:.24,surface:"dirt"},{x:58,y:.2,z:375,width:8.5,surface:"dirt"},{x:44,y:.1,z:432,width:8.8,bank:-.22,surface:"dirt"},{x:28,y:0,z:485,width:9.2,surface:"dirt"}],baseFloorSurface:"grass",hillAmp:7.5,skyTopColor:6061762,skyBottomColor:16042664,fogColor:14468532,fogNear:125,fogFar:380,sunPosition:new P(-95,48,30),sunColor:16766883,sunIntensity:2.25,ambientColor:14412542,ambientIntensity:.78,alpineValley:!0,treesDensity:.85,rockDensity:.75,buildCustomFeatures:(n,i,r,a,o)=>{const l=It(n,8.5);i.push({id:"gp_start_ramp",kind:"landing",x:l.sample.x,y:l.sample.y-.15,z:l.sample.z,yaw:l.yaw,length:19,width:5.8,height:2.35,surface:"wood",lipBoost:!1}),[{meters:46,height:.16,label:"15 cm Log"},{meters:74,height:.26,label:"25 cm Log"},{meters:102,height:.36,label:"35 cm Log"}].forEach((g,x)=>{const m=It(n,g.meters);o.push({id:`gp_log_${x+1}`,x:m.sample.x,y:m.sample.y,z:m.sample.z,yaw:m.yaw,width:5.4,height:g.height,label:g.label})});const h=It(n,172);i.push({id:"gp_table1",kind:"tabletop",x:h.sample.x,y:h.sample.y-.08,z:h.sample.z,yaw:h.yaw,length:15,width:5.8,height:1.85,surface:"dirt",rampInLength:4.8,rampOutLength:5.2});const u=It(n,310);i.push({id:"gp_bridge1",kind:"bridge",x:u.sample.x,y:u.sample.y-.08,z:u.sample.z,yaw:u.yaw,length:18,width:4,height:1.3,surface:"wood",rampInLength:4.2,rampOutLength:4.2});const d=It(n,382);i.push({id:"gp_kicker1",kind:"kicker",x:d.sample.x,y:d.sample.y-.08,z:d.sample.z,yaw:d.yaw,length:7,width:5.6,height:2.55,surface:"wood"});const p=It(n,400);i.push({id:"gp_kicker1_l",kind:"landing",x:p.sample.x,y:p.sample.y-.08,z:p.sample.z,yaw:p.yaw,length:11,width:6.4,height:2.1,surface:"dirt"})}}:s==="jump_park"?{zoneId:s,nodes:[{x:0,y:26,z:0,width:9.5,surface:"wood"},{x:0,y:19,z:42,width:9.5,surface:"dirt"},{x:2,y:15,z:95,width:9.5,surface:"dirt"},{x:8,y:12,z:150,width:9.5,surface:"dirt",rollerAmp:.35,rollerFreq:.42},{x:26,y:9.5,z:205,width:10,bank:.32,surface:"dirt"},{x:52,y:7.5,z:248,width:10,bank:.28,surface:"dirt"},{x:64,y:5,z:305,width:9.5,surface:"dirt"},{x:58,y:2.8,z:365,width:9.5,surface:"dirt"},{x:42,y:1,z:425,width:10,bank:-.26,surface:"dirt"},{x:22,y:.2,z:482,width:10.5,surface:"dirt"},{x:18,y:0,z:530,width:11,surface:"dirt"}],baseFloorSurface:"grass",hillAmp:4.5,skyTopColor:1920728,skyBottomColor:16628340,fogColor:15120522,fogNear:120,fogFar:360,sunPosition:new P(-90,62,110),sunColor:16765597,sunIntensity:2.15,ambientColor:16639626,ambientIntensity:.72,treesDensity:.45,rockDensity:.4,buildCustomFeatures:(n,i)=>{const r=It(n,56);i.push({id:"jp_table1",kind:"tabletop",x:r.sample.x,y:r.sample.y-.1,z:r.sample.z,yaw:r.yaw,length:16.5,width:6.4,height:2.4,surface:"dirt",rampInLength:5.5,rampOutLength:6});const a=It(n,102);i.push({id:"jp_double_k",kind:"kicker",x:a.sample.x,y:a.sample.y-.1,z:a.sample.z,yaw:a.yaw,length:7.2,width:6,height:2.85,surface:"dirt"});const o=It(n,121);i.push({id:"jp_double_l",kind:"landing",x:o.sample.x,y:o.sample.y-.1,z:o.sample.z,yaw:o.yaw,length:11.5,width:6.8,height:2.5,surface:"dirt"});const l=It(n,178);i.push({id:"jp_wood_k",kind:"kicker",x:l.sample.x,y:l.sample.y-.1,z:l.sample.z,yaw:l.yaw,length:6.8,width:5.6,height:2.75,surface:"wood"});const c=It(n,196);i.push({id:"jp_wood_l",kind:"landing",x:c.sample.x,y:c.sample.y-.1,z:c.sample.z,yaw:c.yaw,length:11,width:6.8,height:2.4,surface:"dirt"});const h=It(n,286);i.push({id:"jp_mega_table",kind:"tabletop",x:h.sample.x,y:h.sample.y-.1,z:h.sample.z,yaw:h.yaw,length:21,width:6.8,height:3.3,surface:"dirt",rampInLength:6.8,rampOutLength:7.4});const u=It(n,344);i.push({id:"jp_flip_k",kind:"kicker",x:u.sample.x,y:u.sample.y-.1,z:u.sample.z,yaw:u.yaw,length:7.8,width:6.4,height:3.45,surface:"wood"});const d=It(n,366);i.push({id:"jp_flip_l",kind:"landing",x:d.sample.x,y:d.sample.y-.1,z:d.sample.z,yaw:d.yaw,length:13,width:7.2,height:3.1,surface:"dirt"});const p=It(n,452);i.push({id:"jp_final_table",kind:"tabletop",x:p.sample.x,y:p.sample.y-.1,z:p.sample.z,yaw:p.yaw,length:17,width:6.4,height:2.55,surface:"dirt",rampInLength:5.5,rampOutLength:6.2})}}:s==="timber_shore"?{zoneId:s,nodes:[{x:0,y:34,z:0,width:8.5,surface:"dirt"},{x:4,y:29,z:48,width:8.2,surface:"dirt",rollerAmp:.42,rollerFreq:.46},{x:22,y:25,z:96,width:8.5,bank:.3,surface:"dirt"},{x:16,y:21.5,z:150,width:8.8,surface:"mud",mudPatch:!0},{x:-10,y:18,z:204,width:8.4,bank:-.32,surface:"dirt"},{x:-24,y:14.5,z:262,width:8.4,surface:"rock",rockGarden:!0},{x:-12,y:11.5,z:320,width:8.8,surface:"dirt",rollerAmp:.48,rollerFreq:.44},{x:18,y:8.5,z:376,width:9,bank:.34,surface:"dirt"},{x:34,y:6.2,z:434,width:9,surface:"mud",mudPatch:!0},{x:20,y:4,z:492,width:8.6,bank:-.28,surface:"dirt"},{x:-4,y:2.4,z:548,width:8.8,surface:"dirt"},{x:-12,y:1.5,z:604,width:9.5,surface:"dirt"},{x:-12,y:1.2,z:650,width:10,surface:"dirt"}],baseFloorSurface:"grass",hillAmp:7.5,skyTopColor:1002588,skyBottomColor:10081737,fogColor:9027512,fogNear:95,fogFar:320,sunPosition:new P(85,88,60),sunColor:16774625,sunIntensity:1.9,ambientColor:11006928,ambientIntensity:.78,waterY:-1.8,treesDensity:1,rockDensity:.85,buildCustomFeatures:(n,i)=>{const r=It(n,72);i.push({id:"ts_bridge1",kind:"bridge",x:r.sample.x,y:r.sample.y-.1,z:r.sample.z,yaw:r.yaw,length:22,width:3.6,height:1.45,surface:"wood",rampInLength:4.5,rampOutLength:4.5});const a=It(n,178);i.push({id:"ts_kicker1",kind:"kicker",x:a.sample.x,y:a.sample.y-.1,z:a.sample.z,yaw:a.yaw,length:6.4,width:5,height:2.25,surface:"wood"});const o=It(n,195);i.push({id:"ts_kicker1_l",kind:"landing",x:o.sample.x,y:o.sample.y-.1,z:o.sample.z,yaw:o.yaw,length:10.5,width:6,height:2,surface:"dirt"});const l=It(n,285);i.push({id:"ts_drop1",kind:"drop",x:l.sample.x,y:l.sample.y-.1,z:l.sample.z,yaw:l.yaw,length:13.5,width:3.8,height:2.3,surface:"wood",rampInLength:7.5});const c=It(n,302);i.push({id:"ts_drop1_l",kind:"landing",x:c.sample.x,y:c.sample.y-.1,z:c.sample.z,yaw:c.yaw,length:10,width:5.8,height:1.75,surface:"dirt"});const h=It(n,405);i.push({id:"ts_bridge2",kind:"bridge",x:h.sample.x,y:h.sample.y-.1,z:h.sample.z,yaw:h.yaw,length:28,width:3.4,height:1.85,surface:"wood",rampInLength:5,rampOutLength:5});const u=It(n,515);i.push({id:"ts_table1",kind:"tabletop",x:u.sample.x,y:u.sample.y-.1,z:u.sample.z,yaw:u.yaw,length:16.5,width:5.6,height:2.35,surface:"dirt",rampInLength:5.4,rampOutLength:5.8});const d=It(n,575);i.push({id:"ts_drop2",kind:"drop",x:d.sample.x,y:d.sample.y-.1,z:d.sample.z,yaw:d.yaw,length:12,width:4,height:2.15,surface:"wood",rampInLength:6.8})}}:s==="harbour_yard"?{zoneId:s,nodes:[{x:0,y:12.5,z:0,width:11,surface:"concrete"},{x:0,y:8.5,z:48,width:11.5,surface:"concrete"},{x:4,y:6.2,z:102,width:11.5,surface:"concrete"},{x:22,y:4.8,z:162,width:12,bank:.22,surface:"concrete"},{x:46,y:3.6,z:220,width:12,surface:"concrete"},{x:52,y:2.8,z:286,width:12,surface:"concrete"},{x:36,y:2.2,z:350,width:12,bank:-.22,surface:"concrete"},{x:8,y:1.8,z:412,width:12,surface:"concrete"},{x:-12,y:1.5,z:476,width:12,surface:"concrete"},{x:-14,y:1.4,z:540,width:12.5,surface:"concrete"},{x:-14,y:1.3,z:600,width:13,surface:"concrete"}],baseFloorSurface:"concrete",hillAmp:.25,skyTopColor:223649,skyBottomColor:12248829,fogColor:10474474,fogNear:130,fogFar:380,sunPosition:new P(95,95,-40),sunColor:16775399,sunIntensity:2,ambientColor:12248829,ambientIntensity:.85,waterY:-2.2,harbour:!0,treesDensity:0,rockDensity:0,buildCustomFeatures:(n,i,r,a)=>{const o=It(n,56);i.push({id:"hy_ramp1",kind:"ramp",x:o.sample.x,y:o.sample.y-.05,z:o.sample.z,yaw:o.yaw,length:9,width:4.4,height:2.6,surface:"wood",lipBoost:!1});const l=It(n,69);i.push({id:"hy_cont1",kind:"container",x:l.sample.x,y:l.sample.y-.05,z:l.sample.z,yaw:l.yaw,length:16,width:4.6,height:2.65,surface:"metal",color:"#dc2626"});const c=It(n,87);i.push({id:"hy_land1",kind:"landing",x:c.sample.x,y:c.sample.y-.05,z:c.sample.z,yaw:c.yaw,length:10,width:5.5,height:1.9,surface:"wood"});const h=It(n,134);i.push({id:"hy_kicker1",kind:"kicker",x:h.sample.x,y:h.sample.y-.05,z:h.sample.z,yaw:h.yaw,length:7.2,width:5.6,height:2.75,surface:"metal",color:"#475569"});const u=It(n,152);i.push({id:"hy_kicker1_l",kind:"landing",x:u.sample.x,y:u.sample.y-.05,z:u.sample.z,yaw:u.yaw,length:11,width:6.4,height:2.3,surface:"metal",color:"#475569"});const d=It(n,212);i.push({id:"hy_ramp2",kind:"ramp",x:d.sample.x,y:d.sample.y-.05,z:d.sample.z,yaw:d.yaw,length:9.5,width:4.5,height:2.6,surface:"wood",lipBoost:!1});const p=It(n,224);i.push({id:"hy_cont2a",kind:"container",x:p.sample.x,y:p.sample.y-.05,z:p.sample.z,yaw:p.yaw,length:14,width:4.8,height:2.65,surface:"metal",color:"#0284c7"});const g=It(n,245);i.push({id:"hy_cont2b",kind:"container",x:g.sample.x,y:g.sample.y-.05,z:g.sample.z,yaw:g.yaw,length:14,width:5,height:2.45,surface:"metal",color:"#d97706"});const x=It(n,261);i.push({id:"hy_land2",kind:"landing",x:x.sample.x,y:x.sample.y-.05,z:x.sample.z,yaw:x.yaw,length:10.5,width:5.8,height:2,surface:"wood"});const m=It(n,318);i.push({id:"hy_table1",kind:"tabletop",x:m.sample.x,y:m.sample.y-.05,z:m.sample.z,yaw:m.yaw,length:18,width:6.2,height:2.65,surface:"wood",rampInLength:5.8,rampOutLength:6.2});const f=It(n,396);i.push({id:"hy_ramp3",kind:"ramp",x:f.sample.x,y:f.sample.y-.05,z:f.sample.z,yaw:f.yaw,length:10,width:4.8,height:2.85,surface:"metal",color:"#334155",lipBoost:!1});const M=It(n,410);i.push({id:"hy_cont3",kind:"container",x:M.sample.x,y:M.sample.y-.05,z:M.sample.z,yaw:M.yaw,length:16,width:5,height:2.9,surface:"metal",color:"#0f766e"});const _=It(n,488);i.push({id:"hy_kicker2",kind:"kicker",x:_.sample.x,y:_.sample.y-.05,z:_.sample.z,yaw:_.yaw,length:7.8,width:6.4,height:3.35,surface:"wood"});const v=It(n,509);i.push({id:"hy_kicker2_l",kind:"landing",x:v.sample.x,y:v.sample.y-.05,z:v.sample.z,yaw:v.yaw,length:12.5,width:7,height:2.85,surface:"metal",color:"#475569"}),[{meters:30,lat:0,heightOffset:1.2,label:"Pier Entry"},{meters:69,lat:0,heightOffset:3.9,label:"Red Box Roof"},{meters:108,lat:2.6,heightOffset:1.3,label:"Dockside Apex"},{meters:143,lat:0,heightOffset:4.3,label:"Steel Gap Air"},{meters:184,lat:-2.2,heightOffset:1.3,label:"Crane Corner"},{meters:224,lat:0,heightOffset:3.9,label:"Blue Freight Top"},{meters:235,lat:0,heightOffset:4.5,label:"Container Gap"},{meters:288,lat:2.5,heightOffset:1.3,label:"Bollard Line"},{meters:318,lat:0,heightOffset:4.3,label:"Timber Table Peak"},{meters:368,lat:-2.4,heightOffset:1.3,label:"Harbour Sweeper"},{meters:410,lat:0,heightOffset:4.2,label:"Teal Box Roof"},{meters:499,lat:0,heightOffset:5.1,label:"Crane Sender Peak"},{meters:556,lat:0,heightOffset:1.3,label:"Final Manifest"}].forEach((E,T)=>{const C=It(n,E.meters);a.push({id:`hy_tag_${T+1}`,x:C.sample.x+C.sample.rx*E.lat,y:C.sample.y+E.heightOffset,z:C.sample.z+C.sample.rz*E.lat,label:E.label})})}}:{zoneId:"dream_track",nodes:[{x:0,y:66,z:0,width:9,surface:"rock"},{x:4,y:58,z:54,width:9,surface:"dirt"},{x:26,y:50,z:112,width:9.4,bank:.36,surface:"dirt"},{x:48,y:43,z:174,width:9.2,surface:"dirt",rollerAmp:.5,rollerFreq:.42},{x:34,y:36.5,z:238,width:9.5,bank:-.36,surface:"dirt"},{x:2,y:31,z:298,width:9.2,surface:"mud",mudPatch:!0},{x:-28,y:26,z:362,width:9.4,bank:-.34,surface:"dirt"},{x:-34,y:20.5,z:428,width:9.2,surface:"rock",rockGarden:!0},{x:-10,y:15.5,z:494,width:9.6,bank:.35,surface:"dirt"},{x:26,y:11,z:558,width:9.6,surface:"dirt",rollerAmp:.45,rollerFreq:.44},{x:42,y:7.5,z:626,width:9.8,surface:"mud",mudPatch:!0},{x:22,y:4.5,z:694,width:10,bank:-.32,surface:"dirt"},{x:-6,y:2.2,z:762,width:10.2,surface:"dirt"},{x:-14,y:1,z:830,width:10.8,surface:"dirt"},{x:-14,y:.5,z:885,width:11.5,surface:"dirt"}],baseFloorSurface:"grass",hillAmp:12.5,skyTopColor:805486,skyBottomColor:16639626,fogColor:13359576,fogNear:120,fogFar:420,sunPosition:new P(120,115,70),sunColor:16774102,sunIntensity:2.15,ambientColor:14412542,ambientIntensity:.78,treesDensity:.9,rockDensity:.9,buildCustomFeatures:(e,n)=>{const i=It(e,62);n.push({id:"dt_table1",kind:"tabletop",x:i.sample.x,y:i.sample.y-.1,z:i.sample.z,yaw:i.yaw,length:17.5,width:6.2,height:2.55,surface:"dirt",rampInLength:5.5,rampOutLength:6.2});const r=It(e,206);n.push({id:"dt_bridge1",kind:"bridge",x:r.sample.x,y:r.sample.y-.1,z:r.sample.z,yaw:r.yaw,length:26,width:3.8,height:1.85,surface:"wood",rampInLength:4.8,rampOutLength:4.8});const a=It(e,326);n.push({id:"dt_kicker1",kind:"kicker",x:a.sample.x,y:a.sample.y-.1,z:a.sample.z,yaw:a.yaw,length:7.4,width:6,height:2.95,surface:"wood"});const o=It(e,347);n.push({id:"dt_kicker1_l",kind:"landing",x:o.sample.x,y:o.sample.y-.1,z:o.sample.z,yaw:o.yaw,length:12,width:6.8,height:2.6,surface:"dirt"});const l=It(e,464);n.push({id:"dt_drop1",kind:"drop",x:l.sample.x,y:l.sample.y-.1,z:l.sample.z,yaw:l.yaw,length:13.5,width:4.2,height:2.65,surface:"wood",rampInLength:7.5});const c=It(e,483);n.push({id:"dt_drop1_l",kind:"landing",x:c.sample.x,y:c.sample.y-.1,z:c.sample.z,yaw:c.yaw,length:11.5,width:6.4,height:2.1,surface:"dirt"});const h=It(e,590);n.push({id:"dt_bridge2",kind:"bridge",x:h.sample.x,y:h.sample.y-.1,z:h.sample.z,yaw:h.yaw,length:28,width:3.8,height:2,surface:"wood",rampInLength:5,rampOutLength:5});const u=It(e,720);n.push({id:"dt_dream_gap_k",kind:"kicker",x:u.sample.x,y:u.sample.y-.1,z:u.sample.z,yaw:u.yaw,length:8.6,width:6.8,height:3.85,surface:"dirt"});const d=It(e,746);n.push({id:"dt_dream_gap_l",kind:"landing",x:d.sample.x,y:d.sample.y-.1,z:d.sample.z,yaw:d.yaw,length:14.5,width:7.6,height:3.4,surface:"dirt"});const p=It(e,804);n.push({id:"dt_final_table",kind:"tabletop",x:p.sample.x,y:p.sample.y-.1,z:p.sample.z,yaw:p.yaw,length:18,width:6.8,height:2.6,surface:"wood",rampInLength:5.8,rampOutLength:6.2})}}}function fn(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function xr(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=fn(e,n),c=fn(e+1,n),h=fn(e,n+1),u=fn(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function yr(s,t){return xr(s*.025,t*.025)*.65+xr(s*.07,t*.07)*.25+xr(s*.16,t*.16)*.1}function gm(s){const t=mm(s),e=new Lt,n=dm(t.nodes,1.5),i=new um(n,16),r=[],a=[],o=[],l=[],c=new Map,h=[];t.buildCustomFeatures(n,r,a,o,l);let u=1/0,d=-1/0,p=1/0,g=-1/0;for(const K of n)K.x<u&&(u=K.x),K.x>d&&(d=K.x),K.z<p&&(p=K.z),K.z>g&&(g=K.z);const x=t.indoorHall?26:68;u-=x,d+=x,p-=x,g+=x;const m=(K,ct)=>{const O=i.query(K,ct);if(!O)return{height:(yr(K,ct)-.5)*t.hillAmp*2,surface:t.baseFloorSurface,bankAngle:0,mudFactor:0};const V=O.sample,$=Math.sqrt(O.distSq),tt=V.width*.5,gt=O.lateral,_t=Math.max(-tt*1.25,Math.min(tt*1.25,gt));let ht=0;if(Math.abs(V.bank)>.01){const xt=Math.sign(V.bank),jt=Math.max(0,_t*xt);ht=_t*Math.tan(V.bank)+jt*jt*.045*Math.abs(V.bank)*3}let Dt=0;V.rockGarden&&$<tt?Dt=Math.sin(K*1.7+ct*1.3)*Math.cos(K*.9-ct*1.9)*.14:V.mudPatch&&$<tt&&(Dt=-.12*Math.max(0,1-($/tt)**2));const Gt=V.y+ht+Dt;if($<=tt){const xt=V.mudPatch?Math.max(0,1-($/(tt*.95))**2):0;return{height:Gt,surface:V.surface,bankAngle:V.bank,mudFactor:xt}}const Ut=t.indoorHall?8:t.harbour?12:18,D=Math.min(1,($-tt)/Ut),Yt=D*D*(3-2*D);let Ft;if(t.indoorHall)Ft=V.y*(1-Yt)+0*Yt;else if(t.harbour){const xt=Math.max(0,($-tt-22)*.25);Ft=V.y-xt}else if(t.alpineValley){const xt=(yr(K,ct)-.35)*t.hillAmp*1.8,jt=Math.max(0,$-tt-6),At=Math.min(34,Math.pow(jt,1.32)*.36);Ft=V.y+xt*.65+At}else{const xt=(yr(K,ct)-.35)*t.hillAmp*2.2,jt=Math.min(18,($-tt)*.22);Ft=V.y+xt+jt*.7}return{height:Gt*(1-Yt)+Ft*Yt,surface:$<tt+1.4?V.surface:t.baseFloorSurface,bankAngle:V.bank*(1-Yt),mudFactor:0}},f=(K,ct,O)=>{const V=m(K,ct),$=.28,tt=m(K-$,ct).height,gt=m(K+$,ct).height,_t=m(K,ct-$).height,ht=m(K,ct+$).height,Dt=(gt-tt)/(2*$),Gt=(ht-_t)/(2*$),Ut=1/Math.sqrt(Dt*Dt+1+Gt*Gt),D=Al[V.surface];let Yt={height:V.height,nx:-Dt*Ut,ny:Ut,nz:-Gt*Ut,surface:V.surface,grip:D.grip,drag:D.drag,isRampLip:!1,bankAngle:V.bankAngle};for(let Ft=0;Ft<r.length;Ft++){const zt=r[Ft],xt=Math.max(zt.length,zt.width)*.62;if(Math.abs(K-zt.x)>xt||Math.abs(ct-zt.z)>xt)continue;const jt=hm(zt,K,ct,O);jt&&jt.height>=Yt.height-.04&&(Yt=jt)}return Yt},M=d-u,_=g-p,v=t.indoorHall?2:2.6,A=Math.min(180,Math.max(40,Math.ceil(M/v))),E=Math.min(260,Math.max(40,Math.ceil(_/v))),T=new bi(M,_,A,E);T.rotateX(-Math.PI/2),T.translate((u+d)*.5,0,(p+g)*.5);const C=T.attributes.position,S=new Float32Array(C.count*3),y=new qt;for(let K=0;K<C.count;K++){const ct=C.getX(K),O=C.getZ(K),V=m(ct,O);C.setY(K,V.height);const $=fn(Math.floor(ct*.5),Math.floor(O*.5))*.08-.04;V.surface==="mud"?y.setRGB(.28+$*.5,.19+$*.4,.12+$*.3):V.surface==="dirt"?s==="jump_park"?y.setRGB(.66+$,.43+$*.8,.25+$*.5):y.setRGB(.51+$,.36+$*.8,.23+$*.5):V.surface==="rock"?y.setRGB(.45+$,.47+$,.5+$):V.surface==="wood"?y.setRGB(.62+$,.44+$,.25+$):V.surface==="concrete"?y.setRGB(.52+$*.6,.55+$*.6,.58+$*.6):s==="training_hall"?V.height>7.5?y.setRGB(.68+$*.7,.59+$*.7,.54+$*.6):y.setRGB(.32+$,.53+$,.17+$*.5):s==="jump_park"?y.setRGB(.42+$,.49+$,.24+$):s==="dream_track"&&V.height>44?y.setRGB(.55+$,.54+$,.51+$):y.setRGB(.24+$,.47+$,.19+$*.6),S[K*3]=Math.max(0,Math.min(1,y.r)),S[K*3+1]=Math.max(0,Math.min(1,y.g)),S[K*3+2]=Math.max(0,Math.min(1,y.b))}T.setAttribute("color",new Ie(S,3)),T.computeVertexNormals();const L=new lt({vertexColors:!0,roughness:.92,metalness:.02,flatShading:!0}),U=new Y(T,L);U.receiveShadow=!0,e.add(U);const F=new lt({color:3876375,roughness:.14,metalness:.22,transparent:!0,opacity:.78});for(let K=0;K<n.length;K+=4){const ct=n[K];if(ct.mudPatch){const O=new Y(new Ma(ct.width*.34,14),F);O.rotation.x=-Math.PI/2,O.position.set(ct.x,ct.y-.04,ct.z),e.add(O)}}for(const K of r){const ct=fm(K);if(e.add(ct),K.kind==="kicker"||K.kind==="tabletop"){const O=Math.sin(K.yaw),V=Math.cos(K.yaw),$=K.kind==="kicker"?K.length*.42:-K.length*.15;for(const tt of[-1,1]){const gt=K.x+O*$+V*tt*(K.width*.5+.35),_t=K.z+V*$-O*tt*(K.width*.5+.35),ht=new Y(new Zt(.04,.04,3.2,6),new lt({color:14870768}));ht.position.set(gt,K.y+K.height*.7+1.5,_t);const Dt=new Y(new yt(.05,.75,1.05),new lt({color:K.kind==="kicker"?16347926:10741301,roughness:.5}));Dt.position.set(gt,K.y+K.height*.7+2.65,_t+.45),e.add(ht,Dt)}}}const q=new lt({color:16317180,roughness:.7}),Z=new lt({color:s==="harbour_yard"?16436245:15680580,roughness:.5}),X=new Zt(.045,.055,1.15,5);for(let K=4;K<n.length-4;K+=5){const ct=n[K],O=ct.width*.5+.55;for(const V of[-1,1]){const $=ct.x+ct.rx*V*O,tt=ct.z+ct.rz*V*O,gt=m($,tt).height,_t=new Y(X,q);if(_t.position.set($,gt+.55,tt),e.add(_t),K%10===4){const ht=new Y(new yt(.14,.22,.14),Z);ht.position.set($,gt+1,tt),e.add(ht)}}}const J=[],z=[.22,.48,.74,.96];z.forEach((K,ct)=>{const O=pm(n,K),V=ct===z.length-1,$=f(O.sample.x,O.sample.z),tt={index:ct,x:O.sample.x,y:$.height,z:O.sample.z,yaw:O.yaw,width:O.sample.width+2.5,isFinish:V,label:V?"FINISH":`CP ${ct+1}`};J.push(tt);const gt=_m(tt);e.add(gt),h.push(gt)});const rt=[];for(const K of o){const ct=xm();ct.position.set(K.x,K.y,K.z),e.add(ct),c.set(K.id,ct),rt.push(ct)}let at=null;if(t.waterY!==void 0){const K=new bi(M+500,_+500,1,1);K.rotateX(-Math.PI/2);const ct=new lt({color:s==="harbour_yard"?165063:947344,roughness:.18,metalness:.35,transparent:!0,opacity:.88});at=new Y(K,ct),at.position.set((u+d)*.5,t.waterY,(p+g)*.5),e.add(at)}if(t.indoorHall&&ym(e,u,d,p,g),t.harbour&&Mm(e,n,m),t.alpineValley&&wm(e,n,l,m),t.treesDensity>0&&Sm(e,u,d,p,g,t.treesDensity,t.rockDensity,i,m,a,t.waterY),!t.alpineValley){const K=n[1],ct=Math.atan2(K.tx,K.tz),O=f(K.x,K.z),V=vm(K.x,O.height,K.z,ct,K.width+2);e.add(V)}const wt=(K,ct)=>{for(let O=0;O<rt.length;O++){const V=rt[O];V.visible&&(V.rotation.y=K*2.2+O*.7,V.children[0].position.y=Math.sin(K*3.1+O)*.22)}at&&t.waterY!==void 0&&(at.position.y=t.waterY+Math.sin(K*1.1)*.08)};return{zoneId:s,group:e,trail:n,structures:r,obstacles:a,checkpoints:J,cargoTags:o,hopLogs:l,cargoTagMeshes:c,checkpointMeshes:h,spawn:{x:n[0].x,y:f(n[0].x,n[0].z).height+.06,z:n[0].z,yaw:Math.atan2(n[0].tx,n[0].tz)},bounds:{minX:u,maxX:d,minZ:p,maxZ:g},waterY:t.waterY,skyTopColor:t.skyTopColor,skyBottomColor:t.skyBottomColor,fogColor:t.fogColor,fogNear:t.fogNear,fogFar:t.fogFar,sunPosition:t.sunPosition,sunColor:t.sunColor,sunIntensity:t.sunIntensity,ambientColor:t.ambientColor,ambientIntensity:t.ambientIntensity,sampleGround:f,updateVisuals:wt}}function _m(s){const t=new Lt;t.position.set(s.x,s.y,s.z),t.rotation.y=s.yaw;const e=s.width*.5,n=s.isFinish?6.2:5,i=new lt({color:s.isFinish?1579035:1976635,roughness:.45}),r=new lt({color:s.isFinish?10741301:3718648,emissive:s.isFinish?6660877:165063,emissiveIntensity:.75,roughness:.3}),a=new yt(.45,n,.45),o=new Y(a,i);o.position.set(-e,n*.5,0),o.castShadow=!0;const l=new Y(a,i);l.position.set(e,n*.5,0),l.castShadow=!0;const c=new Y(new yt(s.width+.6,1,.5),r);if(c.position.set(0,n,0),c.castShadow=!0,s.isFinish){const u=s.width/12;for(let d=0;d<12;d++){const p=new Y(new yt(u,.38,.54),new lt({color:d%2===0?16777215:1120295}));p.position.set(-e+u*(d+.5),n-.68,0),t.add(p)}}return t.add(o,l,c),t}function vm(s,t,e,n,i){const r=new Lt;r.position.set(s,t,e),r.rotation.y=n;const a=i*.5,o=new lt({color:2565930,roughness:.5}),l=new lt({color:16347926,emissive:10105874,emissiveIntensity:.45,roughness:.4}),c=new Y(new yt(.4,5.2,.4),o);c.position.set(-a,2.6,0);const h=new Y(new yt(.4,5.2,.4),o);h.position.set(a,2.6,0);const u=new Y(new yt(i+.5,.9,.45),l);return u.position.set(0,5.2,0),r.add(c,h,u),r}function xm(){const s=new Lt,t=new Lt,e=new lt({color:16436245,emissive:14251782,emissiveIntensity:.85,roughness:.25,metalness:.5}),n=new Y(new wa(.68,0),e);t.add(n);const i=new Y(new mn(.95,.08,8,20),new lt({color:3718648,emissive:959977,emissiveIntensity:.8}));i.rotation.x=Math.PI*.35,t.add(i);const r=new Y(new Zt(.12,.45,7.5,8,1,!0),new Is({color:16638023,transparent:!0,opacity:.16,side:Je,depthWrite:!1}));return r.position.y=3.2,s.add(t,r),s}function ym(s,t,e,n,i){const r=new lt({color:3359061,roughness:.85}),a=new lt({color:9132587,roughness:.8}),o=new Is({color:16775149}),l=(t+e)*.5,c=(n+i)*.5,h=e-t,u=i-n,d=19,p=new Y(new yt(h,d,1.5),r);p.position.set(l,d*.5-1,i);const g=new Y(new yt(h,d,1.5),r);g.position.set(l,d*.5-1,n);const x=new Y(new yt(1.5,d,u),r);x.position.set(t,d*.5-1,c);const m=new Y(new yt(1.5,d,u),r);m.position.set(e,d*.5-1,c),s.add(p,g,x,m);const f=10;for(let M=0;M<=f;M++){const _=n+M/f*u,v=new Y(new yt(h,.7,.6),a);if(v.position.set(l,d-.5,_),s.add(v),M<f){const A=new Y(new yt(h*.55,.2,2.2),o);A.position.set(l,d-.2,_+u/f/2),s.add(A)}}}function Mm(s,t,e){const n=["#dc2626","#0284c7","#d97706","#0f766e","#4f46e5","#b91c1c"],i=new lt({color:16096779,roughness:.45,metalness:.35}),r=new lt({color:3359061,roughness:.55,metalness:.5});for(let o=6;o<t.length-6;o+=14){const l=t[o],c=Math.atan2(l.tx,l.tz);for(const h of[-1,1]){const u=l.width*.5+8.5+o%3*3.2,d=l.x+l.rx*h*u,p=l.z+l.rz*h*u,g=e(d,p).height,x=(o+(h>0?1:0))%3===0?2:1;for(let m=0;m<x;m++){const f=n[(o+m+(h>0?2:0))%n.length],M=new Y(new yt(3.2,2.8,9.6),new lt({color:f,roughness:.55,metalness:.3}));M.position.set(d,g+1.4+m*2.85,p),M.rotation.y=c+m*.05,M.castShadow=!0,M.receiveShadow=!0,s.add(M)}}}const a=[Math.floor(t.length*.25),Math.floor(t.length*.62),Math.floor(t.length*.88)];for(const o of a){const l=t[o],c=o%2===0?1:-1,h=l.x+l.rx*c*26,u=l.z+l.rz*c*26,d=e(h,u).height,p=new Lt;p.position.set(h,d,u),p.rotation.y=Math.atan2(l.tx,l.tz);const g=new yt(1.4,28,1.4),x=[[-5,14,-5],[5,14,-5],[-5,14,5],[5,14,5]];for(const[M,_,v]of x){const A=new Y(g,i);A.position.set(M,_,v),A.castShadow=!0,p.add(A)}const m=new Y(new yt(44,2.2,2.8),i);m.position.set(-c*10,27,0),m.castShadow=!0;const f=new Y(new yt(4.5,3.2,4),r);f.position.set(0,24.5,0),p.add(m,f),s.add(p)}}function Sm(s,t,e,n,i,r,a,o,l,c,h){const u=[],d=[],p=Math.max(7.5,11.5-r*3.5);for(let g=t+6;g<e-6;g+=p)for(let x=n+6;x<i-6;x+=p){const m=fn(g*.31,x*.47),f=fn(g*.73+11,x*.29+5),M=g+(m-.5)*p*.85,_=x+(f-.5)*p*.85,v=o.query(M,_),A=v?Math.sqrt(v.distSq):999,E=v?v.sample.width*.5+3.4:6;if(A<E||A>68)continue;const T=l(M,_).height;if(!(h!==void 0&&T<h+.6)){if(m<r*.72){const C=.85+f*.95;u.push({x:M,y:T,z:_,scale:C}),A<E+14&&c.push({x:M,z:_,radius:.42*C,minY:T,maxY:T+6*C,label:"Pine Tree"})}else if(f<a*.35){const C=.6+m*1.4;d.push({x:M,y:T,z:_,scale:C,rot:m*Math.PI*2}),A<E+10&&c.push({x:M,z:_,radius:.75*C,minY:T-.5,maxY:T+1.1*C,label:"Boulder"})}}}if(u.length>0){const g=new Zt(.18,.3,2.8,6);g.translate(0,1.4,0);const x=new lt({color:6044190,roughness:.92,flatShading:!0}),m=new nn(2.1,4.4,6);m.translate(0,3.8,0);const f=new nn(1.65,3.8,6);f.translate(0,5.9,0);const M=new nn(1.15,3.2,6);M.translate(0,7.8,0);const _=new lt({color:1853991,roughness:.88,flatShading:!0}),v=new lt({color:2515506,roughness:.88,flatShading:!0}),A=new lt({color:3308093,roughness:.88,flatShading:!0}),E=u.length,T=new Bi(g,x,E),C=new Bi(m,_,E),S=new Bi(f,v,E),y=new Bi(M,A,E);T.castShadow=!0,C.castShadow=!0,S.castShadow=!0,y.castShadow=!0,C.receiveShadow=!0;const L=new pe;for(let U=0;U<E;U++){const F=u[U];L.position.set(F.x,F.y-.15,F.z),L.rotation.set(0,F.x*1.3,0),L.scale.setScalar(F.scale),L.updateMatrix(),T.setMatrixAt(U,L.matrix),C.setMatrixAt(U,L.matrix),S.setMatrixAt(U,L.matrix),y.setMatrixAt(U,L.matrix)}s.add(T,C,S,y)}if(d.length>0){const g=new wi(.95,0),x=new lt({color:10134445,roughness:.9,flatShading:!0}),m=new Bi(g,x,d.length);m.castShadow=!0,m.receiveShadow=!0;const f=new pe;for(let M=0;M<d.length;M++){const _=d[M];f.position.set(_.x,_.y+.35*_.scale,_.z),f.rotation.set(_.rot*.5,_.rot,0),f.scale.set(_.scale*1.2,_.scale*.72,_.scale),f.updateMatrix(),m.setMatrixAt(M,f.matrix)}s.add(m)}}function wm(s,t,e,n){const i=It(t,28).sample,r=i.x+i.rx*-12.5,a=i.z+i.rz*-12.5,o=n(r,a).height,l=new Lt;l.position.set(r,o,a),l.rotation.y=.32;const c=new lt({color:6040850,roughness:.9,flatShading:!0}),h=new lt({color:4529931,roughness:.9,flatShading:!0}),u=new Y(new yt(5.2,2.8,4.4),c);u.position.y=1.4,u.castShadow=!0,u.receiveShadow=!0;const d=new Y(new nn(4.1,2.1,4),h);d.position.y=3.85,d.rotation.y=Math.PI/4,d.castShadow=!0,l.add(u,d),s.add(l);const p=new lt({color:7028254,roughness:.9,flatShading:!0}),g=new lt({color:16347926,roughness:.5,flatShading:!0});for(const M of e){const _=new Lt;_.position.set(M.x,M.y,M.z),_.rotation.y=M.yaw;const v=M.height*.55,A=new Y(new Zt(v,v*1.05,M.width,7),p);A.rotation.z=Math.PI/2,A.position.y=v*.85,A.castShadow=!0,A.receiveShadow=!0,_.add(A);for(const E of[-1,1]){const T=new Y(new nn(.22,.58,6),g);T.position.set(E*(M.width*.5+.35),.29,0),T.castShadow=!0,_.add(T)}s.add(_)}const x=new lt({color:8266446,roughness:.75,flatShading:!0}),m=new lt({color:15381256,roughness:.7,flatShading:!0}),f=new lt({color:1409085,roughness:.85,flatShading:!0});for(let M=4;M<Math.min(t.length-4,180);M+=3){const _=t[M];for(const v of[-1,1]){const A=v*(_.width*.5+1.1+fn(M,v*13)*4.2),E=_.x+_.rx*A,T=_.z+_.rz*A,C=n(E,T).height;if((M+(v>0?1:0))%2===0){const S=new Y(new nn(.18,.95,5),x);S.position.set(E,C+.55,T),S.rotation.z=(fn(E,T)-.5)*.25;const y=new Y(new nn(.32,.45,5),f);y.position.set(E,C+.2,T),s.add(S,y)}else{const S=new Y(new wi(.22,0),m);S.scale.set(1.2,.65,1.2),S.position.set(E,C+.16,T),s.add(S)}}}}class bm{constructor(t,e,n){B(this,"profile");B(this,"replays");B(this,"mode","menu");B(this,"paused",!1);B(this,"input");B(this,"sound");B(this,"physics");B(this,"world",null);B(this,"currentZoneId","training_hall");B(this,"runStats");B(this,"trickPopups",[]);B(this,"toasts",[]);B(this,"activeReplay",null);B(this,"replayTime",0);B(this,"replayPlaying",!0);B(this,"replaySpeed",1);B(this,"replayCam","chase");B(this,"garageYaw",Math.PI*.5);B(this,"garagePitch",.08);B(this,"garageDragging",!1);B(this,"garageLastX",0);B(this,"garageLastY",0);B(this,"clearedLogIds",new Set);B(this,"canvas");B(this,"visorMudEl");B(this,"renderer");B(this,"scene");B(this,"camera");B(this,"sunLight");B(this,"ambientLight");B(this,"skyDome");B(this,"skyUniforms");B(this,"bikeModel");B(this,"particles");B(this,"recorder",new lm);B(this,"garagePedestal");B(this,"callbacks");B(this,"rafId",0);B(this,"lastFrameTime",0);B(this,"physicsAccum",0);B(this,"worldTime",0);B(this,"nextPopupId",1);B(this,"nextToastId",1);B(this,"camPos",new P);B(this,"camLook",new P);B(this,"camInitialized",!1);B(this,"camShake",0);B(this,"fpRollSmooth",0);B(this,"fpPitchSmooth",0);B(this,"replayState");B(this,"sessionMarker",null);B(this,"lastCheckpointPose",{x:0,y:1,z:0,yaw:0});B(this,"hudTickAccum",0);B(this,"runCoinsEarned",0);B(this,"loop",t=>{this.rafId=requestAnimationFrame(this.loop);const e=Math.min(.05,Math.max(.001,(t-this.lastFrameTime)/1e3));this.lastFrameTime=t,this.worldTime+=e,this.world&&this.world.updateVisuals(this.worldTime,e),this.mode==="riding"?this.updateRiding(e):this.mode==="menu"?this.updateMenuCamera(e):this.mode==="garage"?this.updateGarageCamera(e):this.mode==="replay"&&this.updateReplay(e);const n=this.bikeModel.root.position;this.skyDome.position.copy(n),this.world&&(this.sunLight.position.copy(n).add(this.world.sunPosition),this.sunLight.target.position.copy(n),this.sunLight.target.updateMatrixWorld()),this.particles.update(e),this.renderer.render(this.scene,this.camera)});B(this,"onResize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});B(this,"onPointerDown",t=>{var e;this.sound.unlock(),this.mode==="garage"&&((e=t.target)==null?void 0:e.id)==="game-canvas"&&(this.garageDragging=!0,this.garageLastX=t.clientX,this.garageLastY=t.clientY)});B(this,"onPointerMove",t=>{if(!this.garageDragging)return;const e=t.clientX-this.garageLastX,n=t.clientY-this.garageLastY;this.garageLastX=t.clientX,this.garageLastY=t.clientY,this.garageYaw-=e*.01,this.garagePitch=Math.max(.06,Math.min(.85,this.garagePitch+n*.008))});B(this,"onPointerUp",()=>{this.garageDragging=!1});this.canvas=t,this.visorMudEl=e,this.callbacks=n,this.profile=nm(),this.replays=Aa(),this.input=new am,this.input.setTiltEnabled(this.profile.settings.tiltSteering),this.sound=new Jp,this.sound.setVolume(this.profile.settings.volume),this.renderer=new Zp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=this.profile.settings.shadows,this.renderer.shadowMap.type=Wo,this.renderer.toneMapping=qo,this.renderer.toneMappingExposure=1.08,this.scene=new Zc,this.camera=new Be(this.profile.settings.fov,window.innerWidth/window.innerHeight,.08,650),this.skyUniforms={topColor:{value:new qt(805486)},bottomColor:{value:new qt(16639626)}};const i=new ba(520,24,16),r=new _n({uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          float t = pow(max(h, 0.0), 0.55);
          gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
        }
      `,side:Re,depthWrite:!1});this.skyDome=new Y(i,r),this.scene.add(this.skyDome),this.ambientLight=new lh(14412542,3878694,.85),this.scene.add(this.ambientLight),this.sunLight=new uh(16774625,2),this.sunLight.castShadow=this.profile.settings.shadows,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=260;const a=62;this.sunLight.shadow.camera.left=-a,this.sunLight.shadow.camera.right=a,this.sunLight.shadow.camera.top=a,this.sunLight.shadow.camera.bottom=-a,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target);const o=this.getActiveBikeSpec(),l=di(this.profile,this.profile.selectedBikeId),c=Hi(this.profile,this.profile.selectedBikeId);this.bikeModel=new em(o,l,c),this.scene.add(this.bikeModel.root),this.physics=new om(o,{onHop:h=>this.handleHop(h),onLanding:(h,u,d,p,g)=>this.handleLanding(h,u,d,p,g),onPumpBoost:h=>this.handlePumpBoost(h),onTrick:(h,u,d)=>this.handleTrick(h,u,d),onManualComplete:(h,u)=>this.handleManualComplete(h,u),onStoppieComplete:h=>this.handleStoppieComplete(h),onCrash:h=>this.handleCrash(h)}),this.replayState={...this.physics.state},this.particles=new rm,this.scene.add(this.particles.points),this.garagePedestal=this.createGarageWorkshop(),this.garagePedestal.visible=!1,this.scene.add(this.garagePedestal),this.runStats=this.createEmptyRunStats("training_hall"),this.loadZoneWorld("training_hall"),this.positionBikeAtSpawn(),window.addEventListener("resize",this.onResize),window.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this.lastFrameTime=performance.now(),this.rafId=requestAnimationFrame(this.loop)}createGarageWorkshop(){const t=new Lt,e=new lt({color:7027223,roughness:.88,flatShading:!0}),n=new lt({color:5713425,roughness:.9,flatShading:!0}),i=new lt({color:5387808,roughness:.92,flatShading:!0}),r=new lt({color:14255419,roughness:.78,flatShading:!0}),a=new lt({color:8736030,roughness:.85,flatShading:!0}),o=new lt({color:14433083,roughness:.45,flatShading:!0}),l=new lt({color:1579035,roughness:.9,flatShading:!0}),c=new Y(new yt(9.5,.2,8.5),i);c.position.y=-.1,c.receiveShadow=!0,t.add(c);const h=new Y(new yt(.25,4.8,9),e);h.position.set(-2.2,2.3,0),h.receiveShadow=!0,t.add(h);for(let S=-9;S<=9;S++){const y=new Y(new yt(.05,4.8,.04),n);y.position.set(-2.06,2.3,S*.45),t.add(y)}const u=new Y(new yt(.08,1.35,2.2),r);u.position.set(-2.02,2.05,-1.65),t.add(u);const d=new lt({color:14251782,roughness:.7,flatShading:!0}),p=new lt({color:15485081,roughness:.6,flatShading:!0}),g=new lt({color:3900150,roughness:.6,flatShading:!0}),x=new lt({color:13358561,roughness:.35,metalness:.7,flatShading:!0}),m=new Y(new yt(.05,.52,.06),d);m.position.set(-1.95,2.08,-2.05);const f=new Y(new yt(.06,.09,.24),x);f.position.set(-1.95,2.35,-2.05);const M=new Y(new yt(.04,.42,.05),p);M.position.set(-1.95,2.08,-1.65);const _=new Y(new yt(.04,.42,.05),g);_.position.set(-1.95,2.08,-1.35);const v=new Y(new yt(.04,.08,.85),x);v.position.set(-1.95,1.62,-1.55),t.add(m,f,M,_,v);const A=new Y(new yt(.95,.1,2.8),a);A.position.set(-1.62,1.05,-1.55),A.castShadow=!0;const E=new Y(new yt(.45,.38,.68),o);E.position.set(-1.62,1.29,-1.32),E.castShadow=!0,t.add(A,E);for(let S=0;S<2;S++){const y=new Y(new mn(.42,.085,8,18),l);y.rotation.y=Math.PI/2,y.position.set(-1.95,1.75-S*.32,1.9+S*.42),y.castShadow=!0,t.add(y)}const T=new Y(new nn(.32,.2,8),new lt({color:1461823,roughness:.4,flatShading:!0}));T.position.set(-.9,3.05,-1.2);const C=new hh(16760438,8.5,12,1.6);return C.position.set(1.2,2.6,.8),t.add(T,C),t}createEmptyRunStats(t){var n;const e=((n=this.world)==null?void 0:n.checkpoints.length)??4;return{zoneId:t,elapsedTime:0,score:0,comboScore:0,comboCount:0,comboTricks:[],maxSpeedKmh:0,maxAirHeight:0,maxAirTime:0,bunnyHops:0,maxManualTime:0,maxManualDist:0,maxStoppieTime:0,logsCleared:0,barspins:0,whips:0,backflips:0,frontflips:0,tabletops:0,pumpBoosts:0,cleanLandings:0,dropStomps:0,mudDistance:0,woodDistance:0,crashes:0,finished:!1,finishTime:0,currentCheckpoint:0,totalCheckpoints:e,collectedTagIds:Object.keys(this.profile.collectedTags).filter(i=>this.profile.collectedTags[i])}}getActiveBikeSpec(){const t=Tn(this.profile.selectedBikeId),e=di(this.profile,t.id);return bl(t,e)}refreshBikeAppearance(){const t=this.getActiveBikeSpec(),e=di(this.profile,this.profile.selectedBikeId),n=Hi(this.profile,this.profile.selectedBikeId);this.physics.setSpec(t),this.bikeModel.rebuild(t,e,n),this.bikeModel.setFirstPerson(this.mode==="riding"&&this.profile.settings.cameraMode==="first_person")}applySettings(){this.renderer.shadowMap.enabled=this.profile.settings.shadows,this.sunLight.castShadow=this.profile.settings.shadows,this.camera.fov=this.profile.settings.fov,this.camera.updateProjectionMatrix(),this.sound.setVolume(this.profile.settings.volume),this.input.setTiltEnabled(this.profile.settings.tiltSteering),this.bikeModel.setFirstPerson(this.mode==="riding"&&this.profile.settings.cameraMode==="first_person"),Qe(this.profile),this.callbacks.onProfileChange(this.profile)}loadZoneWorld(t){this.world&&this.scene.remove(this.world.group),this.currentZoneId=t,this.world=gm(t),this.scene.add(this.world.group);for(const e of this.world.cargoTags){const n=this.world.cargoTagMeshes.get(e.id);n&&(n.visible=!this.profile.collectedTags[e.id])}this.skyUniforms.topColor.value.setHex(this.world.skyTopColor),this.skyUniforms.bottomColor.value.setHex(this.world.skyBottomColor),this.scene.fog=new va(this.world.fogColor,this.world.fogNear,this.world.fogFar),this.sunLight.color.setHex(this.world.sunColor),this.sunLight.intensity=this.world.sunIntensity,this.ambientLight.color.setHex(this.world.ambientColor),this.ambientLight.intensity=this.world.ambientIntensity}positionBikeAtSpawn(){if(!this.world)return;const t=this.world.spawn;this.physics.reset(t.x,t.y,t.z,t.yaw),this.lastCheckpointPose={...t},this.bikeModel.applyPhysicsState(this.physics.state),this.camInitialized=!1}startZone(t){this.sound.unlock(),this.loadZoneWorld(t),this.refreshBikeAppearance(),this.mode="riding",this.paused=!1,this.garagePedestal.visible=!1,this.sessionMarker=null,this.clearedLogIds.clear(),this.runCoinsEarned=0,this.trickPopups=[],this.particles.clear(),this.recorder.reset(),this.positionBikeAtSpawn(),this.runStats=this.createEmptyRunStats(t),this.profile.settings.tiltSteering&&this.input.calibrateTilt(),this.bikeModel.setFirstPerson(this.profile.settings.cameraMode==="first_person"),this.callbacks.onModeChange("riding"),this.callbacks.onPauseChange(!1),this.callbacks.onHudUpdate()}restartRun(){this.startZone(this.currentZoneId)}respawnAtCheckpoint(){const t=this.lastCheckpointPose;this.physics.reset(t.x,t.y+.12,t.z,t.yaw),this.runStats.comboScore=0,this.runStats.comboCount=0,this.runStats.comboTricks=[],this.camInitialized=!1,this.pushPopup("CHECKPOINT RESET",0,"#38bdf8")}openMenu(){this.mode="menu",this.paused=!1,this.garagePedestal.visible=!1,this.sound.silenceContinuous(),this.setVisorMud(0),this.refreshBikeAppearance(),this.bikeModel.setFirstPerson(!1),this.positionBikeAtSpawn(),this.callbacks.onModeChange("menu"),this.callbacks.onPauseChange(!1)}openGarage(){if(this.mode="garage",this.paused=!1,this.sound.silenceContinuous(),this.setVisorMud(0),this.refreshBikeAppearance(),this.bikeModel.setFirstPerson(!1),this.world){const t=this.world.spawn;this.physics.reset(t.x,t.y+.02,t.z,0),this.bikeModel.applyPhysicsState(this.physics.state),this.garagePedestal.position.set(t.x,t.y,t.z),this.garagePedestal.visible=!0}this.callbacks.onModeChange("garage")}startReplay(t){this.sound.unlock(),this.loadZoneWorld(t.zoneId);const e=Tn(t.bikeId),n=di(this.profile,t.bikeId);this.bikeModel.rebuild(e,n,t.livery),this.activeReplay=t,this.replayTime=0,this.replayPlaying=!0,this.replaySpeed=1,this.replayCam="chase",this.mode="replay",this.paused=!1,this.garagePedestal.visible=!1,this.sound.silenceContinuous(),this.setVisorMud(0),this.camInitialized=!1,this.callbacks.onModeChange("replay")}setReplayCam(t){this.replayCam=t,this.bikeModel.setFirstPerson(t==="helmet")}saveCurrentRunReplay(){if(!this.recorder.hasFrames())return null;const t=mi(this.currentZoneId),e=Hi(this.profile,this.profile.selectedBikeId),n=this.recorder.buildSavedReplay(this.currentZoneId,t.name,this.profile.selectedBikeId,e,this.runStats.elapsedTime,this.runStats.score,this.runStats.finished);return this.replays=im(n),this.callbacks.onReplaysChange(this.replays),this.pushToast("REPLAY SAVED",`${t.name} · ${n.duration.toFixed(1)}s`,"#38bdf8"),n}removeReplay(t){this.replays=sm(t),this.callbacks.onReplaysChange(this.replays)}togglePause(t){this.mode==="riding"&&(this.paused=t!==void 0?t:!this.paused,this.paused&&this.sound.silenceContinuous(),this.callbacks.onPauseChange(this.paused))}cycleCamera(){const t=["first_person","chase","action"],e=t.indexOf(this.profile.settings.cameraMode),n=t[(e+1)%t.length];this.profile.settings.cameraMode=n,this.bikeModel.setFirstPerson(this.mode==="riding"&&n==="first_person"),Qe(this.profile),this.callbacks.onProfileChange(this.profile);const i={first_person:"HELMET POV",chase:"CHASE CAM",action:"FORK ACTION CAM"};this.pushPopup(i[n],0,"#e2e8f0")}handleHop(t){this.sound.playHop(),this.runStats.bunnyHops+=1;const e=Math.round(60+t*90);this.addComboTrick("BUNNY HOP",e,"#a3e635"),this.particles.emit(this.physics.state.x,this.physics.state.y,this.physics.state.z,-this.physics.state.vx*.15,.5,-this.physics.state.vz*.15,this.physics.state.surface,7)}handlePumpBoost(t){this.sound.playPumpBoost(),this.runStats.pumpBoosts+=1,this.runStats.score+=120,this.pushPopup(`PUMP BOOST +${Math.round(t*3.6)} KM/H`,120,"#38bdf8")}handleTrick(t,e,n){this.sound.playTrick(),t==="BARSPIN"&&(this.runStats.barspins+=1),t==="AIR WHIP"&&(this.runStats.whips+=1),t==="BACKFLIP"&&(this.runStats.backflips+=1),t==="FRONTFLIP"&&(this.runStats.frontflips+=1),t==="TABLETOP"&&(this.runStats.tabletops+=1),this.addComboTrick(t,e,n)}handleManualComplete(t,e){t>this.runStats.maxManualTime&&(this.runStats.maxManualTime=t),e>this.runStats.maxManualDist&&(this.runStats.maxManualDist=e);const n=Math.round(t*140+e*8);this.runStats.score+=n,this.pushPopup(`MANUAL ${t.toFixed(1)}s`,n,"#fbbf24")}handleStoppieComplete(t){t>this.runStats.maxStoppieTime&&(this.runStats.maxStoppieTime=t);const e=Math.round(t*220);this.runStats.score+=e,this.pushPopup(`STOPPIE ${t.toFixed(1)}s`,e,"#38bdf8")}handleLanding(t,e,n,i,r){const a=this.physics.state;if(this.sound.playLanding(e/12,a.surface),this.camShake=Math.min(.42,e*.028),this.particles.emit(a.x,a.y,a.z,0,.8,0,a.surface,t==="sketchy"?18:11),n>this.runStats.maxAirHeight&&(this.runStats.maxAirHeight=n),i>this.runStats.maxAirTime&&(this.runStats.maxAirTime=i),n>1.8&&this.addComboTrick(`BIG AIR ${n.toFixed(1)}m`,Math.round(n*75),"#fb923c"),t==="stomped"||t==="clean")if(this.runStats.cleanLandings+=1,r&&(this.runStats.dropStomps+=1,this.addComboTrick("DROP STOMP",220,"#f97316")),this.runStats.comboScore>0){const o=Math.min(4,1+(this.runStats.comboCount-1)*.35),l=t==="stomped"?1.25:1,c=Math.round(this.runStats.comboScore*o*l);this.runStats.score+=c,c>0&&this.checkComboChallenge(c);const h=t==="stomped"?"STOMPED!":"CLEAN LANDING";this.pushPopup(h,c,t==="stomped"?"#a3e635":"#4ade80")}else t==="stomped"&&n>.9&&(this.runStats.score+=120,this.pushPopup("STOMPED!",120,"#a3e635"));else{const o=Math.round(this.runStats.comboScore*.45);this.runStats.score+=o,this.pushPopup("SKETCHY LANDING",o,"#f59e0b")}this.runStats.comboScore=0,this.runStats.comboCount=0,this.runStats.comboTricks=[]}handleCrash(t){this.sound.playCrash(),this.camShake=.7,this.runStats.crashes+=1,this.runStats.comboScore=0,this.runStats.comboCount=0,this.runStats.comboTricks=[];const e=this.physics.state;this.particles.emit(e.x,e.y+.3,e.z,0,1.8,0,e.surface,26),this.pushPopup(`WIPEOUT · ${t}`,0,"#ef4444")}addComboTrick(t,e,n){this.runStats.comboScore+=e,this.runStats.comboCount+=1,this.runStats.comboTricks.push(t),this.pushPopup(t,e,n)}pushPopup(t,e,n){this.trickPopups.unshift({id:this.nextPopupId++,text:t,points:e,color:n,timeLeft:2}),this.trickPopups.length>4&&this.trickPopups.pop()}pushToast(t,e,n){this.toasts.unshift({id:this.nextToastId++,title:t,subtitle:e,accent:n,timeLeft:3.8}),this.toasts.length>3&&this.toasts.pop()}updateRiding(t){const e=this.input.poll(t,this.profile.settings);if(e.pausePressed){this.togglePause();return}if(this.paused)return;if(e.cameraTogglePressed&&this.cycleCamera(),e.checkpointPressed&&this.respawnAtCheckpoint(),e.restartPressed){this.restartRun();return}if(e.setMarkerPressed){const c=this.physics.state;this.sessionMarker={x:c.x,y:c.y,z:c.z,yaw:c.yaw},this.pushPopup("SESSION MARKER SET",0,"#a3e635")}if(e.gotoMarkerPressed&&this.sessionMarker){const c=this.sessionMarker;this.physics.reset(c.x,c.y+.15,c.z,c.yaw),this.camInitialized=!1,this.pushPopup("WARPED TO MARKER",0,"#38bdf8")}const n=1/120;this.physicsAccum=Math.min(.1,this.physicsAccum+t);const i=this.physics.state.x,r=this.physics.state.z;if(this.world)for(;this.physicsAccum>=n;)this.physics.step(n,e,this.world),this.physicsAccum-=n;const a=this.physics.state;a.crashed&&a.crashTimer>1.85&&this.respawnAtCheckpoint(),this.runStats.finished||(this.runStats.elapsedTime+=t);const o=Math.abs(a.speed)*3.6;o>this.runStats.maxSpeedKmh&&(this.runStats.maxSpeedKmh=o),a.manualActive&&(a.manualDist>this.runStats.maxManualDist&&(this.runStats.maxManualDist=a.manualDist),a.manualTime>this.runStats.maxManualTime&&(this.runStats.maxManualTime=a.manualTime)),a.stoppieActive&&a.stoppieTime>this.runStats.maxStoppieTime&&(this.runStats.maxStoppieTime=a.stoppieTime),this.checkHopLogs(a);const l=Math.hypot(a.x-i,a.z-r);if(a.grounded&&!a.crashed&&l>.001&&(a.surface==="mud"&&(this.runStats.mudDistance+=l),a.surface==="wood"&&(this.runStats.woodDistance+=l)),a.grounded&&!a.crashed&&Math.abs(a.speed)>4.5){const c=a.surface==="mud"?.65:a.skidding?.85:.24;if(Math.random()<c){const h=Math.sin(a.yaw),u=Math.cos(a.yaw);this.particles.emit(a.x-h*.6,a.y+.08,a.z-u*.6,-a.vx*.2,a.surface==="mud"?2.4:.9,-a.vz*.2,a.surface,a.surface==="mud"?4:2)}}this.checkCheckpoints(a),this.checkCargoTags(a),this.evaluateZoneChallenges(),this.bikeModel.applyPhysicsState(a),this.sound.updateContinuous(a,e.throttle>.1&&a.grounded),this.recorder.record(this.runStats.elapsedTime,t,a),this.setVisorMud(this.profile.settings.cameraMode==="first_person"?a.mudVisorAmount:0),this.updateRidingCamera(t,a);for(let c=this.trickPopups.length-1;c>=0;c--)this.trickPopups[c].timeLeft-=t,this.trickPopups[c].timeLeft<=0&&this.trickPopups.splice(c,1);for(let c=this.toasts.length-1;c>=0;c--)this.toasts[c].timeLeft-=t,this.toasts[c].timeLeft<=0&&this.toasts.splice(c,1);this.hudTickAccum+=t,this.hudTickAccum>=.05&&(this.hudTickAccum=0,this.callbacks.onHudUpdate())}checkHopLogs(t){if(!(!this.world||this.world.hopLogs.length===0||t.crashed))for(const e of this.world.hopLogs){if(this.clearedLogIds.has(e.id))continue;const n=t.x-e.x,i=t.z-e.z,r=Math.sin(e.yaw),a=Math.cos(e.yaw),o=n*r+i*a,l=n*a-i*r;if(Math.abs(l)<e.width*.55&&Math.abs(o)<.95){const c=t.y-e.y;!t.grounded&&c>=e.height*.72?(this.clearedLogIds.add(e.id),this.runStats.logsCleared+=1,this.runStats.score+=220,this.sound.playTrick(),this.pushPopup(`CLEARED ${e.label.toUpperCase()}!`,220,"#a3e635")):t.grounded&&Math.abs(o)<.35&&t.speed>5&&e.height>=.24&&(t.vx*=.62,t.vz*=.62,t.frontCompression=.85,this.camShake=.25)}}}checkCheckpoints(t){if(!this.world||this.runStats.finished)return;const e=this.runStats.currentCheckpoint;if(e>=this.world.checkpoints.length)return;const n=this.world.checkpoints[e],i=t.x-n.x,r=t.z-n.z;if(Math.hypot(i,r)<n.width*.65)if(this.runStats.currentCheckpoint+=1,this.lastCheckpointPose={x:n.x,y:n.y+.1,z:n.z,yaw:n.yaw},n.isFinish){this.runStats.finished=!0,this.runStats.finishTime=this.runStats.elapsedTime,this.sound.playChallengeComplete();let o=!1;const l=this.profile.bestTimes[this.currentZoneId];(l===void 0||this.runStats.finishTime<l)&&(this.profile.bestTimes[this.currentZoneId]=Math.round(this.runStats.finishTime*100)/100,o=!0);const c=this.profile.bestScores[this.currentZoneId]??0;this.runStats.score>c&&(this.profile.bestScores[this.currentZoneId]=Math.round(this.runStats.score));const h=50+Math.round(this.runStats.score*.02);this.awardMudCoins(h),this.runCoinsEarned+=h,this.evaluateZoneChallenges(),this.saveCurrentRunReplay(),Qe(this.profile),this.callbacks.onProfileChange(this.profile),this.callbacks.onRunFinished({...this.runStats},o,this.runCoinsEarned)}else this.sound.playCheckpoint(),this.pushPopup(`CHECKPOINT ${e+1}/${this.world.checkpoints.length-1}`,150,"#38bdf8"),this.runStats.score+=150}checkCargoTags(t){if(!(!this.world||this.world.cargoTags.length===0))for(const e of this.world.cargoTags){if(this.profile.collectedTags[e.id])continue;const n=t.x-e.x,i=t.y+.7-e.y,r=t.z-e.z;if(n*n+i*i+r*r<2.35*2.35){this.profile.collectedTags[e.id]=!0,this.runStats.collectedTagIds.push(e.id);const a=this.world.cargoTagMeshes.get(e.id);a&&(a.visible=!1),this.sound.playCargoTag(),this.particles.emit(e.x,e.y,e.z,0,2,0,"sparkle",24),this.awardMudCoins(45),this.runCoinsEarned+=45,this.runStats.score+=350;const o=Object.keys(this.profile.collectedTags).filter(l=>this.profile.collectedTags[l]).length;this.pushToast("CARGO TAG FOUND!",`${e.label} (${o}/13) · +45 Credits`,"#facc15"),Qe(this.profile),this.callbacks.onProfileChange(this.profile)}}}checkComboChallenge(t){const e=mi(this.currentZoneId);for(const n of e.challenges)n.type==="combo_score"&&!this.profile.completedChallenges[n.id]&&t>=n.target&&this.completeChallenge(n)}evaluateZoneChallenges(){const t=mi(this.currentZoneId),e=this.runStats,n=Object.keys(this.profile.collectedTags).filter(i=>this.profile.collectedTags[i]).length;for(const i of t.challenges){if(this.profile.completedChallenges[i.id])continue;let r=!1;switch(i.type){case"speed":r=e.maxSpeedKmh>=i.target;break;case"air_height":r=e.maxAirHeight>=i.target;break;case"air_time":r=e.maxAirTime>=i.target;break;case"bunny_hop":r=e.bunnyHops>=i.target;break;case"manual_time":r=e.maxManualTime>=i.target;break;case"manual_dist":r=e.maxManualDist>=i.target;break;case"stoppie_time":r=e.maxStoppieTime>=i.target;break;case"log_clear":r=e.logsCleared>=i.target;break;case"barspin":r=e.barspins>=i.target;break;case"whip":r=e.whips>=i.target;break;case"backflip":r=e.backflips>=i.target;break;case"frontflip":r=e.frontflips>=i.target;break;case"tabletop":r=e.tabletops>=i.target;break;case"pump_boosts":r=e.pumpBoosts>=i.target;break;case"clean_landings":r=e.cleanLandings>=i.target;break;case"drop_stomp":r=e.dropStomps>=i.target;break;case"mud_traverse":r=e.mudDistance>=i.target;break;case"wood_ride":r=e.woodDistance>=i.target;break;case"total_score":r=e.score>=i.target;break;case"cargo_tags":r=n>=i.target;break;case"finish_run":r=e.finished;break;case"finish_time":r=e.finished&&e.finishTime<=i.target;break;case"no_crash_finish":r=e.finished&&e.crashes===0;break}r&&this.completeChallenge(i)}}completeChallenge(t){this.profile.completedChallenges[t.id]=!0,this.awardMudCoins(t.reward),this.runCoinsEarned+=t.reward,this.sound.playChallengeComplete(),this.pushToast("CHALLENGE COMPLETE",`${t.title} · +${t.reward} Credits`,"#a3e635"),Qe(this.profile),this.callbacks.onProfileChange(this.profile)}awardMudCoins(t){this.profile.mudCoins+=t}updateRidingCamera(t,e){const n=this.profile.settings.cameraMode;this.camShake=Math.max(0,this.camShake-t*2.2);const i=(Math.random()-.5)*this.camShake*.25,r=(Math.random()-.5)*this.camShake*.25,a=Math.min(16,Math.max(0,(Math.abs(e.speed)-8)*.85)),o=this.profile.settings.fov+a;this.camera.fov+=(o-this.camera.fov)*Math.min(1,t*6),this.camera.updateProjectionMatrix();const l=Math.sin(e.yaw),c=Math.cos(e.yaw);if(n==="first_person"){const x=new P,m=new Ei;this.bikeModel.getHelmetWorldTransform(x,m);const f=e.grounded&&!e.crashed?Math.min(.018,Math.abs(e.speed)*.001):0,M=Math.sin(this.worldTime*34)*f;this.camera.position.set(x.x+i,x.y+M+r,x.z);const _=Math.abs(e.flipAccumulator)>.65||Math.abs(e.pitch)>.95,v=-.21,A=_?e.pitch+v*.4:e.pitch*.78+v,E=e.roll*.56;this.fpPitchSmooth+=(A-this.fpPitchSmooth)*Math.min(1,t*15),this.fpRollSmooth+=(E-this.fpRollSmooth)*Math.min(1,t*12);const T=Math.cos(this.fpPitchSmooth),C=Math.sin(this.fpPitchSmooth),S=l*T,y=C,L=c*T,U=Math.cos(this.fpRollSmooth),F=Math.sin(this.fpRollSmooth),q=-Math.cos(e.yaw),Z=Math.sin(e.yaw),X=-l*C*U+q*F,J=T*U,z=-c*C*U+Z*F;this.camera.up.set(X,J,z).normalize(),this.camera.lookAt(this.camera.position.x+S*12,this.camera.position.y+y*12,this.camera.position.z+L*12);return}this.camera.up.set(0,1,0);const h=n==="chase"?4.35:2.35,u=n==="chase"?2.15:1.32,d=n==="chase"?5.5:4.2,p=new P(e.x-l*h,e.y+u+(e.grounded?0:.35),e.z-c*h);if(this.world){const x=this.world.sampleGround(p.x,p.z).height;p.y<x+.75&&(p.y=x+.75)}const g=new P(e.x+l*d,e.y+.85,e.z+c*d);if(!this.camInitialized)this.camPos.copy(p),this.camLook.copy(g),this.camInitialized=!0;else{const x=n==="chase"?9.5:14;this.camPos.lerp(p,Math.min(1,t*x)),this.camLook.lerp(g,Math.min(1,t*13))}this.camera.position.set(this.camPos.x+i,this.camPos.y+r,this.camPos.z),this.camera.lookAt(this.camLook)}updateMenuCamera(t){const e=this.bikeModel.root.position,n=Math.PI*.44+Math.sin(this.worldTime*.25)*.28,i=3.15;this.camera.up.set(0,1,0),this.camera.position.set(e.x+Math.sin(n)*i,e.y+1.15+Math.sin(this.worldTime*.4)*.08,e.z+Math.cos(n)*i),this.camera.lookAt(e.x,e.y+.85,e.z-.15)}updateGarageCamera(t){const e=this.bikeModel.root.position,n=2.85,i=n*Math.cos(this.garagePitch),r=n*Math.sin(this.garagePitch);this.camera.up.set(0,1,0),this.camera.position.set(e.x+Math.sin(this.garageYaw)*i,e.y+.92+r,e.z+Math.cos(this.garageYaw)*i),this.camera.lookAt(e.x,e.y+.9,e.z+.05)}updateReplay(t){if(!this.activeReplay||this.activeReplay.frames.length===0)return;const e=this.activeReplay.frames,n=e[e.length-1].t;this.replayPlaying&&(this.replayTime+=t*this.replaySpeed,this.replayTime>n&&(this.replayTime=0)),cm(e,this.replayTime,this.replayState),this.bikeModel.applyPhysicsState(this.replayState);const i=this.replayState;if(this.replayCam==="helmet"){this.bikeModel.setFirstPerson(!0);const r=this.profile.settings.cameraMode;this.profile.settings.cameraMode="first_person",this.updateRidingCamera(t,i),this.profile.settings.cameraMode=r}else if(this.replayCam==="orbit"){this.bikeModel.setFirstPerson(!1),this.camera.up.set(0,1,0);const r=this.worldTime*.65;this.camera.position.set(i.x+Math.sin(r)*4.5,i.y+2.2,i.z+Math.cos(r)*4.5),this.camera.lookAt(i.x,i.y+.8,i.z)}else if(this.replayCam==="trackside"){this.bikeModel.setFirstPerson(!1),this.camera.up.set(0,1,0);const r=Math.sin(i.yaw),a=Math.cos(i.yaw),o=-Math.cos(i.yaw),l=Math.sin(i.yaw);this.camera.position.set(i.x+r*7+o*5.2,i.y+2.4,i.z+a*7+l*5.2),this.camera.lookAt(i.x,i.y+.9,i.z)}else{this.bikeModel.setFirstPerson(!1);const r=this.profile.settings.cameraMode;this.profile.settings.cameraMode="chase",this.updateRidingCamera(t,i),this.profile.settings.cameraMode=r}this.hudTickAccum+=t,this.hudTickAccum>=.06&&(this.hudTickAccum=0,this.callbacks.onHudUpdate())}setVisorMud(t){this.visorMudEl&&(this.visorMudEl.style.opacity=String(Math.min(.88,t*.9)))}dispose(){cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.input.dispose(),this.renderer.dispose()}}function Mr(s){const t=Math.floor(s/60),e=s%60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const Tm={dirt:{bg:"#78350f",fg:"#fde68a"},mud:{bg:"#451a03",fg:"#fb923c"},wood:{bg:"#713f12",fg:"#fef08a"},rock:{bg:"#334155",fg:"#e2e8f0"},metal:{bg:"#1e3a5f",fg:"#7dd3fc"},grass:{bg:"#14532d",fg:"#86efac"},concrete:{bg:"#3f3f46",fg:"#e4e4e7"}};class Em{constructor(t,e){B(this,"root");B(this,"engine");B(this,"menuSub","home");B(this,"garageTab","bikes");B(this,"showPauseSettings",!1);B(this,"challengesExpanded",!0);B(this,"finishModalData",null);B(this,"hudRefs",{});B(this,"replayRefs",{});this.root=t,this.engine=e,this.render()}onModeChange(t){this.finishModalData=null,this.showPauseSettings=!1,t==="menu"&&(this.menuSub="home"),this.render()}onPauseChange(t){this.showPauseSettings=!1,this.render()}onRunFinished(t,e,n){this.finishModalData={stats:t,newRecord:e,coinsEarned:n},this.render()}onDataChanged(){this.engine.mode!=="riding"&&this.engine.mode!=="replay"&&this.render()}updateHud(){this.engine.mode==="riding"&&!this.engine.paused&&!this.finishModalData?this.patchRidingHud():this.engine.mode==="replay"&&this.patchReplayHud()}render(){if(this.hudRefs={},this.replayRefs={},this.engine.mode==="menu"){this.renderMenu();return}if(this.engine.mode==="garage"){this.renderGarage();return}if(this.engine.mode==="replay"){this.renderReplayViewer();return}this.engine.mode==="riding"&&(this.renderRidingShell(),this.patchRidingHud())}renderMenu(){const t=this.engine.profile,e=Tn(t.selectedBikeId),n=Object.keys(t.completedChallenges).filter(a=>t.completedChallenges[a]).length,i=Hn.reduce((a,o)=>a+o.challenges.length,0);let r="";this.menuSub==="zones"&&(r=this.buildZonesModalHtml()),this.menuSub==="replays"&&(r=this.buildReplaysModalHtml()),this.menuSub==="controls"&&(r=this.buildControlsModalHtml()),this.menuSub==="settings"&&(r=this.buildSettingsModalHtml(!1)),this.root.innerHTML=`
      <div class="menu-shell pointer-auto">
        <div class="menu-topbar">
          <div class="brand-block">
            <h1>LOAM<span>LINE</span></h1>
            <div class="brand-tagline">3D MTB Physics · Downhill · Dirt Jumps · Freeride</div>
          </div>
          <div class="coin-pill" title="Earn Credits by completing zone tasks and finding Cargo Tags">
            <span class="coin-dot"></span>
            <span>${t.mudCoins.toLocaleString()} CREDITS</span>
          </div>
        </div>

        <nav class="menu-nav">
          <button class="nav-btn primary" data-action="open-zones">
            <span>RIDE</span>
            <span class="nav-sub">5 ZONES · ${n}/${i} TASKS</span>
          </button>
          <button class="nav-btn" data-action="open-garage">
            <span>MY GARAGE</span>
            <span class="nav-sub">${t.unlockedBikes.length}/${Xi.length} BIKES</span>
          </button>
          <button class="nav-btn" data-action="open-replays">
            <span>REPLAYS</span>
            <span class="nav-sub">${this.engine.replays.length} SAVED</span>
          </button>
          <button class="nav-btn" data-action="open-controls">
            <span>CONTROLS</span>
            <span class="nav-sub">KB · PAD · TILT</span>
          </button>
          <button class="nav-btn" data-action="open-settings">
            <span>SETTINGS</span>
            <span class="nav-sub">${t.settings.cameraMode==="first_person"?"HELMET POV":"CHASE CAM"}</span>
          </button>
        </nav>

        <div class="menu-footer">
          <div class="active-bike-chip">
            <strong>ACTIVE BIKE:</strong>
            <span style="color:var(--accent)">${e.name}</span>
            <span style="color:var(--text-dim)">(${e.category})</span>
          </div>
          <div>WASD Pedal/Brake/Steer · ↑↓ Stoppie/Manual (Air: Front/Backflip) · ←→ Lean/Whip · SPACE Hop · SHIFT Pump · F Barspin · C Cam</div>
        </div>
      </div>
      ${r}
    `,this.bindMenuEvents()}buildZonesModalHtml(){const t=this.engine.profile,e=Object.keys(t.collectedTags).filter(i=>t.collectedTags[i]).length,n=Hn.map(i=>{const r=i.challenges.filter(c=>t.completedChallenges[c.id]).length,a=Math.round(r/i.challenges.length*100),o=t.bestTimes[i.id],l="★".repeat(i.difficulty)+"☆".repeat(5-i.difficulty);return`
        <div class="zone-card" style="border-top-color:${i.accent}">
          <div class="zone-card-head">
            <div>
              <h3>${i.name}</h3>
              <div style="font-size:0.75rem;color:${i.accent};font-weight:600">${i.subtitle}</div>
            </div>
            <div class="zone-stars" title="Difficulty ${i.difficulty}/5">${l}</div>
          </div>
          <p class="zone-desc">${i.description}</p>
          <div class="zone-meta-row">
            <span>Tasks: <strong>${r}/${i.challenges.length}</strong></span>
            <span>${o!==void 0?`Best: <strong>${Mr(o)}</strong>`:`Par: ${Mr(i.parTime)}`}</span>
          </div>
          ${i.cargoTagCount>0?`<div class="zone-meta-row"><span>Cargo Tags Found</span><strong style="color:var(--accent-gold)">${e}/${i.cargoTagCount}</strong></div>`:""}
          <div class="progress-track"><div class="progress-fill" style="width:${a}%;background:${i.accent}"></div></div>
          <button class="btn accent" data-start-zone="${i.id}">DROP IN &amp; RIDE</button>
        </div>
      `}).join("");return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window">
          <div class="panel-header">
            <h2>SELECT ZONE</h2>
            <div style="display:flex;align-items:center;gap:12px">
              <label style="display:flex;align-items:center;gap:7px;font-size:0.82rem;cursor:pointer">
                <input type="checkbox" id="quick-tilt-toggle" ${t.settings.tiltSteering?"checked":""} />
                <span>Tilt Steering</span>
              </label>
              <button class="btn" data-action="close-sub">BACK</button>
            </div>
          </div>
          <div class="panel-body">
            <div class="zones-grid">${n}</div>
          </div>
        </div>
      </div>
    `}buildReplaysModalHtml(){const t=this.engine.replays;return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(740px,95vw)">
          <div class="panel-header">
            <h2>REPLAYS</h2>
            <button class="btn" data-action="close-sub">BACK</button>
          </div>
          <div class="panel-body">${t.length===0?`<div style="text-align:center;padding:42px 16px;color:var(--text-dim)">
             <p style="font-size:1.05rem;margin-bottom:8px">No saved replays yet!</p>
             <p style="font-size:0.86rem">Finish any zone run (or click <strong>Save Replay</strong> in the Pause menu) to record and watch your lines from multiple camera angles.</p>
           </div>`:t.map(n=>`
            <div class="upgrade-row" style="margin-bottom:10px">
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:1.05rem">
                  ${n.zoneName} ${n.finished?'<span style="color:var(--accent-lime);font-size:0.75rem">FINISHED</span>':'<span style="color:var(--accent-sky);font-size:0.75rem">CLIP</span>'}
                </div>
                <div style="font-size:0.78rem;color:var(--text-dim)">
                  ${n.dateStr} · ${n.duration.toFixed(1)}s · Score ${n.score.toLocaleString()} · ${Tn(n.bikeId).name}
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn accent" data-watch-replay="${n.id}">WATCH</button>
                <button class="btn danger" data-delete-replay="${n.id}">DELETE</button>
              </div>
            </div>
          `).join("")}</div>
        </div>
      </div>
    `}buildControlsModalHtml(){return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window">
          <div class="panel-header">
            <h2>CONTROLS GUIDE</h2>
            <button class="btn" data-action="close-sub">BACK</button>
          </div>
          <div class="panel-body">
            <div class="controls-grid">
              <div class="control-card">
                <h3>PC Keyboard</h3>
                <div class="bind-row"><span>Pedal / Accelerate</span><span class="bind-key">W</span></div>
                <div class="bind-row"><span>Brake / Skid / Stoppie Assist</span><span class="bind-key">S</span></div>
                <div class="bind-row"><span>Steer Handlebars Left / Right</span><span class="bind-key">A / D</span></div>
                <div class="bind-row"><span>Manual (Ground) / Backflip (Air)</span><span class="bind-key">↓ / K</span></div>
                <div class="bind-row"><span>Stoppie (Ground) / Frontflip (Air)</span><span class="bind-key">↑ / I</span></div>
                <div class="bind-row"><span>Sideways Lean (Carve / Air Whip)</span><span class="bind-key">← → / J L</span></div>
                <div class="bind-row"><span>Bunny Hop (Hold Preload, Release Pop)</span><span class="bind-key">SPACE</span></div>
                <div class="bind-row"><span>Pump Rollers / Crouch</span><span class="bind-key">SHIFT</span></div>
                <div class="bind-row"><span>Barspin (Mid-Air)</span><span class="bind-key">F</span></div>
                <div class="bind-row"><span>Tabletop (Hold Mid-Air)</span><span class="bind-key">G</span></div>
                <div class="bind-row"><span>Camera (Helmet POV / Chase / Action)</span><span class="bind-key">C</span></div>
                <div class="bind-row"><span>Checkpoint / Full Restart</span><span class="bind-key">R / BACKSPACE</span></div>
                <div class="bind-row"><span>Set / Warp Session Marker</span><span class="bind-key">T / Y</span></div>
              </div>

              <div class="control-card">
                <h3>External Gamepad / Controller</h3>
                <div class="bind-row"><span>Steer Handlebars</span><span class="bind-key">Left Stick</span></div>
                <div class="bind-row"><span>Pedal / Accelerate</span><span class="bind-key">RT / R2</span></div>
                <div class="bind-row"><span>Brake / Skid</span><span class="bind-key">LT / L2</span></div>
                <div class="bind-row"><span>Manual / Backflip</span><span class="bind-key">Right Stick Down</span></div>
                <div class="bind-row"><span>Stoppie / Frontflip</span><span class="bind-key">Right Stick Up</span></div>
                <div class="bind-row"><span>Sideways Lean / Air Whip</span><span class="bind-key">Right Stick Left/Right</span></div>
                <div class="bind-row"><span>Bunny Hop</span><span class="bind-key">A / Cross</span></div>
                <div class="bind-row"><span>Pump / Crouch</span><span class="bind-key">LB / L1</span></div>
                <div class="bind-row"><span>Barspin / Tabletop</span><span class="bind-key">X / B</span></div>
                <div class="bind-row"><span>Switch Camera / Checkpoint</span><span class="bind-key">Y / RB</span></div>
              </div>

              <div class="control-card">
                <h3>Mobile Touch &amp; Riding Tips</h3>
                <div class="bind-row"><span>On-Screen Joystick</span><span class="bind-key">Default Touch</span></div>
                <div class="bind-row"><span>Tilt Steering</span><span class="bind-key">Toggle in Settings</span></div>
                <p style="font-size:0.81rem;color:#cbd5e1;line-height:1.5;margin-top:12px">
                  <strong>MTB Technique:</strong><br/>
                  • <strong>Manuals:</strong> Hold <kbd>↓</kbd> while rolling to balance on your rear wheel.<br/>
                  • <strong>Stoppies:</strong> Hold <kbd>↑</kbd> (and tap <kbd>S</kbd>) while rolling to nose-manual on your front wheel.<br/>
                  • <strong>Sideways Lean:</strong> Hold <kbd>←</kbd>/<kbd>→</kbd> with <kbd>A</kbd>/<kbd>D</kbd> to carve hard through berms, or whip in mid-air.<br/>
                  • <strong>Flips:</strong> Hold <kbd>↓</kbd> in air to Backflip or <kbd>↑</kbd> to Frontflip — release before landing to spot the slope!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}buildSettingsModalHtml(t){const e=this.engine.profile.settings;return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(640px,95vw)">
          <div class="panel-header">
            <h2>SETTINGS</h2>
            <button class="btn" data-action="${t?"close-pause-settings":"close-sub"}">DONE</button>
          </div>
          <div class="panel-body">
            <div class="setting-row">
              <div>
                <div class="setting-label">Camera Perspective</div>
                <div class="setting-sub">Loamline defaults to First-Person Helmet POV</div>
              </div>
              <select id="set-camera" class="btn">
                <option value="first_person" ${e.cameraMode==="first_person"?"selected":""}>Helmet POV (1st Person)</option>
                <option value="chase" ${e.cameraMode==="chase"?"selected":""}>Trail Chase (3rd Person)</option>
                <option value="action" ${e.cameraMode==="action"?"selected":""}>Close Action Cam</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Steering Sensitivity (${e.steeringSensitivity.toFixed(2)}x)</div>
                <div class="setting-sub">Adjust steering responsiveness for keyboard, pad, or tilt</div>
              </div>
              <input id="set-sens" type="range" min="0.5" max="1.8" step="0.05" value="${e.steeringSensitivity}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Tilt Steering (Mobile Landscape)</div>
                <div class="setting-sub">Hold phone sideways like a steering wheel; auto-calibrates each run</div>
              </div>
              <input id="set-tilt" type="checkbox" ${e.tiltSteering?"checked":""} style="width:20px;height:20px" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">On-Screen Touch Controls</div>
                <div class="setting-sub">Show virtual steering joystick &amp; MTB touch buttons</div>
              </div>
              <select id="set-touch" class="btn">
                <option value="auto" ${e.touchControls==="auto"?"selected":""}>Auto (Touch Devices)</option>
                <option value="on" ${e.touchControls==="on"?"selected":""}>Always On</option>
                <option value="off" ${e.touchControls==="off"?"selected":""}>Off</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Field of View (${e.fov}°)</div>
                <div class="setting-sub">Wider FOV increases downhill speed sensation</div>
              </div>
              <input id="set-fov" type="range" min="65" max="95" step="1" value="${e.fov}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Dynamic Shadows</div>
                <div class="setting-sub">Disable on lower-end devices for extra framerate</div>
              </div>
              <input id="set-shadows" type="checkbox" ${e.shadows?"checked":""} style="width:20px;height:20px" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Audio Volume (${Math.round(e.volume*100)}%)</div>
                <div class="setting-sub">Freehub buzz, tire surfaces, suspension &amp; effects</div>
              </div>
              <input id="set-vol" type="range" min="0" max="1" step="0.05" value="${e.volume}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Speed Units</div>
                <div class="setting-sub">Display telemetry in km/h or mph</div>
              </div>
              <select id="set-units" class="btn">
                <option value="kmh" ${e.units==="kmh"?"selected":""}>KM/H</option>
                <option value="mph" ${e.units==="mph"?"selected":""}>MPH</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">In-Ride Keybind Hints</div>
                <div class="setting-sub">Show compact control strip at bottom of screen</div>
              </div>
              <input id="set-hints" type="checkbox" ${e.showKeyHints?"checked":""} style="width:20px;height:20px" />
            </div>
          </div>
        </div>
      </div>
    `}bindMenuEvents(){this.root.querySelectorAll("[data-action]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n==="open-zones"?(this.menuSub="zones",this.render()):n==="open-garage"?this.engine.openGarage():n==="open-replays"?(this.menuSub="replays",this.render()):n==="open-controls"?(this.menuSub="controls",this.render()):n==="open-settings"?(this.menuSub="settings",this.render()):n==="close-sub"&&(this.menuSub="home",this.render())})}),this.root.querySelectorAll("[data-start-zone]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.startZone;this.engine.startZone(n)})});const t=this.root.querySelector("#quick-tilt-toggle");t&&t.addEventListener("change",()=>{this.engine.profile.settings.tiltSteering=t.checked,this.engine.applySettings()}),this.root.querySelectorAll("[data-watch-replay]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.watchReplay,i=this.engine.replays.find(r=>r.id===n);i&&this.engine.startReplay(i)})}),this.root.querySelectorAll("[data-delete-replay]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.deleteReplay;this.engine.removeReplay(n),this.render()})}),this.bindSettingsControls()}bindSettingsControls(){const t=this.engine.profile.settings,e=this.root.querySelector("#set-camera"),n=this.root.querySelector("#set-sens"),i=this.root.querySelector("#set-tilt"),r=this.root.querySelector("#set-touch"),a=this.root.querySelector("#set-fov"),o=this.root.querySelector("#set-shadows"),l=this.root.querySelector("#set-vol"),c=this.root.querySelector("#set-units"),h=this.root.querySelector("#set-hints");e&&e.addEventListener("change",()=>{t.cameraMode=e.value,this.engine.applySettings()}),n&&n.addEventListener("input",()=>{t.steeringSensitivity=parseFloat(n.value),this.engine.applySettings()}),i&&i.addEventListener("change",()=>{t.tiltSteering=i.checked,this.engine.applySettings()}),r&&r.addEventListener("change",()=>{t.touchControls=r.value,this.engine.applySettings()}),a&&a.addEventListener("input",()=>{t.fov=parseInt(a.value,10),this.engine.applySettings()}),o&&o.addEventListener("change",()=>{t.shadows=o.checked,this.engine.applySettings()}),l&&l.addEventListener("input",()=>{t.volume=parseFloat(l.value),this.engine.applySettings()}),c&&c.addEventListener("change",()=>{t.units=c.value,this.engine.applySettings()}),h&&h.addEventListener("change",()=>{t.showKeyHints=h.checked,this.engine.applySettings()})}renderGarage(){const t=this.engine.profile,e=Tn(t.selectedBikeId),n=di(t,e.id),i=bl(e,n),r=Hi(t,e.id);let a="";if(this.garageTab==="bikes")a=Xi.map(o=>{const l=t.unlockedBikes.includes(o.id),c=t.selectedBikeId===o.id;return`
          <div class="bike-item ${c?"selected":""}" data-select-bike="${o.id}">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:1.05rem">${o.name}</div>
                <div style="font-size:0.74rem;color:var(--accent)">${o.category}</div>
              </div>
              ${l?c?'<span style="color:var(--accent-lime);font-weight:700;font-size:0.76rem">EQUIPPED</span>':'<span style="color:#cbd5e1;font-size:0.76rem">OWNED</span>':`<button class="btn accent" style="padding:6px 10px;font-size:0.76rem" data-buy-bike="${o.id}" ${t.mudCoins<o.cost?"disabled":""}>BUY ${o.cost}</button>`}
            </div>
            <p style="font-size:0.78rem;color:#cbd5e1;line-height:1.4">${o.description}</p>
          </div>
        `}).join("");else if(this.garageTab==="upgrades")a=[{key:"fork",name:"Suspension Fork",desc:"More pop, air agility & gold Kashima stanchions at Lv.3"},{key:"shock",name:"Rear Shock",desc:"Smoother drop landings & higher stability"},{key:"tires",name:"Knobby Mud Tires",desc:"Extra mud grip, faster pedaling & top speed"},{key:"brakes",name:"4-Piston Disc Brakes",desc:"Sharper corner entry braking & control"}].map(l=>{const c=n[l.key],h=zo[c+1];return`
              <div class="upgrade-row">
                <div>
                  <div style="font-weight:700;font-size:0.9rem">${l.name} <span style="color:var(--accent-lime)">Lv.${c}/3</span></div>
                  <div style="font-size:0.74rem;color:var(--text-dim)">${l.desc}</div>
                </div>
                ${c>=3?'<span style="color:var(--accent-gold);font-family:var(--font-display);font-weight:700;font-size:0.8rem">MAXED</span>':`<button class="btn accent" style="padding:7px 11px;font-size:0.78rem" data-upgrade-part="${l.key}" ${t.mudCoins<h?"disabled":""}>${h} CR</button>`}
              </div>
            `}).join("")+`
          <div style="margin-top:8px;padding:12px;background:var(--bg-card);border-radius:10px;border:1px solid var(--border)">
            <div style="font-family:var(--font-display);font-size:0.82rem;color:var(--accent);margin-bottom:8px">CURRENT BIKE SPECS</div>
            ${this.statBarHtml("TOP SPEED",Math.min(100,Math.round(i.maxSpeed/31*100)))}
            ${this.statBarHtml("BUNNY POP",Math.min(100,Math.round(i.hopPower/10*100)))}
            ${this.statBarHtml("MUD GRIP",Math.min(100,Math.round(i.grip/1.75*100)))}
            ${this.statBarHtml("STABILITY",Math.min(100,Math.round(i.stability/1.8*100)))}
            ${this.statBarHtml("AGILITY",Math.min(100,Math.round(i.agility/1.6*100)))}
          </div>
        `;else{const o=["solid","stripes","splatter","camo","racing"];a=`
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">CUSTOM PAINT &amp; HARDWARE</div>
          <div class="swatch-grid">
            <label class="color-field"><span>Frame Paint</span><input type="color" id="liv-primary" value="${r.primaryColor}" /></label>
            <label class="color-field"><span>Graphics / Grips</span><input type="color" id="liv-accent" value="${r.accentColor}" /></label>
            <label class="color-field"><span>Fork Lowers</span><input type="color" id="liv-fork" value="${r.forkColor}" /></label>
            <label class="color-field"><span>Alloy Rims</span><input type="color" id="liv-rim" value="${r.rimColor}" /></label>
          </div>
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">FRAME GRAPHIC PATTERN</div>
          <div class="pattern-pills">
            ${o.map(l=>`<button class="pill-btn ${r.pattern===l?"active":""}" data-pattern="${l}">${l}</button>`).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">FACTORY LIVERY PRESETS</div>
          <div class="pattern-pills">
            ${Go.map((l,c)=>`<button class="pill-btn" data-preset="${c}">${l.name}</button>`).join("")}
          </div>
        </div>
      `}this.root.innerHTML=`
      <div class="garage-shell">
        <div class="garage-left-hint">
          <div class="garage-badge">
            <button class="btn" data-garage-back>← MENU</button>
            <div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:1.15rem">MY GARAGE</div>
              <div style="font-size:0.76rem;color:var(--text-dim)">Drag anywhere to orbit bike 360°</div>
            </div>
          </div>
          <div class="coin-pill pointer-auto">
            <span class="coin-dot"></span>
            <span>${t.mudCoins.toLocaleString()} CREDITS</span>
          </div>
        </div>

        <aside class="garage-sidebar">
          <div class="garage-tabs">
            <button class="garage-tab ${this.garageTab==="bikes"?"active":""}" data-gtab="bikes">BIKES</button>
            <button class="garage-tab ${this.garageTab==="upgrades"?"active":""}" data-gtab="upgrades">UPGRADES</button>
            <button class="garage-tab ${this.garageTab==="livery"?"active":""}" data-gtab="livery">LIVERY</button>
          </div>
          <div class="garage-content">${a}</div>
          <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:0.78rem;color:var(--text-dim)">Selected: <strong style="color:#fff">${e.name}</strong></div>
            <button class="btn lime" data-garage-ride>RIDE NOW</button>
          </div>
        </aside>
      </div>
    `,this.bindGarageEvents()}statBarHtml(t,e){return`
      <div class="stat-row" style="margin-bottom:5px">
        <span style="color:var(--text-dim)">${t}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${e}%"></div></div>
        <span style="text-align:right;font-weight:700">${e}</span>
      </div>
    `}bindGarageEvents(){var o,l;const t=this.engine.profile;(o=this.root.querySelector("[data-garage-back]"))==null||o.addEventListener("click",()=>{this.engine.openMenu()}),(l=this.root.querySelector("[data-garage-ride]"))==null||l.addEventListener("click",()=>{this.engine.openMenu(),this.menuSub="zones",this.render()}),this.root.querySelectorAll("[data-gtab]").forEach(c=>{c.addEventListener("click",()=>{this.garageTab=c.dataset.gtab,this.renderGarage()})}),this.root.querySelectorAll("[data-select-bike]").forEach(c=>{c.addEventListener("click",h=>{if(h.target.closest("[data-buy-bike]"))return;const u=c.dataset.selectBike;t.unlockedBikes.includes(u)&&(t.selectedBikeId=u,Qe(t),this.engine.refreshBikeAppearance(),this.renderGarage())})}),this.root.querySelectorAll("[data-buy-bike]").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.buyBike,u=Tn(h);t.mudCoins>=u.cost&&!t.unlockedBikes.includes(h)&&(t.mudCoins-=u.cost,t.unlockedBikes.push(h),t.selectedBikeId=h,Qe(t),this.engine.sound.playChallengeComplete(),this.engine.refreshBikeAppearance(),this.renderGarage())})}),this.root.querySelectorAll("[data-upgrade-part]").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.upgradePart,u=di(t,t.selectedBikeId),d=zo[u[h]+1];d&&t.mudCoins>=d&&(t.mudCoins-=d,u[h]+=1,t.upgrades[t.selectedBikeId]={...u},Qe(t),this.engine.sound.playCheckpoint(),this.engine.refreshBikeAppearance(),this.renderGarage())})});const e=c=>{const h=Hi(t,t.selectedBikeId);t.liveries[t.selectedBikeId]={...h,...c},Qe(t),this.engine.refreshBikeAppearance()},n=this.root.querySelector("#liv-primary"),i=this.root.querySelector("#liv-accent"),r=this.root.querySelector("#liv-fork"),a=this.root.querySelector("#liv-rim");n==null||n.addEventListener("input",()=>e({primaryColor:n.value})),i==null||i.addEventListener("input",()=>e({accentColor:i.value})),r==null||r.addEventListener("input",()=>e({forkColor:r.value})),a==null||a.addEventListener("input",()=>e({rimColor:a.value})),this.root.querySelectorAll("[data-pattern]").forEach(c=>{c.addEventListener("click",()=>{e({pattern:c.dataset.pattern}),this.renderGarage()})}),this.root.querySelectorAll("[data-preset]").forEach(c=>{c.addEventListener("click",()=>{const h=parseInt(c.dataset.preset,10),u=Go[h];u&&(t.liveries[t.selectedBikeId]={...u.livery},Qe(t),this.engine.refreshBikeAppearance(),this.renderGarage())})})}renderRidingShell(){var l,c,h,u;const t=mi(this.engine.currentZoneId),e=this.engine.profile.settings,n="ontouchstart"in window||navigator.maxTouchPoints>0,i=e.touchControls==="on"||e.touchControls==="auto"&&n;let r="";this.finishModalData?r=this.buildFinishModalHtml():this.engine.paused&&(r=this.showPauseSettings?this.buildSettingsModalHtml(!0):this.buildPauseModalHtml());const a=t.challenges.filter(d=>this.engine.profile.completedChallenges[d.id]).length;this.root.innerHTML=`
      <div class="hud-root">
        <div class="hud-top">
          <div class="hud-tasks-minimal pointer-auto">
            <div class="hud-tasks-header" id="hud-ch-toggle">
              <span>${t.name} TASKS</span>
              <span id="hud-task-count">${a}/${t.challenges.length}</span>
            </div>
            <div id="hud-ch-list" style="display:${this.challengesExpanded?"block":"none"}"></div>
            ${t.cargoTagCount>0?'<div style="margin-top:5px;font-size:0.72rem;color:var(--accent-gold);font-weight:700">CARGO TAGS <span id="hud-tags">0/13</span></div>':""}
          </div>

          <div class="hud-center-feed" id="hud-center-feed"></div>

          <div class="hud-right-stack">
            <div class="hud-actions">
              <button class="hud-mini-btn" id="hud-cam-btn" title="Switch Camera (C)">${e.cameraMode==="first_person"?"POV":e.cameraMode==="chase"?"3RD":"ACT"}</button>
              <button class="hud-mini-btn" id="hud-reset-btn" title="Checkpoint Reset (R)">↺</button>
              <button class="hud-mini-btn" id="hud-pause-btn" title="Pause (Esc)">❚❚</button>
            </div>
            <div class="minimal-compass" title="Pitch &amp; Balance Gauge">
              <div class="attitude-ground" id="hud-att-ground"></div>
              <div class="attitude-bike" id="hud-att-bike"></div>
              <div class="compass-needle"></div>
            </div>
          </div>
        </div>

        <div class="crash-overlay" id="hud-crash" style="display:none">
          <h2>WIPEOUT!</h2>
          <div id="hud-crash-reason" style="font-size:0.95rem;margin:4px 0 8px"></div>
          <div style="font-size:0.8rem;color:#fecaca">Press <strong>R</strong> for instant checkpoint reset</div>
        </div>

        <div class="hud-bottom">
          <div class="hud-timer-clean">
            <div class="timer-italic" id="hud-timer">00:00.00</div>
            <div style="display:flex;gap:10px;align-items:center;margin-top:2px">
              <span id="hud-cp" style="font-size:0.72rem;color:rgba(255,255,255,0.75);font-weight:700;letter-spacing:0.08em">CP 0/4</span>
              <span class="surface-badge-sm" id="hud-surface-badge">DIRT</span>
              <div class="hop-pill" id="hud-hop-wrap" style="display:none">
                <span>HOP</span>
                <div class="hop-pill-track"><div id="hud-hop-bar" style="width:0%"></div></div>
              </div>
            </div>
          </div>

          ${e.showKeyHints?`<div class="key-hints-bar">
                   <kbd>WASD</kbd> Pedal/Brake/Steer · <kbd>↓</kbd> Manual/Backflip · <kbd>↑</kbd> Stoppie/Frontflip · <kbd>←→</kbd> Lean/Whip · <kbd>SPACE</kbd> Hop · <kbd>F</kbd> Barspin · <kbd>C</kbd> Cam
                 </div>`:"<div></div>"}

          <div class="hud-speed-clean">
            <div id="hud-manual-badge" style="display:none;color:var(--accent-gold);font-family:var(--font-display);font-weight:700;font-size:0.85rem;letter-spacing:0.06em;margin-bottom:2px">MANUAL 0.0s</div>
            <div style="display:flex;align-items:baseline;justify-content:flex-end;gap:10px">
              <div class="speed-italic" id="hud-speed-num">0</div>
              <div style="text-align:right">
                <div style="font-size:0.74rem;color:var(--accent-gold);font-weight:700">★ <span id="hud-score">0</span></div>
                <div class="speed-unit-clean" id="hud-speed-unit">${e.units==="mph"?"MPH":"KM/H"}</div>
              </div>
            </div>
            <div class="speed-seg-track"><div class="speed-seg-fill" id="hud-fork-bar" style="width:0%"></div></div>
          </div>
        </div>
      </div>
      ${i&&!this.engine.paused&&!this.finishModalData?this.buildTouchControlsHtml():""}
      ${r}
    `;const o=d=>this.root.querySelector(d)??void 0;this.hudRefs={timer:o("#hud-timer"),score:o("#hud-score"),cp:o("#hud-cp"),tags:o("#hud-tags"),coins:o("#hud-task-count"),speedNum:o("#hud-speed-num"),speedUnit:o("#hud-speed-unit"),surfaceBadge:o("#hud-surface-badge"),manualBadge:o("#hud-manual-badge"),forkBar:o("#hud-fork-bar"),shockBar:o("#hud-hop-wrap"),hopBar:o("#hud-hop-bar"),attGround:o("#hud-att-ground"),attBike:o("#hud-att-bike"),centerFeed:o("#hud-center-feed"),challengeList:o("#hud-ch-list"),crashOverlay:o("#hud-crash"),crashReason:o("#hud-crash-reason"),camBtn:o("#hud-cam-btn")},(l=this.root.querySelector("#hud-cam-btn"))==null||l.addEventListener("click",()=>{this.engine.cycleCamera();const d=this.engine.profile.settings.cameraMode;this.hudRefs.camBtn&&(this.hudRefs.camBtn.textContent=d==="first_person"?"POV":d==="chase"?"3RD":"ACT")}),(c=this.root.querySelector("#hud-reset-btn"))==null||c.addEventListener("click",()=>{this.engine.respawnAtCheckpoint()}),(h=this.root.querySelector("#hud-pause-btn"))==null||h.addEventListener("click",()=>{this.engine.togglePause(!0)}),(u=this.root.querySelector("#hud-ch-toggle"))==null||u.addEventListener("click",()=>{this.challengesExpanded=!this.challengesExpanded,this.hudRefs.challengeList&&(this.hudRefs.challengeList.style.display=this.challengesExpanded?"block":"none")}),i&&!this.engine.paused&&!this.finishModalData&&this.bindTouchControls(),this.bindPauseAndFinishEvents()}patchRidingHud(){const t=this.engine.physics.state,e=this.engine.runStats,n=this.engine.profile.settings,i=mi(this.engine.currentZoneId),r=Math.floor(e.elapsedTime/60),a=e.elapsedTime%60,o=r<10?`0${r}`:`${r}`,l=a<10?`0${a.toFixed(2)}`:a.toFixed(2);this.hudRefs.timer&&(this.hudRefs.timer.textContent=`${o}:${l}`),this.hudRefs.score&&(this.hudRefs.score.textContent=Math.round(e.score).toLocaleString()),this.hudRefs.cp&&(this.hudRefs.cp.textContent=`CP ${e.currentCheckpoint}/${e.totalCheckpoints}`);const c=i.challenges.filter(d=>this.engine.profile.completedChallenges[d.id]).length;if(this.hudRefs.coins&&(this.hudRefs.coins.textContent=`${c}/${i.challenges.length}`),this.hudRefs.tags){const d=Object.keys(this.engine.profile.collectedTags).filter(p=>this.engine.profile.collectedTags[p]).length;this.hudRefs.tags.textContent=`${d}/${i.cargoTagCount}`}const h=Math.abs(t.speed)*3.6,u=n.units==="mph"?h*.621371:h;if(this.hudRefs.speedNum&&(this.hudRefs.speedNum.textContent=String(Math.round(u))),this.hudRefs.forkBar&&(this.hudRefs.forkBar.style.width=`${Math.min(100,Math.round(h/75*100))}%`),this.hudRefs.surfaceBadge){const d=Tm[t.surface];this.hudRefs.surfaceBadge.textContent=t.grounded?t.surface.toUpperCase():"AIRBORNE",this.hudRefs.surfaceBadge.style.background=t.grounded?d.bg:"#0369a1",this.hudRefs.surfaceBadge.style.color=t.grounded?d.fg:"#e0f2fe"}if(this.hudRefs.manualBadge&&(t.manualActive&&t.manualTime>.15?(this.hudRefs.manualBadge.style.display="block",this.hudRefs.manualBadge.style.color="#facc15",this.hudRefs.manualBadge.textContent=`MANUAL ${t.manualTime.toFixed(1)}s`):t.stoppieActive&&t.stoppieTime>.15?(this.hudRefs.manualBadge.style.display="block",this.hudRefs.manualBadge.style.color="#38bdf8",this.hudRefs.manualBadge.textContent=`STOPPIE ${t.stoppieTime.toFixed(1)}s`):this.hudRefs.manualBadge.style.display="none"),this.hudRefs.shockBar&&this.hudRefs.hopBar&&(t.hopCharge>.05?(this.hudRefs.shockBar.style.display="inline-flex",this.hudRefs.hopBar.style.width=`${Math.round(t.hopCharge*100)}%`):this.hudRefs.shockBar.style.display="none"),this.hudRefs.attGround&&(this.hudRefs.attGround.style.transform=`rotate(${-t.groundPitch*180/Math.PI}deg)`),this.hudRefs.attBike&&(this.hudRefs.attBike.style.transform=`rotate(${-t.pitch*180/Math.PI}deg)`),this.hudRefs.centerFeed){const d=[];e.comboCount>0&&e.comboScore>0&&d.push(`<div class="combo-banner">${e.comboTricks.slice(-3).join(" + ")} · ${e.comboScore} ×${e.comboCount}</div>`);for(const p of this.engine.trickPopups)d.push(`<div class="trick-popup" style="color:${p.color}">${p.text}${p.points>0?` +${p.points}`:""}</div>`);for(const p of this.engine.toasts)d.push(`<div class="toast-banner" style="border-color:${p.accent}">
             <div class="toast-title" style="color:${p.accent}">${p.title}</div>
             <div class="toast-sub">${p.subtitle}</div>
           </div>`);this.hudRefs.centerFeed.innerHTML=d.join("")}if(this.hudRefs.challengeList&&this.challengesExpanded){const d=this.engine.profile.completedChallenges,p=[...i.challenges].sort((g,x)=>+!!d[g.id]-+!!d[x.id]);this.hudRefs.challengeList.innerHTML=p.slice(0,7).map(g=>`
          <div class="challenge-row ${d[g.id]?"done":""}" title="${g.description}">
            <span>${d[g.id]?"☑":"☐"} ${g.title}</span>
          </div>
        `).join("")}this.hudRefs.crashOverlay&&this.hudRefs.crashReason&&(this.hudRefs.crashOverlay.style.display=t.crashed?"block":"none",t.crashed&&(this.hudRefs.crashReason.textContent=t.crashReason))}buildPauseModalHtml(){return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(420px,92vw)">
          <div class="panel-header">
            <h2>PAUSED</h2>
            <button class="btn lime" data-pause-act="resume">RESUME</button>
          </div>
          <div class="panel-body" style="display:flex;flex-direction:column;gap:10px">
            <button class="btn accent" data-pause-act="restart">RESTART RUN</button>
            <button class="btn" data-pause-act="checkpoint">RESPAWN AT CHECKPOINT</button>
            <button class="btn" data-pause-act="camera">SWITCH CAMERA VIEW</button>
            <button class="btn" data-pause-act="save-replay">SAVE REPLAY CLIP</button>
            <button class="btn" data-pause-act="settings">SETTINGS</button>
            <button class="btn danger" data-pause-act="menu">EXIT TO MAIN MENU</button>
          </div>
        </div>
      </div>
    `}buildFinishModalHtml(){const t=this.finishModalData,e=t.stats,n=mi(e.zoneId),i=n.challenges.filter(o=>this.engine.profile.completedChallenges[o.id]).length,r=Hn.findIndex(o=>o.id===e.zoneId),a=Hn[(r+1)%Hn.length];return`
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(580px,94vw)">
          <div class="panel-header">
            <div>
              <h2>${n.name} COMPLETE!</h2>
              ${t.newRecord?'<div style="color:var(--accent-lime);font-size:0.8rem;font-weight:700">★ NEW PERSONAL BEST TIME!</div>':""}
            </div>
            <div class="coin-pill"><span class="coin-dot"></span> +${t.coinsEarned} CR</div>
          </div>
          <div class="panel-body">
            <div class="controls-grid" style="grid-template-columns:repeat(2,1fr);margin-bottom:16px">
              <div class="control-card">
                <div style="font-size:0.75rem;color:var(--text-dim)">FINISH TIME</div>
                <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;color:var(--accent-lime)">${Mr(e.finishTime)}</div>
              </div>
              <div class="control-card">
                <div style="font-size:0.75rem;color:var(--text-dim)">FLOW &amp; TRICK SCORE</div>
                <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;color:var(--accent)">${Math.round(e.score).toLocaleString()}</div>
              </div>
              <div class="control-card">
                <div class="bind-row"><span>Top Speed</span><strong>${Math.round(e.maxSpeedKmh)} km/h</strong></div>
                <div class="bind-row"><span>Biggest Air</span><strong>${e.maxAirHeight.toFixed(1)} m</strong></div>
                <div class="bind-row"><span>Clean Landings</span><strong>${e.cleanLandings}</strong></div>
              </div>
              <div class="control-card">
                <div class="bind-row"><span>Crashes</span><strong>${e.crashes}</strong></div>
                <div class="bind-row"><span>Zone Tasks</span><strong>${i}/${n.challenges.length}</strong></div>
                <div class="bind-row"><span>Replay Saved</span><strong style="color:var(--accent-sky)">AUTO-SAVED</strong></div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end">
              ${this.engine.replays[0]?'<button class="btn" data-finish-act="watch-replay">WATCH REPLAY</button>':""}
              <button class="btn" data-finish-act="retry">RIDE AGAIN</button>
              <button class="btn accent" data-finish-act="next" data-next-zone="${a.id}">NEXT: ${a.name}</button>
              <button class="btn lime" data-finish-act="menu">MAIN MENU</button>
            </div>
          </div>
        </div>
      </div>
    `}bindPauseAndFinishEvents(){var t;this.root.querySelectorAll("[data-pause-act]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.pauseAct;n==="resume"&&this.engine.togglePause(!1),n==="restart"&&this.engine.restartRun(),n==="checkpoint"&&(this.engine.togglePause(!1),this.engine.respawnAtCheckpoint()),n==="camera"&&(this.engine.cycleCamera(),this.render()),n==="save-replay"&&(this.engine.saveCurrentRunReplay(),this.engine.togglePause(!1)),n==="settings"&&(this.showPauseSettings=!0,this.render()),n==="menu"&&this.engine.openMenu()})}),(t=this.root.querySelector('[data-action="close-pause-settings"]'))==null||t.addEventListener("click",()=>{this.showPauseSettings=!1,this.render()}),this.bindSettingsControls(),this.root.querySelectorAll("[data-finish-act]").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.finishAct;if(n==="retry"&&this.engine.restartRun(),n==="menu"&&this.engine.openMenu(),n==="watch-replay"&&this.engine.replays[0]&&this.engine.startReplay(this.engine.replays[0]),n==="next"){const i=e.dataset.nextZone;this.engine.startZone(i)}})})}buildTouchControlsHtml(){return`
      <div class="touch-layer">
        <div class="touch-joystick-zone" id="touch-joy">
          <div class="touch-joystick-knob" id="touch-joy-knob"></div>
        </div>
        <div class="touch-actions-pad">
          <button class="touch-btn" data-tbtn="pitchBack">LEAN<br/>BACK</button>
          <button class="touch-btn" data-tbtn="barspin">BAR<br/>SPIN</button>
          <button class="touch-btn" data-tbtn="hop">BUNNY<br/>HOP</button>
          <button class="touch-btn" data-tbtn="brake">BRAKE</button>
          <button class="touch-btn" data-tbtn="pump">PUMP</button>
          <button class="touch-btn" data-tbtn="pedal" style="border-color:var(--accent-lime)">PEDAL</button>
        </div>
      </div>
    `}bindTouchControls(){const t=this.root.querySelector("#touch-joy"),e=this.root.querySelector("#touch-joy-knob"),n=this.engine.input.touch;if(t&&e){let i=null;const r=(o,l)=>{const c=t.getBoundingClientRect(),h=c.left+c.width*.5,u=c.top+c.height*.5,d=c.width*.36;let p=o-h,g=l-u;const x=Math.hypot(p,g);x>d&&(p=p/x*d,g=g/x*d),e.style.transform=`translate(${p}px, ${g}px)`,n.steer=-(p/d)};t.addEventListener("pointerdown",o=>{i=o.pointerId,t.setPointerCapture(o.pointerId),r(o.clientX,o.clientY)}),t.addEventListener("pointermove",o=>{i===o.pointerId&&r(o.clientX,o.clientY)});const a=o=>{i===o.pointerId&&(i=null,e.style.transform="translate(0,0)",n.steer=0)};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}this.root.querySelectorAll("[data-tbtn]").forEach(i=>{const r=i.dataset.tbtn,a=o=>{i.classList.toggle("active",o),r==="pedal"&&(n.throttle=o?1:0),r==="brake"&&(n.brake=o?1:0),r==="hop"&&(n.hopHeld=o),r==="pump"&&(n.pumpHeld=o),r==="pitchBack"&&(n.pitch=o?1:0),r==="barspin"&&o&&(n.barspinQueued=!0)};i.addEventListener("pointerdown",o=>{o.preventDefault(),a(!0)}),i.addEventListener("pointerup",()=>a(!1)),i.addEventListener("pointercancel",()=>a(!1)),i.addEventListener("pointerleave",()=>a(!1))})}renderReplayViewer(){var r,a,o;const t=this.engine.activeReplay;if(!t){this.engine.openMenu();return}const e=t.frames.length>0?t.frames[t.frames.length-1].t:1,n=[{id:"chase",label:"CHASE"},{id:"orbit",label:"ORBIT"},{id:"helmet",label:"HELMET POV"},{id:"trackside",label:"TRACKSIDE"}],i=[.25,.5,1,2];this.root.innerHTML=`
      <div class="hud-root">
        <div class="hud-top">
          <div class="hud-card pointer-auto">
            <div class="hud-zone-label">REPLAY VIEWER</div>
            <div style="font-family:var(--font-display);font-weight:700;font-size:1.15rem">${t.zoneName} · ${Tn(t.bikeId).name}</div>
          </div>
          <button class="btn danger pointer-auto" id="rep-exit">EXIT REPLAY</button>
        </div>
      </div>

      <div class="replay-bar pointer-auto">
        <div class="replay-row">
          <input id="rep-scrub" type="range" min="0" max="${e}" step="0.05" value="${this.engine.replayTime}" style="flex:1" />
          <span id="rep-time" style="font-family:var(--font-display);min-width:95px;text-align:right">0.0s / ${e.toFixed(1)}s</span>
        </div>
        <div class="replay-row">
          <div style="display:flex;gap:6px">
            <button class="btn accent" id="rep-play">${this.engine.replayPlaying?"PAUSE":"PLAY"}</button>
            ${i.map(l=>`<button class="pill-btn ${this.engine.replaySpeed===l?"active":""}" data-rep-spd="${l}">${l}x</button>`).join("")}
          </div>
          <div style="display:flex;gap:6px">
            ${n.map(l=>`<button class="pill-btn ${this.engine.replayCam===l.id?"active":""}" data-rep-cam="${l.id}">${l.label}</button>`).join("")}
          </div>
        </div>
      </div>
    `,this.replayRefs={timeLabel:this.root.querySelector("#rep-time")??void 0,scrubber:this.root.querySelector("#rep-scrub")??void 0,playBtn:this.root.querySelector("#rep-play")??void 0},(r=this.root.querySelector("#rep-exit"))==null||r.addEventListener("click",()=>{this.engine.openMenu(),this.menuSub="replays",this.render()}),(a=this.replayRefs.playBtn)==null||a.addEventListener("click",()=>{this.engine.replayPlaying=!this.engine.replayPlaying,this.replayRefs.playBtn&&(this.replayRefs.playBtn.textContent=this.engine.replayPlaying?"PAUSE":"PLAY")}),(o=this.replayRefs.scrubber)==null||o.addEventListener("input",()=>{this.replayRefs.scrubber&&(this.engine.replayTime=parseFloat(this.replayRefs.scrubber.value))}),this.root.querySelectorAll("[data-rep-spd]").forEach(l=>{l.addEventListener("click",()=>{this.engine.replaySpeed=parseFloat(l.dataset.repSpd),this.renderReplayViewer()})}),this.root.querySelectorAll("[data-rep-cam]").forEach(l=>{l.addEventListener("click",()=>{this.engine.setReplayCam(l.dataset.repCam),this.renderReplayViewer()})})}patchReplayHud(){const t=this.engine.activeReplay;if(!t||t.frames.length===0)return;const e=t.frames[t.frames.length-1].t;this.replayRefs.scrubber&&(this.replayRefs.scrubber.value=String(this.engine.replayTime)),this.replayRefs.timeLabel&&(this.replayRefs.timeLabel.textContent=`${this.engine.replayTime.toFixed(1)}s / ${e.toFixed(1)}s`)}}const Am=document.getElementById("game-canvas"),Cm=document.getElementById("visor-mud-layer"),Rm=document.getElementById("ui-layer");let ve=null;const Cl=new bm(Am,Cm,{onHudUpdate:()=>ve==null?void 0:ve.updateHud(),onModeChange:s=>ve==null?void 0:ve.onModeChange(s),onRunFinished:(s,t,e)=>ve==null?void 0:ve.onRunFinished(s,t,e),onPauseChange:s=>ve==null?void 0:ve.onPauseChange(s),onProfileChange:()=>ve==null?void 0:ve.onDataChanged(),onReplaysChange:()=>ve==null?void 0:ve.onDataChanged()});ve=new Em(Rm,Cl);window.loamline=Cl;
