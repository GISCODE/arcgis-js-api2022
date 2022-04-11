/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],(function(e,t,r,n,l){"use strict";let o=function(e){function l(t,r=!1){var n;return(n=e.call(this,!0)||this).view=t,n.invert=r,n.registerIncoming("vertical-two-finger-drag",(e=>n._handleTwoFinger(e))),n}return t._inheritsLoose(l,e),l.prototype._handleTwoFinger=function(e){var t,l,o;const i=this.invert?-1:1,a=r.createScreenPointArray(0,e.data.delta*i);switch(e.data.action){case"begin":null==(t=this.cameraController)||t.end(),this.cameraController=new n.RotateController({view:this.view,pivot:n.PivotPoint.CENTER}),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(a);break;case"update":null==(l=this.cameraController)||l.update(a);break;case"end":null==(o=this.cameraController)||o.end(),this.cameraController=null}},l}(l.InputHandler);e.TwoFingerTilt=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
