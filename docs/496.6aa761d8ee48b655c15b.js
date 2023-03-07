"use strict";(self.webpackChunkcylixguide=self.webpackChunkcylixguide||[]).push([[496],{3622:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var r=s(8081),i=s.n(r),a=s(3645),n=s.n(a)()(i());n.push([t.id,'.ugc_detail-panel {\r\n\t--edge-pad: 0.75rem;\r\n\tpadding-bottom: 5rem;\r\n\t--rarity: #000\r\n}\n.ugc_detail-panel.is343 {\r\n\t\t--rarity: var(--theme-activate);\r\n\t}\n.ugc_detail-panel header.asset-title {\r\n\t\tfont-size: 1.5rem;\r\n\t\tpadding: 1rem 2rem;\r\n\t\tposition: relative\r\n\t}\n.ugc_detail-panel header.asset-title::before {\r\n\t\t\tcontent: "";\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tz-index: -1;\r\n\t\t\tdisplay: block;\r\n\t\t\tpointer-events: none;\r\n\t\t\tbackground: linear-gradient(-4deg, var(--rarity), rgba(0,0,0,0) 60%);\r\n\t\t\t-webkit-mask: var(--noise), linear-gradient(-4deg, #000 30%, transparent 55%);\r\n\t\t\t        mask: var(--noise), linear-gradient(-4deg, #000 30%, transparent 55%);\r\n\t\t}\n.ugc_detail-panel .img-viewer_wrapper {\r\n\t\tbackground-color: rgba(0,0,0,0.25)\r\n\t}\n.ugc_detail-panel .img-viewer_wrapper .img-viewer {\r\n\t\t\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\t\t\tmax-width: 100%;\r\n\t\t\theight: auto;\r\n\t\t\t-o-object-fit: contain;\r\n\t\t\t   object-fit: contain;\r\n\t\t\tbackground-color: rgba(0,0,0,0.5);\r\n\t\t\ttransition: opacity var(--time-state) linear;\r\n\t\t\topacity: 0\r\n\t\t}\n.ugc_detail-panel .img-viewer_wrapper .img-viewer.broken {\r\n\t\t\t\t/* display: none; */\r\n\t\t\t}\n.ugc_detail-panel .quick-stats {\r\n\t\tmax-width: 100%;\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: space-evenly;\r\n\t\tgap: 0.5rem;\r\n\t\tpadding: 1rem var(--edge-pad)\r\n\t}\n.ugc_detail-panel .quick-stats li {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column-reverse;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t}\n.ugc_detail-panel .overview .description {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding: 1.5rem var(--edge-pad);\r\n\t\t\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25);\r\n\t\t\tmargin-bottom: 3rem\r\n\t\t}\n.ugc_detail-panel .overview .description .date-modified {\r\n\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\topacity: 0.66;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: row;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\n.ugc_detail-panel .overview .description .text {\r\n\t\t\t\tfont-size: 1.2rem;\r\n\t\t\t\tfont-style: italic;\r\n\t\t\t}\n.ugc_detail-panel .overview .description::before, .ugc_detail-panel .overview .description::after {\r\n\t\t\t\tcontent: "";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tz-index: -1;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tpointer-events: none;\r\n\t\t\t}\n.ugc_detail-panel .overview .description::before {\r\n\t\t\t\topacity: 0.66;\r\n\t\t\t\tbackground: linear-gradient(30deg, var(--bg3), rgba(0,0,0,0) 80%);\r\n\t\t\t\t-webkit-mask: var(--noise), linear-gradient(30deg, #000 10%, transparent 75%);\r\n\t\t\t\t        mask: var(--noise), linear-gradient(30deg, #000 10%, transparent 75%);\r\n\t\t\t}\n.ugc_detail-panel .overview .tags {\r\n\t\t\tmax-width: 100%;\r\n\t\t\tlist-style-type: none;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\tgap: 0.25rem;\r\n\t\t\tpadding: 0 var(--edge-pad) 1rem;\r\n\t\t\tfont-size: 0.8rem\r\n\t\t}\n.ugc_detail-panel .overview .tags li {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tbackground-color: hsla(var(--theme-interact-hsl), 0.1);\r\n\t\t\t\tpadding: 0.25em 0.75em;\r\n\t\t\t\tborder-radius: 1em;\r\n\t\t\t\tbox-shadow: 0 0.25rem 2rem rgba(0,0,0,0.5);\r\n\t\t\t}\n.ugc_detail-panel .credits {\r\n\t\tmargin: 1rem var(--edge-pad);\r\n\t}\n.ugc_detail-panel .links {\r\n\t\tmargin: 1rem var(--edge-pad);\r\n\t}\n.ugc_detail-panel .details {\r\n\t\tmargin: 1rem var(--edge-pad)\r\n\t}\n.ugc_detail-panel .details .details-list {\r\n\t\t\tpadding: 1rem var(--edge-pad);\r\n\t\t\tlist-style-type: none;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\tjustify-content: flex-start\r\n\t\t}\n.ugc_detail-panel .details .details-list .details-list-item {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: row;\r\n\t\t\t\talign-items: center\r\n\t\t\t}\n.ugc_detail-panel .details .details-list .details-list-item label {\r\n\t\t\t\t\tmargin-right: 0.5rem;\r\n\t\t\t\t}',""]);const l=n},3924:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var r=s(8081),i=s.n(r),a=s(3645),n=s.n(a)()(i());n.push([t.id,'.ugc_results_wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: 100%\r\n}\r\n\r\n.ugc_results_wrapper .ugc_results {\r\n\t\tlist-style-type: none;\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));\r\n\t\tgrid-column-gap: 1.5rem;\r\n\t\t-moz-column-gap: 1.5rem;\r\n\t\t     column-gap: 1.5rem;\r\n\t\tpadding: 0.5rem;\r\n\t\tjustify-items: center;\r\n\t\talign-items: center;\r\n\t\talign-content: center;\r\n\t\twidth: 100%;\r\n\t\tmax-width: 70rem;\r\n\t}\r\n\r\n.ugc_item {\r\n\t--length: 10rem;\r\n\t--lengthMax: 50vh;\r\n\t--width: 15rem;\r\n\t--widthMax: 95vw;\r\n\twidth: var(--width);\r\n\theight: var(--length);\r\n\tmax-width: var(--widthMax);\r\n\tmax-height: var(--lengthMax);\r\n\tpadding: 0;\r\n\tmargin: 0.8rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tbackground-color: rgba(0,0,0,0.25);\r\n\tfont-weight: bold;\r\n\ttext-shadow: -0.1rem 0.1rem 0.1rem #000, 0.1rem 0.1rem 0.1rem #000;\r\n\t/* animation: fade-in var(--time-state) linear; */\r\n\tposition: relative;\r\n\tz-index: 0;\r\n\t--rarity: #FFF\r\n}\r\n\r\n.ugc_item::before {\r\n\t\tdisplay: block;\r\n\t\tcontent: "";\r\n\t\t--padding: -0.5em;\r\n\t\ttop: var(--padding);\r\n\t\tleft: var(--padding);\r\n\t\tright: var(--padding);\r\n\t\tbottom: var(--padding);\r\n\t\tborder-radius: var(--theme-border-radius);\r\n\t\tposition: absolute;\r\n\t\tborder: none;\r\n\t\tborder-width: 0.18em;\r\n\t\tborder-style: solid;\r\n\t\t-o-border-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\thsla(var(--theme-interact-hsl), 1),\r\n\t\t\thsla(var(--theme-interact-hsl), 1) 7%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 8%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 12%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 13%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 87%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 88%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 92%,\r\n\t\t\tvar(--rarity) 93%,\r\n\t\t\tvar(--rarity)\r\n\t\t) 1 100%;\r\n\t\t   border-image: linear-gradient(\r\n\t\t\tto bottom,\r\n\t\t\thsla(var(--theme-interact-hsl), 1),\r\n\t\t\thsla(var(--theme-interact-hsl), 1) 7%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 8%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 12%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 13%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0.25) 87%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 88%,\r\n\t\t\thsla(var(--theme-interact-hsl), 0) 92%,\r\n\t\t\tvar(--rarity) 93%,\r\n\t\t\tvar(--rarity)\r\n\t\t) 1 100%;\r\n\t\tborder-image-slice: 1;\r\n\t\topacity: 0.4;\r\n\t\ttransition: opacity var(--time-state) linear,\r\n\t\t\tborder-width var(--time-active) linear;\r\n\t}\r\n\r\n.ugc_item:hover {\r\n    background-color: rgba(255,255,255,1);\r\n\t\tcolor: #000;\r\n\t\ttext-shadow: 0 0 1rem #fff, 0 0 0.5rem #fff\r\n\t}\r\n\r\n.ugc_item:hover::before {\r\n\t\t\tborder-width: 0.25em;\r\n\t\t}\r\n\r\n.ugc_item.is343 {\r\n\t\t--rarity: var(--theme-activate);\r\n\t}\r\n\r\n.ugc_item .thumbnail {\r\n\t\theight: 80%;\r\n\t\twidth: 100%;\r\n\t\ttop: 0;\r\n\t\tposition: absolute;\r\n\t\tpointer-events: none;\r\n\t\tbackground-size: cover;\r\n\t\tbackground-repeat: no-repeat;\r\n\t\tbackground-position: center center;\r\n\t\tbackground-color: rgba(0,0,0,0.5);\r\n\t\ttransition: opacity var(--time-state) linear;\r\n\t\topacity: 0;\r\n\t\tz-index: 0;\r\n\t}\r\n\r\n.ugc_item .titles {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t\theight: 20%;\r\n\t\tmax-width: 100%;\r\n\t\tz-index: 1;\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\tfont-size: 0.9em;\r\n\t\ttop: 80%\r\n\t}\r\n\r\n.ugc_item .titles .name {\r\n\t\t\toverflow: hidden;\r\n\t\t\tword-wrap: break-word;\r\n\t\t\tword-wrap: break-word;\r\n\t\t\ttext-overflow: ellipsis;\r\n\t\t\twhite-space: nowrap; \r\n\t\t\tpadding: 0 0.25rem;\r\n\t\t}\r\n\r\n.ugc_item .titles .icon-masked {\r\n\t\t\topacity: 0.5;\r\n\t\t}\r\n\r\n.ugc_item .badges {\r\n\t\tdisplay: flex;\r\n\t\tposition: absolute;\r\n\t\ttop: 0.25em;\r\n\t\tright: 0.5em;\r\n\t\topacity: 0.5\r\n\t}\r\n\r\n.ugc_item .badges .badge-343i {\r\n\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tflex-wrap: wrap;\r\n\t\talign-items: center;\r\n\t\tjustify-content: flex-start;\r\n\t\tpadding: 0.5rem;\r\n\t\tmargin-bottom: 2rem;\r\n\t\tbox-shadow: 0 1rem 1rem rgba(0,0,0,0.25)\r\n\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .ugc_search_submit {\r\n\t\t\tfont-size: 1.25em;\r\n\t\t\tpadding: 0.5em;\r\n\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .ugc_search-term_wrapper {\r\n\t\t\tmargin-top: 0.5rem;\r\n\t\t\tmin-width: 16ch;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\talign-items: center;\r\n\t\t\talign-content: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tposition: relative;\r\n\t\t\tborder: 0;\r\n\t\t\tborder-bottom: 0.2rem solid hsla(var(--theme-text-hsl), 0.25);\r\n\t\t\tbackground-color: rgba(0,0,0,0.15)\r\n\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .ugc_search-term_wrapper input {\r\n\t\t\t\tpadding: 0.5em;\r\n\t\t\t\tmargin: 0 0.25rem;\r\n\t\t\t\tborder: 0;\r\n\t\t\t\tbackground-color: transparent;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tcolor: var(--theme-text);\r\n\t\t\t\tfont-size: 1.25em;\r\n\t\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .option {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tpadding: 0 0.5rem\r\n\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .option button {\r\n\t\t\t\theight: 3rem;\r\n\t\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .option input[type=text] {\r\n\t\t\t\tborder: 0;\r\n\t\t\t\tborder-bottom: 0.2rem solid hsla(var(--theme-text-hsl), 0.25);\r\n\t\t\t\tbackground-color: rgba(0,0,0,0.15);\r\n\t\t\t\theight: 2rem;\r\n\t\t\t\tcolor: var(--theme-text);\r\n\t\t\t\tpadding: 0 0.5rem;\r\n\t\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .option-group {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row;\r\n\t\t\tflex-wrap: wrap\r\n\t\t}\r\n\r\n.ugc_search_wrapper .ugc_search-options .option-group .option {\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}',""]);const l=n},8167:(t,e,s)=>{var r=s(3379),i=s.n(r),a=s(7795),n=s.n(a),l=s(569),o=s.n(l),d=s(3565),c=s.n(d),h=s(9216),u=s.n(h),g=s(4589),p=s.n(g),m=s(3622),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u();var v=i()(m.default,f);if(!m.default.locals||t.hot.invalidate){var b=!m.default.locals,y=b?m:m.default.locals;t.hot.accept(3622,(e=>{m=s(3622),function(t,e,s){if(!t&&e||t&&!e)return!1;var r;for(r in t)if((!s||"default"!==r)&&t[r]!==e[r])return!1;for(r in e)if(!(s&&"default"===r||t[r]))return!1;return!0}(y,b?m:m.default.locals,b)?(y=b?m:m.default.locals,v(m.default)):t.hot.invalidate()}))}t.hot.dispose((function(){v()}));m.default&&m.default.locals&&m.default.locals},1606:(t,e,s)=>{var r=s(3379),i=s.n(r),a=s(7795),n=s.n(a),l=s(569),o=s.n(l),d=s(3565),c=s.n(d),h=s(9216),u=s.n(h),g=s(4589),p=s.n(g),m=s(3924),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=u();var v=i()(m.default,f);if(!m.default.locals||t.hot.invalidate){var b=!m.default.locals,y=b?m:m.default.locals;t.hot.accept(3924,(e=>{m=s(3924),function(t,e,s){if(!t&&e||t&&!e)return!1;var r;for(r in t)if((!s||"default"!==r)&&t[r]!==e[r])return!1;for(r in e)if(!(s&&"default"===r||t[r]))return!1;return!0}(y,b?m:m.default.locals,b)?(y=b?m:m.default.locals,v(m.default)):t.hot.invalidate()}))}t.hot.dispose((function(){v()}));m.default&&m.default.locals&&m.default.locals},1496:(t,e,s)=>{s.r(e),s.d(e,{Discovery:()=>u,discovery:()=>g,placeholderUGCResult:()=>h});var r=s(802),i=s(2165),a=s(7786),n=(s(6664),s(4136)),l=s(5959);s(8167);class o extends r.w{constructor(){super(),window.addEventListener("keydown",(t=>{t.defaultPrevented||!0===this.state.visible&&"Escape"===t.key&&(this.hide(),t.preventDefault())}),!0),i.u.on("hide-panel",(()=>this.hide()))}get defaultState(){return{visible:!1,asset:{}}}hide(){this.state.visible&&(this.setState({visible:!1}),history.pushState(null,"Halosets","#"),document.body.style.overflow="auto")}toggleVisibility(){this.setState({visible:!this.state.visible}),document.body.style.overflow="auto"}displayAsset(t,e){e?history.replaceState({path:`${t?.id}`},"Cylix Guide",`#${t.cylixURI}`):history.pushState({path:`${t?.id}`},"Cylix Guide",`#${t.cylixURI}`),this.scrollToTop(),this.state={...this.defaultState,asset:t,visible:!0},document.body.style.overflow="hidden",this.render()}scrollToTop(){const t=document.querySelector("#ugc_detail-panel_header");t&&t.scrollIntoView()}render(){if(!this.state.visible)return a.k9.bind(document.querySelector(".js--item-panel"))``;const t=this.state.asset;return t?a.k9.bind(document.querySelector(".js--item-panel"))`
			<div
				class="dbItemPanel_clickout"
				onclick=${()=>this.hide()}
			></div>
			<div class=${"dbItemPanel_wrapper ugc_detail-panel"+(t.is343?" is343":"")}>
				<header id="ugc_detail-panel_header" class="asset-title">
					<h2>${t.title}</h2>
				</header>
				<div class="img-viewer_wrapper">
					<img
						class=${"img-viewer"+(this.state.brokenImage?" broken":"")}
						style=${{opacity:this.state.loadedImage?1:0}}
						src=${this.state.brokenImage?this.defaultImage:t.mainImage}
						width="1280"
						height="720"
						onerror=${()=>this.setState({brokenImage:!0})}
						onload=${()=>this.setState({loadedImage:!0})}
					>
				</div>
				<div
					class="overview"
				>
					<ul class="quick-stats">
						<li>
							<span>Bookmarks</span>
							<span>${t.bookmarks.toLocaleString()}</span>
						</li>
						<li>
							<span>Plays</span>
							<span>${t.playsAllTime.toLocaleString()}</span>
						</li>
						<li>
							<span>Plays (Recent)</span>
							<span>${t.playsRecent.toLocaleString()}</span>
						</li>
						<li>
							<span>Likes</span>
							<span>${t.likes.toLocaleString()}</span>
						</li>
						<li>
							<span>Rating</span>
							<span>${t.averageRating}</span>
						</li>
					</ul>
					<div class="description">
						<span class="date-modified"><div class=${`icon-masked icon-ugc-${t.assetKindIndex}`}></div>Last Updated: ${t.dateModified.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}</span>
						<span class="text">${t.description}</span>
					</div>
					<ul class="tags">
						${t.tags.map((t=>`<li>${t}</li>`))}
					</ul>
					<div class="credits">
						<h3>Author</h3>
						<div class="author">...</div>
						<h3>Contributors</h3>
						<ul>
							${t.contributors.map(((t,e)=>`<li>Contributor ${e+1}</li>`))}
						</ul>
					</div>
				</div>
				<div class="links">
					<h3>Find & Bookmark</h3>
					<a href=${this.waypointLink}>Waypoint</a><br/>
					<a href=${this.xugcLink}>XUGC</a>
				</div>
				<div class="details">
					<h3>Details</h3>
					<ul class="details-list">
						<li class="details-list-item">
							<label>Type</label>
							<div class=${`icon-masked icon-ugc-${t.assetKindIndex}`}></div><span>${t.assetKind}</span>
						</li>
						<li class="details-list-item">
							<label>Date Created</label>
							<span>${t.dateCreated.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}</span>
						</li>
						<li class="details-list-item">
							<label>Date Published</label>
							<span>${t.dateCreated.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}</span>
						</li>
						<li class="details-list-item">
							<label>Date Modified</label>
							<span>${t.dateModified.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}</span>
						</li>
						<li class="details-list-item">
							<label>Copy Protected</label>
							<span>${t.isCopyProtected?"Yes":"No"}</span>
						</li>
						<li class="details-list-item">
							<label>Has Nodegraph</label>
							<span>${t.hasNodeGraph?"Yes":"No"}</span>
						</li>
						<li class="details-list-item">
							<label>Objects</label>
							<span>${t.objectCount.toLocaleString()}</span>
						</li>
						<li class="details-list-item">
							<label>Referenced Assets</label>
							<span></span>
						</li>
					</ul>
				</div>
			</div>
		`:void 0}get defaultImage(){return"https://hi.cylix.guide/ugc/images/default.jpg"}async getWaypointAsset(){try{const t=new URL(`/api/${this.state.asset.cylixURI}`,`https://${window.location.host.replace("beta.","")}`),e=await fetch(t,{headers:{Accept:"application/json"}});if(!e||!e.ok)throw console.error("[UGCDetailPanel.getWaypointAsset] Failed to fetch",e),new Error(e.status);const s=await e.json();console.log("res!",s)}catch(t){console.error("[UGCDetailPanel.getWaypointAsset]",t)}}get xugcLink(){const t=`/ugc/halo-infinite/${this.state.asset?.cylixUGCKind}/${this.state.asset?.id}?v=${this.state.asset?.version}`;return`${new URL(t,"https://xugc.halo.info")}`}get waypointLink(){return`${new URL(this.state.asset.waypointBrowserURI,"https://www.halowaypoint.com")}`}}const d=new o;var c=s(758);s(1606);const h=a.k9.wire()`
	<button
		class='ugc_item'
		title='Loading Result...'
	>
		<span>...</span>
	</button>
`;class u extends r.w{async init(){this.search=new p,this.manifest=new v,this.state.view=this.search,this.render(),this.search.submit()}get defaultState(){return{}}render(){return this.html`
		<div class="mica_viewer" id="discovery-parent">
			<header class="mica_header-strip">
				<h2>Discovery</h2>
				<div>
					${this.renderManifestButton()}
					${this.renderUgcButton()}
				</div>
			</header>
			<div class="main-content" id="discovery-content">
				${this.view}
			</div>
		</div>
		`}renderManifestButton(){return"Manifest"===this.state?.view.title?"":a.k9.wire(this,":manifestButton")`
			<button
				onclick=${()=>this.setState({view:this.manifest})}
			>
				Manifest
			</button>
		`}renderUgcButton(){return"Search"===this.state?.view.title?"":a.k9.wire(this,":manifestButton")`
			<button
				onclick=${()=>this.setState({view:this.search})}
			>
				UGC
			</button>
		`}get view(){return this.state.view?.render?.()??"..."}}const g=new class{get assetKinds(){return this._assetKindMap??=new Map([["Unknown","Unknown"],["Film","Film"],["Map","Map"],["Playlist","Playlist"],["Prefab","Prefab"],["TestAsset","Test Asset"],["UgcGameVariant","Game Variant"],["MapModePair","Map-Mode Pair"],["Project","Project"],["Manifest","Manifest"],["EngineGameVariant","Engine Game Variant"]])}get assetKindArray(){return this._assetKindArray??=[...this.assetKinds.keys()]}getAssetKindByIndex(t){return this.assetKindArray?.[t]??"???"}getAssetStorageTypeByIndex(t){return 2===t?"maps":4===t?"prefabs":6===t?"ugcGameVariants":void 0}get assetSorts(){return this._assetSorts??=new Map([["Name","Name"],["Likes","Likes"],["PlaysRecent","Plays, Recent"],["PlaysAllTime","Plays, All Time"],["NumberOfObjects","Number Of Objects"],["NumberOfRatings","Number Of Ratings"],["ParentAssetCount","Parent Asset Count"],["AverageRating","Average Rating"],["DateCreatedUtc","Date Created"],["DateModifiedUtc","Date Modified"],["DatePublishedUtc","Date Published"],["Bookmarks","Bookmarks"]])}get assets(){return this._assets??=new Map}registerAsset(t,e){this.assets.set(t,e)}async getAsset({kind:t,id:e,version:s}){const r=`${e}/${s}`;if(this.assets.has(r))return this.assets.get(r);const i=await this.fetchAsset({kind:t,id:e,version:s});return i?new f({asset:i}):void 0}async fetchAsset({kind:t,id:e,version:s}){try{const r=new URL(`/api/${this.getAssetStorageTypeByIndex(t)}/${e}/${s}`,`https://${window.location.host.replace("beta.","")}`),i=await fetch(r,{headers:{Accept:"application/json"}});if(!i||!i.ok)throw console.error("[DiscoveryManager.fetchAsset] Failed to fetch",i),new Error(i.status);const a=await i.json();console.log("res!",a)}catch(t){console.error("[DiscoveryManager.fetchAsset]",t)}}get host(){return this._host??"blobs-infiniteugc.svc.halowaypoint.com"}};class p extends r.w{constructor(){super(),this.resultsView=new m}get title(){return"Search"}get defaultState(){return{maxPageSize:24,pageSize:24,page:0,estimatedTotal:0}}render(){return this.html`
			<div class="ugc_search_wrapper" id="ugc-search">
				${this.renderSearchOptions()}
				<span class="results-info">Results // ${this.state.estimatedTotal}${this.state.noResults?" // No results for last search!":""}</span>
				${this.renderPageControls("upper")}
				${this.resultsView.render()}
				${this.renderPageControls("lower")}
			</div>
		`}renderSearchOptions(){return a.k9.wire(this,":search")`
		<div class="ugc_search-options">
			<div class="ugc_search-term_wrapper">
				<button
					class="ugc_search_submit"
					onclick=${()=>this.submit()}
				>
					<span class="icon-masked icon-search"></span>
				</button>
				<input
					id="ugc_search-term"
					type="search"
					placeholder="Search..."
					onchange=${t=>this.setQuery("term",t.target.value)}
				>
			</div>
			<div class="option-group">
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(2)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(2)?"":"un"}checked`}></div>Maps
					</button>
				</div>
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(6)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(6)?"":"un"}checked`}></div>Modes
					</button>
				</div>
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(4)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(4)?"":"un"}checked`}></div>Prefabs
					</button>
				</div>
			</div>
			<div class="option">
				<label for="ugc_search-sort">Sort</label>
				<select
					id="ugc_search-sort"
					onchange=${t=>this.setQuery("sort",t.target.value)}
				>
					${()=>[...g.assetSorts.entries()].map((([t,e])=>{const s=this.getQuery("sort");return!(!s||s!==t)?`<option value=${t} selected>${e}</option>`:`<option value=${t}>${e}</option>`}))}
				</select>
			</div>
			<div class="option">
				<label for="ugc_search-sortOrder">Order</label>
				<select
					id="ugc_search-sortOrder"
					onchange=${t=>this.setQuery("order",t.target.value)}
				>
					<option value="desc">Descending</option>
					<option value="asc">Ascending</option>
				</select>
			</div>
			<div class="option">
				<label for="ugc_search-author">Author</label>
				<input
					id="ugc_search-author"
					type="text"
					placeholder="gamertag..."
					onchange=${t=>this.setQuery("author",t.target.value)}
				>
			</div>
			<div class="option">
				<label for="ugc_search-sortOrder">Has Nodegraph</label>
				<select
					id="ugc_search-sortOrder"
					onchange=${t=>this.setQuery("hasNodeGraph",t.target.value)}
				>
					<option value="">Either</option>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</div>
			<div class="option">
				<label for="ugc_search-tag">Tag</label>
				<input
					id="ugc_search-tag"
					type="text"
					onchange=${t=>this.setQuery("tag",t.target.value)}
				>
			</div>
		</div>
		`}renderPageControls(t=upper){return this.pages<2?"":a.k9.wire(this,`:${t}`)`
			<div class="page-controls_wrapper">
				<button
					onclick=${()=>this.previousPage()}
					disabled=${0===this.pageNumber}
				><div class=${"icon-masked icon-arrow-left"}></div>Prev</button>
				<span>${this.pageNumber+1} of ${this.pages}</span>
				<button
					onclick=${()=>this.nextPage()}
					disabled=${this.pageNumber+1===this.pages}
				>Next<div class=${"icon-masked icon-arrow-right"}></div></button>
			</div>
		`}get pageNumber(){return this.state?.page??0}get pageLength(){return this.state?.pageSize??24}get pages(){return this.state.estimatedTotal?Math.ceil(this.state.estimatedTotal/this.state.pageSize):0}async goToPage(t){let e=parseInt(t);e<1&&(e=0),e>this.pages&&(e=this.pages);const s=await this.search({page:e});s&&(this.resultsView.init(s),this.state.page=e),this.render()}async nextPage(){this.pageNumber!==this.pages-1&&(await this.goToPage(this.pageNumber+1),this.scrollIntoView())}async previousPage(){0!==this.pageNumber&&(await this.goToPage(this.pageNumber-1),this.scrollIntoView())}get query(){return this.state.query??=new URLSearchParams("order=desc&sort=PlaysRecent")}get queryAssetKinds(){return this._queryAssetKinds??=new Set([2])}get assetKindString(){return[...this.queryAssetKinds].map((t=>`assetKind=${g.getAssetKindByIndex(t)}`)).join("&")}async search({page:t=this.state.page}={}){const e=new URLSearchParams(`page=${t}&${this.query.toString()}&${this.assetKindString}`),s=await fetch(new URL(`/api/discovery/search?${e.toString()}`,`https://${window.location.host.replace("beta.","")}`));if(s&&s.ok){const t=await s.json();return console.log(t),history.replaceState({},"Cylix Guide",`?${e.toString()}`),t}}async submit(){this.state.page=0;const t=await this.search();t&&t?.Results.length?(this.state.noResults=!1,this.state.estimatedTotal=parseInt(t.EstimatedTotal),this.resultsView.init(t),this.render()):this.setState({noResults:!0})}scrollIntoView(){const t=document.querySelector("#ugc-search");t&&t.scrollIntoView()}setQueryPaging(t=this.pageNumber){this.setQuery("start",t*this.pageLength),this.setQuery("count",this.pageLength)}setQuery(t,e){const s=this.query;!e&&s.has(t)&&s.delete(t),console.log("[UGCSearch.setQuery]",t,e),s.set(t,e)}getQuery(t){if(this.query.has(t))return this.query.get(t)}setAssetKind(t){t&&(this.queryAssetKinds.has(t)?this.queryAssetKinds.delete(t):this.queryAssetKinds.add(t),this.renderSearchOptions())}setAuthor(t){t||(this.state.author=""),this.state.author=`${t}`}}class m extends r.w{init(t){this.response=t,t?.Results.length&&(this.state.results=t.Results.slice(0,this.state.pageSize)),this.render()}get defaultState(){return{pageSize:100,results:[]}}render(){return console.log("UGCResults.rend",this.state.results),this.html`
			<div class="ugc_results_wrapper">
				<ul class="ugc_results">
					${this.currentPage.map((t=>a.k9.wire()`<li>
						${{any:t.render("results"),placeholder:h.cloneNode(!0)}}
					</li>`))}
				</ul>
			</div>
		`}get currentPage(){return this.state.results.map((t=>new f({result:t})))}}class f extends r.w{constructor({result:t,asset:e}){super(),t&&(this.asset=t),e&&(this.asset=e),g.registerAsset(`${this.id}/${this.version}`,this)}render(){return this.html`
			<button
				class=${"ugc_item"+(this.is343?" is343":"")}
				onclick=${()=>this.displayDetails()}
				title=${this.title}
			>
				<img
					class="thumbnail"
					src=${this.state.brokenImage?this.defaultThumbnail:this.thumbnail}
					style=${{opacity:this.state.loadedImage?1:0}}
					width="256"
					height="144"
					onerror=${()=>this.setState({brokenImage:!0})}
					onload=${()=>this.setState({loadedImage:!0})}
				>
				<div class="titles">
					<div class=${`icon-masked icon-ugc-${this.assetKindIndex}`}></div>
					<span class="name">${this.title}</span>
				</div>
				<div class="badges">
					${{html:this.is343?'<span class="badge-343i">343</span>':""}}
				</div>
			</button>
		`}displayDetails(){d.displayAsset(this)}get id(){return this.asset.AssetId}get version(){return this.asset?.AssetVersionId??this.asset?.VersionId}get cylixURI(){return`ugc/${this.cylixUGCKind}/${this?.id??"0000"}/${this?.version??"0000"}`}get cylixUGCKind(){const t=this.assetKindIndex;return 2===t?"map":4===t?"prefab":6===t?"mode":"asset"}get waypointURI(){return`/hi/${g.getAssetStorageTypeByIndex(this.assetKindIndex)}/${this?.id}/versions/${this?.version}`}get waypointBrowserURI(){return`/halo-infinite/ugc/${this.cylixUGCKind}s/${this?.id}`}get title(){return this.asset?.Name??this.asset?.PublicName??"???"}get description(){return this.asset?.Description??"..."}get originalAuthor(){return this.asset?.OriginalAuthor??"???"}get contributors(){return[...new Set(this.asset?.Contributors||[])]}get assetKind(){return g.getAssetKindByIndex(this.asset?.AssetKind)}get assetKindIndex(){return this.asset?.AssetKind??0}get defaultThumbnail(){return"https://hi.cylix.guide/ugc/images/default_sm.jpg"}get defaultImage(){return"https://hi.cylix.guide/ugc/images/default.jpg"}get thumbnail(){return this.asset?.ThumbnailUrl??`${this.getAssetRelativeUrl("images/thumbnail.png")}`}get hero(){return this.getImageBlob("hero")}get screenshot(){return this.getImageBlob("screenshot1")}get mainImage(){return 2===this.assetKindIndex||4===this.assetKindIndex?this.hero:6===this.assetKindIndex?this.screenshot:this.thumbnail}getImageBlob(t="thumbnail"){return`https://${g.host}/ugcstorage/map/${this.id}/${this.version}/images/${t}.png`}get averageRating(){return parseFloat(this.asset?.AverageRating??0).toFixed(1)}get bookmarks(){return parseInt(this.asset?.Bookmarks??0)}get likes(){return parseInt(this.asset?.Likes??0)}get playsAllTime(){return parseInt(this.asset?.PlaysAllTime??0)}get playsRecent(){return parseInt(this.asset?.PlaysRecent??0)}get tags(){return[...new Set(this.asset?.Tags||[])]}get objectCount(){return parseInt(this.asset?.NumberOfObjects||0)}get is343(){return this._is343??=new Set(this.tags).has("343i")}get dateModified(){const t=this.asset?.DateModifiedUtc?.ISO8601Date;return t&&Date.parse(t)?new Date(t):new Date}get dateCreated(){const t=this.asset?.DateCreatedUtc?.ISO8601Date;return t&&Date.parse(t)?new Date(t):new Date}get datePublished(){const t=this.asset?.DatePublishedUtc?.ISO8601Date;return t&&Date.parse(t)?new Date(t):new Date}get hasNodeGraph(){return!0===this.asset.HasNodeGraph}get isCopyProtected(){return!0===this.asset.ReadOnlyClones}getAssetRelativeUrl(t){const e=this.asset?.Files?.Prefix;return`${e}${t}`}}class v extends p{constructor(){super(),this.resultsView=new b}get title(){return"Manifest"}renderSearchOptions(){return this.manifest||this.loadManifest(),a.k9.wire(this,":search")`
		<div class="ugc_search-options">
			<div class="option">
				<button 
					class="hi-box"
					onclick=${()=>n.v.showView(this.renderLoadModal())}
				>
					Load Manifest
				</button>
			</div>
			<div class="option-group">
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(2)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(2)?"":"un"}checked`}></div>Maps
					</button>
				</div>
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(6)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(6)?"":"un"}checked`}></div>Modes
					</button>
				</div>
				<div class="option">
					<button
						onclick=${()=>this.setAssetKind(10)}
					>
						<div class=${`icon-masked icon-${this.queryAssetKinds.has(10)?"":"un"}checked`}></div>Engines
					</button>
				</div>
			</div>
			<div class="option">
				<label for="ugc_search-term">Filter</label>
				<input
					id="ugc_search-term"
					type="text"
					placeholder="term"
					onchange=${t=>this.setFilterTerm(t.target.value)}
				>
			</div>
		</div>
		`}renderLoadModal(){return a.k9.wire(this,":loadModal")`
			<div class="ugc_load-modal">
				<div>
					<label for="file-manifest">manifest.json file to load:</label><br/>
					<input
						type="file"
						id="file-manifest"
						onchange=${t=>this.loadCustomManifest(t)}
					/>
				</div>
				<ul>
					<li>
						<label for="manifest-build">Branch</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BranchName}</span>
					</li>
					<li>
						<label for="manifest-build">Build</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BuildNumber}</span>
					</li>
					<li>
						<label for="manifest-build">Build GUID</label>
						<span id="manifest-build">${this?.manifest?.CustomData?.BuildGuid}</span>
					</li>
					<li>
						<label for="manifest-build">Maps</label>
						<span id="manifest-build">${this?.manifest?.MapLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Modes</label>
						<span id="manifest-build">${this?.manifest?.UgcGameVariantLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Engines</label>
						<span id="manifest-build">${this?.manifest?.EngineGameVariantLinks.length}</span>
					</li>
					<li>
						<label for="manifest-build">Host</label>
						<span id="manifest-build">${this.host}</span>
					</li>
				</ul>
				<div>
					<label for="file-manifest">manifest.json file to dif:</label><br/>
					<input
						type="file"
						id="file-manifest"
						onchange=${t=>this.loadCustomManifestDif(t)}
					/>
				</div>
			</div>
		`}get host(){return this._host??=()=>{const t=new URL(this.manifest.Files.Prefix);return g._host=t.host,t.host}}async search({page:t=0}={}){const e=this.currentAssetKindArray;if(console.warn("a",e),e)return this.state.estimatedTotal=parseInt(e.length),e.slice(this.state.pageSize*t,this.state.pageSize*(t+1))}async submit({page:t=this.state.page}={}){const e=await this.search({page:t});e&&(this.resultsView.init(e),this.render())}async readManifest(t){if(t&&"string"==typeof t)try{const e=JSON.parse(t);e?.CustomData?.BuildNumber&&e?.MapLinks&&(this.manifest=e,this._host=void 0,await this.submit(),this.renderLoadModal())}catch(t){console.error("[UGCManifest.readManifest] Failed to read",t)}}async loadManifest(){const t=await c.db.getJSON("manifest.json");t||console.error("[UGCManifest.loadManifest] Failed to fetch",t),console.log("res!",t),this.manifest=t,await this.submit()}async loadCustomManifest(t){try{console.log("loadCustomManifest");const e=t.target.files[0];if(!e)throw new Error("No File!");this.setState({filename:(0,l.B)(e.name)});const s=new FileReader;s.onload=t=>{const e=t.target.result;this.readManifest(e)},s.readAsText(e)}catch(t){this.setState({message:t?.message??"loadMvar Error!"})}}async loadCustomManifestDif(t){try{console.log("loadCustomManifestDif");const e=t.target.files[0];if(!e)throw new Error("No File!");this.setState({filename:(0,l.B)(e.name)});const s=new FileReader;s.onload=t=>{t.target.result},s.readAsText(e)}catch(t){this.setState({message:t?.message??"loadMvar Error!"})}}get queryAssetKinds(){return this._queryAssetKinds??=new Set([2])}get currentAssetKindArray(){return this.queryAssetKinds.has(6)?this.filterAssetKindArray(this.manifest.UgcGameVariantLinks):this.queryAssetKinds.has(10)?this.filterAssetKindArray(this.manifest.EngineGameVariantLinks):this.filterAssetKindArray(this.manifest.MapLinks)}get filterTerm(){return this.state?.filterTerm||""}setFilterTerm(t){this.state.filterTerm=t?`${t}`.toLowerCase():"",this.state.page=0,this.submit()}filterAssetKindArray(t){return t&&t.length?this.filterTerm?t.filter((t=>!!`${t?.PublicName}`.toLowerCase().includes(this.filterTerm)||(!!`${t?.Description}`.toLowerCase().includes(this.filterTerm)||(!!`${t?.AssetId}`.toLowerCase().includes(this.filterTerm)||void 0)))):t:[]}setAssetKind(t){if(t){if(this.queryAssetKinds.has(t))return;this.queryAssetKinds.clear(),this.queryAssetKinds.add(t),this.renderSearchOptions(),this.state.page=0,this.submit()}}}class b extends r.w{init(t){this.response=t,t?.length&&(this.state.results=this.response),this.render()}get defaultState(){return{pageSize:24,results:[]}}render(){return console.log("ManifestView.rend",this.state.results),this.html`
			<div class="ugc_results_wrapper">
				<ul class="ugc_results">
					${this.currentPage.map((t=>a.k9.wire()`<li>
						${{any:t.render("results"),placeholder:h.cloneNode(!0)}}
					</li>`))}
				</ul>
			</div>
		`}get currentPage(){return this.state.results.map((t=>new f({asset:t})))}}}}]);