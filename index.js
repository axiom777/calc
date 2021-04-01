(()=>{"use strict";var e,t,i,n=function(){function e(e){var t=e.element,i=e.callback;this.element=t,this.callback=i,this.prevValue="0"}return e.prototype.init=function(){this.element.value="";var e=this.handleInput.bind(this);this.element.addEventListener("input",e)},e.prototype.handleInput=function(e){var t=e.target,i=t.value,n=i.split("."),a="0"===t.value[0];if(a)for(;!0===a&&t.value.length>1;)t.value=t.value.substr(1),a="0"===t.value[0];n.length>1&&n[1].length>2&&(t.value=t.value.substr(0,t.value.length-1)),n.length>0&&n[0].length>3||isNaN(Number(i))?t.value=this.prevValue:("-"===i[0]&&(t.value=t.value.substr(1)),this.prevValue=i,this.change())},e.prototype.getValue=function(){return parseFloat(this.prevValue)},e.prototype.change=function(){var e=parseFloat(this.prevValue);this.callback({type:"area",value:e})},e}(),a=function(){function e(e){var t=e.element,i=e.callback;this.element=t,this.callback=i,this.activeElement=null}return e.prototype.init=function(){this.element.querySelectorAll("input:checked").forEach((function(e){return e.checked=!1}));var e=this.handleClick.bind(this);this.element.addEventListener("click",e)},e.prototype.change=function(){var e=this.activeElement;this.callback({type:"inputType",value:e})},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(t.classList.contains("input-type__input")){var i=t.dataset.name;void 0!==i&&(this.activeElement=i,this.change())}},e.prototype.getValue=function(){return this.activeElement},e}(),s=function(){function e(e){var t=e.element,i=e.callback;this.element=t,this.callback=i,this.value=0,this.isActive=!0,this.handleClickBind=this.handleClick.bind(this)}return e.prototype.init=function(){this.element.querySelectorAll("input:checked").forEach((function(e){return e.checked=!1})),this.events("add")},e.prototype.events=function(e){"add"===e&&this.element.addEventListener("click",this.handleClickBind,!0),"remove"===e&&this.element.removeEventListener("click",this.handleClickBind,!0)},e.prototype.change=function(){var e=this.value;this.callback({type:"roomsCount",value:e})},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(t.classList.contains("rooms-count__input")){var i=t.dataset.name;if(!i)return;this.value=parseInt(i),this.change()}},e.prototype.enable=function(){this.isActive=!0,this.element.classList.remove("rooms-count_disabled"),this.events("add")},e.prototype.disable=function(){this.isActive=!1,!this.element.classList.contains("rooms-count_disabled")&&this.element.classList.add("rooms-count_disabled"),this.events("remove")},e.prototype.getValue=function(){return this.value},e}(),l=function(){function e(e){var t=e.element,i=e.callback,n=e.typeName;this.element=t,this.typeName=n,this.callback=i,this.value=null,this.isOpen=!1,this.isActive=!0,this.valueElement=t.querySelector(".select__value"),this.listElement=t.querySelector(".select__list"),this.bindClick=this.handleClick.bind(this),this.bindColapse=this.colapse.bind(this)}return e.prototype.init=function(){this.events("add")},e.prototype.events=function(e){"add"===e&&(this.element.addEventListener("click",this.bindClick,!0),this.element.addEventListener("mouseleave",this.bindColapse)),"remove"===e&&(this.element.removeEventListener("click",this.bindClick,!0),this.element.removeEventListener("mouseleave",this.bindColapse))},e.prototype.colapse=function(){this.isOpen=!1,this.element.classList.remove("select_active")},e.prototype.change=function(){var e=this.typeName,t=this.value;this.callback({type:e,value:t})},e.prototype.toggle=function(){this.isOpen?this.element.classList.remove("select_active"):this.element.classList.add("select_active"),this.isOpen=!this.isOpen},e.prototype.handleClick=function(e){e.stopPropagation();var t=e.target;if(this.toggle(),t.classList.contains("select__item")){var i=t.dataset.name;i&&(this.valueElement.innerHTML=t.innerHTML,this.value=i,!this.valueElement.classList.contains("select__value_selected")&&this.valueElement.classList.add("select__value_selected"),this.change())}},e.prototype.getValue=function(){return this.value},e.prototype.enable=function(){this.isActive=!0,this.element.classList.remove("select_disabled"),this.events("add")},e.prototype.disable=function(){this.isActive=!1,this.element.classList.add("select_disabled"),this.events("remove")},e}(),o=function(){function e(e){var t=e.element,i=e.callback;this.callback=i;var o=this.onChangeProps.bind(this);this.area=new n({element:t.querySelector(".area__input"),callback:o}),this.inputType=new a({element:t.querySelector(".calc__house-types"),callback:o}),this.roomsCount=new s({element:t.querySelector(".rooms-count"),callback:o});var r=t.querySelectorAll(".select");this.roomType=new l({element:r[0],callback:o,typeName:"roomType"}),this.repareType=new l({element:r[1],callback:o,typeName:"roomType"})}return e.prototype.init=function(){this.repareType.init(),this.roomType.init(),this.roomsCount.init(),this.inputType.init(),this.area.init()},e.prototype.onChangeProps=function(){var e=this.getComlexData();this.callback(e)},e.prototype.getComlexData=function(){return{area:this.area.getValue(),houseType:this.inputType.getValue(),rooms:this.roomsCount.getValue(),roomType:this.roomType.getValue(),repareType:this.repareType.getValue()}},e}();!function(e){e.cosmetic="cosmetic",e.complete="complete",e.design="design"}(e||(e={})),function(e){e.room="room",e.kitchen="kitchen",e.bath="bath",e.toilet="toilet",e.combined="combined"}(t||(t={})),function(e){e.second="second",e.new="new"}(i||(i={}));var r={cosmetic:{room:{remont:2500,materials:200},kitchen:{remont:2650,materials:350},bath:{remont:10580,materials:650},toilet:{remont:13500,materials:850},combined:{remont:10580,materials:650}},complete:{room:{remont:5380,materials:700},kitchen:{remont:5900,materials:880},bath:{remont:25168,materials:3630},toilet:{remont:21500,materials:3200},combined:{remont:25168,materials:3630}},design:{room:{remont:7150,materials:1830},kitchen:{remont:7980,materials:1995},bath:{remont:32150,materials:4830},toilet:{remont:31850,materials:4830},combined:{remont:32150,materials:4830}}},c={second:{cosmetic:{remont:2500,materials:200},complete:{remont:5380,materials:700},design:{remont:7150,materials:1830}},new:{cosmetic:{remont:2500,materials:200},complete:{remont:4380,materials:700},design:{remont:6150,materials:1830}}},h=document.querySelector(".calc"),u=h.querySelector(".errors"),m=h.querySelector(".result"),p=new o({element:h,callback:function(e){var t=e.houseType,i=e.area,n=e.roomType,a=e.repareType,s=[];u.innerHTML="",m.innerHTML="",null===t&&s.push("Укажите где будет ремонт"),0===i&&s.push("Укажите размер ремонтируемой площади"),"new"!==t&&"second"!==t||(p.roomType.disable(),p.roomsCount.enable()),"room"===t&&(null===n&&s.push("Укажите тип помещения"),p.roomType.enable(),p.roomsCount.disable()),null===a&&s.push("Укажите помещение тип Ремонта"),s&&function(e){e.forEach((function(e){u.innerHTML+="<div>"+e+"</div>"}))}(s),0===s.length&&function(e){var t=e.houseType,i=e.area,n=e.roomType,a=e.repareType,s=0,l=0;"room"===t&&null!==a&&null!==n&&(s=r[a][n].remont,l=r[a][n].materials),null!==a&&("second"===t||"new"===t&&null!==a)&&(s=c[t][a].remont,l=c[t][a].materials),m.innerHTML="\n<div>Стоимость ремонта 1кв. метра = "+s+"</div>\n<div>Стоимость материлов на 1кв. метр = "+l+"</div>\n<div>Стоимость ремонта для площади "+i+"кв. метров = "+s*i+"</div>\n<div>Стоимость материлов для  "+i+"кв. метров = "+l*i+"</div>\n"}(e)}});p.init()})();