(()=>{"use strict";var e,t,n,i=function(){function e(e){var t=e.element,n=e.callback;this.element=t,this.callback=n,this.prevValue="0"}return e.prototype.init=function(){this.element.value="";var e=this.handleInput.bind(this);this.element.addEventListener("input",e)},e.prototype.handleInput=function(e){var t=e.target,n=t.value,i=n.split("."),a="0"===t.value[0];if(a)for(;!0===a&&t.value.length>1;)t.value=t.value.substr(1),a="0"===t.value[0];i.length>1&&i[1].length>2&&(t.value=t.value.substr(0,t.value.length-1)),i.length>0&&i[0].length>3||isNaN(Number(n))?t.value=this.prevValue:("-"===n[0]&&(t.value=t.value.substr(1)),this.prevValue=Math.abs(Number(n)).toString(),this.change())},e.prototype.getValue=function(){return parseFloat(this.prevValue)},e.prototype.change=function(){var e=parseFloat(this.prevValue);this.callback({type:"area",value:e})},e}(),a=function(){function e(e){var t=e.element,n=e.callback;this.element=t,this.callback=n,this.activeElement=null}return e.prototype.init=function(){this.element.querySelectorAll("input:checked").forEach((function(e){return e.checked=!1}));var e=this.handleClick.bind(this);this.element.addEventListener("click",e)},e.prototype.change=function(){var e=this.activeElement;this.callback({type:"inputType",value:e})},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(t.classList.contains("input-type__input")){var n=t.dataset.name;void 0!==n&&(this.activeElement=n,this.change())}},e.prototype.getValue=function(){return this.activeElement},e}(),s=function(){function e(e){var t=e.element,n=e.callback;this.element=t,this.callback=n,this.value=0,this.isActive=!0,this.handleClickBind=this.handleClick.bind(this)}return e.prototype.init=function(){this.element.querySelectorAll("input:checked").forEach((function(e){return e.checked=!1})),this.events("add")},e.prototype.events=function(e){"add"===e&&this.element.addEventListener("click",this.handleClickBind,!0),"remove"===e&&this.element.removeEventListener("click",this.handleClickBind,!0)},e.prototype.change=function(){var e=this.value;this.callback({type:"roomsCount",value:e})},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(t.classList.contains("rooms-count__input")){var n=t.dataset.name;if(!n)return;this.value=parseInt(n),this.change()}},e.prototype.enable=function(){this.isActive=!0,this.element.classList.remove("rooms-count_disabled"),this.events("add")},e.prototype.disable=function(){this.isActive=!1,!this.element.classList.contains("rooms-count_disabled")&&this.element.classList.add("rooms-count_disabled"),this.events("remove")},e.prototype.getValue=function(){return this.value},e}(),o=function(){function e(e){var t=e.element,n=e.callback,i=e.typeName;this.element=t,this.typeName=i,this.callback=n,this.value=null,this.isOpen=!1,this.isActive=!0,this.valueElement=t.querySelector(".select__value"),this.listElement=t.querySelector(".select__list"),this.bindClick=this.handleClick.bind(this),this.bindColapse=this.colapse.bind(this)}return e.prototype.init=function(){this.events("add")},e.prototype.events=function(e){"add"===e&&(this.element.addEventListener("click",this.bindClick,!0),this.element.addEventListener("mouseleave",this.bindColapse)),"remove"===e&&(this.element.removeEventListener("click",this.bindClick,!0),this.element.removeEventListener("mouseleave",this.bindColapse))},e.prototype.colapse=function(){this.isOpen=!1,this.element.classList.remove("select_active")},e.prototype.change=function(){var e=this.typeName,t=this.value;this.callback({type:e,value:t})},e.prototype.toggle=function(){this.isOpen?this.element.classList.remove("select_active"):this.element.classList.add("select_active"),this.isOpen=!this.isOpen},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(this.toggle(),t.classList.contains("select__item")){var n=t.dataset.name;n&&(this.valueElement.innerHTML=t.innerHTML,this.value=n,!this.valueElement.classList.contains("select__value_selected")&&this.valueElement.classList.add("select__value_selected"),this.change())}},e.prototype.getValue=function(){return this.value},e.prototype.enable=function(){this.isActive=!0,this.element.classList.remove("select_disabled"),this.events("add")},e.prototype.disable=function(){this.isActive=!1,this.element.classList.add("select_disabled"),this.events("remove")},e}(),l=function(){function e(e){var t=e.element,n=e.callback;this.callback=n;var l=this.onChangeProps.bind(this);this.area=new i({element:t.querySelector(".area__input"),callback:l}),this.inputType=new a({element:t.querySelector(".calc__house-types"),callback:l}),this.roomsCount=new s({element:t.querySelector(".rooms-count"),callback:l});var r=t.querySelectorAll(".select");this.roomType=new o({element:r[0],callback:l,typeName:"roomType"}),this.repareType=new o({element:r[1],callback:l,typeName:"roomType"})}return e.prototype.init=function(){this.repareType.init(),this.roomType.init(),this.roomsCount.init(),this.inputType.init(),this.area.init()},e.prototype.onChangeProps=function(){var e=this.getComlexData();this.callback(e)},e.prototype.getComlexData=function(){return{area:this.area.getValue(),houseType:this.inputType.getValue(),rooms:this.roomsCount.getValue(),roomType:this.roomType.getValue(),repareType:this.repareType.getValue()}},e}();!function(e){e.cosmetic="cosmetic",e.complete="complete",e.design="design"}(e||(e={})),function(e){e.room="room",e.kitchen="kitchen",e.bath="bath",e.toilet="toilet",e.combined="combined"}(t||(t={})),function(e){e.second="second",e.new="new"}(n||(n={}));var r={cosmetic:{room:{remont:2500,materials:200,days:{17:4,23:5,29:6,35:7,41:8,47:9},stepConfig:"5-1"},kitchen:{remont:2650,materials:350},bath:{remont:10580,materials:650},toilet:{remont:13500,materials:850},combined:{remont:10580,materials:650}},complete:{room:{remont:5380,materials:700},kitchen:{remont:5900,materials:880},bath:{remont:25168,materials:3630},toilet:{remont:21500,materials:3200},combined:{remont:25168,materials:3630}},design:{room:{remont:7150,materials:1830},kitchen:{remont:7980,materials:1995},bath:{remont:32150,materials:4830},toilet:{remont:31850,materials:4830},combined:{remont:32150,materials:4830}}},c={second:{cosmetic:{remont:2500,materials:200},complete:{remont:5380,materials:700},design:{remont:7150,materials:1830}},new:{cosmetic:{remont:2500,materials:200},complete:{remont:4380,materials:700},design:{remont:6150,materials:1830}}},u=document.querySelector(".calc"),h=u.querySelector(".errors"),m=u.querySelector(".result"),p=function(e){var t,n,i,a=e.houseType,s=e.area,o=e.roomType,l=e.repareType,u=0,h=0;"room"===a&&null!==l&&null!==o&&(u=(t=r[l][o]).remont,h=t.materials,t.hasOwnProperty("days")&&(n=t.days),t.hasOwnProperty("stepConfig")&&(i=t.stepConfig)),null!==l&&("second"===a||"new"===a&&null!==l)&&(u=(t=c[a][l]).remont,h=t.materials,t.hasOwnProperty("days")&&(n=t.days),t.hasOwnProperty("stepConfig")&&(i=t.stepConfig));var p=function(e,t,n){for(var i=Object.keys(t).sort((function(e,t){return Number(e)-Number(t)})),a="",s=0;s<i.length;s++)if(e<=Number(i[s])){a=i[s];break}if(""!==a)return t[a];var o=i[i.length-1],l=e-Number(o),r=t[o],c=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,a,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(e){a={error:e}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(a)throw a.error}}return o}(n.split("-").map((function(e){return Number(e)})),2),u=c[0],h=c[1];return Number(r+h)+Math.floor(l/(u/h))}(s,n,i),v="\n<div>Стоимость ремонта 1кв. метра = "+u+"</div>\n<div>Стоимость материлов на 1кв. метр = "+h+"</div>\n<div>Стоимость ремонта для площади "+s+"кв. метров = "+u*s+"</div>\n<div>Стоимость материлов для  "+s+"кв. метров = "+h*s+"</div>\n";void 0!==p&&(v+="<div>Количество дней на работу "+p+" </div> "),m.innerHTML=v},v=new l({element:u,callback:function(e){var t=e.houseType,n=e.area,i=e.roomType,a=e.repareType,s=[];h.innerHTML="",m.innerHTML="",null===t&&s.push("Укажите где будет ремонт"),0===n&&s.push("Укажите размер ремонтируемой площади"),"new"!==t&&"second"!==t||(v.roomType.disable(),v.roomsCount.enable()),"room"===t&&(null===i&&s.push("Укажите тип помещения"),v.roomType.enable(),v.roomsCount.disable()),null===a&&s.push("Укажите помещение тип Ремонта"),s&&function(e){e.forEach((function(e){h.innerHTML+="<div>"+e+"</div>"}))}(s),0===s.length&&p(e)}});v.init()})();