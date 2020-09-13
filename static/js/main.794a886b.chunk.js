(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(79)},76:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=a(16),s=a(18),o=a(45),u=a(48),m=a(3),E=[{name:"Popular",label:"popular",icon:"fas fa-heart"},{name:"Top Rated",label:"top_rated",icon:"fas fa-chart-line"},{name:"Upcoming",label:"upcoming",icon:"fas fa-table"}],d="/movies",f="/film-details",p="/",_="/cast",g="/actor",h="/Movie-app-build-version",b="https://image.tmdb.org/t/p/w342/",v={GET_GENRES_REQUEST:"GET_GENRES_REQUEST",GET_GENRES_SUCCESS:"GET_GENRES_SUCCESS",GET_GENRES_ERROR:"GET_GENRES_ERROR",CHANGE_ACTIVE_GENRE:"CHANGE_ACTIVE_GENRE"},O={genres:[],filmGenres:E,active:E[0].label,loading:!1,error:!1},S=a(19),j={GET_FILMS_REQUEST:"GET_FILMS_REQUEST",GET_FILM_SUCCESS:"GET_FILM_SUCCESS",GET_FILM_ERROR:"GET_FILM_ERROR",GET_MORE_FILM_REQUEST:"GET_MORE_FILM_REQUEST",GET_MORE_FILM_SUCCESS:"GET_MORE_FILM_SUCCESS",GET_TOTAL_FILMS_PAGES:"GET_TOTAL_FILMS_PAGES",SET_CURRENT_PAGE:"SET_CURRENT_PAGE",SET_SEARCH_STRING:"SET_SEARCH_STRING",GET_FILM_DETAILS_REQUEST:"GET_FILM_DETAILS_REQUEST",GET_FILM_DETAILS_SUCCESS:"GET_FILM_DETAILS_SUCCESS",GET_FILM_DETAILS_ERROR:"GET_FILM_DETAILS_ERROR"},T={films:[],filmDetails:{loading:!1,error:!1,details:null},loading:!1,loadingMoreFilms:!1,error:!1,currentPage:0,totalPages:0,searchString:""},G=Object(s.combineReducers)({genre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GET_GENRES_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case v.GET_GENRES_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,genres:t.payload});case v.GET_GENRES_ERROR:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!0});case v.CHANGE_ACTIVE_GENRE:return Object(m.a)(Object(m.a)({},e),{},{active:t.payload});default:return e}},films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.GET_FILMS_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1});case j.GET_FILM_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,films:t.payload.data,totalPages:t.payload.totalPages});case j.GET_MORE_FILM_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{loadingMoreFilms:!0});case j.GET_MORE_FILM_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{loadingMoreFilms:!1,films:[].concat(Object(S.a)(e.films),Object(S.a)(t.payload))});case j.GET_TOTAL_FILMS_PAGES:return Object(m.a)(Object(m.a)({},e),{},{totalPages:t.payload});case j.SET_CURRENT_PAGE:return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.payload});case j.GET_FILM_ERROR:return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!0});case j.SET_SEARCH_STRING:return Object(m.a)(Object(m.a)({},e),{},{searchString:t.payload});case j.GET_FILM_DETAILS_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{filmDetails:Object(m.a)(Object(m.a)({},e.filmDetails),{},{loading:!0})});case j.GET_FILM_DETAILS_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{filmDetails:Object(m.a)(Object(m.a)({},e.filmDetails),{},{loading:!1,details:t.payload})});case j.GET_FILM_DETAILS_ERROR:return Object(m.a)(Object(m.a)({},e),{},{filmDetails:Object(m.a)(Object(m.a)({},e.filmDetails),{},{loading:!1,error:!0})});default:return e}}}),y=a(7),R=a.n(y),N=a(6),w=a(14),F=a(15),C=function(){function e(){Object(w.a)(this,e)}return Object(F.a)(e,null,[{key:"addIconField",value:function(e){return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{icon:"fas fa-dot-circle",label:e.name})}))}}]),e}(),L=function(){function e(){Object(w.a)(this,e)}return Object(F.a)(e,null,[{key:"changeKeyName",value:function(e){return e.map(this.changeValues)}},{key:"changeValues",value:function(e){return{genreIds:e.genre_ids,id:e.id,overview:e.overview,title:e.title,adult:e.adult,posterPath:e.poster_path,originalLanguage:e.original_language,voteAverage:e.vote_average,releaseDate:e.release_date}}}]),e}(),I=function(){function e(){Object(w.a)(this,e)}return Object(F.a)(e,null,[{key:"changeValuesToFilmDetails",value:function(e){return{id:e.id,overview:e.overview,title:e.title,adult:e.adult,posterPath:e.poster_path,originalLanguage:e.original_language,voteAverage:e.vote_average,releaseDate:e.release_date,homepage:e.homepage,runtime:e.runtime,tagline:e.tagline,voteCount:e.vote_count,genres:C.addIconField(e.genres)}}}]),e}(),M=function(e){return{type:j.SET_CURRENT_PAGE,payload:e}},k=function(){return{type:j.GET_FILM_ERROR}},x=a(46),D=a.n(x),A=new(function(){function e(t,a){Object(w.a)(this,e),this.api=D.a.create({baseURL:t,params:{api_key:a},timeout:9e4,headers:{"X-Custom-Header":"foobar"},withCredentials:!1}),this.token=a,this.getGenres=this.getGenres.bind(this),this.getFilms=this.getFilms.bind(this),this.getFilmDetails=this.getFilmDetails.bind(this),this.getRecommendations=this.getRecommendations.bind(this),this.getFilmCast=this.getFilmCast.bind(this),this.getPersonDetails=this.getPersonDetails.bind(this),this.discover=this.discover.bind(this)}return Object(F.a)(e,[{key:"getGenres",value:function(){return this.api.get("genre/movie/list",{params:{api_key:this.token}})}},{key:"getFilms",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.api.get("movie/".concat(e),{params:{api_key:this.token,language:"en-US",page:t}})}},{key:"getFilmDetails",value:function(e){return this.api.get("movie/".concat(e),{params:{api_key:this.token}})}},{key:"getRecommendations",value:function(e){return this.api.get("movie/".concat(e,"/recommendations"),{params:{api_key:this.token}})}},{key:"getFilmCast",value:function(e){return this.api.get("movie/".concat(e,"/credits"),{params:{api_key:this.token}})}},{key:"getPersonDetails",value:function(e){return this.api.get("person/".concat(e),{params:{api_key:this.token}})}},{key:"discover",value:function(e){return this.api.get("discover/movie",{params:Object(m.a)({api_key:this.token},e)})}}]),e}())("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3","f3dfa7a0f96b31113bbc972260285be3"),P=R.a.mark(Q),U=R.a.mark(Y);function Q(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N.b)(A.getGenres);case 3:return e=t.sent,t.next=6,Object(N.c)((a=e.data.genres,{type:v.GET_GENRES_SUCCESS,payload:C.addIconField(a)}));case 6:return t.next=8,Object(N.c)(M(1));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(N.c)({type:v.GET_GENRES_ERROR});case 14:case"end":return t.stop()}var a}),P,null,[[0,10]])}function Y(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(v.GET_GENRES_REQUEST,Q);case 2:case"end":return e.stop()}}),U)}var V=R.a.mark(X),H=R.a.mark(q),B=R.a.mark(z),K=R.a.mark(Z),W=R.a.mark($),J=R.a.mark(ee);function X(e){var t,a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.payload,n.prev=1,"string"!==typeof t.type){n.next=8;break}return n.next=5,Object(N.b)(A.getFilms,t.type,t.page);case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,Object(N.b)(A.discover,{with_genres:t.type,page:t.page});case 10:n.t0=n.sent;case 11:return a=n.t0,n.next=14,Object(N.c)(M(a.data.page));case 14:return n.next=16,Object(N.c)((r=a.data.results,{type:j.GET_MORE_FILM_SUCCESS,payload:L.changeKeyName(r)}));case 16:n.next=22;break;case 18:return n.prev=18,n.t1=n.catch(1),n.next=22,Object(N.c)(k());case 22:case"end":return n.stop()}var r}),V,null,[[1,18]])}function q(e){var t,a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"string"!==typeof(t=e.payload)){n.next=8;break}return n.next=5,Object(N.b)(A.getFilms,t);case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,Object(N.b)(A.discover,{with_genres:t});case 10:n.t0=n.sent;case 11:return a=n.t0,n.next=14,Object(N.c)(M(a.data.page));case 14:return n.next=16,Object(N.c)((r=a.data.results,c=a.data.total_pages,{type:j.GET_FILM_SUCCESS,payload:{data:L.changeKeyName(r),totalPages:c}}));case 16:n.next=23;break;case 18:return n.prev=18,n.t1=n.catch(0),n.next=22,Object(N.c)(k());case 22:throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0444\u0438\u043b\u044c\u043c\u043e\u0432");case 23:case"end":return n.stop()}var r,c}),H,null,[[0,18]])}function z(e){var t;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(N.b)(A.getFilmDetails,Number(e.payload));case 3:return t=a.sent,a.next=6,Object(N.c)((n=t.data,{type:j.GET_FILM_DETAILS_SUCCESS,payload:I.changeValuesToFilmDetails(n)}));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(N.c)({type:j.GET_FILM_DETAILS_ERROR});case 12:throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0438\u043b\u044c\u043c\u0435");case 13:case"end":return a.stop()}var n}),B,null,[[0,8]])}function Z(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(j.GET_FILMS_REQUEST,q);case 2:case"end":return e.stop()}}),K)}function $(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(j.GET_MORE_FILM_REQUEST,X);case 2:case"end":return e.stop()}}),W)}function ee(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(j.GET_FILM_DETAILS_REQUEST,z);case 2:case"end":return e.stop()}}),J)}var te=R.a.mark(ae);function ae(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([Y(),Z(),$(),ee()]);case 2:case"end":return e.stop()}}),te)}var ne=Object(u.a)(),re=Object(s.createStore)(G,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(ne)));ne.run(ae);var ce=re,le=(a(76),a(8)),ie=function(e){return r.a.createElement("div",{className:"".concat(e.isWrapperFull?"spinner-wrapper":e.wrapperClass)},r.a.createElement("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))};ie.defaultProps={isWrapperFull:!0,wrapperClass:""};var se=ie,oe=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("div",{className:"error__wrapper"},r.a.createElement("p",null,"\u0423\u043f\u0441...\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),r.a.createElement("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0447\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435")))},ue=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,e.activeGenre),r.a.createElement("form",{className:"search-form"},r.a.createElement("div",null,r.a.createElement("span",{className:"search-form__icon fas fa-search"}),r.a.createElement("input",{className:"search-form__input",type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0444\u0438\u043b\u044c\u043c...",onChange:function(t){e.changeSearchString(t.target.value)}}))))},me=a(25),Ee=Object(me.a)((function(e){return[].concat(Object(S.a)(e.genre.genres),Object(S.a)(e.genre.filmGenres))}),(function(e){return e.genre.active}),(function(e,t){var a=e.findIndex((function(e){return e.label===t}));return e[a].name})),de=Object(i.b)((function(e){return{activeGenre:Ee(e)}}),(function(e){return{changeSearchString:function(t){return e(function(e){return{type:j.SET_SEARCH_STRING,payload:e}}(t))}}}))(ue),fe=a(20),pe=a(21),_e=a.n(pe),ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=a?_e()():_e()(t,"YYYY"),r=_e()(e,"YYYY");return n.diff(r,"years")},he=function(e){var t=e.vote,a=function(e){var t;return e>0&&e<=5&&(t="low"),e>5&&e<=8&&(t="medium"),e>8&&(t="high"),"film-card__rating--".concat(t,"-rate")}(t);return r.a.createElement(fe.a,{to:"".concat(f,"/").concat(e.id)},r.a.createElement("div",{className:"film-card"},e.poster?r.a.createElement("img",{className:"film-card__image",src:"".concat(b).concat(e.poster),alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}):r.a.createElement("div",{className:"film-card__no-image"},e.name),0!==t&&r.a.createElement("span",{className:"film-card__rating ".concat(a)},t)))};he.defaultProps={name:""};var be=he;var ve=function(e){return e.map((function(e){var t={};return e.posterPath||(t={name:e.title}),r.a.createElement(be,Object.assign({key:e.id,poster:e.posterPath,vote:e.voteAverage,id:e.id},t))}))},Oe=function(e){var t=e.loading,a=e.error,c=function(){if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!e.loadingMoreFilms&&e.currentPage<=e.totalPage){var t=e.currentPage+1;e.loadMoreFilms(e.currentGenre,t)}};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}}),[e]),Object(n.useEffect)((function(){e.loadFilms(e.currentGenre),window.removeEventListener("scroll",c)}),[e.currentGenre]),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(se,null),a&&r.a.createElement(oe,null),r.a.createElement(de,null),r.a.createElement("div",{className:"film-list"},!t&&ve(e.films)),e.loadingMoreFilms&&r.a.createElement(se,{isWrapperFull:!1,wrapperClass:"ta-c"}))},Se=Object(me.a)((function(e){return e.films.films}),(function(e){return e.films.searchString}),(function(e,t){return e.filter((function(e){return e.title.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))})),je=Object(me.a)((function(e){return[].concat(Object(S.a)(e.genre.filmGenres),Object(S.a)(e.genre.genres))}),(function(e){return e.genre.active}),(function(e,t){var a=e.findIndex((function(e){return e.label===t}));return e[a].id?e[a].id:e[a].label})),Te=Object(i.b)((function(e){return{loading:e.films.loading,loadingMoreFilms:e.films.loadingMoreFilms,error:e.films.error,currentGenre:je(e),currentPage:e.films.currentPage,totalPage:e.films.totalPages,films:Se(e)}}),(function(e){return{loadFilms:function(t){return e(function(e){return{type:j.GET_FILMS_REQUEST,payload:e}}(t))},loadMoreFilms:function(t,a){return e(function(e,t){return{type:j.GET_MORE_FILM_REQUEST,payload:{type:e,page:t}}}(t,a))}}}))(Oe),Ge=a(17),ye=a(10),Re=Object(ye.a)(),Ne=function(e){return r.a.createElement("li",{className:"menu-list__item ".concat(e.active===e.item.label?"menu-list__item--active":""),onClick:function(){e.active!==e.item.label&&(e.changeActiveGenre(e.item.label),e.refreshCurrentPage(),Re.push(d))}},r.a.createElement("span",{className:"menu-list__item-icon ".concat(e.item.icon)}),e.item.name)},we=function(e){return r.a.createElement("ul",{className:"menu-list"},e.items.map((function(t){return r.a.createElement(Ne,{key:t.id?t.id:t.label,item:t,active:e.noActive?"":e.activeGenre,changeActiveGenre:e.changeActiveGenre,refreshCurrentPage:e.refreshCurrentPage})})))};we.defaultProps={noActive:!1};var Fe=we,Ce=Object(i.b)((function(e){return{activeGenre:e.genre.active}}),(function(e){return{changeActiveGenre:function(t){return e(function(e){return{type:v.CHANGE_ACTIVE_GENRE,payload:e}}(t))},refreshCurrentPage:function(){return e(M(0))}}}))(Fe),Le=function(e){return r.a.createElement("div",{className:"rating ".concat(e.containerClass)},r.a.createElement("i",{className:"fas fa-star rating__start"}),r.a.createElement("div",{className:"rating__inner"},r.a.createElement("div",null,r.a.createElement("strong",null,e.voteAverage)," ","/ 10"),r.a.createElement("span",{className:"rating__vote-count"},e.voteCount)))},Ie=function(e){var t;return"number"===typeof e.itemsToShow&&(t=e.cast.slice(0,e.itemsToShow)),"string"===typeof e.itemsToShow&&(t=e.cast),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"cast"},t.map((function(e){return r.a.createElement("li",{className:"cast__item",key:e.id},r.a.createElement(fe.a,{to:"".concat(g,"/").concat(e.id),className:"cast__actor"},r.a.createElement("img",{className:"cast__image",src:"".concat(b).concat(e.profilePath),alt:""})),r.a.createElement("div",{className:"cast__wrapper"},r.a.createElement("p",null,r.a.createElement(fe.a,{to:"".concat(g,"/").concat(e.id),className:"cast__name"},e.name)),r.a.createElement("p",null,e.character)))}))),"all"!==e.itemsToShow&&r.a.createElement(fe.a,{to:"".concat(_,"/").concat(e.id)},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441\u044c \u0430\u043a\u0442\u0435\u0440\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432"))};Ie.defaultProps={id:null};var Me=Ie,ke=function(){function e(){Object(w.a)(this,e)}return Object(F.a)(e,null,[{key:"adaptValues",value:function(e){var t=this;return e.map((function(e){return t.adaptValue(e)}))}},{key:"adaptValue",value:function(e){return{character:e.character,id:e.id,name:e.name,profilePath:e.profile_path}}}]),e}(),xe=function(e){var t=Object(n.useState)([]),a=Object(Ge.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),s=Object(Ge.a)(i,2),o=s[0],u=s[1],m=Object(n.useState)(!1),E=Object(Ge.a)(m,2),d=E[0],f=E[1],p=Object(n.useState)([]),_=Object(Ge.a)(p,2),g=_[0],h=_[1],b=e.match.params.id,v=e.loading,O=e.error,S=e.details,j=r.a.useCallback((function(){u(!0),A.getRecommendations(b).then((function(e){var t=L.changeKeyName(e.data.results.slice(0,12));l(t),u(!1)}))}),[b]),T=r.a.useCallback((function(){f(!0),A.getFilmCast(b).then((function(e){h(ke.adaptValues(e.data.cast)),f(!1)})).catch((function(){f(!1)}))}),[b]);Object(n.useEffect)((function(){e.loadDetails(b),j(),T()}),[b]);var G=v||d;return r.a.createElement(r.a.Fragment,null,O&&r.a.createElement(oe,null),G&&r.a.createElement(se,null),S&&!G&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"film-details"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(S.posterPath?"":"film-details__poster")},S.posterPath?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342/".concat(S.posterPath),alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}):r.a.createElement(r.a.Fragment,null,"No poster :(")),r.a.createElement("div",{className:"film-details__wrapper"},r.a.createElement("div",{className:"film-details__header"},r.a.createElement("div",{className:"film-details__header-inner"},r.a.createElement("div",null,r.a.createElement("h1",{className:"film-details__header-text"},S.title),r.a.createElement("p",{className:"film-details__header-information"},0!==S.runtime?"".concat(S.runtime," min. /"):null," ",new Date(e.details.releaseDate).getFullYear())),r.a.createElement(Le,{containerClass:"film-details__rating",voteAverage:S.voteAverage,voteCount:S.voteCount})),r.a.createElement("h2",{className:"film-details__header-subtext"},S.tagline)),r.a.createElement("div",{className:"film-details__genres"},r.a.createElement("h3",null,"\u0416\u0430\u043d\u0440\u044b"),r.a.createElement(Ce,{items:S.genres,noActive:!0})),r.a.createElement("div",{className:"film-details__description"},r.a.createElement("h3",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("p",null,S.overview)),r.a.createElement("div",{className:"film-details__description"},r.a.createElement("h3",null,"\u0412 \u0440\u043e\u043b\u044f\u0445: "),r.a.createElement(Me,{cast:g,itemsToShow:6,id:b})),r.a.createElement("div",null,r.a.createElement("button",{className:"film-details__button",type:"button",onClick:function(){Re.goBack()}},"\u041d\u0430\u0437\u0430\u0434"))))),r.a.createElement("div",null,r.a.createElement("h2",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: "),r.a.createElement("div",{className:"film-list film-list--small"},o&&r.a.createElement(se,null),!o&&ve(c)))))},De=Object(i.b)((function(e){return{details:e.films.filmDetails.details,loading:e.films.filmDetails.loading,error:e.films.filmDetails.error}}),(function(e){return{loadDetails:function(t){return e(function(e){return{type:j.GET_FILM_DETAILS_REQUEST,payload:e}}(t))}}}))(xe),Ae=function(e){var t=e.match.params.id,a=Object(n.useState)(!1),c=Object(Ge.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)([]),o=Object(Ge.a)(s,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){i(!0),A.getFilmCast(t).then((function(e){m(ke.adaptValues(e.data.cast)),i(!1)}))}),[]),r.a.createElement("div",{className:"actors"},r.a.createElement("div",{className:"actors__header"},r.a.createElement("h2",null,"\u0421\u043e\u0441\u0442\u0430\u0432"),r.a.createElement("button",{type:"button",className:"actors__back-button",onClick:function(){Re.goBack()}},r.a.createElement("i",{className:"fas fa-arrow-left actors__icon"}))),l&&r.a.createElement(se,null),!l&&r.a.createElement(Me,{cast:u,itemsToShow:"all"}))},Pe=a(47),Ue=function(){function e(){Object(w.a)(this,e)}return Object(F.a)(e,null,[{key:"adaptValues",value:function(e){return{birthday:e.birthday,name:e.name,placeOfBirth:e.place_of_birth,profilePath:e.profile_path,deathDay:e.deathday,biography:e.biography}}}]),e}(),Qe=function(e){var t=e.match.params.id,a=Object(n.useState)(!1),c=Object(Ge.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(),o=Object(Ge.a)(s,2),u=o[0],E=o[1],d=Object(n.useState)(!1),f=Object(Ge.a)(d,2),p=f[0],_=f[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(Pe.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,A.getPersonDetails(t).then((function(e){E((function(t){return Object(m.a)(Object(m.a)({},t),Ue.adaptValues(e.data))}))}));case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{e(),A.discover({with_cast:t,sort_by:"release_date.desc"}).then((function(e){E((function(t){return Object(m.a)(Object(m.a)({},t),{},{films:L.changeKeyName(e.data.results)})})),_(!0)}))}catch(a){throw new Error}}),[]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(se,null),!l&&u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"actor-details"},r.a.createElement("div",{className:"actor-details__image-wrapper"},u.profilePath?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342/".concat(u.profilePath),alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0430\u043a\u0442\u0435\u0440\u0430"}):r.a.createElement("p",null,"No image")),r.a.createElement("div",{className:"actor-details__information"},r.a.createElement("h2",{className:"actor-details__name"},u.name),u.birthday&&r.a.createElement("div",null,r.a.createElement("h3",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),r.a.createElement("p",null,_e()(u.birthday).format("DD MMMM YYYY"),u.deathDay?null:" (".concat(ge(u.birthday),")"))),u.deathDay&&r.a.createElement("div",null,r.a.createElement("h3",null,"\u0414\u0430\u0442\u0430 \u0441\u043c\u0435\u0440\u0442\u0438"),r.a.createElement("p",null,_e()(u.deathDay).format("DD MMMM YYYY")," (".concat(ge(u.birthday,u.deathDay,!1),")"))),u.biography&&r.a.createElement("div",null,r.a.createElement("h3",null,"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"),r.a.createElement("p",null,u.biography)))),r.a.createElement("div",null,r.a.createElement("h2",null,"\u0424\u0438\u043b\u044c\u043c\u043e\u0433\u0440\u0430\u0444\u0438\u044f: "),r.a.createElement("div",{className:"film-list film-list--small"},p&&ve(u.films)))))},Ye=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"))},Ve=function(){return r.a.createElement(le.d,null,r.a.createElement(le.b,{path:d,exact:!0,component:Te}),r.a.createElement(le.b,{path:"".concat(_,"/:id?"),exact:!0,component:Ae}),r.a.createElement(le.b,{path:"".concat(g,"/:id?"),exact:!0,component:Qe}),r.a.createElement(le.b,{path:"".concat(f,"/:id?"),component:De}),r.a.createElement(le.b,{path:p,exact:!0},r.a.createElement(le.a,{to:d})),r.a.createElement(le.b,{path:h},r.a.createElement(le.a,{to:d})),r.a.createElement(le.b,{component:Ye}))},He=function(){return r.a.createElement("div",{className:"main"},r.a.createElement(Ve,null))},Be=function(e){return Object(n.useEffect)((function(){e.loadGenres()}),[]),r.a.createElement("aside",{className:"side-menu"},r.a.createElement("div",null,r.a.createElement("img",{width:100,src:"image/watch-movie.svg",alt:"\u041b\u043e\u0433\u043e"})),e.isLoading&&r.a.createElement(se,null),!e.isLoading&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"\u0424\u0438\u043b\u044c\u043c\u044b"),r.a.createElement(Ce,{items:e.filmGenres})),r.a.createElement("div",null,r.a.createElement("h3",null,"\u0416\u0430\u043d\u0440\u044b"),r.a.createElement(Ce,{items:e.genres}))))},Ke=Object(i.b)((function(e){return{isLoading:e.genre.loading,isError:e.genre.error,genres:e.genre.genres,filmGenres:e.genre.filmGenres}}),(function(e){return{loadGenres:function(){return e({type:v.GET_GENRES_REQUEST})}}}))(Be),We=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(Ke,null),r.a.createElement(He,null))};l.a.render(r.a.createElement(i.a,{store:ce},r.a.createElement(le.c,{history:Re},r.a.createElement(We,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.794a886b.chunk.js.map