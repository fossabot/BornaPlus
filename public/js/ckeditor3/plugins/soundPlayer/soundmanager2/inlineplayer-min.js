﻿/**
 * SoundManager 2 Demo: Play MP3 links "in-place"
 * ----------------------------------------------
*/
function InlinePlayer(){var e=this,n=this,s=soundManager,t=navigator.userAgent.match(/msie/i);this.playableClass="inline-playable",this.excludeClass="inline-exclude",this.links=[],this.sounds=[],this.soundsByURL=[],this.indexByURL=[],this.lastSound=null,this.soundCount=0,this.config={playNext:!1,autoPlay:!1},this.css={sDefault:"sm2_link",sLoading:"sm2_loading",sPlaying:"sm2_playing",sPaused:"sm2_paused"},this.addEventHandler="undefined"!=typeof window.addEventListener?function(e,n,s){return e.addEventListener(n,s,!1)}:function(e,n,s){e.attachEvent("on"+n,s)},this.removeEventHandler="undefined"!=typeof window.removeEventListener?function(e,n,s){return e.removeEventListener(n,s,!1)}:function(e,n,s){return e.detachEvent("on"+n,s)},this.classContains=function(e,n){return"undefined"!=typeof e.className?e.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)")):!1},this.addClass=function(n,s){return n&&s&&!e.classContains(n,s)?void(n.className=(n.className?n.className+" ":"")+s):!1},this.removeClass=function(n,s){return n&&s&&e.classContains(n,s)?void(n.className=n.className.replace(new RegExp("( "+s+")|("+s+")","g"),"")):!1},this.getSoundByURL=function(n){return"undefined"!=typeof e.soundsByURL[n]?e.soundsByURL[n]:null},this.isChildOfNode=function(e,n){if(!e||!e.parentNode)return!1;n=n.toLowerCase();do e=e.parentNode;while(e&&e.parentNode&&e.nodeName.toLowerCase()!=n);return e.nodeName.toLowerCase()==n?e:null},this.events={play:function(){n.removeClass(this._data.oLink,this._data.className),this._data.className=n.css.sPlaying,n.addClass(this._data.oLink,this._data.className)},stop:function(){n.removeClass(this._data.oLink,this._data.className),this._data.className=""},pause:function(){n.removeClass(this._data.oLink,this._data.className),this._data.className=n.css.sPaused,n.addClass(this._data.oLink,this._data.className)},resume:function(){n.removeClass(this._data.oLink,this._data.className),this._data.className=n.css.sPlaying,n.addClass(this._data.oLink,this._data.className)},finish:function(){if(n.removeClass(this._data.oLink,this._data.className),this._data.className="",n.config.playNext){var e=n.indexByURL[this._data.oLink.href]+1;e<n.links.length&&n.handleClick({target:n.links[e]})}}},this.stopEvent=function(e){return"undefined"!=typeof e&&"undefined"!=typeof e.preventDefault?e.preventDefault():"undefined"!=typeof event&&"undefined"!=typeof event.returnValue&&(event.returnValue=!1),!1},this.getTheDamnLink=t?function(e){return e&&e.target?e.target:window.event.srcElement}:function(e){return e.target},this.handleClick=function(n){if("undefined"!=typeof n.button&&n.button>1)return!0;var t=e.getTheDamnLink(n);if("a"!=t.nodeName.toLowerCase()&&(t=e.isChildOfNode(t,"a"),!t))return!0;t.getAttribute("href");if(!t.href||!s.canPlayLink(t)&&!e.classContains(t,e.playableClass)||e.classContains(t,e.excludeClass))return!0;var a=t.href,i=e.getSoundByURL(a);return i?i==e.lastSound?i.togglePause():(s._writeDebug("sound different than last sound: "+e.lastSound.id),e.lastSound&&e.stopSound(e.lastSound),i.togglePause()):(e.lastSound&&e.stopSound(e.lastSound),i=s.createSound({id:"inlineMP3Sound"+e.soundCount++,url:a,onplay:e.events.play,onstop:e.events.stop,onpause:e.events.pause,onresume:e.events.resume,onfinish:e.events.finish,type:t.type||null}),i._data={oLink:t,className:e.css.sPlaying},e.soundsByURL[a]=i,e.sounds.push(i),i.play()),e.lastSound=i,"undefined"!=typeof n&&"undefined"!=typeof n.preventDefault?n.preventDefault():event.returnValue=!1,!1},this.stopSound=function(e){soundManager.stop(e.id),soundManager.unload(e.id)},this.init=function(){s._writeDebug("inlinePlayer.init()");for(var n=document.getElementsByTagName("a"),t=0,a=0,i=n.length;i>a;a++)!s.canPlayLink(n[a])&&!e.classContains(n[a],e.playableClass)||e.classContains(n[a],e.excludeClass)||(e.addClass(n[a],e.css.sDefault),e.links[t]=n[a],e.indexByURL[n[a].href]=t,t++);t>0&&(e.addEventHandler(document,"click",e.handleClick),e.config.autoPlay&&e.handleClick({target:e.links[0],preventDefault:function(){}})),s._writeDebug("inlinePlayer.init(): Found "+t+" relevant items.")},this.init()}var inlinePlayer=null;soundManager.onready(function(){inlinePlayer=new InlinePlayer});
