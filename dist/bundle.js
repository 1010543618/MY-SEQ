!function(o){var e={};function t(i){if(e[i])return e[i].exports;var c=e[i]={i:i,l:!1,exports:{}};return o[i].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=o,t.c=e,t.d=function(o,e,i){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:i})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var c in o)t.d(i,c,function(e){return o[e]}.bind(null,c));return i},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="",t(t.s=0)}([function(o,e,t){"use strict";t.r(e);var i=(o,e)=>{var t,i=[];return e.length?(i=e[0],t=o[e[0][0]][e[0][1]],e.forEach(c=>{o[(c[0],c[1])]>t&&(i=e[0],t=o[e[0][0]][e[0][1]])})):console.error("无可落子区域"),i},c=(o,e,t,i)=>[t-1>0&&o[e][t-1]==-i,e+1<8&&t-1>0&&o[e+1][t-1]==-i,e+1<8&&o[e+1][t]==-i,e+1<8&&t+1<8&&o[e+1][t+1]==-i,t+1<8&&o[e][t+1]==-i,e-1>0&&t+1<8&&o[e-1][t+1]==-i,e-1>0&&o[e-1][t]==-i,e-1>0&&t-1>0&&o[e-1][t-1]==-i],r=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],n=(o,e)=>{var t=[];return o.forEach((i,n)=>{o:for(let g=0;g<i.length;g++){if(!i[g]){var s=c(o,n,g,1);for(let i=2;i<8;i++){if(s.every(o=>!1===o))continue o;for(let c=0;c<s.length;c++){if(s[c]){var p=n+i*r[c][0],h=g+i*r[c][1];if(p>0&&p<8&&h>0&&h<8&&0!=o[p][h]||(s[c]=!1),o[p][h]==e){t.push([n,g]);continue o}}}}}}}),t},s=o=>{var e=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];switch(o){case 0:e[3][3]=1,e[3][4]=-1,e[4][3]=-1,e[4][4]=1;break;case 1:e[3][3]=-1,e[3][4]=1,e[4][3]=1,e[4][4]=-1}return e},p=[[{pos:"长寿郊外",coo:"102.161",weight:0},{pos:"西梁女国",coo:"37.83",weight:0},{pos:"长寿村",coo:"31.24",weight:1},{pos:"长寿村",coo:"27.72",weight:1},{pos:"长寿村",coo:"82.102",weight:1},{pos:"长寿村",coo:"139.130",weight:1},{pos:"长寿村",coo:"69.140",weight:1},{pos:"花果山",coo:"18.98",weight:0}],[{pos:"长寿村",coo:"100.188",weight:1},{pos:"西梁女国",coo:"20.93",weight:0},{pos:"宝象国",coo:"26.95",weight:0},{pos:"长寿郊外",coo:"53.127",weight:0},{pos:"长寿郊外",coo:"93.122",weight:0},{pos:"长寿郊外",coo:"136.111",weight:0},{pos:"长寿郊外",coo:"154.104",weight:0},{pos:"长寿郊外",coo:"179.88",weight:0}],[{pos:"花果山",coo:"39.105",weight:0},{pos:"宝象国",coo:"8.61",weight:0},{pos:"朱紫国",coo:"110.23",weight:1},{pos:"大唐国境",coo:"31.230",weight:0},{pos:"大唐国境",coo:"51.188",weight:0},{pos:"大唐国境",coo:"86.266",weight:0},{pos:"傲来国",coo:"36.129",weight:1},{pos:"花果山",coo:"46.81",weight:0}],[{pos:"西梁女国",coo:"60.78",weight:0},{pos:"宝象国",coo:"16.19",weight:0},{pos:"朱紫国",coo:"35.65",weight:1},null,null,{pos:"东海湾",coo:"31.11",weight:0},{pos:"傲来国",coo:"61.115",weight:1},{pos:"花果山",coo:"19.72",weight:0}],[{pos:"西梁女国",coo:"52.50",weight:0},{pos:"宝象国",coo:"31.12",weight:0},{pos:"朱紫国",coo:"36.95",weight:1},null,null,{pos:"东海湾",coo:"75.11",weight:0},{pos:"傲来国",coo:"40.82",weight:1},{pos:"花果山",coo:"13.44",weight:0}],[{pos:"西梁女国",coo:"78.22",weight:0},{pos:"宝象国",coo:"67.3",weight:0},{pos:"大唐国境",coo:"252.226",weight:0},{pos:"大唐国境",coo:"262.140",weight:0},{pos:"大唐国境",coo:"330.89",weight:0},{pos:"东海湾",coo:"10.92",weight:0},{pos:"傲来国",coo:"65.42",weight:1},{pos:"花果山",coo:"27.31",weight:0}],[{pos:"西梁女国",coo:"114.9",weight:0},{pos:"江南野外",coo:"8.75",weight:0},{pos:"江南野外",coo:"31.81",weight:0},{pos:"大唐国境",coo:"48.50",weight:0},{pos:"江南野外",coo:"112.46",weight:0},{pos:"江南野外",coo:"142.60",weight:0},{pos:"傲来国",coo:"187.19",weight:1},{pos:"花果山",coo:"24.3",weight:0}],[{pos:"大唐境外",coo:"39.51",weight:0},{pos:"建邺城",coo:"61.102",weight:-1},{pos:"建邺城",coo:"126.130",weight:-1},{pos:"大唐国境",coo:"159.110",weight:0},{pos:"建邺城",coo:"184.101",weight:-1},{pos:"建邺城",coo:"196.72",weight:-1},{pos:"建邺城",coo:"249.48",weight:-1},{pos:"建邺城",coo:"256.17",weight:-1}]],h=()=>{var o=[];return p.forEach((e,t)=>{o[t]=[],e.forEach((e,i)=>{null!==e&&(o[t][i]=e.weight)})}),o},g=(o,e,t,i)=>{var c=e[0],n=e[1],s=r[t][0],p=r[t][1];for(let e=0;e<i;e++)o[c+i*s][n+i*p]=-o[c+i*s][n+i*p]},w=(o,e,t)=>{var i=[],n=e[0],s=e[1];if(0===o[n][s]){i=c(o,n,s,1);for(let e=2;e<8;e++){if(i.every(o=>!1===o))return;for(let c=0;c<i.length;c++){if(i[c]){var p=n+e*r[c][0],h=s+e*r[c][1];p>0&&p<8&&h>0&&h<8&&0!=o[p][h]||(i[c]=!1),o[p][h]==t&&(o[n][s]=t,g(o,[n,s],c,e-1),i[c]=!1)}}}}else console.error("已经落子")};t.d(e,"get_best_vacancy",function(){return i}),t.d(e,"get_vacancies",function(){return n}),t.d(e,"init_chessboard",function(){return s}),t.d(e,"init_weightboard",function(){return h}),t.d(e,"put_chess_piece",function(){return w})}]);