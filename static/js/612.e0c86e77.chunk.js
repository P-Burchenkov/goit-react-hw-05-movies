"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[612],{612:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(439),r=t(791),u=t(689),c=t(635),i="Review_author__iUpEw",o=t(184);function s(){var e=(0,u.UO)().movieId,n=(0,r.useState)(null),t=(0,a.Z)(n,2),s=t[0],f=t[1];return(0,r.useEffect)((function(){(0,c.pI)(e).then((function(e){var n=e.data;n.results.length>0&&f(n.results)}))}),[e]),s?s.map((function(e){var n=e.id,t=e.author,a=e.content;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:i,children:["Author: ",t]}),(0,o.jsx)("div",{children:a})]},n)})):(0,o.jsx)("div",{children:"We don`t have any reviews for this movie"})}},635:function(e,n,t){t.d(n,{Ny:function(){return c},bz:function(){return u},gQ:function(){return i},pI:function(){return o},y:function(){return s}});var a=t(243),r="1676e9bd6d1e52f74048e3da15b70e63";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){return a.Z.get("/trending/all/day?api_key=".concat(r))},c=function(e){return a.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(r))},i=function(e){return a.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(r))},o=function(e){return a.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(r))},s=function(e){return a.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(r))}}}]);
//# sourceMappingURL=612.e0c86e77.chunk.js.map