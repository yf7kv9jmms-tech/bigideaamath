import{At as e,Gt as t,H as n,Ha as r,It as i,Jo as a,Ko as o,Ns as s,Oa as c,Os as l,Ps as u,Pt as d,R as f,Va as ee,Wa as p,Zt as m,_ as te,_n as h,cr as g,f as _,i as v,it as y,ka as b,l as x,ot as S,r as C,ut as w,vo as T,vt as E,xr as D,yo as O,yt as k,za as ne}from"./app.f69b217.js";import{P as re,n as A}from"./Icons-Df8ihFlI.js";import{a as ie,i as ae}from"./SubscribeCtaWidget-KKewCXcL.js";function oe(){let{siteId:n}=y(),r=v(),s=ee(),c=_(),{t:l}=(0,M.useTranslation)(),u=f(),d=w(),p=te(),h=t({source:`bookmarkTooltip`}),g=m(),b=k(),[x,S]=j.default.useState(b.getItem(`grow-faves:hasSeenSignUpTooltip`)===`true`);j.default.useEffect(()=>{x?S(!0):b.setItem(`grow-faves:hasSeenSignUpTooltip`,`true`)},[]);let C=x||u,T=ne`
    width: 100%;
    height: 2.6em;
    margin-bottom: 0.8em;
    color: ${e=>e.theme.fullPage.background};
    font-size: 1.2em;
    line-height: 1.3em;
  `;return j.default.useEffect(()=>{C&&setTimeout(()=>{c({type:`CLOSE_TOOLTIP`})},1e4)}),j.default.useEffect(()=>{u||r({name:`tooltip_sign_up_viewed`,source:d})},[]),(0,N.jsx)(P,{_css:g,children:(0,N.jsxs)(F,{children:[(0,N.jsx)(I,{"aria-label":l(`closeSignUpTooltip`),onClick:()=>{c({type:`CLOSE_TOOLTIP`})},type:`button`,children:(0,N.jsx)(L,{})}),(0,N.jsx)(R,{children:l(C?`savedWithGrow`:`saveBookmark`)}),!C&&(0,N.jsx)(z,{onClick:()=>{r({name:`tooltip_sign_up_click`}),i({url:h,siteId:n})},$buttonSize:`l`,$textColor:`#FFFFFFF3`,_css2:T,children:l(`continueCTA`)||l(`continue`)}),C?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B,{onClick:()=>{r({name:`tooltip_your_bookmarks_click`}),c({type:`OPEN_BOOKMARKS_VIEW`}),c({type:`CLOSE_TOOLTIP`})},$buttonSize:`l`,$textColor:o,_css3:T,children:l(`yourBookmarks`)}),(0,N.jsxs)(V,{href:e(p),buttonSize:`l`,textColor:s.widget.action,children:[l(`yourGrowAccount`),(0,N.jsx)(H,{})]})]}):(0,N.jsx)(U,{href:a,buttonSize:`l`,textColor:s.widget.action,onClick:()=>{r({name:`tooltip_learn_more_click`})},children:`Learn More`})]})})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W=s((()=>{r(),j=u(O()),M=D(),h(),x(),l(),C(),d(),re(),E(),N=T(),P=p(`div`)`
        width: 22.9em;
        margin: ${e=>e._css};
      `,F=p(`div`)`
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.25em 3em 1.3em;
          border-radius: 5px;
          background-color: ${e=>e.theme.widget.background};
          box-shadow: 0 5px 20px rgb(0 0 0 / 7%);
        `,I=p(`button`)`
            all: unset;
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.25em;
            height: 2.25em;
            color: ${e=>e.theme.widget.text};
            border-radius: 50%;
            background-color: ${e=>e.theme.widget.background};
            box-shadow: 0;
            cursor: pointer;
          `,L=p(g)`
              width: 0.9em;
              height: 0.9em;
            `,R=p(`p`)`
            margin-bottom: 1em;
            color: ${e=>e.theme.widget.text};
            font-size: 1.7em;
            line-height: 1.4em;
            text-align: center;
          `,z=p(b)`${e=>e._css2}`,B=p(b)`${e=>e._css3}`,V=p(c)`
                padding: 0.5em;
                font-size: 1.2em;
              `,H=p(A)`
                  width: 1em;
                  color: ${e=>e.theme.widget.action};
                `,U=p(c).withConfig({displayName:`AddedBookmarkTooltip___StyledBorderlessButtonExternalLink2`,componentId:`sc-1bzzq13-0`})([`padding:0.5em;font-size:1.2em;`])}));function G(e,t){return t(e===`favorite`||e===`sdk`||e===`create`?`subscribeTooltip.savedPost`:e===`login`?`subscribeTooltip.welcomeBack`:`subscribeTooltip.helloThere`)}function K(e){switch(e){case`sign_up`:return`subscribe_action_pack_signUp_viewed`;case`login`:return`subscribe_action_pack_login_viewed`;case`favorite`:return`subscribe_action_pack_favorite_viewed`;case`create`:return`subscribe_action_pack_create_viewed`;case`sdk`:return`subscribe_action_pack_sdk_viewed`;default:return`subscribe_action_pack_unknown_viewed`}}function se(e){return e===`sign_up`?`signUpActionPack`:e===`login`?`loginActionPack`:e===`favorite`?`bookmarkActionPack`:e===`create`?`createActionPack`:e===`sdk`?`sdkActionPack`:null}function ce(){let e=_(),{name:t}=y(),r=v(),i=w(),a=S(),o=q.default.useRef(null),s=n(),c=m(),l=k(),{t:u}=(0,J.useTranslation)();if(q.default.useEffect(()=>{i&&(r({name:K(i)}),l.setItem(`grow-faves:hasSeenSubscribeTooltip`,`true`))},[]),!i||s&&a!==`subscribed`)return null;let d={name:`Subscribe from ${i}`,translation:{buttonText:u(`subscribeTooltip.buttonText`),description:u(`subscribeTooltip.description`,{siteName:t}),title:G(i,u)},id:null,dbId:``,imageUrl:void 0,isDefault:!0,nameFieldEnabled:!1,nameFieldRequired:!1,redirectLink:``};return(0,Y.jsx)(X,{ref:o,"data-testid":`growSubscribeTooltip`,_css:c,children:(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{"aria-label":u(`subscribeTooltip.closeTooltipAriaLabel`),onClick:()=>{e({type:`CLOSE_TOOLTIP`})},type:`button`,children:(0,Y.jsx)($,{})}),(0,Y.jsx)(ae,{subscribeWidget:d,source:se(i),verticalLayout:!0})]})})}var q,J,Y,X,Z,Q,$,le=s((()=>{r(),q=u(O()),x(),ie(),C(),h(),J=D(),d(),E(),Y=T(),X=p(`div`)`
        width: 28em;
        margin: ${e=>e._css};
      `,Z=p(`div`)`
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.25em 2.25em 1.3em;
          color: ${e=>e.theme.fullPage.text};
          line-height: 1.4em;
          border-radius: 5px;
          background-color: ${e=>e.theme.fullPage.background};
          box-shadow: 0 5px 20px rgb(0 0 0 / 7%);
        `,Q=p(`button`)`
            all: unset;
            position: absolute;
            top: -0.9em;
            right: -0.9em;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.25em;
            height: 2.25em;
            color: ${e=>e.theme.fullPage.text};
            border-radius: 50%;
            background-color: ${e=>e.theme.fullPage.background};
            box-shadow: 0 0 5px rgb(0 0 0 / 10%);
            cursor: pointer;
          `,$=p(g).withConfig({displayName:`SubscribeTooltip___StyledCloseIcon`,componentId:`sc-11fu8i7-0`})([`width:0.9em;height:0.9em;`])}));export{W as i,le as n,oe as r,ce as t};