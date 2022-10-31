'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q="},m:{name:"Messenger Web",url:"https://www.messenger.com/"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query="},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q="},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q="},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},n:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q="},cal:{name:"Google Calendar",url:"https://calendar.google.com/calendar/r"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q="}},CLASSES={f1:{name:"CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",url:"https://linklab-uva.github.io/autonomousracing/",collaburl:"https://collab.its.virginia.edu/portal/site/90579f89-3cbf-4f83-a4d7-902848f7703d",discussionurl:"https://piazza.com/class/kko5x3rocvl3ky"},pl:{name:"CS 4640: Programming Languages for Web Applications",url:"https://www.cs.virginia.edu/~up3f/cs4640/schedule.html",collaburl:"https://collab.its.virginia.edu/portal/site/8fff0a03-d2d8-45c8-bda6-760bf8d7e2e4/",discussionurl:"https://piazza.com/class/kkestnq1z5u3kl",zoomurl:"https://virginia.zoom.us/j/95783077722?pwd=U2lLTkN3Y05WWGhJQ051Z3BUWmxvUT09"},cv:{name:"CS 4501: Introduction to Computer Vision",url:"https://www.vicenteordonez.com/vision/",collaburl:"https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3",zoomurl:"https://virginia.zoom.us/j/99413743466?pwd=VHpmQW9SR1A5bmpseVZMN2tPZVZOdz09"},ear:{name:"CS 3501: Embedded Computing & Robotics I",url:"https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8",discussionurl:"discord://",specialurl:"https://learn.zybooks.com/zybook/VIRGINIACSECE3501Spring2021?selectedPanel=assignments-panel"},sts:{name:"STS 4600: The Engineer, Ethics, and Professional Responsibility",url:"https://collab.its.virginia.edu/portal/site/d360b679-581f-496d-8782-7053d86aefca",zoomurl:"https://virginia.zoom.us/j/93721024007?pwd=T1NJKzdrZG03L2pJN0dEQkcwUC91QT09"},apma:{name:"APMA 2501: Mathematics of Information",url:"http://www.ece.virginia.edu/~ffh8x/moi/",collaburl:"https://collab.its.virginia.edu/portal/site/0778b7b4-8cd8-440c-9fcb-bd8e74d5b9f3",discussionurl:"https://piazza.com/class/kknbo8nztqo6vg"}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in CLASSES){const a=CLASSES[c];if(1<b.length){if("j"===b[1].toLowerCase()&&a.zoomurl)return await redirect(`${a.zoomurl}`),!0;if("d"===b[1].toLowerCase()&&a.discussionurl)return await redirect(`${a.discussionurl}`),!0;if("c"===b[1].toLowerCase()&&a.collaburl)return await redirect(`${a.collaburl}`),!0;if("s"===b[1].toLowerCase()&&a.specialurl)return await redirect(`${a.specialurl}`),!0}return await redirect(`${a.url}`),!0}if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}