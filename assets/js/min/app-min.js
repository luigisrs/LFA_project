var X=[0,0,0,0,0,0,0,0,0,0],Y=[0,0,0,0,0,0,0,0,0,0],Z=[0,0,0,0,0,0,0,0,0,0],labels=[];$(document).ready(function(){function e(e){var s=e.charCodeAt(0)-65;return s}function s(e){var s=e.slice(0,2),c=e.slice(0,1),a=parseInt(e.slice(1,2)),l=e.slice(2,4);switch(c){case"X":"++"===l&&X[a]++,"--"===l&&X[a]--,$("#"+s).addClass("success"),$("#"+s).text(X[a]);break;case"Y":"++"===l&&Y[a]++,"--"===l&&Y[a]--,$("#"+s).addClass("success"),$("#"+s).text(Y[a]);break;case"Z":"++"===l&&Z[a]++,"--"===l&&Z[a]--,$("#"+s).addClass("success"),$("#"+s).text(Z[a])}}function c(c,a){var l=e(c.slice(0,1));labels[l]=a,s(c.slice(2,6))}function a(e){varLetter=e.slice(3,4),varPosition=parseInt(e.slice(4,5))}$("#run").click(function(){for(var e=$("#code").val().split("\n"),l=0;l<e.length;l++)"IF"===e[l].slice(0,2)&&(l=a(e[l])),":"===e[l].slice(1,2)?c(e[l],l):s(e[l])}),$("#cleanup").click(function(){$(".valueCell").text("0");for(var e=0;e<X.length;e++)X[e]=0,Y[e]=0,Z[e]=0;$("td").removeClass("success")})});