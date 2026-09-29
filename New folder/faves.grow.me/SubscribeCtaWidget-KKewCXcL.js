import{$a as e,Aa as t,B as n,Gt as r,H as i,Ha as a,I as o,It as s,Kt as c,Ma as l,Ns as u,O as d,Oo as f,Os as p,Ps as m,Pt as h,Qt as g,R as ee,Tn as _,Va as te,Wa as v,X as y,Xn as ne,_n as b,a as re,bo as ie,es as ae,f as oe,gn as se,hn as ce,i as le,ir as x,it as ue,ja as S,ka as C,ko as w,kt as T,l as E,nn as de,pn as fe,r as D,so as pe,tt as me,v as he,vo as ge,vt as _e,w as ve,wt as ye,x as be,xo as O,xr as k,yn as xe,yo as A,yt as Se,za as j}from"./app.f69b217.js";import{P as Ce,b as we}from"./Icons-Df8ihFlI.js";function Te({onClose:e,email:t,imageUrl:n,honeypot:i}){let a=le(),o=r({source:`not_logged_in_cta`}),{siteId:c,name:l}=ue(),u=ee(),{t:d}=(0,M.useTranslation)(),p=me(),m=()=>u?(0,N.jsx)(M.Trans,{i18nKey:`emailPostLink.modal.thanks`,values:{name:l}}):(0,N.jsx)(M.Trans,{i18nKey:`emailPostLink.modal.create`,components:{strong:(0,N.jsx)(`strong`,{})}});return(0,N.jsx)(Ee,{includeDescribedBy:!0,closeButton:!0,onClose:e,triggerEl:null,zIndex:2147483647,children:()=>(0,N.jsxs)(De,{children:[n&&(0,N.jsx)(P,{children:(0,N.jsx)(F,{src:xe({imgUrl:n,height:350,width:350,blockImageTransforms:p}),alt:``})}),(0,N.jsx)(Oe,{children:d(`emailPostLink.modal.success`)}),(0,N.jsxs)(I,{children:[(0,N.jsx)(M.Trans,{i18nKey:`emailPostLink.modal.linkSent`,values:{email:t}}),m()]}),(0,N.jsxs)(L,{children:[!u&&(0,N.jsxs)(ke,{$buttonSize:`m`,onClick:function(){var e=f(function*(e){if(e.preventDefault(),e.stopPropagation(),i){a({name:`subscribe_sign_up_spam`});return}s({url:o,email:t,siteId:c})});return function(t){return e.apply(this,arguments)}}(),children:[(0,N.jsx)(we,{}),d(`emailPostLink.modal.signUp`)]}),(0,N.jsx)(R,{$buttonSize:`m`,onClick:e,backgroundColor:`transparent`,children:d(`emailPostLink.modal.return`)})]})]})})}var M,N,Ee,De,P,F,Oe,I,L,ke,R,z=u((()=>{a(),b(),Ce(),E(),D(),h(),M=k(),N=ge(),w(),Ee=v(_)`
        max-width: 500px;

        @media screen and (max-width: 530px) {
          height: 100%;
          max-width: 530px;
          border-radius: 0;
        }
      `,De=v(`div`)`
              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
              padding: 40px;
              box-sizing: border-box;
              color: ${e=>e.theme.fullPage.text};
              text-align: center;

              @media screen and (min-width: 530px) {
                position: relative;
              }
            `,P=v(`div`)`
                  position: relative;
                  width: 50%;
                  height: 0;
                  margin: 0 auto 24px;
                  padding-bottom: 50%;
                `,F=v(`img`)`
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                  `,Oe=v(`h2`)`
                margin: 0;
                font-size: 21px;
              `,I=v(`p`)`
                margin: 8px 0;
                font-size: 18px;
                line-height: 24px;
              `,L=v(`div`)`
                display: flex;
                flex-direction: column;
              `,ke=v(C)`
                    display: flex;
                    gap: 8px;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    font-size: 15px;
                    font-family: inherit;
                  `,R=v(C).withConfig({displayName:`EmailSentModal___StyledButton2`,componentId:`sc-19vob9p-0`})([`margin-top:5px;color:`,`;font-size:15px;font-family:inherit;`],e=>e.theme.fullPage.text)}));function Ae({imageUrl:e,verticalLayout:t,isInline:n,smallMobileWidgetSize:r}){let i=me();return e?(0,H.jsx)(U,{_css:r?`100%`:0,_css2:r?0:`100%`,_css3:n&&j`
          flex-shrink: 0;
          width: 103px;
          height: 103px;
          padding-bottom: 0;
        `,_css4:t&&!n&&j`
          width: ${r?`160px`:`75%`};
          height: ${r?`160px`:0};
          margin: 5% auto 0;
          padding-bottom: ${r?0:`75%`};
        `,children:(0,H.jsx)(W,{src:i?xe({imgUrl:e,height:350,width:350}):e,alt:``})}):null}function je({titleId:t,descriptionId:n,ctaCopy:i,verticalLayout:a,hasCtaImage:o,subscriberEmail:s,onContinue:c,isPopup:l,isInitiallySubscribed:u,imageUrl:d,source:f,redirectLink:p,smallMobileWidgetSize:m,device:h,popupTriggerModeMobile:g,popupTriggerModeDesktop:_}){let v=le(),ne=Se(),{siteId:b}=ue(),re=ee(),ie=f===`clickToSubscribe`?`subscribe_clicktosubscribe_sign_up_click`:`subscribe_popup_sign_up_click`,ae=r({}),oe=ve(),se=ye({source:f,redirectLink:p}),ce=y()||ne.getItem(`grow-faves:unverifiedReaderId`),x=te(),{constructedRedirectUrl:S=``}=p?T({currentUrl:oe,redirectLink:p,siteId:b,readerId:ce}):{};return(0,H.jsxs)(K,{titleId:t,descriptionId:n,title:i.subscribedTitle,body:i.subscribedDescription,verticalLayout:a,hasCtaImage:o,imageUrl:d,source:f,smallMobileWidgetSize:m,children:[!re&&(0,H.jsx)(Y,{"aria-label":i.signUpButton,rel:`opener`,href:e({url:ae,siteId:b,email:s,source:`subscribeConfirm`}),onClick:()=>{v({name:l?ie:u?`subscribe_sign_up_click_initially_subscribed`:`subscribe_sign_up_click`,widgetSize:m?`small`:`large`,popupTriggerMode:h===`desktop`?_:g,isMobile:h===`mobile`||h===`tablet`}),c&&c()},_css8:(a||!o)&&j`
              margin: 10px auto;
            `,children:(0,H.jsx)(Q,{buttonText:i.signUpButton,color:x.widget.background})}),se&&(0,H.jsx)(V.Trans,{i18nKey:`subscribeConfirmationRedirectLinkText`,components:{popupRedirect:(0,H.jsx)(X,{href:S,target:`_blank`,rel:`noopener noreferrer`,children:` `})}})]})}function Me({children:e,className:t,hasBorder:n=!1,hasCtaImage:r,testId:i,verticalLayout:a=!1,zIndex:o,source:s,minHeight:c,smallMobileWidgetSize:l}){let u=s===`spotlight`||s===`emailLink`;return(0,H.jsx)(Re,{"data-testid":i,className:t,_css0:u?c+`px`:0,_css1:n?`1px solid lightgray`:`none`,_css10:a&&!u&&j`
          grid-template: "image" min-content "body" 1fr / 100%;
          grid-gap: ${l?`16px`:`24px`};
          padding: 24px;
        `,_css11:a&&u&&j`
          grid-template: "image" min-content "body" 1fr / 100%;
          grid-gap: 0;
          padding: 24px;
        `,_css12:!r&&j`
          grid-template: "body" 100% / 100%;
        `,_css13:typeof o==`number`&&j`
          z-index: ${o+1};
        `,children:e})}function Ne({subscribeWidget:e,ctaZindex:t=!1,className:a,containerWidth:s=window.innerWidth,source:l,titleId:u,descriptionId:p,onContinue:m,minHeight:h,verticalLayout:g,isWithinMVC:_,index:v,smallMobileWidgetSize:y,device:b,popupTriggerModeMobile:ce,popupTriggerModeDesktop:x}){var C,w;let T=ee(),{t:E}=(0,V.useTranslation)(),{siteId:D,subscribeInlineZIndex:pe,name:ge}=ue(),_e=ge==null?``:ge,ye=!!e.nameFieldEnabled,O=s<320,[k,xe]=B.useState(``),[A,Ce]=B.useState(``),[we,M]=B.useState(!1),[N,Ee]=B.useState(!1),De=i(),P=d(e.id),[F,Oe]=B.useState(``),I=he(),L=oe(),ke=B.useRef(De).current,R=!!e.nameFieldRequired,z=!!e.imageUrl,{sessionId:Ne}=re(),[U,W]=B.useState(null),G=e.imageUrl,Pe=r({}),Fe=fe(),q=me(),[Ie,J]=B.useState(!1),Y=be(),X=o(),Z=le(),Q=l===`spotlight`||l===`emailLink`||l===`manualPlacement`,Re=(C=e.formType)==null?`spotlight`:C,Xe=de(),[$e,et]=B.useState(!1),tt=$e&&l===`emailLink`,nt=e.redirectLink,rt=ve(),it=P===`subscribed`&&l!==`emailLink`,at=Se(),ot=n(),st=se(),ct=te(),lt=!ot&&(st||!st&&!Q);ne(()=>{U!=null&&U.closed&&(W(null),L({type:`SUBSCRIBE_AUTH_WINDOW_CLOSED`,widgetId:e.id}))},U?1e3:null);let ut=c({authParams:{url:Pe,siteId:D,email:k,conversionUrl:I,subscribeWidgetId:e.id,subscribeConsented:N,firstName:A,subscribeSource:l,source:`subscribe`},subscriberEmail:k,honeypotField:we,currentUrl:rt,redirectLink:nt,data:{siteId:D,email:k,snowplowSessionId:Ne,conversionUrl:I,subscribeWidgetId:e.id,firstName:A,redirectUri:window.location.href,source:l,placementIndex:v,formPlacement:_?`most_valuable_content`:`spotlight`,subscribeCheckboxConsented:N},trackingEvent:Q?{name:`subscribe_inline_success`,location:_?`most_valuable_content`:`spotlight`,formType:Re,formId:e.id,order:v}:{name:Le(l),formId:e.id,widgetSize:y?`small`:`large`,popupTriggerMode:b===`desktop`?x:ce,isMobile:b===`mobile`||b===`tablet`},setAuthWindow:W,setInvalidEmailError:Oe});if(!((w=e.translation)!=null&&w.title)||!e.translation.description||!e.translation.buttonText)return null;let $={title:e.translation.title,description:e.translation.description,subscribeButton:e.translation.buttonText,subscribedTitle:T?E(`subscribeConfirmationTitleLoggedIn`):E(`subscribeConfirmationTitleNotLoggedIn`,{siteName:_e}),subscribedDescription:E(T?`subscribeConfirmationDescriptionLoggedIn`:`subscribeConfirmationDescriptionNotLoggedIn`,{siteName:_e}),consentCheckbox:(0,H.jsx)(ze,{children:(0,H.jsx)(V.Trans,{i18nKey:X?`subscribeConsentOptInMessageExpanded`:`subscribeConsentOptOutMessage`,components:ie({privacyNoticeLink:(0,H.jsx)(S,{href:ae,target:`_blank`,underline:!0})},X&&{adPartnerLink:(0,H.jsx)(S,{href:`https://www.mediavine.com/ad-partners/`,target:`_blank`,underline:!0})})})}),consentMessage:(0,H.jsx)(Be,{_css14:lt&&!y?`center`:`left`,children:(0,H.jsx)(V.Trans,{i18nKey:`subscribeConsentOptOutMessage`,components:{privacyNoticeLink:(0,H.jsx)(S,{href:ae,target:`_blank`,underline:!0})}})}),emailInputPlaceholder:E(`subscribeEmailInputPlaceholderText`),nameInputPlaceholder:E(R?`subscribeNameInputPlaceholderText`:`subscribeNameInputPlaceholderOptionalText`),signUpButton:E(`subscribeSuccessCtaText`),subscribeErrorMessage:E(`subscribeErrorMessage`),subscribeNameInputErrorMessage:E(`subscribeNameInputErrorMessage`)},dt=()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(je,{titleId:u,descriptionId:p,ctaCopy:$,verticalLayout:g,hasCtaImage:z,subscriberEmail:k,onContinue:m,isPopup:l===`clickToSubscribe`,isInitiallySubscribed:ke,imageUrl:G,source:l,redirectLink:nt,device:b,popupTriggerModeMobile:ce,popupTriggerModeDesktop:x}),Ie&&(0,H.jsx)(Te,{email:k,onClose:()=>J(!1),imageUrl:G,honeypot:we})]}),ft=()=>(0,H.jsxs)(H.Fragment,{children:[ye&&(0,H.jsx)(Ve,{"aria-label":$.nameInputPlaceholder,placeholder:$.nameInputPlaceholder,type:`text`,value:A,onChange:e=>Ce(e.target.value),pattern:`^[\\p{L}\\s]*$`,title:$.subscribeNameInputErrorMessage,required:R,autoComplete:`given-name`,_css15:O&&j`
                margin-bottom: 0.5em;
              `}),(!T||l===`emailLink`)&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(He,{"aria-label":E(`doNotFillOut`),tabIndex:-1,type:`text`,"data-testid":`honeypot`,placeholder:`Website`,name:`website`,onChange:()=>M(!0),required:!1,autoComplete:`off`}),(0,H.jsx)(Ue,{"aria-label":$.emailInputPlaceholder,placeholder:$.emailInputPlaceholder,type:`email`,value:k,onChange:e=>xe(e.target.value),required:!0,autoComplete:`email`,pattern:"^[a-zA-Z0-9.!#$%&'*+\\/=?^_`\\{\\|\\}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)+$",title:`Please enter a valid email`,_css16:O&&j`
                  margin-bottom: 0.5em;
                `})]})]}),pt=()=>{let e=E(X?`subscribeConsentOptInMessageExpanded`:`subscribeConsentOptOutMessage`);return(0,H.jsx)(We,{label:(0,H.jsx)(Qe,{label:$.consentCheckbox}),checked:N,onChange:()=>Ee(e=>!e),required:!1,ariaLabel:e,_css17:y?`24px`:`8px`})};return(0,H.jsxs)(Me,{className:a,hasBorder:l===`spotlight`||l===`emailLink`||l===`manualPlacement`,hasCtaImage:z,testId:`inline-subscribe`,verticalLayout:g,zIndex:t?pe+1:void 0,source:l,minHeight:h,smallMobileWidgetSize:y,children:[G&&!(g&&Q)&&(0,H.jsx)(Ae,{imageUrl:G,verticalLayout:g,smallMobileWidgetSize:y}),it||tt?dt():(()=>{let t=(g||!z)&&T;return(0,H.jsxs)(K,{title:$.title,titleId:u,descriptionId:p,body:$.description,verticalLayout:g,hasCtaImage:z,source:l,imageUrl:G,smallMobileWidgetSize:y,children:[P===`failed`&&(0,H.jsxs)(Ge,{role:`alert`,children:[$.subscribeErrorMessage,F&&(0,H.jsx)(`div`,{children:F})]}),(0,H.jsxs)(Ke,{_css18:y&&g?`24px`:0,children:[(0,H.jsxs)(`form`,{onSubmit:function(){var t=f(function*(t){if(t.stopPropagation(),t.preventDefault(),l!==`emailLink`)ut();else{if(we){Z({name:`subscribe_sign_up_spam`}),L({type:`SUBSCRIBE_SUCCESS`,widgetId:e.id}),et(!0),J(!0);return}try{var n;let t=(n=(yield Xe({variables:{data:{siteId:D,snowplowSessionId:Ne,conversionUrl:I,lockedContentWidgetId:null,redirectUri:window.location.href,subscribeWidgetId:e.id,source:`emailLink`,email:k,firstName:A,formPlacement:_?`most_valuable_content`:`spotlight`,placementIndex:v,subscribeCheckboxConsented:N}}})).data)==null?void 0:n.createSiteSubscription.siteSubscription.readerId;if(t){var r,i;L({type:`SUBSCRIBE_SUCCESS`,readerId:t,widgetId:e.id}),at.setItem(`grow-faves:unverifiedReaderId`,t),Z({name:`subscribe_inline_success`,formType:e.formType,location:_?`most_valuable_content`:`spotlight`,formId:e.id,order:v}),!((i=(yield Fe({variables:{email:k,readerId:t,blockImageTransforms:q,where:{id:(r=Y==null?void 0:Y.id)==null?``:r}}})).data)==null||(i=i.sendEmailPostLinkEmail)==null)&&i.success&&(Z({name:`email_link_email_sent`}),et(!0),J(!0))}}catch(e){console.error(e)}}});return function(e){return t.apply(this,arguments)}}(),children:[ot&&pt(),(0,H.jsxs)(qe,{_css19:g?`column`:`row`,_css20:g&&!(l===`spotlight`||l===`emailLink`)&&j`
                  margin-top: ${y?0:`1em`};
                `,_css21:O&&j`
                  flex-flow: column;
                `,children:[ft(),(0,H.jsxs)(Je,{type:`submit`,"aria-label":$.subscribeButton,$buttonSize:`s`,_css22:t&&j`
                    margin: ${y?`0 auto`:`0 auto 10px`};
                  `,_css23:l!==`emailLink`&&l!==`spotlight`&&j`
                    width: 100%;
                  `,children:[P===`subscribing`&&(0,H.jsx)(Ye,{}),(0,H.jsx)(Ze,{buttonText:$.subscribeButton,color:ct.widget.background})]})]})]}),!ot&&$.consentMessage]})]})})()]})}var B,V,H,U,W,G,Pe,K,Fe,q,Ie,J,Y,X,Z,Q,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e=u((()=>{a(),B=m(A()),E(),D(),b(),pe(),V=k(),h(),ce(),g(),z(),_e(),p(),H=ge(),O(),w(),U=v(`div`)`
        grid-area: image;
        position: relative;
        width: 100%;
        height: ${e=>e._css};
        padding-bottom: ${e=>e._css2};
        ${e=>e._css3}
        ${e=>e._css4}
      `,W=v(`img`)`
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: cover;
        `,G=v(`div`)`
        grid-area: body;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        text-align: left;
        ${e=>e._css5};
      `,Pe=v(`div`)`${e=>e._css6}`,K=({title:e,titleId:t,descriptionId:n,body:r,children:i,verticalLayout:a,hasCtaImage:o,source:s,imageUrl:c,smallMobileWidgetSize:l})=>{let u=s===`spotlight`||s===`emailLink`||s===`manualPlacement`,d=j`
    display: flex;
    align-items: center;
    margin: 0 0 0.5em;
    ${a&&u&&j`
      gap: 12px;
    `}
    ${a&&!u&&j`
      flex-flow: column;
      text-align: center;
    `}
  `;return(0,H.jsxs)(G,{_css5:a&&!u&&j`
          align-items: center;
          text-align: center;
        `,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsxs)(Pe,{_css6:d,children:[a&&o&&u&&(0,H.jsx)(Ae,{isInline:!0,verticalLayout:!0,imageUrl:c,smallMobileWidgetSize:l}),(0,H.jsx)(q,{title:e,titleId:t})]}),(0,H.jsx)(J,{body:r,descriptionId:n,isSpotlightSubscribeWidget:u,isMobile:se(),smallMobileWidgetSize:l})]}),i]})},Fe=v(`h3`)`
        display: -webkit-box;
        max-width: 100%;
        margin: 0;
        font-size: 1.3em;
        line-height: normal;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      `,q=B.memo(({title:e,titleId:t})=>(0,H.jsx)(Fe,{id:t,children:e})),q.displayName=`MemoizedTitle`,Ie=v(`p`)`
          /* bottom margin of description */
          margin: ${e=>e._css7};
          font-size: 1.2em;
          line-height: 1.35em;
        `,J=B.memo(({body:e,descriptionId:t,isSpotlightSubscribeWidget:n,isMobile:r,smallMobileWidgetSize:i})=>(0,H.jsx)(Ie,{id:t,_css7:n&&!r?`0`:i?`0.5em 0 0`:`0.5em 0`,children:e})),J.displayName=`MemoizedDescription`,Y=v(t)`
            display: flex;
            align-items: center;
            height: initial;
            margin: 0 auto;
            padding: 0.7em 2em;
            font-size: 0.75em;
            line-height: 1.5em;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            border-radius: 0;

            :disabled {
              pointer-events: none;
            }
            ${e=>e._css8}
          `,X=v(`a`)`
                  cursor: pointer;
                  text-decoration: "underline";
                  color: inherit;
                `,Z=v(`p`)`
        color: ${e=>e._css9};
      `,Q=B.memo(({buttonText:e,color:t})=>(0,H.jsx)(Z,{_css9:t,children:e})),Q.displayName=`MemoizedSignUpButton`,Le=e=>{switch(e){case`clickToSubscribe`:return`subscribe_clicktosubscribe_success`;case`popup`:return`subscribe_popup_success`;case`bookmarkActionPack`:return`subscribe_action_pack_favorite_success`;case`loginActionPack`:return`subscribe_action_pack_login_success`;case`signUpActionPack`:return`subscribe_action_pack_signUp_success`;case`sdkActionPack`:return`subscribe_action_pack_sdk_success`;case`createActionPack`:return`subscribe_action_pack_create_success`;default:return`subscribe_action_pack_unknown_success`}},Re=v(`div`)`
        position: relative;
        display: grid;
        grid-template-areas: "image body";
        grid-template-columns: minmax(175px, 1fr) 4fr;
        grid-gap: 6%;
        width: 100%;
        min-height: ${e=>e._css0};
        margin: 0;
        padding: 3% 6% 3% 3%;
        box-sizing: border-box;
        color: ${e=>e.theme.fullPage.text};
        font-size: 15px;
        border: ${e=>e._css1};
        border-radius: 5px;
        background-color: ${e=>e.theme.fullPage.background};

        input {
          color: ${e=>e.theme.fullPage.text};
        }
        ${e=>e._css10}
        ${e=>e._css11}
        ${e=>e._css12}
        ${e=>e._css13}
      `,ze=v(`span`)`
          font-size: 14px;
          line-height: 18px;
          text-align: left;
        `,Be=v(`span`)`
          font-size: 14px;
          line-height: 18px;
          text-align: ${e=>e._css14};
        `,Ve=v(`input`)`
              width: 100%;
              margin: 0;
              padding: 0.6em 0.8em;
              box-sizing: border-box;
              font-size: 0.9em;
              border: 1px solid #e1e1e1;
              border-radius: 0;
              background-color: transparent;
              outline: none;

              ${e=>e._css15}
            `,He=v(`input`)`
                position: absolute;
                left: -99999px;
                width: 1px;
                height: 1px;
                opacity: 0;
              `,Ue=v(`input`)`
                width: 100%;
                margin: 0;
                padding: 0.6em 0.8em;
                box-sizing: border-box;
                font-size: 0.9em;
                border: 1px solid #e1e1e1;
                border-radius: 0;
                background-color: transparent;
                outline: none;

                ${e=>e._css16}
              `,We=v(x)`
          margin-top: 5px;
          margin-bottom: ${e=>e._css17};
          margin-left: -9px;
          font-size: 15px;
          line-height: 18px;
          text-align: left;
          -webkit-tap-highlight-color: transparent;

          input {
            width: 15px;
            height: 15px;
            margin: 11px;
          }
        `,Ge=v(`div`)`
              color: red;
              font-size: 0.8em;
            `,Ke=v(`div`)`
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: ${e=>e._css18};
          `,qe=v(`div`)`
                display: flex;
                flex-direction: ${e=>e._css19};
                gap: 10px;
                ${e=>e._css20}
                ${e=>e._css21}
              width: 100%;
              `,Je=v(C)`
                  height: 3em;
                  padding: 0 2em;
                  font-size: 0.75em;
                  letter-spacing: 0.15em;
                  white-space: nowrap;
                  text-transform: uppercase;
                  border-radius: 0;

                  :disabled {
                    pointer-events: none;
                  }
                  ${e=>e._css22}
                  ${e=>e._css23}
                `,Ye=v(l)`
                      margin-right: 5px;
                      border-color: white;
                      border-bottom-color: transparent;
                      border-left-color: transparent;
                    `,Xe=v(`span`).withConfig({displayName:`SubscribeCtaWidget___StyledSpan3`,componentId:`xaybyu-0`})([`color:`,`;`],e=>e._css24),Ze=B.memo(({buttonText:e,color:t})=>(0,H.jsx)(Xe,{_css24:t,children:e})),Ze.displayName=`MemoizedButtonText`,Qe=B.memo(({label:e})=>(0,H.jsx)(`span`,{children:e})),Qe.displayName=`MemoizedLabel`}));export{$e as a,Ne as i,Ae as n,Me as r,K as t};