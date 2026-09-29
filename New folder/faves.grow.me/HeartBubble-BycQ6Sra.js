import{$n as e,Ha as t,Ns as n,Oo as r,Ps as i,V as a,Va as o,Wa as s,_n as c,i as l,it as u,ko as d,l as f,pr as p,r as m,vo as h,xr as g,yo as _,za as v}from"./app.f69b217.js";import{n as y,r as b}from"./Bookmarks-mK2wwXcE.js";import{P as x,a as S,k as C,l as w,o as T}from"./Icons-Df8ihFlI.js";function E({isBookmarked:e,isWidget:t=!0,fill:n,source:r}){let{widgetTopComponent:i}=u(),a=()=>{switch(i){case`heart`:return(0,D.jsx)(p,{});case`bookmark`:return e||!t?(0,D.jsx)(T,{fill:n}):(0,D.jsx)(S,{fill:n});case`plus`:return e?(0,D.jsx)(w,{fill:n,width:`100%`}):(0,D.jsx)(C,{fill:n});default:return(0,D.jsx)(p,{fill:t?`currentColor`:n})}},o=r===`reduced_widget`,{width:s,height:c}=(()=>{switch(i){case`bookmark`:return{width:o?`72%`:`89%`,height:o?`77%`:`100%`};case`plus`:return{width:e?`77%`:o?`51%`:`61%`,height:e?`83%`:o?`54%`:`66%`};default:return{width:o?`58%`:`70%`,height:o?`58%`:`70%`}}})();return(0,D.jsx)(O,{isBookmarked:e,iconWidth:s,iconHeight:c,icon:i,children:a()})}var D,O,k=n((()=>{t(),c(),x(),f(),D=h(),O=s.div`
  position: relative;
  width: ${e=>e.iconWidth};
  height: ${e=>e.iconHeight};
  color: ${e=>e.isBookmarked?e.theme.widget.background:e.theme.widget.action};
  stroke: ${e=>e.icon===`heart`?e.theme.widget.background:`none`};
  transition: color 150ms ease-out;

  &:hover {
    color: ${e=>e.theme.widget.background};
  }

  &:active {
    color: ${e=>e.theme.widget.background};
  }
`}));function A({className:t,showHearts:n,setShowHearts:r}){let i=o();if(e(()=>{r(!1)},n?1e3:null),!n)return null;let a=[];for(let e=0;e<3;e++)a.push((0,N.jsx)(P,{index:e,children:(0,N.jsx)(E,{fill:i.widget.action,isWidget:!1})},e));return(0,N.jsx)(F,{className:t,children:a})}var j,M,N,P,F,I,L,R,z,B,V=n((()=>{t(),j=i(_()),f(),m(),y(),c(),M=g(),k(),N=h(),d(),P=s.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation:
    up 1.25s linear forwards,
    fade 1.25s ease-out both;
  /* stylelint-disable-next-line unit-no-unknown */
  animation-delay: ${e=>`${e.index*.2}s`};

  @keyframes up {
    0% {
      transform: translateY(0) scale(1);
    }

    100% {
      transform: translateY(-400px) scale(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    1% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }
`,F=s(`div`)`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        pointer-events: none;
      `,I=s(A).withConfig({displayName:`HeartBubble___StyledFloatingHearts`,componentId:`sc-19w2c6p-0`})([``,` `,``],e=>e._css6,e=>e._css7),L=s.button`
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
  outline: none;
  transition:
    background-color 150ms ease-out,
    transform 150ms ease-out;
  ${e=>e.source===`create`&&`
      z-index: 10;
    `}
  ${e=>e.source===`widget`&&`
      width: 34px;
      height: 34px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
      border-radius: 50%;
      color: ${e.theme.widget.action};
      border: 0;
      background-color: ${e.theme.widget.action};
      :hover:enabled, :focus {
        background-color: ${e.theme.widget.actionActive};
        transform: scale(0.95);
        transform-orgin: center;
      }
      :focus::before{
        content: '';
        position: absolute;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 2px solid;
        border-color: ${e.theme.widget.action};
      }
      :active:enabled {
        transform: scale(0.9);
      }
  `}
  ${e=>e.source===`reduced_widget`&&`
    width: 48px;
    height: 48px;
    box-shadow: none;
    color: ${e.theme.widget.action};
    border: 0;
    background-color: transparent;
  `}

  :enabled {
    cursor: pointer;
  }
`,R=s(`div`)`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          ${e=>e._css}
          ${e=>e._css2}
            ${e=>e._css3}
        `,z=s(p)`
              position: relative;
              transition: color 150ms ease-out;
              ${e=>e._css4}
              ${e=>e._css5}
            `,B=j.forwardRef(function({className:e,children:t,buttonColors:n={backgroundColor:`#000`,textColor:`#fff`},source:i},s){let c=a(),u=l(),{addBookmark:d}=b(),[f,p]=j.useState(!1),{t:m}=(0,M.useTranslation)(),h=m(`createSaveButtonText`),g=j.useRef(null),_=o(),y=()=>c?`Saved`:h,x=function(){var e=r(function*(){p(!0);try{yield d({source:i,tooltipReferenceElement:i===`create`&&g.current?g.current:void 0})}catch(e){}});return function(){return e.apply(this,arguments)}}(),S=i===`create`?`favorite_from_create`:`favorite`,C=i===`create`?`bookmark_from_create`:`bookmark_click`,w=i===`widget`||i===`reduced_widget`;return(0,N.jsxs)(L,{"aria-label":`Bookmark Page`,tabIndex:0,className:e,source:i,ref:e=>{g.current=e,typeof s==`function`?s(e):s&&(s.current=e)},disabled:c,isPageBookmarkedByReader:!!c,onClick:()=>{u({name:S}),u({name:C}),x()},type:`button`,children:[t,(0,N.jsxs)(R,{_css:i===`widget`&&`padding-top: 0.25em;`,_css2:i===`create`&&`margin-right: 0.4em;`,_css3:w&&`
              width: 28px;
              height: 28px;
              padding-top: 2px;
              border-radius: 50%;
              color: ${_.widget.background};
              border: 0;
              background-color: ${_.widget.action};
              :hover:enabled {
                background-color: ${_.widget.actionActive};
                transform: scale(0.95);
              }
              :active:enabled {
                transform: scale(0.9);
              }
            `,children:[w?(0,N.jsx)(E,{isBookmarked:c,fill:_.widget.background,source:i}):(0,N.jsx)(z,{_css4:w&&v`
                width: 58%;
                height: 58%;
                color: ${c?_.widget.background:_.widget.action};
                stroke: ${_.widget.background};
                ${L}:hover & {
                  color: ${_.widget.background};
                }
                ${L}:active & {
                  color: ${_.widget.background};
                }
              `,_css5:i===`create`&&v`
                width: initial;
                height: 1.2em;
                color: ${c?n.textColor:n.backgroundColor};
                stroke: ${n.textColor};
                ${L}:hover & {
                  color: ${n.textColor};
                }
                ${L}:active & {
                  color: ${n.textColor};
                }
              `}),(0,N.jsx)(I,{showHearts:f,setShowHearts:p,_css6:i===`create`&&`color: ${n.backgroundColor};`,_css7:i===`reduced_widget`&&`color: ${_.widget.action}`})]}),i===`create`&&(0,N.jsx)(`span`,{children:y()})]})})}));export{V as n,B as t};