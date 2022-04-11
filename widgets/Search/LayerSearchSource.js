/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/lang","../../core/accessorSupport/decorators/property","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","./SearchSource","./support/layerSearchUtils"],(function(e,t,s,r,i,l,a,o){"use strict";var n;let c=n=function(t){function r(s){var r;return(r=t.call(this,s)||this).displayField=null,r.exactMatch=null,r.orderByFields=null,r.searchFields=null,r.searchTemplate=null,r.suggestionTemplate=null,r.getResults=(t,s)=>o.getResults({source:e._assertThisInitialized(r),...t},s),r.getSuggestions=(t,s)=>o.getSuggestions({source:e._assertThisInitialized(r),...t},s),r}e._inheritsLoose(r,t);var i=r.prototype;return i.clone=function(){return new n({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?s.clone(this.outFields):null,placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,displayField:this.displayField,exactMatch:this.exactMatch,layer:this.layer,searchFields:this.searchFields?s.clone(this.searchFields):null,suggestionTemplate:this.suggestionTemplate,zoomScale:this.zoomScale})},i._getFirstStringField=function(){var e,t;return null!=(e=null==(t=this.layer.fieldsIndex.fields.find((e=>"string"===e.type)))?void 0:t.name)?e:""},i._getDisplayField=function(){return this.displayField||this.layer.displayField||this._getFirstStringField()},i._getSearchFieldsString=function(){const{layer:e,searchFields:t}=this;if(!e.loaded)return"";return`: ${(t||[this._getDisplayField()]).map((t=>{const s=e.getField(t);return s&&s.alias||t})).join(", ")}`},i._getLayerTitle=function(){const{layer:e}=this;if(!e)return;const{title:t}=e;return t?`${t}${this._getSearchFieldsString()}`:void 0},e._createClass(r,[{key:"layer",set:function(e){this._set("layer",e),e&&e.load().catch((()=>{}))}},{key:"name",get:function(){return this._getLayerTitle()||""},set:function(e){void 0!==e?this._override("name",e):this._clearOverride("name")}}]),r}(a);t.__decorate([r.property({json:{read:{source:"field.name"},write:{target:"field.name"}}})],c.prototype,"displayField",void 0),t.__decorate([r.property({json:{read:{source:"field.exactMatch"},write:{target:"field.exactMatch"}}})],c.prototype,"exactMatch",void 0),t.__decorate([r.property({value:null})],c.prototype,"layer",null),t.__decorate([r.property()],c.prototype,"name",null),t.__decorate([r.property({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),t.__decorate([r.property()],c.prototype,"searchFields",void 0),t.__decorate([r.property()],c.prototype,"searchTemplate",void 0),t.__decorate([r.property()],c.prototype,"suggestionTemplate",void 0),c=n=t.__decorate([l.subclass("esri.widgets.Search.LayerSearchSource")],c);return c}));
