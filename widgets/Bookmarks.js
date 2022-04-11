/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/events","../core/Handles","../core/maybe","../core/watchUtils","../core/accessorSupport/decorators/aliasOf","../core/arrayUtils","../core/has","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../intl/date","../webdoc/support/SlideThumbnail","./Widget","./Bookmarks/BookmarksUserState","./Bookmarks/BookmarksViewModel","./FeatureTable/Grid/support/ButtonMenu","./FeatureTable/Grid/support/ButtonMenuItem","./support/Heading","./support/widgetUtils","./support/decorators/messageBundle","../core/Logger","./support/decorators/vmEvent","./support/jsxFactory","../chunks/sortable.esm"],(function(t,e,o,i,r,s,n,a,d,l,u,k,m,c,h,_,b,p,g,B,f,v,x,y,E,I,S){"use strict";function w(t,e,o){t.splice(o,0,t.splice(e,1)[0])}const A="bookmarks",T="data-bookmark-uid",C={base:"esri-bookmarks esri-widget--panel",loaderContainer:"esri-bookmarks__loader-container",loader:"esri-bookmarks__loader",fadeIn:"esri-bookmarks--fade-in",bookmarkList:"esri-bookmarks__list",bookmarkListSortable:"esri-bookmarks__list--sortable",bookmark:"esri-bookmarks__bookmark",bookmarkButton:"esri-bookmarks__bookmark-button",bookmarkImageContainer:"esri-bookmarks__bookmark-image-container",bookmarkEditButtonContainer:"esri-bookmarks__bookmark-edit-button-container",bookmarkEditButton:"esri-bookmarks__bookmark-edit-button",bookmarkDragHandle:"esri-bookmarks_bookmark-drag-handle",bookmarkDragHandleIcon:"esri-bookmarks_bookmark-drag-handle-icon",bookmarkIcon:"esri-bookmarks__bookmark-icon",bookmarkImage:"esri-bookmarks__image",bookmarkLabel:"esri-bookmarks__bookmark-label",bookmarkName:"esri-bookmarks__bookmark-name",bookmarkTimeExtent:"esri-bookmarks__bookmark-time-extent",bookmarkActive:"esri-bookmarks__bookmark--active",noBookmarksContainer:"esri-widget__content--empty",noBookmarksHeader:"esri-bookmarks__no-bookmarks-heading",noBookmarksIcon:"esri-widget__no-bookmark-icon",noBookmarksDescription:"esri-bookmarks__no-bookmarks-description",addingBookmark:"esri-bookmarks__adding-bookmark",addBookmark:"esri-bookmarks__add-bookmark",addBookmarkButton:"esri-bookmarks__add-bookmark-button",addBookmarkIcon:"esri-bookmarks__add-bookmark-icon",authoringCard:"esri-bookmarks__authoring-card",authoringContainer:"esri-bookmarks__authoring-container",authoringForm:"esri-bookmarks__authoring-form",authoringLabel:"esri-bookmarks__authoring-label",authoringActions:"esri-bookmarks__authoring-actions",authoringInputInvalid:"esri-bookmarks__authoring-input--invalid",authoringDeleteButton:"esri-bookmarks__authoring-delete-button",authoringCancelButton:"esri-bookmarks__authoring-cancel-button",timeExtentContainer:"esri-bookmarks__time-extent-container",timeExtent:"esri-bookmarks__time-extent",timeExtentGroup:"esri-bookmarks__time-extent-group",timeExtentDate:"esri-bookmarks__time-extent-date",timeExtentTime:"esri-bookmarks__time-extent-time",esriWidget:"esri-widget",esriWidgetDisabled:"esri-widget--disabled",esriButton:"esri-button",esriButtonTertiary:"esri-button--tertiary",esriInput:"esri-input",iconHandle:"esri-icon-handle-vertical",iconPlus:"esri-icon-plus",iconEdit:"esri-icon-edit",iconHandleHorizontal:"esri-icon-handle-horizontal",iconRefresh:"esri-icon-refresh",iconLink:"esri-icon-link",iconRemove:"esri-icon-erase",widgetIcon:"esri-icon-bookmark",header:"esri-widget__heading",loading:"esri-icon-loading-indicator",rotating:"esri-rotating"},U={addBookmark:!0,thumbnail:!0,time:!0},M=/^https:\/\/.*/i,N="esri.widgets.Bookmarks";let D=function(o){function a(t,e){var i;return(i=o.call(this,t,e)||this)._handles=new r,i._addInputNode=null,i._editInputNode=null,i._urlEditInputNode=null,i._addBookmarkButtonNode=null,i._focusAddBookmarkButton=!1,i._focusEditInputBox=!1,i._focusAddInputBox=!1,i._focusUrlEditInputBox=!1,i._sortable=null,i._sortableNode=null,i._focusSortUid=null,i._selectedSortUid=null,i._sortableSavedItems=null,i._editIncludeTimeExtent=null,i._userState=null,i.defaultCreateOptions=null,i.defaultEditOptions=null,i.bookmarks=null,i.disabled=!1,i.editingEnabled=!1,i.headingLevel=2,i.goToOverride=null,i.iconClass=C.widgetIcon,i.label=void 0,i.messages=null,i.messagesCommon=null,i.messagesUnits=null,i.view=null,i.viewModel=new p,i.visibleElements={...U},i}e._inheritsLoose(a,o);var d=a.prototype;return d.initialize=function(){this.own([n.init(this,"viewModel.bookmarks",(()=>this._bookmarksInitialized())),n.init(this,"editingEnabled",(()=>this._toggleSorting()))])},d.destroy=function(){this._destroySortable(),this._handles.destroy(),this._handles=null,this._editMenu.destroy()},d.loadDependencies=function(){return Promise.all([new Promise(((e,o)=>t(["../chunks/calcite-label"],e,o))),new Promise(((e,o)=>t(["../chunks/calcite-switch"],e,o)))])},d.castVisibleElements=function(t){return{...U,...t}},d.endAddBookmark=function(){this._userState=null},d.goTo=function(t){return this.viewModel.goTo(t)},d.render=function(){const{state:t}=this.viewModel,e="loading"===t?this.renderLoading():this.renderBookmarks();return I.tsx("div",{class:this.classes(C.base,C.esriWidget,{[C.esriWidgetDisabled]:this.disabled})},e)},d.startAddBookmark=function(){this._userState=new b({state:"add"}),this._focusAddInputBox=!0,this.scheduleRender()},d.renderLoading=function(){return I.tsx("div",{class:C.loaderContainer,key:"loader"},I.tsx("div",{class:C.loader}))},d.renderNoBookmarksContainer=function(){const{messages:t}=this;return I.tsx("div",{class:C.noBookmarksContainer,key:"no-bookmarks"},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.noBookmarksIcon,C.widgetIcon)}),I.tsx(f.Heading,{level:this.headingLevel,class:this.classes(C.header,C.noBookmarksHeader)},null==t?void 0:t.noBookmarksHeading),I.tsx("p",{class:C.noBookmarksDescription},null==t?void 0:t.noBookmarksDescription))},d.renderAddBookmarkLoading=function(){var t;return I.tsx("div",{key:"adding-bookmark",class:C.addingBookmark},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.loading,C.rotating)}),null==(t=this.messages)?void 0:t.addingBookmark)},d.renderBookmarkItems=function(t){if(!t)return null;const{_userState:e,editingEnabled:o}=this;return t.map((t=>o&&t&&e&&("edit"===e.state||"edit-thumbnail"===e.state)&&e.bookmark===t?"edit-thumbnail"===e.state?this.renderEditingBookmarkUrl(e.editedBookmark):this.renderEditingBookmark(e.editedBookmark):this.renderBookmark(t))).toArray()},d.renderBookmarksContainer=function(t){var e;const{_userState:o,editingEnabled:i}=this,r="add"===(null==o?void 0:o.state),s=i&&!r?this.renderAddBookmarkButton():null,n=i?r&&o.loading?this.renderAddBookmarkLoading():"add"===(null==o?void 0:o.state)?this.renderAddingBookmark():null:null;return[I.tsx("ul",{key:"bookmark-list","aria-label":null==(e=this.messages)?void 0:e.widgetLabel,class:this.classes(C.bookmarkList,{[C.bookmarkListSortable]:this.editingEnabled}),afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this},this.renderBookmarkItems(t)),s,n]},d.renderAddBookmarkButton=function(){var t;return this.visibleElements.addBookmark?I.tsx("div",{key:"add-bookmark-item",class:C.addBookmark},I.tsx("button",{class:this.classes(C.esriButton,C.esriButtonTertiary,C.addBookmarkButton),onclick:this.startAddBookmark,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this,type:"button"},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.addBookmarkIcon,C.iconPlus)}),null==(t=this.messages)?void 0:t.addBookmark)):null},d.renderBookmarks=function(){const{bookmarks:t}=this.viewModel,e=t&&t.filter(Boolean),o=e&&e.length,i=o||this.editingEnabled?this.renderBookmarksContainer(e):null;return[o?null:this.renderNoBookmarksContainer(),i]},d.renderEditContainer=function(t){const{messagesCommon:e}=this;return I.tsx("div",{class:C.bookmarkEditButtonContainer,key:"edit-container"},I.tsx("button",{title:null==e?void 0:e.edit,"aria-label":null==e?void 0:e.edit,"data-bookmark":t,onclick:this._showEditBookmarkForm,bind:this,class:C.bookmarkEditButton,type:"button"},I.tsx("span",{"aria-hidden":"true",class:C.iconEdit})))},d.renderDragHandle=function(t){const{messagesCommon:e}=this,o={[T]:t.uid};return I.tsx("div",{role:"button",tabIndex:0,key:"drag-handle",bind:this,class:C.bookmarkDragHandle,onkeydown:this._dragHandleKeydown,afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,onblur:this._dragHandleBlur,"aria-pressed":this._selectedSortUid===t.uid?"true":"false","aria-label":null==e?void 0:e.dragHandleLabel,title:null==e?void 0:e.dragHandleTitle,...o},I.tsx("span",{"aria-hidden":"true",class:this.classes(C.bookmarkDragHandleIcon,C.iconHandle)}))},d.renderBookmarkImageIcon=function(){return I.tsx("span",{"aria-hidden":"true",class:this.classes(C.bookmarkIcon,C.widgetIcon)})},d.renderBookmarkImage=function(t){const{visibleElements:e}=this,{thumbnail:o}=t,i=o&&o.url||"";return e.thumbnail&&i?I.tsx("img",{src:i,alt:"",class:C.bookmarkImage}):null},d.renderBookmarkTimeSwitch=function(t){const{messages:e}=this,{timeExtent:o}=t,{view:i}=this.viewModel;return i.timeExtent||o?I.tsx("calcite-label",{layout:"inline-space-between","disable-spacing":"true"},e.includeTimeExtent,I.tsx("calcite-switch",{scale:"s",checked:!!o,onCalciteSwitchChange:t=>this._editIncludeTimeExtent=!!t.detail.switched})):null},d.renderBookmarkTimeExtent=function(t){const{visibleElements:e}=this,{timeExtent:o}=t;return o?I.tsx("span",{class:C.timeExtent},[s.isSome(o.start)&&I.tsx("span",{key:"start-date-group",class:C.timeExtentGroup},I.tsx("span",{key:"start-date",class:C.timeExtentDate},this._formatDate(o.start)),e.time&&I.tsx("span",{key:"start-time",class:C.timeExtentTime},this._formatTime(o.start))),s.isSome(o.end)&&(s.isNone(o.start)||o.start.getTime()!==o.end.getTime())&&I.tsx("span",{key:"end-date-group",class:C.timeExtentGroup},I.tsx("span",{key:"end-date",class:C.timeExtentDate},this._formatDate(o.end)),e.time&&I.tsx("span",{key:"end-time",class:C.timeExtentTime},this._formatTime(o.end)))]):null},d.renderBookmarkButton=function(t){const{messagesCommon:e}=this,{name:o,timeExtent:i}=t,{abilities:r}=this.viewModel,s=o||(null==e?void 0:e.untitled),n=I.tsx("div",{class:C.bookmarkImageContainer},this.renderBookmarkImage(t)||this.renderBookmarkImageIcon()),a=r.time&&i?I.tsx("span",{key:"time-extent",class:C.bookmarkTimeExtent},this.renderBookmarkTimeExtent(t)):null;return I.tsx("button",{key:"bookmark-button",class:C.bookmarkButton,bind:this,"data-bookmark":t,onclick:this._goToBookmark,type:"button"},n,I.tsx("div",{class:C.bookmarkLabel},I.tsx("span",{key:"bookmark-title",class:C.bookmarkName},s),a))},d.renderBookmark=function(t){const{activeBookmark:e}=this.viewModel,o={[C.bookmarkActive]:e===t},i=this.editingEnabled?this.renderEditContainer(t):null,r={[T]:t.uid},s=this.editingEnabled?this.renderDragHandle(t):null;return I.tsx("li",{key:t,class:this.classes(C.bookmark,o),...r},s,this.renderBookmarkButton(t),i)},d.renderEditingBookmarkName=function(t){const{messages:e,_userState:o}=this,i="name-required"===o.validationState;return I.tsx("label",{class:C.authoringLabel},null==e?void 0:e.title,i?I.tsx("strong",null,null==e?void 0:e.invalidTitle):null,I.tsx("input",{required:!0,bind:this,class:this.classes(C.esriInput,i?C.authoringInputInvalid:null),type:"text",value:t.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark":t,"data-node-ref":"_editInputNode",placeholder:null==e?void 0:e.titlePlaceholder}))},d.renderEditingBookmarkUrlActions=function(){const{messagesCommon:t}=this;return I.tsx("div",{class:C.authoringActions},I.tsx("input",{type:"button",value:null==t?void 0:t.back,class:this.classes(C.esriButton,C.esriButtonTertiary),onclick:this._closeUrlEditBookmarkForm,bind:this}),I.tsx("input",{class:C.esriButton,type:"submit",value:null==t?void 0:t.add}))},d.renderEditingBookmarkActions=function(){const{messagesCommon:t}=this,{bookmark:e}=this._userState;return I.tsx("div",{class:C.authoringActions},I.tsx("input",{type:"button",value:null==t?void 0:t.delete,class:this.classes(C.esriButton,C.esriButtonTertiary,C.authoringDeleteButton),"data-bookmark":e,onclick:this._deleteBookmark,bind:this}),I.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(C.esriButton,C.esriButtonTertiary),onclick:this._closeEditBookmarkForm,bind:this}),I.tsx("input",{class:C.esriButton,type:"submit",value:null==t?void 0:t.save}))},d.renderEditingBookmarkUrlInput=function(t){var e;const{messages:o,_userState:i}=this,r=null==(e=t.thumbnail)?void 0:e.url,s=M.test(r)?r:null,n="absolute-url-required"===i.validationState;return I.tsx("label",{class:C.authoringLabel},n?I.tsx("strong",null,null==o?void 0:o.invalidImageUrl):null,I.tsx("input",{required:!0,bind:this,class:this.classes(C.esriInput,n?C.authoringInputInvalid:null),type:"text",value:s,afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,"data-bookmark":t,"data-node-ref":"_urlEditInputNode",title:null==o?void 0:o.imageUrlTooltip,placeholder:o&&`https://<${o.imageUrlPlaceholder}>`}))},d.renderEditingBookmarkUrl=function(t){const e={[T]:t.uid};return I.tsx("li",{key:"edit-bookmark-url-form",class:C.authoringCard,...e},I.tsx("form",{class:C.authoringForm,onsubmit:this._editBookmarkUrlSubmit,bind:this},this.renderEditingBookmarkUrlInput(t),this.renderEditingBookmarkUrlActions()))},d.renderEditingBookmark=function(t){const e={[T]:t.uid},{abilities:o}=this.viewModel,i=o.time?I.tsx("div",{key:"edit-bookmark-time-container",class:C.timeExtentContainer},this.renderBookmarkTimeSwitch(t),this._editIncludeTimeExtent&&this.renderBookmarkTimeExtent(t)):null;return I.tsx("li",{key:"edit-bookmark-form",class:C.authoringCard,...e},I.tsx("form",{class:C.authoringForm,onsubmit:this._editBookmarkSubmit,bind:this},I.tsx("div",{class:C.authoringContainer},I.tsx("div",{class:C.bookmarkImageContainer},this.renderBookmarkImage(t),this._editMenu.render()),this.renderEditingBookmarkName(t)),i,this.renderEditingBookmarkActions()))},d.renderAddingBookmarkName=function(){const{_userState:t,messages:e}=this,o="name-required"===t.validationState;return I.tsx("label",{class:C.authoringLabel},null==e?void 0:e.title,o?I.tsx("strong",null,null==e?void 0:e.invalidTitle):null,I.tsx("input",{required:!0,bind:this,class:this.classes(C.esriInput,o?C.authoringInputInvalid:null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:null==e?void 0:e.titlePlaceholder}))},d.renderAddingBookmarkActions=function(){const{messagesCommon:t}=this;return I.tsx("div",{class:this.classes(C.authoringActions)},I.tsx("input",{type:"button",value:null==t?void 0:t.cancel,class:this.classes(C.esriButton,C.esriButtonTertiary,C.authoringCancelButton),onclick:this._endAddBookmark.bind(this),bind:this}),I.tsx("input",{class:C.esriButton,type:"submit",value:null==t?void 0:t.add}))},d.renderAddingBookmark=function(){return I.tsx("div",{key:"add-bookmark-form",class:C.authoringCard},I.tsx("form",{class:C.authoringForm,onsubmit:this._addBookmarkSubmit,bind:this},this.renderAddingBookmarkName(),this.renderAddingBookmarkActions()))},d._formatDate=function(t){return t?c.formatDate(t,c.convertDateFormatToIntlOptions("short-date")):null},d._formatTime=function(t){return t?c.formatDate(t,c.convertDateFormatToIntlOptions("long-time")):null},d._dragHandleBlur=function(){this._selectedSortUid=null,this.scheduleRender()},d._dragHandleKeydown=function(t){const{_sortableSavedItems:e}=this,o=["ArrowDown","ArrowUp","Escape","Tab"," ","Enter"],r=i.eventKey(t);if(-1===o.indexOf(r))return;const{_sortable:s,_selectedSortUid:n}=this,a=s.toArray(),d=t.target.getAttribute(T),l=a.indexOf(d);if(v.isActivationKey(r)){const t=n&&n===d;return this._selectedSortUid=t?null:d,this._sortableSavedItems=t?null:this._sortable.toArray(),void this.scheduleRender()}if("Tab"===r)return this._selectedSortUid=null,void this.scheduleRender();if("Escape"===r&&e)return t.stopPropagation(),this._selectedSortUid=null,this._updateSortItems(e,s,d),void this.scheduleRender();if(-1===l||!n)return;const u="ArrowUp"===r?l-1:l+1;u>=a.length||u<=-1||(w(a,l,u),this._updateSortItems(a,s,d))},d._updateSortItems=function(t,e,o){e.sort(t),this._sortBookmarks(e),this._focusSortUid=o,this._selectedSortUid=o},d._focusDragHandle=function(t){const{_focusSortUid:e}=this;if(!t||!e)return;t.getAttribute(T)===e&&(t.focus(),this._focusSortUid=null)},d._toggleSorting=function(){const{_sortable:t,_sortableNode:e,editingEnabled:o}=this;if(e)if(t)t.option("disabled",!o);else{const t=S.Sortable.create(e,{dataIdAttr:T,handle:`.${C.bookmarkDragHandle}`,group:A,disabled:!o,onSort:()=>this._sortBookmarks(t)});this._sortable=t}},d._sortNodeCreated=function(t){this._sortableNode=t,this._toggleSorting()},d._sortBookmarks=function(t){const{bookmarks:e}=this.viewModel;if(!e)return;const o=t.toArray();e.sort(((t,e)=>{const i=o.indexOf(t.uid),r=o.indexOf(e.uid);return i>r?1:i<r?-1:0}))},d._destroySortable=function(){const{_sortable:t}=this;t&&t.destroy(),this._sortable=null},d._endAddBookmark=function(){this._focusAddBookmarkButton=!0,this.endAddBookmark()},d._bookmarksInitialized=function(){const t="bookmarks-init",{_handles:e}=this;e.remove(t),e.add(n.on(this,"viewModel.bookmarks","change",(()=>this._bookmarksChanged())),t)},d._bookmarksChanged=function(){const t="bookmarks-change",{bookmarks:e}=this.viewModel,{_handles:o}=this;o.remove(t);const i=e.map((t=>n.watch(t,["active","name","thumbnail.url"],(()=>this.scheduleRender()))));o.add(i,t),this.scheduleRender()},d._showEditBookmarkForm=function(t){const e=t.currentTarget["data-bookmark"];this._editIncludeTimeExtent=!!e.timeExtent,this._focusEditInputBox=!0,this._userState=new b({bookmark:e,state:"edit"}),this.viewModel.goTo(e),this.scheduleRender()},d._closeUrlEditBookmarkForm=function(){this._focusEditInputBox=!0,this._userState.state="edit"},d._closeEditBookmarkForm=function(){this._userState=null},d._addBookmarkSubmit=function(t){t.preventDefault();const{_addInputNode:e,_userState:o}=this,i=e&&e.value.trim();i?(o.loading=!0,this.viewModel.createBookmark().then((t=>{t.name=i,this.viewModel.bookmarks.add(t),this._endAddBookmark()}))):o.validationState="name-required"},d._editBookmarkAndClose=function(){var t=e._asyncToGenerator((function*(t,e){const{viewModel:o}=this;yield o.editBookmark(t,{...o.defaultEditOptions,...e}),this._closeEditBookmarkForm()}));function o(e,o){return t.apply(this,arguments)}return o}(),d._editBookmarkSubmit=function(t){t.preventDefault();const{_editInputNode:e,_userState:o,_editIncludeTimeExtent:i}=this,r=e&&e.value.trim();r?(o.bookmark.name=r,o.bookmark.thumbnail=o.editedBookmark.thumbnail,i||(o.bookmark.timeExtent=null),this._editBookmarkAndClose(o.bookmark,{takeScreenshot:!1,captureTimeExtent:i})):o.validationState="name-required"},d._storeAddBookmarkButton=function(t){this._addBookmarkButtonNode=t,this._focusAddBookmark()},d._storeEditInput=function(t){this._editInputNode=t,this._focusEditInput()},d._storeAddInput=function(t){this._addInputNode=t,this._focusAddInput()},d._storeUrlEditInput=function(t){this._urlEditInputNode=t,this._focusUrlEditInput()},d._focusUrlEditInput=function(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())},d._focusAddInput=function(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())},d._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())},d._focusEditInput=function(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())},d._deleteBookmark=function(t){const e=t.currentTarget["data-bookmark"];this.viewModel.bookmarks.remove(e)},d._goToBookmark=function(t){const e=t.currentTarget["data-bookmark"];this.endAddBookmark(),this._closeEditBookmarkForm(),this.viewModel.goTo(e)},d._refreshThumbnail=function(){var t=e._asyncToGenerator((function*(){const{_userState:t,_editMenu:e,viewModel:o}=this;t.validationState=void 0,yield o.editBookmark(this._userState.editedBookmark,{takeScreenshot:!0,captureViewpoint:!1,captureRotation:!1,captureScale:!1,captureTimeExtent:!1}),e.open=!1,this._focusEditInputBox=!0,this.scheduleRender()}));function o(){return t.apply(this,arguments)}return o}(),d._removeThumbnail=function(){const{_userState:t,_editMenu:e}=this;t.editedBookmark.thumbnail=null,t.validationState=void 0,e.open=!1,this._focusEditInputBox=!0,this.scheduleRender()},d._startUseImageUrl=function(){this._userState.state="edit-thumbnail",this._editMenu.open=!1,this._focusUrlEditInputBox=!0,this.scheduleRender()},d._editBookmarkUrlSubmit=function(t){t.preventDefault();const{_urlEditInputNode:e,_userState:o}=this,i=e.value;M.test(i)?(i&&(o.editedBookmark.thumbnail=new h.SlideThumbnail({url:i})),this._closeUrlEditBookmarkForm()):o.validationState="absolute-url-required"},e._createClass(a,[{key:"_editMenuItems",get:function(){var t,e;const{messages:o,_userState:i}=this,r=null==i||null==(t=i.editedBookmark)||null==(e=t.thumbnail)?void 0:e.url;return[new B({label:null==o?void 0:o.menu.refreshThumbnail,iconClass:C.iconRefresh,clickFunction:()=>this._refreshThumbnail()}),new B({label:M.test(r)?null==o?void 0:o.menu.editImageUrl:null==o?void 0:o.menu.useImageUrl,iconClass:C.iconLink,clickFunction:()=>this._startUseImageUrl()}),r?new B({label:null==o?void 0:o.menu.removeThumbnail,iconClass:C.iconRemove,clickFunction:()=>this._removeThumbnail()}):null].filter(Boolean)}},{key:"_editMenu",get:function(){const{_editMenuItems:t,messages:e}=this,o=this._get("_editMenu");o&&o.destroy();const i=new g({iconClass:C.iconHandleHorizontal,label:null==e?void 0:e.menu.label});return i.items=t,i}}]),a}(_);o.__decorate([k.property()],D.prototype,"_editIncludeTimeExtent",void 0),o.__decorate([k.property({type:b})],D.prototype,"_userState",void 0),o.__decorate([k.property({readOnly:!0})],D.prototype,"_editMenuItems",null),o.__decorate([k.property({readOnly:!0})],D.prototype,"_editMenu",null),o.__decorate([a.aliasOf("viewModel.defaultCreateOptions")],D.prototype,"defaultCreateOptions",void 0),o.__decorate([a.aliasOf("viewModel.defaultEditOptions")],D.prototype,"defaultEditOptions",void 0),o.__decorate([a.aliasOf("viewModel.bookmarks")],D.prototype,"bookmarks",void 0),o.__decorate([k.property()],D.prototype,"disabled",void 0),o.__decorate([k.property()],D.prototype,"editingEnabled",void 0),o.__decorate([k.property()],D.prototype,"headingLevel",void 0),o.__decorate([a.aliasOf("viewModel.goToOverride")],D.prototype,"goToOverride",void 0),o.__decorate([k.property()],D.prototype,"iconClass",void 0),o.__decorate([k.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],D.prototype,"label",void 0),o.__decorate([k.property(),x.messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")],D.prototype,"messages",void 0),o.__decorate([k.property(),x.messageBundle("esri/t9n/common")],D.prototype,"messagesCommon",void 0),o.__decorate([k.property(),x.messageBundle("esri/core/t9n/Units")],D.prototype,"messagesUnits",void 0),o.__decorate([k.property()],D.prototype,"uiStrings",void 0),o.__decorate([a.aliasOf("viewModel.view")],D.prototype,"view",void 0),o.__decorate([k.property({type:p}),E.vmEvent(["select-bookmark","bookmark-edit","bookmark-select"])],D.prototype,"viewModel",void 0),o.__decorate([k.property()],D.prototype,"visibleElements",void 0),o.__decorate([u.cast("visibleElements")],D.prototype,"castVisibleElements",null),o.__decorate([k.property()],D.prototype,"endAddBookmark",null),o.__decorate([k.property()],D.prototype,"startAddBookmark",null),D=o.__decorate([m.subclass(N)],D);return D}));
