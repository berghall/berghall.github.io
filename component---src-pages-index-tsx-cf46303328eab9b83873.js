(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(t,e,n){"use strict";n.r(e);var a,o,r,i,l=n(11),c=n.n(l),d=n(0),u=(n(53),n(242)),s=n(195),m=n(198),h=n.n(m),g=(n(243),n(244)),p=n(265),f=n(193),b=function(t){var e=t.author;return d.createElement(p.a,{container:!0,justify:"center",alignItems:"center",direction:"column"},d.createElement(s.a,{to:"/"},d.createElement(g.a,{style:{alignItems:"baseline",width:f.a.author.avatar.width,height:f.a.author.avatar.height},src:Object(s.d)(e.image),alt:e.name})),d.createElement("h1",{style:{color:f.a.author.title.color,fontSize:f.a.author.title.fontSize,marginTop:20,marginBottom:20}},e.name),d.createElement("p",{style:{color:f.a.author.desc.color,fontSize:f.a.author.desc.fontSize,maxWidth:f.a.author.desc.maxWidth,margin:"auto",marginBottom:20,textAlign:"center"}},e.biography))},E=n(266),y=function(){return d.createElement("div",{style:{textAlign:"right"}},d.createElement(s.a,{to:"/about/",style:{textDecoration:"none"}},d.createElement(E.a,{variant:"outlined",style:{marginRight:30,marginTop:30,color:f.a.index.aboutButton.color,borderColor:f.a.index.aboutButton.borderColor,backgroundColor:f.a.index.aboutButton.backgroundColor,textTransform:"none",width:f.a.index.aboutButton.width}},"About")))},w=n(209),v=function(){return d.createElement("div",{style:{textAlign:"center",marginTop:40}},d.createElement(s.a,{to:"#children"},d.createElement("span",{style:{padding:10}},d.createElement("svg",{width:f.a.callToActionButton.width,height:f.a.callToActionButton.height,viewBox:"0 0 24 24","aria-hidden":"true",fill:"white"},d.createElement("path",{d:"M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"})))))},k=function(t){return d.createElement(h.a,Object.assign({},t,{maxWidth:767}))},C=function(t){return d.createElement(h.a,Object.assign({},t,{minWidth:768}))},x=function(t){var e=t.data,n=t.styles;return d.createElement("div",{style:{backgroundImage:f.a.index.header.backgroundImage}},d.createElement(y,null),d.createElement("div",{style:{paddingTop:n.paddingTop,paddingBottom:n.paddingBottom}},d.createElement(b,{author:e.site.siteMetadata.author}),d.createElement(w.a,{networks:e.site.siteMetadata.networks}),d.createElement(v,null)))},S=function(t){var e=t.children;return d.createElement("div",{id:"children",style:{flexGrow:1,margin:"0 auto",maxWidth:f.a.index.layout.cardSectionMaxWidth,padding:10,paddingTop:10}},e)},B=function(t){var e=t.data,n=t.styles,a=t.children;return d.createElement("div",{style:{backgroundColor:f.a.index.layout.backgroundColor}},d.createElement(x,{data:e,styles:n}),d.createElement(S,{children:a}))},T=function(t){var e=t.children;return d.createElement(s.b,{query:"1460482536",render:function(t){return d.createElement(d.Fragment,null,d.createElement(C,null,d.createElement(B,{data:t,styles:{paddingTop:75,paddingBottom:75}},e)),d.createElement(k,null,d.createElement(B,{data:t,styles:{paddingTop:50,paddingBottom:50}},e)))},data:u})},M=n(245),A=n(247),W=n.n(A),O=n(248),P=n.n(O),j=(n(249),n(217)),I={countOfInitiallyShownPosts:5,countOfPostsDynamicallyAdded:5,offsetHeightToTriggerLoading:20},L=new(a=function(){function t(){W()(this,"postsToShow",o,this)}return t.prototype.add=function(){this.postsToShow+=I.countOfPostsDynamicallyAdded},t}(),o=P()(a.prototype,"postsToShow",[j.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return I.countOfInitiallyShownPosts}}),P()(a.prototype,"add",[j.d],Object.getOwnPropertyDescriptor(a.prototype,"add"),a.prototype),a),q=function(t){var e=t.onClickHandler;return d.createElement("div",{style:{textAlign:"center"}},d.createElement(E.a,{onClick:e,style:{color:f.a.blogPost.showMoreButton.color,borderColor:f.a.blogPost.showMoreButton.borderColor,borderWidth:1,borderStyle:"solid",backgroundColor:f.a.blogPost.showMoreButton.backgroundColor,textTransform:"none",width:f.a.blogPost.showMoreButton.width}},"Load More"))},H=n(213),R=n.n(H),z=n(273),D=n(267),F=n(270),U=n(269),N=n(268),J=n(208),G=function(t){var e=t.data;return d.createElement("div",{style:{marginTop:25,marginBottom:25}},d.createElement(z.a,null,d.createElement(D.a,null,d.createElement(s.a,{to:e.slug,style:{textDecoration:"none",color:"inherit"}},d.createElement(N.a,{avatar:d.createElement(g.a,{style:{backgroundColor:f.a.blogListElement.avatar.backgroundColor,color:f.a.blogListElement.avatar.color,textShadow:"none"}},e.title.charAt(0).toUpperCase()),title:e.title,subheader:e.date}),e.coverFluid?d.createElement(R.a,{fluid:e.coverFluid}):null,d.createElement(F.a,null,d.createElement(U.a,{component:"p"},e.description),d.createElement(J.a,{labels:e.tags}))))))},Q=function(t){return d.createElement(h.a,Object.assign({},t,{maxWidth:767}))},Y=function(t){return d.createElement(h.a,Object.assign({},t,{minWidth:768}))},_=Object(M.a)(r=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).ticking=!1,e.handleScroll=function(){e.ticking||(e.ticking=!0,requestAnimationFrame(function(){return e.update()}))},e}c()(e,t);var n=e.prototype;return n.update=function(){document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<I.offsetHeightToTriggerLoading&&L.add(),this.ticking=!1},n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.render=function(){return d.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,L.postsToShow).map(function(t){return d.createElement("div",{key:t.id},d.createElement(G,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,tags:t.frontmatter.tags,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}))},e}(d.Component))||r,K=Object(M.a)(i=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).handleUpdate=function(){L.add()},e}return c()(e,t),e.prototype.render=function(){return d.createElement("div",{style:{minHeight:"50vh"}},this.props.posts.slice(0,L.postsToShow).map(function(t){return d.createElement("div",{key:t.id},d.createElement(G,{data:{slug:t.fields.slug,date:t.frontmatter.date,title:t.frontmatter.title,tags:t.frontmatter.tags,description:t.frontmatter.description,coverFluid:t.frontmatter.cover&&t.frontmatter.cover.childImageSharp?t.frontmatter.cover.childImageSharp.fluid:null}}))}),this.props.totalCount>L.postsToShow&&d.createElement(q,{onClickHandler:this.handleUpdate}))},e}(d.Component))||i,V=function(t){return d.createElement(d.Fragment,null,d.createElement(Y,null,d.createElement(_,{posts:t.posts,tags:t.tags,totalCount:t.totalCount})),d.createElement(Q,null,d.createElement(K,{posts:t.posts,tags:t.tags,totalCount:t.totalCount})))},X=n(250),Z=n.n(X),$=function(t){var e=t.pageName,n=t.description,a=t.title;return d.createElement(Z.a,null,d.createElement("html",{lang:"en"}),d.createElement("title",null,e+" |  "+a),d.createElement("meta",{name:"description",content:n}))};n.d(e,"query",function(){return et});var tt=function(t){function e(){return t.apply(this,arguments)||this}return c()(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges.map(function(t){return t.node}),e=this.props.data.allMarkdownRemark.totalCount,n=this.props.data.allMarkdownRemark.tags,a=this.props.data.site.siteMetadata;return d.createElement(T,null,d.createElement($,{pageName:"Home",description:a.about,title:a.title}),d.createElement(V,{posts:t,tags:n,totalCount:e}))},e}(d.Component),et=(e.default=tt,"2102171956")},193:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o});var a="#f7931e",o="#ed1e79",r={blogPost:{layout:{cardMaxWidth:1e3,backgroundColor:"#eeeeee"},showMoreButton:{color:a,borderColor:"#059ce2",backgroundColor:"none",width:130}},blogListElement:{avatar:{color:"none",backgroundColor:"#059ce2"}},index:{layout:{cardSectionMaxWidth:800,backgroundColor:"#eeeeee"},header:{backgroundImage:"linear-gradient(20deg, "+a+", "+o+")"},aboutButton:{color:"white",borderColor:"white",backgroundColor:"none",width:100}},author:{avatar:{width:70,height:70},title:{color:"white",fontSize:30},desc:{color:"white",fontSize:20,maxWidth:500}},callToActionButton:{width:25,height:25},fabButton:{color:a,backgroundColor:"white"},networkButton:{color:"white",backgroundColor:"#333",width:45,height:45},aboutPage:{layout:{cardMaxWidth:800,backgroundColor:"#eeeeee"}}};e.a=r},195:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(51),c=n.n(l);n.d(e,"a",function(){return c.a}),n.d(e,"d",function(){return l.withPrefix}),n.d(e,"c",function(){return l.navigate});n(197);var d=o.a.createContext({}),u=function(t){return o.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},197:function(t,e,n){var a;t.exports=(a=n(203))&&a.default||a},203:function(t,e,n){"use strict";n.r(e);n(53);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(87),c=n(5),d=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?o.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json)):null};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=d},208:function(t,e,n){"use strict";var a=n(0),o=n(81),r=n(272),i=n(193),l=Object(o.a)(function(){return{root:{display:"flex",justifyContent:"left",flexWrap:"wrap",padding:"2px"},chip:{margin:"2px",background:"linear-gradient(20deg, "+i.b+", "+i.c+")",color:"white",fontWeight:"bold"}}});e.a=function(t){var e=t.labels,n=l({}),o=e.map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)});return a.createElement("div",{className:n.root},o.map(function(t){return a.createElement(r.a,{key:t,label:t,className:n.chip})}))}},209:function(t,e,n){"use strict";var a=n(0),o=n(216),r=n(193);e.a=function(t){var e=t.networks;return a.createElement("ul",{style:{textAlign:"center",listStyleType:"none",margin:"40px 0 35px 0"}},e.map(function(t){return a.createElement("li",{key:t,style:{display:"inline-block",verticalAlign:"top",paddingRight:5,paddingLeft:5}},a.createElement(o.SocialIcon,{style:{width:r.a.networkButton.width,height:r.a.networkButton.height},fgColor:r.a.networkButton.color,bgColor:r.a.networkButton.backgroundColor,target:"_blank",url:t}))}))}},242:function(t){t.exports={data:{site:{siteMetadata:{title:"Daniel Berghäll Portfolio",author:{name:"Hello, I'm Daniel",image:"/img/me.png",biography:"Presenting an independent portfolio"},networks:["https://github.com/berghall","mailto:daniel.berghall@gmail.com","https://linkedin.com/in/daniel-berghäll-693169105"]}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cf46303328eab9b83873.js.map