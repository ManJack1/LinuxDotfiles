const e=()=>{chrome.declarativeContent.onPageChanged.removeRules(void 0,(()=>{chrome.declarativeContent.onPageChanged.addRules([{id:"js",conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:"www.youtube.com",pathEquals:"/watch"}})],actions:[new chrome.declarativeContent.RequestContentScript({js:["watch.js"]})]}])}))},t=()=>{chrome.contextMenus.removeAll((()=>{const e=chrome.i18n.getMessage;chrome.storage.sync.get(["hideDownload","closeUpdateTip"],(({hideDownload:t,closeUpdateTip:o})=>{[{id:"download",type:"checkbox",checked:t,title:e("hideSubtitleDownload")},{id:"updateLog",title:`${e("updateLog")} 🌐`},{id:"learnMore",title:`${e("learnMore")} 🌐`}].forEach((e=>chrome.contextMenus.create({...e,contexts:["browser_action"]})))}))}))};chrome.runtime.onInstalled.addListener((({reason:o})=>{const n=chrome.runtime.OnInstalledReason;if([n.INSTALL,n.UPDATE].includes(o)){const e=(e=>{switch(!0){case["zh-CN","zh-SG","yue","nan","hak"].includes(e):return"zh-Hans";case["zh-TW","zh-HK","yue-HK","nan-TW","hak-TW","zh"].includes(e):return"zh-Hant";case["en-GB","en-US","en-IE","en-CA","en-IN"].includes(e):return"en";case["es-419","es-US","es-MX","es-ES"].includes(e):return"es";case["pt-BR","pt-PT"].includes(e):return"pt";case["hi-Latn"].includes(e):return"hi";case["sr-Latn","sr-Cyrl"].includes(e):return"sr";case["mo"].includes(e):return"ro";case["nl-BE","nl-NL"].includes(e):return"nl";case["fr-BE","fr-FR","fr-CA","fr-CH"].includes(e):return"fr";case["ru-Latn"].includes(e):return"ru";case["de-AT","de-DE","de-CH"].includes(e):return"de";case["fa-AF","fa-IR"].includes(e):return"fa";case["he"].includes(e):return"iw";default:return e}})(chrome.i18n.getUILanguage()),t={single:!1,hideDownload:!1,langCode:e,langName:"",time:0,recentLang:[e],recentDown:[e],dubbing:!1,voiceCode:"",voiceName:"",customStyle:!0,common:{color:["#ffffff"],background:["#080808bf"],stroke:["#00000000"]},dualSubtitlesStyle:{one:{fontFamily:"Roboto",fontSize:"32",color:"#ffffff",background:"#080808bf",rowStart:1,check:!0,textStroke:"#00000000"},two:{fontFamily:"Roboto",fontSize:"32",color:"#ffffff",background:"#080808bf",rowStart:2,check:!1,textStroke:"#00000000"},rowGap:0},singleSubtitleStyle:{one:{fontFamily:"Roboto",fontSize:"32",color:"#ffffff",background:"#080808bf",textStroke:"#00000000"}},position:{top:"auto",bottom:"2%",left:"48%",right:"auto"},autoPlay:"false",quality:"auto",qualityLock:!1,openSubtitle:"true"};chrome.storage.sync.get((e=>{const o=Object.entries(t).reduce(((t,[o,n])=>({...t,[o]:void 0===e[o]?n:e[o],updateBarStatus:!0})),{});chrome.storage.sync.clear((()=>chrome.storage.sync.set(o)))}))}setTimeout((()=>{e(),t(),chrome.storage.local.clear()}),500)})),chrome.contextMenus.onClicked.addListener((({menuItemId:e,checked:t})=>{"download"===e&&chrome.storage.sync.set({hideDownload:t}),"updateLog"===e&&chrome.tabs.create({url:"https://www.dual-subtitles.com"}),"learnMore"===e&&chrome.tabs.create({url:"http://youtube.dual-subtitles.com"})}));const o=()=>{chrome.declarativeContent.onPageChanged.getRules((t=>{t.length||e()})),t()};chrome.runtime.onStartup.addListener(o),chrome.runtime.onMessage.addListener((e=>{"recovery"===e.type&&o()}));