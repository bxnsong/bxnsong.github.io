'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q="},m:{name:"Messenger Web",url:"https://www.messenger.com/"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query="},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q="},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q="},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},n:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q="},cal:{name:"Google Calendar",url:"https://calendar.google.com/calendar/r"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q="}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in CLASSES){const a=CLASSES[c];if(1<b.length){if("j"===b[1].toLowerCase()&&a.zoomurl)return await redirect(`${a.zoomurl}`),!0;if("d"===b[1].toLowerCase()&&a.discussionurl)return await redirect(`${a.discussionurl}`),!0;if("c"===b[1].toLowerCase()&&a.collaburl)return await redirect(`${a.collaburl}`),!0;if("s"===b[1].toLowerCase()&&a.specialurl)return await redirect(`${a.specialurl}`),!0}return await redirect(`${a.url}`),!0}if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}