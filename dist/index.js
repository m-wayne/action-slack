(()=>{var __webpack_modules__={943:module=>{module.exports=eval("require")("@actions/core")},800:module=>{module.exports=eval("require")("axios")},275:module=>{module.exports=eval("require")("lodash")},147:e=>{"use strict";e.exports=require("fs")},111:(e,r,_)=>{const t=_(147);const s=_(275);const a=_(943);s.templateSettings.interpolate=/{{([\s\S]+?)}}/g;const{SLACK_AVATAR:o,SLACK_EMOJI:n,SLACK_CUSTOM_PAYLOAD:c,GITHUB_EVENT_PATH:i,GITHUB_ACTOR:u,GITHUB_EVENT_NAME:p,GITHUB_REPOSITORY:l}=process.env;const d=JSON.parse(t.readFileSync(i,"utf8"));const replaceMustaches=e=>s.template(e)({...process.env,EVENT_PAYLOAD:d});r.getMessage=()=>{const e=a.getInput("args");const r=`@${u} (${p}) at ${l}`;if(!e)return r;return replaceMustaches(e)||r};r.parsePayload=()=>JSON.parse(replaceMustaches(c));r.selectAvatar=()=>{switch(o){case"sender":return s.get(d,"sender.avatar_url")||false;case"repository":return s.get(d,"owner.avatar_url")||false;default:return o||false}};r.emoji=()=>n?`:${n}:`:null},964:(e,r,_)=>{const{selectAvatar:t,emoji:s,getMessage:a,parsePayload:o}=_(111);const{SLACK_USERNAME:n,SLACK_CHANNEL:c,SLACK_CUSTOM_PAYLOAD:i}=process.env;const u=(()=>{let e;function createInstance(){if(i)return o();const e={};e.text=a();if(n)e.username=n;if(c)e.channel=c;if(t())e.icon_url=t();if(s())e.icon_emoji=s();return e}return{get(){if(!e)e=createInstance();return e}}})();e.exports=u}};var __webpack_module_cache__={};function __nccwpck_require__(e){var r=__webpack_module_cache__[e];if(r!==undefined){return r.exports}var _=__webpack_module_cache__[e]={exports:{}};var t=true;try{__webpack_modules__[e](_,_.exports,__nccwpck_require__);t=false}finally{if(t)delete __webpack_module_cache__[e]}return _.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{const e=__nccwpck_require__(800);const r=__nccwpck_require__(275);const _=__nccwpck_require__(943);const t=__nccwpck_require__(964);const s=["GITHUB_EVENT_PATH","SLACK_WEBHOOK"];try{r.forEach(s,(e=>{if(r.isEmpty(process.env[e])){process.exitCode=1;throw new Error(`Missing environment variable. ${e} is required.`)}}))}catch(e){_.setFailed(e.message)}if(!process.exitCode){_.info("Sending message ...");e.post(process.env.SLACK_WEBHOOK,t.get()).then((()=>{process.exitCode=0;return _.info("Message sent! Shutting down ...")})).catch((e=>{process.exitCode=1;const r=e.response?e.response.data:e.message;return _.setFailed(`Error: ${r}`)}))}})();module.exports=__webpack_exports__})();