var g,aa=aa||{},k=this,l=function(a){return void
0!==a},ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a
instanceof Array)return"array";if(a instanceof Object)return b;var
c=Object.prototype.toString.call(a);if("[object
Window]"==c)return"object";if("[object Array]"==c||"number"==typeof
a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof
a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object
Function]"==c||"undefined"!=typeof a.call&&"undefined"!= typeof
a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else
return"null";else if("function"==b&&"undefined"==typeof
a.call)return"object";return
b},n=function(a){return"array"==ca(a)},da=function(a){var
b=ca(a);return"array"==b||"object"==b&&"number"==typeof
a.length},p=function(a){return"string"==typeof
a},ea=function(a){return"function"==ca(a)},fa=function(a){var b=typeof
a;return"object"==b&&null!=a||"function"==b},ga=function(a,b,c){return
a.call.apply(a.bind,arguments)}, ha=function(a,b,c){if(!a)throw
Error();if(2<arguments.length){var
d=Array.prototype.slice.call(arguments,2);return function(){var
c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return
a.apply(b,c)}}return function(){return
a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native
code")?ga:ha;return q.apply(null,arguments)},ia=function(a,b){var
c=Array.prototype.slice.call(arguments,1);return function(){var b=
c.slice();b.push.apply(b,arguments);return
a.apply(this,b)}},r=Date.now||function(){return+new
Date},s=function(a,b){function
c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new
c;a.lb=function(a,c,f){return
b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var
c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return
q.apply(null,c)}return q(this,a)};var
t=function(){};t.prototype.Ba=!1;t.prototype.Fa=function(){this.Ba||(this.Ba=!0,this.k())};var
u=function(a,b){var c=ia(ja,b);a.R||(a.R=[]);a.R.push(q(c,void
0))};t.prototype.k=function(){if(this.R)for(;this.R.length;)this.R.shift()()};var
ja=function(a){a&&"function"==typeof a.Fa&&a.Fa()};var ka=function(a,b){for(var
c in a)b.call(void 0,a[c],c,a)},la=function(a){var b=[],c=0,d;for(d in
a)b[c++]=a[d];return b},ma=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return
b},na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable
toLocaleString toString valueOf".split(" "),oa=function(a,b){for(var
c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var
f=0;f<na.length;f++)c=na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var
xa=function(a){if(!pa.test(a))return
a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wa,"&#0;"));return
a},qa=/&/g,ra=/</g,sa=/>/g,ta=/"/g,va=/'/g,wa=/\x00/g,pa=/[\x00&<>"']/,ya=function(a,b){return
a<b?-1:a>b?1:0},za=function(a){var b=Number(a);return
0==b&&/^[\s\xa0]*$/.test(a)? NaN:b};var Aa=function(a){Aa[" "](a);return a};Aa["
"]=ba;var v=Array.prototype,Ba=v.indexOf?function(a,b,c){return
v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return
p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in
a&&a[c]===b)return
c;return-1},Ca=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var
d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in
e&&b.call(c,e[f],f,a)},Ea=function(a){var b;t:{b=Da;for(var
c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,
d[e],e,a)){b=e;break t}b=-1}return
0>b?null:p(a)?a.charAt(b):a[b]},Fa=function(a){return
v.concat.apply(v,arguments)},Ga=function(a){var b=a.length;if(0<b){for(var
c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Ha=function(a,b,c){return
2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};var w;t:{var
Ia=k.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){w=Ja;break t}}w=""}var
x=function(a){return-1!=w.indexOf(a)};var
Ka=x("Opera")||x("OPR"),y=x("Trident")||x("MSIE"),z=x("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(x("Trident")||x("MSIE")),A=-1!=w.toLowerCase().indexOf("webkit"),La=function(){var
a=k.document;return a?a.documentMode:void 0},Ma=function(){var
a="",b;if(Ka&&k.opera)return
a=k.opera.version,ea(a)?a():a;z?b=/rv\:([^\);]+)(\)|;)/:y?b=/\b(?:MSIE|rv)[:
]([^\);]+)(\)|;)/:A&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(w))?a[1]:"");return
y&&(b=La(),b>parseFloat(a))?String(b):a}(),Na={},B=function(a){var b;
if(!(b=Na[a])){b=0;for(var
c=String(Ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var
h=c[f]||"",m=d[f]||"",ua=RegExp("(\\d*)(\\D*)","g"),Yb=RegExp("(\\d*)(\\D*)","g");do{var
R=ua.exec(h)||["","",""],S=Yb.exec(m)||["","",""];if(0==R[0].length&&0==S[0].length)break;b=ya(0==R[1].length?0:parseInt(R[1],10),0==S[1].length?0:parseInt(S[1],10))||ya(0==R[2].length,0==S[2].length)||ya(R[2],S[2])}while(0==
b)}b=Na[a]=0<=b}return
b},Oa=k.document,Pa=Oa&&y?La()||("CSS1Compat"==Oa.compatMode?parseInt(Ma,10):5):void
0;var
Qa=!y||y&&9<=Pa,Ra=y&&!B("9");!A||B("528");z&&B("1.9b")||y&&B("8")||Ka&&B("9.5")||A&&B("528");z&&!B("8")||y&&B("9");var
C=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.I=!1;this.Na=!0};C.prototype.k=function(){};C.prototype.Fa=function(){};C.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Na=!1};var
D=function(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ja=this.state=null;if(a){var
c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var
d=a.relatedTarget;if(d){if(z){var e;t:{try{Aa(d.nodeName);e=!0;break
t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==
c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=A||void
0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=A||void
0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void
0!==a.clientX?a.clientX:a.pageX;this.clientY=void
0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.ja=a;a.defaultPrevented&&this.preventDefault()}};s(D,C);D.prototype.preventDefault=function(){D.K.preventDefault.call(this);var
a=this.ja;if(a.preventDefault)a.preventDefault();else
if(a.returnValue=!1,Ra)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};D.prototype.k=function(){};var
Sa="closure_listenable_"+(1E6*Math.random()|0),Ta=function(a){try{return!(!a||!a[Sa])}catch(b){return!1}},Ua=0;var
Va=function(a,b,c,d,e){this.A=a;this.ha=null;this.src=b;this.type=c;this.Y=!!d;this.ba=e;this.key=++Ua;this.F=this.aa=!1},Wa=function(a){a.F=!0;a.A=null;a.ha=null;a.src=null;a.ba=null};var
E=function(a){this.src=a;this.f={};this.N=0};E.prototype.add=function(a,b,c,d,e){var
f=a.toString();a=this.f[f];a||(a=this.f[f]=[],this.N++);var
h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.aa=!1)):(b=new
Va(b,this.src,f,!!d,e),b.aa=c,a.push(b));return
b};E.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in
this.f))return!1;var
e=this.f[a];b=Xa(e,b,c,d);return-1<b?(Wa(e[b]),v.splice.call(e,b,1),0==e.length&&(delete
this.f[a],this.N--),!0):!1}; var Ya=function(a,b){var c=b.type;if(!(c in
a.f))return!1;var
d=a.f[c],e=Ba(d,b),f;(f=0<=e)&&v.splice.call(d,e,1);f&&(Wa(b),0==a.f[c].length&&(delete
a.f[c],a.N--));return f};E.prototype.Aa=function(a){a=a&&a.toString();var
b=0,c;for(c in this.f)if(!a||c==a){for(var
d=this.f[c],e=0;e<d.length;e++)++b,Wa(d[e]);delete this.f[c];this.N--}return
b};E.prototype.Q=function(a,b,c,d){a=this.f[a.toString()];var
e=-1;a&&(e=Xa(a,b,c,d));return-1<e?a[e]:null}; var Xa=function(a,b,c,d){for(var
e=0;e<a.length;++e){var f=a[e];if(!f.F&&f.A==b&&f.Y==!!c&&f.ba==d)return
e}return-1};var
Za="closure_lm_"+(1E6*Math.random()|0),$a={},ab=0,bb=function(a,b,c,d,e){if(n(b)){for(var
f=0;f<b.length;f++)bb(a,b[f],c,d,e);return
null}c=cb(c);if(Ta(a))a=a.l(b,c,d,e);else{if(!b)throw Error("Invalid event
type");var f=!!d,h=F(a);h||(a[Za]=h=new
E(a));c=h.add(b,c,!1,d,e);c.ha||(d=db(),c.ha=d,d.src=a,d.A=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(eb(b.toString()),d),ab++);a=c}return
a},db=function(){var a=fb,b=Qa?function(c){return
a.call(b.src,b.A,c)}:function(c){c= a.call(b.src,b.A,c);if(!c)return c};return
b},gb=function(a,b,c,d,e){if(n(b))for(var
f=0;f<b.length;f++)gb(a,b[f],c,d,e);else
c=cb(c),Ta(a)?a.Ca(b,c,d,e):a&&(a=F(a))&&(b=a.Q(b,c,!!d,e))&&hb(b)},hb=function(a){if("number"==typeof
a||!a||a.F)return!1;var b=a.src;if(Ta(b))return Ya(b.v,a);var
c=a.type,d=a.ha;b.removeEventListener?b.removeEventListener(c,d,a.Y):b.detachEvent&&b.detachEvent(eb(c),d);ab--;(c=F(b))?(Ya(c,a),0==c.N&&(c.src=null,b[Za]=null)):Wa(a);return!0},eb=function(a){return
a in $a?$a[a]: $a[a]="on"+a},jb=function(a,b,c,d){var
e=1;if(a=F(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var
f=b[a];f&&f.Y==c&&!f.F&&(e&=!1!==ib(f,d))}return
Boolean(e)},ib=function(a,b){var c=a.A,d=a.ba||a.src;a.aa&&hb(a);return
c.call(d,b)},fb=function(a,b){if(a.F)return!0;if(!Qa){var
c;if(!(c=b))t:{c=["window","event"];for(var
d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new
D(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var
f=!1;if(0==e.keyCode)try{e.keyCode= -1;break t}catch(h){f=!0}if(f||void
0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var
f=a.type,m=e.length-1;!c.I&&0<=m;m--)c.currentTarget=e[m],d&=jb(e[m],f,!0,c);for(m=0;!c.I&&m<e.length;m++)c.currentTarget=e[m],d&=jb(e[m],f,!1,c)}return
d}return ib(a,new D(b,this))},F=function(a){a=a[Za];return a instanceof
E?a:null},kb="__closure_events_fn_"+(1E9*Math.random()>>>0),cb=function(a){return
ea(a)?a:a[kb]||(a[kb]=function(b){return a.handleEvent(b)})};var
G=function(a){this.Pa=a;this.c={}};s(G,t);var
lb=[];g=G.prototype;g.l=function(a,b,c,d){n(b)||(b&&(lb[0]=b.toString()),b=lb);for(var
e=0;e<b.length;e++){var
f=bb(a,b[e],c||this.handleEvent,d||!1,this.Pa||this);if(!f)break;this.c[f.key]=f}return
this};g.Ca=function(a,b,c,d,e){if(n(b))for(var
f=0;f<b.length;f++)this.Ca(a,b[f],c,d,e);else
c=c||this.handleEvent,e=e||this.Pa||this,c=cb(c),d=!!d,b=Ta(a)?a.Q(b,c,d,e):a?(a=F(a))?a.Q(b,c,d,e):null:null,b&&(hb(b),delete
this.c[b.key]);return this};
g.Aa=function(){ka(this.c,hb);this.c={}};g.k=function(){G.K.k.call(this);this.Aa()};g.handleEvent=function(){throw
Error("EventHandler.handleEvent not implemented");};var mb="StopIteration"in
k?k.StopIteration:Error("StopIteration"),nb=function(){};nb.prototype.next=function(){throw
mb;};nb.prototype.Ra=function(){return this};var
H=function(a,b){this.m={};this.c=[];this.Z=this.e=0;var
c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of
arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else
if(a){a instanceof H?(c=a.q(),d=a.p()):(c=ma(a),d=la(a));for(var
e=0;e<c.length;e++)this.set(c[e],d[e])}};H.prototype.p=function(){ob(this);for(var
a=[],b=0;b<this.c.length;b++)a.push(this.m[this.c[b]]);return
a};H.prototype.q=function(){ob(this);return this.c.concat()};
H.prototype.L=function(a){return
I(this.m,a)};H.prototype.remove=function(a){return I(this.m,a)?(delete
this.m[a],this.e--,this.Z++,this.c.length>2*this.e&&ob(this),!0):!1};var
ob=function(a){if(a.e!=a.c.length){for(var b=0,c=0;b<a.c.length;){var
d=a.c[b];I(a.m,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.e!=a.c.length){for(var
e={},c=b=0;b<a.c.length;)d=a.c[b],I(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};g=H.prototype;g.get=function(a,b){return
I(this.m,a)?this.m[a]:b};
g.set=function(a,b){I(this.m,a)||(this.e++,this.c.push(a),this.Z++);this.m[a]=b};g.forEach=function(a,b){for(var
c=this.q(),d=0;d<c.length;d++){var
e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.B=function(){return new
H(this)};g.Ra=function(a){ob(this);var
b=0,c=this.c,d=this.m,e=this.Z,f=this,h=new
nb;h.next=function(){for(;;){if(e!=f.Z)throw Error("The map has changed since
the iterator was created");if(b>=c.length)throw mb;var h=c[b++];return
a?h:d[h]}};return h}; var I=function(a,b){return
Object.prototype.hasOwnProperty.call(a,b)};var
pb=function(a){if("function"==typeof a.p)return a.p();if(p(a))return
a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return
b}return la(a)},qb=function(a,b){if("function"==typeof
a.forEach)a.forEach(b,void 0);else if(da(a)||p(a))Ca(a,b,void 0);else{var
c;if("function"==typeof a.q)c=a.q();else if("function"!=typeof
a.p)if(da(a)||p(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else
c=ma(a);else c=void 0;for(var d=pb(a),e=d.length,f=0;f<e;f++)b.call(void
0,d[f],c&&c[f], a)}};var J=function(){this.v=new
E(this);this.jb=this};s(J,t);J.prototype[Sa]=!0;g=J.prototype;g.za=null;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){gb(this,a,b,c,d)};
g.dispatchEvent=function(a){var b,c=this.za;if(c)for(b=[];c;c=c.za)b.push(c);var
c=this.jb,d=a.type||a;if(p(a))a=new C(a,c);else if(a instanceof
C)a.target=a.target||c;else{var e=a;a=new C(d,c);oa(a,e)}var e=!0,f;if(b)for(var
h=b.length-1;!a.I&&0<=h;h--)f=a.currentTarget=b[h],e=rb(f,d,!0,a)&&e;a.I||(f=a.currentTarget=c,e=rb(f,d,!0,a)&&e,a.I||(e=rb(f,d,!1,a)&&e));if(b)for(h=0;!a.I&&h<b.length;h++)f=a.currentTarget=b[h],e=rb(f,d,!1,a)&&e;return
e}; g.k=function(){J.K.k.call(this);this.v&&this.v.Aa(void
0);this.za=null};g.l=function(a,b,c,d){return
this.v.add(String(a),b,!1,c,d)};g.Ca=function(a,b,c,d){return
this.v.remove(String(a),b,c,d)};var
rb=function(a,b,c,d){b=a.v.f[String(b)];if(!b)return!0;b=Ga(b);for(var
e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.F&&h.Y==c){var
m=h.A,ua=h.ba||h.src;h.aa&&Ya(a.v,h);e=!1!==m.call(ua,d)&&e}}return
e&&!1!=d.Na};J.prototype.Q=function(a,b,c,d){return
this.v.Q(String(a),b,c,d)};var
sb=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return
eval("("+a+")")}catch(b){}throw Error("Invalid JSON string:
"+a);},tb=function(a){this.na=a};tb.prototype.ca=function(a){var
b=[];ub(this,a,b);return b.join("")}; var ub=function(a,b,c){switch(typeof
b){case "string":vb(b,c);break;case
"number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case
"boolean":c.push(b);break;case "undefined":c.push("null");break;case
"object":if(null==b){c.push("null");break}if(n(b)){var
d=b.length;c.push("[");for(var
e="",f=0;f<d;f++)c.push(e),e=b[f],ub(a,a.na?a.na.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f
in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof
e&&(c.push(d),vb(f,
c),c.push(":"),ub(a,a.na?a.na.call(b,f,e):e,c),d=","));c.push("}");break;case
"function":break;default:throw Error("Unknown type: "+typeof
b);}},wb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,vb=function(a,b){b.push('"',a.replace(xb,function(a){if(a
in wb)return wb[a];var
b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return
wb[a]= e+b.toString(16)}),'"')};var
yb=function(a,b){J.call(this);this.O=a||1;this.G=b||k;this.xa=q(this.ib,this);this.ya=r()};s(yb,J);g=yb.prototype;g.P=!1;g.i=null;g.setInterval=function(a){this.O=a;this.i&&this.P?(this.stop(),this.start()):this.i&&this.stop()};g.ib=function(){if(this.P){var
a=r()-this.ya;0<a&&a<0.8*this.O?this.i=this.G.setTimeout(this.xa,this.O-a):(this.i&&(this.G.clearTimeout(this.i),this.i=null),this.dispatchEvent("tick"),this.P&&(this.i=this.G.setTimeout(this.xa,this.O),this.ya=r()))}};
g.start=function(){this.P=!0;this.i||(this.i=this.G.setTimeout(this.xa,this.O),this.ya=r())};g.stop=function(){this.P=!1;this.i&&(this.G.clearTimeout(this.i),this.i=null)};g.k=function(){yb.K.k.call(this);this.stop();delete
this.G};var zb=function(a,b,c){if(ea(a))c&&(a=q(a,c));else
if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw
Error("Invalid listener argument");return
2147483647<b?-1:k.setTimeout(a,b||0)};var
Ab=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Cb=function(a){if(Bb){Bb=!1;var
b=k.location;if(b){var
c=b.href;if(c&&(c=(c=Cb(c)[3]||null)&&decodeURIComponent(c))&&c!=b.hostname)throw
Bb=!0,Error();}}return a.match(Ab)},Bb=A;var
Db=function(){};Db.prototype.Sa=null;var Fb=function(a){var
b;(b=a.Sa)||(b={},Eb(a)&&(b[0]=!0,b[1]=!0),b=a.Sa=b);return b};var
Gb,Hb=function(){};s(Hb,Db);var Ib=function(a){return(a=Eb(a))?new
ActiveXObject(a):new
XMLHttpRequest},Eb=function(a){if(!a.Ta&&"undefined"==typeof
XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var
b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var
d=b[c];try{return new ActiveXObject(d),a.Ta=d}catch(e){}}throw Error("Could not
create ActiveXObject. ActiveX might be disabled, or MSXML might not be
installed");}return a.Ta};Gb=new Hb;var
K=function(a){J.call(this);this.headers=new
H;this.W=a||null;this.r=!1;this.U=this.a=null;this.qa="";this.w=this.oa=this.S=this.sa=!1;this.ta=0;this.V=null;this.Ha="";this.ra=this.Ga=!1};s(K,J);var
Jb=/^https?$/i,Kb=["POST","PUT"];
K.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo]
Object is active with another request="+this.qa+";
newUri="+a);b=b?b.toUpperCase():"GET";this.qa=a;this.sa=!1;this.r=!0;this.a=this.W?Ib(this.W):Ib(Gb);this.U=this.W?Fb(this.W):Fb(Gb);this.a.onreadystatechange=q(this.Ia,this);try{this.oa=!0,this.a.open(b,String(a),!0),this.oa=!1}catch(e){Lb(this);return}a=c||"";var
f=this.headers.B();d&&qb(d,function(a,b){f.set(b,a)});d=Ea(f.q());c=k.FormData&&a
instanceof k.FormData;!(0<=
Ba(Kb,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.Ha&&(this.a.responseType=this.Ha);"withCredentials"in
this.a&&(this.a.withCredentials=this.Ga);try{Mb(this),0<this.ta&&((this.ra=Nb(this.a))?(this.a.timeout=this.ta,this.a.ontimeout=q(this.La,this)):this.V=zb(this.La,this.ta,this)),this.S=!0,this.a.send(a),this.S=!1}catch(h){Lb(this)}};
var Nb=function(a){return y&&B(9)&&"number"==typeof
a.timeout&&l(a.ontimeout)},Da=function(a){return"content-type"==a.toLowerCase()};K.prototype.La=function(){"undefined"!=typeof
aa&&this.a&&(this.dispatchEvent("timeout"),this.abort(8))};var
Lb=function(a){a.r=!1;a.a&&(a.w=!0,a.a.abort(),a.w=!1);Ob(a);Pb(a)},Ob=function(a){a.sa||(a.sa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
K.prototype.abort=function(){this.a&&this.r&&(this.r=!1,this.w=!0,this.a.abort(),this.w=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Pb(this))};K.prototype.k=function(){this.a&&(this.r&&(this.r=!1,this.w=!0,this.a.abort(),this.w=!1),Pb(this,!0));K.K.k.call(this)};K.prototype.Ia=function(){this.Ba||(this.oa||this.S||this.w?Qb(this):this.hb())};K.prototype.hb=function(){Qb(this)};
var Qb=function(a){if(a.r&&"undefined"!=typeof
aa&&(!a.U[1]||4!=(a.a?a.a.readyState:0)||2!=Rb(a)))if(a.S&&4==(a.a?a.a.readyState:0))zb(a.Ia,0,a);else
if(a.dispatchEvent("readystatechange"),4==(a.a?a.a.readyState:0)){a.r=!1;try{var
b=Rb(a),c,d;t:switch(b){case 200:case 201:case 202:case 204:case 206:case
304:case 1223:d=!0;break t;default:d=!1}if(!(c=d)){var e;if(e=0===b){var
f=Cb(String(a.qa))[1]||null;if(!f&&self.location)var
h=self.location.protocol,f=h.substr(0,h.length-1);e=!Jb.test(f?f.toLowerCase():
"")}c=e}c?(a.dispatchEvent("complete"),a.dispatchEvent("success")):Ob(a)}finally{Pb(a)}}},Pb=function(a,b){if(a.a){Mb(a);var
c=a.a,d=a.U[0]?ba:null;a.a=null;a.U=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Mb=function(a){a.a&&a.ra&&(a.a.ontimeout=null);"number"==typeof
a.V&&(k.clearTimeout(a.V),a.V=null)},Rb=function(a){try{return
2<(a.a?a.a.readyState:0)?a.a.status:-1}catch(b){return-1}};var
Sb=function(){};var
L=function(){this.d={}};s(L,Sb);L.prototype.get=function(a){return
l(this.d[a])?this.d[a]:null};L.prototype.remove=function(a){delete
this.d[a]};L.prototype.set=function(a,b){this.d[a]=b};var
Tb=function(){this.Xa="drt";this.gb="https://clients5.google.com/pagead/drt/ne";this.Ka=1;this.Ja=1440;this.eb=400;this.fb=6E4;this.Wa=!0;this.Va=!1};var
Ub=function(){};s(Ub,Sb);var
Vb=function(a){this.d=a};s(Vb,Ub);g=Vb.prototype;g.set=function(a,b){try{this.d.setItem(a,b)}catch(c){if(0==this.d.length)throw"Storage
mechanism: Storage disabled";throw"Storage mechanism: Quota
exceeded";}};g.get=function(a){a=this.d.getItem(a);if(!p(a)&&null!==a)throw"Storage
mechanism: Invalid value was encountered";return
a};g.remove=function(a){this.d.removeItem(a)}; g.Ra=function(a){var
b=0,c=this.d,d=new nb;d.next=function(){if(b>=c.length)throw mb;var
d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism:
Invalid value was encountered";return d};return d};g.key=function(a){return
this.d.key(a)};var Wb=function(){var
a=null;try{a=window.localStorage||null}catch(b){}this.d=a};s(Wb,Vb);var
M=function(a){this.ma=a};M.prototype.set=function(a,b){l(b)?this.ma.set(a,(new
tb(void 0)).ca(b)):this.ma.remove(a)};M.prototype.get=function(a){var
b;try{b=this.ma.get(a)}catch(c){return}if(null!==b)try{return
sb(b)}catch(d){throw"Storage: Invalid value was
encountered";}};M.prototype.remove=function(a){this.ma.remove(a)};var
Xb=function(a){return a/1E3/60};var
O=function(a,b){J.call(this);this.j=a;this.Ua=b;this.t=new
G(this);u(this,this.t);var c;c=new Wb;var
d;if(c.d)try{c.d.setItem("__sak","1"),c.d.removeItem("__sak"),d=!0}catch(e){d=!1}else
d=!1;if(d&&(!y||y&&B("9")))this.t.l(window,"storage",this.Ya),c=new M(c);else
if(this.j.Wa)c=new M(new L);else throw Error("localStorage is
unavailable.");this.d=c;this.va="tr-"+this.j.Xa;c=Zb(this);this.J=N(c,"nrt");this.pa=N(c,"nrt-e");this.T=N(c,"nrt-r");this.ua=!0};s(O,J);
var N=function(a,b){if(null==a[b])return-1;var c=za(a[b]);return
isNaN(c)?-1:c};O.prototype.Oa=function(){var
a=6E4*this.j.Ka,b=6E4*this.j.Ja,c=r(),d=this.J,e=-1==d;return
this.ua&&e?c:e?c+a:d<c?c:d>c+b?c+b:d};var Zb=function(a){try{return
a.d.get(a.va)||{}}catch(b){return{}}};O.prototype.Ya=function(a){if(a.ja.key===this.va){var
b,c,d;try{var
e=sb(a.ja.newValue);b=N(e,"nrt");c=N(e,"nrt-e");d=N(e,"nrt-r")}catch(f){d=c=b=-1}a=this.J!=b;this.J=b;this.pa=c;this.T=d;a&&this.dispatchEvent(new
$b)}}; O.prototype.X=function(a,b,c){var
d=Zb(this);d.nrt=a;l(b)&&(d["nrt-e"]=b);l(c)&&(d["nrt-r"]=c);this.d.set(this.va,d);this.J=N(d,"nrt");this.pa=N(d,"nrt-e");this.T=N(d,"nrt-r")};var
$b=function(){C.call(this,"update")};s($b,C);var
P=function(a,b){this.j=a;this.t=new G(this);u(this,this.t);this.o=new
K;u(this,this.o);this.j.Va&&(this.o.Ga=!0);this.t.l(this.o,"success",this.ab).l(this.o,"error",this.$a).l(this.o,"timeout",this.bb);this.C=0;this.D=new
yb;u(this,this.D);this.t.l(this.D,"tick",this.cb);this.s=b;u(this,this.s);this.t.l(this.s,"update",this.Za)};s(P,t);g=P.prototype;g.Za=function(){this.C=0;this.D.stop();this.o.a&&this.o.abort();ac(this)};g.$a=function(){bc(this)};
g.ab=function(){try{var a;var b;var c=this.o;b=c.a?sb(c.a.responseText):void
0;if(null!=b.nrt){var
d=za(b.nrt);isNaN(d)||d<this.j.Ka||d>this.j.Ja||!this.Ma(b)?a=!1:(this.C=0,b=6E4*d,this.s.X(r()+b,r()+b,b),a=!0)}else
a=!1;if(a){ac(this);return}}catch(e){}bc(this)};g.bb=function(){bc(this)};g.Qa=function(a){return
a};g.Ma=function(){return!0}; var
bc=function(a){a.C++;a.s.X(r()+a.s.Ua(a.C));ac(a)},ac=function(a){var
b=r(),c=a.s.Oa(),d;if(0<a.C)d=0;else t:{d=a.s;if(d.ua){var
e=d.J;if(-1==e||e<r()){d=Math.floor(Math.random()*d.j.eb);break
t}}d=Math.floor(Math.random()*d.j.fb)}b=Math.max(c+d-b,0);a.s.ua=!1;a.D.setInterval(b);a.D.start()};P.prototype.cb=function(){var
a=this.Qa(this.j.gb);this.D.stop();this.o.send(a,"GET","",{"X-Requested-With":"XMLHttpRequest"})};P.prototype.start=function(){ac(this)};var
cc=function(){},Q=function(a,b,c){b<a.la?a.n[b+a.ia]=c:a.ka[b]=c};cc.prototype.ca=function(){return
k.JSON&&k.JSON.stringify?k.JSON.stringify(this.n):(new tb(void
0)).ca(this.n)};cc.prototype.toString=function(){return this.n.toString()};var
T=function(a){var
b=a;a=[];b||(b=[]);this.ia=-1;this.n=b;t:{if(this.n.length){var
b=this.n.length-1,c=this.n[b];if(c&&"object"==typeof c&&"number"!=typeof
c.length){this.la=b-this.ia;this.ka=c;break
t}}this.la=Number.MAX_VALUE}if(a)for(b=0;b<a.length;b++)c=a[b],c<this.la?(c+=this.ia,this.n[c]=this.n[c]||[]):this.ka[c]=this.ka[c]||[]};s(T,cc);T.prototype.setVersion=function(a){Q(this,1,a)};T.prototype.Oa=function(){return
2<this.la?this.n[2+this.ia]:this.ka[2]};
T.prototype.X=function(a){Q(this,2,a)};var
dc=!y||y&&9<=Pa;!z&&!y||y&&y&&9<=Pa||z&&B("1.9.1");y&&B("9");var
ec=function(a,b){var c;c=a.className;c=p(c)&&c.match(/\S+/g)||[];for(var
d=Ha(arguments,1),e=c.length+d.length,f=c,h=0;h<d.length;h++)0<=Ba(f,d[h])||f.push(d[h]);a.className=c.join("
");return c.length==e};var
gc=function(a,b){ka(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d
in
fc?a.setAttribute(fc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},ic=function(a,b,c){var
d=arguments,e=document,
f=d[0],h=d[1];if(!dc&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push('
name="',xa(h.name),'"');if(h.type){f.push(' type="',xa(h.type),'"');var
m={};oa(m,h);delete
m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(p(h)?f.className=h:n(h)?ec.apply(null,[f].concat(h)):gc(f,h));2<d.length&&hc(e,f,d);return
f},hc=function(a,b,c){function
d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var
e=2;e<c.length;e++){var
f=c[e];!da(f)||fa(f)&&0<f.nodeType?d(f):Ca(jc(f)?Ga(f):f,d)}},jc=function(a){if(a&&
"number"==typeof a.length){if(fa(a))return"function"==typeof
a.item||"string"==typeof a.item;if(ea(a))return"function"==typeof
a.item}return!1};var U=function(a,b){var c;if(a instanceof
U)this.g=l(b)?b:a.g,kc(this,a.H),c=a.ga,V(this),this.ga=c,c=a.M,V(this),this.M=c,lc(this,a.fa),c=a.ea,V(this),this.ea=c,mc(this,a.u.B()),c=a.da,V(this),this.da=c;else
if(a&&(c=Cb(String(a)))){this.g=!!b;kc(this,c[1]||"",!0);var
d=c[2]||"";V(this);this.ga=d?decodeURIComponent(d):"";d=c[3]||"";V(this);this.M=d?decodeURIComponent(d):"";lc(this,c[4]);d=c[5]||"";V(this);this.ea=d?decodeURIComponent(d):"";mc(this,c[6]||"",!0);c=c[7]||"";V(this);this.da=c?decodeURIComponent(c):
""}else this.g=!!b,this.u=new
W(null,0,this.g)};g=U.prototype;g.H="";g.ga="";g.M="";g.fa=null;g.ea="";g.da="";g.kb=!1;g.g=!1;g.toString=function(){var
a=[],b=this.H;b&&a.push(X(b,nc),":");if(b=this.M){a.push("//");var
c=this.ga;c&&a.push(X(c,nc),"@");a.push(encodeURIComponent(String(b)));b=this.fa;null!=b&&a.push(":",String(b))}if(b=this.ea)this.M&&"/"!=b.charAt(0)&&a.push("/"),a.push(X(b,"/"==b.charAt(0)?oc:pc));(b=this.u.toString())&&a.push("?",b);(b=this.da)&&a.push("#",X(b,qc));return
a.join("")}; g.B=function(){return new U(this)};var
kc=function(a,b,c){V(a);a.H=c?b?decodeURIComponent(b):"":b;a.H&&(a.H=a.H.replace(/:$/,""))},lc=function(a,b){V(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw
Error("Bad port number "+b);a.fa=b}else a.fa=null},mc=function(a,b,c){V(a);b
instanceof W?(a.u=b,a.u.Ea(a.g)):(c||(b=X(b,rc)),a.u=new
W(b,0,a.g))},V=function(a){if(a.kb)throw Error("Tried to modify a read-only
Uri");};U.prototype.Ea=function(a){this.g=a;this.u&&this.u.Ea(a);return this};
var X=function(a,b){return
p(a)?encodeURI(a).replace(b,sc):null},sc=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},nc=/[#\/\?@]/g,pc=/[\#\?:]/g,oc=/[\#\?]/g,rc=/[\#\?@]/g,qc=/#/g,W=function(a,b,c){this.h=a||null;this.g=!!c},Z=function(a){if(!a.b&&(a.b=new
H,a.e=0,a.h))for(var b=a.h.split("&"),c=0;c<b.length;c++){var
d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g,"
"));e=Y(a,e);a.add(e, f?decodeURIComponent(f.replace(/\+/g,"
")):"")}};g=W.prototype;g.b=null;g.e=null;g.add=function(a,b){Z(this);this.h=null;a=Y(this,a);var
c=this.b.get(a);c||this.b.set(a,c=[]);c.push(b);this.e++;return
this};g.remove=function(a){Z(this);a=Y(this,a);return
this.b.L(a)?(this.h=null,this.e-=this.b.get(a).length,this.b.remove(a)):!1};g.L=function(a){Z(this);a=Y(this,a);return
this.b.L(a)}; g.q=function(){Z(this);for(var
a=this.b.p(),b=this.b.q(),c=[],d=0;d<b.length;d++)for(var
e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.p=function(a){Z(this);var
b=[];if(p(a))this.L(a)&&(b=Fa(b,this.b.get(Y(this,a))));else{a=this.b.p();for(var
c=0;c<a.length;c++)b=Fa(b,a[c])}return
b};g.set=function(a,b){Z(this);this.h=null;a=Y(this,a);this.L(a)&&(this.e-=this.b.get(a).length);this.b.set(a,[b]);this.e++;return
this};g.get=function(a,b){var c=a?this.p(a):[];return
0<c.length?String(c[0]):b}; g.toString=function(){if(this.h)return
this.h;if(!this.b)return"";for(var a=[],b=this.b.q(),c=0;c<b.length;c++)for(var
d=b[c],e=encodeURIComponent(String(d)),d=this.p(d),f=0;f<d.length;f++){var
h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return
this.h=a.join("&")};g.B=function(){var a=new
W;a.h=this.h;this.b&&(a.b=this.b.B(),a.e=this.e);return a};var
Y=function(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c};
W.prototype.Ea=function(a){a&&!this.g&&(Z(this),this.h=null,this.b.forEach(function(a,c){var
d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.h=null,this.b.set(Y(this,d),Ga(a)),this.e+=a.length))},this));this.g=a};var
uc=function(){var a=new Tb,b=new
O(a,tc);P.call(this,a,b);this.$=b;u(this,this.$);this.Da=ic("img");this.t.l(this.Da,"load",function(){this.wa=!0}).l(this.Da,"error",function(){this.wa=!1})};s(uc,P);var
vc=function(){(new uc).start()},wc=["gbar","_drt","dn"],$=k;wc[0]in
$||!$.execScript||$.execScript("var "+wc[0]);for(var
xc;wc.length&&(xc=wc.shift());)!wc.length&&l(vc)?$[xc]=vc:$=$[xc]?$[xc]:$[xc]={};
uc.prototype.Qa=function(a){var b=this.$.T,c=this.$.pa,d=new
T;d.setVersion("20140509-01");-1!=b&&d.X(this.$.T/1E3/60);Q(d,3,this.C);-1!=c&&(b=Math.floor(Xb(Math.max(0,r()-c))),Q(d,4,b));l(this.wa)&&Q(d,5,this.wa);a=a
instanceof U?a.B():new U(a,void 0);d=d.ca();V(a);a.u.set("di",d);return
a.toString()};var tc=function(){return
6E4*(Math.floor(121*Math.random())+240)};uc.prototype.Ma=function(a){a=a.pb;null!=a&&(this.Da.src=a);return!0};
