window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme21"]=window.wsb["Theme21"]||window.radpack("@widget/LAYOUT/bs-layout21-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["DynamicFontScaler"]=function(e){let t,{containerId:a,targetId:o,fontSizes:r,maxLines:l,prioritizeDefault:n}=e;if("undefined"==typeof document)return;const i=document.getElementById(a),s=document.getElementById(o);function c(e){return function(e){const t=parseInt(p(e,"padding-left")||0,10),a=parseInt(p(e,"padding-right")||0,10);return e.scrollWidth+t+a}(e)<=i.clientWidth&&function(e){const t=e.offsetHeight,a=parseInt(p(e,"line-height"),10)||1;return Math.floor(t/a)}(e)<=l}function g(){if(!i||!s||t===window.innerWidth)return;if(s.hasAttribute("data-font-scaled"))return void function(){s.removeAttribute("data-last-size");const e=document.querySelector(`#${o}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${a}"]`)).sort(((e,t)=>r.indexOf(e.getAttribute("data-size"))-r.indexOf(t.getAttribute("data-size"))));if(i.clientWidth&&e.length){const t=i.style.width||"";i.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${i.clientWidth}px`}));const a=function(e){return e.find(c)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),i.style.width=t;const r=p(a,"font-size"),l=s.getAttribute("data-last-size");if(r&&r!==l){if(n){const e=p(s,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}s.setAttribute("data-last-size",r);let e=document.querySelector(`#${o}-style`);e||(e=document.createElement("style"),e.id=`${o}-style`,document.head.appendChild(e)),e.textContent=`#${s.id} { font-size: ${r} !important; }`}}}function p(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}g(),window.addEventListener("resize",g)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-58275\",\"targetId\":\"logo-text-58276\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":8,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-58277\",\"targetId\":\"dynamic-tagline-58278\",\"fontSizes\":[\"medium\",\"small\",\"xsmall\"],\"maxLines\":4}"));
window.wsb['context-bs-1']=JSON.parse("{\"renderMode\":\"PUBLISH\",\"fonts\":[\"muli\",\"default\",\"\"],\"colors\":[\"#1e84f2\"],\"fontScale\":\"medium\",\"locale\":\"en-IE\",\"language\":\"en\",\"internalLinks\":{},\"isHomepage\":true,\"navigationMap\":{\"432ebeba-0ce8-47db-94af-4a294f7db70d\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"432ebeba-0ce8-47db-94af-4a294f7db70d\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"4498e7ad-30c5-4b20-98dd-29379bb21bc2\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"4498e7ad-30c5-4b20-98dd-29379bb21bc2\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"81b98193-64dd-4a59-b659-3f5866590b95\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"81b98193-64dd-4a59-b659-3f5866590b95\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"muli\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":25,\"primary\":{\"id\":\"muli\",\"name\":\"Muli\",\"url\":\"//fonts.googleapis.com/css?family=Muli:400&display=swap\",\"family\":\"'Muli', sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"quicksand\",\"name\":\"Quicksand\",\"url\":\"//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap\",\"family\":\"Quicksand, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}},\"colors\":[{\"id\":\"#1e84f2\",\"meta\":{\"primary\":\"rgb(30, 132, 242)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme21\",\"paintJob\":\"LIGHT_ALT\"}");
Core.utils.renderBootstrap({elId:'bs-1',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"0665defc-ff46-492d-93a8-740605cd680d\",\"env\":\"production\",\"isMobile\":null,\"websiteId\":\"4c4f61e4-02a7-47d9-af7a-efde89acca72\",\"accountId\":\"331179ce-e580-11ec-82a5-3417ebe73f23\",\"isReseller\":false,\"domainName\":\"avalidator.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"A Validator - Your Trusted Cryptocurrency Validator\",\"reamazeBrandId\":null,\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"cookieBannerEnabled\":true,\"notificationPreference\":\"EMAIL\",\"formEmail\":\"fuadcse@gmail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"reamazePosition\":\"bottom-right\",\"reamazeThemeColor\":\"#1e84f2\",\"reamazePromptEnabled\":true,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"reamazeDismissCarousel\":false,\"widgetId\":\"0665defc-ff46-492d-93a8-740605cd680d\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IE\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"0665defc-ff46-492d-93a8-740605cd680d\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"32eebf78-627f-4010-afd7-3d76fb5249ab\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-58272').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about5","wam_site_businessCategory":"glassblocksupplier","wam_site_theme":"layout21","wam_site_locale":"en-IE","wam_site_fontPack":"muli","wam_site_cookieBannerEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);