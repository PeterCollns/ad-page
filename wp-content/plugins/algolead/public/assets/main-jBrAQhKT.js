var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},se={exports:{}};(function(j,G){(function(w,h){j.exports=h()})(U,function(){return function(w){var h={};function s(t){if(h[t])return h[t].exports;var a=h[t]={i:t,l:!1,exports:{}};return w[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=w,s.c=h,s.d=function(t,a,l){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:l})},s.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a||4&a&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&a&&typeof t!="string")for(var y in t)s.d(l,y,(function(u){return t[u]}).bind(null,y));return l},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="",s(s.s=0)}([function(w,h,s){var t,a,l=s(1)(),y=s(3),u=s(4),S=s(6),v=function(){var e=new u;return t=e.getResult(),a=new S,this};v.prototype={getSoftwareVersion:function(){return"0.1.11"},getBrowserData:function(){return t},getFingerprint:function(){var e="|",n=t.ua,i=this.getScreenPrint(),o=this.getPlugins(),r=this.getFonts(),C=this.isLocalStorage(),B=this.isSessionStorage(),d=this.getTimeZone(),c=this.getLanguage(),M=this.getSystemLanguage(),L=this.isCookie(),N=this.getCanvasPrint();return y(n+e+i+e+o+e+r+e+C+e+B+e+d+e+c+e+M+e+L+e+N,256)},getCustomFingerprint:function(){for(var e="|",n="",i=0;i<arguments.length;i++)n+=arguments[i]+e;return y(n,256)},getUserAgent:function(){return t.ua},getUserAgentLowerCase:function(){return t.ua.toLowerCase()},getBrowser:function(){return t.browser.name},getBrowserVersion:function(){return t.browser.version},getBrowserMajorVersion:function(){return t.browser.major},isIE:function(){return/IE/i.test(t.browser.name)},isChrome:function(){return/Chrome/i.test(t.browser.name)},isFirefox:function(){return/Firefox/i.test(t.browser.name)},isSafari:function(){return/Safari/i.test(t.browser.name)},isMobileSafari:function(){return/Mobile\sSafari/i.test(t.browser.name)},isOpera:function(){return/Opera/i.test(t.browser.name)},getEngine:function(){return t.engine.name},getEngineVersion:function(){return t.engine.version},getOS:function(){return t.os.name},getOSVersion:function(){return t.os.version},isWindows:function(){return/Windows/i.test(t.os.name)},isMac:function(){return/Mac/i.test(t.os.name)},isLinux:function(){return/Linux/i.test(t.os.name)},isUbuntu:function(){return/Ubuntu/i.test(t.os.name)},isSolaris:function(){return/Solaris/i.test(t.os.name)},getDevice:function(){return t.device.model},getDeviceType:function(){return t.device.type},getDeviceVendor:function(){return t.device.vendor},getCPU:function(){return t.cpu.architecture},isMobile:function(){var e=t.ua||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},isMobileMajor:function(){return this.isMobileAndroid()||this.isMobileBlackBerry()||this.isMobileIOS()||this.isMobileOpera()||this.isMobileWindows()},isMobileAndroid:function(){return!!t.ua.match(/Android/i)},isMobileOpera:function(){return!!t.ua.match(/Opera Mini/i)},isMobileWindows:function(){return!!t.ua.match(/IEMobile/i)},isMobileBlackBerry:function(){return!!t.ua.match(/BlackBerry/i)},isMobileIOS:function(){return!!t.ua.match(/iPhone|iPad|iPod/i)},isIphone:function(){return!!t.ua.match(/iPhone/i)},isIpad:function(){return!!t.ua.match(/iPad/i)},isIpod:function(){return!!t.ua.match(/iPod/i)},getScreenPrint:function(){return"Current Resolution: "+this.getCurrentResolution()+", Available Resolution: "+this.getAvailableResolution()+", Color Depth: "+this.getColorDepth()+", Device XDPI: "+this.getDeviceXDPI()+", Device YDPI: "+this.getDeviceYDPI()},getColorDepth:function(){return screen.colorDepth},getCurrentResolution:function(){return screen.width+"x"+screen.height},getAvailableResolution:function(){return screen.availWidth+"x"+screen.availHeight},getDeviceXDPI:function(){return screen.deviceXDPI},getDeviceYDPI:function(){return screen.deviceYDPI},getPlugins:function(){for(var e="",n=0;n<navigator.plugins.length;n++)n==navigator.plugins.length-1?e+=navigator.plugins[n].name:e+=navigator.plugins[n].name+", ";return e},isJava:function(){return navigator.javaEnabled()},getJavaVersion:function(){throw new Error("Please use client.java.js or client.js if you need this functionality!")},isFlash:function(){return!!navigator.plugins["Shockwave Flash"]},getFlashVersion:function(){throw new Error("Please use client.flash.js or client.js if you need this functionality!")},isSilverlight:function(){return!!navigator.plugins["Silverlight Plug-In"]},getSilverlightVersion:function(){return this.isSilverlight()?navigator.plugins["Silverlight Plug-In"].description:""},isMimeTypes:function(){return!(!navigator.mimeTypes||!navigator.mimeTypes.length)},getMimeTypes:function(){var e="";if(navigator.mimeTypes)for(var n=0;n<navigator.mimeTypes.length;n++)n==navigator.mimeTypes.length-1?e+=navigator.mimeTypes[n].description:e+=navigator.mimeTypes[n].description+", ";return e},isFont:function(e){return a.detect(e)},getFonts:function(){for(var e=["Abadi MT Condensed Light","Adobe Fangsong Std","Adobe Hebrew","Adobe Ming Std","Agency FB","Aharoni","Andalus","Angsana New","AngsanaUPC","Aparajita","Arab","Arabic Transparent","Arabic Typesetting","Arial Baltic","Arial Black","Arial CE","Arial CYR","Arial Greek","Arial TUR","Arial","Batang","BatangChe","Bauhaus 93","Bell MT","Bitstream Vera Serif","Bodoni MT","Bookman Old Style","Braggadocio","Broadway","Browallia New","BrowalliaUPC","Calibri Light","Calibri","Californian FB","Cambria Math","Cambria","Candara","Castellar","Casual","Centaur","Century Gothic","Chalkduster","Colonna MT","Comic Sans MS","Consolas","Constantia","Copperplate Gothic Light","Corbel","Cordia New","CordiaUPC","Courier New Baltic","Courier New CE","Courier New CYR","Courier New Greek","Courier New TUR","Courier New","DFKai-SB","DaunPenh","David","DejaVu LGC Sans Mono","Desdemona","DilleniaUPC","DokChampa","Dotum","DotumChe","Ebrima","Engravers MT","Eras Bold ITC","Estrangelo Edessa","EucrosiaUPC","Euphemia","Eurostile","FangSong","Forte","FrankRuehl","Franklin Gothic Heavy","Franklin Gothic Medium","FreesiaUPC","French Script MT","Gabriola","Gautami","Georgia","Gigi","Gisha","Goudy Old Style","Gulim","GulimChe","GungSeo","Gungsuh","GungsuhChe","Haettenschweiler","Harrington","Hei S","HeiT","Heisei Kaku Gothic","Hiragino Sans GB","Impact","Informal Roman","IrisUPC","Iskoola Pota","JasmineUPC","KacstOne","KaiTi","Kalinga","Kartika","Khmer UI","Kino MT","KodchiangUPC","Kokila","Kozuka Gothic Pr6N","Lao UI","Latha","Leelawadee","Levenim MT","LilyUPC","Lohit Gujarati","Loma","Lucida Bright","Lucida Console","Lucida Fax","Lucida Sans Unicode","MS Gothic","MS Mincho","MS PGothic","MS PMincho","MS Reference Sans Serif","MS UI Gothic","MV Boli","Magneto","Malgun Gothic","Mangal","Marlett","Matura MT Script Capitals","Meiryo UI","Meiryo","Menlo","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU-ExtB","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","Miriam Fixed","Miriam","Mongolian Baiti","MoolBoran","NSimSun","Narkisim","News Gothic MT","Niagara Solid","Nyala","PMingLiU","PMingLiU-ExtB","Palace Script MT","Palatino Linotype","Papyrus","Perpetua","Plantagenet Cherokee","Playbill","Prelude Bold","Prelude Condensed Bold","Prelude Condensed Medium","Prelude Medium","PreludeCompressedWGL Black","PreludeCompressedWGL Bold","PreludeCompressedWGL Light","PreludeCompressedWGL Medium","PreludeCondensedWGL Black","PreludeCondensedWGL Bold","PreludeCondensedWGL Light","PreludeCondensedWGL Medium","PreludeWGL Black","PreludeWGL Bold","PreludeWGL Light","PreludeWGL Medium","Raavi","Rachana","Rockwell","Rod","Sakkal Majalla","Sawasdee","Script MT Bold","Segoe Print","Segoe Script","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Segoe UI","Shonar Bangla","Showcard Gothic","Shruti","SimHei","SimSun","SimSun-ExtB","Simplified Arabic Fixed","Simplified Arabic","Snap ITC","Sylfaen","Symbol","Tahoma","Times New Roman Baltic","Times New Roman CE","Times New Roman CYR","Times New Roman Greek","Times New Roman TUR","Times New Roman","TlwgMono","Traditional Arabic","Trebuchet MS","Tunga","Tw Cen MT Condensed Extra Bold","Ubuntu","Umpush","Univers","Utopia","Utsaah","Vani","Verdana","Vijaya","Vladimir Script","Vrinda","Webdings","Wide Latin","Wingdings"],n="",i=0;i<e.length;i++)a.detect(e[i])&&(n+=i==e.length-1?e[i]:e[i]+", ");return n},isLocalStorage:function(){try{return!!l.localStorage}catch{return!0}},isSessionStorage:function(){try{return!!l.sessionStorage}catch{return!0}},isCookie:function(){return navigator.cookieEnabled},getTimeZone:function(){var e,n;return e=new Date,(n=String(-e.getTimezoneOffset()/60))<0?"-"+("0"+(n*=-1)).slice(-2):"+"+("0"+n).slice(-2)},getLanguage:function(){return navigator.language},getSystemLanguage:function(){return navigator.systemLanguage||window.navigator.language},isCanvas:function(){var e=document.createElement("canvas");try{return!(!e.getContext||!e.getContext("2d"))}catch{return!1}},getCanvasPrint:function(){var e,n=document.createElement("canvas");try{e=n.getContext("2d")}catch{return""}var i="ClientJS,org <canvas> 1.0";return e.textBaseline="top",e.font="14px 'Arial'",e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText(i,2,15),e.fillStyle="rgba(102, 204, 0, 0.7)",e.fillText(i,4,17),n.toDataURL()}},h.ClientJS=v},function(w,h,s){var t=s(2);w.exports=function(){return typeof U=="object"&&U&&U.Math===Math&&U.Array===Array?U:t}},function(w,h,s){typeof self<"u"?w.exports=self:typeof window<"u"?w.exports=window:w.exports=Function("return this")()},function(w,h,s){w.exports=function(t,a){var l,y,u,S,v,e,n,i;for(l=3&t.length,y=t.length-l,u=a,v=3432918353,e=461845907,i=0;i<y;)n=255&t.charCodeAt(i)|(255&t.charCodeAt(++i))<<8|(255&t.charCodeAt(++i))<<16|(255&t.charCodeAt(++i))<<24,++i,u=27492+(65535&(S=5*(65535&(u=(u^=n=(65535&(n=(n=(65535&n)*v+(((n>>>16)*v&65535)<<16)&4294967295)<<15|n>>>17))*e+(((n>>>16)*e&65535)<<16)&4294967295)<<13|u>>>19))+((5*(u>>>16)&65535)<<16)&4294967295))+((58964+(S>>>16)&65535)<<16);switch(n=0,l){case 3:n^=(255&t.charCodeAt(i+2))<<16;case 2:n^=(255&t.charCodeAt(i+1))<<8;case 1:u^=n=(65535&(n=(n=(65535&(n^=255&t.charCodeAt(i)))*v+(((n>>>16)*v&65535)<<16)&4294967295)<<15|n>>>17))*e+(((n>>>16)*e&65535)<<16)&4294967295}return u^=t.length,u=2246822507*(65535&(u^=u>>>16))+((2246822507*(u>>>16)&65535)<<16)&4294967295,u=3266489909*(65535&(u^=u>>>13))+((3266489909*(u>>>16)&65535)<<16)&4294967295,(u^=u>>>16)>>>0}},function(w,h,s){var t;(function(a,l){var y="function",u="undefined",S="object",v="string",e="model",n="name",i="type",o="vendor",r="version",C="architecture",B="console",d="mobile",c="tablet",M="smarttv",L="wearable",N="embedded",O="Amazon",Y="Apple",X="ASUS",Z="BlackBerry",le="Firefox",I="Google",$="Huawei",z="LG",q="Microsoft",Q="Motorola",ue="Opera",W="Samsung",V="Sony",ee="Xiaomi",H="Zebra",ie="Facebook",D=function(g){var f={};for(var p in g)f[g[p].toUpperCase()]=g[p];return f},ne=function(g,f){return typeof g===v&&_(f).indexOf(_(g))!==-1},_=function(g){return g.toLowerCase()},K=function(g,f){if(typeof g===v)return g=g.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof f===u?g:g.substring(0,255)},E=function(g,f){for(var p,T,b,m,P,x,F=0;F<f.length&&!P;){var re=f[F],ae=f[F+1];for(p=T=0;p<re.length&&!P;)if(P=re[p++].exec(g))for(b=0;b<ae.length;b++)x=P[++T],typeof(m=ae[b])===S&&m.length>0?m.length==2?typeof m[1]==y?this[m[0]]=m[1].call(this,x):this[m[0]]=m[1]:m.length==3?typeof m[1]!==y||m[1].exec&&m[1].test?this[m[0]]=x?x.replace(m[1],m[2]):l:this[m[0]]=x?m[1].call(this,x,m[2]):l:m.length==4&&(this[m[0]]=x?m[3].call(this,x.replace(m[1],m[2])):l):this[m]=x||l;F+=2}},J=function(g,f){for(var p in f)if(typeof f[p]===S&&f[p].length>0){for(var T=0;T<f[p].length;T++)if(ne(f[p][T],g))return p==="?"?l:p}else if(ne(f[p],g))return p==="?"?l:p;return g},te={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},oe={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[n,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[n,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[n,r],[/opios[\/ ]+([\w\.]+)/i],[r,[n,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[r,[n,ue]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[n,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[n,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[r,[n,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[n,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[n,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[n,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[n,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[n,/(.+)/,"$1 Secure Browser"],r],[/\bfocus\/([\w\.]+)/i],[r,[n,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[r,[n,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[n,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[n,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[n,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[n,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[r,[n,le]],[/\bqihu|(qi?ho?o?|360)browser/i],[[n,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[n,/(.+)/,"$1 Browser"],r],[/(comodo_dragon)\/([\w\.]+)/i],[[n,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[n,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[n],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[n,ie],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[n,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[n,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[n,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[n,"Chrome WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[n,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[n,r],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[r,[n,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[r,n],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[n,[r,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[n,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[n,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[n,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[n,r]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[C,"amd64"]],[/(ia32(?=;))/i],[[C,_]],[/((?:i[346]|x)86)[;\)]/i],[[C,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/windows (ce|mobile); ppc;/i],[[C,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[C,/ower/,"",_]],[/(sun4\w)[;\)]/i],[[C,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[C,_]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[e,[o,W],[i,c]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[e,[o,W],[i,d]],[/\((ip(?:hone|od)[\w ]*);/i],[e,[o,Y],[i,d]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[e,[o,Y],[i,c]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[e,[o,$],[i,c]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[e,[o,$],[i,d]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[e,/_/g," "],[o,ee],[i,d]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[e,/_/g," "],[o,ee],[i,c]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[e,[o,"OPPO"],[i,d]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[e,[o,"Vivo"],[i,d]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[e,[o,"Realme"],[i,d]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[e,[o,Q],[i,d]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[e,[o,Q],[i,c]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[e,[o,z],[i,c]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[e,[o,z],[i,d]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[e,[o,"Lenovo"],[i,c]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[e,/_/g," "],[o,"Nokia"],[i,d]],[/(pixel c)\b/i],[e,[o,I],[i,c]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[e,[o,I],[i,d]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[e,[o,V],[i,d]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[e,"Xperia Tablet"],[o,V],[i,c]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[e,[o,"OnePlus"],[i,d]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[e,[o,O],[i,c]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[e,/(.+)/g,"Fire Phone $1"],[o,O],[i,d]],[/(playbook);[-\w\),; ]+(rim)/i],[e,o,[i,c]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[e,[o,Z],[i,d]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[e,[o,X],[i,c]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[e,[o,X],[i,d]],[/(nexus 9)/i],[e,[o,"HTC"],[i,c]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[o,[e,/_/g," "],[i,d]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[e,[o,"Acer"],[i,c]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[e,[o,"Meizu"],[i,d]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[e,[o,"Sharp"],[i,d]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[o,e,[i,d]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[o,e,[i,c]],[/(surface duo)/i],[e,[o,q],[i,c]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[e,[o,"Fairphone"],[i,d]],[/(u304aa)/i],[e,[o,"AT&T"],[i,d]],[/\bsie-(\w*)/i],[e,[o,"Siemens"],[i,d]],[/\b(rct\w+) b/i],[e,[o,"RCA"],[i,c]],[/\b(venue[\d ]{2,7}) b/i],[e,[o,"Dell"],[i,c]],[/\b(q(?:mv|ta)\w+) b/i],[e,[o,"Verizon"],[i,c]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[e,[o,"Barnes & Noble"],[i,c]],[/\b(tm\d{3}\w+) b/i],[e,[o,"NuVision"],[i,c]],[/\b(k88) b/i],[e,[o,"ZTE"],[i,c]],[/\b(nx\d{3}j) b/i],[e,[o,"ZTE"],[i,d]],[/\b(gen\d{3}) b.+49h/i],[e,[o,"Swiss"],[i,d]],[/\b(zur\d{3}) b/i],[e,[o,"Swiss"],[i,c]],[/\b((zeki)?tb.*\b) b/i],[e,[o,"Zeki"],[i,c]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[o,"Dragon Touch"],e,[i,c]],[/\b(ns-?\w{0,9}) b/i],[e,[o,"Insignia"],[i,c]],[/\b((nxa|next)-?\w{0,9}) b/i],[e,[o,"NextBook"],[i,c]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[o,"Voice"],e,[i,d]],[/\b(lvtel\-)?(v1[12]) b/i],[[o,"LvTel"],e,[i,d]],[/\b(ph-1) /i],[e,[o,"Essential"],[i,d]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[e,[o,"Envizen"],[i,c]],[/\b(trio[-\w\. ]+) b/i],[e,[o,"MachSpeed"],[i,c]],[/\btu_(1491) b/i],[e,[o,"Rotor"],[i,c]],[/(shield[\w ]+) b/i],[e,[o,"Nvidia"],[i,c]],[/(sprint) (\w+)/i],[o,e,[i,d]],[/(kin\.[onetw]{3})/i],[[e,/\./g," "],[o,q],[i,d]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[e,[o,H],[i,c]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[e,[o,H],[i,d]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[o,e,[i,B]],[/droid.+; (shield) bui/i],[e,[o,"Nvidia"],[i,B]],[/(playstation [345portablevi]+)/i],[e,[o,V],[i,B]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[e,[o,q],[i,B]],[/smart-tv.+(samsung)/i],[o,[i,M]],[/hbbtv.+maple;(\d+)/i],[[e,/^/,"SmartTV"],[o,W],[i,M]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[o,z],[i,M]],[/(apple) ?tv/i],[o,[e,"Apple TV"],[i,M]],[/crkey/i],[[e,"Chromecast"],[o,I],[i,M]],[/droid.+aft(\w)( bui|\))/i],[e,[o,O],[i,M]],[/\(dtv[\);].+(aquos)/i],[e,[o,"Sharp"],[i,M]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[o,K],[e,K],[i,M]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,M]],[/((pebble))app/i],[o,e,[i,L]],[/droid.+; (glass) \d/i],[e,[o,I],[i,L]],[/droid.+; (wt63?0{2,3})\)/i],[e,[o,H],[i,L]],[/(quest( 2)?)/i],[e,[o,ie],[i,L]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[o,[i,N]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[e,[i,d]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[e,[i,c]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,c]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[i,d]],[/(android[-\w\. ]{0,9});.+buil/i],[e,[o,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[n,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[n,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[n,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,n]],os:[[/microsoft (windows) (vista|xp)/i],[n,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[n,[r,J,te]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[n,"Windows"],[r,J,te]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[n,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[n,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[r,n],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[n,r],[/\(bb(10);/i],[r,[n,Z]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[n,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[n,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[n,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[n,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[n,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[n,r],[/(sunos) ?([\w\.\d]*)/i],[[n,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[n,r]]},k=function(g,f){if(typeof g===S&&(f=g,g=l),!(this instanceof k))return new k(g,f).getResult();var p=g||(typeof a!==u&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:""),T=f?function(b,m){var P={};for(var x in b)m[x]&&m[x].length%2==0?P[x]=m[x].concat(b[x]):P[x]=b[x];return P}(oe,f):oe;return this.getBrowser=function(){var b,m={};return m.name=l,m.version=l,E.call(m,p,T.browser),m.major=typeof(b=m.version)===v?b.replace(/[^\d\.]/g,"").split(".")[0]:l,m},this.getCPU=function(){var b={};return b.architecture=l,E.call(b,p,T.cpu),b},this.getDevice=function(){var b={};return b.vendor=l,b.model=l,b.type=l,E.call(b,p,T.device),b},this.getEngine=function(){var b={};return b.name=l,b.version=l,E.call(b,p,T.engine),b},this.getOS=function(){var b={};return b.name=l,b.version=l,E.call(b,p,T.os),b},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return p},this.setUA=function(b){return p=typeof b===v&&b.length>255?K(b,255):b,this},this.setUA(p),this};k.VERSION="0.7.30",k.BROWSER=D([n,r,"major"]),k.CPU=D([C]),k.DEVICE=D([e,o,i,B,d,M,c,L,N]),k.ENGINE=k.OS=D([n,r]),typeof h!==u?(typeof w!==u&&w.exports&&(h=w.exports=k),h.UAParser=k):s(5)?(t=(function(){return k}).call(h,s,h,w))===l||(w.exports=t):typeof a!==u&&(a.UAParser=k);var A=typeof a!==u&&(a.jQuery||a.Zepto);if(A&&!A.ua){var R=new k;A.ua=R.getResult(),A.ua.get=function(){return R.getUA()},A.ua.set=function(g){R.setUA(g);var f=R.getResult();for(var p in f)A.ua[p]=f[p]}}})(typeof window=="object"?window:this)},function(w,h){(function(s){w.exports=s}).call(this,{})},function(w,h){w.exports=function(){var s=["monospace","sans-serif","serif"],t=document.getElementsByTagName("body")[0],a=document.createElement("span");a.style.fontSize="72px",a.innerHTML="mmmmmmmmmmlli";var l={},y={};for(var u in s)a.style.fontFamily=s[u],t.appendChild(a),l[s[u]]=a.offsetWidth,y[s[u]]=a.offsetHeight,t.removeChild(a);this.detect=function(S){var v=!1;for(var e in s){a.style.fontFamily=S+","+s[e],t.appendChild(a);var n=a.offsetWidth!=l[s[e]]||a.offsetHeight!=y[s[e]];t.removeChild(a),v=v||n}return v}}}])})})(se);var ce=se.exports;async function de(){return(await fetch("https://ipapi.co/json/")).json()}(async()=>{const j=new ce.ClientJS,G=await de(),w=document.getElementById("registerForm"),h=w.querySelector('input[name="country"]'),s=w.querySelector('input[name="prefix"]'),t=w.querySelector('input[name="phone"]'),a=w.querySelector(".prefix-icon");a.innerHTML=`<img src="https://raw.githubusercontent.com/lipis/flag-icons/4390ff1d78e8bc2706305eaaec861ff26afdc8c1/flags/1x1/${G.country_code.toLowerCase()}.svg" alt="">`,s.value=G.country_calling_code,h.value=G.country_code,t.onkeypress=l=>!!/\d/.test(String.fromCharCode(l.keyCode)),w.addEventListener("submit",async l=>{l.preventDefault();const y=new FormData(l.target),u=w.querySelector('button[type="submit"]');y.append("fingerprint",j.getFingerprint()),y.append("action","register"),u.textContent="Loading...",u.disabled=!0;const S=await fetch(my_ajax_object.ajax_url,{method:"POST",body:y}),v=await S.json();u.textContent="Create Your Free Account",u.disabled=!1,S.ok?location.href=v.data.RedirectTo:alert(v.data)})})();
//# sourceMappingURL=main-jBrAQhKT.js.map
