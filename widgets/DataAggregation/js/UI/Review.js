// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/DataAggregation/js/UI/templates/Review.html":'\x3cdiv class\x3d"pad-left-5 no-select" style\x3d"height: 100%"\x3e\r\n  \x3ctable class\x3d"page-table" cellpading\x3d"0" data-dojo-attach-point\x3d"reviewRowTable"\x3e\r\n    \x3ctbody\x3e\r\n\r\n      \x3ctr data-dojo-attach-point\x3d"reviewDataRow" tabindex\x3d"0" role\x3d"region" aria-label\x3d"${nls.review.reviewData} ${nls.review.reviewDataHint}"\x3e\r\n        \x3ctd colspan\x3d"3" class\x3d"panel-title-td"\x3e\r\n          \x3cdiv class\x3d"panel-title-text"\x3e${nls.review.reviewData}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border-bold task-instruction-row"\x3e\r\n        \x3ctd colspan\x3d"3" class\x3d"panel-title-hint-td"\x3e\r\n          \x3cdiv class\x3d"instruction" data-dojo-attach-point\x3d"reviewDataHint"\x3e${nls.review.reviewDataHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n      \x3ctr class\x3d"pad-bottom-10 task-row" data-dojo-attach-point\x3d"unMatchedControlRow"\r\n        data-dojo-attach-event\x3d"onclick:_reviewUnMatched , onkeydown:_reviewUnMatched" tabindex\x3d"0" role\x3d"button"\x3e\r\n        \x3ctd class\x3d"field-control-td width-100"\x3e\r\n          \x3cdiv class\x3d"task-text"\x3e${nls.review.reviewUnMatched}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"pad-right-15 float-right main-text field-control-td"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"unMatchedCount"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"width-15"\x3e\r\n          \x3cdiv class\x3d"next-arrow float-right next-arrow-img"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border pad-bottom-10 task-instruction-row" data-dojo-attach-point\x3d"unMatchedHintRow"\x3e\r\n        \x3ctd colspan\x3d"3" data-dojo-attach-point\x3d"unMatchedHintTd" class\x3d"instruction-padding"\x3e\r\n          \x3cdiv class\x3d"instruction"\x3e${nls.review.reviewUnMatchedHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n      \x3ctr class\x3d"pad-bottom-10 task-row" data-dojo-attach-point\x3d"duplicateControlRow" tabindex\x3d"0" role\x3d"button" \r\n        data-dojo-attach-event\x3d"onclick:_reviewDuplicate , onkeydown:_reviewDuplicate"\x3e\r\n        \x3ctd class\x3d"field-control-td width-100"\x3e\r\n          \x3cdiv class\x3d"task-text"\x3e${nls.review.reviewDuplicate}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"pad-right-15 float-right main-text field-control-td"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"duplicateCount"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"width-15"\x3e\r\n          \x3cdiv class\x3d"next-arrow float-right next-arrow-img"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border pad-bottom-10 task-instruction-row" data-dojo-attach-point\x3d"duplicateHintRow"\x3e\r\n        \x3ctd colspan\x3d"3" data-dojo-attach-point\x3d"duplicateHintTd" class\x3d"instruction-padding"\x3e\r\n          \x3cdiv class\x3d"instruction" data-dojo-attach-point\x3d"reviewDuplicateHint"\x3e${nls.review.reviewDuplicateHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n      \x3ctr class\x3d"pad-bottom-10 task-row" data-dojo-attach-point\x3d"matchedControlRow"\r\n        data-dojo-attach-event\x3d"onclick:_reviewMatched , onkeydown:_reviewMatched" tabindex\x3d"0" role\x3d"button"\x3e\r\n        \x3ctd class\x3d"field-control-td width-100"\x3e\r\n          \x3cdiv class\x3d"task-text"\x3e${nls.review.reviewMatched}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"pad-right-15 float-right main-text field-control-td"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"matchedCount"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"width-15"\x3e\r\n          \x3cdiv class\x3d"next-arrow float-right next-arrow-img"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d"bottom-border pad-bottom-10 task-instruction-row" data-dojo-attach-point\x3d"matchedHintRow"\x3e\r\n        \x3ctd colspan\x3d"3" class\x3d"instruction-padding"\x3e\r\n          \x3cdiv class\x3d"instruction"\x3e${nls.review.reviewMatchedHint}\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\r\n  \x3cdiv class\x3d"pad-top-10 float-right"\x3e\r\n    \x3cdiv style\x3d"margin-right: 15px;" class\x3d"float-left bg-loading-img bg-loading pad-top-10 display-none" data-dojo-attach-point\x3d"progressNode"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn float-left margin-right-15" data-dojo-attach-point\x3d"submitButton" tabindex\x3d"0" role\x3d"button"\r\n      aria-label\x3d"${nls.buttons.submit}" data-dojo-attach-event\x3d"onclick:_submit , onkeydown:_submit"\x3e\r\n      ${nls.buttons.submit}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn float-left" data-dojo-attach-point\x3d"downloadButton" tabindex\x3d"0" role\x3d"button"\r\n      aria-label\x3d"${nls.buttons.download}" data-dojo-attach-event\x3d"onclick:_download , keydown:_download"\x3e${nls.buttons.download}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-attr dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/Deferred dojo/text!./templates/Review.html dojo/query dojo/on dojo/string dojo/keys ./FeatureList jimu/dijit/Message jimu/CSVUtils esri/toolbars/edit esri/lang esri/graphic".split(" "),function(u,h,l,f,k,F,v,w,x,y,p,z,A,m,B,g,C,q,D,E,r,t){return u([v,w,x,y],{baseClass:"cf-review",declaredClass:"CriticalFacilities.Review",
templateString:z,_started:null,label:"Review",parent:null,nls:null,map:null,appConfig:null,config:null,matchedList:[],unMatchedList:[],duplicateList:[],theme:"",styleColor:"",csvStore:null,editLayer:null,matchedLayer:null,unMatchedLayer:null,duplicateLayer:null,_editToolbar:null,_syncFields:{},_currentIndex:0,constructor:function(a){h.mixin(this,a)},postCreate:function(){this.inherited(arguments);this._initReviewRows();this._editToolbar=new E(this.map);window.isRTL&&f.add(this.progressNode,"margin-right-15")},
startup:function(){this._started=!0;this._initNavPages();this._updateIndexesList();this.updateImageNodes();this.altNextIndex=this.altNextIndexes[this._currentIndex];this._currentIndex=this._currentIndex+1<this.altNextIndexes.length?this._currentIndex+1:0;this.own(m(this.pageContainer,"nav-view",h.hitch(this,this._navView)))},onShown:function(){this.pageContainer.backDisabled=0<this.pageContainer._backLabels.length?!1:!0},_navView:function(a){a===this.index&&(this._updateIndexesList(),this._currentIndex<
this.altNextIndexes.length?(this.altNextIndex=this.altNextIndexes[this._currentIndex],this._currentIndex=this._currentIndex+1<this.altNextIndexes.length?this._currentIndex+1:0):(this._currentIndex=0,this.altNextIndex=this.altNextIndexes[this._currentIndex]))},validate:function(a,c){var e=new p;"next-view"===a?e.resolve(this._nextView()):"back-view"===a?e.resolve(this._backView(c)):this._homeView(c).then(function(b){e.resolve(b)});return e},_nextView:function(){return!0},_backView:function(a){return 0<
this.pageContainer._backLabels.length?!0:a.navView>this.index},_homeView:function(a){var c=new p;this.pageContainer.getViewByTitle("Home").verifyClearSettings(a).then(function(e){c.resolve(e)});return c},_updateIndexesList:function(){this.altNextIndexes=[];0<this.unMatchedList.length&&this.altNextIndexes.push(this._unMatchedListView.index);0<this.duplicateList.length&&this.altNextIndexes.push(this._duplicateListView.index);0<this.matchedList.length&&this.altNextIndexes.push(this._matchedListView.index)},
_initNavPages:function(){this.pageContainer&&(this._addMatchedFeaturesList(),0<this.unMatchedList.length&&this._addUnmatchedFeatureList(),0<this.duplicateList.length&&this._addDuplicateFeatureList());this.pageContainer.selectView(this.index,!0)},_addMatchedFeaturesList:function(){this.matchedFeatureList=this._initFeatureList(this.matchedList,this.matchedLayer,"MatchedFeatures",this.nls.review.reviewMatchedHint,this.nls.review.reviewMatched,!1);this.pageContainer.addView(this.matchedFeatureList);this._updateNode(this.submitButton,
0<this.matchedList.length);this._matchedListView=this.pageContainer.getViewByTitle(this.matchedFeatureList.label);this.own(m(this.matchedFeatureList,"feature-list-updated",h.hitch(this,function(a){this.matchedCount.innerHTML=a;this._initReviewRow(this.matchedList,[this.matchedHintRow,this.matchedControlRow],this.matchedCount,"matched");this._updateNode(this.submitButton,0<this.matchedList.length)})))},_addUnmatchedFeatureList:function(){this.unMatchedFeatureList=this._initFeatureList(this.unMatchedList,
this.unMatchedLayer,"UnMatchedFeatures",this.nls.review.reviewUnMatchedHint,this.nls.review.reviewUnMatched,!1);this.pageContainer.addView(this.unMatchedFeatureList);this._unMatchedListView=this.pageContainer.getViewByTitle(this.unMatchedFeatureList.label);this.own(m(this.unMatchedFeatureList,"feature-list-updated",h.hitch(this,function(a){this.unMatchedCount.innerHTML=a;0===a&&this.pageContainer.removeView(this._unMatchedListView)})))},_addDuplicateFeatureList:function(){var a=r.substitute({layerName:this.editLayer.name},
this.nls.review.reviewDuplicateHint);this.duplicateFeatureList=this._initFeatureList(this.duplicateList,this.duplicateLayer,"DuplicateFeatures",a,this.nls.review.reviewDuplicate,!0);this.pageContainer.addView(this.duplicateFeatureList);this._duplicateListView=this.pageContainer.getViewByTitle(this.duplicateFeatureList.label);this.own(m(this.duplicateFeatureList,"feature-list-updated",h.hitch(this,function(c){this.duplicateCount.innerHTML=c;0===c&&this.pageContainer.removeView(this._duplicateListView)})))},
_initFeatureList:function(a,c,e,b,d,n){return new C({nls:this.nls,map:this.map,parent:this.parent,config:this.config,appConfig:this.appConfig,hint:b,_title:d,label:e,features:a,theme:this.theme,isDuplicate:n,layer:c,_editToolbar:this._editToolbar,csvStore:this.csvStore,_syncFields:this._syncFields})},_initReviewRows:function(){this._initReviewRow(this.matchedList,[this.matchedHintRow,this.matchedControlRow],this.matchedCount,"matched");this._initReviewRow(this.unMatchedList,[this.unMatchedHintRow,
this.unMatchedControlRow],this.unMatchedCount,"unmatched");this._initReviewRow(this.duplicateList,[this.duplicateHintRow,this.duplicateControlRow],this.duplicateCount,"duplicate")},_initReviewRow:function(a,c,e,b){0<a.length?(l.forEach(c,function(d){f.contains(d,"display-none")&&f.remove(d,"display-none")}),e.innerHTML=a.length,this._createOrUpdateReviewNodeAriaLabel(a.length,b)):l.forEach(c,function(d){f.contains(d,"display-none")||f.add(d,"display-none")})},_createOrUpdateReviewNodeAriaLabel:function(a,
c){switch(c){case "matched":var e=this.nls.review.reviewMatched;var b=this.nls.review.reviewMatchedHint;var d=this.matchedControlRow;break;case "unmatched":e=this.nls.review.reviewUnMatched;b=this.nls.review.reviewUnMatchedHint;d=this.unMatchedControlRow;break;case "duplicate":e=this.nls.review.reviewDuplicate,b=this.nls.review.reviewDuplicateHint,d=this.duplicateControlRow}a=B.substitute(this.nls.review.reviewLabelWithCount,{totalMatchedFeatures:a,headerString:e,headerStringHint:b});k.set(d,"aria-label",
a)},_updateReviewRows:function(a){this._initReviewRows();(a="unmatched"===a&&this.unMatchedFeatureList?this.unMatchedFeatureList:"duplicate"===a&&this.duplicateFeatureList?this.duplicateFeatureList:void 0)&&a.features&&0===a.features.length&&this.pageContainer.selectView(this.index,!0)},updateImageNodes:function(){var a=this.pageContainer.isDarkTheme,c=a?"next-arrow-img":"next-arrow-img-white",e=a?"next-arrow-img-white":"next-arrow-img";a=A("."+c,this.domNode);l.forEach(a,function(b){f.remove(b,c);
f.add(b,e)})},_download:function(a){if("keydown"!==a.type||a.keyCode===g.ENTER||a.keyCode===g.SPACE)0<this.matchedList.length&&(a=this.csvStore.matchedFeatureLayer.id.replace(".csv",""),this._export(this.csvStore.matchedFeatureLayer,a)),0<this.unMatchedList.length&&(a=this.csvStore.unMatchedFeatureLayer.id.replace(".csv",""),this._export(this.csvStore.unMatchedFeatureLayer,a)),0<this.duplicateList.length&&(a=this.csvStore.duplicateFeatureLayer.id.replace(".csv",""),this._export(this.csvStore.duplicateFeatureLayer,
a))},_export:function(a,c){var e=[];l.forEach(a.graphics,function(d){e.push(d.attributes)});var b={};b.datas=e;b.fromClient=!1;b.withGeometry=!1;b.outFields=a.fields;b.formatDate=!0;b.formatCodedValue=!0;b.formatNumber=!1;D.exportCSVFromFeatureLayer(c,a,b)},_submit:function(a){if("keydown"!==a.type||a.keyCode===g.ENTER||a.keyCode===g.SPACE){this._updateNode(this.submitButton,!1);this._updateNode(this.progressNode,!0);a=this._getFeatures(this.csvStore.matchedFeatureLayer);var c=this._getFeatures(this.csvStore.duplicateFeatureLayer);
this.editLayer.applyEdits(a,c,null,h.hitch(this,function(e,b){this._validateResults(e);this._validateResults(b);this._updateNode(this.progressNode,!1);this._disableUI();this.csvStore._zoomToData(this.editLayer.graphics,!0)}),h.hitch(this,function(){new q({type:"Error",message:this.nls.warningsAndErrors.saveError})}))}},_validateResults:function(a){var c=[],e=[];a&&a.hasOwnProperty("length")&&0<a.length&&(l.forEach(a,function(b){"undefined"!==typeof b.success&&(b.success?c.push(b):e.push(b))}),0<e.length&&
(a=0===c.length?this.nls.review.noFeaturesSaved:r.substitute({num:e.length},this.nls.review.someFeaturesNotSaved),new q({message:a})))},_disableUI:function(){this._updateNode(this.submitButton,!0);f.add(this.submitButton,"control-disbaled");k.set(this.submitButton,"tabindex","-1");f.add(this.reviewRowTable,"control-disbaled");k.set(this.reviewDataRow,"tabindex","-1");k.set(this.matchedControlRow,"tabindex","-1");k.set(this.unMatchedControlRow,"tabindex","-1");k.set(this.duplicateControlRow,"tabindex",
"-1");f.add(this.pageContainer.nextTd,"control-disbaled");k.set(this.pageContainer.nextImage,"tabindex","-1");f.add(this.pageContainer.backTd,"control-disbaled");f.add(this.pageContainer.backImage,"control-disbaled");k.set(this.pageContainer.backImage,"tabindex","-1");this.map.infoWindow&&this.map.infoWindow.clearFeatures&&this.map.infoWindow.clearFeatures();this.parent.updateFirstLastNode(!1)},_getFeatures:function(a){var c=[],e=this.csvStore.objectIdField;a&&a.graphics&&l.forEach(a.graphics,h.hitch(this,
function(b){b.hasOwnProperty("_graphicsLayer")&&delete b._graphicsLayer;b.hasOwnProperty("_layer")&&delete b._layer;var d=b.attributes;this._deleteProp(d,e);d.hasOwnProperty("hasDuplicateUpdates")&&d.hasOwnProperty("duplicateState")?d.hasDuplicateUpdates&&"make-change"===d.duplicateState&&(d.hasOwnProperty("DestinationOID")&&(d[this.editLayer.objectIdField]=d.DestinationOID),this._deleteProp(d,"hasDuplicateUpdates"),this._deleteProp(d,"duplicateState"),this._deleteProp(d,"matchScore"),this._deleteProp(d,
"DestinationOID"),l.forEach(this.csvStore._matchFields,h.hitch(this,function(n){this._deleteProp(d,n)})),c.push(b.toJson?new t(b.toJson()):b)):(this._deleteProp(d,"matchScore"),this._deleteProp(d,"DestinationOID"),c.push(b.toJson?new t(b.toJson()):b))}));return 0<c.length?c:null},_deleteProp:function(a,c){a.hasOwnProperty(c)&&delete a[c]},_navigateHome:function(){var a=this.pageContainer.getViewByTitle("Home");a._clearStore(!0);a._clearMapping();this.pageContainer.toggleController(!0);this.pageContainer.selectView(a.index)},
_updateNode:function(a,c){c?f.contains(a,"display-none")&&f.remove(a,"display-none"):f.contains(a,"display-none")||f.add(a,"display-none")},setStyleColor:function(a){this.styleColor=a},_reviewMatched:function(a){a&&"keydown"===a.type&&a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.pageContainer.selectView(this._matchedListView.index)},_reviewUnMatched:function(a){a&&"keydown"===a.type&&a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.pageContainer.selectView(this._unMatchedListView.index)},_reviewDuplicate:function(a){a&&
"keydown"===a.type&&a.keyCode!==g.ENTER&&a.keyCode!==g.SPACE||this.pageContainer.selectView(this._duplicateListView.index)}})});