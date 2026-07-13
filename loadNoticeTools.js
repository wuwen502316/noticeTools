(function(){
//加载css配置
//https://wuwen502316.github.io/noticeTools/css/pbulic.css;

const URL = "https://wuwen502316.github.io/noticeTools"
const cssFileName = ["pbulic",'element','button'];
const cssRel = "stylesheet";
const cssType = "text/css";
const head = document.querySelector("head");
const body = document.querySelector("body");
for(let i = 0 ; i < cssFileName.length; i++){
	let link = document.createElement("link");
	link.rel = cssRel;
	link.type = cssType;
	link.href = `${URL}/css/${cssFileName[i]}/.css`;
	head.appendChild(link);
}

//加载JS配置
//https://wuwen502316.github.io/noticeTools/js/noticeTools.js;

const script = document.creteElement("script");
script.src = 'https://wuwen502316.github.io/noticeTools/noticeTools.js';
script.type = "module";
script.charset ="utf-8";
body.appendChild(script);
})()
