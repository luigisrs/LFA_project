var X=[0,0,0,0,0,0,0,0,0,0],Y=[0,0,0,0,0,0,0,0,0,0],Z=[0,0,0,0,0,0,0,0,0,0];$(document).ready(function(){function e(e){var s=e.charCodeAt(0)-65;return s}function s(e){var s=e.slice(0,2),c=e.slice(0,1),a=parseInt(e.slice(1,2)),t=e.slice(2,4);switch(c){case"X":"++"===t&&X[a]++,"--"===t&&X[a]--,$("#"+s).addClass("success"),$("#"+s).text(X[a]);break;case"Y":"++"===t&&Y[a]++,"--"===t&&Y[a]--,$("#"+s).addClass("success"),$("#"+s).text(Y[a]);break;case"Z":"++"===t&&Z[a]++,"--"===t&&Z[a]--,$("#"+s).addClass("success"),$("#"+s).text(Z[a])}}$("#run").click(function(){for(var e=$("#code").val().split("\n"),c=0;c<e.length;c++)"IF"===e[c].slice(0,2),":"===e[c].slice(1,2)||s(e[c])}),$("#cleanup").click(function(){$(".valueCell").text("0");for(var e=0;e<X.length;e++)X[e]=0,Y[e]=0,Z[e]=0;$("td").removeClass("success")})});