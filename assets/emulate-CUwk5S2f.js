import{g as _S,o as ya,r as U_,Q as xS,E as Lp}from"./index-BXbogXxd.js";var yS=1e-6,ui=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function SS(){var n=new ui(9);return ui!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function oi(){var n=new ui(16);return ui!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function MS(n){var e=new ui(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function F_(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function O_(n,e){var t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],x=e[9],_=e[10],S=e[11],E=e[12],M=e[13],g=e[14],v=e[15],T=t*f-r*c,w=t*d-a*c,b=t*h-o*c,U=r*d-a*f,I=r*h-o*f,D=a*h-o*d,G=m*M-x*E,L=m*g-_*E,R=m*v-S*E,k=x*g-_*M,Q=x*v-S*M,Y=_*v-S*g,W=T*Y-w*Q+b*k+U*R-I*L+D*G;return W?(W=1/W,n[0]=(f*Y-d*Q+h*k)*W,n[1]=(a*Q-r*Y-o*k)*W,n[2]=(M*D-g*I+v*U)*W,n[3]=(_*I-x*D-S*U)*W,n[4]=(d*R-c*Y-h*L)*W,n[5]=(t*Y-a*R+o*L)*W,n[6]=(g*b-E*D-v*w)*W,n[7]=(m*D-_*b+S*w)*W,n[8]=(c*Q-f*R+h*G)*W,n[9]=(r*R-t*Q-o*G)*W,n[10]=(E*I-M*b+v*T)*W,n[11]=(x*b-m*I-S*T)*W,n[12]=(f*L-c*k-d*G)*W,n[13]=(t*k-r*L+a*G)*W,n[14]=(M*w-E*U-g*T)*W,n[15]=(m*U-x*w+_*T)*W,n):null}function k_(n,e,t){var r=e[0],a=e[1],o=e[2],c=e[3],f=e[4],d=e[5],h=e[6],m=e[7],x=e[8],_=e[9],S=e[10],E=e[11],M=e[12],g=e[13],v=e[14],T=e[15],w=t[0],b=t[1],U=t[2],I=t[3];return n[0]=w*r+b*f+U*x+I*M,n[1]=w*a+b*d+U*_+I*g,n[2]=w*o+b*h+U*S+I*v,n[3]=w*c+b*m+U*E+I*T,w=t[4],b=t[5],U=t[6],I=t[7],n[4]=w*r+b*f+U*x+I*M,n[5]=w*a+b*d+U*_+I*g,n[6]=w*o+b*h+U*S+I*v,n[7]=w*c+b*m+U*E+I*T,w=t[8],b=t[9],U=t[10],I=t[11],n[8]=w*r+b*f+U*x+I*M,n[9]=w*a+b*d+U*_+I*g,n[10]=w*o+b*h+U*S+I*v,n[11]=w*c+b*m+U*E+I*T,w=t[12],b=t[13],U=t[14],I=t[15],n[12]=w*r+b*f+U*x+I*M,n[13]=w*a+b*d+U*_+I*g,n[14]=w*o+b*h+U*S+I*v,n[15]=w*c+b*m+U*E+I*T,n}function Yl(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function rc(n,e,t){var r=e[0],a=e[1],o=e[2],c=e[3],f=r+r,d=a+a,h=o+o,m=r*f,x=r*d,_=r*h,S=a*d,E=a*h,M=o*h,g=c*f,v=c*d,T=c*h;return n[0]=1-(S+M),n[1]=x+T,n[2]=_-v,n[3]=0,n[4]=x-T,n[5]=1-(m+M),n[6]=E+g,n[7]=0,n[8]=_+v,n[9]=E-g,n[10]=1-(m+S),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function $l(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Ip(n,e){var t=e[0],r=e[1],a=e[2],o=e[4],c=e[5],f=e[6],d=e[8],h=e[9],m=e[10];return n[0]=Math.hypot(t,r,a),n[1]=Math.hypot(o,c,f),n[2]=Math.hypot(d,h,m),n}function pf(n,e){var t=new ui(3);Ip(t,e);var r=1/t[0],a=1/t[1],o=1/t[2],c=e[0]*r,f=e[1]*a,d=e[2]*o,h=e[4]*r,m=e[5]*a,x=e[6]*o,_=e[8]*r,S=e[9]*a,E=e[10]*o,M=c+m+E,g=0;return M>0?(g=Math.sqrt(M+1)*2,n[3]=.25*g,n[0]=(x-S)/g,n[1]=(_-d)/g,n[2]=(f-h)/g):c>m&&c>E?(g=Math.sqrt(1+c-m-E)*2,n[3]=(x-S)/g,n[0]=.25*g,n[1]=(f+h)/g,n[2]=(_+d)/g):m>E?(g=Math.sqrt(1+m-c-E)*2,n[3]=(_-d)/g,n[0]=(f+h)/g,n[1]=.25*g,n[2]=(x+S)/g):(g=Math.sqrt(1+E-c-m)*2,n[3]=(f-h)/g,n[0]=(_+d)/g,n[1]=(x+S)/g,n[2]=.25*g),n}function ES(n,e,t,r){var a=e[0],o=e[1],c=e[2],f=e[3],d=a+a,h=o+o,m=c+c,x=a*d,_=a*h,S=a*m,E=o*h,M=o*m,g=c*m,v=f*d,T=f*h,w=f*m,b=r[0],U=r[1],I=r[2];return n[0]=(1-(E+g))*b,n[1]=(_+w)*b,n[2]=(S-T)*b,n[3]=0,n[4]=(_-w)*U,n[5]=(1-(x+g))*U,n[6]=(M+v)*U,n[7]=0,n[8]=(S+T)*I,n[9]=(M-v)*I,n[10]=(1-(x+E))*I,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function wS(n,e,t,r,a){var o=1/Math.tan(e/2),c;return n[0]=o/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,a!=null&&a!==1/0?(c=1/(r-a),n[10]=(a+r)*c,n[14]=2*a*r*c):(n[10]=-1,n[14]=-2*r),n}var Xg=wS;function Ai(){var n=new ui(3);return ui!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function TS(n){var e=n[0],t=n[1],r=n[2];return Math.hypot(e,t,r)}function $i(n,e,t){var r=new ui(3);return r[0]=n,r[1]=e,r[2]=t,r}function Dh(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function AS(n,e,t,r){return n[0]=e,n[1]=t,n[2]=r,n}function bS(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function z_(n,e){var t=e[0],r=e[1],a=e[2],o=t*t+r*r+a*a;return o>0&&(o=1/Math.sqrt(o)),n[0]=e[0]*o,n[1]=e[1]*o,n[2]=e[2]*o,n}function RS(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Nh(n,e,t){var r=e[0],a=e[1],o=e[2],c=t[0],f=t[1],d=t[2];return n[0]=a*d-o*f,n[1]=o*c-r*d,n[2]=r*f-a*c,n}function Dp(n,e,t,r){var a=e[0],o=e[1],c=e[2];return n[0]=a+r*(t[0]-a),n[1]=o+r*(t[1]-o),n[2]=c+r*(t[2]-c),n}function CS(n,e,t){var r=t[0],a=t[1],o=t[2],c=t[3],f=e[0],d=e[1],h=e[2],m=a*h-o*d,x=o*f-r*h,_=r*d-a*f,S=a*_-o*x,E=o*m-r*_,M=r*x-a*m,g=c*2;return m*=g,x*=g,_*=g,S*=2,E*=2,M*=2,n[0]=f+m+S,n[1]=d+x+E,n[2]=h+_+M,n}var PS=TS;(function(){var n=Ai();return function(e,t,r,a,o,c){var f,d;for(t||(t=3),r||(r=0),a?d=Math.min(a*t+r,e.length):d=e.length,f=r;f<d;f+=t)n[0]=e[f],n[1]=e[f+1],n[2]=e[f+2],o(n,n,c),e[f]=n[0],e[f+1]=n[1],e[f+2]=n[2];return e}})();function LS(){var n=new ui(4);return ui!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function IS(n,e,t,r){var a=new ui(4);return a[0]=n,a[1]=e,a[2]=t,a[3]=r,a}function DS(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function NS(n,e,t,r,a){return n[0]=e,n[1]=t,n[2]=r,n[3]=a,n}function US(n,e){var t=e[0],r=e[1],a=e[2],o=e[3],c=t*t+r*r+a*a+o*o;return c>0&&(c=1/Math.sqrt(c)),n[0]=t*c,n[1]=r*c,n[2]=a*c,n[3]=o*c,n}(function(){var n=LS();return function(e,t,r,a,o,c){var f,d;for(t||(t=4),r||(r=0),a?d=Math.min(a*t+r,e.length):d=e.length,f=r;f<d;f+=t)n[0]=e[f],n[1]=e[f+1],n[2]=e[f+2],n[3]=e[f+3],o(n,n,c),e[f]=n[0],e[f+1]=n[1],e[f+2]=n[2],e[f+3]=n[3];return e}})();function Ki(){var n=new ui(4);return ui!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function B_(n,e,t){t=t*.5;var r=Math.sin(t);return n[0]=r*e[0],n[1]=r*e[1],n[2]=r*e[2],n[3]=Math.cos(t),n}function FS(n,e,t){var r=e[0],a=e[1],o=e[2],c=e[3],f=t[0],d=t[1],h=t[2],m=t[3];return n[0]=r*m+c*f+a*h-o*d,n[1]=a*m+c*d+o*f-r*h,n[2]=o*m+c*h+r*d-a*f,n[3]=c*m-r*f-a*d-o*h,n}function Hl(n,e,t,r){var a=e[0],o=e[1],c=e[2],f=e[3],d=t[0],h=t[1],m=t[2],x=t[3],_,S,E,M,g;return S=a*d+o*h+c*m+f*x,S<0&&(S=-S,d=-d,h=-h,m=-m,x=-x),1-S>yS?(_=Math.acos(S),E=Math.sin(_),M=Math.sin((1-r)*_)/E,g=Math.sin(r*_)/E):(M=1-r,g=r),n[0]=M*a+g*d,n[1]=M*o+g*h,n[2]=M*c+g*m,n[3]=M*f+g*x,n}function OS(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function kS(n,e){var t=e[0]+e[4]+e[8],r;if(t>0)r=Math.sqrt(t+1),n[3]=.5*r,r=.5/r,n[0]=(e[5]-e[7])*r,n[1]=(e[6]-e[2])*r,n[2]=(e[1]-e[3])*r;else{var a=0;e[4]>e[0]&&(a=1),e[8]>e[a*3+a]&&(a=2);var o=(a+1)%3,c=(a+2)%3;r=Math.sqrt(e[a*3+a]-e[o*3+o]-e[c*3+c]+1),n[a]=.5*r,r=.5/r,n[3]=(e[o*3+c]-e[c*3+o])*r,n[o]=(e[o*3+a]+e[a*3+o])*r,n[c]=(e[c*3+a]+e[a*3+c])*r}return n}var mf=IS,Uh=DS,qg=NS,Uf=US;(function(){var n=Ai(),e=$i(1,0,0),t=$i(0,1,0);return function(r,a,o){var c=RS(a,o);return c<-.999999?(Nh(n,e,a),PS(n)<1e-6&&Nh(n,t,a),z_(n,n),B_(r,n,Math.PI),r):c>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(Nh(n,a,o),r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=1+c,Uf(r,r))}})();(function(){var n=Ki(),e=Ki();return function(t,r,a,o,c,f){return Hl(n,r,c,f),Hl(e,a,o,f),Hl(t,n,e,2*f*(1-f)),t}})();(function(){var n=SS();return function(e,t,r,a){return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=a[0],n[4]=a[1],n[7]=a[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],Uf(e,kS(e,n))}})();const xn=Symbol("@immersive-web-emulation-runtime/xr-space");class Wn extends EventTarget{constructor(e,t){super(),this[xn]={parentSpace:e,offsetMatrix:t?MS(t):oi(),emulated:!0}}}class zS extends Wn{constructor(){super(void 0,oi())}}class gf{static updateOffsetPosition(e,t){const r=e[xn].offsetMatrix;Yl(r,t)}static updateOffsetQuaternion(e,t){const r=e[xn].offsetMatrix,a=Ai();$l(a,r),rc(r,t,a)}static updateOffsetMatrix(e,t){const r=e[xn].offsetMatrix;F_(r,t)}static calculateGlobalOffsetMatrix(e,t=oi()){const r=e[xn].parentSpace?gf.calculateGlobalOffsetMatrix(e[xn].parentSpace):oi();return k_(t,r,e[xn].offsetMatrix),t}}let pa=class V_{constructor(e=0,t=0,r=0){this.vec3=$i(e,t,r),this.tempVec3=Ai()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,r){return AS(this.vec3,e,t,r),this}clone(){return new V_(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return Dh(this.tempVec3,this.vec3),z_(this.vec3,this.tempVec3),this}add(e){return Dh(this.tempVec3,this.vec3),bS(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return Dh(this.tempVec3,this.vec3),CS(this.vec3,this.tempVec3,e.quat),this}},Gl=class H_{constructor(e=0,t=0,r=0,a=1){this.quat=mf(e,t,r,a),this.tempQuat=Ki()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,r,a){return qg(this.quat,e,t,r,a),this}clone(){return new H_(this.x,this.y,this.z,this.w)}copy(e){return qg(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return Uh(this.tempQuat,this.quat),Uf(this.quat,this.tempQuat),this}invert(){return Uh(this.tempQuat,this.quat),OS(this.quat,this.tempQuat),this}multiply(e){return Uh(this.tempQuat,this.quat),FS(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return B_(this.quat,e.vec3,t),this}};const Ze=Symbol("@immersive-web-emulation-runtime/gamepad");var Zl;(function(n){n.None="",n.Standard="standard",n.XRStandard="xr-standard"})(Zl||(Zl={}));class G_{constructor(e,t){this[Ze]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,pendingValue:null}}get pressed(){return this[Ze].type==="manual"?this[Ze].pressed:this[Ze].value>0}get touched(){return this[Ze].type==="manual"?this[Ze].touched:this[Ze].touched||this.pressed}get value(){return this[Ze].value}}class BS{constructor(){this.pressed=!1,this.touched=!1,this.value=0}}class V0{constructor(e,t="",r=-1){this[Ze]={id:t,index:r,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:[]},e.buttons.forEach(a=>{var o;a===null?this[Ze].buttonsSequence.push(null):(this[Ze].buttonsSequence.push(a.id),this[Ze].buttonsMap[a.id]=new G_(a.type,(o=a.eventTrigger)!==null&&o!==void 0?o:null))}),e.axes.forEach(a=>{a===null?this[Ze].axesSequence.push(null):(this[Ze].axesSequence.push(a.id+a.type),this[Ze].axesMap[a.id]||(this[Ze].axesMap[a.id]={x:0,y:0}))})}get id(){return this[Ze].id}get index(){return this[Ze].index}get connected(){return this[Ze].connected}get timestamp(){return this[Ze].timestamp}get mapping(){return this[Ze].mapping}get axes(){const e=[];return this[Ze].axesSequence.forEach(t=>{if(t===null)e.push(null);else{const r=t.substring(0,t.length-6),a=t.substring(t.length-6);e.push(a==="y-axis"?this[Ze].axesMap[r].y:this[Ze].axesMap[r].x)}}),e}get buttons(){return this[Ze].buttonsSequence.map(e=>e===null?new BS:this[Ze].buttonsMap[e])}get hapticActuators(){return this[Ze].hapticActuators}get vibrationActuator(){return null}}var Ei;(function(n){n.None="none",n.Left="left",n.Right="right"})(Ei||(Ei={}));var vf;(function(n){n.Gaze="gaze",n.TrackedPointer="tracked-pointer",n.Screen="screen",n.TransientPointer="transient-pointer"})(vf||(vf={}));class VS extends Array{}const ds=Symbol("@immersive-web-emulation-runtime/xr-input-source");class Ff{constructor(e,t,r,a,o,c,f){this[ds]={handedness:e,targetRayMode:t,targetRaySpace:a,gripSpace:c,profiles:r,gamepad:o,hand:f}}get handedness(){return this[ds].handedness}get targetRayMode(){return this[ds].targetRayMode}get targetRaySpace(){return this[ds].targetRaySpace}get gripSpace(){return this[ds].gripSpace}get profiles(){return this[ds].profiles}get gamepad(){return this[ds].gamepad}get hand(){return this[ds].hand}}class Qu extends Event{constructor(e,t){if(super(e,t),!t.frame)throw new Error("XRInputSourceEventInit.frame is required");if(!t.inputSource)throw new Error("XRInputSourceEventInit.inputSource is required");this.frame=t.frame,this.inputSource=t.inputSource}}const an=Symbol("@immersive-web-emulation-runtime/xr-tracked-input"),Yg={[Ei.Left]:{position:new pa(-.25,1.5,-.4),quaternion:new Gl},[Ei.Right]:{position:new pa(.25,1.5,-.4),quaternion:new Gl},[Ei.None]:{position:new pa(.25,1.5,-.4),quaternion:new Gl}};class W_{constructor(e){this[an]={inputSource:e,position:Yg[e.handedness].position.clone(),quaternion:Yg[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[an].position}get quaternion(){return this[an].quaternion}get inputSource(){return this[an].inputSource}get connected(){return this[an].connected}set connected(e){this[an].connected=e,this[an].inputSource.gamepad[Ze].connected=e}onFrameStart(e){const t=this[an].inputSource.targetRaySpace;rc(t[xn].offsetMatrix,this[an].quaternion.quat,this[an].position.vec3);const r=e.session;this[an].inputSource.gamepad.buttons.forEach(a=>{a instanceof G_&&(a[Ze].lastFrameValue=a[Ze].value,a[Ze].pendingValue!=null&&(a[Ze].value=a[Ze].pendingValue,a[Ze].pendingValue=null),a[Ze].eventTrigger!=null&&(a[Ze].lastFrameValue===0&&a[Ze].value>0?(r.dispatchEvent(new Qu(a[Ze].eventTrigger,{frame:e,inputSource:this[an].inputSource})),r.dispatchEvent(new Qu(a[Ze].eventTrigger+"start",{frame:e,inputSource:this[an].inputSource}))):a[Ze].lastFrameValue>0&&a[Ze].value===0&&r.dispatchEvent(new Qu(a[Ze].eventTrigger+"end",{frame:e,inputSource:this[an].inputSource}))))}),this[an].inputSourceChanged=this.connected!==this[an].lastFrameConnected,this[an].lastFrameConnected=this.connected}}const $g=Symbol("@immersive-web-emulation-runtime/xr-controller");class HS extends W_{constructor(e,t,r){if(!e.layout[t])throw new DOMException("Handedness not supported","InvalidStateError");const a=new Wn(r),o=e.layout[t].gripOffsetMatrix?new Wn(a,e.layout[t].gripOffsetMatrix):void 0,c=[e.profileId,...e.fallbackProfileIds],f=new Ff(t,vf.TrackedPointer,c,a,new V0(e.layout[t].gamepad),o);super(f),this[$g]={gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[$g].gamepadConfig}updateButtonValue(e,t){if(t>1||t<0){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}const r=this[an].inputSource.gamepad[Ze].buttonsMap[e];if(r){if(r[Ze].type==="binary"&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}r[Ze].pendingValue=t}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){const r=this[an].inputSource.gamepad[Ze].buttonsMap[e];r?r[Ze].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,r){if(r>1||r<-1){console.warn(`Out-of-range value ${r} provided for ${e} axes.`);return}const a=this[an].inputSource.gamepad[Ze].axesMap[e];a?t==="x-axis"?a.x=r:t==="y-axis"&&(a.y=r):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,r){if(t>1||t<-1||r>1||r<-1){console.warn(`Out-of-range value x:${t}, y:${r} provided for ${e} axes.`);return}const a=this[an].inputSource.gamepad[Ze].axesMap[e];a?(a.x=t,a.y=r):console.warn(`Current controller does not have ${e} axes.`)}}const ia=Symbol("@immersive-web-emulation-runtime/xr-view");var Yt;(function(n){n.None="none",n.Left="left",n.Right="right"})(Yt||(Yt={}));class j_{constructor(e,t,r,a){this[ia]={eye:e,projectionMatrix:t,transform:r,recommendedViewportScale:null,requestedViewportScale:1,session:a}}get eye(){return this[ia].eye}get projectionMatrix(){return this[ia].projectionMatrix}get transform(){return this[ia].transform}get recommendedViewportScale(){return this[ia].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn("Invalid scale value. Scale must be > 0 and <= 1.");return}this[ia].requestedViewportScale=e}}const ma=Symbol("@immersive-web-emulation-runtime/xr-joint-space");class H0 extends Wn{constructor(e,t,r){super(t,r),this[ma]={jointName:e,radius:0}}get jointName(){return this[ma].jointName}}const Ml=Symbol("@immersive-web-emulation-runtime/xr-pose");class Of{constructor(e,t=!1,r=void 0,a=void 0){this[Ml]={transform:e,emulatedPosition:t,linearVelocity:r,angularVelocity:a}}get transform(){return this[Ml].transform}get emulatedPosition(){return this[Ml].emulatedPosition}get linearVelocity(){return this[Ml].linearVelocity}get angularVelocity(){return this[Ml].angularVelocity}}const Zg=Symbol("@immersive-web-emulation-runtime/xr-joint-pose");class X_ extends Of{constructor(e,t,r=!1,a=void 0,o=void 0){super(e,r,a,o),this[Zg]={radius:t}}get radius(){return this[Zg].radius}}class _f{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a,Object.freeze(this)}static fromPoint(e){return new _f(e.x,e.y,e.z,e.w)}matrixTransform(e){return new _f}toJSON(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const xu=typeof globalThis.DOMPointReadOnly<"u"?globalThis.DOMPointReadOnly:_f,xi=Symbol("@immersive-web-emulation-runtime/xr-rigid-transform");class kf{constructor(e,t){const r=$i(0,0,0),a=Ki();this[xi]={matrix:oi(),position:e?$i(e.x,e.y,e.z):r,orientation:t?Uf(Ki(),mf(t.x,t.y,t.z,t.w)):a,inverse:null},this.updateMatrix()}updateMatrix(){rc(this[xi].matrix,this[xi].orientation,this[xi].position)}get matrix(){return this[xi].matrix}get position(){const e=this[xi].position;return new xu(e[0],e[1],e[2],1)}get orientation(){const e=this[xi].orientation;return new xu(e[0],e[1],e[2],e[3])}get inverse(){if(!this[xi].inverse){const e=oi();if(!O_(e,this[xi].matrix))throw new Error("Matrix is not invertible.");let t=Ai();$l(t,e);let r=Ki();pf(r,e),this[xi].inverse=new kf(new xu(t[0],t[1],t[2],1),new xu(r[0],r[1],r[2],r[3])),this[xi].inverse[xi].inverse=this}return this[xi].inverse}}const Kg=Symbol("@immersive-web-emulation-runtime/xr-viewer-pose");class q_ extends Of{constructor(e,t,r=!1,a=void 0,o=void 0){super(e,r,a,o),this[Kg]={views:Object.freeze(t)}}get views(){return this[Kg].views}}const ri=Symbol("@immersive-web-emulation-runtime/xr-frame"),Qg=oi(),Jg=oi(),ev=oi(),tv=(n,e,t)=>{gf.calculateGlobalOffsetMatrix(e,Qg),gf.calculateGlobalOffsetMatrix(t,Jg),O_(ev,Jg),k_(n,ev,Qg)};class Y_{constructor(e,t,r,a,o){this[ri]={session:e,id:t,active:r,animationFrame:a,predictedDisplayTime:o,tempMat4:oi()}}get session(){return this[ri].session}get predictedDisplayTime(){return this[ri].predictedDisplayTime}getPose(e,t){if(!this[ri].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");tv(this[ri].tempMat4,e,t);const r=Ai();$l(r,this[ri].tempMat4);const a=Ki();return pf(a,this[ri].tempMat4),new Of(new kf({x:r[0],y:r[1],z:r[2],w:1},{x:a[0],y:a[1],z:a[2],w:a[3]}),e[xn].emulated)}getViewerPose(e){if(!this[ri].animationFrame)throw new DOMException("getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.","InvalidStateError");const t=this[ri].session,r=t[fe].device,a=this.getPose(r.viewerSpace,e),o=t[fe].mode===Ot.Inline?[Yt.None]:[Yt.Left,Yt.Right],c=[];return o.forEach(f=>{const d=r.viewSpaces[f],h=this.getPose(d,e),m=t[fe].getProjectionMatrix(f),x=new j_(f,new Float32Array(m),h.transform,t);c.push(x)}),new q_(a.transform,c,!1)}getJointPose(e,t){const r=this.getPose(e,t),a=e[ma].radius;return new X_(r.transform,a,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[ri].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length>t.length)throw new DOMException("The length of jointSpaces is larger than the number of elements in radii","TypeError");let r=!0;for(let a=0;a<e.length;a++)e[a][ma].radius?t[a]=e[a][ma].radius:(t[a]=NaN,r=!1);return r}fillPoses(e,t,r){if(e=Array.from(e),!this[ri].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length*16>r.length)throw new DOMException("The length of spaces multiplied by 16 is larger than the number of elements in transforms","TypeError");return e.forEach((a,o)=>{tv(this[ri].tempMat4,a,t);for(let c=0;c<16;c++)r[o*16+c]=this[ri].tempMat4[c]}),!0}}class $_ extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRInputSourcesChangeEventInit.session is required");if(!t.added)throw new Error("XRInputSourcesChangeEventInit.added is required");if(!t.removed)throw new Error("XRInputSourcesChangeEventInit.removed is required");this.session=t.session,this.added=t.added,this.removed=t.removed}}var Z_;const Ts=Symbol("@immersive-web-emulation-runtime/xr-reference-space");var Rn;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded"})(Rn||(Rn={}));class Sa extends Wn{constructor(e,t,r){super(t,r),this[Z_]={type:null,onreset:()=>{}},this[Ts].type=e}get onreset(){var e;return(e=this[Ts].onreset)!==null&&e!==void 0?e:(()=>{})}set onreset(e){this[Ts].onreset&&this.removeEventListener("reset",this[Ts].onreset),this[Ts].onreset=e,e&&this.addEventListener("reset",e)}getOffsetReferenceSpace(e){return new Sa(this[Ts].type,this,e)}}Z_=Ts;const El=Symbol("@immersive-web-emulation-runtime/xr-render-state");class Np{constructor(e={},t){this[El]={depthNear:e.depthNear||t?.depthNear||.1,depthFar:e.depthFar||t?.depthFar||1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||t?.inlineVerticalFieldOfView||null,baseLayer:e.baseLayer||t?.baseLayer||null}}get depthNear(){return this[El].depthNear}get depthFar(){return this[El].depthFar}get inlineVerticalFieldOfView(){return this[El].inlineVerticalFieldOfView}get baseLayer(){return this[El].baseLayer}}class xf extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRSessionEventInit.session is required");this.session=t.session}}class K_ extends EventTarget{}const Ms=Symbol("@immersive-web-emulation-runtime/XRWebGLLayer"),GS={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1};let WS=class extends K_{constructor(e,t,r={}){if(super(),e[fe].ended)throw new DOMException("Session has ended","InvalidStateError");const a={...GS,...r};this[Ms]={session:e,context:t,antialias:a.antialias}}get context(){return this[Ms].context}get antialias(){return this[Ms].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[Ms].context.drawingBufferWidth}get framebufferHeight(){return this[Ms].context.drawingBufferHeight}getViewport(e){if(e[ia].session!==this[Ms].session)throw new DOMException("View's session differs from Layer's session","InvalidStateError");return this[Ms].session[fe].device[Pe].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof G0))throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[fe].ended?0:1}};var po;(function(n){n.Visible="visible",n.VisibleBlurred="visible-blurred",n.Hidden="hidden"})(po||(po={}));var Ot;(function(n){n.Inline="inline",n.ImmersiveVR="immersive-vr",n.ImmersiveAR="immersive-ar"})(Ot||(Ot={}));var Ji;(function(n){n.Opaque="opaque",n.AlphaBlend="alpha-blend",n.Additive="additive"})(Ji||(Ji={}));var To;(function(n){n.ScreenSpace="screen-space",n.WorldSpace="world-space"})(To||(To={}));const fe=Symbol("@immersive-web-emulation-runtime/xr-session");class G0 extends EventTarget{constructor(e,t,r){super(),this[fe]={device:e,mode:t,renderState:new Np,pendingRenderState:null,enabledFeatures:r,isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[Yt.Left]:oi(),[Yt.Right]:oi(),[Yt.None]:oi()},getProjectionMatrix:a=>this[fe].projectionMatrices[a],referenceSpaceIsSupported:a=>{if(!this[fe].enabledFeatures.includes(a))return!1;switch(a){case Rn.Viewer:return!0;case Rn.Local:case Rn.LocalFloor:case Rn.BoundedFloor:case Rn.Unbounded:return this[fe].mode!=Ot.Inline}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[fe].ended)return;this[fe].deviceFrameHandle=globalThis.requestAnimationFrame(this[fe].onDeviceFrame),this[fe].pendingRenderState!=null&&(this[fe].renderState=this[fe].pendingRenderState,this[fe].pendingRenderState=null,this[fe].device[Pe].onBaseLayerSet(this[fe].renderState.baseLayer));const a=this[fe].renderState.baseLayer;if(a===null)return;const o=a.context,c=o.canvas;if(this[fe].mode!=Ot.Inline){const E=o.getParameter(o.COLOR_CLEAR_VALUE),M=o.getParameter(o.DEPTH_CLEAR_VALUE),g=o.getParameter(o.STENCIL_CLEAR_VALUE);o.clearColor(0,0,0,0),o.clearDepth(1),o.clearStencil(0),o.clear(o.DEPTH_BUFFER_BIT|o.COLOR_BUFFER_BIT|o.STENCIL_BUFFER_BIT),o.clearColor(E[0],E[1],E[2],E[3]),o.clearDepth(M),o.clearStencil(g)}const{depthNear:f,depthFar:d}=this[fe].renderState,{width:h,height:m}=c;if(this[fe].mode!==Ot.Inline){const E=h*(this[fe].device.stereoEnabled?.5:1)/m;Xg(this[fe].projectionMatrices[Yt.Left],this[fe].device.fovy,E,f,d),F_(this[fe].projectionMatrices[Yt.Right],this[fe].projectionMatrices[Yt.Left])}else{const E=h/m;Xg(this[fe].projectionMatrices[Yt.None],this[fe].renderState.inlineVerticalFieldOfView,E,f,d)}const x=new Y_(this,this[fe].frameHandle,!0,!0,performance.now());this[fe].device[Pe].onFrameStart(x),this[fe].updateActiveInputSources();const _=this[fe].currentFrameCallbacks=this[fe].frameCallbacks;this[fe].frameCallbacks=[];const S=performance.now();for(let E=0;E<_.length;E++)try{_[E].cancelled||_[E].callback(S,x)}catch(M){console.error(M)}this[fe].currentFrameCallbacks=null,x[ri].active=!1},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{const a=this[fe].enabledFeatures.includes(ut.HandTracking),o=this[fe].activeInputSources,c=this[fe].device.inputSources.filter(h=>!h.hand||a),f=c.filter(h=>!o.includes(h)),d=o.filter(h=>!c.includes(h));this[fe].activeInputSources=c,(f.length>0||d.length>0)&&this.dispatchEvent(new $_("inputsourceschange",{session:this,added:f,removed:d}))},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},this[fe].onDeviceFrame()}get visibilityState(){return this[fe].device.visibilityState}get frameRate(){return this[fe].nominalFrameRate}get supportedFrameRates(){return new Float32Array(this[fe].device.supportedFrameRates)}get renderState(){return this[fe].renderState}get inputSources(){return this[fe].inputSourceArray.length=0,!this[fe].ended&&this[fe].mode!==Ot.Inline&&this[fe].inputSourceArray.push(...this[fe].activeInputSources),this[fe].inputSourceArray}get enabledFeatures(){return this[fe].enabledFeatures}get isSystemKeyboardSupported(){return this[fe].isSystemKeyboardSupported}get environmentBlendMode(){var e;return(e=this[fe].device[Pe].environmentBlendModes[this[fe].mode])!==null&&e!==void 0?e:Ji.Opaque}get interactionMode(){return this[fe].device[Pe].interactionMode}updateRenderState(e={}){var t,r,a,o;if(this[fe].ended)throw new DOMException("XRSession has already ended.","InvalidStateError");if(e.baseLayer&&e.baseLayer[Ms].session!==this)throw new DOMException("Base layer was created by a different XRSession","InvalidStateError");if(e.inlineVerticalFieldOfView!=null&&this[fe].mode!==Ot.Inline)throw new DOMException("InlineVerticalFieldOfView must not be set for an immersive session","InvalidStateError");const c={baseLayer:e.baseLayer||((t=this[fe].pendingRenderState)===null||t===void 0?void 0:t.baseLayer)||void 0,depthFar:e.depthFar||((r=this[fe].pendingRenderState)===null||r===void 0?void 0:r.depthFar)||void 0,depthNear:e.depthNear||((a=this[fe].pendingRenderState)===null||a===void 0?void 0:a.depthNear)||void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||((o=this[fe].pendingRenderState)===null||o===void 0?void 0:o.inlineVerticalFieldOfView)||void 0};this[fe].pendingRenderState=new Np(c,this[fe].renderState)}async updateTargetFrameRate(e){return new Promise((t,r)=>{this[fe].ended?r(new DOMException("XRSession has already ended.","InvalidStateError")):this[fe].device.supportedFrameRates.includes(e)?(this[fe].nominalFrameRate===e?console.log("Requested frame rate is the same as the current nominal frame rate, no update made"):(this[fe].nominalFrameRate=e,this.dispatchEvent(new xf("frameratechange",{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):r(new DOMException("Requested frame rate not supported.","InvalidStateError"))})}async requestReferenceSpace(e){return new Promise((t,r)=>{if(this[fe].ended||!this[fe].referenceSpaceIsSupported(e)){r(new DOMException("The requested reference space type is not supported.","NotSupportedError"));return}let a;switch(e){case Rn.Viewer:a=this[fe].device.viewerSpace;break;case Rn.Local:a=new Sa(e,this[fe].device[Pe].globalSpace,this[fe].device.viewerSpace[xn].offsetMatrix);break;case Rn.LocalFloor:case Rn.BoundedFloor:case Rn.Unbounded:a=new Sa(e,this[fe].device[Pe].globalSpace);break}this[fe].referenceSpaces.push(a),t(a)})}requestAnimationFrame(e){if(this[fe].ended)return 0;const t=++this[fe].frameHandle;return this[fe].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[fe].frameCallbacks,r=t.findIndex(a=>a&&a.handle===e);r>-1&&(t[r].cancelled=!0,t.splice(r,1)),t=this[fe].currentFrameCallbacks,t&&(r=t.findIndex(a=>a&&a.handle===e),r>-1&&(t[r].cancelled=!0))}async end(){return new Promise((e,t)=>{this[fe].ended||this[fe].deviceFrameHandle===null?t(new DOMException("XRSession has already ended.","InvalidStateError")):(globalThis.cancelAnimationFrame(this[fe].deviceFrameHandle),this[fe].device[Pe].onSessionEnd(),this.dispatchEvent(new xf("end",{session:this})),e())})}get onend(){var e;return(e=this[fe].onend)!==null&&e!==void 0?e:(()=>{})}set onend(e){this[fe].onend&&this.removeEventListener("end",this[fe].onend),this[fe].onend=e,e&&this.addEventListener("end",e)}get oninputsourceschange(){var e;return(e=this[fe].oninputsourceschange)!==null&&e!==void 0?e:(()=>{})}set oninputsourceschange(e){this[fe].oninputsourceschange&&this.removeEventListener("inputsourceschange",this[fe].oninputsourceschange),this[fe].oninputsourceschange=e,e&&this.addEventListener("inputsourceschange",e)}get onselect(){var e;return(e=this[fe].onselect)!==null&&e!==void 0?e:(()=>{})}set onselect(e){this[fe].onselect&&this.removeEventListener("select",this[fe].onselect),this[fe].onselect=e,e&&this.addEventListener("select",e)}get onselectstart(){var e;return(e=this[fe].onselectstart)!==null&&e!==void 0?e:(()=>{})}set onselectstart(e){this[fe].onselectstart&&this.removeEventListener("selectstart",this[fe].onselectstart),this[fe].onselectstart=e,e&&this.addEventListener("selectstart",e)}get onselectend(){var e;return(e=this[fe].onselectend)!==null&&e!==void 0?e:(()=>{})}set onselectend(e){this[fe].onselectend&&this.removeEventListener("selectend",this[fe].onselectend),this[fe].onselectend=e,e&&this.addEventListener("selectend",e)}get onsqueeze(){var e;return(e=this[fe].onsqueeze)!==null&&e!==void 0?e:(()=>{})}set onsqueeze(e){this[fe].onsqueeze&&this.removeEventListener("squeeze",this[fe].onsqueeze),this[fe].onsqueeze=e,e&&this.addEventListener("squeeze",e)}get onsqueezestart(){var e;return(e=this[fe].onsqueezestart)!==null&&e!==void 0?e:(()=>{})}set onsqueezestart(e){this[fe].onsqueezestart&&this.removeEventListener("squeezestart",this[fe].onsqueezestart),this[fe].onsqueezestart=e,e&&this.addEventListener("squeezestart",e)}get onsqueezeend(){var e;return(e=this[fe].onsqueezeend)!==null&&e!==void 0?e:(()=>{})}set onsqueezeend(e){this[fe].onsqueezeend&&this.removeEventListener("squeezeend",this[fe].onsqueezeend),this[fe].onsqueezeend=e,e&&this.addEventListener("squeezeend",e)}get onvisibilitychange(){var e;return(e=this[fe].onvisibilitychange)!==null&&e!==void 0?e:(()=>{})}set onvisibilitychange(e){this[fe].onvisibilitychange&&this.removeEventListener("visibilitychange",this[fe].onvisibilitychange),this[fe].onvisibilitychange=e,e&&this.addEventListener("visibilitychange",e)}get onframeratechange(){var e;return(e=this[fe].onframeratechange)!==null&&e!==void 0?e:(()=>{})}set onframeratechange(e){this[fe].onframeratechange&&this.removeEventListener("frameratechange",this[fe].onframeratechange),this[fe].onframeratechange=e,e&&this.addEventListener("frameratechange",e)}}var Kl;(function(n){n.Wrist="wrist",n.ThumbMetacarpal="thumb-metacarpal",n.ThumbPhalanxProximal="thumb-phalanx-proximal",n.ThumbPhalanxDistal="thumb-phalanx-distal",n.ThumbTip="thumb-tip",n.IndexFingerMetacarpal="index-finger-metacarpal",n.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",n.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",n.IndexFingerPhalanxDistal="index-finger-phalanx-distal",n.IndexFingerTip="index-finger-tip",n.MiddleFingerMetacarpal="middle-finger-metacarpal",n.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",n.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",n.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",n.MiddleFingerTip="middle-finger-tip",n.RingFingerMetacarpal="ring-finger-metacarpal",n.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",n.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",n.RingFingerPhalanxDistal="ring-finger-phalanx-distal",n.RingFingerTip="ring-finger-tip",n.PinkyFingerMetacarpal="pinky-finger-metacarpal",n.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",n.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",n.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",n.PinkyFingerTip="pinky-finger-tip"})(Kl||(Kl={}));class W0 extends Map{}const jS={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},XS={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},qS={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},nv={profileId:"oculus-hand",fallbackProfileIds:["generic-hand","generic-hand-select","generic-trigger"],poses:{default:qS,pinch:jS,point:XS}},YS={mapping:Zl.None,buttons:[{id:"pinch",type:"analog",eventTrigger:"select"}],axes:[]},iv=Ai(),rv=Ki(),sv=Ai(),av=Ai(),ov=Ki(),lv=Ai(),cv=Ai(),uv=Ki(),fv=Ai(),dv=(n,e,t,r)=>($l(iv,e),pf(rv,e),Ip(sv,e),$l(av,t),pf(ov,t),Ip(lv,t),Dp(cv,iv,av,r),Hl(uv,rv,ov,r),Dp(fv,sv,lv,r),ES(n,uv,cv,fv),n),$S=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],ZS=n=>{for(let e=0;e<16;e++)n[e]*=$S[e]},$s=Symbol("@immersive-web-emulation-runtime/xr-hand-input");class hv extends W_{constructor(e,t,r){if(t!==Ei.Left&&t!==Ei.Right)throw new DOMException('handedness for XRHandInput must be either "left" or "right"',"InvalidStateError");if(!e.poses.default||!e.poses.pinch)throw new DOMException('"default" and "pinch" hand pose configs are required',"InvalidStateError");const a=new Wn(r),o=new Wn(a),c=[e.profileId,...e.fallbackProfileIds],f=new W0;Object.values(Kl).forEach(h=>{f.set(h,new H0(h,a))});const d=new Ff(t,vf.TrackedPointer,c,a,new V0(YS),o,f);super(d),this[$s]={poseId:"default",poses:e.poses},this.updateHandPose()}get poseId(){return this[$s].poseId}set poseId(e){if(!this[$s].poses[e]){console.warn(`Pose config ${e} not found`);return}this[$s].poseId=e}updateHandPose(){const e=this[$s].poses[this[$s].poseId],t=this[$s].poses.pinch;Object.values(Kl).forEach(r=>{const a=e.jointTransforms[r].offsetMatrix,o=t.jointTransforms[r].offsetMatrix,c=this.inputSource.hand.get(r);dv(c[xn].offsetMatrix,a,o,this.pinchValue),this.inputSource.handedness===Ei.Right&&ZS(c[xn].offsetMatrix),c[ma].radius=(1-this.pinchValue)*e.jointTransforms[r].radius+this.pinchValue*t.jointTransforms[r].radius}),e.gripOffsetMatrix&&t.gripOffsetMatrix&&dv(this.inputSource.gripSpace[xn].offsetMatrix,e.gripOffsetMatrix,t.gripOffsetMatrix,this.pinchValue)}get pinchValue(){return this[an].inputSource.gamepad[Ze].buttonsMap.pinch.value}updatePinchValue(e){if(e>1||e<0){console.warn(`Out-of-range value ${e} provided for pinch`);return}const t=this[an].inputSource.gamepad[Ze].buttonsMap.pinch;t[Ze].pendingValue=e}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}}const Es=Symbol("@immersive-web-emulation-runtime/xr-system");class pv extends EventTarget{constructor(e){super(),this[Es]={device:e}}isSessionSupported(e){return new Promise((t,r)=>{e===Ot.Inline?t(!0):t(this[Es].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((r,a)=>{this.isSessionSupported(e).then(o=>{if(!o){a(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}if(this[Es].activeSession){a(new DOMException("An active XRSession already exists.","InvalidStateError"));return}const{requiredFeatures:c=[],optionalFeatures:f=[]}=t,{supportedFeatures:d}=this[Es].device;if(!c.every(S=>d.includes(S))){a(new Error("One or more required features are not supported by the device."));return}const m=f.filter(S=>d.includes(S)),x=Array.from(new Set([...c,...m,ut.Viewer,ut.Local])),_=new G0(this[Es].device,e,x);this[Es].activeSession=_,_.addEventListener("end",()=>{this[Es].activeSession=void 0}),r(_)}).catch(a)})}}const vt=Symbol("@immersive-web-emulation-runtime/action-player");class KS{constructor(e,t,r){const{schema:a,frames:o}=t;if(!o||!a||o.length===0)throw new DOMException("wrong recording format","NotSupportedError");const c=new Sa(Rn.Viewer,e),f={[Yt.Left]:new Wn(c),[Yt.Right]:new Wn(c),[Yt.None]:new Wn(c)};this[vt]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:o,recordedFramePointer:0,startingTimeStamp:o[0][0],endingTimeStamp:o[o.length-1][0],playbackTime:o[0][0],playing:!1,viewerSpace:c,viewSpaces:f,vec3:Ai(),quat:Ki()},Yl(this[vt].viewSpaces[Yt.Left][xn].offsetMatrix,$i(-r/2,0,0)),Yl(this[vt].viewSpaces[Yt.Right][xn].offsetMatrix,$i(r/2,0,0)),a.forEach(d=>{const h=d[0],m=d[1];let x;if(m.hasGamepad){const M=[];for(let v=0;v<m.numButtons;v++)M.push({id:v.toString(),type:"manual"});const g=[];for(let v=0;v<m.numAxes;v++)g.push({id:v.toString(),type:"manual"});x=new V0({mapping:m.mapping,buttons:M,axes:g})}const _=new Wn(e);let S;m.hasHand&&(S=new W0,Object.values(Kl).forEach(M=>{S.set(M,new H0(M,_))}));const E=new Ff(m.handedness,m.targetRayMode,m.profiles,_,x,m.hasGrip?new Wn(e):void 0,m.hasHand?S:void 0);this[vt].inputSources.set(h,{active:!1,source:E}),this[vt].inputSchemas.set(h,m)})}play(){this[vt].recordedFramePointer=0,this[vt].playbackTime=this[vt].startingTimeStamp,this[vt].playing=!0,this[vt].actualTimeStamp=performance.now()}stop(){this[vt].playing=!1}get playing(){return this[vt].playing}get viewerSpace(){return this[vt].viewerSpace}get viewSpaces(){return this[vt].viewSpaces}get inputSources(){return Array.from(this[vt].inputSources.values()).filter(e=>e.active).map(e=>e.source)}playFrame(){const e=performance.now(),t=e-this[vt].actualTimeStamp;if(this[vt].actualTimeStamp=e,this[vt].playbackTime+=t,this[vt].playbackTime>this[vt].endingTimeStamp){this.stop();return}for(;this[vt].frames[this[vt].recordedFramePointer+1][0]<this[vt].playbackTime;)this[vt].recordedFramePointer++;const r=this[vt].frames[this[vt].recordedFramePointer],a=this[vt].frames[this[vt].recordedFramePointer+1],o=(this[vt].playbackTime-r[0])/(a[0]-r[0]);this.updateXRSpaceFromMergedFrames(this[vt].viewerSpace,r.slice(1,8),a.slice(1,8),o);const c=new Map;for(let d=8;d<r.length;d++){const{index:h,inputData:m}=this.processRawInputData(r[d]);c.set(h,m)}const f=new Map;for(let d=8;d<a.length;d++){const{index:h,inputData:m}=this.processRawInputData(a[d]);f.set(h,m)}this[vt].inputSources.forEach(d=>{d.active=!1}),f.forEach((d,h)=>{this[vt].inputSources.get(h).active=!0;const m=this[vt].inputSources.get(h).source,x=this[vt].inputSchemas.get(h);this.updateInputSource(m,x,c.has(h)?c.get(h):d,d,o)})}updateInputSource(e,t,r,a,o){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,r.targetRayTransform,a.targetRayTransform,o),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,r.gripTransform,a.gripTransform,o),t.hasHand)for(let c=0;c<25;c++){const f=r.handTransforms.slice(c*8,c*8+7),d=a.handTransforms.slice(c*8,c*8+7),h=r.handTransforms[c*8+7],m=a.handTransforms[c*8+7],x=e.hand.get(t.jointSequence[c]);this.updateXRSpaceFromMergedFrames(x,f,d,o),x[ma].radius=(m-h)*o+h}if(t.hasGamepad){const c=e.gamepad;a.buttons.forEach((f,d)=>{const h=c.buttons[d];h[Ze].pressed=f[0]===1,h[Ze].touched=f[1]===1;const m=r.buttons[d][2],x=f[2];h[Ze].value=(x-m)*o+m}),a.axes.forEach((f,d)=>{const h=r.axes[d];c[Ze].axesMap[d.toString()].x=(f-h)*o+h})}}updateXRSpaceFromMergedFrames(e,t,r,a){const o=$i(t[0],t[1],t[2]),c=mf(t[3],t[4],t[5],t[6]),f=$i(r[0],r[1],r[2]),d=mf(r[3],r[4],r[5],r[6]);Dp(this[vt].vec3,o,f,a),Hl(this[vt].quat,c,d,a),rc(e[xn].offsetMatrix,this[vt].quat,this[vt].vec3)}processRawInputData(e){const t=e[0],r=this[vt].inputSchemas.get(t),o={targetRayTransform:e.slice(1,8)};let c=8;if(r.hasGrip&&(o.gripTransform=e[c++]),r.hasHand&&(o.handTransforms=e[c++]),r.hasGamepad){const f=e[c];o.buttons=f.slice(0,r.numButtons),o.axes=f.slice(r.numButtons)}return{index:t,inputData:o}}}const QS="1.0.4";class mv extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw new Error("XRReferenceSpaceEventInit.referenceSpace is required");this.referenceSpace=t.referenceSpace,this.transform=t.transform}}const wl=Symbol("@immersive-web-emulation-runtime/xr-viewport");class yu{constructor(e,t,r,a){this[wl]={x:e,y:t,width:r,height:a}}get x(){return this[wl].x}get y(){return this[wl].y}get width(){return this[wl].width}get height(){return this[wl].height}}var ut;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded",n.DomOverlay="dom-overlay",n.Anchors="anchors",n.PlaneDetection="plane-detection",n.MeshDetection="mesh-detection",n.HitTest="hit-test",n.HandTracking="hand-tracking",n.DepthSensing="depth-sensing"})(ut||(ut={}));const Pe=Symbol("@immersive-web-emulation-runtime/xr-device"),Tl={ipd:.063,fovy:Math.PI/2,headsetPosition:new pa(0,1.6,0),headsetQuaternion:new Gl,stereoEnabled:!1};class JS{constructor(e,t={}){var r,a,o,c,f,d;const h=new zS,m=new Sa(Rn.Viewer,h),x={[Yt.Left]:new Wn(m),[Yt.Right]:new Wn(m),[Yt.None]:new Wn(m)},_=e.controllerConfig,S={};_&&Object.values(Ei).forEach(g=>{_.layout[g]&&(S[g]=new HS(_,g,h))});const E={[Ei.Left]:new hv(nv,Ei.Left,h),[Ei.Right]:new hv(nv,Ei.Right,h)},M=(r=t.canvasContainer)!==null&&r!==void 0?r:document.createElement("div");M.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${QS}`,M.style.position="fixed",M.style.width="100%",M.style.height="100%",M.style.top="0",M.style.left="0",M.style.display="flex",M.style.justifyContent="center",M.style.alignItems="center",M.style.overflow="hidden",M.style.zIndex="999",this[Pe]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:(a=t.headsetPosition)!==null&&a!==void 0?a:Tl.headsetPosition.clone(),quaternion:(o=t.headsetQuaternion)!==null&&o!==void 0?o:Tl.headsetQuaternion.clone(),stereoEnabled:(c=t.stereoEnabled)!==null&&c!==void 0?c:Tl.stereoEnabled,ipd:(f=t.ipd)!==null&&f!==void 0?f:Tl.ipd,fovy:(d=t.fovy)!==null&&d!==void 0?d:Tl.fovy,controllers:S,hands:E,primaryInputMode:"controller",pendingReferenceSpaceReset:!1,visibilityState:po.Visible,pendingVisibilityState:null,xrSystem:null,matrix:oi(),globalSpace:h,viewerSpace:m,viewSpaces:x,canvasContainer:M,getViewport:(g,v)=>{const T=g.context.canvas,{width:w,height:b}=T;switch(v.eye){case Yt.None:return new yu(0,0,w,b);case Yt.Left:return new yu(0,0,this[Pe].stereoEnabled?w/2:w,b);case Yt.Right:return new yu(w/2,0,this[Pe].stereoEnabled?w/2:0,b)}},updateViews:()=>{const g=this[Pe].viewerSpace;rc(g[xn].offsetMatrix,this[Pe].quaternion.quat,this[Pe].position.vec3),Yl(this[Pe].viewSpaces[Yt.Left][xn].offsetMatrix,$i(-this[Pe].ipd/2,0,0)),Yl(this[Pe].viewSpaces[Yt.Right][xn].offsetMatrix,$i(this[Pe].ipd/2,0,0))},onBaseLayerSet:g=>{if(!g)return;const v=g.context.canvas;v.parentElement!==this[Pe].canvasContainer&&(this[Pe].canvasData={canvas:v,parent:v.parentElement,width:v.width,height:v.height},this[Pe].canvasContainer.appendChild(v),document.body.appendChild(this[Pe].canvasContainer)),v.width=window.innerWidth,v.height=window.innerHeight},onSessionEnd:()=>{if(this[Pe].canvasData){const{canvas:g,parent:v,width:T,height:w}=this[Pe].canvasData;g.width=T,g.height=w,v?v.appendChild(g):this[Pe].canvasContainer.removeChild(g),document.body.removeChild(this[Pe].canvasContainer),window.dispatchEvent(new Event("resize"))}},onFrameStart:g=>{var v;if(!((v=this[Pe].actionPlayer)===null||v===void 0)&&v.playing)this[Pe].actionPlayer.playFrame();else{const T=g.session;this[Pe].updateViews(),this[Pe].pendingVisibilityState&&(this[Pe].visibilityState=this[Pe].pendingVisibilityState,this[Pe].pendingVisibilityState=null,T.dispatchEvent(new xf("visibilitychange",{session:T}))),this[Pe].visibilityState===po.Visible&&this.activeInputs.forEach(w=>{w.onFrameStart(g)}),this[Pe].pendingReferenceSpaceReset&&(T[fe].referenceSpaces.forEach(w=>{switch(w[Ts].type){case Rn.Local:case Rn.LocalFloor:case Rn.BoundedFloor:case Rn.Unbounded:w.dispatchEvent(new mv("reset",{referenceSpace:w}));break}}),this[Pe].pendingReferenceSpaceReset=!1)}this[Pe].updateViews()}},this[Pe].updateViews()}installRuntime(e=globalThis){Object.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{value:function(){return new Promise((t,r)=>{t(!0)})},configurable:!0}),this[Pe].xrSystem=new pv(this),Object.defineProperty(globalThis.navigator,"xr",{value:this[Pe].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[Pe].userAgent,writable:!1,configurable:!1,enumerable:!0}),e.XRSystem=pv,e.XRSession=G0,e.XRRenderState=Np,e.XRFrame=Y_,e.XRSpace=Wn,e.XRReferenceSpace=Sa,e.XRJointSpace=H0,e.XRView=j_,e.XRViewport=yu,e.XRRigidTransform=kf,e.XRPose=Of,e.XRViewerPose=q_,e.XRJointPose=X_,e.XRInputSource=Ff,e.XRInputSourceArray=VS,e.XRHand=W0,e.XRLayer=K_,e.XRWebGLLayer=WS,e.XRSessionEvent=xf,e.XRInputSourceEvent=Qu,e.XRInputSourcesChangeEvent=$_,e.XRReferenceSpaceEvent=mv}get supportedSessionModes(){return this[Pe].supportedSessionModes}get supportedFeatures(){return this[Pe].supportedFeatures}get supportedFrameRates(){return this[Pe].supportedFrameRates}get isSystemKeyboardSupported(){return this[Pe].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[Pe].internalNominalFrameRate}get stereoEnabled(){return this[Pe].stereoEnabled}set stereoEnabled(e){this[Pe].stereoEnabled=e}get ipd(){return this[Pe].ipd}set ipd(e){this[Pe].ipd=e}get fovy(){return this[Pe].fovy}set fovy(e){this[Pe].fovy=e}get position(){return this[Pe].position}get quaternion(){return this[Pe].quaternion}get viewerSpace(){var e;return!((e=this[Pe].actionPlayer)===null||e===void 0)&&e.playing?this[Pe].actionPlayer.viewerSpace:this[Pe].viewerSpace}get viewSpaces(){var e;return!((e=this[Pe].actionPlayer)===null||e===void 0)&&e.playing?this[Pe].actionPlayer.viewSpaces:this[Pe].viewSpaces}get controllers(){return this[Pe].controllers}get hands(){return this[Pe].hands}get primaryInputMode(){return this[Pe].primaryInputMode}set primaryInputMode(e){if(e!=="controller"&&e!=="hand"){console.warn('primary input mode can only be "controller" or "hand"');return}this[Pe].primaryInputMode=e}get activeInputs(){return this[Pe].visibilityState!==po.Visible?[]:(this[Pe].primaryInputMode==="controller"?Object.values(this[Pe].controllers):Object.values(this[Pe].hands)).filter(t=>t.connected)}get inputSources(){var e;return!((e=this[Pe].actionPlayer)===null||e===void 0)&&e.playing?this[Pe].actionPlayer.inputSources:this.activeInputs.map(t=>t.inputSource)}get canvasContainer(){return this[Pe].canvasContainer}get activeSession(){var e;return(e=this[Pe].xrSystem)===null||e===void 0?void 0:e[Es].activeSession}recenter(){const e=new pa(-this.position.x,0,-this.position.z),t=new pa(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();const r=Math.atan2(t.x,-t.z),a=new Gl().setFromAxisAngle(new pa(0,1,0),r);this.position.add(e),this.quaternion.multiply(a),[...Object.values(this[Pe].controllers),...Object.values(this[Pe].hands)].forEach(o=>{o.position.add(e),o.quaternion.multiply(a),o.position.applyQuaternion(a)}),this[Pe].pendingReferenceSpaceReset=!0}get visibilityState(){return this[Pe].visibilityState}updateVisibilityState(e){if(!Object.values(po).includes(e))throw new DOMException("Invalid XRVisibilityState value","NotSupportedError");e!==this[Pe].visibilityState&&(this[Pe].pendingVisibilityState=e)}createActionPlayer(e,t){return this[Pe].actionPlayer=new KS(e,t,this[Pe].ipd),this[Pe].actionPlayer}}const zf={mapping:Zl.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},Bf={mapping:Zl.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},e5={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:zf,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:Bf,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},t5={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:zf,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:Bf,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},n5={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:zf,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:Bf,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},i5={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:zf,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:Bf,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},r5={name:"Oculus Quest 1",controllerConfig:e5,supportedSessionModes:[Ot.Inline,Ot.ImmersiveVR,Ot.ImmersiveAR],supportedFeatures:[ut.Viewer,ut.Local,ut.LocalFloor,ut.BoundedFloor,ut.Unbounded,ut.Anchors,ut.PlaneDetection,ut.HandTracking],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[Ot.ImmersiveVR]:Ji.Opaque,[Ot.ImmersiveAR]:Ji.AlphaBlend},interactionMode:To.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},s5={name:"Meta Quest 2",controllerConfig:t5,supportedSessionModes:[Ot.Inline,Ot.ImmersiveVR,Ot.ImmersiveAR],supportedFeatures:[ut.Viewer,ut.Local,ut.LocalFloor,ut.BoundedFloor,ut.Unbounded,ut.Anchors,ut.PlaneDetection,ut.MeshDetection,ut.HitTest,ut.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[Ot.ImmersiveVR]:Ji.Opaque,[Ot.ImmersiveAR]:Ji.AlphaBlend},interactionMode:To.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},a5={name:"Meta Quest Pro",controllerConfig:n5,supportedSessionModes:[Ot.Inline,Ot.ImmersiveVR,Ot.ImmersiveAR],supportedFeatures:[ut.Viewer,ut.Local,ut.LocalFloor,ut.BoundedFloor,ut.Unbounded,ut.Anchors,ut.PlaneDetection,ut.MeshDetection,ut.HitTest,ut.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[Ot.ImmersiveVR]:Ji.Opaque,[Ot.ImmersiveAR]:Ji.AlphaBlend},interactionMode:To.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},o5={name:"Meta Quest 3",controllerConfig:i5,supportedSessionModes:[Ot.Inline,Ot.ImmersiveVR,Ot.ImmersiveAR],supportedFeatures:[ut.Viewer,ut.Local,ut.LocalFloor,ut.BoundedFloor,ut.Unbounded,ut.Anchors,ut.PlaneDetection,ut.MeshDetection,ut.HitTest,ut.HandTracking,ut.DepthSensing],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[Ot.ImmersiveVR]:Ji.Opaque,[Ot.ImmersiveAR]:Ji.AlphaBlend},interactionMode:To.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"};var Fh={exports:{}},Al={},Oh={exports:{}},_t={};var gv;function l5(){if(gv)return _t;gv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function g(O,ne,Ne){this.props=O,this.context=ne,this.refs=M,this.updater=Ne||S}g.prototype.isReactComponent={},g.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=g.prototype;function T(O,ne,Ne){this.props=O,this.context=ne,this.refs=M,this.updater=Ne||S}var w=T.prototype=new v;w.constructor=T,E(w,g.prototype),w.isPureReactComponent=!0;var b=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function G(O,ne,Ne){var J,de={},ye=null,Se=null;if(ne!=null)for(J in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(ye=""+ne.key),ne)U.call(ne,J)&&!D.hasOwnProperty(J)&&(de[J]=ne[J]);var Ce=arguments.length-2;if(Ce===1)de.children=Ne;else if(1<Ce){for(var Ie=Array(Ce),Ke=0;Ke<Ce;Ke++)Ie[Ke]=arguments[Ke+2];de.children=Ie}if(O&&O.defaultProps)for(J in Ce=O.defaultProps,Ce)de[J]===void 0&&(de[J]=Ce[J]);return{$$typeof:n,type:O,key:ye,ref:Se,props:de,_owner:I.current}}function L(O,ne){return{$$typeof:n,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return ne[Ne]})}var Q=/\/+/g;function Y(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):ne.toString(36)}function W(O,ne,Ne,J,de){var ye=typeof O;(ye==="undefined"||ye==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(ye){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case n:case e:Se=!0}}if(Se)return Se=O,de=de(Se),O=J===""?"."+Y(Se,0):J,b(de)?(Ne="",O!=null&&(Ne=O.replace(Q,"$&/")+"/"),W(de,ne,Ne,"",function(Ke){return Ke})):de!=null&&(R(de)&&(de=L(de,Ne+(!de.key||Se&&Se.key===de.key?"":(""+de.key).replace(Q,"$&/")+"/")+O)),ne.push(de)),1;if(Se=0,J=J===""?".":J+":",b(O))for(var Ce=0;Ce<O.length;Ce++){ye=O[Ce];var Ie=J+Y(ye,Ce);Se+=W(ye,ne,Ne,Ie,de)}else if(Ie=_(O),typeof Ie=="function")for(O=Ie.call(O),Ce=0;!(ye=O.next()).done;)ye=ye.value,Ie=J+Y(ye,Ce++),Se+=W(ye,ne,Ne,Ie,de);else if(ye==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function ce(O,ne,Ne){if(O==null)return O;var J=[],de=0;return W(O,J,"","",function(ye){return ne.call(Ne,ye,de++)}),J}function te(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ue={current:null},H={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(O,ne,Ne){ce(O,function(){ne.apply(this,arguments)},Ne)},count:function(O){var ne=0;return ce(O,function(){ne++}),ne},toArray:function(O){return ce(O,function(ne){return ne})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=g,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=T,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,_t.act=le,_t.cloneElement=function(O,ne,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=E({},O.props),de=O.key,ye=O.ref,Se=O._owner;if(ne!=null){if(ne.ref!==void 0&&(ye=ne.ref,Se=I.current),ne.key!==void 0&&(de=""+ne.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(Ie in ne)U.call(ne,Ie)&&!D.hasOwnProperty(Ie)&&(J[Ie]=ne[Ie]===void 0&&Ce!==void 0?Ce[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)J.children=Ne;else if(1<Ie){Ce=Array(Ie);for(var Ke=0;Ke<Ie;Ke++)Ce[Ke]=arguments[Ke+2];J.children=Ce}return{$$typeof:n,type:O.type,key:de,ref:ye,props:J,_owner:Se}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},_t.createElement=G,_t.createFactory=function(O){var ne=G.bind(null,O);return ne.type=O,ne},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:f,render:O}},_t.isValidElement=R,_t.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:te}},_t.memo=function(O,ne){return{$$typeof:h,type:O,compare:ne===void 0?null:ne}},_t.startTransition=function(O){var ne=H.transition;H.transition={};try{O()}finally{H.transition=ne}},_t.unstable_act=le,_t.useCallback=function(O,ne){return ue.current.useCallback(O,ne)},_t.useContext=function(O){return ue.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return ue.current.useDeferredValue(O)},_t.useEffect=function(O,ne){return ue.current.useEffect(O,ne)},_t.useId=function(){return ue.current.useId()},_t.useImperativeHandle=function(O,ne,Ne){return ue.current.useImperativeHandle(O,ne,Ne)},_t.useInsertionEffect=function(O,ne){return ue.current.useInsertionEffect(O,ne)},_t.useLayoutEffect=function(O,ne){return ue.current.useLayoutEffect(O,ne)},_t.useMemo=function(O,ne){return ue.current.useMemo(O,ne)},_t.useReducer=function(O,ne,Ne){return ue.current.useReducer(O,ne,Ne)},_t.useRef=function(O){return ue.current.useRef(O)},_t.useState=function(O){return ue.current.useState(O)},_t.useSyncExternalStore=function(O,ne,Ne){return ue.current.useSyncExternalStore(O,ne,Ne)},_t.useTransition=function(){return ue.current.useTransition()},_t.version="18.3.1",_t}var vv;function j0(){return vv||(vv=1,Oh.exports=l5()),Oh.exports}var _v;function c5(){if(_v)return Al;_v=1;var n=j0(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,x={},_=null,S=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!o.hasOwnProperty(m)&&(x[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)x[m]===void 0&&(x[m]=d[m]);return{$$typeof:e,type:f,key:_,ref:S,props:x,_owner:a.current}}return Al.Fragment=t,Al.jsx=c,Al.jsxs=c,Al}var xv;function u5(){return xv||(xv=1,Fh.exports=c5()),Fh.exports}var B=u5();const yv=()=>{};let X0={},Q_={},J_=null,ex={mark:yv,measure:yv};try{typeof window<"u"&&(X0=window),typeof document<"u"&&(Q_=document),typeof MutationObserver<"u"&&(J_=MutationObserver),typeof performance<"u"&&(ex=performance)}catch{}const{userAgent:Sv=""}=X0.navigator||{},Ps=X0,$t=Q_,Mv=J_,Su=ex;Ps.document;const Vr=!!$t.documentElement&&!!$t.head&&typeof $t.addEventListener=="function"&&typeof $t.createElement=="function",tx=~Sv.indexOf("MSIE")||~Sv.indexOf("Trident/");var tn="classic",nx="duotone",wi="sharp",Ti="sharp-duotone",f5=[tn,nx,wi,Ti],d5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ev={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},h5=["kit"],p5=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,m5=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,g5={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},v5={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},_5={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},x5={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},y5={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},S5={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ix={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},M5=["solid","regular","light","thin","duotone","brands"],rx=[1,2,3,4,5,6,7,8,9,10],E5=rx.concat([11,12,13,14,15,16,17,18,19,20]),Fl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w5=[...Object.keys(x5),...M5,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fl.GROUP,Fl.SWAP_OPACITY,Fl.PRIMARY,Fl.SECONDARY].concat(rx.map(n=>"".concat(n,"x"))).concat(E5.map(n=>"w-".concat(n))),T5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},A5={kit:{"fa-kit":"fak"}},b5={kit:{fak:"fa-kit"}},wv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Or="___FONT_AWESOME___",Up=16,sx="fa",ax="svg-inline--fa",Ma="data-fa-i2svg",Fp="data-fa-pseudo-element",R5="data-fa-pseudo-element-pending",q0="data-prefix",Y0="data-icon",Tv="fontawesome-i2svg",C5="async",P5=["HTML","HEAD","STYLE","SCRIPT"],ox=(()=>{try{return!0}catch{return!1}})(),lx=[tn,wi,Ti];function sc(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[tn]}})}const cx={...ix};cx[tn]={...ix[tn],...Ev.kit,...Ev["kit-duotone"]};const ga=sc(cx),Op={...S5};Op[tn]={...Op[tn],...wv.kit,...wv["kit-duotone"]};const Ql=sc(Op),kp={...y5};kp[tn]={...kp[tn],...b5.kit};const va=sc(kp),zp={..._5};zp[tn]={...zp[tn],...A5.kit};const L5=sc(zp),I5=p5,ux="fa-layers-text",D5=m5,N5={...d5};sc(N5);const U5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kh=Fl,Ao=new Set;Object.keys(Ql[tn]).map(Ao.add.bind(Ao));Object.keys(Ql[wi]).map(Ao.add.bind(Ao));Object.keys(Ql[Ti]).map(Ao.add.bind(Ao));const F5=[...h5,...w5],Wl=Ps.FontAwesomeConfig||{};function O5(n){var e=$t.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function k5(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}$t&&typeof $t.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,r]=e;const a=k5(O5(t));a!=null&&(Wl[r]=a)});const fx={styleDefault:"solid",familyDefault:"classic",cssPrefix:sx,replacementClass:ax,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wl.familyPrefix&&(Wl.cssPrefix=Wl.familyPrefix);const bo={...fx,...Wl};bo.autoReplaceSvg||(bo.observeMutations=!1);const je={};Object.keys(fx).forEach(n=>{Object.defineProperty(je,n,{enumerable:!0,set:function(e){bo[n]=e,jl.forEach(t=>t(je))},get:function(){return bo[n]}})});Object.defineProperty(je,"familyPrefix",{enumerable:!0,set:function(n){bo.cssPrefix=n,jl.forEach(e=>e(je))},get:function(){return bo.cssPrefix}});Ps.FontAwesomeConfig=je;const jl=[];function z5(n){return jl.push(n),()=>{jl.splice(jl.indexOf(n),1)}}const hs=Up,fr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function B5(n){if(!n||!Vr)return;const e=$t.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=$t.head.childNodes;let r=null;for(let a=t.length-1;a>-1;a--){const o=t[a],c=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(r=o)}return $t.head.insertBefore(e,r),n}const V5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jl(){let n=12,e="";for(;n-- >0;)e+=V5[Math.random()*62|0];return e}function zo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function $0(n){return n.classList?zo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function dx(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H5(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(dx(n[t]),'" '),"").trim()}function Vf(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Z0(n){return n.size!==fr.size||n.x!==fr.x||n.y!==fr.y||n.rotate!==fr.rotate||n.flipX||n.flipY}function G5(n){let{transform:e,containerWidth:t,iconWidth:r}=n;const a={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(o," ").concat(c," ").concat(f)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:d,path:h}}function W5(n){let{transform:e,width:t=Up,height:r=Up,startCentered:a=!1}=n,o="";return a&&tx?o+="translate(".concat(e.x/hs-t/2,"em, ").concat(e.y/hs-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/hs,"em), calc(-50% + ").concat(e.y/hs,"em)) "):o+="translate(".concat(e.x/hs,"em, ").concat(e.y/hs,"em) "),o+="scale(".concat(e.size/hs*(e.flipX?-1:1),", ").concat(e.size/hs*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var j5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function hx(){const n=sx,e=ax,t=je.cssPrefix,r=je.replacementClass;let a=j5;if(t!==n||r!==e){const o=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(f,".".concat(r))}return a}let Av=!1;function zh(){je.autoAddCss&&!Av&&(B5(hx()),Av=!0)}var X5={mixout(){return{dom:{css:hx,insertCss:zh}}},hooks(){return{beforeDOMElementCreation(){zh()},beforeI2svg(){zh()}}}};const kr=Ps||{};kr[Or]||(kr[Or]={});kr[Or].styles||(kr[Or].styles={});kr[Or].hooks||(kr[Or].hooks={});kr[Or].shims||(kr[Or].shims=[]);var dr=kr[Or];const px=[],mx=function(){$t.removeEventListener("DOMContentLoaded",mx),yf=1,px.map(n=>n())};let yf=!1;Vr&&(yf=($t.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($t.readyState),yf||$t.addEventListener("DOMContentLoaded",mx));function q5(n){Vr&&(yf?setTimeout(n,0):px.push(n))}function ac(n){const{tag:e,attributes:t={},children:r=[]}=n;return typeof n=="string"?dx(n):"<".concat(e," ").concat(H5(t),">").concat(r.map(ac).join(""),"</").concat(e,">")}function bv(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Bh=function(e,t,r,a){var o=Object.keys(e),c=o.length,f=t,d,h,m;for(r===void 0?(d=1,m=e[o[0]]):(d=0,m=r);d<c;d++)h=o[d],m=f(m,e[h],h,e);return m};function Y5(n){const e=[];let t=0;const r=n.length;for(;t<r;){const a=n.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){const o=n.charCodeAt(t++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),t--)}else e.push(a)}return e}function Bp(n){const e=Y5(n);return e.length===1?e[0].toString(16):null}function $5(n,e){const t=n.length;let r=n.charCodeAt(e),a;return r>=55296&&r<=56319&&t>e+1&&(a=n.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Rv(n){return Object.keys(n).reduce((e,t)=>{const r=n[t];return!!r.icon?e[r.iconName]=r.icon:e[t]=r,e},{})}function Vp(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=t,a=Rv(e);typeof dr.hooks.addPack=="function"&&!r?dr.hooks.addPack(n,Rv(e)):dr.styles[n]={...dr.styles[n]||{},...a},n==="fas"&&Vp("fa",e)}const{styles:oa,shims:Z5}=dr,K5={[tn]:Object.values(va[tn]),[wi]:Object.values(va[wi]),[Ti]:Object.values(va[Ti])};let K0=null,gx={},vx={},_x={},xx={},yx={};const Q5={[tn]:Object.keys(ga[tn]),[wi]:Object.keys(ga[wi]),[Ti]:Object.keys(ga[Ti])};function J5(n){return~F5.indexOf(n)}function eM(n,e){const t=e.split("-"),r=t[0],a=t.slice(1).join("-");return r===n&&a!==""&&!J5(a)?a:null}const Sx=()=>{const n=r=>Bh(oa,(a,o,c)=>(a[c]=Bh(o,r,{}),a),{});gx=n((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(f=>typeof f=="number").forEach(f=>{r[f.toString(16)]=o}),r)),vx=n((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(f=>typeof f=="string").forEach(f=>{r[f]=o}),r)),yx=n((r,a,o)=>{const c=a[2];return r[o]=o,c.forEach(f=>{r[f]=o}),r});const e="far"in oa||je.autoFetchSvg,t=Bh(Z5,(r,a)=>{const o=a[0];let c=a[1];const f=a[2];return c==="far"&&!e&&(c="fas"),typeof o=="string"&&(r.names[o]={prefix:c,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:c,iconName:f}),r},{names:{},unicodes:{}});_x=t.names,xx=t.unicodes,K0=Hf(je.styleDefault,{family:je.familyDefault})};z5(n=>{K0=Hf(n.styleDefault,{family:je.familyDefault})});Sx();function Q0(n,e){return(gx[n]||{})[e]}function tM(n,e){return(vx[n]||{})[e]}function bs(n,e){return(yx[n]||{})[e]}function Mx(n){return _x[n]||{prefix:null,iconName:null}}function nM(n){const e=xx[n],t=Q0("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ls(){return K0}const J0=()=>({prefix:null,iconName:null,rest:[]});function Hf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=tn}=e,r=ga[t][n],a=Ql[t][n]||Ql[t][r],o=n in dr.styles?n:null;return a||o||null}const iM={[tn]:Object.keys(va[tn]),[wi]:Object.keys(va[wi]),[Ti]:Object.keys(va[Ti])};function Gf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,r={[tn]:"".concat(je.cssPrefix,"-").concat(tn),[wi]:"".concat(je.cssPrefix,"-").concat(wi),[Ti]:"".concat(je.cssPrefix,"-").concat(Ti)};let a=null,o=tn;const c=f5.filter(d=>d!==nx);c.forEach(d=>{(n.includes(r[d])||n.some(h=>iM[d].includes(h)))&&(o=d)});const f=n.reduce((d,h)=>{const m=eM(je.cssPrefix,h);if(oa[h]?(h=K5[o].includes(h)?L5[o][h]:h,a=h,d.prefix=h):Q5[o].indexOf(h)>-1?(a=h,d.prefix=Hf(h,{family:o})):m?d.iconName=m:h!==je.replacementClass&&!c.some(x=>h===r[x])&&d.rest.push(h),!t&&d.prefix&&d.iconName){const x=a==="fa"?Mx(d.iconName):{},_=bs(d.prefix,d.iconName);x.prefix&&(a=null),d.iconName=x.iconName||_||d.iconName,d.prefix=x.prefix||d.prefix,d.prefix==="far"&&!oa.far&&oa.fas&&!je.autoFetchSvg&&(d.prefix="fas")}return d},J0());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===wi&&(oa.fass||je.autoFetchSvg)&&(f.prefix="fass",f.iconName=bs(f.prefix,f.iconName)||f.iconName),!f.prefix&&o===Ti&&(oa.fasds||je.autoFetchSvg)&&(f.prefix="fasds",f.iconName=bs(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||a==="fa")&&(f.prefix=Ls()||"fas"),f}class rM{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},Vp(o,a[o]);const c=va[tn][o];c&&Vp(c,a[o]),Sx()})}reset(){this.definitions={}}_pullDefinitions(e,t){const r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(a=>{const{prefix:o,iconName:c,icon:f}=r[a],d=f[2];e[o]||(e[o]={}),d.length>0&&d.forEach(h=>{typeof h=="string"&&(e[o][h]=f)}),e[o][c]=f}),e}}let Cv=[],mo={};const So={},sM=Object.keys(So);function aM(n,e){let{mixoutsTo:t}=e;return Cv=n,mo={},Object.keys(So).forEach(r=>{sM.indexOf(r)===-1&&delete So[r]}),Cv.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(t[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(c=>{t[o]||(t[o]={}),t[o][c]=a[o][c]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(c=>{mo[c]||(mo[c]=[]),mo[c].push(o[c])})}r.provides&&r.provides(So)}),t}function Hp(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return(mo[n]||[]).forEach(c=>{e=c.apply(null,[e,...r])}),e}function Ea(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];(mo[n]||[]).forEach(o=>{o.apply(null,t)})}function Is(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return So[n]?So[n].apply(null,e):void 0}function Gp(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ls();if(e)return e=bs(t,e)||e,bv(Ex.definitions,t,e)||bv(dr.styles,t,e)}const Ex=new rM,oM=()=>{je.autoReplaceSvg=!1,je.observeMutations=!1,Ea("noAuto")},lM={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vr?(Ea("beforeI2svg",n),Is("pseudoElements2svg",n),Is("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;je.autoReplaceSvg===!1&&(je.autoReplaceSvg=!0),je.observeMutations=!0,q5(()=>{uM({autoReplaceSvgRoot:e}),Ea("watch",n)})}},cM={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:bs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Hf(n[0]);return{prefix:t,iconName:bs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(je.cssPrefix,"-"))>-1||n.match(I5))){const e=Gf(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ls(),iconName:bs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ls();return{prefix:e,iconName:bs(e,n)||n}}}},bi={noAuto:oM,config:je,dom:lM,parse:cM,library:Ex,findIconDefinition:Gp,toHtml:ac},uM=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$t}=n;(Object.keys(dr.styles).length>0||je.autoFetchSvg)&&Vr&&je.autoReplaceSvg&&bi.dom.i2svg({node:e})};function Wf(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>ac(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Vr)return;const t=$t.createElement("div");return t.innerHTML=n.html,t.children}}),n}function fM(n){let{children:e,main:t,mask:r,attributes:a,styles:o,transform:c}=n;if(Z0(c)&&t.found&&!r.found){const{width:f,height:d}=t,h={x:f/d/2,y:.5};a.style=Vf({...o,"transform-origin":"".concat(h.x+c.x/16,"em ").concat(h.y+c.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function dM(n){let{prefix:e,iconName:t,children:r,attributes:a,symbol:o}=n;const c=o===!0?"".concat(e,"-").concat(je.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:c},children:r}]}]}function em(n){const{icons:{main:e,mask:t},prefix:r,iconName:a,transform:o,symbol:c,title:f,maskId:d,titleId:h,extra:m,watchable:x=!1}=n,{width:_,height:S}=t.found?t:e,E=r==="fak",M=[je.replacementClass,a?"".concat(je.cssPrefix,"-").concat(a):""].filter(U=>m.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(m.classes).join(" ");let g={children:[],attributes:{...m.attributes,"data-prefix":r,"data-icon":a,class:M,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(S)}};const v=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/S*16*.0625,"em")}:{};x&&(g.attributes[Ma]=""),f&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(h||Jl())},children:[f]}),delete g.attributes.title);const T={...g,prefix:r,iconName:a,main:e,mask:t,maskId:d,transform:o,symbol:c,styles:{...v,...m.styles}},{children:w,attributes:b}=t.found&&e.found?Is("generateAbstractMask",T)||{children:[],attributes:{}}:Is("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=w,T.attributes=b,c?dM(T):fM(T)}function Pv(n){const{content:e,width:t,height:r,transform:a,title:o,extra:c,watchable:f=!1}=n,d={...c.attributes,...o?{title:o}:{},class:c.classes.join(" ")};f&&(d[Ma]="");const h={...c.styles};Z0(a)&&(h.transform=W5({transform:a,startCentered:!0,width:t,height:r}),h["-webkit-transform"]=h.transform);const m=Vf(h);m.length>0&&(d.style=m);const x=[];return x.push({tag:"span",attributes:d,children:[e]}),o&&x.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),x}function hM(n){const{content:e,title:t,extra:r}=n,a={...r.attributes,...t?{title:t}:{},class:r.classes.join(" ")},o=Vf(r.styles);o.length>0&&(a.style=o);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:Vh}=dr;function Wp(n){const e=n[0],t=n[1],[r]=n.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(je.cssPrefix,"-").concat(kh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(je.cssPrefix,"-").concat(kh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(je.cssPrefix,"-").concat(kh.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:a}}const pM={found:!1,width:512,height:512};function mM(n,e){!ox&&!je.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function jp(n,e){let t=e;return e==="fa"&&je.styleDefault!==null&&(e=Ls()),new Promise((r,a)=>{if(t==="fa"){const o=Mx(n)||{};n=o.iconName||n,e=o.prefix||e}if(n&&e&&Vh[e]&&Vh[e][n]){const o=Vh[e][n];return r(Wp(o))}mM(n,e),r({...pM,icon:je.showMissingIcons&&n?Is("missingIconAbstract")||{}:{}})})}const Lv=()=>{},Xp=je.measurePerformance&&Su&&Su.mark&&Su.measure?Su:{mark:Lv,measure:Lv},Ol='FA "6.6.0"',gM=n=>(Xp.mark("".concat(Ol," ").concat(n," begins")),()=>wx(n)),wx=n=>{Xp.mark("".concat(Ol," ").concat(n," ends")),Xp.measure("".concat(Ol," ").concat(n),"".concat(Ol," ").concat(n," begins"),"".concat(Ol," ").concat(n," ends"))};var tm={begin:gM,end:wx};const Ju=()=>{};function Iv(n){return typeof(n.getAttribute?n.getAttribute(Ma):null)=="string"}function vM(n){const e=n.getAttribute?n.getAttribute(q0):null,t=n.getAttribute?n.getAttribute(Y0):null;return e&&t}function _M(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(je.replacementClass)}function xM(){return je.autoReplaceSvg===!0?ef.replace:ef[je.autoReplaceSvg]||ef.replace}function yM(n){return $t.createElementNS("http://www.w3.org/2000/svg",n)}function SM(n){return $t.createElement(n)}function Tx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?yM:SM}=e;if(typeof n=="string")return $t.createTextNode(n);const r=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])}),(n.children||[]).forEach(function(o){r.appendChild(Tx(o,{ceFn:t}))}),r}function MM(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ef={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Tx(t),e)}),e.getAttribute(Ma)===null&&je.keepOriginalSource){let t=$t.createComment(MM(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~$0(e).indexOf(je.replacementClass))return ef.replace(n);const r=new RegExp("".concat(je.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const o=t[0].attributes.class.split(" ").reduce((c,f)=>(f===je.replacementClass||f.match(r)?c.toSvg.push(f):c.toNode.push(f),c),{toNode:[],toSvg:[]});t[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=t.map(o=>ac(o)).join(`
`);e.setAttribute(Ma,""),e.innerHTML=a}};function Dv(n){n()}function Ax(n,e){const t=typeof e=="function"?e:Ju;if(n.length===0)t();else{let r=Dv;je.mutateApproach===C5&&(r=Ps.requestAnimationFrame||Dv),r(()=>{const a=xM(),o=tm.begin("mutate");n.map(a),o(),t()})}}let nm=!1;function bx(){nm=!0}function qp(){nm=!1}let Sf=null;function Nv(n){if(!Mv||!je.observeMutations)return;const{treeCallback:e=Ju,nodeCallback:t=Ju,pseudoElementsCallback:r=Ju,observeMutationsRoot:a=$t}=n;Sf=new Mv(o=>{if(nm)return;const c=Ls();zo(o).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!Iv(f.addedNodes[0])&&(je.searchPseudoElements&&r(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&je.searchPseudoElements&&r(f.target.parentNode),f.type==="attributes"&&Iv(f.target)&&~U5.indexOf(f.attributeName))if(f.attributeName==="class"&&vM(f.target)){const{prefix:d,iconName:h}=Gf($0(f.target));f.target.setAttribute(q0,d||c),h&&f.target.setAttribute(Y0,h)}else _M(f.target)&&t(f.target)})}),Vr&&Sf.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function EM(){Sf&&Sf.disconnect()}function wM(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((r,a)=>{const o=a.split(":"),c=o[0],f=o.slice(1);return c&&f.length>0&&(r[c]=f.join(":").trim()),r},{})),t}function TM(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),r=n.innerText!==void 0?n.innerText.trim():"";let a=Gf($0(n));return a.prefix||(a.prefix=Ls()),e&&t&&(a.prefix=e,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=tM(a.prefix,n.innerText)||Q0(a.prefix,Bp(n.innerText))),!a.iconName&&je.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=n.firstChild.data)),a}function AM(n){const e=zo(n.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),t=n.getAttribute("title"),r=n.getAttribute("data-fa-title-id");return je.autoA11y&&(t?e["aria-labelledby"]="".concat(je.replacementClass,"-title-").concat(r||Jl()):(e["aria-hidden"]="true",e.focusable="false")),e}function bM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Uv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:r,rest:a}=TM(n),o=AM(n),c=Hp("parseNodeAttributes",{},n);let f=e.styleParser?wM(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:fr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:f,attributes:o},...c}}const{styles:RM}=dr;function Rx(n){const e=je.autoReplaceSvg==="nest"?Uv(n,{styleParser:!1}):Uv(n);return~e.extra.classes.indexOf(ux)?Is("generateLayersText",n,e):Is("generateSvgReplacementMutation",n,e)}let pr=new Set;lx.map(n=>{pr.add("fa-".concat(n))});Object.keys(ga[tn]).map(pr.add.bind(pr));Object.keys(ga[wi]).map(pr.add.bind(pr));Object.keys(ga[Ti]).map(pr.add.bind(pr));pr=[...pr];function Fv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vr)return Promise.resolve();const t=$t.documentElement.classList,r=m=>t.add("".concat(Tv,"-").concat(m)),a=m=>t.remove("".concat(Tv,"-").concat(m)),o=je.autoFetchSvg?pr:lx.map(m=>"fa-".concat(m)).concat(Object.keys(RM));o.includes("fa")||o.push("fa");const c=[".".concat(ux,":not([").concat(Ma,"])")].concat(o.map(m=>".".concat(m,":not([").concat(Ma,"])"))).join(", ");if(c.length===0)return Promise.resolve();let f=[];try{f=zo(n.querySelectorAll(c))}catch{}if(f.length>0)r("pending"),a("complete");else return Promise.resolve();const d=tm.begin("onTree"),h=f.reduce((m,x)=>{try{const _=Rx(x);_&&m.push(_)}catch(_){ox||_.name==="MissingIcon"&&console.error(_)}return m},[]);return new Promise((m,x)=>{Promise.all(h).then(_=>{Ax(_,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),d(),m()})}).catch(_=>{d(),x(_)})})}function CM(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rx(n).then(t=>{t&&Ax([t],e)})}function PM(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Gp(e||{});let{mask:a}=t;return a&&(a=(a||{}).icon?a:Gp(a||{})),n(r,{...t,mask:a})}}const LM=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=fr,symbol:r=!1,mask:a=null,maskId:o=null,title:c=null,titleId:f=null,classes:d=[],attributes:h={},styles:m={}}=e;if(!n)return;const{prefix:x,iconName:_,icon:S}=n;return Wf({type:"icon",...n},()=>(Ea("beforeDOMElementCreation",{iconDefinition:n,params:e}),je.autoA11y&&(c?h["aria-labelledby"]="".concat(je.replacementClass,"-title-").concat(f||Jl()):(h["aria-hidden"]="true",h.focusable="false")),em({icons:{main:Wp(S),mask:a?Wp(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:_,transform:{...fr,...t},symbol:r,title:c,maskId:o,titleId:f,extra:{attributes:h,styles:m,classes:d}})))};var IM={mixout(){return{icon:PM(LM)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Fv,n.nodeCallback=CM,n}}},provides(n){n.i2svg=function(e){const{node:t=$t,callback:r=()=>{}}=e;return Fv(t,r)},n.generateSvgReplacementMutation=function(e,t){const{iconName:r,title:a,titleId:o,prefix:c,transform:f,symbol:d,mask:h,maskId:m,extra:x}=t;return new Promise((_,S)=>{Promise.all([jp(r,c),h.iconName?jp(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[M,g]=E;_([e,em({icons:{main:M,mask:g},prefix:c,iconName:r,transform:f,symbol:d,maskId:m,title:a,titleId:o,extra:x,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(e){let{children:t,attributes:r,main:a,transform:o,styles:c}=e;const f=Vf(c);f.length>0&&(r.style=f);let d;return Z0(o)&&(d=Is("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),t.push(d||a.icon),{children:t,attributes:r}}}},DM={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Wf({type:"layer"},()=>{Ea("beforeDOMElementCreation",{assembler:n,params:e});let r=[];return n(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(je.cssPrefix,"-layers"),...t].join(" ")},children:r}]})}}}},NM={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:r=[],attributes:a={},styles:o={}}=e;return Wf({type:"counter",content:n},()=>(Ea("beforeDOMElementCreation",{content:n,params:e}),hM({content:n.toString(),title:t,extra:{attributes:a,styles:o,classes:["".concat(je.cssPrefix,"-layers-counter"),...r]}})))}}}},UM={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=fr,title:r=null,classes:a=[],attributes:o={},styles:c={}}=e;return Wf({type:"text",content:n},()=>(Ea("beforeDOMElementCreation",{content:n,params:e}),Pv({content:n,transform:{...fr,...t},title:r,extra:{attributes:o,styles:c,classes:["".concat(je.cssPrefix,"-layers-text"),...a]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:r,transform:a,extra:o}=t;let c=null,f=null;if(tx){const d=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();c=h.width/d,f=h.height/d}return je.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Pv({content:e.innerHTML,width:c,height:f,transform:a,title:r,extra:o,watchable:!0})])}}};const FM=new RegExp('"',"ug"),Ov=[1105920,1112319],kv={FontAwesome:{normal:"fas",400:"fas"},...v5,...g5,...T5},Yp=Object.keys(kv).reduce((n,e)=>(n[e.toLowerCase()]=kv[e],n),{}),OM=Object.keys(Yp).reduce((n,e)=>{const t=Yp[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function kM(n){const e=n.replace(FM,""),t=$5(e,0),r=t>=Ov[0]&&t<=Ov[1],a=e.length===2?e[0]===e[1]:!1;return{value:Bp(a?e[0]:e),isSecondary:r||a}}function zM(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Yp[t]||{})[a]||OM[t]}function zv(n,e){const t="".concat(R5).concat(e.replace(":","-"));return new Promise((r,a)=>{if(n.getAttribute(t)!==null)return r();const c=zo(n.children).filter(_=>_.getAttribute(Fp)===e)[0],f=Ps.getComputedStyle(n,e),d=f.getPropertyValue("font-family"),h=d.match(D5),m=f.getPropertyValue("font-weight"),x=f.getPropertyValue("content");if(c&&!h)return n.removeChild(c),r();if(h&&x!=="none"&&x!==""){const _=f.getPropertyValue("content");let S=zM(d,m);const{value:E,isSecondary:M}=kM(_),g=h[0].startsWith("FontAwesome");let v=Q0(S,E),T=v;if(g){const w=nM(E);w.iconName&&w.prefix&&(v=w.iconName,S=w.prefix)}if(v&&!M&&(!c||c.getAttribute(q0)!==S||c.getAttribute(Y0)!==T)){n.setAttribute(t,T),c&&n.removeChild(c);const w=bM(),{extra:b}=w;b.attributes[Fp]=e,jp(v,S).then(U=>{const I=em({...w,icons:{main:U,mask:J0()},prefix:S,iconName:T,extra:b,watchable:!0}),D=$t.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(D,n.firstChild):n.appendChild(D),D.outerHTML=I.map(G=>ac(G)).join(`
`),n.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function BM(n){return Promise.all([zv(n,"::before"),zv(n,"::after")])}function VM(n){return n.parentNode!==document.head&&!~P5.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Fp)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Bv(n){if(Vr)return new Promise((e,t)=>{const r=zo(n.querySelectorAll("*")).filter(VM).map(BM),a=tm.begin("searchPseudoElements");bx(),Promise.all(r).then(()=>{a(),qp(),e()}).catch(()=>{a(),qp(),t()})})}var HM={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Bv,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=$t}=e;je.searchPseudoElements&&Bv(t)}}};let Vv=!1;var GM={mixout(){return{dom:{unwatch(){bx(),Vv=!0}}}},hooks(){return{bootstrap(){Nv(Hp("mutationObserverCallbacks",{}))},noAuto(){EM()},watch(n){const{observeMutationsRoot:e}=n;Vv?qp():Nv(Hp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Hv=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let c=a.slice(1).join("-");if(o&&c==="h")return t.flipX=!0,t;if(o&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(o){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var WM={mixout(){return{parse:{transform:n=>Hv(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=Hv(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:r,containerWidth:a,iconWidth:o}=e;const c={transform:"translate(".concat(a/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(d," ").concat(h)},x={transform:"translate(".concat(o/2*-1," -256)")},_={outer:c,inner:m,path:x};return{tag:"g",attributes:{..._.outer},children:[{tag:"g",attributes:{..._.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,..._.path}}]}]}}}};const Hh={x:0,y:0,width:"100%",height:"100%"};function Gv(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function jM(n){return n.tag==="g"?n.children:[n]}var XM={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),r=t?Gf(t.split(" ").map(a=>a.trim())):J0();return r.prefix||(r.prefix=Ls()),n.mask=r,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:r,main:a,mask:o,maskId:c,transform:f}=e;const{width:d,icon:h}=a,{width:m,icon:x}=o,_=G5({transform:f,containerWidth:m,iconWidth:d}),S={tag:"rect",attributes:{...Hh,fill:"white"}},E=h.children?{children:h.children.map(Gv)}:{},M={tag:"g",attributes:{..._.inner},children:[Gv({tag:h.tag,attributes:{...h.attributes,..._.path},...E})]},g={tag:"g",attributes:{..._.outer},children:[M]},v="mask-".concat(c||Jl()),T="clip-".concat(c||Jl()),w={tag:"mask",attributes:{...Hh,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[S,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:jM(x)},w]};return t.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(v,")"),...Hh}}),{children:t,attributes:r}}}},qM={provides(n){let e=!1;Ps.matchMedia&&(e=Ps.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},c={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||c.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),t.push(c),t.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},YM={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return n.symbol=r,n}}}},$M=[X5,IM,DM,NM,UM,HM,GM,WM,XM,qM,YM];aM($M,{mixoutsTo:bi});bi.noAuto;bi.config;bi.library;bi.dom;const $p=bi.parse;bi.findIconDefinition;bi.toHtml;const ZM=bi.icon;bi.layer;bi.text;bi.counter;var Gh={exports:{}},Wh,Wv;function KM(){if(Wv)return Wh;Wv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wh=n,Wh}var jh,jv;function QM(){if(jv)return jh;jv=1;var n=KM();function e(){}function t(){}return t.resetWarningCache=e,jh=function(){function r(c,f,d,h,m,x){if(x!==n){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return o.PropTypes=o,o},jh}var Xv;function JM(){return Xv||(Xv=1,Gh.exports=QM()()),Gh.exports}var e4=JM();const xt=_S(e4);function qv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function ar(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qv(Object(t),!0).forEach(function(r){go(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):qv(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Mf(n){"@babel/helpers - typeof";return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mf(n)}function go(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function t4(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function n4(n,e){if(n==null)return{};var t=t4(n,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Zp(n){return i4(n)||r4(n)||s4(n)||a4()}function i4(n){if(Array.isArray(n))return Kp(n)}function r4(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function s4(n,e){if(n){if(typeof n=="string")return Kp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kp(n,e)}}function Kp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o4(n){var e,t=n.beat,r=n.fade,a=n.beatFade,o=n.bounce,c=n.shake,f=n.flash,d=n.spin,h=n.spinPulse,m=n.spinReverse,x=n.pulse,_=n.fixedWidth,S=n.inverse,E=n.border,M=n.listItem,g=n.flip,v=n.size,T=n.rotation,w=n.pull,b=(e={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":c,"fa-flash":f,"fa-spin":d,"fa-spin-reverse":m,"fa-spin-pulse":h,"fa-pulse":x,"fa-fw":_,"fa-inverse":S,"fa-border":E,"fa-li":M,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},go(e,"fa-".concat(v),typeof v<"u"&&v!==null),go(e,"fa-rotate-".concat(T),typeof T<"u"&&T!==null&&T!==0),go(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),go(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(b).map(function(U){return b[U]?U:null}).filter(function(U){return U})}function l4(n){return n=n-0,n===n}function Cx(n){return l4(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var c4=["style"];function u4(n){return n.charAt(0).toUpperCase()+n.slice(1)}function f4(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r=t.indexOf(":"),a=Cx(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[u4(a)]=o:e[a]=o,e},{})}function Px(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(d){return Px(n,d)}),a=Object.keys(e.attributes||{}).reduce(function(d,h){var m=e.attributes[h];switch(h){case"class":d.attrs.className=m,delete e.attributes.class;break;case"style":d.attrs.style=f4(m);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?d.attrs[h.toLowerCase()]=m:d.attrs[Cx(h)]=m}return d},{attrs:{}}),o=t.style,c=o===void 0?{}:o,f=n4(t,c4);return a.attrs.style=ar(ar({},a.attrs.style),c),n.apply(void 0,[e.tag,ar(ar({},a.attrs),f)].concat(Zp(r)))}var Lx=!1;try{Lx=!0}catch{}function d4(){if(!Lx&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Yv(n){if(n&&Mf(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if($p.icon)return $p.icon(n);if(n===null)return null;if(n&&Mf(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Xh(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?go({},n,e):{}}var $v={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ec=ya.forwardRef(function(n,e){var t=ar(ar({},$v),n),r=t.icon,a=t.mask,o=t.symbol,c=t.className,f=t.title,d=t.titleId,h=t.maskId,m=Yv(r),x=Xh("classes",[].concat(Zp(o4(t)),Zp((c||"").split(" ")))),_=Xh("transform",typeof t.transform=="string"?$p.transform(t.transform):t.transform),S=Xh("mask",Yv(a)),E=ZM(m,ar(ar(ar(ar({},x),_),S),{},{symbol:o,title:f,titleId:d,maskId:h}));if(!E)return d4("Could not find icon",m),null;var M=E.abstract,g={ref:e};return Object.keys(t).forEach(function(v){$v.hasOwnProperty(v)||(g[v]=t[v])}),h4(M[0],g)});ec.displayName="FontAwesomeIcon";ec.propTypes={beat:xt.bool,border:xt.bool,beatFade:xt.bool,bounce:xt.bool,className:xt.string,fade:xt.bool,flash:xt.bool,mask:xt.oneOfType([xt.object,xt.array,xt.string]),maskId:xt.string,fixedWidth:xt.bool,inverse:xt.bool,flip:xt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xt.oneOfType([xt.object,xt.array,xt.string]),listItem:xt.bool,pull:xt.oneOf(["right","left"]),pulse:xt.bool,rotation:xt.oneOf([0,90,180,270]),shake:xt.bool,size:xt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xt.bool,spinPulse:xt.bool,spinReverse:xt.bool,symbol:xt.oneOfType([xt.bool,xt.string]),title:xt.string,titleId:xt.string,transform:xt.oneOfType([xt.string,xt.object]),swapOpacity:xt.bool};var h4=Px.bind(null,ya.createElement),ai=function(){return ai=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ai.apply(this,arguments)};function Ef(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var Xt="-ms-",Xl="-moz-",Lt="-webkit-",Ix="comm",jf="rule",im="decl",p4="@import",Dx="@keyframes",m4="@layer",Nx=Math.abs,rm=String.fromCharCode,Qp=Object.assign;function g4(n,e){return Cn(n,0)^45?(((e<<2^Cn(n,0))<<2^Cn(n,1))<<2^Cn(n,2))<<2^Cn(n,3):0}function Ux(n){return n.trim()}function Dr(n,e){return(n=e.exec(n))?n[0]:n}function mt(n,e,t){return n.replace(e,t)}function tf(n,e,t){return n.indexOf(e,t)}function Cn(n,e){return n.charCodeAt(e)|0}function Ro(n,e,t){return n.slice(e,t)}function or(n){return n.length}function Fx(n){return n.length}function kl(n,e){return e.push(n),n}function v4(n,e){return n.map(e).join("")}function Zv(n,e){return n.filter(function(t){return!Dr(t,e)})}var Xf=1,Co=1,Ox=0,Oi=0,gn=0,Bo="";function qf(n,e,t,r,a,o,c,f){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:Xf,column:Co,length:c,return:"",siblings:f}}function ws(n,e){return Qp(qf("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function $a(n){for(;n.root;)n=ws(n.root,{children:[n]});kl(n,n.siblings)}function _4(){return gn}function x4(){return gn=Oi>0?Cn(Bo,--Oi):0,Co--,gn===10&&(Co=1,Xf--),gn}function Qi(){return gn=Oi<Ox?Cn(Bo,Oi++):0,Co++,gn===10&&(Co=1,Xf++),gn}function _a(){return Cn(Bo,Oi)}function nf(){return Oi}function Yf(n,e){return Ro(Bo,n,e)}function Jp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y4(n){return Xf=Co=1,Ox=or(Bo=n),Oi=0,[]}function S4(n){return Bo="",n}function qh(n){return Ux(Yf(Oi-1,e0(n===91?n+2:n===40?n+1:n)))}function M4(n){for(;(gn=_a())&&gn<33;)Qi();return Jp(n)>2||Jp(gn)>3?"":" "}function E4(n,e){for(;--e&&Qi()&&!(gn<48||gn>102||gn>57&&gn<65||gn>70&&gn<97););return Yf(n,nf()+(e<6&&_a()==32&&Qi()==32))}function e0(n){for(;Qi();)switch(gn){case n:return Oi;case 34:case 39:n!==34&&n!==39&&e0(gn);break;case 40:n===41&&e0(n);break;case 92:Qi();break}return Oi}function w4(n,e){for(;Qi()&&n+gn!==57;)if(n+gn===84&&_a()===47)break;return"/*"+Yf(e,Oi-1)+"*"+rm(n===47?n:Qi())}function T4(n){for(;!Jp(_a());)Qi();return Yf(n,Oi)}function A4(n){return S4(rf("",null,null,null,[""],n=y4(n),0,[0],n))}function rf(n,e,t,r,a,o,c,f,d){for(var h=0,m=0,x=c,_=0,S=0,E=0,M=1,g=1,v=1,T=0,w="",b=a,U=o,I=r,D=w;g;)switch(E=T,T=Qi()){case 40:if(E!=108&&Cn(D,x-1)==58){tf(D+=mt(qh(T),"&","&\f"),"&\f",Nx(h?f[h-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:D+=qh(T);break;case 9:case 10:case 13:case 32:D+=M4(E);break;case 92:D+=E4(nf()-1,7);continue;case 47:switch(_a()){case 42:case 47:kl(b4(w4(Qi(),nf()),e,t,d),d);break;default:D+="/"}break;case 123*M:f[h++]=or(D)*v;case 125*M:case 59:case 0:switch(T){case 0:case 125:g=0;case 59+m:v==-1&&(D=mt(D,/\f/g,"")),S>0&&or(D)-x&&kl(S>32?Qv(D+";",r,t,x-1,d):Qv(mt(D," ","")+";",r,t,x-2,d),d);break;case 59:D+=";";default:if(kl(I=Kv(D,e,t,h,m,a,f,w,b=[],U=[],x,o),o),T===123)if(m===0)rf(D,e,I,I,b,o,x,f,U);else switch(_===99&&Cn(D,3)===110?100:_){case 100:case 108:case 109:case 115:rf(n,I,I,r&&kl(Kv(n,I,I,0,0,a,f,w,a,b=[],x,U),U),a,U,x,f,r?b:U);break;default:rf(D,I,I,I,[""],U,0,f,U)}}h=m=S=0,M=v=1,w=D="",x=c;break;case 58:x=1+or(D),S=E;default:if(M<1){if(T==123)--M;else if(T==125&&M++==0&&x4()==125)continue}switch(D+=rm(T),T*M){case 38:v=m>0?1:(D+="\f",-1);break;case 44:f[h++]=(or(D)-1)*v,v=1;break;case 64:_a()===45&&(D+=qh(Qi())),_=_a(),m=x=or(w=D+=T4(nf())),T++;break;case 45:E===45&&or(D)==2&&(M=0)}}return o}function Kv(n,e,t,r,a,o,c,f,d,h,m,x){for(var _=a-1,S=a===0?o:[""],E=Fx(S),M=0,g=0,v=0;M<r;++M)for(var T=0,w=Ro(n,_+1,_=Nx(g=c[M])),b=n;T<E;++T)(b=Ux(g>0?S[T]+" "+w:mt(w,/&\f/g,S[T])))&&(d[v++]=b);return qf(n,e,t,a===0?jf:f,d,h,m,x)}function b4(n,e,t,r){return qf(n,e,t,Ix,rm(_4()),Ro(n,2,-2),0,r)}function Qv(n,e,t,r,a){return qf(n,e,t,im,Ro(n,0,r),Ro(n,r+1,-1),r,a)}function kx(n,e,t){switch(g4(n,e)){case 5103:return Lt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Lt+n+n;case 4789:return Xl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Lt+n+Xl+n+Xt+n+n;case 5936:switch(Cn(n,e+11)){case 114:return Lt+n+Xt+mt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Lt+n+Xt+mt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Lt+n+Xt+mt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Lt+n+Xt+n+n;case 6165:return Lt+n+Xt+"flex-"+n+n;case 5187:return Lt+n+mt(n,/(\w+).+(:[^]+)/,Lt+"box-$1$2"+Xt+"flex-$1$2")+n;case 5443:return Lt+n+Xt+"flex-item-"+mt(n,/flex-|-self/g,"")+(Dr(n,/flex-|baseline/)?"":Xt+"grid-row-"+mt(n,/flex-|-self/g,""))+n;case 4675:return Lt+n+Xt+"flex-line-pack"+mt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Lt+n+Xt+mt(n,"shrink","negative")+n;case 5292:return Lt+n+Xt+mt(n,"basis","preferred-size")+n;case 6060:return Lt+"box-"+mt(n,"-grow","")+Lt+n+Xt+mt(n,"grow","positive")+n;case 4554:return Lt+mt(n,/([^-])(transform)/g,"$1"+Lt+"$2")+n;case 6187:return mt(mt(mt(n,/(zoom-|grab)/,Lt+"$1"),/(image-set)/,Lt+"$1"),n,"")+n;case 5495:case 3959:return mt(n,/(image-set\([^]*)/,Lt+"$1$`$1");case 4968:return mt(mt(n,/(.+:)(flex-)?(.*)/,Lt+"box-pack:$3"+Xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Lt+n+n;case 4200:if(!Dr(n,/flex-|baseline/))return Xt+"grid-column-align"+Ro(n,e)+n;break;case 2592:case 3360:return Xt+mt(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,Dr(r.props,/grid-\w+-end/)})?~tf(n+(t=t[e].value),"span",0)?n:Xt+mt(n,"-start","")+n+Xt+"grid-row-span:"+(~tf(t,"span",0)?Dr(t,/\d+/):+Dr(t,/\d+/)-+Dr(n,/\d+/))+";":Xt+mt(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return Dr(r.props,/grid-\w+-start/)})?n:Xt+mt(mt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return mt(n,/(.+)-inline(.+)/,Lt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(n)-1-e>6)switch(Cn(n,e+1)){case 109:if(Cn(n,e+4)!==45)break;case 102:return mt(n,/(.+:)(.+)-([^]+)/,"$1"+Lt+"$2-$3$1"+Xl+(Cn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~tf(n,"stretch",0)?kx(mt(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return mt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,c,f,d,h){return Xt+a+":"+o+h+(c?Xt+a+"-span:"+(f?d:+d-+o)+h:"")+n});case 4949:if(Cn(n,e+6)===121)return mt(n,":",":"+Lt)+n;break;case 6444:switch(Cn(n,Cn(n,14)===45?18:11)){case 120:return mt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Lt+(Cn(n,14)===45?"inline-":"")+"box$3$1"+Lt+"$2$3$1"+Xt+"$2box$3")+n;case 100:return mt(n,":",":"+Xt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return mt(n,"scroll-","scroll-snap-")+n}return n}function wf(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function R4(n,e,t,r){switch(n.type){case m4:if(n.children.length)break;case p4:case im:return n.return=n.return||n.value;case Ix:return"";case Dx:return n.return=n.value+"{"+wf(n.children,r)+"}";case jf:if(!or(n.value=n.props.join(",")))return""}return or(t=wf(n.children,r))?n.return=n.value+"{"+t+"}":""}function C4(n){var e=Fx(n);return function(t,r,a,o){for(var c="",f=0;f<e;f++)c+=n[f](t,r,a,o)||"";return c}}function P4(n){return function(e){e.root||(e=e.return)&&n(e)}}function L4(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case im:n.return=kx(n.value,n.length,t);return;case Dx:return wf([ws(n,{value:mt(n.value,"@","@"+Lt)})],r);case jf:if(n.length)return v4(t=n.props,function(a){switch(Dr(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$a(ws(n,{props:[mt(a,/:(read-\w+)/,":"+Xl+"$1")]})),$a(ws(n,{props:[a]})),Qp(n,{props:Zv(t,r)});break;case"::placeholder":$a(ws(n,{props:[mt(a,/:(plac\w+)/,":"+Lt+"input-$1")]})),$a(ws(n,{props:[mt(a,/:(plac\w+)/,":"+Xl+"$1")]})),$a(ws(n,{props:[mt(a,/:(plac\w+)/,Xt+"input-$1")]})),$a(ws(n,{props:[a]})),Qp(n,{props:Zv(t,r)});break}return""})}}var I4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mi={},Po=typeof process<"u"&&Mi!==void 0&&(Mi.REACT_APP_SC_ATTR||Mi.SC_ATTR)||"data-styled",zx="active",Bx="data-styled-version",$f="6.1.13",sm=`/*!sc*/
`,Tf=typeof window<"u"&&"HTMLElement"in window,D4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mi!==void 0&&Mi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mi.REACT_APP_SC_DISABLE_SPEEDY!==""?Mi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mi!==void 0&&Mi.SC_DISABLE_SPEEDY!==void 0&&Mi.SC_DISABLE_SPEEDY!==""&&Mi.SC_DISABLE_SPEEDY!=="false"&&Mi.SC_DISABLE_SPEEDY),Zf=Object.freeze([]),Lo=Object.freeze({});function N4(n,e,t){return t===void 0&&(t=Lo),n.theme!==t.theme&&n.theme||e||t.theme}var Vx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,F4=/(^-|-$)/g;function Jv(n){return n.replace(U4,"-").replace(F4,"")}var O4=/(a)(d)/gi,Mu=52,e2=function(n){return String.fromCharCode(n+(n>25?39:97))};function t0(n){var e,t="";for(e=Math.abs(n);e>Mu;e=e/Mu|0)t=e2(e%Mu)+t;return(e2(e%Mu)+t).replace(O4,"$1-$2")}var Yh,Hx=5381,vo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Gx=function(n){return vo(Hx,n)};function k4(n){return t0(Gx(n)>>>0)}function z4(n){return n.displayName||n.name||"Component"}function $h(n){return typeof n=="string"&&!0}var Wx=typeof Symbol=="function"&&Symbol.for,jx=Wx?Symbol.for("react.memo"):60115,B4=Wx?Symbol.for("react.forward_ref"):60112,V4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G4=((Yh={})[B4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yh[jx]=Xx,Yh);function t2(n){return("type"in(e=n)&&e.type.$$typeof)===jx?Xx:"$$typeof"in n?G4[n.$$typeof]:V4;var e}var W4=Object.defineProperty,j4=Object.getOwnPropertyNames,n2=Object.getOwnPropertySymbols,X4=Object.getOwnPropertyDescriptor,q4=Object.getPrototypeOf,i2=Object.prototype;function qx(n,e,t){if(typeof e!="string"){if(i2){var r=q4(e);r&&r!==i2&&qx(n,r,t)}var a=j4(e);n2&&(a=a.concat(n2(e)));for(var o=t2(n),c=t2(e),f=0;f<a.length;++f){var d=a[f];if(!(d in H4||t&&t[d]||c&&d in c||o&&d in o)){var h=X4(e,d);try{W4(n,d,h)}catch{}}}}return n}function Io(n){return typeof n=="function"}function am(n){return typeof n=="object"&&"styledComponentId"in n}function fa(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function r2(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function tc(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function n0(n,e,t){if(t===void 0&&(t=!1),!t&&!tc(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=n0(n[r],e[r]);else if(tc(e))for(var r in e)n[r]=n0(n[r],e[r]);return n}function om(n,e){Object.defineProperty(n,"toString",{value:e})}function oc(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Y4=(function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw oc(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var c=a;c<o;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),d=(c=0,t.length);c<d;c++)this.tag.insertRule(f,t[c])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,c=a;c<o;c++)t+="".concat(this.tag.getRule(c)).concat(sm);return t},n})(),sf=new Map,Af=new Map,af=1,Eu=function(n){if(sf.has(n))return sf.get(n);for(;Af.has(af);)af++;var e=af++;return sf.set(n,e),Af.set(e,n),e},$4=function(n,e){af=e+1,sf.set(n,e),Af.set(e,n)},Z4="style[".concat(Po,"][").concat(Bx,'="').concat($f,'"]'),K4=new RegExp("^".concat(Po,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Q4=function(n,e,t){for(var r,a=t.split(","),o=0,c=a.length;o<c;o++)(r=a[o])&&n.registerName(e,r)},J4=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(sm),a=[],o=0,c=r.length;o<c;o++){var f=r[o].trim();if(f){var d=f.match(K4);if(d){var h=0|parseInt(d[1],10),m=d[2];h!==0&&($4(m,h),Q4(n,m,d[3]),n.getTag().insertRules(h,a)),a.length=0}else a.push(f)}}},s2=function(n){for(var e=document.querySelectorAll(Z4),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(Po)!==zx&&(J4(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function eE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Yx=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=(function(f){var d=Array.from(f.querySelectorAll("style[".concat(Po,"]")));return d[d.length-1]})(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(Po,zx),r.setAttribute(Bx,$f);var c=eE();return c&&r.setAttribute("nonce",c),t.insertBefore(r,o),r},tE=(function(){function n(e){this.element=Yx(e),this.element.appendChild(document.createTextNode("")),this.sheet=(function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var c=r[a];if(c.ownerNode===t)return c}throw oc(17)})(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n})(),nE=(function(){function n(e){this.element=Yx(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n})(),iE=(function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n})(),a2=Tf,rE={isServer:!Tf,useCSSOMInjection:!D4},$x=(function(){function n(e,t,r){e===void 0&&(e=Lo),t===void 0&&(t={});var a=this;this.options=ai(ai({},rE),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Tf&&a2&&(a2=!1,s2(this)),om(this,function(){return(function(o){for(var c=o.getTag(),f=c.length,d="",h=function(x){var _=(function(v){return Af.get(v)})(x);if(_===void 0)return"continue";var S=o.names.get(_),E=c.getGroup(x);if(S===void 0||!S.size||E.length===0)return"continue";var M="".concat(Po,".g").concat(x,'[id="').concat(_,'"]'),g="";S!==void 0&&S.forEach(function(v){v.length>0&&(g+="".concat(v,","))}),d+="".concat(E).concat(M,'{content:"').concat(g,'"}').concat(sm)},m=0;m<f;m++)h(m);return d})(a)})}return n.registerId=function(e){return Eu(e)},n.prototype.rehydrate=function(){!this.server&&Tf&&s2(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(ai(ai({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=(function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new iE(a):r?new tE(a):new nE(a)})(this.options),new Y4(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Eu(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Eu(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Eu(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n})(),sE=/&/g,aE=/^\s*\/\/.*$/gm;function Zx(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Zx(t.children,e)),t})}function oE(n){var e,t,r,a=Lo,o=a.options,c=o===void 0?Lo:o,f=a.plugins,d=f===void 0?Zf:f,h=function(_,S,E){return E.startsWith(t)&&E.endsWith(t)&&E.replaceAll(t,"").length>0?".".concat(e):_},m=d.slice();m.push(function(_){_.type===jf&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(sE,t).replace(r,h))}),c.prefix&&m.push(L4),m.push(R4);var x=function(_,S,E,M){S===void 0&&(S=""),E===void 0&&(E=""),M===void 0&&(M="&"),e=M,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var g=_.replace(aE,""),v=A4(E||S?"".concat(E," ").concat(S," { ").concat(g," }"):g);c.namespace&&(v=Zx(v,c.namespace));var T=[];return wf(v,C4(m.concat(P4(function(w){return T.push(w)})))),T};return x.hash=d.length?d.reduce(function(_,S){return S.name||oc(15),vo(_,S.name)},Hx).toString():"",x}var lE=new $x,i0=oE(),Kx=ya.createContext({shouldForwardProp:void 0,styleSheet:lE,stylis:i0});Kx.Consumer;ya.createContext(void 0);function o2(){return U_.useContext(Kx)}var cE=(function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=i0);var c=r.name+o.hash;a.hasNameForId(r.id,c)||a.insertRules(r.id,c,o(r.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,om(this,function(){throw oc(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=i0),this.name+e.hash},n})(),uE=function(n){return n>="A"&&n<="Z"};function l2(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;uE(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Qx=function(n){return n==null||n===!1||n===""},Jx=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!Qx(o)&&(Array.isArray(o)&&o.isCss||Io(o)?r.push("".concat(l2(a),":"),o,";"):tc(o)?r.push.apply(r,Ef(Ef(["".concat(a," {")],Jx(o),!1),["}"],!1)):r.push("".concat(l2(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in I4||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function xa(n,e,t,r){if(Qx(n))return[];if(am(n))return[".".concat(n.styledComponentId)];if(Io(n)){if(!Io(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return xa(a,e,t,r)}var o;return n instanceof cE?t?(n.inject(t,r),[n.getName(r)]):[n]:tc(n)?Jx(n):Array.isArray(n)?Array.prototype.concat.apply(Zf,n.map(function(c){return xa(c,e,t,r)})):[n.toString()]}function fE(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Io(t)&&!am(t))return!1}return!0}var dE=Gx($f),hE=(function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fE(e),this.componentId=t,this.baseHash=vo(dE,t),this.baseStyle=r,$x.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=fa(a,this.staticRulesId);else{var o=r2(xa(this.rules,e,t,r)),c=t0(vo(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,c)){var f=r(o,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,f)}a=fa(a,c),this.staticRulesId=c}else{for(var d=vo(this.baseHash,r.hash),h="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")h+=x;else if(x){var _=r2(xa(x,e,t,r));d=vo(d,_+m),h+=_}}if(h){var S=t0(d>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(h,".".concat(S),void 0,this.componentId)),a=fa(a,S)}}return a},n})(),ey=ya.createContext(void 0);ey.Consumer;var Zh={};function pE(n,e,t){var r=am(n),a=n,o=!$h(n),c=e.attrs,f=c===void 0?Zf:c,d=e.componentId,h=d===void 0?(function(b,U){var I=typeof b!="string"?"sc":Jv(b);Zh[I]=(Zh[I]||0)+1;var D="".concat(I,"-").concat(k4($f+I+Zh[I]));return U?"".concat(U,"-").concat(D):D})(e.displayName,e.parentComponentId):d,m=e.displayName,x=m===void 0?(function(b){return $h(b)?"styled.".concat(b):"Styled(".concat(z4(b),")")})(n):m,_=e.displayName&&e.componentId?"".concat(Jv(e.displayName),"-").concat(e.componentId):e.componentId||h,S=r&&a.attrs?a.attrs.concat(f).filter(Boolean):f,E=e.shouldForwardProp;if(r&&a.shouldForwardProp){var M=a.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;E=function(b,U){return M(b,U)&&g(b,U)}}else E=M}var v=new hE(t,_,r?a.componentStyle:void 0);function T(b,U){return(function(I,D,G){var L=I.attrs,R=I.componentStyle,k=I.defaultProps,Q=I.foldedComponentIds,Y=I.styledComponentId,W=I.target,ce=ya.useContext(ey),te=o2(),ue=I.shouldForwardProp||te.shouldForwardProp,H=N4(D,ce,k)||Lo,ae=(function(de,ye,Se){for(var Ce,Ie=ai(ai({},ye),{className:void 0,theme:Se}),Ke=0;Ke<de.length;Ke+=1){var bt=Io(Ce=de[Ke])?Ce(Ie):Ce;for(var z in bt)Ie[z]=z==="className"?fa(Ie[z],bt[z]):z==="style"?ai(ai({},Ie[z]),bt[z]):bt[z]}return ye.className&&(Ie.className=fa(Ie.className,ye.className)),Ie})(L,D,H),le=ae.as||W,O={};for(var ne in ae)ae[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ae.theme===H||(ne==="forwardedAs"?O.as=ae.forwardedAs:ue&&!ue(ne,le)||(O[ne]=ae[ne]));var Ne=(function(de,ye){var Se=o2(),Ce=de.generateAndInjectStyles(ye,Se.styleSheet,Se.stylis);return Ce})(R,ae),J=fa(Q,Y);return Ne&&(J+=" "+Ne),ae.className&&(J+=" "+ae.className),O[$h(le)&&!Vx.has(le)?"class":"className"]=J,O.ref=G,U_.createElement(le,O)})(w,b,U)}T.displayName=x;var w=ya.forwardRef(T);return w.attrs=S,w.componentStyle=v,w.displayName=x,w.shouldForwardProp=E,w.foldedComponentIds=r?fa(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=_,w.target=r?a.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?(function(U){for(var I=[],D=1;D<arguments.length;D++)I[D-1]=arguments[D];for(var G=0,L=I;G<L.length;G++)n0(U,L[G],!0);return U})({},a.defaultProps,b):b}}),om(w,function(){return".".concat(w.styledComponentId)}),o&&qx(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function c2(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var u2=function(n){return Object.assign(n,{isCss:!0})};function mE(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Io(n)||tc(n))return u2(xa(c2(Zf,Ef([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?xa(r):u2(xa(c2(r,e)))}function r0(n,e,t){if(t===void 0&&(t=Lo),!e)throw oc(1,e);var r=function(a){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return n(e,t,mE.apply(void 0,Ef([a],o,!1)))};return r.attrs=function(a){return r0(n,e,ai(ai({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return r0(n,e,ai(ai({},t),a))},r}var ty=function(n){return r0(pE,n)},ln=ty;Vx.forEach(function(n){ln[n]=ty(n)});const Pn=ln.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: white;
	border-radius: 2px;
	font-size: 14px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	margin: 0 1px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.6);
	}

	&:first-child {
		border-radius: ${({$reverse:n})=>n?"2px 8px 8px 2px":"8px 2px 2px 8px"};
	}

	&:last-child {
		border-radius: ${({$reverse:n})=>n?"8px 2px 2px 8px":"2px 8px 8px 2px"};
	}
`,Yn=ln.div`
	background-color: ${({$pressed:n})=>n?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	border-radius: 5px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 20px;
	width: 20px;
	transition: all 0.2s ease-in-out;
`,ny=ln.div`
	display: flex;
	align-items: center;
	height: 24px;
	margin-bottom: 2px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
`,Do=ln.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	height: 100%;
	justify-content: space-between;
	align-items: center;
`;ln.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;ln.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;const iy=ln.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	height: 100%;
	width: 49px;
	cursor: pointer;
	margin: 0 1px;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:n})=>n?"8px 2px 2px 8px":"2px 8px 8px 2px"};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}
`,gE=ln.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:n})=>n?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:n})=>n?"2px -26px 0 0":"2px 0 0 -26px"};
`,f2=ln.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;ln.div`
	display: flex;
	flex-direction: column;
	height: 50px;
	justify-content: space-between;
`;const dn=ln(ec)`
	height: 14px;
	min-height: 14px;
	max-height: 14px;
	width: 14px;
	min-width: 14px;
	max-width: 14px;
`;var Dt=j0();const vE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z",style:{fill:"#fff",fillOpacity:1}})]}),_E=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z",style:{fill:"#fff",fillOpacity:1}})]}),xE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z",style:{fill:"#fff",fillOpacity:1}})]}),yE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z",style:{fill:"#fff",fillOpacity:1}})]}),SE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:.5,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),ME=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),EE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),wE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),TE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),AE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),bE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),RE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),CE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),PE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),LE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),IE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),DE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),NE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",d:"M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),UE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",d:"m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),FE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[B.jsx("path",{stroke:"#fff",d:"m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),OE={"x-button-left":vE,"y-button-left":_E,"a-button-right":xE,"b-button-right":yE,"thumbstick-left":SE,"thumbstick-up-left":EE,"thumbstick-down-left":wE,"thumbstick-right-left":AE,"thumbstick-left-left":TE,"thumbstick-right":ME,"thumbstick-up-right":bE,"thumbstick-down-right":RE,"thumbstick-right-right":PE,"thumbstick-left-right":CE,"trigger-left":DE,"trigger-right":NE,"squeeze-left":LE,"squeeze-right":IE,"thumbrest-left":UE,"thumbrest-right":FE},nc=({buttonName:n,handedness:e})=>{const t=`${n}-${e}`,r=OE[t];return r?B.jsx(r,{}):B.jsx("div",{style:{width:"28px",height:"28px"}})},kE=()=>B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:B.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M1 11.2A5.2 5.2 0 0 1 6.2 6h15.6a5.2 5.2 0 0 1 5.2 5.2v5.2a5.2 5.2 0 0 1-5.2 5.2h-3.109c-1.149 0-2.199-.65-2.713-1.677l-.199-.398a1.733 1.733 0 0 0-1.55-.958h-.458c-.656 0-1.257.37-1.55.958l-.2.398A3.033 3.033 0 0 1 9.31 21.6H6.2A5.2 5.2 0 0 1 1 16.4v-5.2Zm9.1 2.167a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0Zm15.538-1.426a.498.498 0 0 0 .141-.542l.002-.002a5.456 5.456 0 0 0-.347-.755l-.104-.178a5.586 5.586 0 0 0-.486-.686.502.502 0 0 0-.54-.15l-1.225.39a4.234 4.234 0 0 0-.968-.56l-.275-1.256a.497.497 0 0 0-.4-.392 5.686 5.686 0 0 0-1.871.003.497.497 0 0 0-.4.391l-.276 1.257a4.234 4.234 0 0 0-.968.559l-1.226-.39a.498.498 0 0 0-.539.15 5.586 5.586 0 0 0-.486.686l-.104.179c-.134.242-.25.492-.347.754a.498.498 0 0 0 .14.542l.953.867a4.26 4.26 0 0 0 0 1.12l-.952.867a.498.498 0 0 0-.141.541c.097.262.213.513.347.755l.104.178c.145.242.308.471.486.687.13.156.346.211.54.15l1.223-.392c.295.226.62.416.968.559l.275 1.256c.044.2.198.359.4.392a5.686 5.686 0 0 0 1.871 0 .497.497 0 0 0 .4-.392l.276-1.256c.347-.143.673-.333.968-.56l1.225.39c.194.062.41.009.54-.15a5.59 5.59 0 0 0 .486-.686l.103-.178a5.45 5.45 0 0 0 .348-.755.498.498 0 0 0-.14-.541l-.954-.867a4.258 4.258 0 0 0 0-1.118l.953-.867ZM20.5 15.967a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})}),zE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[B.jsx("g",{clipPath:"url(#a)",children:B.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),B.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("defs",{children:B.jsx("clipPath",{id:"a",children:B.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),BE=()=>B.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[B.jsx("g",{clipPath:"url(#a)",children:B.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),B.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),B.jsx("defs",{children:B.jsx("clipPath",{id:"a",children:B.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),VE={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},lm={prefix:"fas",iconName:"fingerprint",icon:[512,512,[],"f577","M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]},HE={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},GE={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},d2={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},WE={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},ry={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},jE={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},XE={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},qE={prefix:"fas",iconName:"square-arrow-up-right",icon:[448,512,["external-link-square"],"f14c","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"]},YE={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},sy={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},$E={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},h2={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},ZE={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]},KE={prefix:"fas",iconName:"arrows-up-down",icon:[320,512,["arrows-v"],"f07d","M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]},QE={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},Nr={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:B.jsx(dn,{icon:WE}),Backspace:B.jsx(dn,{icon:$E}),Enter:B.jsx(dn,{style:{transform:"rotate(90deg)"},icon:ZE}),ShiftLeft:B.jsx(dn,{icon:h2}),ShiftRight:B.jsx(dn,{icon:h2}),Space:" ",ArrowUp:B.jsx(dn,{icon:ry}),ArrowDown:B.jsx(dn,{icon:sy}),ArrowLeft:B.jsx(dn,{icon:GE}),ArrowRight:B.jsx(dn,{icon:HE}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:B.jsx(zE,{}),MouseRight:B.jsx(BE,{})},JE={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight"}},ew=ln.div`
	display: flex;
	justify-content: space-between;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,p2=ln.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`,m2=ln.div`
	display: flex;
	height: 24px;
	align-items: center;
	margin-bottom: 2px;
`,tw=({keyMap:n,setKeyMap:e})=>{const[t,r]=Dt.useState(null),a=(c,f)=>{r({controller:c,action:f})},o=(c,f)=>{e(d=>({...d,[c]:{...d[c],[f]:"Unmapped"}}))};return Dt.useEffect(()=>{const c=h=>{t&&Nr[h.code]&&(e(m=>({...m,[t.controller]:{...m[t.controller],[t.action]:h.code}})),r(null))},f=h=>{if(t){const m=h.button===0?"MouseLeft":h.button===2?"MouseRight":null;m&&Nr[m]&&(e(x=>({...x,[t.controller]:{...x[t.controller],[t.action]:m}})),r(null))}},d=h=>{h.preventDefault()};return window.addEventListener("keydown",c),window.addEventListener("mousedown",f),window.addEventListener("contextmenu",d),()=>{window.removeEventListener("keydown",c),window.removeEventListener("mousedown",f),window.removeEventListener("contextmenu",d)}},[t,e]),B.jsxs(ew,{children:[B.jsx(p2,{children:Object.keys(n.left).map(c=>B.jsxs(m2,{children:[B.jsx(nc,{buttonName:c==="up"?"thumbstick":c,handedness:"left"}),B.jsxs(Do,{$reverse:!1,children:[B.jsx(Pn,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="left"&&t.action===c?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>a("left",c),onContextMenu:f=>f.preventDefault(),children:n.left[c]}),B.jsx(Pn,{style:{width:"24px"},$reverse:!1,onClick:()=>o("left",c),onContextMenu:f=>f.preventDefault(),children:B.jsx(ec,{icon:d2})})]})]},c))}),B.jsx(p2,{children:Object.keys(n.right).map(c=>B.jsxs(m2,{children:[B.jsx(nc,{buttonName:c==="up"?"thumbstick":c,handedness:"right"}),B.jsxs(Do,{$reverse:!1,children:[B.jsx(Pn,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="right"&&t.action===c?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>a("right",c),onContextMenu:f=>f.preventDefault(),children:n.right[c]}),B.jsx(Pn,{$reverse:!1,style:{width:"24px"},onClick:()=>o("right",c),onContextMenu:f=>f.preventDefault(),children:B.jsx(ec,{icon:d2})})]})]},c))})]})},nw=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:r})=>{const a=Em(),[o,c]=Dt.useState(!1),[f,d]=Dt.useState(!1),[h,m]=Dt.useState(!1),[x,_]=Dt.useState(0),S=n.inputSource.handedness;return Dt.useEffect(()=>{const E=T=>{T.code===r&&(n.updateButtonValue(e,1),m(!0))},M=T=>{T.code===r&&(n.updateButtonValue(e,0),m(!1))},g=T=>{(r==="MouseLeft"&&T.button===0||r==="MouseRight"&&T.button===2)&&(n.updateButtonValue(e,1),m(!0))},v=T=>{(r==="MouseLeft"&&T.button===0||r==="MouseRight"&&T.button===2)&&(n.updateButtonValue(e,0),m(!1))};return t?r==="MouseLeft"||r==="MouseRight"?(window.addEventListener("mousedown",g),window.addEventListener("mouseup",v)):(window.addEventListener("keydown",E),window.addEventListener("keyup",M)):r==="MouseLeft"||r==="MouseRight"?(window.removeEventListener("mousedown",g),window.removeEventListener("mouseup",v)):(window.removeEventListener("keydown",E),window.removeEventListener("keyup",M)),()=>{r==="MouseLeft"||r==="MouseRight"?(window.removeEventListener("mousedown",g),window.removeEventListener("mouseup",v)):(window.removeEventListener("keydown",E),window.removeEventListener("keyup",M))}},[r,t,e,n]),B.jsxs(ny,{$reverse:S==="right",children:[B.jsx(nc,{buttonName:e,handedness:S}),B.jsx(Do,{$reverse:S==="right",children:t?B.jsx(Yn,{$pressed:h,children:Nr[r]}):B.jsxs(B.Fragment,{children:[B.jsx(Pn,{$reverse:S==="right",style:{backgroundColor:f?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{d(!0),n.updateButtonValue(e,1),setTimeout(()=>{d(!1),n.updateButtonValue(e,0)},a.buttonPressDuration)},children:"Press"}),B.jsx(Pn,{$reverse:S==="right",style:{backgroundColor:o?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{c(!o),n.updateButtonTouch(e,!o)},children:B.jsx(dn,{icon:lm})}),B.jsx(iy,{$reverse:S==="right",value:x,onChange:E=>{const M=Number(E.target.value);_(M),n.updateButtonValue(e,M/100)},min:"0",max:"100"})]})})]})},iw=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:r})=>{const a=Em(),[o,c]=Dt.useState(!1),[f,d]=Dt.useState(!1),[h,m]=Dt.useState(!1),[x,_]=Dt.useState(!1),S=n.inputSource.handedness;return Dt.useEffect(()=>{const E=g=>{g.code===r&&(n.updateButtonValue(e,1),_(!0))},M=g=>{g.code===r&&(n.updateButtonValue(e,0),_(!1))};return t?(window.addEventListener("keydown",E),window.addEventListener("keyup",M)):(window.removeEventListener("keydown",E),window.removeEventListener("keyup",M)),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",M)}},[r,t,e,n]),B.jsxs(ny,{$reverse:S==="right",children:[B.jsx(nc,{buttonName:e,handedness:S}),B.jsx(Do,{$reverse:S==="right",children:t?B.jsx(Yn,{$pressed:x,children:Nr[r]}):B.jsxs(B.Fragment,{children:[B.jsx(Pn,{$reverse:S==="right",style:{backgroundColor:h?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{m(!0),n.updateButtonValue(e,1),setTimeout(()=>{m(!1),n.updateButtonValue(e,0)},a.buttonPressDuration)},children:"Press"}),B.jsx(Pn,{$reverse:S==="right",style:{backgroundColor:o?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{c(!o),n.updateButtonTouch(e,!o)},children:B.jsx(dn,{icon:lm})}),B.jsx(Pn,{$reverse:S==="right",style:{backgroundColor:f?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{d(!f),n.updateButtonValue(e,f?0:1)},children:"Hold"})]})})]})},rw=ln.div`
	display: flex;
	align-items: center;
	margin-bottom: 2px;
`,sw=ln.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`,aw=ln.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`,g2=ln(Pn)`
	width: 49px;
	font-size: 14px;

	${({$reverse:n})=>n?`
    &:first-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }

    &:last-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }
  `:`
    &:first-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }

    &:last-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }
  `}
`,ow=({xrController:n,pointerLocked:e,buttonId:t,mappedKeyUp:r,mappedKeyDown:a,mappedKeyLeft:o,mappedKeyRight:c,mappedKeyPressed:f})=>{const d=Em(),h=Dt.useRef(null),[m,x]=Dt.useState(!1),[_,S]=Dt.useState(!1),[E,M]=Dt.useState(!1),[g,v]=Dt.useState(!1),[T,w]=Dt.useState({x:0,y:0}),[b,U]=Dt.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),I=n.inputSource.handedness,D=()=>{if(h.current){const R=h.current.getBoundingClientRect();w({x:R.left+R.width/2,y:R.top+R.height/2}),x(!0)}},G=R=>{if(m&&h.current){const k=R.clientX-T.x,Q=R.clientY-T.y,Y=Math.sqrt(k*k+Q*Q),W=12;let ce,te;if(Y<W)ce=k,te=Q;else{const ae=Math.atan2(Q,k);ce=Math.cos(ae)*W,te=Math.sin(ae)*W}h.current.style.transform=`translate(${ce}px, ${te}px)`;const ue=ce/W,H=te/W;n.updateAxes(t,ue,H)}},L=()=>{x(!1),h.current&&(h.current.style.transform="translate(0, 0)",n.updateAxes(t,0,0))};return Dt.useEffect(()=>{const R=Y=>{const W={...b};Y.code===r&&(W.up=!0),Y.code===a&&(W.down=!0),Y.code===o&&(W.left=!0),Y.code===c&&(W.right=!0),Y.code===f&&(W.pressed=!0,n.updateButtonValue(t,1)),U(W),Q(W)},k=Y=>{const W={...b};Y.code===r&&(W.up=!1),Y.code===a&&(W.down=!1),Y.code===o&&(W.left=!1),Y.code===c&&(W.right=!1),Y.code===f&&(W.pressed=!1,n.updateButtonValue(t,0)),U(W),Q(W)},Q=Y=>{const W=(Y.right?1:0)-(Y.left?1:0),ce=(Y.down?1:0)-(Y.up?1:0),te=Math.sqrt(W*W+ce*ce);if(te===0){n.updateAxes(t,0,0);return}const ue=W/te,H=ce/te;n.updateAxes(t,ue,H)};return e?(window.addEventListener("keydown",R),window.addEventListener("keyup",k)):(window.removeEventListener("keydown",R),window.removeEventListener("keyup",k)),()=>{window.removeEventListener("keydown",R),window.removeEventListener("keyup",k)}},[r,a,o,c,e,b]),Dt.useEffect(()=>(document.addEventListener("mousemove",G),document.addEventListener("mouseup",L),()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",L)}),[m,T]),B.jsxs(rw,{style:{flexDirection:n.inputSource.handedness==="left"?"row":"row-reverse",alignItems:"flex-start"},children:[B.jsx(nc,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),e?B.jsxs(gE,{$reverse:I==="right",children:[B.jsxs(f2,{$reverse:I==="right",children:[B.jsx(Yn,{$pressed:b.up,style:{margin:"2px"},children:Nr[r]}),B.jsx(Yn,{$pressed:b.pressed,style:{margin:"2px"},children:Nr[f]})]}),B.jsxs(f2,{$reverse:!1,children:[B.jsx(Yn,{$pressed:b.left,style:{margin:"2px"},children:Nr[o]}),B.jsx(Yn,{$pressed:b.down,style:{margin:"2px"},children:Nr[a]}),B.jsx(Yn,{$pressed:b.right,style:{margin:"2px"},children:Nr[c]})]})]}):B.jsxs(B.Fragment,{children:[B.jsx(sw,{style:{margin:n.inputSource.handedness==="left"?"0 5px 0 -3px":"0 -3px 0 5px"},children:B.jsx(aw,{ref:h,onMouseDown:D})}),B.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[B.jsx(Pn,{$reverse:I==="right",style:{backgroundColor:g?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"80px",marginBottom:"2px",borderRadius:"8px"},onClick:()=>{v(!0),n.updateButtonValue(t,1),setTimeout(()=>{v(!1),n.updateButtonValue(t,0)},d.buttonPressDuration)},children:"Press"}),B.jsxs(Do,{$reverse:I==="right",children:[B.jsx(g2,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:_?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{S(!_),n.updateButtonTouch(t,!_)},children:B.jsx(dn,{icon:lm})}),B.jsx(g2,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:E?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{M(!E),n.updateButtonValue(t,E?0:1)},children:"Hold"})]})]})]})]})},lw=ln.div`
	padding: ${({$reverse:n})=>n?"6px 2px 3px 5px":"6px 5px 3px 2px"};
	pointer-events: all;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: ${({$reverse:n})=>n?"12px 0 0 0":"0 12px 0 0"};
`;function cw(n){const e=new Set;for(const r of n.axes)r&&r.id&&e.add(r.id);const t=n.buttons.filter(r=>r!==null).map(r=>({id:r.id,type:r.type,hasAxes:e.has(r.id)}));return t.sort((r,a)=>r.hasAxes&&!a.hasAxes?-1:!r.hasAxes&&a.hasAxes?1:0),t}const uw=({xrDevice:n,keyMap:e,pointerLocked:t})=>B.jsx("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:Object.entries(n.controllers).map(([r,a])=>B.jsx(lw,{$reverse:r!=="left",children:cw(a.gamepadConfig).map(o=>{const c=e[r];return o.hasAxes?B.jsx(ow,{xrController:a,pointerLocked:t,buttonId:o.id,mappedKeyUp:e[r][`${o.id}-up`],mappedKeyDown:c[`${o.id}-down`],mappedKeyLeft:c[`${o.id}-left`],mappedKeyRight:c[`${o.id}-right`],mappedKeyPressed:c[o.id]},o.id):o.type==="analog"?B.jsx(nw,{xrController:a,buttonId:o.id,mappedKey:c[o.id],pointerLocked:t},o.id):B.jsx(iw,{xrController:a,buttonId:o.id,mappedKey:c[o.id],pointerLocked:t},o.id)})},r))}),fw=ln.div`
	display: flex;
	justify-content: center;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,dw=({xrDevice:n,inputLayer:e})=>{const[t,r]=Dt.useState(n.fovy);return B.jsx(fw,{children:B.jsxs(Do,{$reverse:!1,children:[B.jsx(Pn,{$reverse:!1,disabled:!0,children:"FOV-Y"}),B.jsx(iy,{$reverse:!1,value:t,style:{width:"100px",borderRadius:"2px"},onChange:a=>{const o=Number(a.target.value);r(o),n.fovy=o,e.syncFovy(),e.renderScene()},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48}),B.jsxs(Pn,{$reverse:!1,disabled:!0,children:[(t/Math.PI*180).toFixed(2),"°"]})]})})},hw=ln.div`
	padding: 6px 5px;
	display: flex;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	justify-content: center;
	pointer-events: all;
	border-radius: 0 0 12px 12px;
	align-items: center;
	height: 24px;
`,v2=ln.div`
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	color: white;
	white-space: nowrap;
	font-size: 14px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;
	border-radius: ${({$reverse:n})=>n?"0 0 0 12px":"0 0 12px 0"};
	padding: 5px;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2px;
		margin: 2px;
	}
`,pw=({xrDevice:n,inputLayer:e,keyMapOpen:t,setKeyMapOpen:r,fovSettingOpen:a,setFovSettingOpen:o})=>B.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[B.jsxs(hw,{children:[B.jsx(kE,{}),B.jsxs("div",{style:{display:"flex",flexDirection:"row",marginLeft:"4px"},children:[B.jsx(Pn,{$reverse:!1,onClick:()=>{e.resetDeviceTransforms()},children:B.jsx(dn,{icon:jE})}),B.jsx(Pn,{$reverse:!1,onClick:()=>{e.lockPointer(),r(!1),o(!1)},children:B.jsx(dn,{icon:XE})}),B.jsx(Pn,{$reverse:!1,onClick:()=>{r(!t),o(!1)},children:B.jsx(dn,{icon:YE})}),B.jsx(Pn,{$reverse:!1,onClick:()=>{o(!a),r(!1)},children:B.jsx(dn,{icon:QE})}),B.jsx(Pn,{$reverse:!1,onClick:()=>{const c=n.activeSession;c?.end()},children:B.jsx(dn,{icon:VE})})]})]}),B.jsxs(v2,{$reverse:!1,style:{position:"fixed",left:"0",top:"0"},children:[B.jsxs("div",{children:[B.jsx(dn,{icon:qE,style:{marginRight:"4px"}})," ","Roomscale Movement"]}),B.jsxs("div",{children:[B.jsx(Yn,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),B.jsx("span",{style:{margin:"0 4px"},children:"+"}),B.jsx(Yn,{$pressed:!1,children:"W"}),B.jsx(Yn,{$pressed:!1,children:"A"}),B.jsx(Yn,{$pressed:!1,children:"S"}),B.jsx(Yn,{$pressed:!1,children:"D"})]})]}),B.jsxs(v2,{$reverse:!0,style:{position:"fixed",right:"0",top:"0"},children:[B.jsxs("div",{children:[B.jsx(dn,{icon:KE,style:{marginRight:"4px"}})," Camera Height"]}),B.jsxs("div",{children:[B.jsx(Yn,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),B.jsx("span",{style:{margin:"0 4px"},children:"+"}),B.jsx(Yn,{$pressed:!1,children:B.jsx(dn,{icon:ry})}),B.jsx(Yn,{$pressed:!1,children:B.jsx(dn,{icon:sy})})]})]})]});const cm="168",mw=0,_2=1,gw=2,ay=1,vw=2,Ir=3,zr=0,li=1,cr=2,Rs=0,Mo=1,x2=2,y2=3,S2=4,_w=5,la=100,xw=101,yw=102,Sw=103,Mw=104,Ew=200,ww=201,Tw=202,Aw=203,s0=204,a0=205,bw=206,Rw=207,Cw=208,Pw=209,Lw=210,Iw=211,Dw=212,Nw=213,Uw=214,Fw=0,Ow=1,kw=2,bf=3,zw=4,Bw=5,Vw=6,Hw=7,oy=0,Gw=1,Ww=2,Cs=0,jw=1,Xw=2,qw=3,Yw=4,$w=5,Zw=6,Kw=7,ly=300,No=301,Uo=302,o0=303,l0=304,Kf=306,c0=1e3,da=1001,u0=1002,Fi=1003,Qw=1004,wu=1005,Yi=1006,Kh=1007,ha=1008,Br=1009,cy=1010,uy=1011,ic=1012,um=1013,wa=1014,Ur=1015,lc=1016,fm=1017,dm=1018,Fo=1020,fy=35902,dy=1021,hy=1022,Zi=1023,py=1024,my=1025,Eo=1026,Oo=1027,gy=1028,hm=1029,vy=1030,pm=1031,mm=1033,of=33776,lf=33777,cf=33778,uf=33779,f0=35840,d0=35841,h0=35842,p0=35843,m0=36196,g0=37492,v0=37496,_0=37808,x0=37809,y0=37810,S0=37811,M0=37812,E0=37813,w0=37814,T0=37815,A0=37816,b0=37817,R0=37818,C0=37819,P0=37820,L0=37821,ff=36492,I0=36494,D0=36495,_y=36283,N0=36284,U0=36285,F0=36286,Jw=3200,e6=3201,t6=0,n6=1,As="",sr="srgb",Ns="srgb-linear",gm="display-p3",Qf="display-p3-linear",Rf="linear",qt="srgb",Cf="rec709",Pf="p3",Za=7680,M2=519,i6=512,r6=513,s6=514,xy=515,a6=516,o6=517,l6=518,c6=519,E2=35044,w2="300 es",Fr=2e3,Lf=2001;class Vo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=Math.PI/180,O0=180/Math.PI;function cc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function si(n,e,t){return Math.max(e,Math.min(t,n))}function u6(n,e){return(n%e+e)%e}function Jh(n,e,t){return(1-t)*n+t*e}function bl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(si(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*r-c*a+e.x,this.y=o*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,r,a,o,c,f,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,f,d,h)}set(e,t,r,a,o,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=o,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],m=r[4],x=r[7],_=r[2],S=r[5],E=r[8],M=a[0],g=a[3],v=a[6],T=a[1],w=a[4],b=a[7],U=a[2],I=a[5],D=a[8];return o[0]=c*M+f*T+d*U,o[3]=c*g+f*w+d*I,o[6]=c*v+f*b+d*D,o[1]=h*M+m*T+x*U,o[4]=h*g+m*w+x*I,o[7]=h*v+m*b+x*D,o[2]=_*M+S*T+E*U,o[5]=_*g+S*w+E*I,o[8]=_*v+S*b+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-r*o*m+r*f*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],x=m*c-f*h,_=f*d-m*o,S=h*o-c*d,E=t*x+r*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=x*M,e[1]=(a*h-m*r)*M,e[2]=(f*r-a*c)*M,e[3]=_*M,e[4]=(m*t-a*d)*M,e[5]=(a*o-f*t)*M,e[6]=S*M,e[7]=(r*d-h*t)*M,e[8]=(c*t-r*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,o,c,f){const d=Math.cos(o),h=Math.sin(o);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-a*h,a*d,-a*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ep.makeScale(e,t)),this}rotate(e){return this.premultiply(ep.makeRotation(-e)),this}translate(e,t){return this.premultiply(ep.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ep=new gt;function yy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function If(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function f6(){const n=If("canvas");return n.style.display="block",n}const T2={};function ql(n){n in T2||(T2[n]=!0,console.warn(n))}function d6(n,e,t){return new Promise(function(r,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const A2=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),b2=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rl={[Ns]:{transfer:Rf,primaries:Cf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sr]:{transfer:qt,primaries:Cf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qf]:{transfer:Rf,primaries:Pf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(b2),fromReference:n=>n.applyMatrix3(A2)},[gm]:{transfer:qt,primaries:Pf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(b2),fromReference:n=>n.applyMatrix3(A2).convertLinearToSRGB()}},h6=new Set([Ns,Qf]),It={enabled:!0,_workingColorSpace:Ns,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!h6.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=Rl[e].toReference,a=Rl[t].fromReference;return a(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Rl[n].primaries},getTransfer:function(n){return n===As?Rf:Rl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Rl[e].luminanceCoefficients)}};function wo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ka;class p6{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ka===void 0&&(Ka=If("canvas")),Ka.width=e.width,Ka.height=e.height;const r=Ka.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ka}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=If("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=wo(o[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wo(t[r]/255)*255):t[r]=wo(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m6=0;class Sy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m6++}),this.uuid=cc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?o.push(np(a[c].image)):o.push(np(a[c]))}else o=np(a);r.url=o}return t||(e.images[this.uuid]=r),r}}function np(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p6.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g6=0;class ci extends Vo{constructor(e=ci.DEFAULT_IMAGE,t=ci.DEFAULT_MAPPING,r=da,a=da,o=Yi,c=ha,f=Zi,d=Br,h=ci.DEFAULT_ANISOTROPY,m=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g6++}),this.uuid=cc(),this.name="",this.source=new Sy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ly)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case c0:e.x=e.x-Math.floor(e.x);break;case da:e.x=e.x<0?0:1;break;case u0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case c0:e.y=e.y-Math.floor(e.y);break;case da:e.y=e.y<0?0:1;break;case u0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=ly;ci.DEFAULT_ANISOTROPY=1;class Ln{constructor(e=0,t=0,r=0,a=1){Ln.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,o;const d=e.elements,h=d[0],m=d[4],x=d[8],_=d[1],S=d[5],E=d[9],M=d[2],g=d[6],v=d[10];if(Math.abs(m-_)<.01&&Math.abs(x-M)<.01&&Math.abs(E-g)<.01){if(Math.abs(m+_)<.1&&Math.abs(x+M)<.1&&Math.abs(E+g)<.1&&Math.abs(h+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,b=(S+1)/2,U=(v+1)/2,I=(m+_)/4,D=(x+M)/4,G=(E+g)/4;return w>b&&w>U?w<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(w),a=I/r,o=D/r):b>U?b<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(b),r=I/a,o=G/a):U<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(U),r=D/o,a=G/o),this.set(r,a,o,t),this}let T=Math.sqrt((g-E)*(g-E)+(x-M)*(x-M)+(_-m)*(_-m));return Math.abs(T)<.001&&(T=1),this.x=(g-E)/T,this.y=(x-M)/T,this.z=(_-m)/T,this.w=Math.acos((h+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v6 extends Vo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ln(0,0,e,t),this.scissorTest=!1,this.viewport=new Ln(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new ci(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ta extends v6{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class My extends ci{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _6 extends ci{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,o,c,f){let d=r[a+0],h=r[a+1],m=r[a+2],x=r[a+3];const _=o[c+0],S=o[c+1],E=o[c+2],M=o[c+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=x;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(x!==M||d!==_||h!==S||m!==E){let g=1-f;const v=d*_+h*S+m*E+x*M,T=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const U=Math.sqrt(w),I=Math.atan2(U,v*T);g=Math.sin(g*I)/U,f=Math.sin(f*I)/U}const b=f*T;if(d=d*g+_*b,h=h*g+S*b,m=m*g+E*b,x=x*g+M*b,g===1-f){const U=1/Math.sqrt(d*d+h*h+m*m+x*x);d*=U,h*=U,m*=U,x*=U}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,o,c){const f=r[a],d=r[a+1],h=r[a+2],m=r[a+3],x=o[c],_=o[c+1],S=o[c+2],E=o[c+3];return e[t]=f*E+m*x+d*S-h*_,e[t+1]=d*E+m*_+h*x-f*S,e[t+2]=h*E+m*S+f*_-d*x,e[t+3]=m*E-f*x-d*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,o=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(a/2),x=f(o/2),_=d(r/2),S=d(a/2),E=d(o/2);switch(c){case"XYZ":this._x=_*m*x+h*S*E,this._y=h*S*x-_*m*E,this._z=h*m*E+_*S*x,this._w=h*m*x-_*S*E;break;case"YXZ":this._x=_*m*x+h*S*E,this._y=h*S*x-_*m*E,this._z=h*m*E-_*S*x,this._w=h*m*x+_*S*E;break;case"ZXY":this._x=_*m*x-h*S*E,this._y=h*S*x+_*m*E,this._z=h*m*E+_*S*x,this._w=h*m*x-_*S*E;break;case"ZYX":this._x=_*m*x-h*S*E,this._y=h*S*x+_*m*E,this._z=h*m*E-_*S*x,this._w=h*m*x+_*S*E;break;case"YZX":this._x=_*m*x+h*S*E,this._y=h*S*x+_*m*E,this._z=h*m*E-_*S*x,this._w=h*m*x-_*S*E;break;case"XZY":this._x=_*m*x-h*S*E,this._y=h*S*x-_*m*E,this._z=h*m*E+_*S*x,this._w=h*m*x+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],o=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],x=t[10],_=r+f+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-d)*S,this._y=(o-h)*S,this._z=(c-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(o+h)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(o-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(c-a)/S,this._x=(o+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(si(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,o=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*f+a*h-o*d,this._y=a*m+c*d+o*f-r*h,this._z=o*m+c*h+r*d-a*f,this._w=c*m-r*f-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,o=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+o*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=o,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*o+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),x=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*x+this._w*_,this._x=r*x+this._x*_,this._y=a*x+this._y*_,this._z=o*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R2.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R2.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*a,this.y=o[1]*t+o[4]*r+o[7]*a,this.z=o[2]*t+o[5]*r+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*r+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*r+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,o=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*a-f*r),m=2*(f*t-o*a),x=2*(o*r-c*t);return this.x=t+d*h+c*x-f*m,this.y=r+d*m+f*h-o*x,this.z=a+d*x+o*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*a,this.y=o[1]*t+o[5]*r+o[9]*a,this.z=o[2]*t+o[6]*r+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,o=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-o*f,this.y=o*c-r*d,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ip.copy(this).projectOnVector(e),this.sub(ip)}reflect(e){return this.sub(ip.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(si(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ip=new X,R2=new Nn;class uc{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=o.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ji):ji.fromBufferAttribute(o,c),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tu.copy(r.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),Au.subVectors(this.max,Cl),Qa.subVectors(e.a,Cl),Ja.subVectors(e.b,Cl),eo.subVectors(e.c,Cl),ps.subVectors(Ja,Qa),ms.subVectors(eo,Ja),Zs.subVectors(Qa,eo);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Zs.z,Zs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Zs.z,0,-Zs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Zs.y,Zs.x,0];return!rp(t,Qa,Ja,eo,Au)||(t=[1,0,0,0,1,0,0,0,1],!rp(t,Qa,Ja,eo,Au))?!1:(bu.crossVectors(ps,ms),t=[bu.x,bu.y,bu.z],rp(t,Qa,Ja,eo,Au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const br=[new X,new X,new X,new X,new X,new X,new X,new X],ji=new X,Tu=new uc,Qa=new X,Ja=new X,eo=new X,ps=new X,ms=new X,Zs=new X,Cl=new X,Au=new X,bu=new X,Ks=new X;function rp(n,e,t,r,a){for(let o=0,c=n.length-3;o<=c;o+=3){Ks.fromArray(n,o);const f=a.x*Math.abs(Ks.x)+a.y*Math.abs(Ks.y)+a.z*Math.abs(Ks.z),d=e.dot(Ks),h=t.dot(Ks),m=r.dot(Ks);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const x6=new uc,Pl=new X,sp=new X;class Jf{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):x6.setFromPoints(e).getCenter(r);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const t=Pl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Pl,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(sp)),this.expandByPoint(Pl.copy(e.center).sub(sp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new X,ap=new X,Ru=new X,gs=new X,op=new X,Cu=new X,lp=new X;class vm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){ap.copy(e).add(t).multiplyScalar(.5),Ru.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(ap);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Ru),f=gs.dot(this.direction),d=-gs.dot(Ru),h=gs.lengthSq(),m=Math.abs(1-c*c);let x,_,S,E;if(m>0)if(x=c*d-f,_=c*f-d,E=o*m,x>=0)if(_>=-E)if(_<=E){const M=1/m;x*=M,_*=M,S=x*(x+c*_+2*f)+_*(c*x+_+2*d)+h}else _=o,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+h;else _=-o,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+h;else _<=-E?(x=Math.max(0,-(-c*o+f)),_=x>0?-o:Math.min(Math.max(-o,-d),o),S=-x*x+_*(_+2*d)+h):_<=E?(x=0,_=Math.min(Math.max(-o,-d),o),S=_*(_+2*d)+h):(x=Math.max(0,-(c*o+f)),_=x>0?o:Math.min(Math.max(-o,-d),o),S=-x*x+_*(_+2*d)+h);else _=c>0?-o:o,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(ap).addScaledVector(Ru,_),S}intersectSphere(e,t){Rr.subVectors(e.center,this.origin);const r=Rr.dot(this.direction),a=Rr.dot(Rr)-r*r,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,o,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,a=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,a=(e.min.x-_.x)*h),m>=0?(o=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-_.z)*x,d=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,d=(e.min.z-_.z)*x),r>d||f>a)||((f>r||r!==r)&&(r=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,r,a,o){op.subVectors(t,e),Cu.subVectors(r,e),lp.crossVectors(op,Cu);let c=this.direction.dot(lp),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gs.subVectors(this.origin,e);const d=f*this.direction.dot(Cu.crossVectors(gs,Cu));if(d<0)return null;const h=f*this.direction.dot(op.cross(gs));if(h<0||d+h>c)return null;const m=-f*gs.dot(lp);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,t,r,a,o,c,f,d,h,m,x,_,S,E,M,g){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,f,d,h,m,x,_,S,E,M,g)}set(e,t,r,a,o,c,f,d,h,m,x,_,S,E,M,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=a,v[1]=o,v[5]=c,v[9]=f,v[13]=d,v[2]=h,v[6]=m,v[10]=x,v[14]=_,v[3]=S,v[7]=E,v[11]=M,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/to.setFromMatrixColumn(e,0).length(),o=1/to.setFromMatrixColumn(e,1).length(),c=1/to.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,o=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(a),h=Math.sin(a),m=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const _=c*m,S=c*x,E=f*m,M=f*x;t[0]=d*m,t[4]=-d*x,t[8]=h,t[1]=S+E*h,t[5]=_-M*h,t[9]=-f*d,t[2]=M-_*h,t[6]=E+S*h,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,S=d*x,E=h*m,M=h*x;t[0]=_+M*f,t[4]=E*f-S,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,S=d*x,E=h*m,M=h*x;t[0]=_-M*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-_*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,S=c*x,E=f*m,M=f*x;t[0]=d*m,t[4]=E*h-S,t[8]=_*h+M,t[1]=d*x,t[5]=M*h+_,t[9]=S*h-E,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*h,E=f*d,M=f*h;t[0]=d*m,t[4]=M-_*x,t[8]=E*x+S,t[1]=x,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*x+E,t[10]=_-M*x}else if(e.order==="XZY"){const _=c*d,S=c*h,E=f*d,M=f*h;t[0]=d*m,t[4]=-x,t[8]=h*m,t[1]=_*x+M,t[5]=c*m,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*m,t[10]=M*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y6,e,S6)}lookAt(e,t,r){const a=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),vs.crossVectors(r,yi),vs.lengthSq()===0&&(Math.abs(r.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),vs.crossVectors(r,yi)),vs.normalize(),Pu.crossVectors(yi,vs),a[0]=vs.x,a[4]=Pu.x,a[8]=yi.x,a[1]=vs.y,a[5]=Pu.y,a[9]=yi.y,a[2]=vs.z,a[6]=Pu.z,a[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],m=r[1],x=r[5],_=r[9],S=r[13],E=r[2],M=r[6],g=r[10],v=r[14],T=r[3],w=r[7],b=r[11],U=r[15],I=a[0],D=a[4],G=a[8],L=a[12],R=a[1],k=a[5],Q=a[9],Y=a[13],W=a[2],ce=a[6],te=a[10],ue=a[14],H=a[3],ae=a[7],le=a[11],O=a[15];return o[0]=c*I+f*R+d*W+h*H,o[4]=c*D+f*k+d*ce+h*ae,o[8]=c*G+f*Q+d*te+h*le,o[12]=c*L+f*Y+d*ue+h*O,o[1]=m*I+x*R+_*W+S*H,o[5]=m*D+x*k+_*ce+S*ae,o[9]=m*G+x*Q+_*te+S*le,o[13]=m*L+x*Y+_*ue+S*O,o[2]=E*I+M*R+g*W+v*H,o[6]=E*D+M*k+g*ce+v*ae,o[10]=E*G+M*Q+g*te+v*le,o[14]=E*L+M*Y+g*ue+v*O,o[3]=T*I+w*R+b*W+U*H,o[7]=T*D+w*k+b*ce+U*ae,o[11]=T*G+w*Q+b*te+U*le,o[15]=T*L+w*Y+b*ue+U*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],o=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],x=e[6],_=e[10],S=e[14],E=e[3],M=e[7],g=e[11],v=e[15];return E*(+o*d*x-a*h*x-o*f*_+r*h*_+a*f*S-r*d*S)+M*(+t*d*S-t*h*_+o*c*_-a*c*S+a*h*m-o*d*m)+g*(+t*h*x-t*f*S-o*c*x+r*c*S+o*f*m-r*h*m)+v*(-a*f*m-t*d*x+t*f*_+a*c*x-r*c*_+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],x=e[9],_=e[10],S=e[11],E=e[12],M=e[13],g=e[14],v=e[15],T=x*g*h-M*_*h+M*d*S-f*g*S-x*d*v+f*_*v,w=E*_*h-m*g*h-E*d*S+c*g*S+m*d*v-c*_*v,b=m*M*h-E*x*h+E*f*S-c*M*S-m*f*v+c*x*v,U=E*x*d-m*M*d-E*f*_+c*M*_+m*f*g-c*x*g,I=t*T+r*w+a*b+o*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=T*D,e[1]=(M*_*o-x*g*o-M*a*S+r*g*S+x*a*v-r*_*v)*D,e[2]=(f*g*o-M*d*o+M*a*h-r*g*h-f*a*v+r*d*v)*D,e[3]=(x*d*o-f*_*o-x*a*h+r*_*h+f*a*S-r*d*S)*D,e[4]=w*D,e[5]=(m*g*o-E*_*o+E*a*S-t*g*S-m*a*v+t*_*v)*D,e[6]=(E*d*o-c*g*o-E*a*h+t*g*h+c*a*v-t*d*v)*D,e[7]=(c*_*o-m*d*o+m*a*h-t*_*h-c*a*S+t*d*S)*D,e[8]=b*D,e[9]=(E*x*o-m*M*o-E*r*S+t*M*S+m*r*v-t*x*v)*D,e[10]=(c*M*o-E*f*o+E*r*h-t*M*h-c*r*v+t*f*v)*D,e[11]=(m*f*o-c*x*o-m*r*h+t*x*h+c*r*S-t*f*S)*D,e[12]=U*D,e[13]=(m*M*a-E*x*a+E*r*_-t*M*_-m*r*g+t*x*g)*D,e[14]=(E*f*a-c*M*a-E*r*d+t*M*d+c*r*g-t*f*g)*D,e[15]=(c*x*a-m*f*a+m*r*d-t*x*d-c*r*_+t*f*_)*D,this}scale(e){const t=this.elements,r=e.x,a=e.y,o=e.z;return t[0]*=r,t[4]*=a,t[8]*=o,t[1]*=r,t[5]*=a,t[9]*=o,t[2]*=r,t[6]*=a,t[10]*=o,t[3]*=r,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),o=1-r,c=e.x,f=e.y,d=e.z,h=o*c,m=o*f;return this.set(h*c+r,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+r,m*d-a*c,0,h*d-a*f,m*d+a*c,o*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,o,c){return this.set(1,r,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,o=t._x,c=t._y,f=t._z,d=t._w,h=o+o,m=c+c,x=f+f,_=o*h,S=o*m,E=o*x,M=c*m,g=c*x,v=f*x,T=d*h,w=d*m,b=d*x,U=r.x,I=r.y,D=r.z;return a[0]=(1-(M+v))*U,a[1]=(S+b)*U,a[2]=(E-w)*U,a[3]=0,a[4]=(S-b)*I,a[5]=(1-(_+v))*I,a[6]=(g+T)*I,a[7]=0,a[8]=(E+w)*D,a[9]=(g-T)*D,a[10]=(1-(_+M))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let o=to.set(a[0],a[1],a[2]).length();const c=to.set(a[4],a[5],a[6]).length(),f=to.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Xi.copy(this);const h=1/o,m=1/c,x=1/f;return Xi.elements[0]*=h,Xi.elements[1]*=h,Xi.elements[2]*=h,Xi.elements[4]*=m,Xi.elements[5]*=m,Xi.elements[6]*=m,Xi.elements[8]*=x,Xi.elements[9]*=x,Xi.elements[10]*=x,t.setFromRotationMatrix(Xi),r.x=o,r.y=c,r.z=f,this}makePerspective(e,t,r,a,o,c,f=Fr){const d=this.elements,h=2*o/(t-e),m=2*o/(r-a),x=(t+e)/(t-e),_=(r+a)/(r-a);let S,E;if(f===Fr)S=-(c+o)/(c-o),E=-2*c*o/(c-o);else if(f===Lf)S=-c/(c-o),E=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,a,o,c,f=Fr){const d=this.elements,h=1/(t-e),m=1/(r-a),x=1/(c-o),_=(t+e)*h,S=(r+a)*m;let E,M;if(f===Fr)E=(c+o)*x,M=-2*x;else if(f===Lf)E=o*x,M=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const to=new X,Xi=new on,y6=new X(0,0,0),S6=new X(1,1,1),vs=new X,Pu=new X,yi=new X,C2=new on,P2=new Nn;class mr{constructor(e=0,t=0,r=0,a=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,o=a[0],c=a[4],f=a[8],d=a[1],h=a[5],m=a[9],x=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(si(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-si(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(si(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-si(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(si(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-si(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return C2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C2,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return P2.setFromEuler(this),this.setFromQuaternion(P2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class _m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M6=0;const L2=new X,no=new Nn,Cr=new on,Lu=new X,Ll=new X,E6=new X,w6=new Nn,I2=new X(1,0,0),D2=new X(0,1,0),N2=new X(0,0,1),U2={type:"added"},T6={type:"removed"},io={type:"childadded",child:null},cp={type:"childremoved",child:null};class Un extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M6++}),this.uuid=cc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new X,t=new mr,r=new Nn,a=new X(1,1,1);function o(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new gt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(I2,e)}rotateY(e){return this.rotateOnAxis(D2,e)}rotateZ(e){return this.rotateOnAxis(N2,e)}translateOnAxis(e,t){return L2.copy(e).applyQuaternion(this.quaternion),this.position.add(L2.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I2,e)}translateY(e){return this.translateOnAxis(D2,e)}translateZ(e){return this.translateOnAxis(N2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Lu.copy(e):Lu.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Ll,Lu,this.up):Cr.lookAt(Lu,Ll,this.up),this.quaternion.setFromRotationMatrix(Cr),a&&(Cr.extractRotation(a.matrixWorld),no.setFromRotationMatrix(Cr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U2),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T6),cp.child=e,this.dispatchEvent(cp),cp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U2),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,E6),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,w6,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const x=d[h];o(e.shapes,x)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(o(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Un.DEFAULT_UP=new X(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new X,Pr=new X,up=new X,Lr=new X,ro=new X,so=new X,F2=new X,fp=new X,dp=new X,hp=new X;class ur{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),qi.subVectors(e,t),a.cross(qi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,r,a,o){qi.subVectors(a,t),Pr.subVectors(r,t),up.subVectors(e,t);const c=qi.dot(qi),f=qi.dot(Pr),d=qi.dot(up),h=Pr.dot(Pr),m=Pr.dot(up),x=c*h-f*f;if(x===0)return o.set(0,0,0),null;const _=1/x,S=(h*d-f*m)*_,E=(c*m-f*d)*_;return o.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,r,a,o,c,f,d){return this.getBarycoord(e,t,r,a,Lr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Lr.x),d.addScaledVector(c,Lr.y),d.addScaledVector(f,Lr.z),d)}static isFrontFacing(e,t,r,a){return qi.subVectors(r,t),Pr.subVectors(e,t),qi.cross(Pr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Pr.subVectors(this.a,this.b),qi.cross(Pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ur.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,o){return ur.getInterpolation(e,this.a,this.b,this.c,t,r,a,o)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,o=this.c;let c,f;ro.subVectors(a,r),so.subVectors(o,r),fp.subVectors(e,r);const d=ro.dot(fp),h=so.dot(fp);if(d<=0&&h<=0)return t.copy(r);dp.subVectors(e,a);const m=ro.dot(dp),x=so.dot(dp);if(m>=0&&x<=m)return t.copy(a);const _=d*x-m*h;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(ro,c);hp.subVectors(e,o);const S=ro.dot(hp),E=so.dot(hp);if(E>=0&&S<=E)return t.copy(o);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(r).addScaledVector(so,f);const g=m*E-S*x;if(g<=0&&x-m>=0&&S-E>=0)return F2.subVectors(o,a),f=(x-m)/(x-m+(S-E)),t.copy(a).addScaledVector(F2,f);const v=1/(g+M+_);return c=M*v,f=_*v,t.copy(r).addScaledVector(ro,c).addScaledVector(so,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Iu={h:0,s:0,l:0};function pp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=It.workingColorSpace){if(e=u6(e,1),t=si(t,0,1),r=si(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,c=2*r-o;this.r=pp(c,o,e+1/3),this.g=pp(c,o,e),this.b=pp(c,o,e-1/3)}return It.toWorkingColorSpace(this,a),this}setStyle(e,t=sr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sr){const r=Ey[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=tp(e.r),this.g=tp(e.g),this.b=tp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sr){return It.fromWorkingColorSpace(Vn.copy(this),e),Math.round(si(Vn.r*255,0,255))*65536+Math.round(si(Vn.g*255,0,255))*256+Math.round(si(Vn.b*255,0,255))}getHexString(e=sr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(Vn.copy(this),t);const r=Vn.r,a=Vn.g,o=Vn.b,c=Math.max(r,a,o),f=Math.min(r,a,o);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=m<=.5?x/(c+f):x/(2-c-f),c){case r:d=(a-o)/x+(a<o?6:0);break;case a:d=(o-r)/x+2;break;case o:d=(r-a)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=sr){It.fromWorkingColorSpace(Vn.copy(this),e);const t=Vn.r,r=Vn.g,a=Vn.b;return e!==sr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Iu);const r=Jh(_s.h,Iu.h,t),a=Jh(_s.s,Iu.s,t),o=Jh(_s.l,Iu.l,t);return this.setHSL(r,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*a,this.g=o[1]*t+o[4]*r+o[7]*a,this.b=o[2]*t+o[5]*r+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Ft;Ft.NAMES=Ey;let A6=0;class fc extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A6++}),this.uuid=cc(),this.name="",this.type="Material",this.blending=Mo,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=s0,this.blendDst=a0,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=bf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(r.blending=this.blending),this.side!==zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==s0&&(r.blendSrc=this.blendSrc),this.blendDst!==a0&&(r.blendDst=this.blendDst),this.blendEquation!==la&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bf&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M2&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Za&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Za&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Za&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const c=[];for(const f in o){const d=o[f];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(r.textures=o),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dc extends fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new X,Du=new Et;class hr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=E2,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ql("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Du.fromBufferAttribute(this,t),Du.applyMatrix3(e),this.setXY(t,Du.x,Du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=bl(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ni(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array),a=ni(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),r=ni(r,this.array),a=ni(a,this.array),o=ni(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E2&&(e.usage=this.usage),e}}class wy extends hr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ty extends hr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Zt extends hr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let b6=0;const Ni=new on,mp=new Un,ao=new X,Si=new uc,Il=new uc,bn=new X;class $n extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b6++}),this.uuid=cc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yy(e)?Ty:wy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new gt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,r){return Ni.makeTranslation(e,t,r),this.applyMatrix4(Ni),this}scale(e,t,r){return Ni.makeScale(e,t,r),this.applyMatrix4(Ni),this}lookAt(e){return mp.lookAt(e),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const f=t[o];Il.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(Si.min,Il.min),Si.expandByPoint(bn),bn.addVectors(Si.max,Il.max),Si.expandByPoint(bn)):(Si.expandByPoint(Il.min),Si.expandByPoint(Il.max))}Si.getCenter(r);let a=0;for(let o=0,c=e.count;o<c;o++)bn.fromBufferAttribute(e,o),a=Math.max(a,r.distanceToSquared(bn));if(t)for(let o=0,c=t.length;o<c;o++){const f=t[o],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)bn.fromBufferAttribute(f,h),d&&(ao.fromBufferAttribute(e,h),bn.add(ao)),a=Math.max(a,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hr(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let G=0;G<r.count;G++)f[G]=new X,d[G]=new X;const h=new X,m=new X,x=new X,_=new Et,S=new Et,E=new Et,M=new X,g=new X;function v(G,L,R){h.fromBufferAttribute(r,G),m.fromBufferAttribute(r,L),x.fromBufferAttribute(r,R),_.fromBufferAttribute(o,G),S.fromBufferAttribute(o,L),E.fromBufferAttribute(o,R),m.sub(h),x.sub(h),S.sub(_),E.sub(_);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(k),g.copy(x).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(k),f[G].add(M),f[L].add(M),f[R].add(M),d[G].add(g),d[L].add(g),d[R].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let G=0,L=T.length;G<L;++G){const R=T[G],k=R.start,Q=R.count;for(let Y=k,W=k+Q;Y<W;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new X,b=new X,U=new X,I=new X;function D(G){U.fromBufferAttribute(a,G),I.copy(U);const L=f[G];w.copy(L),w.sub(U.multiplyScalar(U.dot(L))).normalize(),b.crossVectors(I,L);const k=b.dot(d[G])<0?-1:1;c.setXYZW(G,w.x,w.y,w.z,k)}for(let G=0,L=T.length;G<L;++G){const R=T[G],k=R.start,Q=R.count;for(let Y=k,W=k+Q;Y<W;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const a=new X,o=new X,c=new X,f=new X,d=new X,h=new X,m=new X,x=new X;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),g=e.getX(_+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),c.fromBufferAttribute(t,g),m.subVectors(c,o),x.subVectors(a,o),m.cross(x),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,g),f.add(m),d.add(m),h.add(m),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,o),x.subVectors(a,o),m.cross(x),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,x=f.normalized,_=new h.constructor(d.length*m);let S=0,E=0;for(let M=0,g=d.length;M<g;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let v=0;v<m;v++)_[E++]=h[S++]}return new hr(_,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,r=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,r);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let m=0,x=h.length;m<x;m++){const _=h[m],S=e(_,r);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let x=0,_=h.length;x<_;x++){const S=h[x];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],x=o[h];for(let _=0,S=x.length;_<S;_++)m.push(x[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O2=new on,Qs=new vm,Nu=new Jf,k2=new X,oo=new X,lo=new X,co=new X,gp=new X,Uu=new X,Fu=new Et,Ou=new Et,ku=new Et,z2=new X,B2=new X,V2=new X,zu=new X,Bu=new X;class ke extends Un{constructor(e=new $n,t=new dc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){Uu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=f[d],x=o[d];m!==0&&(gp.fromBufferAttribute(x,e),c?Uu.addScaledVector(gp,m):Uu.addScaledVector(gp.sub(t),m))}t.add(Uu)}return t}raycast(e,t){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(o),Qs.copy(e.ray).recast(e.near),!(Nu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Nu,k2)===null||Qs.origin.distanceToSquared(k2)>(e.far-e.near)**2))&&(O2.copy(o).invert(),Qs.copy(e.ray).applyMatrix4(O2),!(r.boundingBox!==null&&Qs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,r){let a;const o=this.geometry,c=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,m=o.attributes.uv1,x=o.attributes.normal,_=o.groups,S=o.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const g=_[E],v=c[g.materialIndex],T=Math.max(g.start,S.start),w=Math.min(f.count,Math.min(g.start+g.count,S.start+S.count));for(let b=T,U=w;b<U;b+=3){const I=f.getX(b),D=f.getX(b+1),G=f.getX(b+2);a=Vu(this,v,e,r,h,m,x,I,D,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let g=E,v=M;g<v;g+=3){const T=f.getX(g),w=f.getX(g+1),b=f.getX(g+2);a=Vu(this,c,e,r,h,m,x,T,w,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=_.length;E<M;E++){const g=_[E],v=c[g.materialIndex],T=Math.max(g.start,S.start),w=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let b=T,U=w;b<U;b+=3){const I=b,D=b+1,G=b+2;a=Vu(this,v,e,r,h,m,x,I,D,G),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let g=E,v=M;g<v;g+=3){const T=g,w=g+1,b=g+2;a=Vu(this,c,e,r,h,m,x,T,w,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function R6(n,e,t,r,a,o,c,f){let d;if(e.side===li?d=r.intersectTriangle(c,o,a,!0,f):d=r.intersectTriangle(a,o,c,e.side===zr,f),d===null)return null;Bu.copy(f),Bu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Bu);return h<t.near||h>t.far?null:{distance:h,point:Bu.clone(),object:n}}function Vu(n,e,t,r,a,o,c,f,d,h){n.getVertexPosition(f,oo),n.getVertexPosition(d,lo),n.getVertexPosition(h,co);const m=R6(n,e,t,r,oo,lo,co,zu);if(m){a&&(Fu.fromBufferAttribute(a,f),Ou.fromBufferAttribute(a,d),ku.fromBufferAttribute(a,h),m.uv=ur.getInterpolation(zu,oo,lo,co,Fu,Ou,ku,new Et)),o&&(Fu.fromBufferAttribute(o,f),Ou.fromBufferAttribute(o,d),ku.fromBufferAttribute(o,h),m.uv1=ur.getInterpolation(zu,oo,lo,co,Fu,Ou,ku,new Et)),c&&(z2.fromBufferAttribute(c,f),B2.fromBufferAttribute(c,d),V2.fromBufferAttribute(c,h),m.normal=ur.getInterpolation(zu,oo,lo,co,z2,B2,V2,new X),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:d,c:h,normal:new X,materialIndex:0};ur.getNormal(oo,lo,co,x.normal),m.face=x}return m}class fn extends $n{constructor(e=1,t=1,r=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:o,depthSegments:c};const f=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],m=[],x=[];let _=0,S=0;E("z","y","x",-1,-1,r,t,e,c,o,0),E("z","y","x",1,-1,r,t,-e,c,o,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,o,4),E("x","y","z",-1,-1,e,t,-r,a,o,5),this.setIndex(d),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(x,2));function E(M,g,v,T,w,b,U,I,D,G,L){const R=b/D,k=U/G,Q=b/2,Y=U/2,W=I/2,ce=D+1,te=G+1;let ue=0,H=0;const ae=new X;for(let le=0;le<te;le++){const O=le*k-Y;for(let ne=0;ne<ce;ne++){const Ne=ne*R-Q;ae[M]=Ne*T,ae[g]=O*w,ae[v]=W,h.push(ae.x,ae.y,ae.z),ae[M]=0,ae[g]=0,ae[v]=I>0?1:-1,m.push(ae.x,ae.y,ae.z),x.push(ne/D),x.push(1-le/G),ue+=1}}for(let le=0;le<G;le++)for(let O=0;O<D;O++){const ne=_+O+ce*le,Ne=_+O+ce*(le+1),J=_+(O+1)+ce*(le+1),de=_+(O+1)+ce*le;d.push(ne,Ne,de),d.push(Ne,J,de),H+=6}f.addGroup(S,H,L),S+=H,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const a=n[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function qn(n){const e={};for(let t=0;t<n.length;t++){const r=ko(n[t]);for(const a in r)e[a]=r[a]}return e}function C6(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ay(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const P6={clone:ko,merge:qn};var L6=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I6=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L6,this.fragmentShader=I6,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=C6(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class by extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new X,H2=new Et,G2=new Et;class Ui extends by{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=O0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return O0*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,H2,G2),t.subVectors(G2,H2)}setViewOffset(e,t,r,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qh*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,fo=1;class D6 extends Un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ui(uo,fo,e,t);a.layers=this.layers,this.add(a);const o=new Ui(uo,fo,e,t);o.layers=this.layers,this.add(o);const c=new Ui(uo,fo,e,t);c.layers=this.layers,this.add(c);const f=new Ui(uo,fo,e,t);f.layers=this.layers,this.add(f);const d=new Ui(uo,fo,e,t);d.layers=this.layers,this.add(d);const h=new Ui(uo,fo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,o,c,f,d]=t;for(const h of t)this.remove(h);if(e===Fr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Lf)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,f,d,h,m]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,o),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,d),e.setRenderTarget(r,4,a),e.render(t,h),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,a),e.render(t,m),e.setRenderTarget(x,_,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ry extends ci{constructor(e,t,r,a,o,c,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:No,super(e,t,r,a,o,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N6 extends Ta{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ry(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new fn(5,5,5),o=new Ds({name:"CubemapFromEquirect",uniforms:ko(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Rs});o.uniforms.tEquirect.value=t;const c=new ke(a,o),f=t.minFilter;return t.minFilter===ha&&(t.minFilter=Yi),new D6(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,a){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(o)}}const vp=new X,U6=new X,F6=new gt;class ra{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=vp.subVectors(r,t).cross(U6.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(vp),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||F6.getNormalMatrix(e),a=this.coplanarPoint(vp).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Jf,Hu=new X;class Cy{constructor(e=new ra,t=new ra,r=new ra,a=new ra,o=new ra,c=new ra){this.planes=[e,t,r,a,o,c]}set(e,t,r,a,o,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(o),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Fr){const r=this.planes,a=e.elements,o=a[0],c=a[1],f=a[2],d=a[3],h=a[4],m=a[5],x=a[6],_=a[7],S=a[8],E=a[9],M=a[10],g=a[11],v=a[12],T=a[13],w=a[14],b=a[15];if(r[0].setComponents(d-o,_-h,g-S,b-v).normalize(),r[1].setComponents(d+o,_+h,g+S,b+v).normalize(),r[2].setComponents(d+c,_+m,g+E,b+T).normalize(),r[3].setComponents(d-c,_-m,g-E,b-T).normalize(),r[4].setComponents(d-f,_-x,g-M,b-w).normalize(),t===Fr)r[5].setComponents(d+f,_+x,g+M,b+w).normalize();else if(t===Lf)r[5].setComponents(f,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Hu.x=a.normal.x>0?e.max.x:e.min.x,Hu.y=a.normal.y>0?e.max.y:e.min.y,Hu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Py(){let n=null,e=!1,t=null,r=null;function a(o,c){t(o,c),r=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function O6(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,x=h.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const m=d.array,x=d._updateRange,_=d.updateRanges;if(n.bindBuffer(h,f),x.count===-1&&_.length===0&&n.bufferSubData(h,0,m),_.length!==0){for(let S=0,E=_.length;S<E;S++){const M=_[S];n.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}x.count!==-1&&(n.bufferSubData(h,x.offset*m.BYTES_PER_ELEMENT,m,x.offset,x.count),x.count=-1),d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:a,remove:o,update:c}}class hc extends $n{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const o=e/2,c=t/2,f=Math.floor(r),d=Math.floor(a),h=f+1,m=d+1,x=e/f,_=t/d,S=[],E=[],M=[],g=[];for(let v=0;v<m;v++){const T=v*_-c;for(let w=0;w<h;w++){const b=w*x-o;E.push(b,-T,0),M.push(0,0,1),g.push(w/f),g.push(1-v/d)}}for(let v=0;v<d;v++)for(let T=0;T<f;T++){const w=T+h*v,b=T+h*(v+1),U=T+1+h*(v+1),I=T+1+h*v;S.push(w,b,I),S.push(b,U,I)}this.setIndex(S),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(M,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var k6=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z6=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B6=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V6=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H6=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G6=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W6=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j6=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X6=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q6=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y6=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$6=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z6=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K6=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q6=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J6=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n8=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i8=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a8=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o8=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l8=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c8=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u8=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f8=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d8=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h8=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p8="gl_FragColor = linearToOutputTexel( gl_FragColor );",m8=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g8=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v8=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_8=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x8=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y8=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S8=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M8=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E8=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w8=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T8=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A8=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b8=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R8=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C8=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P8=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L8=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I8=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D8=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N8=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U8=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F8=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O8=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k8=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z8=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B8=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V8=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H8=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G8=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W8=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j8=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X8=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q8=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y8=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$8=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z8=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K8=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q8=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J8=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ET=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e7=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t7=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n7=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s7=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a7=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o7=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l7=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c7=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u7=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f7=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d7=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h7=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p7=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m7=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g7=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:k6,alphahash_pars_fragment:z6,alphamap_fragment:B6,alphamap_pars_fragment:V6,alphatest_fragment:H6,alphatest_pars_fragment:G6,aomap_fragment:W6,aomap_pars_fragment:j6,batching_pars_vertex:X6,batching_vertex:q6,begin_vertex:Y6,beginnormal_vertex:$6,bsdfs:Z6,iridescence_fragment:K6,bumpmap_pars_fragment:Q6,clipping_planes_fragment:J6,clipping_planes_pars_fragment:e8,clipping_planes_pars_vertex:t8,clipping_planes_vertex:n8,color_fragment:i8,color_pars_fragment:r8,color_pars_vertex:s8,color_vertex:a8,common:o8,cube_uv_reflection_fragment:l8,defaultnormal_vertex:c8,displacementmap_pars_vertex:u8,displacementmap_vertex:f8,emissivemap_fragment:d8,emissivemap_pars_fragment:h8,colorspace_fragment:p8,colorspace_pars_fragment:m8,envmap_fragment:g8,envmap_common_pars_fragment:v8,envmap_pars_fragment:_8,envmap_pars_vertex:x8,envmap_physical_pars_fragment:P8,envmap_vertex:y8,fog_vertex:S8,fog_pars_vertex:M8,fog_fragment:E8,fog_pars_fragment:w8,gradientmap_pars_fragment:T8,lightmap_pars_fragment:A8,lights_lambert_fragment:b8,lights_lambert_pars_fragment:R8,lights_pars_begin:C8,lights_toon_fragment:L8,lights_toon_pars_fragment:I8,lights_phong_fragment:D8,lights_phong_pars_fragment:N8,lights_physical_fragment:U8,lights_physical_pars_fragment:F8,lights_fragment_begin:O8,lights_fragment_maps:k8,lights_fragment_end:z8,logdepthbuf_fragment:B8,logdepthbuf_pars_fragment:V8,logdepthbuf_pars_vertex:H8,logdepthbuf_vertex:G8,map_fragment:W8,map_pars_fragment:j8,map_particle_fragment:X8,map_particle_pars_fragment:q8,metalnessmap_fragment:Y8,metalnessmap_pars_fragment:$8,morphinstance_vertex:Z8,morphcolor_vertex:K8,morphnormal_vertex:Q8,morphtarget_pars_vertex:J8,morphtarget_vertex:eT,normal_fragment_begin:tT,normal_fragment_maps:nT,normal_pars_fragment:iT,normal_pars_vertex:rT,normal_vertex:sT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:oT,clearcoat_normal_fragment_maps:lT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:uT,opaque_fragment:fT,packing:dT,premultiplied_alpha_fragment:hT,project_vertex:pT,dithering_fragment:mT,dithering_pars_fragment:gT,roughnessmap_fragment:vT,roughnessmap_pars_fragment:_T,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:yT,shadowmap_vertex:ST,shadowmask_pars_fragment:MT,skinbase_vertex:ET,skinning_pars_vertex:wT,skinning_vertex:TT,skinnormal_vertex:AT,specularmap_fragment:bT,specularmap_pars_fragment:RT,tonemapping_fragment:CT,tonemapping_pars_fragment:PT,transmission_fragment:LT,transmission_pars_fragment:IT,uv_pars_fragment:DT,uv_pars_vertex:NT,uv_vertex:UT,worldpos_vertex:FT,background_vert:OT,background_frag:kT,backgroundCube_vert:zT,backgroundCube_frag:BT,cube_vert:VT,cube_frag:HT,depth_vert:GT,depth_frag:WT,distanceRGBA_vert:jT,distanceRGBA_frag:XT,equirect_vert:qT,equirect_frag:YT,linedashed_vert:$T,linedashed_frag:ZT,meshbasic_vert:KT,meshbasic_frag:QT,meshlambert_vert:JT,meshlambert_frag:e7,meshmatcap_vert:t7,meshmatcap_frag:n7,meshnormal_vert:i7,meshnormal_frag:r7,meshphong_vert:s7,meshphong_frag:a7,meshphysical_vert:o7,meshphysical_frag:l7,meshtoon_vert:c7,meshtoon_frag:u7,points_vert:f7,points_frag:d7,shadow_vert:h7,shadow_frag:p7,sprite_vert:m7,sprite_frag:g7},De={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},lr={basic:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:qn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:qn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:qn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:qn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:qn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:qn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:qn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:qn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:qn([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:qn([De.lights,De.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};lr.physical={uniforms:qn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Gu={r:0,b:0,g:0},ea=new mr,v7=new on;function _7(n,e,t,r,a,o,c){const f=new Ft(0);let d=o===!0?0:1,h,m,x=null,_=0,S=null;function E(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function M(T){let w=!1;const b=E(T);b===null?v(f,d):b&&b.isColor&&(v(b,1),w=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(n.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(T,w){const b=E(w);b&&(b.isCubeTexture||b.mapping===Kf)?(m===void 0&&(m=new ke(new fn(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:ko(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ea.copy(w.backgroundRotation),ea.x*=-1,ea.y*=-1,ea.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ea.y*=-1,ea.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(v7.makeRotationFromEuler(ea)),m.material.toneMapped=It.getTransfer(b.colorSpace)!==qt,(x!==b||_!==b.version||S!==n.toneMapping)&&(m.material.needsUpdate=!0,x=b,_=b.version,S=n.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ke(new hc(2,2),new Ds({name:"BackgroundMaterial",uniforms:ko(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=It.getTransfer(b.colorSpace)!==qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||_!==b.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,x=b,_=b.version,S=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function v(T,w){T.getRGB(Gu,Ay(n)),r.buffers.color.setClear(Gu.r,Gu.g,Gu.b,w,c)}return{getClearColor:function(){return f},setClearColor:function(T,w=1){f.set(T),d=w,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,v(f,d)},render:M,addToRenderList:g}}function x7(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},a=_(null);let o=a,c=!1;function f(R,k,Q,Y,W){let ce=!1;const te=x(Y,Q,k);o!==te&&(o=te,h(o.object)),ce=S(R,Y,Q,W),ce&&E(R,Y,Q,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,b(R,k,Q,Y),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function x(R,k,Q){const Y=Q.wireframe===!0;let W=r[R.id];W===void 0&&(W={},r[R.id]=W);let ce=W[k.id];ce===void 0&&(ce={},W[k.id]=ce);let te=ce[Y];return te===void 0&&(te=_(d()),ce[Y]=te),te}function _(R){const k=[],Q=[],Y=[];for(let W=0;W<t;W++)k[W]=0,Q[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:Y,object:R,attributes:{},index:null}}function S(R,k,Q,Y){const W=o.attributes,ce=k.attributes;let te=0;const ue=Q.getAttributes();for(const H in ue)if(ue[H].location>=0){const le=W[H];let O=ce[H];if(O===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;te++}return o.attributesNum!==te||o.index!==Y}function E(R,k,Q,Y){const W={},ce=k.attributes;let te=0;const ue=Q.getAttributes();for(const H in ue)if(ue[H].location>=0){let le=ce[H];le===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),W[H]=O,te++}o.attributes=W,o.attributesNum=te,o.index=Y}function M(){const R=o.newAttributes;for(let k=0,Q=R.length;k<Q;k++)R[k]=0}function g(R){v(R,0)}function v(R,k){const Q=o.newAttributes,Y=o.enabledAttributes,W=o.attributeDivisors;Q[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),W[R]!==k&&(n.vertexAttribDivisor(R,k),W[R]=k)}function T(){const R=o.newAttributes,k=o.enabledAttributes;for(let Q=0,Y=k.length;Q<Y;Q++)k[Q]!==R[Q]&&(n.disableVertexAttribArray(Q),k[Q]=0)}function w(R,k,Q,Y,W,ce,te){te===!0?n.vertexAttribIPointer(R,k,Q,W,ce):n.vertexAttribPointer(R,k,Q,Y,W,ce)}function b(R,k,Q,Y){M();const W=Y.attributes,ce=Q.getAttributes(),te=k.defaultAttributeValues;for(const ue in ce){const H=ce[ue];if(H.location>=0){let ae=W[ue];if(ae===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const le=ae.normalized,O=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,J=ne.type,de=ne.bytesPerElement,ye=J===n.INT||J===n.UNSIGNED_INT||ae.gpuType===um;if(ae.isInterleavedBufferAttribute){const Se=ae.data,Ce=Se.stride,Ie=ae.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)v(H.location+Ke,Se.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)g(H.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Ke=0;Ke<H.locationSize;Ke++)w(H.location+Ke,O/H.locationSize,J,le,Ce*de,(Ie+O/H.locationSize*Ke)*de,ye)}else{if(ae.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)v(H.location+Se,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<H.locationSize;Se++)g(H.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Se=0;Se<H.locationSize;Se++)w(H.location+Se,O/H.locationSize,J,le,O*de,O/H.locationSize*Se*de,ye)}}else if(te!==void 0){const le=te[ue];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(H.location,le);break;case 3:n.vertexAttrib3fv(H.location,le);break;case 4:n.vertexAttrib4fv(H.location,le);break;default:n.vertexAttrib1fv(H.location,le)}}}}T()}function U(){G();for(const R in r){const k=r[R];for(const Q in k){const Y=k[Q];for(const W in Y)m(Y[W].object),delete Y[W];delete k[Q]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const Q in k){const Y=k[Q];for(const W in Y)m(Y[W].object),delete Y[W];delete k[Q]}delete r[R.id]}function D(R){for(const k in r){const Q=r[k];if(Q[R.id]===void 0)continue;const Y=Q[R.id];for(const W in Y)m(Y[W].object),delete Y[W];delete Q[R.id]}}function G(){L(),c=!0,o!==a&&(o=a,h(o.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:L,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function y7(n,e,t){let r;function a(h){r=h}function o(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,x){x!==0&&(n.drawArraysInstanced(r,h,m,x),t.update(m,r,x))}function f(h,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,x);let S=0;for(let E=0;E<x;E++)S+=m[E];t.update(S,r,1)}function d(h,m,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)c(h[E],m[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,m,0,_,0,x);let E=0;for(let M=0;M<x;M++)E+=m[M];for(let M=0;M<_.length;M++)t.update(E,r,_[M])}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function S7(n,e,t,r){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==Zi&&r.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const D=I===lc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Br&&r.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ur&&!D)}function d(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=S>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,maxTextures:_,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:b,maxSamples:U}}function M7(n){const e=this;let t=null,r=0,a=!1,o=!1;const c=new ra,f=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||a;return a=_,r=x.length,S},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,_){t=m(x,_,0)},this.setState=function(x,_,S){const E=x.clippingPlanes,M=x.clipIntersection,g=x.clipShadows,v=n.get(x);if(!a||E===null||E.length===0||o&&!g)o?m(null):h();else{const T=o?0:r,w=T*4;let b=v.clippingState||null;d.value=b,b=m(E,_,w,S);for(let U=0;U!==w;++U)b[U]=t[U];v.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(x,_,S,E){const M=x!==null?x.length:0;let g=null;if(M!==0){if(g=d.value,E!==!0||g===null){const v=S+M*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(g===null||g.length<v)&&(g=new Float32Array(v));for(let w=0,b=S;w!==M;++w,b+=4)c.copy(x[w]).applyMatrix4(T,f),c.normal.toArray(g,b),g[b+3]=c.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function E7(n){let e=new WeakMap;function t(c,f){return f===o0?c.mapping=No:f===l0&&(c.mapping=Uo),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===o0||f===l0)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new N6(d.height);return h.fromEquirectangularTexture(n,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class w7 extends by{constructor(e=-1,t=1,r=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-e,c=r+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,W2=[.125,.215,.35,.446,.526,.582],ca=20,_p=new w7,j2=new Ft;let xp=null,yp=0,Sp=0,Mp=!1;const sa=(1+Math.sqrt(5))/2,ho=1/sa,X2=[new X(-sa,ho,0),new X(sa,ho,0),new X(-ho,0,sa),new X(ho,0,sa),new X(0,sa,-ho),new X(0,sa,ho),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class q2{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){xp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xp,yp,Sp),this._renderer.xr.enabled=Mp,e.scissorTest=!1,Wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:lc,format:Zi,colorSpace:Ns,depthBuffer:!1},a=Y2(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y2(e,t,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T7(o)),this._blurMaterial=A7(o,e,t)}return a}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,_p)}_sceneToCubeUV(e,t,r,a){const f=new Ui(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,_=m.toneMapping;m.getClearColor(j2),m.toneMapping=Cs,m.autoClear=!1;const S=new dc({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),E=new ke(new fn,S);let M=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,M=!0):(S.color.copy(j2),M=!0);for(let v=0;v<6;v++){const T=v%3;T===0?(f.up.set(0,d[v],0),f.lookAt(h[v],0,0)):T===1?(f.up.set(0,0,d[v]),f.lookAt(0,h[v],0)):(f.up.set(0,d[v],0),f.lookAt(0,0,h[v]));const w=this._cubeSize;Wu(a,T*w,v>2?w:0,w,w),m.setRenderTarget(a),M&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=_,m.autoClear=x,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===No||e.mapping===Uo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$2());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new ke(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=e;const d=this._cubeSize;Wu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,_p)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=X2[(a-o-1)%X2.length];this._blur(e,o-1,o,c,f)}t.autoClear=r}_blur(e,t,r,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",o),this._halfBlur(c,e,r,r,a,"longitudinal",o)}_halfBlur(e,t,r,a,o,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new ke(this._lodPlanes[a],h),_=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*ca-1),M=o/E,g=isFinite(o)?1+Math.floor(m*M):ca;g>ca&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ca}`);const v=[];let T=0;for(let D=0;D<ca;++D){const G=D/M,L=Math.exp(-G*G/2);v.push(L),D===0?T+=L:D<g&&(T+=2*L)}for(let D=0;D<v.length;D++)v[D]=v[D]/T;_.envMap.value=e.texture,_.samples.value=g,_.weights.value=v,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=E,_.mipInt.value=w-r;const b=this._sizeLods[a],U=3*b*(a>w-_o?a-w+_o:0),I=4*(this._cubeSize-b);Wu(t,U,I,3*b,2*b),d.setRenderTarget(t),d.render(x,_p)}}function T7(n){const e=[],t=[],r=[];let a=n;const o=n-_o+1+W2.length;for(let c=0;c<o;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>n-_o?d=W2[c-n+_o-1]:c===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,x=1+h,_=[m,m,x,m,x,x,m,m,x,x,m,x],S=6,E=6,M=3,g=2,v=1,T=new Float32Array(M*E*S),w=new Float32Array(g*E*S),b=new Float32Array(v*E*S);for(let I=0;I<S;I++){const D=I%3*2/3-1,G=I>2?0:-1,L=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];T.set(L,M*E*I),w.set(_,g*E*I);const R=[I,I,I,I,I,I];b.set(R,v*E*I)}const U=new $n;U.setAttribute("position",new hr(T,M)),U.setAttribute("uv",new hr(w,g)),U.setAttribute("faceIndex",new hr(b,v)),e.push(U),a>_o&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Y2(n,e,t){const r=new Ta(n,e,t);return r.texture.mapping=Kf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wu(n,e,t,r,a){n.viewport.set(e,t,r,a),n.scissor.set(e,t,r,a)}function A7(n,e,t){const r=new Float32Array(ca),a=new X(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:ca,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function $2(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Z2(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function xm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b7(n){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===o0||d===l0,m=d===No||d===Uo;if(h||m){let x=e.get(f);const _=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new q2(n)),x=h?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new q2(n)),x=h?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",o),x.texture):null}}}return f}function a(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function o(f){const d=f.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function R7(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ql("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function C7(n,e,t,r){const a={},o=new WeakMap;function c(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const M=_.morphAttributes[E];for(let g=0,v=M.length;g<v;g++)e.remove(M[g])}_.removeEventListener("dispose",c),delete a[_.id];const S=o.get(_);S&&(e.remove(S),o.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(x,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(x){const _=x.attributes;for(const E in _)e.update(_[E],n.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const M=S[E];for(let g=0,v=M.length;g<v;g++)e.update(M[g],n.ARRAY_BUFFER)}}function h(x){const _=[],S=x.index,E=x.attributes.position;let M=0;if(S!==null){const T=S.array;M=S.version;for(let w=0,b=T.length;w<b;w+=3){const U=T[w+0],I=T[w+1],D=T[w+2];_.push(U,I,I,D,D,U)}}else if(E!==void 0){const T=E.array;M=E.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const U=w+0,I=w+1,D=w+2;_.push(U,I,I,D,D,U)}}else return;const g=new(yy(_)?Ty:wy)(_,1);g.version=M;const v=o.get(x);v&&e.remove(v),o.set(x,g)}function m(x){const _=o.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&h(x)}else h(x);return o.get(x)}return{get:f,update:d,getWireframeAttribute:m}}function P7(n,e,t){let r;function a(_){r=_}let o,c;function f(_){o=_.type,c=_.bytesPerElement}function d(_,S){n.drawElements(r,S,o,_*c),t.update(S,r,1)}function h(_,S,E){E!==0&&(n.drawElementsInstanced(r,S,o,_*c,E),t.update(S,r,E))}function m(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,o,_,0,E);let g=0;for(let v=0;v<E;v++)g+=S[v];t.update(g,r,1)}function x(_,S,E,M){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<_.length;v++)h(_[v]/c,S[v],M[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,o,_,0,M,0,E);let v=0;for(let T=0;T<E;T++)v+=S[T];for(let T=0;T<M.length;T++)t.update(v,r,M[T])}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function L7(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(o/3);break;case n.LINES:t.lines+=f*(o/2);break;case n.LINE_STRIP:t.lines+=f*(o-1);break;case n.LINE_LOOP:t.lines+=f*o;break;case n.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function I7(n,e,t){const r=new WeakMap,a=new Ln;function o(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=m!==void 0?m.length:0;let _=r.get(f);if(_===void 0||_.count!==x){let L=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],v=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let w=0;S===!0&&(w=1),E===!0&&(w=2),M===!0&&(w=3);let b=f.attributes.position.count*w,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*U*4*x),D=new My(I,b,U,x);D.type=Ur,D.needsUpdate=!0;const G=w*4;for(let R=0;R<x;R++){const k=g[R],Q=v[R],Y=T[R],W=b*U*4*R;for(let ce=0;ce<k.count;ce++){const te=ce*G;S===!0&&(a.fromBufferAttribute(k,ce),I[W+te+0]=a.x,I[W+te+1]=a.y,I[W+te+2]=a.z,I[W+te+3]=0),E===!0&&(a.fromBufferAttribute(Q,ce),I[W+te+4]=a.x,I[W+te+5]=a.y,I[W+te+6]=a.z,I[W+te+7]=0),M===!0&&(a.fromBufferAttribute(Y,ce),I[W+te+8]=a.x,I[W+te+9]=a.y,I[W+te+10]=a.z,I[W+te+11]=Y.itemSize===4?a.w:1)}}_={count:x,texture:D,size:new Et(b,U)},r.set(f,_),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<h.length;M++)S+=h[M];const E=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:o}}function D7(n,e,t,r){let a=new WeakMap;function o(d){const h=r.render.frame,m=d.geometry,x=e.get(d,m);if(a.get(x)!==h&&(e.update(x),a.set(x,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==h&&(_.update(),a.set(_,h))}return x}function c(){a=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}class Ly extends ci{constructor(e,t,r,a,o,c,f,d,h,m=Eo){if(m!==Eo&&m!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Eo&&(r=wa),r===void 0&&m===Oo&&(r=Fo),super(null,a,o,c,f,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:Fi,this.minFilter=d!==void 0?d:Fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Iy=new ci,K2=new Ly(1,1),Dy=new My,Ny=new _6,Uy=new Ry,Q2=[],J2=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Ho(n,e,t){const r=n[0];if(r<=0||r>0)return n;const a=e*t;let o=Q2[a];if(o===void 0&&(o=new Float32Array(a),Q2[a]=o),e!==0){r.toArray(o,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(o,f)}return o}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ed(n,e){let t=J2[e];t===void 0&&(t=new Int32Array(e),J2[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function N7(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),Sn(t,e)}}function F7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),Sn(t,e)}}function O7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),Sn(t,e)}}function k7(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;n_.set(r),n.uniformMatrix2fv(this.addr,!1,n_),Sn(t,r)}}function z7(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;t_.set(r),n.uniformMatrix3fv(this.addr,!1,t_),Sn(t,r)}}function B7(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;e_.set(r),n.uniformMatrix4fv(this.addr,!1,e_),Sn(t,r)}}function V7(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),Sn(t,e)}}function G7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),Sn(t,e)}}function W7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),Sn(t,e)}}function j7(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function X7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),Sn(t,e)}}function q7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),Sn(t,e)}}function Y7(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),Sn(t,e)}}function $7(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?(K2.compareFunction=xy,o=K2):o=Iy,t.setTexture2D(e||o,a)}function Z7(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Ny,a)}function K7(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Uy,a)}function Q7(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Dy,a)}function J7(n){switch(n){case 5126:return N7;case 35664:return U7;case 35665:return F7;case 35666:return O7;case 35674:return k7;case 35675:return z7;case 35676:return B7;case 5124:case 35670:return V7;case 35667:case 35671:return H7;case 35668:case 35672:return G7;case 35669:case 35673:return W7;case 5125:return j7;case 36294:return X7;case 36295:return q7;case 36296:return Y7;case 35678:case 36198:case 36298:case 36306:case 35682:return $7;case 35679:case 36299:case 36307:return Z7;case 35680:case 36300:case 36308:case 36293:return K7;case 36289:case 36303:case 36311:case 36292:return Q7}}function e9(n,e){n.uniform1fv(this.addr,e)}function t9(n,e){const t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function n9(n,e){const t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function i9(n,e){const t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function r9(n,e){const t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s9(n,e){const t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a9(n,e){const t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o9(n,e){n.uniform1iv(this.addr,e)}function l9(n,e){n.uniform2iv(this.addr,e)}function c9(n,e){n.uniform3iv(this.addr,e)}function u9(n,e){n.uniform4iv(this.addr,e)}function f9(n,e){n.uniform1uiv(this.addr,e)}function d9(n,e){n.uniform2uiv(this.addr,e)}function h9(n,e){n.uniform3uiv(this.addr,e)}function p9(n,e){n.uniform4uiv(this.addr,e)}function m9(n,e,t){const r=this.cache,a=e.length,o=ed(t,a);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Iy,o[c])}function g9(n,e,t){const r=this.cache,a=e.length,o=ed(t,a);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Ny,o[c])}function v9(n,e,t){const r=this.cache,a=e.length,o=ed(t,a);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Uy,o[c])}function _9(n,e,t){const r=this.cache,a=e.length,o=ed(t,a);yn(r,o)||(n.uniform1iv(this.addr,o),Sn(r,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Dy,o[c])}function x9(n){switch(n){case 5126:return e9;case 35664:return t9;case 35665:return n9;case 35666:return i9;case 35674:return r9;case 35675:return s9;case 35676:return a9;case 5124:case 35670:return o9;case 35667:case 35671:return l9;case 35668:case 35672:return c9;case 35669:case 35673:return u9;case 5125:return f9;case 36294:return d9;case 36295:return h9;case 36296:return p9;case 35678:case 36198:case 36298:case 36306:case 35682:return m9;case 35679:case 36299:case 36307:return g9;case 35680:case 36300:case 36308:case 36293:return v9;case 36289:case 36303:case 36311:case 36292:return _9}}class y9{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=J7(t.type)}}class S9{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x9(t.type)}}class M9{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const f=a[o];f.setValue(e,t[f.id],r)}}}const Ep=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function E9(n,e,t){const r=n.name,a=r.length;for(Ep.lastIndex=0;;){const o=Ep.exec(r),c=Ep.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){i_(t,h===void 0?new y9(f,n,e):new S9(f,n,e));break}else{let x=t.map[f];x===void 0&&(x=new M9(f),i_(t,x)),t=x}}}class df{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);E9(o,c,this)}}setValue(e,t,r,a){const o=this.map[t];o!==void 0&&o.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let o=0,c=t.length;o!==c;++o){const f=t[o],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function r_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const w9=37297;let T9=0;function A9(n,e){const t=n.split(`
`),r=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}function b9(n){const e=It.getPrimaries(It.workingColorSpace),t=It.getPrimaries(n);let r;switch(e===t?r="":e===Pf&&t===Cf?r="LinearDisplayP3ToLinearSRGB":e===Cf&&t===Pf&&(r="LinearSRGBToLinearDisplayP3"),n){case Ns:case Qf:return[r,"LinearTransferOETF"];case sr:case gm:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function s_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(r&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+A9(n.getShaderSource(e),c)}else return a}function R9(n,e){const t=b9(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C9(n,e){let t;switch(e){case jw:t="Linear";break;case Xw:t="Reinhard";break;case qw:t="Cineon";break;case Yw:t="ACESFilmic";break;case Zw:t="AgX";break;case Kw:t="Neutral";break;case $w:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ju=new X;function P9(){It.getLuminanceCoefficients(ju);const n=ju.x.toFixed(4),e=ju.y.toFixed(4),t=ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L9(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function I9(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function D9(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=n.getActiveAttrib(e,a),c=o.name;let f=1;o.type===n.FLOAT_MAT2&&(f=2),o.type===n.FLOAT_MAT3&&(f=3),o.type===n.FLOAT_MAT4&&(f=4),t[c]={type:o.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function zl(n){return n!==""}function a_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N9=/^[ \t]*#include +<([\w\d./]+)>/gm;function k0(n){return n.replace(N9,F9)}const U9=new Map;function F9(n,e){let t=pt[e];if(t===void 0){const r=U9.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return k0(t)}const O9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(n){return n.replace(O9,k9)}function k9(n,e,t,r){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function c_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z9(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ir&&(e="SHADOWMAP_TYPE_VSM"),e}function B9(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case No:case Uo:e="ENVMAP_TYPE_CUBE";break;case Kf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V9(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Uo&&(e="ENVMAP_MODE_REFRACTION"),e}function H9(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oy:e="ENVMAP_BLENDING_MULTIPLY";break;case Gw:e="ENVMAP_BLENDING_MIX";break;case Ww:e="ENVMAP_BLENDING_ADD";break}return e}function G9(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function W9(n,e,t,r){const a=n.getContext(),o=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=z9(t),h=B9(t),m=V9(t),x=H9(t),_=G9(t),S=L9(t),E=I9(o),M=a.createProgram();let g,v,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(zl).join(`
`),v.length>0&&(v+=`
`)):(g=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),v=[c_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?pt.tonemapping_pars_fragment:"",t.toneMapping!==Cs?C9("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,R9("linearToOutputTexel",t.outputColorSpace),P9(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),c=k0(c),c=a_(c,t),c=o_(c,t),f=k0(f),f=a_(f,t),f=o_(f,t),c=l_(c),f=l_(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===w2?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=T+g+c,b=T+v+f,U=r_(a,a.VERTEX_SHADER,w),I=r_(a,a.FRAGMENT_SHADER,b);a.attachShader(M,U),a.attachShader(M,I),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function D(k){if(n.debug.checkShaderErrors){const Q=a.getProgramInfoLog(M).trim(),Y=a.getShaderInfoLog(U).trim(),W=a.getShaderInfoLog(I).trim();let ce=!0,te=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,M,U,I);else{const ue=s_(a,U,"vertex"),H=s_(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+ue+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||W==="")&&(te=!1);te&&(k.diagnostics={runnable:ce,programLog:Q,vertexShader:{log:Y,prefix:g},fragmentShader:{log:W,prefix:v}})}a.deleteShader(U),a.deleteShader(I),G=new df(a,M),L=D9(a,M)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,w9)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T9++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=I,this}let j9=0;class X9{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new q9(e),t.set(e,r)),r}}class q9{constructor(e){this.id=j9++,this.code=e,this.usedTimes=0}}function Y9(n,e,t,r,a,o,c){const f=new _m,d=new X9,h=new Set,m=[],x=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return h.add(L),L===0?"uv":`uv${L}`}function g(L,R,k,Q,Y){const W=Q.fog,ce=Y.geometry,te=L.isMeshStandardMaterial?Q.environment:null,ue=(L.isMeshStandardMaterial?t:e).get(L.envMap||te),H=ue&&ue.mapping===Kf?ue.image.height:null,ae=E[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const le=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=le!==void 0?le.length:0;let ne=0;ce.morphAttributes.position!==void 0&&(ne=1),ce.morphAttributes.normal!==void 0&&(ne=2),ce.morphAttributes.color!==void 0&&(ne=3);let Ne,J,de,ye;if(ae){const Tt=lr[ae];Ne=Tt.vertexShader,J=Tt.fragmentShader}else Ne=L.vertexShader,J=L.fragmentShader,d.update(L),de=d.getVertexShaderID(L),ye=d.getFragmentShaderID(L);const Se=n.getRenderTarget(),Ce=Y.isInstancedMesh===!0,Ie=Y.isBatchedMesh===!0,Ke=!!L.map,bt=!!L.matcap,z=!!ue,Ht=!!L.aoMap,wt=!!L.lightMap,Pt=!!L.bumpMap,$e=!!L.normalMap,Kt=!!L.displacementMap,st=!!L.emissiveMap,lt=!!L.metalnessMap,F=!!L.roughnessMap,C=L.anisotropy>0,oe=L.clearcoat>0,me=L.dispersion>0,_e=L.iridescence>0,ge=L.sheen>0,Qe=L.transmission>0,Le=C&&!!L.anisotropyMap,ze=oe&&!!L.clearcoatMap,ft=oe&&!!L.clearcoatNormalMap,Ee=oe&&!!L.clearcoatRoughnessMap,Ue=_e&&!!L.iridescenceMap,yt=_e&&!!L.iridescenceThicknessMap,rt=ge&&!!L.sheenColorMap,Be=ge&&!!L.sheenRoughnessMap,ct=!!L.specularMap,dt=!!L.specularColorMap,kt=!!L.specularIntensityMap,q=Qe&&!!L.transmissionMap,Te=Qe&&!!L.thicknessMap,he=!!L.gradientMap,pe=!!L.alphaMap,be=L.alphaTest>0,tt=!!L.alphaHash,St=!!L.extensions;let nn=Cs;L.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(nn=n.toneMapping);const hn={shaderID:ae,shaderType:L.type,shaderName:L.name,vertexShader:Ne,fragmentShader:J,defines:L.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Ie,batchingColor:Ie&&Y._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Y.instanceColor!==null,instancingMorph:Ce&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ns,alphaToCoverage:!!L.alphaToCoverage,map:Ke,matcap:bt,envMap:z,envMapMode:z&&ue.mapping,envMapCubeUVHeight:H,aoMap:Ht,lightMap:wt,bumpMap:Pt,normalMap:$e,displacementMap:_&&Kt,emissiveMap:st,normalMapObjectSpace:$e&&L.normalMapType===n6,normalMapTangentSpace:$e&&L.normalMapType===t6,metalnessMap:lt,roughnessMap:F,anisotropy:C,anisotropyMap:Le,clearcoat:oe,clearcoatMap:ze,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:_e,iridescenceMap:Ue,iridescenceThicknessMap:yt,sheen:ge,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:dt,specularIntensityMap:kt,transmission:Qe,transmissionMap:q,thicknessMap:Te,gradientMap:he,opaque:L.transparent===!1&&L.blending===Mo&&L.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:tt,combine:L.combine,mapUv:Ke&&M(L.map.channel),aoMapUv:Ht&&M(L.aoMap.channel),lightMapUv:wt&&M(L.lightMap.channel),bumpMapUv:Pt&&M(L.bumpMap.channel),normalMapUv:$e&&M(L.normalMap.channel),displacementMapUv:Kt&&M(L.displacementMap.channel),emissiveMapUv:st&&M(L.emissiveMap.channel),metalnessMapUv:lt&&M(L.metalnessMap.channel),roughnessMapUv:F&&M(L.roughnessMap.channel),anisotropyMapUv:Le&&M(L.anisotropyMap.channel),clearcoatMapUv:ze&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(L.sheenRoughnessMap.channel),specularMapUv:ct&&M(L.specularMap.channel),specularColorMapUv:dt&&M(L.specularColorMap.channel),specularIntensityMapUv:kt&&M(L.specularIntensityMap.channel),transmissionMapUv:q&&M(L.transmissionMap.channel),thicknessMapUv:Te&&M(L.thicknessMap.channel),alphaMapUv:pe&&M(L.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&($e||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ce.attributes.uv&&(Ke||pe),fog:!!W,useFog:L.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Y.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:nn,decodeVideoTexture:Ke&&L.map.isVideoTexture===!0&&It.getTransfer(L.map.colorSpace)===qt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===cr,flipSided:L.side===li,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:St&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&L.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return hn.vertexUv1s=h.has(1),hn.vertexUv2s=h.has(2),hn.vertexUv3s=h.has(3),h.clear(),hn}function v(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)R.push(k),R.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(T(R,L),w(R,L),R.push(n.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function T(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function w(L,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.skinning&&f.enable(4),R.morphTargets&&f.enable(5),R.morphNormals&&f.enable(6),R.morphColors&&f.enable(7),R.premultipliedAlpha&&f.enable(8),R.shadowMapEnabled&&f.enable(9),R.doubleSided&&f.enable(10),R.flipSided&&f.enable(11),R.useDepthPacking&&f.enable(12),R.dithering&&f.enable(13),R.transmission&&f.enable(14),R.sheen&&f.enable(15),R.opaque&&f.enable(16),R.pointsUvs&&f.enable(17),R.decodeVideoTexture&&f.enable(18),R.alphaToCoverage&&f.enable(19),L.push(f.mask)}function b(L){const R=E[L.type];let k;if(R){const Q=lr[R];k=P6.clone(Q.uniforms)}else k=L.uniforms;return k}function U(L,R){let k;for(let Q=0,Y=m.length;Q<Y;Q++){const W=m[Q];if(W.cacheKey===R){k=W,++k.usedTimes;break}}return k===void 0&&(k=new W9(n,R,L,o),m.push(k)),k}function I(L){if(--L.usedTimes===0){const R=m.indexOf(L);m[R]=m[m.length-1],m.pop(),L.destroy()}}function D(L){d.remove(L)}function G(){d.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:b,acquireProgram:U,releaseProgram:I,releaseShaderCache:D,programs:m,dispose:G}}function $9(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function a(c,f,d){n.get(c)[f]=d}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:o}}function Z9(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function u_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f_(){const n=[];let e=0;const t=[],r=[],a=[];function o(){e=0,t.length=0,r.length=0,a.length=0}function c(x,_,S,E,M,g){let v=n[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:E,renderOrder:x.renderOrder,z:M,group:g},n[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=M,v.group=g),e++,v}function f(x,_,S,E,M,g){const v=c(x,_,S,E,M,g);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):t.push(v)}function d(x,_,S,E,M,g){const v=c(x,_,S,E,M,g);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function h(x,_){t.length>1&&t.sort(x||Z9),r.length>1&&r.sort(_||u_),a.length>1&&a.sort(_||u_)}function m(){for(let x=e,_=n.length;x<_;x++){const S=n[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:o,push:f,unshift:d,finish:m,sort:h}}function K9(){let n=new WeakMap;function e(r,a){const o=n.get(r);let c;return o===void 0?(c=new f_,n.set(r,[c])):a>=o.length?(c=new f_,o.push(c)):c=o[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q9(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ft};break;case"SpotLight":t={position:new X,direction:new X,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function J9(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eA=0;function tA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nA(n){const e=new Q9,t=J9(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new X);const a=new X,o=new on,c=new on;function f(h){let m=0,x=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,M=0,g=0,v=0,T=0,w=0,b=0,U=0,I=0,D=0;h.sort(tA);for(let L=0,R=h.length;L<R;L++){const k=h[L],Q=k.color,Y=k.intensity,W=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=Q.r*Y,x+=Q.g*Y,_+=Q.b*Y;else if(k.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(k.sh.coefficients[te],Y);D++}else if(k.isDirectionalLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=k.shadow.matrix,T++}r.directional[S]=te,S++}else if(k.isSpotLight){const te=e.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(Q).multiplyScalar(Y),te.distance=W,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,r.spot[M]=te;const ue=k.shadow;if(k.map&&(r.spotLightMap[U]=k.map,U++,ue.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[M]=ue.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.spotShadow[M]=H,r.spotShadowMap[M]=ce,b++}M++}else if(k.isRectAreaLight){const te=e.get(k);te.color.copy(Q).multiplyScalar(Y),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),r.rectArea[g]=te,g++}else if(k.isPointLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),te.distance=k.distance,te.decay=k.decay,k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=k.shadow.matrix,w++}r.point[E]=te,E++}else if(k.isHemisphereLight){const te=e.get(k);te.skyColor.copy(k.color).multiplyScalar(Y),te.groundColor.copy(k.groundColor).multiplyScalar(Y),r.hemi[v]=te,v++}}g>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=_;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==M||G.rectAreaLength!==g||G.hemiLength!==v||G.numDirectionalShadows!==T||G.numPointShadows!==w||G.numSpotShadows!==b||G.numSpotMaps!==U||G.numLightProbes!==D)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=g,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+U-I,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=D,G.directionalLength=S,G.pointLength=E,G.spotLength=M,G.rectAreaLength=g,G.hemiLength=v,G.numDirectionalShadows=T,G.numPointShadows=w,G.numSpotShadows=b,G.numSpotMaps=U,G.numLightProbes=D,r.version=eA++)}function d(h,m){let x=0,_=0,S=0,E=0,M=0;const g=m.matrixWorldInverse;for(let v=0,T=h.length;v<T;v++){const w=h[v];if(w.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(g),x++}else if(w.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(g),S++}else if(w.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),c.identity(),o.copy(w.matrixWorld),o.premultiply(g),c.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const b=r.point[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),_++}else if(w.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(g),M++}}}return{setup:f,setupView:d,state:r}}function d_(n){const e=new nA(n),t=[],r=[];function a(m){h.camera=m,t.length=0,r.length=0}function o(m){t.push(m)}function c(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:d,pushLight:o,pushShadow:c}}function iA(n){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let f;return c===void 0?(f=new d_(n),e.set(a,[f])):o>=c.length?(f=new d_(n),c.push(f)):f=c[o],f}function r(){e=new WeakMap}return{get:t,dispose:r}}class rA extends fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lA(n,e,t){let r=new Cy;const a=new Et,o=new Et,c=new Ln,f=new rA({depthPacking:e6}),d=new sA,h={},m=t.maxTextureSize,x={[zr]:li,[li]:zr,[cr]:cr},_=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:aA,fragmentShader:oA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new $n;E.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ke(E,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ay;let v=this.type;this.render=function(I,D,G){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const L=n.getRenderTarget(),R=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Rs),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=v!==Ir&&this.type===Ir,W=v===Ir&&this.type!==Ir;for(let ce=0,te=I.length;ce<te;ce++){const ue=I[ce],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ae=H.getFrameExtents();if(a.multiply(ae),o.copy(H.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/ae.x),a.x=o.x*ae.x,H.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/ae.y),a.y=o.y*ae.y,H.mapSize.y=o.y)),H.map===null||Y===!0||W===!0){const O=this.type!==Ir?{minFilter:Fi,magFilter:Fi}:{};H.map!==null&&H.map.dispose(),H.map=new Ta(a.x,a.y,O),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const le=H.getViewportCount();for(let O=0;O<le;O++){const ne=H.getViewport(O);c.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),Q.viewport(c),H.updateMatrices(ue,O),r=H.getFrustum(),b(D,G,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===Ir&&T(H,G),H.needsUpdate=!1}v=this.type,g.needsUpdate=!1,n.setRenderTarget(L,R,k)};function T(I,D){const G=e.update(M);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ta(a.x,a.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,G,_,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,G,S,M,null)}function w(I,D,G,L){let R=null;const k=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)R=k;else if(R=G.isPointLight===!0?d:f,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Q=R.uuid,Y=D.uuid;let W=h[Q];W===void 0&&(W={},h[Q]=W);let ce=W[Y];ce===void 0&&(ce=R.clone(),W[Y]=ce,D.addEventListener("dispose",U)),R=ce}if(R.visible=D.visible,R.wireframe=D.wireframe,L===Ir?R.side=D.shadowSide!==null?D.shadowSide:D.side:R.side=D.shadowSide!==null?D.shadowSide:x[D.side],R.alphaMap=D.alphaMap,R.alphaTest=D.alphaTest,R.map=D.map,R.clipShadows=D.clipShadows,R.clippingPlanes=D.clippingPlanes,R.clipIntersection=D.clipIntersection,R.displacementMap=D.displacementMap,R.displacementScale=D.displacementScale,R.displacementBias=D.displacementBias,R.wireframeLinewidth=D.wireframeLinewidth,R.linewidth=D.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=n.properties.get(R);Q.light=G}return R}function b(I,D,G,L,R){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Ir)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),W=I.material;if(Array.isArray(W)){const ce=Y.groups;for(let te=0,ue=ce.length;te<ue;te++){const H=ce[te],ae=W[H.materialIndex];if(ae&&ae.visible){const le=w(I,ae,L,R);I.onBeforeShadow(n,I,D,G,Y,le,H),n.renderBufferDirect(G,null,Y,le,I,H),I.onAfterShadow(n,I,D,G,Y,le,H)}}}else if(W.visible){const ce=w(I,W,L,R);I.onBeforeShadow(n,I,D,G,Y,ce,null),n.renderBufferDirect(G,null,Y,ce,I,null),I.onAfterShadow(n,I,D,G,Y,ce,null)}}const Q=I.children;for(let Y=0,W=Q.length;Y<W;Y++)b(Q[Y],D,G,L,R)}function U(I){I.target.removeEventListener("dispose",U);for(const G in h){const L=h[G],R=I.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function cA(n){function e(){let q=!1;const Te=new Ln;let he=null;const pe=new Ln(0,0,0,0);return{setMask:function(be){he!==be&&!q&&(n.colorMask(be,be,be,be),he=be)},setLocked:function(be){q=be},setClear:function(be,tt,St,nn,hn){hn===!0&&(be*=nn,tt*=nn,St*=nn),Te.set(be,tt,St,nn),pe.equals(Te)===!1&&(n.clearColor(be,tt,St,nn),pe.copy(Te))},reset:function(){q=!1,he=null,pe.set(-1,0,0,0)}}}function t(){let q=!1,Te=null,he=null,pe=null;return{setTest:function(be){be?ye(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(be){Te!==be&&!q&&(n.depthMask(be),Te=be)},setFunc:function(be){if(he!==be){switch(be){case Fw:n.depthFunc(n.NEVER);break;case Ow:n.depthFunc(n.ALWAYS);break;case kw:n.depthFunc(n.LESS);break;case bf:n.depthFunc(n.LEQUAL);break;case zw:n.depthFunc(n.EQUAL);break;case Bw:n.depthFunc(n.GEQUAL);break;case Vw:n.depthFunc(n.GREATER);break;case Hw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=be}},setLocked:function(be){q=be},setClear:function(be){pe!==be&&(n.clearDepth(be),pe=be)},reset:function(){q=!1,Te=null,he=null,pe=null}}}function r(){let q=!1,Te=null,he=null,pe=null,be=null,tt=null,St=null,nn=null,hn=null;return{setTest:function(Tt){q||(Tt?ye(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Tt){Te!==Tt&&!q&&(n.stencilMask(Tt),Te=Tt)},setFunc:function(Tt,fi,di){(he!==Tt||pe!==fi||be!==di)&&(n.stencilFunc(Tt,fi,di),he=Tt,pe=fi,be=di)},setOp:function(Tt,fi,di){(tt!==Tt||St!==fi||nn!==di)&&(n.stencilOp(Tt,fi,di),tt=Tt,St=fi,nn=di)},setLocked:function(Tt){q=Tt},setClear:function(Tt){hn!==Tt&&(n.clearStencil(Tt),hn=Tt)},reset:function(){q=!1,Te=null,he=null,pe=null,be=null,tt=null,St=null,nn=null,hn=null}}}const a=new e,o=new t,c=new r,f=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,_=[],S=null,E=!1,M=null,g=null,v=null,T=null,w=null,b=null,U=null,I=new Ft(0,0,0),D=0,G=!1,L=null,R=null,k=null,Q=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,te=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ce=te>=1):ue.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ce=te>=2);let H=null,ae={};const le=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),ne=new Ln().fromArray(le),Ne=new Ln().fromArray(O);function J(q,Te,he,pe){const be=new Uint8Array(4),tt=n.createTexture();n.bindTexture(q,tt),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let St=0;St<he;St++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Te+St,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return tt}const de={};de[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ye(n.DEPTH_TEST),o.setFunc(bf),Pt(!1),$e(_2),ye(n.CULL_FACE),Ht(Rs);function ye(q){h[q]!==!0&&(n.enable(q),h[q]=!0)}function Se(q){h[q]!==!1&&(n.disable(q),h[q]=!1)}function Ce(q,Te){return m[q]!==Te?(n.bindFramebuffer(q,Te),m[q]=Te,q===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Te),q===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ie(q,Te){let he=_,pe=!1;if(q){he=x.get(Te),he===void 0&&(he=[],x.set(Te,he));const be=q.textures;if(he.length!==be.length||he[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,St=be.length;tt<St;tt++)he[tt]=n.COLOR_ATTACHMENT0+tt;he.length=be.length,pe=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,pe=!0);pe&&n.drawBuffers(he)}function Ke(q){return S!==q?(n.useProgram(q),S=q,!0):!1}const bt={[la]:n.FUNC_ADD,[xw]:n.FUNC_SUBTRACT,[yw]:n.FUNC_REVERSE_SUBTRACT};bt[Sw]=n.MIN,bt[Mw]=n.MAX;const z={[Ew]:n.ZERO,[ww]:n.ONE,[Tw]:n.SRC_COLOR,[s0]:n.SRC_ALPHA,[Lw]:n.SRC_ALPHA_SATURATE,[Cw]:n.DST_COLOR,[bw]:n.DST_ALPHA,[Aw]:n.ONE_MINUS_SRC_COLOR,[a0]:n.ONE_MINUS_SRC_ALPHA,[Pw]:n.ONE_MINUS_DST_COLOR,[Rw]:n.ONE_MINUS_DST_ALPHA,[Iw]:n.CONSTANT_COLOR,[Dw]:n.ONE_MINUS_CONSTANT_COLOR,[Nw]:n.CONSTANT_ALPHA,[Uw]:n.ONE_MINUS_CONSTANT_ALPHA};function Ht(q,Te,he,pe,be,tt,St,nn,hn,Tt){if(q===Rs){E===!0&&(Se(n.BLEND),E=!1);return}if(E===!1&&(ye(n.BLEND),E=!0),q!==_w){if(q!==M||Tt!==G){if((g!==la||w!==la)&&(n.blendEquation(n.FUNC_ADD),g=la,w=la),Tt)switch(q){case Mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case x2:n.blendFunc(n.ONE,n.ONE);break;case y2:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S2:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case x2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case y2:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case S2:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,T=null,b=null,U=null,I.set(0,0,0),D=0,M=q,G=Tt}return}be=be||Te,tt=tt||he,St=St||pe,(Te!==g||be!==w)&&(n.blendEquationSeparate(bt[Te],bt[be]),g=Te,w=be),(he!==v||pe!==T||tt!==b||St!==U)&&(n.blendFuncSeparate(z[he],z[pe],z[tt],z[St]),v=he,T=pe,b=tt,U=St),(nn.equals(I)===!1||hn!==D)&&(n.blendColor(nn.r,nn.g,nn.b,hn),I.copy(nn),D=hn),M=q,G=!1}function wt(q,Te){q.side===cr?Se(n.CULL_FACE):ye(n.CULL_FACE);let he=q.side===li;Te&&(he=!he),Pt(he),q.blending===Mo&&q.transparent===!1?Ht(Rs):Ht(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),a.setMask(q.colorWrite);const pe=q.stencilWrite;c.setTest(pe),pe&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),st(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(q){L!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),L=q)}function $e(q){q!==mw?(ye(n.CULL_FACE),q!==R&&(q===_2?n.cullFace(n.BACK):q===gw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),R=q}function Kt(q){q!==k&&(ce&&n.lineWidth(q),k=q)}function st(q,Te,he){q?(ye(n.POLYGON_OFFSET_FILL),(Q!==Te||Y!==he)&&(n.polygonOffset(Te,he),Q=Te,Y=he)):Se(n.POLYGON_OFFSET_FILL)}function lt(q){q?ye(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function F(q){q===void 0&&(q=n.TEXTURE0+W-1),H!==q&&(n.activeTexture(q),H=q)}function C(q,Te,he){he===void 0&&(H===null?he=n.TEXTURE0+W-1:he=H);let pe=ae[he];pe===void 0&&(pe={type:void 0,texture:void 0},ae[he]=pe),(pe.type!==q||pe.texture!==Te)&&(H!==he&&(n.activeTexture(he),H=he),n.bindTexture(q,Te||de[q]),pe.type=q,pe.texture=Te)}function oe(){const q=ae[H];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{n.texSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{n.texImage3D.apply(n,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(q){ne.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),ne.copy(q))}function Be(q){Ne.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),Ne.copy(q))}function ct(q,Te){let he=d.get(Te);he===void 0&&(he=new WeakMap,d.set(Te,he));let pe=he.get(q);pe===void 0&&(pe=n.getUniformBlockIndex(Te,q.name),he.set(q,pe))}function dt(q,Te){const pe=d.get(Te).get(q);f.get(Te)!==pe&&(n.uniformBlockBinding(Te,pe,q.__bindingPointIndex),f.set(Te,pe))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},H=null,ae={},m={},x=new WeakMap,_=[],S=null,E=!1,M=null,g=null,v=null,T=null,w=null,b=null,U=null,I=new Ft(0,0,0),D=0,G=!1,L=null,R=null,k=null,Q=null,Y=null,ne.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:ye,disable:Se,bindFramebuffer:Ce,drawBuffers:Ie,useProgram:Ke,setBlending:Ht,setMaterial:wt,setFlipSided:Pt,setCullFace:$e,setLineWidth:Kt,setPolygonOffset:st,setScissorTest:lt,activeTexture:F,bindTexture:C,unbindTexture:oe,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Ue,texImage3D:yt,updateUBOMapping:ct,uniformBlockBinding:dt,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:ge,texSubImage3D:Qe,compressedTexSubImage2D:Le,compressedTexSubImage3D:ze,scissor:rt,viewport:Be,reset:kt}}function h_(n,e,t,r){const a=uA(r);switch(t){case dy:return n*e;case py:return n*e;case my:return n*e*2;case gy:return n*e/a.components*a.byteLength;case hm:return n*e/a.components*a.byteLength;case vy:return n*e*2/a.components*a.byteLength;case pm:return n*e*2/a.components*a.byteLength;case hy:return n*e*3/a.components*a.byteLength;case Zi:return n*e*4/a.components*a.byteLength;case mm:return n*e*4/a.components*a.byteLength;case of:case lf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cf:case uf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case d0:case p0:return Math.max(n,16)*Math.max(e,8)/4;case f0:case h0:return Math.max(n,8)*Math.max(e,8)/2;case m0:case g0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case v0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case x0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case y0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case S0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case M0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case E0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case w0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case T0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case A0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case b0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case R0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case C0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case P0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case L0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ff:case I0:case D0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _y:case N0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case U0:case F0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uA(n){switch(n){case Br:case cy:return{byteLength:1,components:1};case ic:case uy:case lc:return{byteLength:2,components:1};case fm:case dm:return{byteLength:2,components:4};case wa:case um:case Ur:return{byteLength:4,components:1};case fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function fA(n,e,t,r,a,o,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,m=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,C){return S?new OffscreenCanvas(F,C):If("canvas")}function M(F,C,oe){let me=1;const _e=lt(F);if((_e.width>oe||_e.height>oe)&&(me=oe/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ge=Math.floor(me*_e.width),Qe=Math.floor(me*_e.height);x===void 0&&(x=E(ge,Qe));const Le=C?E(ge,Qe):x;return Le.width=ge,Le.height=Qe,Le.getContext("2d").drawImage(F,0,0,ge,Qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ge+"x"+Qe+")."),Le}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),F;return F}function g(F){return F.generateMipmaps&&F.minFilter!==Fi&&F.minFilter!==Yi}function v(F){n.generateMipmap(F)}function T(F,C,oe,me,_e=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ge=C;if(C===n.RED&&(oe===n.FLOAT&&(ge=n.R32F),oe===n.HALF_FLOAT&&(ge=n.R16F),oe===n.UNSIGNED_BYTE&&(ge=n.R8)),C===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.R8UI),oe===n.UNSIGNED_SHORT&&(ge=n.R16UI),oe===n.UNSIGNED_INT&&(ge=n.R32UI),oe===n.BYTE&&(ge=n.R8I),oe===n.SHORT&&(ge=n.R16I),oe===n.INT&&(ge=n.R32I)),C===n.RG&&(oe===n.FLOAT&&(ge=n.RG32F),oe===n.HALF_FLOAT&&(ge=n.RG16F),oe===n.UNSIGNED_BYTE&&(ge=n.RG8)),C===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.RG8UI),oe===n.UNSIGNED_SHORT&&(ge=n.RG16UI),oe===n.UNSIGNED_INT&&(ge=n.RG32UI),oe===n.BYTE&&(ge=n.RG8I),oe===n.SHORT&&(ge=n.RG16I),oe===n.INT&&(ge=n.RG32I)),C===n.RGB&&oe===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),C===n.RGBA){const Qe=_e?Rf:It.getTransfer(me);oe===n.FLOAT&&(ge=n.RGBA32F),oe===n.HALF_FLOAT&&(ge=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(ge=Qe===qt?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function w(F,C){let oe;return F?C===null||C===wa||C===Fo?oe=n.DEPTH24_STENCIL8:C===Ur?oe=n.DEPTH32F_STENCIL8:C===ic&&(oe=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===wa||C===Fo?oe=n.DEPTH_COMPONENT24:C===Ur?oe=n.DEPTH_COMPONENT32F:C===ic&&(oe=n.DEPTH_COMPONENT16),oe}function b(F,C){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==Fi&&F.minFilter!==Yi?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function U(F){const C=F.target;C.removeEventListener("dispose",U),D(C),C.isVideoTexture&&m.delete(C)}function I(F){const C=F.target;C.removeEventListener("dispose",I),L(C)}function D(F){const C=r.get(F);if(C.__webglInit===void 0)return;const oe=F.source,me=_.get(oe);if(me){const _e=me[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&G(F),Object.keys(me).length===0&&_.delete(oe)}r.remove(F)}function G(F){const C=r.get(F);n.deleteTexture(C.__webglTexture);const oe=F.source,me=_.get(oe);delete me[C.__cacheKey],c.memory.textures--}function L(F){const C=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let _e=0;_e<C.__webglFramebuffer[me].length;_e++)n.deleteFramebuffer(C.__webglFramebuffer[me][_e]);else n.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)n.deleteFramebuffer(C.__webglFramebuffer[me]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const oe=F.textures;for(let me=0,_e=oe.length;me<_e;me++){const ge=r.get(oe[me]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),c.memory.textures--),r.remove(oe[me])}r.remove(F)}let R=0;function k(){R=0}function Q(){const F=R;return F>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),R+=1,F}function Y(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function W(F,C){const oe=r.get(F);if(F.isVideoTexture&&Kt(F),F.isRenderTargetTexture===!1&&F.version>0&&oe.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(oe,F,C);return}}t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+C)}function ce(F,C){const oe=r.get(F);if(F.version>0&&oe.__version!==F.version){Ne(oe,F,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+C)}function te(F,C){const oe=r.get(F);if(F.version>0&&oe.__version!==F.version){Ne(oe,F,C);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+C)}function ue(F,C){const oe=r.get(F);if(F.version>0&&oe.__version!==F.version){J(oe,F,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+C)}const H={[c0]:n.REPEAT,[da]:n.CLAMP_TO_EDGE,[u0]:n.MIRRORED_REPEAT},ae={[Fi]:n.NEAREST,[Qw]:n.NEAREST_MIPMAP_NEAREST,[wu]:n.NEAREST_MIPMAP_LINEAR,[Yi]:n.LINEAR,[Kh]:n.LINEAR_MIPMAP_NEAREST,[ha]:n.LINEAR_MIPMAP_LINEAR},le={[i6]:n.NEVER,[c6]:n.ALWAYS,[r6]:n.LESS,[xy]:n.LEQUAL,[s6]:n.EQUAL,[l6]:n.GEQUAL,[a6]:n.GREATER,[o6]:n.NOTEQUAL};function O(F,C){if(C.type===Ur&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Yi||C.magFilter===Kh||C.magFilter===wu||C.magFilter===ha||C.minFilter===Yi||C.minFilter===Kh||C.minFilter===wu||C.minFilter===ha)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,H[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,H[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,H[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,ae[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,ae[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,le[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Fi||C.minFilter!==wu&&C.minFilter!==ha||C.type===Ur&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function ne(F,C){let oe=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",U));const me=C.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const ge=Y(C);if(ge!==F.__cacheKey){_e[ge]===void 0&&(_e[ge]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,oe=!0),_e[ge].usedTimes++;const Qe=_e[F.__cacheKey];Qe!==void 0&&(_e[F.__cacheKey].usedTimes--,Qe.usedTimes===0&&G(C)),F.__cacheKey=ge,F.__webglTexture=_e[ge].texture}return oe}function Ne(F,C,oe){let me=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=n.TEXTURE_3D);const _e=ne(F,C),ge=C.source;t.bindTexture(me,F.__webglTexture,n.TEXTURE0+oe);const Qe=r.get(ge);if(ge.version!==Qe.__version||_e===!0){t.activeTexture(n.TEXTURE0+oe);const Le=It.getPrimaries(It.workingColorSpace),ze=C.colorSpace===As?null:It.getPrimaries(C.colorSpace),ft=C.colorSpace===As||Le===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=M(C.image,!1,a.maxTextureSize);Ee=st(C,Ee);const Ue=o.convert(C.format,C.colorSpace),yt=o.convert(C.type);let rt=T(C.internalFormat,Ue,yt,C.colorSpace,C.isVideoTexture);O(me,C);let Be;const ct=C.mipmaps,dt=C.isVideoTexture!==!0,kt=Qe.__version===void 0||_e===!0,q=ge.dataReady,Te=b(C,Ee);if(C.isDepthTexture)rt=w(C.format===Oo,C.type),kt&&(dt?t.texStorage2D(n.TEXTURE_2D,1,rt,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ue,yt,null));else if(C.isDataTexture)if(ct.length>0){dt&&kt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,ct[0].width,ct[0].height);for(let he=0,pe=ct.length;he<pe;he++)Be=ct[he],dt?q&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Be.width,Be.height,Ue,yt,Be.data):t.texImage2D(n.TEXTURE_2D,he,rt,Be.width,Be.height,0,Ue,yt,Be.data);C.generateMipmaps=!1}else dt?(kt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,Ee.width,Ee.height),q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ue,yt,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ue,yt,Ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){dt&&kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,rt,ct[0].width,ct[0].height,Ee.depth);for(let he=0,pe=ct.length;he<pe;he++)if(Be=ct[he],C.format!==Zi)if(Ue!==null)if(dt){if(q)if(C.layerUpdates.size>0){const be=h_(Be.width,Be.height,C.format,C.type);for(const tt of C.layerUpdates){const St=Be.data.subarray(tt*be/Be.data.BYTES_PER_ELEMENT,(tt+1)*be/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,tt,Be.width,Be.height,1,Ue,St,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Ee.depth,Ue,Be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,rt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Ee.depth,Ue,yt,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,rt,Be.width,Be.height,Ee.depth,0,Ue,yt,Be.data)}else{dt&&kt&&t.texStorage2D(n.TEXTURE_2D,Te,rt,ct[0].width,ct[0].height);for(let he=0,pe=ct.length;he<pe;he++)Be=ct[he],C.format!==Zi?Ue!==null?dt?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Be.width,Be.height,Ue,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,he,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?q&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Be.width,Be.height,Ue,yt,Be.data):t.texImage2D(n.TEXTURE_2D,he,rt,Be.width,Be.height,0,Ue,yt,Be.data)}else if(C.isDataArrayTexture)if(dt){if(kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,rt,Ee.width,Ee.height,Ee.depth),q)if(C.layerUpdates.size>0){const he=h_(Ee.width,Ee.height,C.format,C.type);for(const pe of C.layerUpdates){const be=Ee.data.subarray(pe*he/Ee.data.BYTES_PER_ELEMENT,(pe+1)*he/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Ue,yt,be)}C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,yt,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Ue,yt,Ee.data);else if(C.isData3DTexture)dt?(kt&&t.texStorage3D(n.TEXTURE_3D,Te,rt,Ee.width,Ee.height,Ee.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,yt,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Ue,yt,Ee.data);else if(C.isFramebufferTexture){if(kt)if(dt)t.texStorage2D(n.TEXTURE_2D,Te,rt,Ee.width,Ee.height);else{let he=Ee.width,pe=Ee.height;for(let be=0;be<Te;be++)t.texImage2D(n.TEXTURE_2D,be,rt,he,pe,0,Ue,yt,null),he>>=1,pe>>=1}}else if(ct.length>0){if(dt&&kt){const he=lt(ct[0]);t.texStorage2D(n.TEXTURE_2D,Te,rt,he.width,he.height)}for(let he=0,pe=ct.length;he<pe;he++)Be=ct[he],dt?q&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ue,yt,Be):t.texImage2D(n.TEXTURE_2D,he,rt,Ue,yt,Be);C.generateMipmaps=!1}else if(dt){if(kt){const he=lt(Ee);t.texStorage2D(n.TEXTURE_2D,Te,rt,he.width,he.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,yt,Ee)}else t.texImage2D(n.TEXTURE_2D,0,rt,Ue,yt,Ee);g(C)&&v(me),Qe.__version=ge.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function J(F,C,oe){if(C.image.length!==6)return;const me=ne(F,C),_e=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+oe);const ge=r.get(_e);if(_e.version!==ge.__version||me===!0){t.activeTexture(n.TEXTURE0+oe);const Qe=It.getPrimaries(It.workingColorSpace),Le=C.colorSpace===As?null:It.getPrimaries(C.colorSpace),ze=C.colorSpace===As||Qe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const ft=C.isCompressedTexture||C.image[0].isCompressedTexture,Ee=C.image[0]&&C.image[0].isDataTexture,Ue=[];for(let pe=0;pe<6;pe++)!ft&&!Ee?Ue[pe]=M(C.image[pe],!0,a.maxCubemapSize):Ue[pe]=Ee?C.image[pe].image:C.image[pe],Ue[pe]=st(C,Ue[pe]);const yt=Ue[0],rt=o.convert(C.format,C.colorSpace),Be=o.convert(C.type),ct=T(C.internalFormat,rt,Be,C.colorSpace),dt=C.isVideoTexture!==!0,kt=ge.__version===void 0||me===!0,q=_e.dataReady;let Te=b(C,yt);O(n.TEXTURE_CUBE_MAP,C);let he;if(ft){dt&&kt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ct,yt.width,yt.height);for(let pe=0;pe<6;pe++){he=Ue[pe].mipmaps;for(let be=0;be<he.length;be++){const tt=he[be];C.format!==Zi?rt!==null?dt?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,tt.width,tt.height,rt,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ct,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,0,0,tt.width,tt.height,rt,Be,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be,ct,tt.width,tt.height,0,rt,Be,tt.data)}}}else{if(he=C.mipmaps,dt&&kt){he.length>0&&Te++;const pe=lt(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){dt?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ue[pe].width,Ue[pe].height,rt,Be,Ue[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Ue[pe].width,Ue[pe].height,0,rt,Be,Ue[pe].data);for(let be=0;be<he.length;be++){const St=he[be].image[pe].image;dt?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,St.width,St.height,rt,Be,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ct,St.width,St.height,0,rt,Be,St.data)}}else{dt?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,rt,Be,Ue[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,rt,Be,Ue[pe]);for(let be=0;be<he.length;be++){const tt=he[be];dt?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,0,0,rt,Be,tt.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be+1,ct,rt,Be,tt.image[pe])}}}g(C)&&v(n.TEXTURE_CUBE_MAP),ge.__version=_e.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function de(F,C,oe,me,_e,ge){const Qe=o.convert(oe.format,oe.colorSpace),Le=o.convert(oe.type),ze=T(oe.internalFormat,Qe,Le,oe.colorSpace);if(!r.get(C).__hasExternalTextures){const Ee=Math.max(1,C.width>>ge),Ue=Math.max(1,C.height>>ge);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,ge,ze,Ee,Ue,C.depth,0,Qe,Le,null):t.texImage2D(_e,ge,ze,Ee,Ue,0,Qe,Le,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),$e(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,_e,r.get(oe).__webglTexture,0,Pt(C)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,_e,r.get(oe).__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(F,C,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){const me=C.depthTexture,_e=me&&me.isDepthTexture?me.type:null,ge=w(C.stencilBuffer,_e),Qe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=Pt(C);$e(C)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ge,C.width,C.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Qe,n.RENDERBUFFER,F)}else{const me=C.textures;for(let _e=0;_e<me.length;_e++){const ge=me[_e],Qe=o.convert(ge.format,ge.colorSpace),Le=o.convert(ge.type),ze=T(ge.internalFormat,Qe,Le,ge.colorSpace),ft=Pt(C);oe&&$e(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,ze,C.width,C.height):$e(C)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,ze,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ze,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const me=r.get(C.depthTexture).__webglTexture,_e=Pt(C);if(C.depthTexture.format===Eo)$e(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(C.depthTexture.format===Oo)$e(C)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ce(F){const C=r.get(F),oe=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const me=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=me}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Se(C.__webglFramebuffer,F)}else if(oe){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=n.createRenderbuffer(),ye(C.__webglDepthbuffer[me],F,!1);else{const _e=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=C.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),ye(C.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(F,C,oe){const me=r.get(F);C!==void 0&&de(me.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&Ce(F)}function Ke(F){const C=F.texture,oe=r.get(F),me=r.get(C);F.addEventListener("dispose",I);const _e=F.textures,ge=F.isWebGLCubeRenderTarget===!0,Qe=_e.length>1;if(Qe||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=C.version,c.memory.textures++),ge){oe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer[Le]=[];for(let ze=0;ze<C.mipmaps.length;ze++)oe.__webglFramebuffer[Le][ze]=n.createFramebuffer()}else oe.__webglFramebuffer[Le]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Le=0;Le<C.mipmaps.length;Le++)oe.__webglFramebuffer[Le]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(Qe)for(let Le=0,ze=_e.length;Le<ze;Le++){const ft=r.get(_e[Le]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),c.memory.textures++)}if(F.samples>0&&$e(F)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Le=0;Le<_e.length;Le++){const ze=_e[Le];oe.__webglColorRenderbuffer[Le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[Le]);const ft=o.convert(ze.format,ze.colorSpace),Ee=o.convert(ze.type),Ue=T(ze.internalFormat,ft,Ee,ze.colorSpace,F.isXRRenderTarget===!0),yt=Pt(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,Ue,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Le])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(oe.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),O(n.TEXTURE_CUBE_MAP,C);for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)de(oe.__webglFramebuffer[Le][ze],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ze);else de(oe.__webglFramebuffer[Le],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);g(C)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Qe){for(let Le=0,ze=_e.length;Le<ze;Le++){const ft=_e[Le],Ee=r.get(ft);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),O(n.TEXTURE_2D,ft),de(oe.__webglFramebuffer,F,ft,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,0),g(ft)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Le=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Le=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,me.__webglTexture),O(Le,C),C.mipmaps&&C.mipmaps.length>0)for(let ze=0;ze<C.mipmaps.length;ze++)de(oe.__webglFramebuffer[ze],F,C,n.COLOR_ATTACHMENT0,Le,ze);else de(oe.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,Le,0);g(C)&&v(Le),t.unbindTexture()}F.depthBuffer&&Ce(F)}function bt(F){const C=F.textures;for(let oe=0,me=C.length;oe<me;oe++){const _e=C[oe];if(g(_e)){const ge=F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Qe=r.get(_e).__webglTexture;t.bindTexture(ge,Qe),v(ge),t.unbindTexture()}}}const z=[],Ht=[];function wt(F){if(F.samples>0){if($e(F)===!1){const C=F.textures,oe=F.width,me=F.height;let _e=n.COLOR_BUFFER_BIT;const ge=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Qe=r.get(F),Le=C.length>1;if(Le)for(let ze=0;ze<C.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let ze=0;ze<C.length;ze++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Qe.__webglColorRenderbuffer[ze]);const ft=r.get(C[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,oe,me,0,0,oe,me,_e,n.NEAREST),d===!0&&(z.length=0,Ht.length=0,z.push(n.COLOR_ATTACHMENT0+ze),F.depthBuffer&&F.resolveDepthBuffer===!1&&(z.push(ge),Ht.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Le)for(let ze=0;ze<C.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Qe.__webglColorRenderbuffer[ze]);const ft=r.get(C[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,ft,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Pt(F){return Math.min(a.maxSamples,F.samples)}function $e(F){const C=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Kt(F){const C=c.render.frame;m.get(F)!==C&&(m.set(F,C),F.update())}function st(F,C){const oe=F.colorSpace,me=F.format,_e=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||oe!==Ns&&oe!==As&&(It.getTransfer(oe)===qt?(me!==Zi||_e!==Br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),C}function lt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=ce,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=Ie,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=de,this.useMultisampledRTT=$e}function dA(n,e){function t(r,a=As){let o;const c=It.getTransfer(a);if(r===Br)return n.UNSIGNED_BYTE;if(r===fm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===dm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===fy)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===cy)return n.BYTE;if(r===uy)return n.SHORT;if(r===ic)return n.UNSIGNED_SHORT;if(r===um)return n.INT;if(r===wa)return n.UNSIGNED_INT;if(r===Ur)return n.FLOAT;if(r===lc)return n.HALF_FLOAT;if(r===dy)return n.ALPHA;if(r===hy)return n.RGB;if(r===Zi)return n.RGBA;if(r===py)return n.LUMINANCE;if(r===my)return n.LUMINANCE_ALPHA;if(r===Eo)return n.DEPTH_COMPONENT;if(r===Oo)return n.DEPTH_STENCIL;if(r===gy)return n.RED;if(r===hm)return n.RED_INTEGER;if(r===vy)return n.RG;if(r===pm)return n.RG_INTEGER;if(r===mm)return n.RGBA_INTEGER;if(r===of||r===lf||r===cf||r===uf)if(c===qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===of)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uf)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===of)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lf)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cf)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uf)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===f0||r===d0||r===h0||r===p0)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===f0)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===d0)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===h0)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===p0)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===m0||r===g0||r===v0)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===m0||r===g0)return c===qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===v0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_0||r===x0||r===y0||r===S0||r===M0||r===E0||r===w0||r===T0||r===A0||r===b0||r===R0||r===C0||r===P0||r===L0)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===_0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===x0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===y0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===S0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===M0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===E0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===w0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===T0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===A0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===b0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===R0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===C0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===P0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===L0)return c===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ff||r===I0||r===D0)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ff)return c===qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===I0)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===D0)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_y||r===N0||r===U0||r===F0)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ff)return o.COMPRESSED_RED_RGTC1_EXT;if(r===N0)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===U0)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===F0)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class hA extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pA={type:"move"};class wp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,o=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,r),v=this._getHandJoint(h,M);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=m.position.distanceTo(x.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new ci,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ds({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Vo{constructor(e,t){super();const r=this;let a=null,o=1,c=null,f="local-floor",d=1,h=null,m=null,x=null,_=null,S=null,E=null;const M=new vA,g=t.getContextAttributes();let v=null,T=null;const w=[],b=[],U=new Et;let I=null;const D=new Ui;D.layers.enable(1),D.viewport=new Ln;const G=new Ui;G.layers.enable(2),G.viewport=new Ln;const L=[D,G],R=new hA;R.layers.enable(1),R.layers.enable(2);let k=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=w[J];return de===void 0&&(de=new wp,w[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=w[J];return de===void 0&&(de=new wp,w[J]=de),de.getGripSpace()},this.getHand=function(J){let de=w[J];return de===void 0&&(de=new wp,w[J]=de),de.getHandSpace()};function Y(J){const de=b.indexOf(J.inputSource);if(de===-1)return;const ye=w[de];ye!==void 0&&(ye.update(J.inputSource,J.frame,h||c),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ce);for(let J=0;J<w.length;J++){const de=b[J];de!==null&&(b[J]=null,w[J].disconnect(de))}k=null,Q=null,M.reset(),e.setRenderTarget(v),S=null,_=null,x=null,a=null,T=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),a.renderState.layers===void 0){const de={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Ta(S.framebufferWidth,S.framebufferHeight,{format:Zi,type:Br,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let de=null,ye=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=g.stencil?Oo:Eo,ye=g.stencil?Fo:wa);const Ce={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:o};x=new XRWebGLBinding(a,t),_=x.createProjectionLayer(Ce),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new Ta(_.textureWidth,_.textureHeight,{format:Zi,type:Br,depthTexture:new Ly(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(J){for(let de=0;de<J.removed.length;de++){const ye=J.removed[de],Se=b.indexOf(ye);Se>=0&&(b[Se]=null,w[Se].disconnect(ye))}for(let de=0;de<J.added.length;de++){const ye=J.added[de];let Se=b.indexOf(ye);if(Se===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=b.length){b.push(ye),Se=Ie;break}else if(b[Ie]===null){b[Ie]=ye,Se=Ie;break}if(Se===-1)break}const Ce=w[Se];Ce&&Ce.connect(ye)}}const te=new X,ue=new X;function H(J,de,ye){te.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const Se=te.distanceTo(ue),Ce=de.projectionMatrix.elements,Ie=ye.projectionMatrix.elements,Ke=Ce[14]/(Ce[10]-1),bt=Ce[14]/(Ce[10]+1),z=(Ce[9]+1)/Ce[5],Ht=(Ce[9]-1)/Ce[5],wt=(Ce[8]-1)/Ce[0],Pt=(Ie[8]+1)/Ie[0],$e=Ke*wt,Kt=Ke*Pt,st=Se/(-wt+Pt),lt=st*-wt;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(lt),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ce[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const F=Ke+st,C=bt+st,oe=$e-lt,me=Kt+(Se-lt),_e=z*bt/C*F,ge=Ht*bt/C*F;J.projectionMatrix.makePerspective(oe,me,_e,ge,F,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let de=J.near,ye=J.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),R.near=G.near=D.near=de,R.far=G.far=D.far=ye,(k!==R.near||Q!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,Q=R.far);const Se=J.parent,Ce=R.cameras;ae(R,Se);for(let Ie=0;Ie<Ce.length;Ie++)ae(Ce[Ie],Se);Ce.length===2?H(R,D,G):R.projectionMatrix.copy(D.projectionMatrix),le(J,R,Se)};function le(J,de,ye){ye===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=O0*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(J){d=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let O=null;function ne(J,de){if(m=de.getViewerPose(h||c),E=de,m!==null){const ye=m.views;S!==null&&(e.setRenderTargetFramebuffer(T,S.framebuffer),e.setRenderTarget(T));let Se=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Ie=0;Ie<ye.length;Ie++){const Ke=ye[Ie];let bt=null;if(S!==null)bt=S.getViewport(Ke);else{const Ht=x.getViewSubImage(_,Ke);bt=Ht.viewport,Ie===0&&(e.setRenderTargetTextures(T,Ht.colorTexture,_.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(T))}let z=L[Ie];z===void 0&&(z=new Ui,z.layers.enable(Ie),z.viewport=new Ln,L[Ie]=z),z.matrix.fromArray(Ke.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ke.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(bt.x,bt.y,bt.width,bt.height),Ie===0&&(R.matrix.copy(z.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(z)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ie=x.getDepthInformation(ye[0]);Ie&&Ie.isValid&&Ie.texture&&M.init(e,Ie,a.renderState)}}for(let ye=0;ye<w.length;ye++){const Se=b[ye],Ce=w[ye];Se!==null&&Ce!==void 0&&Ce.update(Se,de,h||c)}O&&O(J,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ne=new Py;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const ta=new mr,xA=new on;function yA(n,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,Ay(n)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,T,w,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(g,v):v.isMeshToonMaterial?(o(g,v),x(g,v)):v.isMeshPhongMaterial?(o(g,v),m(g,v)):v.isMeshStandardMaterial?(o(g,v),_(g,v),v.isMeshPhysicalMaterial&&S(g,v,b)):v.isMeshMatcapMaterial?(o(g,v),E(g,v)):v.isMeshDepthMaterial?o(g,v):v.isMeshDistanceMaterial?(o(g,v),M(g,v)):v.isMeshNormalMaterial?o(g,v):v.isLineBasicMaterial?(c(g,v),v.isLineDashedMaterial&&f(g,v)):v.isPointsMaterial?d(g,v,T,w):v.isSpriteMaterial?h(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===li&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===li&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const T=e.get(v),w=T.envMap,b=T.envMapRotation;w&&(g.envMap.value=w,ta.copy(b),ta.x*=-1,ta.y*=-1,ta.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ta.y*=-1,ta.z*=-1),g.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(ta)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function c(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function f(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function d(g,v,T,w){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*T,g.scale.value=w*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function h(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function x(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function _(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,T){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===li&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,v){v.matcap&&(g.matcap.value=v.matcap)}function M(g,v){const T=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function SA(n,e,t,r){let a={},o={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,w){const b=w.program;r.uniformBlockBinding(T,b)}function h(T,w){let b=a[T.id];b===void 0&&(E(T),b=m(T),a[T.id]=b,T.addEventListener("dispose",g));const U=w.program;r.updateUBOMapping(T,U);const I=e.render.frame;o[T.id]!==I&&(_(T),o[T.id]=I)}function m(T){const w=x();T.__bindingPointIndex=w;const b=n.createBuffer(),U=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function x(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const w=a[T.id],b=T.uniforms,U=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,D=b.length;I<D;I++){const G=Array.isArray(b[I])?b[I]:[b[I]];for(let L=0,R=G.length;L<R;L++){const k=G[L];if(S(k,I,L,U)===!0){const Q=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let ce=0;ce<Y.length;ce++){const te=Y[ce],ue=M(te);typeof te=="number"||typeof te=="boolean"?(k.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,Q+W,k.__data)):te.isMatrix3?(k.__data[0]=te.elements[0],k.__data[1]=te.elements[1],k.__data[2]=te.elements[2],k.__data[3]=0,k.__data[4]=te.elements[3],k.__data[5]=te.elements[4],k.__data[6]=te.elements[5],k.__data[7]=0,k.__data[8]=te.elements[6],k.__data[9]=te.elements[7],k.__data[10]=te.elements[8],k.__data[11]=0):(te.toArray(k.__data,W),W+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(T,w,b,U){const I=T.value,D=w+"_"+b;if(U[D]===void 0)return typeof I=="number"||typeof I=="boolean"?U[D]=I:U[D]=I.clone(),!0;{const G=U[D];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return U[D]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function E(T){const w=T.uniforms;let b=0;const U=16;for(let D=0,G=w.length;D<G;D++){const L=Array.isArray(w[D])?w[D]:[w[D]];for(let R=0,k=L.length;R<k;R++){const Q=L[R],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let W=0,ce=Y.length;W<ce;W++){const te=Y[W],ue=M(te),H=b%U,ae=H%ue.boundary,le=H+ae;b+=ae,le!==0&&U-le<ue.storage&&(b+=U-le),Q.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=ue.storage}}}const I=b%U;return I>0&&(b+=U-I),T.__size=b,T.__cache={},this}function M(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function g(T){const w=T.target;w.removeEventListener("dispose",g);const b=c.indexOf(w.__bindingPointIndex);c.splice(b,1),n.deleteBuffer(a[w.id]),delete a[w.id],delete o[w.id]}function v(){for(const T in a)n.deleteBuffer(a[T]);c=[],a={},o={}}return{bind:d,update:h,dispose:v}}class MA{constructor(e={}){const{canvas:t=f6(),context:r=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=c;const S=new Uint32Array(4),E=new Int32Array(4);let M=null,g=null;const v=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sr,this.toneMapping=Cs,this.toneMappingExposure=1;const w=this;let b=!1,U=0,I=0,D=null,G=-1,L=null;const R=new Ln,k=new Ln;let Q=null;const Y=new Ft(0);let W=0,ce=t.width,te=t.height,ue=1,H=null,ae=null;const le=new Ln(0,0,ce,te),O=new Ln(0,0,ce,te);let ne=!1;const Ne=new Cy;let J=!1,de=!1;const ye=new on,Se=new X,Ce=new Ln,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function bt(){return D===null?ue:1}let z=r;function Ht(P,$){return t.getContext(P,$)}try{const P={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cm}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){const $="webgl2";if(z=Ht($,P),z===null)throw Ht($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let wt,Pt,$e,Kt,st,lt,F,C,oe,me,_e,ge,Qe,Le,ze,ft,Ee,Ue,yt,rt,Be,ct,dt,kt;function q(){wt=new R7(z),wt.init(),ct=new dA(z,wt),Pt=new S7(z,wt,e,ct),$e=new cA(z),Kt=new L7(z),st=new $9,lt=new fA(z,wt,$e,st,Pt,ct,Kt),F=new E7(w),C=new b7(w),oe=new O6(z),dt=new x7(z,oe),me=new C7(z,oe,Kt,dt),_e=new D7(z,me,oe,Kt),yt=new I7(z,Pt,lt),ft=new M7(st),ge=new Y9(w,F,C,wt,Pt,dt,ft),Qe=new yA(w,st),Le=new K9,ze=new iA(wt),Ue=new _7(w,F,C,$e,_e,_,d),Ee=new lA(w,_e,Pt),kt=new SA(z,Kt,Pt,$e),rt=new y7(z,wt,Kt),Be=new P7(z,wt,Kt),Kt.programs=ge.programs,w.capabilities=Pt,w.extensions=wt,w.properties=st,w.renderLists=Le,w.shadowMap=Ee,w.state=$e,w.info=Kt}q();const Te=new _A(w,z);this.xr=Te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(P){P!==void 0&&(ue=P,this.setSize(ce,te,!1))},this.getSize=function(P){return P.set(ce,te)},this.setSize=function(P,$,ie=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=P,te=$,t.width=Math.floor(P*ue),t.height=Math.floor($*ue),ie===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(ce*ue,te*ue).floor()},this.setDrawingBufferSize=function(P,$,ie){ce=P,te=$,ue=ie,t.width=Math.floor(P*ie),t.height=Math.floor($*ie),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,$,ie,re){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,$,ie,re),$e.viewport(R.copy(le).multiplyScalar(ue).round())},this.getScissor=function(P){return P.copy(O)},this.setScissor=function(P,$,ie,re){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,$,ie,re),$e.scissor(k.copy(O).multiplyScalar(ue).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(P){$e.setScissorTest(ne=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(P=!0,$=!0,ie=!0){let re=0;if(P){let Z=!1;if(D!==null){const Ae=D.texture.format;Z=Ae===mm||Ae===pm||Ae===hm}if(Z){const Ae=D.texture.type,Fe=Ae===Br||Ae===wa||Ae===ic||Ae===Fo||Ae===fm||Ae===dm,Ge=Ue.getClearColor(),Re=Ue.getClearAlpha(),it=Ge.r,nt=Ge.g,qe=Ge.b;Fe?(S[0]=it,S[1]=nt,S[2]=qe,S[3]=Re,z.clearBufferuiv(z.COLOR,0,S)):(E[0]=it,E[1]=nt,E[2]=qe,E[3]=Re,z.clearBufferiv(z.COLOR,0,E))}else re|=z.COLOR_BUFFER_BIT}$&&(re|=z.DEPTH_BUFFER_BIT),ie&&(re|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Le.dispose(),ze.dispose(),st.dispose(),F.dispose(),C.dispose(),_e.dispose(),dt.dispose(),kt.dispose(),ge.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",di),Te.removeEventListener("sessionend",Hr),ki.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=Kt.autoReset,$=Ee.enabled,ie=Ee.autoUpdate,re=Ee.needsUpdate,Z=Ee.type;q(),Kt.autoReset=P,Ee.enabled=$,Ee.autoUpdate=ie,Ee.needsUpdate=re,Ee.type=Z}function be(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function tt(P){const $=P.target;$.removeEventListener("dispose",tt),St($)}function St(P){nn(P),st.remove(P)}function nn(P){const $=st.get(P).programs;$!==void 0&&($.forEach(function(ie){ge.releaseProgram(ie)}),P.isShaderMaterial&&ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,ie,re,Z,Ae){$===null&&($=Ie);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ge=td(P,$,ie,re,Z);$e.setMaterial(re,Fe);let Re=ie.index,it=1;if(re.wireframe===!0){if(Re=me.getWireframeAttribute(ie),Re===void 0)return;it=2}const nt=ie.drawRange,qe=ie.attributes.position;let Mt=nt.start*it,Qt=(nt.start+nt.count)*it;Ae!==null&&(Mt=Math.max(Mt,Ae.start*it),Qt=Math.min(Qt,(Ae.start+Ae.count)*it)),Re!==null?(Mt=Math.max(Mt,0),Qt=Math.min(Qt,Re.count)):qe!=null&&(Mt=Math.max(Mt,0),Qt=Math.min(Qt,qe.count));const Gt=Qt-Mt;if(Gt<0||Gt===1/0)return;dt.setup(Z,re,Ge,ie,Re);let Mn,ht=rt;if(Re!==null&&(Mn=oe.get(Re),ht=Be,ht.setIndex(Mn)),Z.isMesh)re.wireframe===!0?($e.setLineWidth(re.wireframeLinewidth*bt()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(Z.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*bt()),Z.isLineSegments?ht.setMode(z.LINES):Z.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else Z.isPoints?ht.setMode(z.POINTS):Z.isSprite&&ht.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ht.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))ht.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,Nt=Z._multiDrawCounts,Rt=Z._multiDrawCount,hi=Re?oe.get(Re).bytesPerElement:1,jr=st.get(re).currentProgram.getUniforms();for(let En=0;En<Rt;En++)jr.setValue(z,"_gl_DrawID",En),ht.render(Ye[En]/hi,Nt[En])}else if(Z.isInstancedMesh)ht.renderInstances(Mt,Gt,Z.count);else if(ie.isInstancedBufferGeometry){const Ye=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Nt=Math.min(ie.instanceCount,Ye);ht.renderInstances(Mt,Gt,Nt)}else ht.render(Mt,Gt)};function hn(P,$,ie){P.transparent===!0&&P.side===cr&&P.forceSinglePass===!1?(P.side=li,P.needsUpdate=!0,Wr(P,$,ie),P.side=zr,P.needsUpdate=!0,Wr(P,$,ie),P.side=cr):Wr(P,$,ie)}this.compile=function(P,$,ie=null){ie===null&&(ie=P),g=ze.get(ie),g.init($),T.push(g),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),P!==ie&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const re=new Set;return P.traverse(function(Z){const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const Ge=Ae[Fe];hn(Ge,ie,Z),re.add(Ge)}else hn(Ae,ie,Z),re.add(Ae)}),T.pop(),g=null,re},this.compileAsync=function(P,$,ie=null){const re=this.compile(P,$,ie);return new Promise(Z=>{function Ae(){if(re.forEach(function(Fe){st.get(Fe).currentProgram.isReady()&&re.delete(Fe)}),re.size===0){Z(P);return}setTimeout(Ae,10)}wt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Tt=null;function fi(P){Tt&&Tt(P)}function di(){ki.stop()}function Hr(){ki.start()}const ki=new Py;ki.setAnimationLoop(fi),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(P){Tt=P,Te.setAnimationLoop(P),P===null?ki.stop():ki.start()},Te.addEventListener("sessionstart",di),Te.addEventListener("sessionend",Hr),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,$,D),g=ze.get(P,T.length),g.init($),T.push(g),ye.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ne.setFromProjectionMatrix(ye),de=this.localClippingEnabled,J=ft.init(this.clippingPlanes,de),M=Le.get(P,v.length),M.init(),v.push(M),Te.enabled===!0&&Te.isPresenting===!0){const Ae=w.xr.getDepthSensingMesh();Ae!==null&&gr(Ae,$,-1/0,w.sortObjects)}gr(P,$,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(H,ae),Ke=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ke&&Ue.addToRenderList(M,P),this.info.render.frame++,J===!0&&ft.beginShadows();const ie=g.state.shadowsArray;Ee.render(ie,P,$),J===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=M.opaque,Z=M.transmissive;if(g.setupLights(),$.isArrayCamera){const Ae=$.cameras;if(Z.length>0)for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++){const Re=Ae[Fe];Gr(re,Z,P,Re)}Ke&&Ue.render(P);for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++){const Re=Ae[Fe];pc(M,P,Re,Re.viewport)}}else Z.length>0&&Gr(re,Z,P,$),Ke&&Ue.render(P),pc(M,P,$);D!==null&&(lt.updateMultisampleRenderTarget(D),lt.updateRenderTargetMipmap(D)),P.isScene===!0&&P.onAfterRender(w,P,$),dt.resetDefaultState(),G=-1,L=null,T.pop(),T.length>0?(g=T[T.length-1],J===!0&&ft.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?M=v[v.length-1]:M=null};function gr(P,$,ie,re){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ne.intersectsSprite(P)){re&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ye);const Fe=_e.update(P),Ge=P.material;Ge.visible&&M.push(P,Fe,Ge,ie,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ne.intersectsObject(P))){const Fe=_e.update(P),Ge=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(ye)),Array.isArray(Ge)){const Re=Fe.groups;for(let it=0,nt=Re.length;it<nt;it++){const qe=Re[it],Mt=Ge[qe.materialIndex];Mt&&Mt.visible&&M.push(P,Fe,Mt,ie,Ce.z,qe)}}else Ge.visible&&M.push(P,Fe,Ge,ie,Ce.z,null)}}const Ae=P.children;for(let Fe=0,Ge=Ae.length;Fe<Ge;Fe++)gr(Ae[Fe],$,ie,re)}function pc(P,$,ie,re){const Z=P.opaque,Ae=P.transmissive,Fe=P.transparent;g.setupLightsView(ie),J===!0&&ft.setGlobalState(w.clippingPlanes,ie),re&&$e.viewport(R.copy(re)),Z.length>0&&vr(Z,$,ie),Ae.length>0&&vr(Ae,$,ie),Fe.length>0&&vr(Fe,$,ie),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Gr(P,$,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[re.id]===void 0&&(g.state.transmissionRenderTarget[re.id]=new Ta(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?lc:Br,minFilter:ha,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[re.id],Fe=re.viewport||R;Ae.setSize(Fe.z,Fe.w);const Ge=w.getRenderTarget();w.setRenderTarget(Ae),w.getClearColor(Y),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear(),Ke&&Ue.render(ie);const Re=w.toneMapping;w.toneMapping=Cs;const it=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),g.setupLightsView(re),J===!0&&ft.setGlobalState(w.clippingPlanes,re),vr(P,ie,re),lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae),wt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let qe=0,Mt=$.length;qe<Mt;qe++){const Qt=$[qe],Gt=Qt.object,Mn=Qt.geometry,ht=Qt.material,Ye=Qt.group;if(ht.side===cr&&Gt.layers.test(re.layers)){const Nt=ht.side;ht.side=li,ht.needsUpdate=!0,Us(Gt,ie,re,Mn,ht,Ye),ht.side=Nt,ht.needsUpdate=!0,nt=!0}}nt===!0&&(lt.updateMultisampleRenderTarget(Ae),lt.updateRenderTargetMipmap(Ae))}w.setRenderTarget(Ge),w.setClearColor(Y,W),it!==void 0&&(re.viewport=it),w.toneMapping=Re}function vr(P,$,ie){const re=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Ae=P.length;Z<Ae;Z++){const Fe=P[Z],Ge=Fe.object,Re=Fe.geometry,it=re===null?Fe.material:re,nt=Fe.group;Ge.layers.test(ie.layers)&&Us(Ge,$,ie,Re,it,nt)}}function Us(P,$,ie,re,Z,Ae){P.onBeforeRender(w,$,ie,re,Z,Ae),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(w,$,ie,re,P,Ae),Z.transparent===!0&&Z.side===cr&&Z.forceSinglePass===!1?(Z.side=li,Z.needsUpdate=!0,w.renderBufferDirect(ie,$,re,Z,P,Ae),Z.side=zr,Z.needsUpdate=!0,w.renderBufferDirect(ie,$,re,Z,P,Ae),Z.side=cr):w.renderBufferDirect(ie,$,re,Z,P,Ae),P.onAfterRender(w,$,ie,re,Z,Ae)}function Wr(P,$,ie){$.isScene!==!0&&($=Ie);const re=st.get(P),Z=g.state.lights,Ae=g.state.shadowsArray,Fe=Z.state.version,Ge=ge.getParameters(P,Z.state,Ae,$,ie),Re=ge.getProgramCacheKey(Ge);let it=re.programs;re.environment=P.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(P.isMeshStandardMaterial?C:F).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",tt),it=new Map,re.programs=it);let nt=it.get(Re);if(nt!==void 0){if(re.currentProgram===nt&&re.lightsStateVersion===Fe)return gc(P,Ge),nt}else Ge.uniforms=ge.getUniforms(P),P.onBeforeCompile(Ge,w),nt=ge.acquireProgram(Ge,Re),it.set(Re,nt),re.uniforms=Ge.uniforms;const qe=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=ft.uniform),gc(P,Ge),re.needsLights=vc(P),re.lightsStateVersion=Fe,re.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=nt,re.uniformsList=null,nt}function mc(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=df.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function gc(P,$){const ie=st.get(P);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function td(P,$,ie,re,Z){$.isScene!==!0&&($=Ie),lt.resetTextureUnits();const Ae=$.fog,Fe=re.isMeshStandardMaterial?$.environment:null,Ge=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ns,Re=(re.isMeshStandardMaterial?C:F).get(re.envMap||Fe),it=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ie.morphAttributes.position,Mt=!!ie.morphAttributes.normal,Qt=!!ie.morphAttributes.color;let Gt=Cs;re.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Gt=w.toneMapping);const Mn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ht=Mn!==void 0?Mn.length:0,Ye=st.get(re),Nt=g.state.lights;if(J===!0&&(de===!0||P!==L)){const Zn=P===L&&re.id===G;ft.setState(re,P,Zn)}let Rt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==Ge||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Re||re.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ft.numPlanes||Ye.numIntersection!==ft.numIntersection)||Ye.vertexAlphas!==it||Ye.vertexTangents!==nt||Ye.morphTargets!==qe||Ye.morphNormals!==Mt||Ye.morphColors!==Qt||Ye.toneMapping!==Gt||Ye.morphTargetsCount!==ht)&&(Rt=!0):(Rt=!0,Ye.__version=re.version);let hi=Ye.currentProgram;Rt===!0&&(hi=Wr(re,$,Z));let jr=!1,En=!1,Xr=!1;const Bt=hi.getUniforms(),pi=Ye.uniforms;if($e.useProgram(hi.program)&&(jr=!0,En=!0,Xr=!0),re.id!==G&&(G=re.id,En=!0),jr||L!==P){Bt.setValue(z,"projectionMatrix",P.projectionMatrix),Bt.setValue(z,"viewMatrix",P.matrixWorldInverse);const Zn=Bt.map.cameraPosition;Zn!==void 0&&Zn.setValue(z,Se.setFromMatrixPosition(P.matrixWorld)),Pt.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,En=!0,Xr=!0)}if(Z.isSkinnedMesh){Bt.setOptional(z,Z,"bindMatrix"),Bt.setOptional(z,Z,"bindMatrixInverse");const Zn=Z.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Bt.setValue(z,"boneTexture",Zn.boneTexture,lt))}Z.isBatchedMesh&&(Bt.setOptional(z,Z,"batchingTexture"),Bt.setValue(z,"batchingTexture",Z._matricesTexture,lt),Bt.setOptional(z,Z,"batchingIdTexture"),Bt.setValue(z,"batchingIdTexture",Z._indirectTexture,lt),Bt.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Bt.setValue(z,"batchingColorTexture",Z._colorsTexture,lt));const Go=ie.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0)&&yt.update(Z,ie,hi),(En||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Bt.setValue(z,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(pi.envMap.value=Re,pi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(pi.envMapIntensity.value=$.environmentIntensity),En&&(Bt.setValue(z,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&_r(pi,Xr),Ae&&re.fog===!0&&Qe.refreshFogUniforms(pi,Ae),Qe.refreshMaterialUniforms(pi,re,ue,te,g.state.transmissionRenderTarget[P.id]),df.upload(z,mc(Ye),pi,lt)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(df.upload(z,mc(Ye),pi,lt),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Bt.setValue(z,"center",Z.center),Bt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(z,"normalMatrix",Z.normalMatrix),Bt.setValue(z,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Zn=re.uniformsGroups;for(let Fs=0,_c=Zn.length;Fs<_c;Fs++){const Aa=Zn[Fs];kt.update(Aa,hi),kt.bind(Aa,hi)}}return hi}function _r(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function vc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(P,$,ie){st.get(P.texture).__webglTexture=$,st.get(P.depthTexture).__webglTexture=ie;const re=st.get(P);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const ie=st.get(P);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,ie=0){D=P,U=$,I=ie;let re=!0,Z=null,Ae=!1,Fe=!1;if(P){const Re=st.get(P);if(Re.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(z.FRAMEBUFFER,null),re=!1;else if(Re.__webglFramebuffer===void 0)lt.setupRenderTarget(P);else if(Re.__hasExternalTextures)lt.rebindTextures(P,st.get(P.texture).__webglTexture,st.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if(Re.__boundDepthTexture!==qe){if(qe!==null&&st.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Fe=!0);const nt=st.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?Z=nt[$][ie]:Z=nt[$],Ae=!0):P.samples>0&&lt.useMultisampledRTT(P)===!1?Z=st.get(P).__webglMultisampledFramebuffer:Array.isArray(nt)?Z=nt[ie]:Z=nt,R.copy(P.viewport),k.copy(P.scissor),Q=P.scissorTest}else R.copy(le).multiplyScalar(ue).floor(),k.copy(O).multiplyScalar(ue).floor(),Q=ne;if($e.bindFramebuffer(z.FRAMEBUFFER,Z)&&re&&$e.drawBuffers(P,Z),$e.viewport(R),$e.scissor(k),$e.setScissorTest(Q),Ae){const Re=st.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Re.__webglTexture,ie)}else if(Fe){const Re=st.get(P.texture),it=$||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.__webglTexture,ie||0,it)}G=-1},this.readRenderTargetPixels=function(P,$,ie,re,Z,Ae,Fe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=st.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){$e.bindFramebuffer(z.FRAMEBUFFER,Ge);try{const Re=P.texture,it=Re.format,nt=Re.type;if(!Pt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-re&&ie>=0&&ie<=P.height-Z&&z.readPixels($,ie,re,Z,ct.convert(it),ct.convert(nt),Ae)}finally{const Re=D!==null?st.get(D).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(P,$,ie,re,Z,Ae,Fe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=st.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){$e.bindFramebuffer(z.FRAMEBUFFER,Ge);try{const Re=P.texture,it=Re.format,nt=Re.type;if(!Pt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-re&&ie>=0&&ie<=P.height-Z){const qe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.bufferData(z.PIXEL_PACK_BUFFER,Ae.byteLength,z.STREAM_READ),z.readPixels($,ie,re,Z,ct.convert(it),ct.convert(nt),0),z.flush();const Mt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);await d6(z,Mt,4);try{z.bindBuffer(z.PIXEL_PACK_BUFFER,qe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ae)}finally{z.deleteBuffer(qe),z.deleteSync(Mt)}return Ae}}finally{const Re=D!==null?st.get(D).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(P,$=null,ie=0){P.isTexture!==!0&&(ql("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const re=Math.pow(2,-ie),Z=Math.floor(P.image.width*re),Ae=Math.floor(P.image.height*re),Fe=$!==null?$.x:0,Ge=$!==null?$.y:0;lt.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ie,0,0,Fe,Ge,Z,Ae),$e.unbindTexture()},this.copyTextureToTexture=function(P,$,ie=null,re=null,Z=0){P.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,P=arguments[1],$=arguments[2],Z=arguments[3]||0,ie=null);let Ae,Fe,Ge,Re,it,nt;ie!==null?(Ae=ie.max.x-ie.min.x,Fe=ie.max.y-ie.min.y,Ge=ie.min.x,Re=ie.min.y):(Ae=P.image.width,Fe=P.image.height,Ge=0,Re=0),re!==null?(it=re.x,nt=re.y):(it=0,nt=0);const qe=ct.convert($.format),Mt=ct.convert($.type);lt.setTexture2D($,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const Qt=z.getParameter(z.UNPACK_ROW_LENGTH),Gt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Mn=z.getParameter(z.UNPACK_SKIP_PIXELS),ht=z.getParameter(z.UNPACK_SKIP_ROWS),Ye=z.getParameter(z.UNPACK_SKIP_IMAGES),Nt=P.isCompressedTexture?P.mipmaps[Z]:P.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),z.pixelStorei(z.UNPACK_SKIP_ROWS,Re),P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,it,nt,Ae,Fe,qe,Mt,Nt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,it,nt,Nt.width,Nt.height,qe,Nt.data):z.texSubImage2D(z.TEXTURE_2D,Z,it,nt,Ae,Fe,qe,Mt,Nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Qt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Mn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ye),Z===0&&$.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(P,$,ie=null,re=null,Z=0){P.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,P=arguments[2],$=arguments[3],Z=arguments[4]||0);let Ae,Fe,Ge,Re,it,nt,qe,Mt,Qt;const Gt=P.isCompressedTexture?P.mipmaps[Z]:P.image;ie!==null?(Ae=ie.max.x-ie.min.x,Fe=ie.max.y-ie.min.y,Ge=ie.max.z-ie.min.z,Re=ie.min.x,it=ie.min.y,nt=ie.min.z):(Ae=Gt.width,Fe=Gt.height,Ge=Gt.depth,Re=0,it=0,nt=0),re!==null?(qe=re.x,Mt=re.y,Qt=re.z):(qe=0,Mt=0,Qt=0);const Mn=ct.convert($.format),ht=ct.convert($.type);let Ye;if($.isData3DTexture)lt.setTexture3D($,0),Ye=z.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)lt.setTexture2DArray($,0),Ye=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const Nt=z.getParameter(z.UNPACK_ROW_LENGTH),Rt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=z.getParameter(z.UNPACK_SKIP_PIXELS),jr=z.getParameter(z.UNPACK_SKIP_ROWS),En=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),z.pixelStorei(z.UNPACK_SKIP_ROWS,it),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nt),P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ye,Z,qe,Mt,Qt,Ae,Fe,Ge,Mn,ht,Gt.data):$.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Z,qe,Mt,Qt,Ae,Fe,Ge,Mn,Gt.data):z.texSubImage3D(Ye,Z,qe,Mt,Qt,Ae,Fe,Ge,Mn,ht,Gt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,jr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,En),Z===0&&$.generateMipmaps&&z.generateMipmap(Ye),$e.unbindTexture()},this.initRenderTarget=function(P){st.get(P).__webglFramebuffer===void 0&&lt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?lt.setTextureCube(P,0):P.isData3DTexture?lt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?lt.setTexture2DArray(P,0):lt.setTexture2D(P,0),$e.unbindTexture()},this.resetState=function(){U=0,I=0,D=null,$e.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gm?"display-p3":"srgb",t.unpackColorSpace=It.workingColorSpace===Qf?"display-p3":"srgb"}}class EA extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fy extends fc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Df=new X,Nf=new X,p_=new on,Dl=new vm,Xu=new Jf,Tp=new X,m_=new X;class ys extends Un{constructor(e=new $n,t=new Fy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,o=t.count;a<o;a++)Df.fromBufferAttribute(t,a-1),Nf.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Df.distanceTo(Nf);e.setAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(a),Xu.radius+=o,e.ray.intersectsSphere(Xu)===!1)return;p_.copy(a).invert(),Dl.copy(e.ray).applyMatrix4(p_);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=r.index,_=r.attributes.position;if(m!==null){const S=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let M=S,g=E-1;M<g;M+=h){const v=m.getX(M),T=m.getX(M+1),w=qu(this,e,Dl,d,v,T);w&&t.push(w)}if(this.isLineLoop){const M=m.getX(E-1),g=m.getX(S),v=qu(this,e,Dl,d,M,g);v&&t.push(v)}}else{const S=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let M=S,g=E-1;M<g;M+=h){const v=qu(this,e,Dl,d,M,M+1);v&&t.push(v)}if(this.isLineLoop){const M=qu(this,e,Dl,d,E-1,S);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function qu(n,e,t,r,a,o){const c=n.geometry.attributes.position;if(Df.fromBufferAttribute(c,a),Nf.fromBufferAttribute(c,o),t.distanceSqToSegment(Df,Nf,Tp,m_)>r)return;Tp.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(Tp);if(!(d<e.near||d>e.far))return{distance:d,point:m_.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,object:n}}class Hn extends $n{constructor(e=1,t=1,r=1,a=32,o=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),o=Math.floor(o);const m=[],x=[],_=[],S=[];let E=0;const M=[],g=r/2;let v=0;T(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(S,2));function T(){const b=new X,U=new X;let I=0;const D=(t-e)/r;for(let G=0;G<=o;G++){const L=[],R=G/o,k=R*(t-e)+e;for(let Q=0;Q<=a;Q++){const Y=Q/a,W=Y*d+f,ce=Math.sin(W),te=Math.cos(W);U.x=k*ce,U.y=-R*r+g,U.z=k*te,x.push(U.x,U.y,U.z),b.set(ce,D,te).normalize(),_.push(b.x,b.y,b.z),S.push(Y,1-R),L.push(E++)}M.push(L)}for(let G=0;G<a;G++)for(let L=0;L<o;L++){const R=M[L][G],k=M[L+1][G],Q=M[L+1][G+1],Y=M[L][G+1];m.push(R,k,Y),m.push(k,Q,Y),I+=6}h.addGroup(v,I,0),v+=I}function w(b){const U=E,I=new Et,D=new X;let G=0;const L=b===!0?e:t,R=b===!0?1:-1;for(let Q=1;Q<=a;Q++)x.push(0,g*R,0),_.push(0,R,0),S.push(.5,.5),E++;const k=E;for(let Q=0;Q<=a;Q++){const W=Q/a*d+f,ce=Math.cos(W),te=Math.sin(W);D.x=L*te,D.y=g*R,D.z=L*ce,x.push(D.x,D.y,D.z),_.push(0,R,0),I.x=ce*.5+.5,I.y=te*.5*R+.5,S.push(I.x,I.y),E++}for(let Q=0;Q<a;Q++){const Y=U+Q,W=k+Q;b===!0?m.push(W,W+1,Y):m.push(W+1,W,Y),G+=3}h.addGroup(v,G,b===!0?1:2),v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ym extends $n{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const o=[],c=[];f(a),h(r),m(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const w=new X,b=new X,U=new X;for(let I=0;I<t.length;I+=3)S(t[I+0],w),S(t[I+1],b),S(t[I+2],U),d(w,b,U,T)}function d(T,w,b,U){const I=U+1,D=[];for(let G=0;G<=I;G++){D[G]=[];const L=T.clone().lerp(b,G/I),R=w.clone().lerp(b,G/I),k=I-G;for(let Q=0;Q<=k;Q++)Q===0&&G===I?D[G][Q]=L:D[G][Q]=L.clone().lerp(R,Q/k)}for(let G=0;G<I;G++)for(let L=0;L<2*(I-G)-1;L++){const R=Math.floor(L/2);L%2===0?(_(D[G][R+1]),_(D[G+1][R]),_(D[G][R])):(_(D[G][R+1]),_(D[G+1][R+1]),_(D[G+1][R]))}}function h(T){const w=new X;for(let b=0;b<o.length;b+=3)w.x=o[b+0],w.y=o[b+1],w.z=o[b+2],w.normalize().multiplyScalar(T),o[b+0]=w.x,o[b+1]=w.y,o[b+2]=w.z}function m(){const T=new X;for(let w=0;w<o.length;w+=3){T.x=o[w+0],T.y=o[w+1],T.z=o[w+2];const b=g(T)/2/Math.PI+.5,U=v(T)/Math.PI+.5;c.push(b,1-U)}E(),x()}function x(){for(let T=0;T<c.length;T+=6){const w=c[T+0],b=c[T+2],U=c[T+4],I=Math.max(w,b,U),D=Math.min(w,b,U);I>.9&&D<.1&&(w<.2&&(c[T+0]+=1),b<.2&&(c[T+2]+=1),U<.2&&(c[T+4]+=1))}}function _(T){o.push(T.x,T.y,T.z)}function S(T,w){const b=T*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function E(){const T=new X,w=new X,b=new X,U=new X,I=new Et,D=new Et,G=new Et;for(let L=0,R=0;L<o.length;L+=9,R+=6){T.set(o[L+0],o[L+1],o[L+2]),w.set(o[L+3],o[L+4],o[L+5]),b.set(o[L+6],o[L+7],o[L+8]),I.set(c[R+0],c[R+1]),D.set(c[R+2],c[R+3]),G.set(c[R+4],c[R+5]),U.copy(T).add(w).add(b).divideScalar(3);const k=g(U);M(I,R+0,T,k),M(D,R+2,w,k),M(G,R+4,b,k)}}function M(T,w,b,U){U<0&&T.x===1&&(c[w]=T.x-1),b.x===0&&b.z===0&&(c[w]=U/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function v(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ym(e.vertices,e.indices,e.radius,e.details)}}class yo extends ym{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yo(e.radius,e.detail)}}class Sm extends $n{constructor(e=.5,t=1,r=32,a=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:o,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const f=[],d=[],h=[],m=[];let x=e;const _=(t-e)/a,S=new X,E=new Et;for(let M=0;M<=a;M++){for(let g=0;g<=r;g++){const v=o+g/r*c;S.x=x*Math.cos(v),S.y=x*Math.sin(v),d.push(S.x,S.y,S.z),h.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,m.push(E.x,E.y)}x+=_}for(let M=0;M<a;M++){const g=M*(r+1);for(let v=0;v<r;v++){const T=v+g,w=T,b=T+r+1,U=T+r+2,I=T+1;f.push(w,b,I),f.push(b,U,I)}}this.setIndex(f),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mm extends $n{constructor(e=1,t=32,r=16,a=0,o=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:o,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const m=[],x=new X,_=new X,S=[],E=[],M=[],g=[];for(let v=0;v<=r;v++){const T=[],w=v/r;let b=0;v===0&&c===0?b=.5/t:v===r&&d===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const I=U/t;x.x=-e*Math.cos(a+I*o)*Math.sin(c+w*f),x.y=e*Math.cos(c+w*f),x.z=e*Math.sin(a+I*o)*Math.sin(c+w*f),E.push(x.x,x.y,x.z),_.copy(x).normalize(),M.push(_.x,_.y,_.z),g.push(I+b,1-w),T.push(h++)}m.push(T)}for(let v=0;v<r;v++)for(let T=0;T<t;T++){const w=m[v][T+1],b=m[v][T],U=m[v+1][T],I=m[v+1][T+1];(v!==0||c>0)&&S.push(w,b,I),(v!==r-1||d<Math.PI)&&S.push(b,U,I)}this.setIndex(S),this.setAttribute("position",new Zt(E,3)),this.setAttribute("normal",new Zt(M,3)),this.setAttribute("uv",new Zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ua extends $n{constructor(e=1,t=.4,r=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:o},r=Math.floor(r),a=Math.floor(a);const c=[],f=[],d=[],h=[],m=new X,x=new X,_=new X;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const M=E/a*o,g=S/r*Math.PI*2;x.x=(e+t*Math.cos(g))*Math.cos(M),x.y=(e+t*Math.cos(g))*Math.sin(M),x.z=t*Math.sin(g),f.push(x.x,x.y,x.z),m.x=e*Math.cos(M),m.y=e*Math.sin(M),_.subVectors(x,m).normalize(),d.push(_.x,_.y,_.z),h.push(E/a),h.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const M=(a+1)*S+E-1,g=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,T=(a+1)*S+E;c.push(M,g,T),c.push(g,v,T)}this.setIndex(c),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const g_=new on;class wA{constructor(e,t,r=0,a=1/0){this.ray=new vm(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new _m,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return g_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g_),this}intersectObject(e,t=!0,r=[]){return z0(e,this,r,t),r.sort(v_),r}intersectObjects(e,t=!0,r=[]){for(let a=0,o=e.length;a<o;a++)z0(e[a],this,r,t);return r.sort(v_),r}}function v_(n,e){return n.distance-e.distance}function z0(n,e,t,r){let a=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const o=n.children;for(let c=0,f=o.length;c<f;c++)z0(o[c],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);const na=new wA,Gn=new X,Ss=new X,en=new Nn,__={X:new X(1,0,0),Y:new X(0,1,0),Z:new X(0,0,1)},Ap={type:"change"},x_={type:"mouseDown",mode:null},y_={type:"mouseUp",mode:null},S_={type:"objectChange"};class M_ extends Un{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const r=new PA;this._gizmo=r,this.add(r);const a=new LA;this._plane=a,this.add(a);const o=this;function c(T,w){let b=w;Object.defineProperty(o,T,{get:function(){return b!==void 0?b:w},set:function(U){b!==U&&(b=U,a[T]=U,r[T]=U,o.dispatchEvent({type:T+"-changed",value:U}),o.dispatchEvent(Ap))}}),o[T]=w,a[T]=w,r[T]=w}c("camera",e),c("object",void 0),c("enabled",!0),c("axis",null),c("mode","translate"),c("translationSnap",null),c("rotationSnap",null),c("scaleSnap",null),c("space","world"),c("size",1),c("dragging",!1),c("showX",!0),c("showY",!0),c("showZ",!0);const f=new X,d=new X,h=new Nn,m=new Nn,x=new X,_=new Nn,S=new X,E=new X,M=new X,g=0,v=new X;c("worldPosition",f),c("worldPositionStart",d),c("worldQuaternion",h),c("worldQuaternionStart",m),c("cameraPosition",x),c("cameraQuaternion",_),c("pointStart",S),c("pointEnd",E),c("rotationAxis",M),c("rotationAngle",g),c("eye",v),this._offset=new X,this._startNorm=new X,this._endNorm=new X,this._cameraScale=new X,this._parentPosition=new X,this._parentQuaternion=new Nn,this._parentQuaternionInv=new Nn,this._parentScale=new X,this._worldScaleStart=new X,this._worldQuaternionInv=new Nn,this._worldScale=new X,this._positionStart=new X,this._quaternionStart=new Nn,this._scaleStart=new X,this._getPointer=TA.bind(this),this._onPointerDown=bA.bind(this),this._onPointerHover=AA.bind(this),this._onPointerMove=RA.bind(this),this._onPointerUp=CA.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&na.setFromCamera(e,this.camera);const t=bp(this._gizmo.picker[this.mode],na);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&na.setFromCamera(e,this.camera);const t=bp(this._plane,na,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,x_.mode=this.mode,this.dispatchEvent(x_)}}pointerMove(e){const t=this.axis,r=this.mode,a=this.object;let o=this.space;if(r==="scale"?o="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(o="world"),a===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&na.setFromCamera(e,this.camera);const c=bp(this._plane,na,!0);if(c){if(this.pointEnd.copy(c.point).sub(this.worldPositionStart),r==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),a.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(a.position.applyQuaternion(en.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.position.applyQuaternion(this._quaternionStart)),o==="world"&&(a.parent&&a.position.add(Gn.setFromMatrixPosition(a.parent.matrixWorld)),t.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.parent&&a.position.sub(Gn.setFromMatrixPosition(a.parent.matrixWorld))));else if(r==="scale"){if(t.search("XYZ")!==-1){let f=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(f*=-1),Ss.set(f,f,f)}else Gn.copy(this.pointStart),Ss.copy(this.pointEnd),Gn.applyQuaternion(this._worldQuaternionInv),Ss.applyQuaternion(this._worldQuaternionInv),Ss.divide(Gn),t.search("X")===-1&&(Ss.x=1),t.search("Y")===-1&&(Ss.y=1),t.search("Z")===-1&&(Ss.z=1);a.scale.copy(this._scaleStart).multiply(Ss),this.scaleSnap&&(t.search("X")!==-1&&(a.scale.x=Math.round(a.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(a.scale.y=Math.round(a.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(a.scale.z=Math.round(a.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(r==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const f=20/this.worldPosition.distanceTo(Gn.setFromMatrixPosition(this.camera.matrixWorld));let d=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Gn.copy(this.rotationAxis).cross(this.eye))*f):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(__[t]),Gn.copy(__[t]),o==="local"&&Gn.applyQuaternion(this.worldQuaternion),Gn.cross(this.eye),Gn.length()===0?d=!0:this.rotationAngle=this._offset.dot(Gn.normalize())*f),(t==="E"||d)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&t!=="E"&&t!=="XYZE"?(a.quaternion.copy(this._quaternionStart),a.quaternion.multiply(en.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),a.quaternion.copy(en.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),a.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ap),this.dispatchEvent(S_)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(y_.mode=this.mode,this.dispatchEvent(y_)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ap),this.dispatchEvent(S_),this.pointStart.copy(this.pointEnd))}getRaycaster(){return na}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function TA(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function AA(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function bA(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function RA(n){this.enabled&&this.pointerMove(this._getPointer(n))}function CA(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function bp(n,e,t){const r=e.intersectObject(n,!0);for(let a=0;a<r.length;a++)if(r[a].object.visible||t)return r[a];return!1}const Yu=new mr,zt=new X(0,1,0),E_=new X(0,0,0),w_=new on,$u=new Nn,hf=new Nn,rr=new X,T_=new on,Bl=new X(1,0,0),aa=new X(0,1,0),Vl=new X(0,0,1),Zu=new X,Nl=new X,Ul=new X;class PA extends Un{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new dc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Fy({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),r=e.clone();r.opacity=.15;const a=t.clone();a.opacity=.5;const o=e.clone();o.color.setHex(16711680);const c=e.clone();c.color.setHex(65280);const f=e.clone();f.color.setHex(255);const d=e.clone();d.color.setHex(16711680),d.opacity=.5;const h=e.clone();h.color.setHex(65280),h.opacity=.5;const m=e.clone();m.color.setHex(255),m.opacity=.5;const x=e.clone();x.opacity=.25;const _=e.clone();_.color.setHex(16776960),_.opacity=.25,e.clone().color.setHex(16776960);const E=e.clone();E.color.setHex(7895160);const M=new Hn(0,.04,.1,12);M.translate(0,.05,0);const g=new fn(.08,.08,.08);g.translate(0,.04,0);const v=new $n;v.setAttribute("position",new Zt([0,0,0,1,0,0],3));const T=new Hn(.0075,.0075,.5,3);T.translate(0,.25,0);function w(ce,te){const ue=new ua(ce,.0075,3,64,te*Math.PI*2);return ue.rotateY(Math.PI/2),ue.rotateX(Math.PI/2),ue}function b(){const ce=new $n;return ce.setAttribute("position",new Zt([0,0,0,1,1,1],3)),ce}const U={X:[[new ke(M,o),[.5,0,0],[0,0,-Math.PI/2]],[new ke(M,o),[-.5,0,0],[0,0,Math.PI/2]],[new ke(T,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ke(M,c),[0,.5,0]],[new ke(M,c),[0,-.5,0],[Math.PI,0,0]],[new ke(T,c)]],Z:[[new ke(M,f),[0,0,.5],[Math.PI/2,0,0]],[new ke(M,f),[0,0,-.5],[-Math.PI/2,0,0]],[new ke(T,f),null,[Math.PI/2,0,0]]],XYZ:[[new ke(new yo(.1,0),x.clone()),[0,0,0]]],XY:[[new ke(new fn(.15,.15,.01),m.clone()),[.15,.15,0]]],YZ:[[new ke(new fn(.15,.15,.01),d.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ke(new fn(.15,.15,.01),h.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},I={X:[[new ke(new Hn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new ke(new Hn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ke(new Hn(.2,0,.6,4),r),[0,.3,0]],[new ke(new Hn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ke(new Hn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new ke(new Hn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ke(new yo(.2,0),r)]],XY:[[new ke(new fn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new ke(new fn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ke(new fn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new ke(new yo(.01,2),a),null,null,null,"helper"]],END:[[new ke(new yo(.01,2),a),null,null,null,"helper"]],DELTA:[[new ys(b(),a),null,null,null,"helper"]],X:[[new ys(v,a.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ys(v,a.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ys(v,a.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},G={XYZE:[[new ke(w(.5,1),E),null,[0,Math.PI/2,0]]],X:[[new ke(w(.5,.5),o)]],Y:[[new ke(w(.5,.5),c),null,[0,0,-Math.PI/2]]],Z:[[new ke(w(.5,.5),f),null,[0,Math.PI/2,0]]],E:[[new ke(w(.75,1),_),null,[0,Math.PI/2,0]]]},L={AXIS:[[new ys(v,a.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},R={XYZE:[[new ke(new Mm(.25,10,8),r)]],X:[[new ke(new ua(.5,.1,4,24),r),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ke(new ua(.5,.1,4,24),r),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ke(new ua(.5,.1,4,24),r),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ke(new ua(.75,.1,2,24),r)]]},k={X:[[new ke(g,o),[.5,0,0],[0,0,-Math.PI/2]],[new ke(T,o),[0,0,0],[0,0,-Math.PI/2]],[new ke(g,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ke(g,c),[0,.5,0]],[new ke(T,c)],[new ke(g,c),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ke(g,f),[0,0,.5],[Math.PI/2,0,0]],[new ke(T,f),[0,0,0],[Math.PI/2,0,0]],[new ke(g,f),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ke(new fn(.15,.15,.01),m),[.15,.15,0]]],YZ:[[new ke(new fn(.15,.15,.01),d),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ke(new fn(.15,.15,.01),h),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ke(new fn(.1,.1,.1),x.clone())]]},Q={X:[[new ke(new Hn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new ke(new Hn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ke(new Hn(.2,0,.6,4),r),[0,.3,0]],[new ke(new Hn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ke(new Hn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new ke(new Hn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ke(new fn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new ke(new fn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ke(new fn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ke(new fn(.2,.2,.2),r),[0,0,0]]]},Y={X:[[new ys(v,a.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ys(v,a.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ys(v,a.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(ce){const te=new Un;for(const ue in ce)for(let H=ce[ue].length;H--;){const ae=ce[ue][H][0].clone(),le=ce[ue][H][1],O=ce[ue][H][2],ne=ce[ue][H][3],Ne=ce[ue][H][4];ae.name=ue,ae.tag=Ne,le&&ae.position.set(le[0],le[1],le[2]),O&&ae.rotation.set(O[0],O[1],O[2]),ne&&ae.scale.set(ne[0],ne[1],ne[2]),ae.updateMatrix();const J=ae.geometry.clone();J.applyMatrix4(ae.matrix),ae.geometry=J,ae.renderOrder=1/0,ae.position.set(0,0,0),ae.rotation.set(0,0,0),ae.scale.set(1,1,1),te.add(ae)}return te}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(U)),this.add(this.gizmo.rotate=W(G)),this.add(this.gizmo.scale=W(k)),this.add(this.picker.translate=W(I)),this.add(this.picker.rotate=W(R)),this.add(this.picker.scale=W(Q)),this.add(this.helper.translate=W(D)),this.add(this.helper.rotate=W(L)),this.add(this.helper.scale=W(Y)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const r=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:hf;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let a=[];a=a.concat(this.picker[this.mode].children),a=a.concat(this.gizmo[this.mode].children),a=a.concat(this.helper[this.mode].children);for(let o=0;o<a.length;o++){const c=a[o];c.visible=!0,c.rotation.set(0,0,0),c.position.copy(this.worldPosition);let f;if(this.camera.isOrthographicCamera?f=(this.camera.top-this.camera.bottom)/this.camera.zoom:f=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),c.scale.set(1,1,1).multiplyScalar(f*this.size/4),c.tag==="helper"){c.visible=!1,c.name==="AXIS"?(c.visible=!!this.axis,this.axis==="X"&&(en.setFromEuler(Yu.set(0,0,0)),c.quaternion.copy(r).multiply(en),Math.abs(zt.copy(Bl).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Y"&&(en.setFromEuler(Yu.set(0,0,Math.PI/2)),c.quaternion.copy(r).multiply(en),Math.abs(zt.copy(aa).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="Z"&&(en.setFromEuler(Yu.set(0,Math.PI/2,0)),c.quaternion.copy(r).multiply(en),Math.abs(zt.copy(Vl).applyQuaternion(r).dot(this.eye))>.9&&(c.visible=!1)),this.axis==="XYZE"&&(en.setFromEuler(Yu.set(0,Math.PI/2,0)),zt.copy(this.rotationAxis),c.quaternion.setFromRotationMatrix(w_.lookAt(E_,zt,aa)),c.quaternion.multiply(en),c.visible=this.dragging),this.axis==="E"&&(c.visible=!1)):c.name==="START"?(c.position.copy(this.worldPositionStart),c.visible=this.dragging):c.name==="END"?(c.position.copy(this.worldPosition),c.visible=this.dragging):c.name==="DELTA"?(c.position.copy(this.worldPositionStart),c.quaternion.copy(this.worldQuaternionStart),Gn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Gn.applyQuaternion(this.worldQuaternionStart.clone().invert()),c.scale.copy(Gn),c.visible=this.dragging):(c.quaternion.copy(r),this.dragging?c.position.copy(this.worldPositionStart):c.position.copy(this.worldPosition),this.axis&&(c.visible=this.axis.search(c.name)!==-1));continue}c.quaternion.copy(r),this.mode==="translate"||this.mode==="scale"?(c.name==="X"&&Math.abs(zt.copy(Bl).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Y"&&Math.abs(zt.copy(aa).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="Z"&&Math.abs(zt.copy(Vl).applyQuaternion(r).dot(this.eye))>.99&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XY"&&Math.abs(zt.copy(Vl).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="YZ"&&Math.abs(zt.copy(Bl).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1),c.name==="XZ"&&Math.abs(zt.copy(aa).applyQuaternion(r).dot(this.eye))<.2&&(c.scale.set(1e-10,1e-10,1e-10),c.visible=!1)):this.mode==="rotate"&&($u.copy(r),zt.copy(this.eye).applyQuaternion(en.copy(r).invert()),c.name.search("E")!==-1&&c.quaternion.setFromRotationMatrix(w_.lookAt(this.eye,E_,aa)),c.name==="X"&&(en.setFromAxisAngle(Bl,Math.atan2(-zt.y,zt.z)),en.multiplyQuaternions($u,en),c.quaternion.copy(en)),c.name==="Y"&&(en.setFromAxisAngle(aa,Math.atan2(zt.x,zt.z)),en.multiplyQuaternions($u,en),c.quaternion.copy(en)),c.name==="Z"&&(en.setFromAxisAngle(Vl,Math.atan2(zt.y,zt.x)),en.multiplyQuaternions($u,en),c.quaternion.copy(en))),c.visible=c.visible&&(c.name.indexOf("X")===-1||this.showX),c.visible=c.visible&&(c.name.indexOf("Y")===-1||this.showY),c.visible=c.visible&&(c.name.indexOf("Z")===-1||this.showZ),c.visible=c.visible&&(c.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),c.material._color=c.material._color||c.material.color.clone(),c.material._opacity=c.material._opacity||c.material.opacity,c.material.color.copy(c.material._color),c.material.opacity=c.material._opacity,this.enabled&&this.axis&&(c.name===this.axis||this.axis.split("").some(function(d){return c.name===d}))&&(c.material.color.setHex(16776960),c.material.opacity=1)}super.updateMatrixWorld(e)}}class LA extends ke{constructor(){super(new hc(1e5,1e5,2,2),new dc({visible:!1,wireframe:!0,side:cr,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Zu.copy(Bl).applyQuaternion(t==="local"?this.worldQuaternion:hf),Nl.copy(aa).applyQuaternion(t==="local"?this.worldQuaternion:hf),Ul.copy(Vl).applyQuaternion(t==="local"?this.worldQuaternion:hf),zt.copy(Nl),this.mode){case"translate":case"scale":switch(this.axis){case"X":zt.copy(this.eye).cross(Zu),rr.copy(Zu).cross(zt);break;case"Y":zt.copy(this.eye).cross(Nl),rr.copy(Nl).cross(zt);break;case"Z":zt.copy(this.eye).cross(Ul),rr.copy(Ul).cross(zt);break;case"XY":rr.copy(Ul);break;case"YZ":rr.copy(Zu);break;case"XZ":zt.copy(Ul),rr.copy(Nl);break;case"XYZ":case"E":rr.set(0,0,0);break}break;default:rr.set(0,0,0)}rr.length()===0?this.quaternion.copy(this.cameraQuaternion):(T_.lookAt(Gn.set(0,0,0),rr,zt),this.quaternion.setFromRotationMatrix(T_)),super.updateMatrixWorld(e)}}const ot=Symbol("@@iwer/devui/input-scene"),IA=.016;class DA{constructor(e){const t=e.canvasContainer,r=new EA,a=new Ui(e.fovy/Math.PI*180,t.offsetWidth/t.offsetHeight,.1,1e3),o=new xo,c=new xo;r.add(o),o.add(c),c.position.fromArray(e.position.vec3),c.quaternion.fromArray(e.quaternion.quat),c.add(a),a.position.x-=e.ipd/2;const f=new ke(new fn(.1,.1,.1)),d=f.clone();f.position.fromArray(e.controllers.left.position.vec3),f.quaternion.fromArray(e.controllers.left.quaternion.quat),d.position.fromArray(e.controllers.right.position.vec3),d.quaternion.fromArray(e.controllers.right.quaternion.quat),c.attach(f),c.attach(d),f.visible=!1,d.visible=!1;const h=new ke(new Sm(.25,.27,32),new dc({color:16777215,side:zr}));h.rotateX(-Math.PI/2),r.add(h);const m=new MA({alpha:!0});m.setSize(t.offsetWidth,t.offsetHeight),m.setClearColor(0,0),t.appendChild(m.domElement);const x=new M_(a,m.domElement);x.attach(f),r.add(x);const _=new M_(a,m.domElement);_.attach(d),r.add(_);const S=new ResizeObserver(()=>{this.resize()});S.observe(t);const E=g=>{g.addEventListener("mouseDown",()=>{g.userData.pressStart=performance.now()}),g.addEventListener("mouseUp",()=>{const v=performance.now()-g.userData.pressStart;g.userData.pressStart=null,v<200&&(g.mode==="rotate"?g.setMode("translate"):g.setMode("rotate"))}),g.addEventListener("change",()=>{this.renderScene()})};E(x),E(_);const M=g=>{if(!this[ot].isPointerLocked)return;const v=g.movementX||g.mozMovementX||g.webkitMovementX||0,T=g.movementY||g.mozMovementY||g.webkitMovementY||0;o.rotation.y-=v*.002,c.rotation.x-=T*.002,e.quaternion.copy(c.getWorldQuaternion(new Nn)),this.renderScene()};this[ot]={canvasContainer:t,renderer:m,scene:r,camera:a,playerRig:o,cameraRig:c,xrDevice:e,controllerIndicators:{left:f,right:d},transformControls:{left:x,right:_},headsetDefaultPosition:c.position.clone(),headsetDefaultQuaternion:c.quaternion.clone(),controllerDefaultPositions:{left:f.position.clone(),right:d.position.clone()},controllerDefaultQuaternions:{left:f.quaternion.clone(),right:d.quaternion.clone()},resizeObserver:S,isPointerLocked:!1,vec3:new X,quat:new Nn,mouseMoveHandler:M,keyState:{ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},movePlayerRig:()=>this.movePlayerRig(),moveInterval:null},document.addEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}lockPointer(){this[ot].renderer.domElement.requestPointerLock=this[ot].renderer.domElement.requestPointerLock||this[ot].renderer.domElement.mozRequestPointerLock||this[ot].renderer.domElement.webkitRequestPointerLock,this[ot].renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this[ot].isPointerLocked=document.pointerLockElement===this[ot].renderer.domElement||document.mozPointerLockElement===this[ot].renderer.domElement||document.webkitPointerLockElement===this[ot].renderer.domElement,this[ot].isPointerLocked?(document.addEventListener("mousemove",this[ot].mouseMoveHandler,!1),Object.values(this[ot].transformControls).forEach(e=>{e.enabled=!1,e.visible=!1})):(document.removeEventListener("mousemove",this[ot].mouseMoveHandler,!1),Object.values(this[ot].transformControls).forEach(e=>{e.enabled=!0,e.visible=!0}))}keyDownHandler(e){const{keyState:t,movePlayerRig:r,moveInterval:a}=this[ot];e.code in t&&(t[e.code]=!0),t.ShiftLeft&&(t.KeyW||t.KeyA||t.KeyS||t.KeyD)&&(a||(this[ot].moveInterval=window.setInterval(r,16))),t.ShiftLeft&&t.ArrowUp&&(this[ot].cameraRig.position.y+=.05,this.renderScene()),t.ShiftLeft&&t.ArrowDown&&(this[ot].cameraRig.position.y-=.05,this.renderScene())}keyUpHandler(e){const{keyState:t,moveInterval:r}=this[ot];e.code in t&&(t[e.code]=!1),(!t.ShiftLeft||!(t.KeyW||t.KeyA||t.KeyS||t.KeyD))&&r&&(window.clearInterval(r),this[ot].moveInterval=null)}movePlayerRig(){const{playerRig:e,keyState:t,vec3:r}=this[ot];r.set((t.KeyD?1:0)-(t.KeyA?1:0),0,(t.KeyS?1:0)-(t.KeyW?1:0)),r.lengthSq()>0&&(r.normalize().multiplyScalar(IA).applyQuaternion(e.quaternion),e.position.add(r),this.renderScene())}syncFovy(){this[ot].camera.fov=this[ot].xrDevice.fovy/Math.PI*180,this[ot].camera.updateProjectionMatrix()}resetDeviceTransforms(){const{playerRig:e,cameraRig:t,controllerIndicators:r}=this[ot];t.position.copy(this[ot].headsetDefaultPosition),t.quaternion.set(0,0,0,1),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),Object.entries(r).forEach(([a,o])=>{o.position.copy(this[ot].controllerDefaultPositions[a]),o.quaternion.copy(this[ot].controllerDefaultQuaternions[a])}),this.syncDeviceTransforms(),this.renderScene()}syncDeviceTransforms(){const{xrDevice:e,cameraRig:t,controllerIndicators:r}=this[ot];e.position.copy(t.getWorldPosition(this[ot].vec3)),e.quaternion.copy(t.getWorldQuaternion(this[ot].quat)),Object.entries(r).forEach(([a,o])=>{e.controllers[a].position.copy(o.getWorldPosition(this[ot].vec3)),e.controllers[a].quaternion.copy(o.getWorldQuaternion(this[ot].quat))})}renderScene(){this.syncDeviceTransforms(),this[ot].renderer.render(this[ot].scene,this[ot].camera)}get domElement(){return this[ot].renderer.domElement}resize(){const e=this[ot].canvasContainer.offsetWidth,t=this[ot].canvasContainer.offsetHeight;this[ot].renderer.setSize(e,t),this[ot].camera.aspect=e/t,this[ot].camera.updateProjectionMatrix(),this.renderScene()}dispose(){this[ot].resizeObserver.disconnect(),this[ot].renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mousemove",this[ot].mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandler.bind(this),!1),document.removeEventListener("keyup",this.keyUpHandler.bind(this),!1)}}var Ku={},Rp={exports:{}},ii={},Cp={exports:{}},Pp={};var A_;function NA(){return A_||(A_=1,(function(n){function e(H,ae){var le=H.length;H.push(ae);e:for(;0<le;){var O=le-1>>>1,ne=H[O];if(0<a(ne,ae))H[O]=ae,H[le]=ne,le=O;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ae=H[0],le=H.pop();if(le!==ae){H[0]=le;e:for(var O=0,ne=H.length,Ne=ne>>>1;O<Ne;){var J=2*(O+1)-1,de=H[J],ye=J+1,Se=H[ye];if(0>a(de,le))ye<ne&&0>a(Se,de)?(H[O]=Se,H[ye]=le,O=ye):(H[O]=de,H[J]=le,O=J);else if(ye<ne&&0>a(Se,le))H[O]=Se,H[ye]=le,O=ye;else break e}}return ae}function a(H,ae){var le=H.sortIndex-ae.sortIndex;return le!==0?le:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,x=null,_=3,S=!1,E=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=H)r(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function b(H){if(M=!1,w(H),!E)if(t(d)!==null)E=!0,te(U);else{var ae=t(h);ae!==null&&ue(b,ae.startTime-H)}}function U(H,ae){E=!1,M&&(M=!1,v(G),G=-1),S=!0;var le=_;try{for(w(ae),x=t(d);x!==null&&(!(x.expirationTime>ae)||H&&!k());){var O=x.callback;if(typeof O=="function"){x.callback=null,_=x.priorityLevel;var ne=O(x.expirationTime<=ae);ae=n.unstable_now(),typeof ne=="function"?x.callback=ne:x===t(d)&&r(d),w(ae)}else r(d);x=t(d)}if(x!==null)var Ne=!0;else{var J=t(h);J!==null&&ue(b,J.startTime-ae),Ne=!1}return Ne}finally{x=null,_=le,S=!1}}var I=!1,D=null,G=-1,L=5,R=-1;function k(){return!(n.unstable_now()-R<L)}function Q(){if(D!==null){var H=n.unstable_now();R=H;var ae=!0;try{ae=D(!0,H)}finally{ae?Y():(I=!1,D=null)}}else I=!1}var Y;if(typeof T=="function")Y=function(){T(Q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ce=W.port2;W.port1.onmessage=Q,Y=function(){ce.postMessage(null)}}else Y=function(){g(Q,0)};function te(H){D=H,I||(I=!0,Y())}function ue(H,ae){G=g(function(){H(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){E||S||(E=!0,te(U))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(H){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var le=_;_=ae;try{return H()}finally{_=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=_;_=H;try{return ae()}finally{_=le}},n.unstable_scheduleCallback=function(H,ae,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=le+ne,H={id:m++,callback:ae,priorityLevel:H,startTime:le,expirationTime:ne,sortIndex:-1},le>O?(H.sortIndex=le,e(h,H),t(d)===null&&H===t(h)&&(M?(v(G),G=-1):M=!0,ue(b,le-O))):(H.sortIndex=ne,e(d,H),E||S||(E=!0,te(U))),H},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(H){var ae=_;return function(){var le=_;_=ae;try{return H.apply(this,arguments)}finally{_=le}}}})(Pp)),Pp}var b_;function UA(){return b_||(b_=1,Cp.exports=NA()),Cp.exports}var R_;function FA(){if(R_)return ii;R_=1;var n=j0(),e=UA();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function o(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(a[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function _(i){return d.call(x,i)?!0:d.call(m,i)?!1:h.test(i)?x[i]=!0:(m[i]=!0,!1)}function S(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,u){if(s===null||typeof s>"u"||S(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,l,u,p,y,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=y,this.removeEmptyString=A}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){g[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];g[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){g[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){g[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){g[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){g[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){g[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){g[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){g[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(v,T);g[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(v,T);g[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(v,T);g[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){g[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),g.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){g[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function w(i,s,l,u){var p=g.hasOwnProperty(s)?g[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,p,u)&&(l=null),u||p===null?_(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,u=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function ne(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ne=!1;function J(i,s){if(!i||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(se){var u=se}Reflect.construct(i,[],s)}else{try{s.call()}catch(se){u=se}i.call(s.prototype)}else{try{throw Error()}catch(se){u=se}i()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var p=se.stack.split(`
`),y=u.stack.split(`
`),A=p.length-1,N=y.length-1;1<=A&&0<=N&&p[A]!==y[N];)N--;for(;1<=A&&0<=N;A--,N--)if(p[A]!==y[N]){if(A!==1||N!==1)do if(A--,N--,0>N||p[A]!==y[N]){var V=`
`+p[A].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=A&&0<=N);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ne(i):""}function de(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=J(i.type,!1),i;case 11:return i=J(i.type.render,!1),i;case 1:return i=J(i.type,!0),i;default:return""}}function ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case I:return"Portal";case L:return"Profiler";case G:return"StrictMode";case Y:return"Suspense";case W:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case Q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:ye(i.type)||"Memo";case te:s=i._payload,i=i._init;try{return ye(i(s))}catch{}}return null}function Se(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(s);case 8:return s===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ke(i){var s=Ie(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,y.call(this,A)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function bt(i){i._valueTracker||(i._valueTracker=Ke(i))}function z(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Ie(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function Ht(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function wt(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Pt(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=Ce(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function $e(i,s){s=s.checked,s!=null&&w(i,"checked",s,!1)}function Kt(i,s){$e(i,s);var l=Ce(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?lt(i,s.type,l):s.hasOwnProperty("defaultValue")&&lt(i,s.type,Ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function st(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function lt(i,s,l){(s!=="number"||Ht(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var F=Array.isArray;function C(i,s,l,u){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&u&&(i[l].defaultSelected=!0)}else{for(l=""+Ce(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function oe(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function me(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(F(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ce(l)}}function _e(i,s){var l=Ce(s.value),u=Ce(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function Qe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Le(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?Qe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ze,ft=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ze.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ee(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yt=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(i){yt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ue[s]=Ue[i]})});function rt(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ue.hasOwnProperty(i)&&Ue[i]?(""+s).trim():s+"px"}function Be(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=rt(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,p):i[l]=p}}var ct=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(ct[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function kt(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q=null;function Te(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var he=null,pe=null,be=null;function tt(i){if(i=ol(i)){if(typeof he!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Nc(s),he(i.stateNode,i.type,s))}}function St(i){pe?be?be.push(i):be=[i]:pe=i}function nn(){if(pe){var i=pe,s=be;if(be=pe=null,tt(i),s)for(i=0;i<s.length;i++)tt(s[i])}}function hn(i,s){return i(s)}function Tt(){}var fi=!1;function di(i,s,l){if(fi)return i(s,l);fi=!0;try{return hn(i,s,l)}finally{fi=!1,(pe!==null||be!==null)&&(Tt(),nn())}}function Hr(i,s){var l=i.stateNode;if(l===null)return null;var u=Nc(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var ki=!1;if(f)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){ki=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{ki=!1}function pc(i,s,l,u,p,y,A,N,V){var se=Array.prototype.slice.call(arguments,3);try{s.apply(l,se)}catch(xe){this.onError(xe)}}var Gr=!1,vr=null,Us=!1,Wr=null,mc={onError:function(i){Gr=!0,vr=i}};function gc(i,s,l,u,p,y,A,N,V){Gr=!1,vr=null,pc.apply(mc,arguments)}function td(i,s,l,u,p,y,A,N,V){if(gc.apply(this,arguments),Gr){if(Gr){var se=vr;Gr=!1,vr=null}else throw Error(t(198));Us||(Us=!0,Wr=se)}}function _r(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function vc(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function P(i){if(_r(i)!==i)throw Error(t(188))}function $(i){var s=i.alternate;if(!s){if(s=_r(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return P(p),i;if(y===u)return P(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=y;else{for(var A=!1,N=p.child;N;){if(N===l){A=!0,l=p,u=y;break}if(N===u){A=!0,u=p,l=y;break}N=N.sibling}if(!A){for(N=y.child;N;){if(N===l){A=!0,l=y,u=p;break}if(N===u){A=!0,u=y,l=p;break}N=N.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ie(i){return i=$(i),i!==null?re(i):null}function re(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=re(i);if(s!==null)return s;i=i.sibling}return null}var Z=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Fe=e.unstable_shouldYield,Ge=e.unstable_requestPaint,Re=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,Mt=e.unstable_NormalPriority,Qt=e.unstable_LowPriority,Gt=e.unstable_IdlePriority,Mn=null,ht=null;function Ye(i){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Mn,i,void 0,(i.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:jr,Rt=Math.log,hi=Math.LN2;function jr(i){return i>>>=0,i===0?32:31-(Rt(i)/hi|0)|0}var En=64,Xr=4194304;function Bt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function pi(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,p=i.suspendedLanes,y=i.pingedLanes,A=l&268435455;if(A!==0){var N=A&~p;N!==0?u=Bt(N):(y&=A,y!==0&&(u=Bt(y)))}else A=l&~p,A!==0?u=Bt(A):y!==0&&(u=Bt(y));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-Nt(s),p=1<<l,u|=i[l],s&=~p;return u}function Go(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zn(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes;0<y;){var A=31-Nt(y),N=1<<A,V=p[A];V===-1?((N&l)===0||(N&u)!==0)&&(p[A]=Go(N,s)):V<=s&&(i.expiredLanes|=N),y&=~N}}function Fs(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function _c(){var i=En;return En<<=1,(En&4194240)===0&&(En=64),i}function Aa(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Wo(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Nt(s),i[s]=l}function zy(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Nt(l),y=1<<p;s[p]=0,u[p]=-1,i[p]=-1,l&=~y}}function nd(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-Nt(l),p=1<<u;p&s|i[u]&s&&(i[u]|=s),l&=~p}}var Ut=0;function wm(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Tm,id,Am,bm,Rm,rd=!1,xc=[],qr=null,Yr=null,$r=null,jo=new Map,Xo=new Map,Zr=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(i,s){switch(i){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":jo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(s.pointerId)}}function qo(i,s,l,u,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:y,targetContainers:[p]},s!==null&&(s=ol(s),s!==null&&id(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Vy(i,s,l,u,p){switch(s){case"focusin":return qr=qo(qr,i,s,l,u,p),!0;case"dragenter":return Yr=qo(Yr,i,s,l,u,p),!0;case"mouseover":return $r=qo($r,i,s,l,u,p),!0;case"pointerover":var y=p.pointerId;return jo.set(y,qo(jo.get(y)||null,i,s,l,u,p)),!0;case"gotpointercapture":return y=p.pointerId,Xo.set(y,qo(Xo.get(y)||null,i,s,l,u,p)),!0}return!1}function Pm(i){var s=Os(i.target);if(s!==null){var l=_r(s);if(l!==null){if(s=l.tag,s===13){if(s=vc(l),s!==null){i.blockedOn=s,Rm(i.priority,function(){Am(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function yc(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ad(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);q=u,l.target.dispatchEvent(u),q=null}else return s=ol(l),s!==null&&id(s),i.blockedOn=l,!1;s.shift()}return!0}function Lm(i,s,l){yc(i)&&l.delete(s)}function Hy(){rd=!1,qr!==null&&yc(qr)&&(qr=null),Yr!==null&&yc(Yr)&&(Yr=null),$r!==null&&yc($r)&&($r=null),jo.forEach(Lm),Xo.forEach(Lm)}function Yo(i,s){i.blockedOn===s&&(i.blockedOn=null,rd||(rd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hy)))}function $o(i){function s(p){return Yo(p,i)}if(0<xc.length){Yo(xc[0],i);for(var l=1;l<xc.length;l++){var u=xc[l];u.blockedOn===i&&(u.blockedOn=null)}}for(qr!==null&&Yo(qr,i),Yr!==null&&Yo(Yr,i),$r!==null&&Yo($r,i),jo.forEach(s),Xo.forEach(s),l=0;l<Zr.length;l++)u=Zr[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<Zr.length&&(l=Zr[0],l.blockedOn===null);)Pm(l),l.blockedOn===null&&Zr.shift()}var ba=b.ReactCurrentBatchConfig,Sc=!0;function Gy(i,s,l,u){var p=Ut,y=ba.transition;ba.transition=null;try{Ut=1,sd(i,s,l,u)}finally{Ut=p,ba.transition=y}}function Wy(i,s,l,u){var p=Ut,y=ba.transition;ba.transition=null;try{Ut=4,sd(i,s,l,u)}finally{Ut=p,ba.transition=y}}function sd(i,s,l,u){if(Sc){var p=ad(i,s,l,u);if(p===null)Ed(i,s,u,Mc,l),Cm(i,u);else if(Vy(p,i,s,l,u))u.stopPropagation();else if(Cm(i,u),s&4&&-1<By.indexOf(i)){for(;p!==null;){var y=ol(p);if(y!==null&&Tm(y),y=ad(i,s,l,u),y===null&&Ed(i,s,u,Mc,l),y===p)break;p=y}p!==null&&u.stopPropagation()}else Ed(i,s,u,null,l)}}var Mc=null;function ad(i,s,l,u){if(Mc=null,i=Te(u),i=Os(i),i!==null)if(s=_r(i),s===null)i=null;else if(l=s.tag,l===13){if(i=vc(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Mc=i,null}function Im(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case nt:return 1;case qe:return 4;case Mt:case Qt:return 16;case Gt:return 536870912;default:return 16}default:return 16}}var Kr=null,od=null,Ec=null;function Dm(){if(Ec)return Ec;var i,s=od,l=s.length,u,p="value"in Kr?Kr.value:Kr.textContent,y=p.length;for(i=0;i<l&&s[i]===p[i];i++);var A=l-i;for(u=1;u<=A&&s[l-u]===p[y-u];u++);return Ec=p.slice(i,1<u?1-u:void 0)}function wc(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Tc(){return!0}function Nm(){return!1}function mi(i){function s(l,u,p,y,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=y,this.target=A,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(l=i[N],this[N]=l?l(y):y[N]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Tc:Nm,this.isPropagationStopped=Nm,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){},isPersistent:Tc}),s}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=mi(Ra),Zo=le({},Ra,{view:0,detail:0}),jy=mi(Zo),cd,ud,Ko,Ac=le({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ko&&(Ko&&i.type==="mousemove"?(cd=i.screenX-Ko.screenX,ud=i.screenY-Ko.screenY):ud=cd=0,Ko=i),cd)},movementY:function(i){return"movementY"in i?i.movementY:ud}}),Um=mi(Ac),Xy=le({},Ac,{dataTransfer:0}),qy=mi(Xy),Yy=le({},Zo,{relatedTarget:0}),fd=mi(Yy),$y=le({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Zy=mi($y),Ky=le({},Ra,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Qy=mi(Ky),Jy=le({},Ra,{data:0}),Fm=mi(Jy),e3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i3(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=n3[i])?!!s[i]:!1}function dd(){return i3}var r3=le({},Zo,{key:function(i){if(i.key){var s=e3[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=wc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?t3[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(i){return i.type==="keypress"?wc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?wc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),s3=mi(r3),a3=le({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=mi(a3),o3=le({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),l3=mi(o3),c3=le({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),u3=mi(c3),f3=le({},Ac,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),d3=mi(f3),h3=[9,13,27,32],hd=f&&"CompositionEvent"in window,Qo=null;f&&"documentMode"in document&&(Qo=document.documentMode);var p3=f&&"TextEvent"in window&&!Qo,km=f&&(!hd||Qo&&8<Qo&&11>=Qo),zm=" ",Bm=!1;function Vm(i,s){switch(i){case"keyup":return h3.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ca=!1;function m3(i,s){switch(i){case"compositionend":return Hm(s);case"keypress":return s.which!==32?null:(Bm=!0,zm);case"textInput":return i=s.data,i===zm&&Bm?null:i;default:return null}}function g3(i,s){if(Ca)return i==="compositionend"||!hd&&Vm(i,s)?(i=Dm(),Ec=od=Kr=null,Ca=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return km&&s.locale!=="ko"?null:s.data;default:return null}}var v3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!v3[i.type]:s==="textarea"}function Wm(i,s,l,u){St(u),s=Lc(s,"onChange"),0<s.length&&(l=new ld("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var Jo=null,el=null;function _3(i){l1(i,0)}function bc(i){var s=Na(i);if(z(s))return i}function x3(i,s){if(i==="change")return s}var jm=!1;if(f){var pd;if(f){var md="oninput"in document;if(!md){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),md=typeof Xm.oninput=="function"}pd=md}else pd=!1;jm=pd&&(!document.documentMode||9<document.documentMode)}function qm(){Jo&&(Jo.detachEvent("onpropertychange",Ym),el=Jo=null)}function Ym(i){if(i.propertyName==="value"&&bc(el)){var s=[];Wm(s,el,i,Te(i)),di(_3,s)}}function y3(i,s,l){i==="focusin"?(qm(),Jo=s,el=l,Jo.attachEvent("onpropertychange",Ym)):i==="focusout"&&qm()}function S3(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return bc(el)}function M3(i,s){if(i==="click")return bc(s)}function E3(i,s){if(i==="input"||i==="change")return bc(s)}function w3(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var zi=typeof Object.is=="function"?Object.is:w3;function tl(i,s){if(zi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!d.call(s,p)||!zi(i[p],s[p]))return!1}return!0}function $m(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Zm(i,s){var l=$m(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$m(l)}}function Km(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Km(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Qm(){for(var i=window,s=Ht();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ht(i.document)}return s}function gd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function T3(i){var s=Qm(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Km(l.ownerDocument.documentElement,l)){if(u!==null&&gd(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,y=Math.min(u.start,p);u=u.end===void 0?y:Math.min(u.end,p),!i.extend&&y>u&&(p=u,u=y,y=p),p=Zm(l,y);var A=Zm(l,u);p&&A&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==A.node||i.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),y>u?(i.addRange(s),i.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var A3=f&&"documentMode"in document&&11>=document.documentMode,Pa=null,vd=null,nl=null,_d=!1;function Jm(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;_d||Pa==null||Pa!==Ht(u)||(u=Pa,"selectionStart"in u&&gd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),nl&&tl(nl,u)||(nl=u,u=Lc(vd,"onSelect"),0<u.length&&(s=new ld("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=Pa)))}function Rc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var La={animationend:Rc("Animation","AnimationEnd"),animationiteration:Rc("Animation","AnimationIteration"),animationstart:Rc("Animation","AnimationStart"),transitionend:Rc("Transition","TransitionEnd")},xd={},e1={};f&&(e1=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function Cc(i){if(xd[i])return xd[i];if(!La[i])return i;var s=La[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in e1)return xd[i]=s[l];return i}var t1=Cc("animationend"),n1=Cc("animationiteration"),i1=Cc("animationstart"),r1=Cc("transitionend"),s1=new Map,a1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(i,s){s1.set(i,s),o(s,[i])}for(var yd=0;yd<a1.length;yd++){var Sd=a1[yd],b3=Sd.toLowerCase(),R3=Sd[0].toUpperCase()+Sd.slice(1);Qr(b3,"on"+R3)}Qr(t1,"onAnimationEnd"),Qr(n1,"onAnimationIteration"),Qr(i1,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(r1,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C3=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function o1(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,td(u,s,void 0,i),i.currentTarget=null}function l1(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],p=u.event;u=u.listeners;e:{var y=void 0;if(s)for(var A=u.length-1;0<=A;A--){var N=u[A],V=N.instance,se=N.currentTarget;if(N=N.listener,V!==y&&p.isPropagationStopped())break e;o1(p,N,se),y=V}else for(A=0;A<u.length;A++){if(N=u[A],V=N.instance,se=N.currentTarget,N=N.listener,V!==y&&p.isPropagationStopped())break e;o1(p,N,se),y=V}}}if(Us)throw i=Wr,Us=!1,Wr=null,i}function Wt(i,s){var l=s[Cd];l===void 0&&(l=s[Cd]=new Set);var u=i+"__bubble";l.has(u)||(c1(s,i,2,!1),l.add(u))}function Md(i,s,l){var u=0;s&&(u|=4),c1(l,i,u,s)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function rl(i){if(!i[Pc]){i[Pc]=!0,r.forEach(function(l){l!=="selectionchange"&&(C3.has(l)||Md(l,!1,i),Md(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Pc]||(s[Pc]=!0,Md("selectionchange",!1,s))}}function c1(i,s,l,u){switch(Im(s)){case 1:var p=Gy;break;case 4:p=Wy;break;default:p=sd}l=p.bind(null,s,l,i),p=void 0,!ki||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Ed(i,s,l,u,p){var y=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var N=u.stateNode.containerInfo;if(N===p||N.nodeType===8&&N.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;A=A.return}for(;N!==null;){if(A=Os(N),A===null)return;if(V=A.tag,V===5||V===6){u=y=A;continue e}N=N.parentNode}}u=u.return}di(function(){var se=y,xe=Te(l),Me=[];e:{var ve=s1.get(i);if(ve!==void 0){var Oe=ld,He=i;switch(i){case"keypress":if(wc(l)===0)break e;case"keydown":case"keyup":Oe=s3;break;case"focusin":He="focus",Oe=fd;break;case"focusout":He="blur",Oe=fd;break;case"beforeblur":case"afterblur":Oe=fd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=qy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=l3;break;case t1:case n1:case i1:Oe=Zy;break;case r1:Oe=u3;break;case"scroll":Oe=jy;break;case"wheel":Oe=d3;break;case"copy":case"cut":case"paste":Oe=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Om}var We=(s&4)!==0,un=!We&&i==="scroll",K=We?ve!==null?ve+"Capture":null:ve;We=[];for(var j=se,ee;j!==null;){ee=j;var we=ee.stateNode;if(ee.tag===5&&we!==null&&(ee=we,K!==null&&(we=Hr(j,K),we!=null&&We.push(sl(j,we,ee)))),un)break;j=j.return}0<We.length&&(ve=new Oe(ve,He,null,l,xe),Me.push({event:ve,listeners:We}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Oe=i==="mouseout"||i==="pointerout",ve&&l!==q&&(He=l.relatedTarget||l.fromElement)&&(Os(He)||He[xr]))break e;if((Oe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(He=l.relatedTarget||l.toElement,Oe=se,He=He?Os(He):null,He!==null&&(un=_r(He),He!==un||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=se),Oe!==He)){if(We=Um,we="onMouseLeave",K="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(We=Om,we="onPointerLeave",K="onPointerEnter",j="pointer"),un=Oe==null?ve:Na(Oe),ee=He==null?ve:Na(He),ve=new We(we,j+"leave",Oe,l,xe),ve.target=un,ve.relatedTarget=ee,we=null,Os(xe)===se&&(We=new We(K,j+"enter",He,l,xe),We.target=ee,We.relatedTarget=un,we=We),un=we,Oe&&He)t:{for(We=Oe,K=He,j=0,ee=We;ee;ee=Ia(ee))j++;for(ee=0,we=K;we;we=Ia(we))ee++;for(;0<j-ee;)We=Ia(We),j--;for(;0<ee-j;)K=Ia(K),ee--;for(;j--;){if(We===K||K!==null&&We===K.alternate)break t;We=Ia(We),K=Ia(K)}We=null}else We=null;Oe!==null&&u1(Me,ve,Oe,We,!1),He!==null&&un!==null&&u1(Me,un,He,We,!0)}}e:{if(ve=se?Na(se):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Xe=x3;else if(Gm(ve))if(jm)Xe=E3;else{Xe=S3;var Je=y3}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=M3);if(Xe&&(Xe=Xe(i,se))){Wm(Me,Xe,l,xe);break e}Je&&Je(i,ve,se),i==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&lt(ve,"number",ve.value)}switch(Je=se?Na(se):window,i){case"focusin":(Gm(Je)||Je.contentEditable==="true")&&(Pa=Je,vd=se,nl=null);break;case"focusout":nl=vd=Pa=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,Jm(Me,l,xe);break;case"selectionchange":if(A3)break;case"keydown":case"keyup":Jm(Me,l,xe)}var et;if(hd)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Ca?Vm(i,l)&&(at="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(km&&l.locale!=="ko"&&(Ca||at!=="onCompositionStart"?at==="onCompositionEnd"&&Ca&&(et=Dm()):(Kr=xe,od="value"in Kr?Kr.value:Kr.textContent,Ca=!0)),Je=Lc(se,at),0<Je.length&&(at=new Fm(at,i,null,l,xe),Me.push({event:at,listeners:Je}),et?at.data=et:(et=Hm(l),et!==null&&(at.data=et)))),(et=p3?m3(i,l):g3(i,l))&&(se=Lc(se,"onBeforeInput"),0<se.length&&(xe=new Fm("onBeforeInput","beforeinput",null,l,xe),Me.push({event:xe,listeners:se}),xe.data=et))}l1(Me,s)})}function sl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Lc(i,s){for(var l=s+"Capture",u=[];i!==null;){var p=i,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=Hr(i,l),y!=null&&u.unshift(sl(i,y,p)),y=Hr(i,s),y!=null&&u.push(sl(i,y,p))),i=i.return}return u}function Ia(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function u1(i,s,l,u,p){for(var y=s._reactName,A=[];l!==null&&l!==u;){var N=l,V=N.alternate,se=N.stateNode;if(V!==null&&V===u)break;N.tag===5&&se!==null&&(N=se,p?(V=Hr(l,y),V!=null&&A.unshift(sl(l,V,N))):p||(V=Hr(l,y),V!=null&&A.push(sl(l,V,N)))),l=l.return}A.length!==0&&i.push({event:s,listeners:A})}var P3=/\r\n?/g,L3=/\u0000|\uFFFD/g;function f1(i){return(typeof i=="string"?i:""+i).replace(P3,`
`).replace(L3,"")}function Ic(i,s,l){if(s=f1(s),f1(i)!==s&&l)throw Error(t(425))}function Dc(){}var wd=null,Td=null;function Ad(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,I3=typeof clearTimeout=="function"?clearTimeout:void 0,d1=typeof Promise=="function"?Promise:void 0,D3=typeof queueMicrotask=="function"?queueMicrotask:typeof d1<"u"?function(i){return d1.resolve(null).then(i).catch(N3)}:bd;function N3(i){setTimeout(function(){throw i})}function Rd(i,s){var l=s,u=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){i.removeChild(p),$o(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);$o(s)}function Jr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function h1(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Da=Math.random().toString(36).slice(2),er="__reactFiber$"+Da,al="__reactProps$"+Da,xr="__reactContainer$"+Da,Cd="__reactEvents$"+Da,U3="__reactListeners$"+Da,F3="__reactHandles$"+Da;function Os(i){var s=i[er];if(s)return s;for(var l=i.parentNode;l;){if(s=l[xr]||l[er]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=h1(i);i!==null;){if(l=i[er])return l;i=h1(i)}return s}i=l,l=i.parentNode}return null}function ol(i){return i=i[er]||i[xr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Na(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Nc(i){return i[al]||null}var Pd=[],Ua=-1;function es(i){return{current:i}}function jt(i){0>Ua||(i.current=Pd[Ua],Pd[Ua]=null,Ua--)}function Vt(i,s){Ua++,Pd[Ua]=i.current,i.current=s}var ts={},Fn=es(ts),Kn=es(!1),ks=ts;function Fa(i,s){var l=i.type.contextTypes;if(!l)return ts;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Qn(i){return i=i.childContextTypes,i!=null}function Uc(){jt(Kn),jt(Fn)}function p1(i,s,l){if(Fn.current!==ts)throw Error(t(168));Vt(Fn,s),Vt(Kn,l)}function m1(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,Se(i)||"Unknown",p));return le({},l,u)}function Fc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||ts,ks=Fn.current,Vt(Fn,i),Vt(Kn,Kn.current),!0}function g1(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=m1(i,s,ks),u.__reactInternalMemoizedMergedChildContext=i,jt(Kn),jt(Fn),Vt(Fn,i)):jt(Kn),Vt(Kn,l)}var yr=null,Oc=!1,Ld=!1;function v1(i){yr===null?yr=[i]:yr.push(i)}function O3(i){Oc=!0,v1(i)}function ns(){if(!Ld&&yr!==null){Ld=!0;var i=0,s=Ut;try{var l=yr;for(Ut=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}yr=null,Oc=!1}catch(p){throw yr!==null&&(yr=yr.slice(i+1)),Z(nt,ns),p}finally{Ut=s,Ld=!1}}return null}var Oa=[],ka=0,kc=null,zc=0,Ri=[],Ci=0,zs=null,Sr=1,Mr="";function Bs(i,s){Oa[ka++]=zc,Oa[ka++]=kc,kc=i,zc=s}function _1(i,s,l){Ri[Ci++]=Sr,Ri[Ci++]=Mr,Ri[Ci++]=zs,zs=i;var u=Sr;i=Mr;var p=32-Nt(u)-1;u&=~(1<<p),l+=1;var y=32-Nt(s)+p;if(30<y){var A=p-p%5;y=(u&(1<<A)-1).toString(32),u>>=A,p-=A,Sr=1<<32-Nt(s)+p|l<<p|u,Mr=y+i}else Sr=1<<y|l<<p|u,Mr=i}function Id(i){i.return!==null&&(Bs(i,1),_1(i,1,0))}function Dd(i){for(;i===kc;)kc=Oa[--ka],Oa[ka]=null,zc=Oa[--ka],Oa[ka]=null;for(;i===zs;)zs=Ri[--Ci],Ri[Ci]=null,Mr=Ri[--Ci],Ri[Ci]=null,Sr=Ri[--Ci],Ri[Ci]=null}var gi=null,vi=null,Jt=!1,Bi=null;function x1(i,s){var l=Di(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function y1(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,gi=i,vi=Jr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,gi=i,vi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=zs!==null?{id:Sr,overflow:Mr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Di(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,gi=i,vi=null,!0):!1;default:return!1}}function Nd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ud(i){if(Jt){var s=vi;if(s){var l=s;if(!y1(i,s)){if(Nd(i))throw Error(t(418));s=Jr(l.nextSibling);var u=gi;s&&y1(i,s)?x1(u,l):(i.flags=i.flags&-4097|2,Jt=!1,gi=i)}}else{if(Nd(i))throw Error(t(418));i.flags=i.flags&-4097|2,Jt=!1,gi=i}}}function S1(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;gi=i}function Bc(i){if(i!==gi)return!1;if(!Jt)return S1(i),Jt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Ad(i.type,i.memoizedProps)),s&&(s=vi)){if(Nd(i))throw M1(),Error(t(418));for(;s;)x1(i,s),s=Jr(s.nextSibling)}if(S1(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){vi=Jr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}vi=null}}else vi=gi?Jr(i.stateNode.nextSibling):null;return!0}function M1(){for(var i=vi;i;)i=Jr(i.nextSibling)}function za(){vi=gi=null,Jt=!1}function Fd(i){Bi===null?Bi=[i]:Bi.push(i)}var k3=b.ReactCurrentBatchConfig;function ll(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var p=u,y=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(A){var N=p.refs;A===null?delete N[y]:N[y]=A},s._stringRef=y,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Vc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function E1(i){var s=i._init;return s(i._payload)}function w1(i){function s(K,j){if(i){var ee=K.deletions;ee===null?(K.deletions=[j],K.flags|=16):ee.push(j)}}function l(K,j){if(!i)return null;for(;j!==null;)s(K,j),j=j.sibling;return null}function u(K,j){for(K=new Map;j!==null;)j.key!==null?K.set(j.key,j):K.set(j.index,j),j=j.sibling;return K}function p(K,j){return K=us(K,j),K.index=0,K.sibling=null,K}function y(K,j,ee){return K.index=ee,i?(ee=K.alternate,ee!==null?(ee=ee.index,ee<j?(K.flags|=2,j):ee):(K.flags|=2,j)):(K.flags|=1048576,j)}function A(K){return i&&K.alternate===null&&(K.flags|=2),K}function N(K,j,ee,we){return j===null||j.tag!==6?(j=bh(ee,K.mode,we),j.return=K,j):(j=p(j,ee),j.return=K,j)}function V(K,j,ee,we){var Xe=ee.type;return Xe===D?xe(K,j,ee.props.children,we,ee.key):j!==null&&(j.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&E1(Xe)===j.type)?(we=p(j,ee.props),we.ref=ll(K,j,ee),we.return=K,we):(we=fu(ee.type,ee.key,ee.props,null,K.mode,we),we.ref=ll(K,j,ee),we.return=K,we)}function se(K,j,ee,we){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Rh(ee,K.mode,we),j.return=K,j):(j=p(j,ee.children||[]),j.return=K,j)}function xe(K,j,ee,we,Xe){return j===null||j.tag!==7?(j=Ys(ee,K.mode,we,Xe),j.return=K,j):(j=p(j,ee),j.return=K,j)}function Me(K,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number")return j=bh(""+j,K.mode,ee),j.return=K,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return ee=fu(j.type,j.key,j.props,null,K.mode,ee),ee.ref=ll(K,null,j),ee.return=K,ee;case I:return j=Rh(j,K.mode,ee),j.return=K,j;case te:var we=j._init;return Me(K,we(j._payload),ee)}if(F(j)||ae(j))return j=Ys(j,K.mode,ee,null),j.return=K,j;Vc(K,j)}return null}function ve(K,j,ee,we){var Xe=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Xe!==null?null:N(K,j,""+ee,we);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===Xe?V(K,j,ee,we):null;case I:return ee.key===Xe?se(K,j,ee,we):null;case te:return Xe=ee._init,ve(K,j,Xe(ee._payload),we)}if(F(ee)||ae(ee))return Xe!==null?null:xe(K,j,ee,we,null);Vc(K,ee)}return null}function Oe(K,j,ee,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(ee)||null,N(j,K,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case U:return K=K.get(we.key===null?ee:we.key)||null,V(j,K,we,Xe);case I:return K=K.get(we.key===null?ee:we.key)||null,se(j,K,we,Xe);case te:var Je=we._init;return Oe(K,j,ee,Je(we._payload),Xe)}if(F(we)||ae(we))return K=K.get(ee)||null,xe(j,K,we,Xe,null);Vc(j,we)}return null}function He(K,j,ee,we){for(var Xe=null,Je=null,et=j,at=j=0,An=null;et!==null&&at<ee.length;at++){et.index>at?(An=et,et=null):An=et.sibling;var Ct=ve(K,et,ee[at],we);if(Ct===null){et===null&&(et=An);break}i&&et&&Ct.alternate===null&&s(K,et),j=y(Ct,j,at),Je===null?Xe=Ct:Je.sibling=Ct,Je=Ct,et=An}if(at===ee.length)return l(K,et),Jt&&Bs(K,at),Xe;if(et===null){for(;at<ee.length;at++)et=Me(K,ee[at],we),et!==null&&(j=y(et,j,at),Je===null?Xe=et:Je.sibling=et,Je=et);return Jt&&Bs(K,at),Xe}for(et=u(K,et);at<ee.length;at++)An=Oe(et,K,at,ee[at],we),An!==null&&(i&&An.alternate!==null&&et.delete(An.key===null?at:An.key),j=y(An,j,at),Je===null?Xe=An:Je.sibling=An,Je=An);return i&&et.forEach(function(fs){return s(K,fs)}),Jt&&Bs(K,at),Xe}function We(K,j,ee,we){var Xe=ae(ee);if(typeof Xe!="function")throw Error(t(150));if(ee=Xe.call(ee),ee==null)throw Error(t(151));for(var Je=Xe=null,et=j,at=j=0,An=null,Ct=ee.next();et!==null&&!Ct.done;at++,Ct=ee.next()){et.index>at?(An=et,et=null):An=et.sibling;var fs=ve(K,et,Ct.value,we);if(fs===null){et===null&&(et=An);break}i&&et&&fs.alternate===null&&s(K,et),j=y(fs,j,at),Je===null?Xe=fs:Je.sibling=fs,Je=fs,et=An}if(Ct.done)return l(K,et),Jt&&Bs(K,at),Xe;if(et===null){for(;!Ct.done;at++,Ct=ee.next())Ct=Me(K,Ct.value,we),Ct!==null&&(j=y(Ct,j,at),Je===null?Xe=Ct:Je.sibling=Ct,Je=Ct);return Jt&&Bs(K,at),Xe}for(et=u(K,et);!Ct.done;at++,Ct=ee.next())Ct=Oe(et,K,at,Ct.value,we),Ct!==null&&(i&&Ct.alternate!==null&&et.delete(Ct.key===null?at:Ct.key),j=y(Ct,j,at),Je===null?Xe=Ct:Je.sibling=Ct,Je=Ct);return i&&et.forEach(function(vS){return s(K,vS)}),Jt&&Bs(K,at),Xe}function un(K,j,ee,we){if(typeof ee=="object"&&ee!==null&&ee.type===D&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var Xe=ee.key,Je=j;Je!==null;){if(Je.key===Xe){if(Xe=ee.type,Xe===D){if(Je.tag===7){l(K,Je.sibling),j=p(Je,ee.props.children),j.return=K,K=j;break e}}else if(Je.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===te&&E1(Xe)===Je.type){l(K,Je.sibling),j=p(Je,ee.props),j.ref=ll(K,Je,ee),j.return=K,K=j;break e}l(K,Je);break}else s(K,Je);Je=Je.sibling}ee.type===D?(j=Ys(ee.props.children,K.mode,we,ee.key),j.return=K,K=j):(we=fu(ee.type,ee.key,ee.props,null,K.mode,we),we.ref=ll(K,j,ee),we.return=K,K=we)}return A(K);case I:e:{for(Je=ee.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){l(K,j.sibling),j=p(j,ee.children||[]),j.return=K,K=j;break e}else{l(K,j);break}else s(K,j);j=j.sibling}j=Rh(ee,K.mode,we),j.return=K,K=j}return A(K);case te:return Je=ee._init,un(K,j,Je(ee._payload),we)}if(F(ee))return He(K,j,ee,we);if(ae(ee))return We(K,j,ee,we);Vc(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,j!==null&&j.tag===6?(l(K,j.sibling),j=p(j,ee),j.return=K,K=j):(l(K,j),j=bh(ee,K.mode,we),j.return=K,K=j),A(K)):l(K,j)}return un}var Ba=w1(!0),T1=w1(!1),Hc=es(null),Gc=null,Va=null,Od=null;function kd(){Od=Va=Gc=null}function zd(i){var s=Hc.current;jt(Hc),i._currentValue=s}function Bd(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function Ha(i,s){Gc=i,Od=Va=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Jn=!0),i.firstContext=null)}function Pi(i){var s=i._currentValue;if(Od!==i)if(i={context:i,memoizedValue:s,next:null},Va===null){if(Gc===null)throw Error(t(308));Va=i,Gc.dependencies={lanes:0,firstContext:i}}else Va=Va.next=i;return s}var Vs=null;function Vd(i){Vs===null?Vs=[i]:Vs.push(i)}function A1(i,s,l,u){var p=s.interleaved;return p===null?(l.next=l,Vd(s)):(l.next=p.next,p.next=l),s.interleaved=l,Er(i,u)}function Er(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var is=!1;function Hd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b1(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function wr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function rs(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(At&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,Er(i,l)}return p=u.interleaved,p===null?(s.next=s,Vd(u)):(s.next=p.next,p.next=s),u.interleaved=s,Er(i,l)}function Wc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,nd(i,l)}}function R1(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=A:y=y.next=A,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function jc(i,s,l,u){var p=i.updateQueue;is=!1;var y=p.firstBaseUpdate,A=p.lastBaseUpdate,N=p.shared.pending;if(N!==null){p.shared.pending=null;var V=N,se=V.next;V.next=null,A===null?y=se:A.next=se,A=V;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==A&&(N===null?xe.firstBaseUpdate=se:N.next=se,xe.lastBaseUpdate=V))}if(y!==null){var Me=p.baseState;A=0,xe=se=V=null,N=y;do{var ve=N.lane,Oe=N.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Oe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=i,We=N;switch(ve=s,Oe=l,We.tag){case 1:if(He=We.payload,typeof He=="function"){Me=He.call(Oe,Me,ve);break e}Me=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,ve=typeof He=="function"?He.call(Oe,Me,ve):He,ve==null)break e;Me=le({},Me,ve);break e;case 2:is=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,ve=p.effects,ve===null?p.effects=[N]:ve.push(N))}else Oe={eventTime:Oe,lane:ve,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(se=xe=Oe,V=Me):xe=xe.next=Oe,A|=ve;if(N=N.next,N===null){if(N=p.shared.pending,N===null)break;ve=N,N=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(V=Me),p.baseState=V,p.firstBaseUpdate=se,p.lastBaseUpdate=xe,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);Ws|=A,i.lanes=A,i.memoizedState=Me}}function C1(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var cl={},tr=es(cl),ul=es(cl),fl=es(cl);function Hs(i){if(i===cl)throw Error(t(174));return i}function Gd(i,s){switch(Vt(fl,s),Vt(ul,i),Vt(tr,cl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Le(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Le(s,i)}jt(tr),Vt(tr,s)}function Ga(){jt(tr),jt(ul),jt(fl)}function P1(i){Hs(fl.current);var s=Hs(tr.current),l=Le(s,i.type);s!==l&&(Vt(ul,i),Vt(tr,l))}function Wd(i){ul.current===i&&(jt(tr),jt(ul))}var rn=es(0);function Xc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var jd=[];function Xd(){for(var i=0;i<jd.length;i++)jd[i]._workInProgressVersionPrimary=null;jd.length=0}var qc=b.ReactCurrentDispatcher,qd=b.ReactCurrentBatchConfig,Gs=0,sn=null,vn=null,wn=null,Yc=!1,dl=!1,hl=0,z3=0;function On(){throw Error(t(321))}function Yd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!zi(i[l],s[l]))return!1;return!0}function $d(i,s,l,u,p,y){if(Gs=y,sn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,qc.current=i===null||i.memoizedState===null?G3:W3,i=l(u,p),dl){y=0;do{if(dl=!1,hl=0,25<=y)throw Error(t(301));y+=1,wn=vn=null,s.updateQueue=null,qc.current=j3,i=l(u,p)}while(dl)}if(qc.current=Kc,s=vn!==null&&vn.next!==null,Gs=0,wn=vn=sn=null,Yc=!1,s)throw Error(t(300));return i}function Zd(){var i=hl!==0;return hl=0,i}function nr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?sn.memoizedState=wn=i:wn=wn.next=i,wn}function Li(){if(vn===null){var i=sn.alternate;i=i!==null?i.memoizedState:null}else i=vn.next;var s=wn===null?sn.memoizedState:wn.next;if(s!==null)wn=s,vn=i;else{if(i===null)throw Error(t(310));vn=i,i={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},wn===null?sn.memoizedState=wn=i:wn=wn.next=i}return wn}function pl(i,s){return typeof s=="function"?s(i):s}function Kd(i){var s=Li(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=vn,p=u.baseQueue,y=l.pending;if(y!==null){if(p!==null){var A=p.next;p.next=y.next,y.next=A}u.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,u=u.baseState;var N=A=null,V=null,se=y;do{var xe=se.lane;if((Gs&xe)===xe)V!==null&&(V=V.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:i(u,se.action);else{var Me={lane:xe,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};V===null?(N=V=Me,A=u):V=V.next=Me,sn.lanes|=xe,Ws|=xe}se=se.next}while(se!==null&&se!==y);V===null?A=u:V.next=N,zi(u,s.memoizedState)||(Jn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=V,l.lastRenderedState=u}if(i=l.interleaved,i!==null){p=i;do y=p.lane,sn.lanes|=y,Ws|=y,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Qd(i){var s=Li(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do y=i(y,A.action),A=A.next;while(A!==p);zi(y,s.memoizedState)||(Jn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,u]}function L1(){}function I1(i,s){var l=sn,u=Li(),p=s(),y=!zi(u.memoizedState,p);if(y&&(u.memoizedState=p,Jn=!0),u=u.queue,Jd(U1.bind(null,l,u,i),[i]),u.getSnapshot!==s||y||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,ml(9,N1.bind(null,l,u,p,s),void 0,null),Tn===null)throw Error(t(349));(Gs&30)!==0||D1(l,s,p)}return p}function D1(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=sn.updateQueue,s===null?(s={lastEffect:null,stores:null},sn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function N1(i,s,l,u){s.value=l,s.getSnapshot=u,F1(s)&&O1(i)}function U1(i,s,l){return l(function(){F1(s)&&O1(i)})}function F1(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!zi(i,l)}catch{return!0}}function O1(i){var s=Er(i,1);s!==null&&Wi(s,i,1,-1)}function k1(i){var s=nr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:i},s.queue=i,i=i.dispatch=H3.bind(null,sn,i),[s.memoizedState,i]}function ml(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=sn.updateQueue,s===null?(s={lastEffect:null,stores:null},sn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function z1(){return Li().memoizedState}function $c(i,s,l,u){var p=nr();sn.flags|=i,p.memoizedState=ml(1|s,l,void 0,u===void 0?null:u)}function Zc(i,s,l,u){var p=Li();u=u===void 0?null:u;var y=void 0;if(vn!==null){var A=vn.memoizedState;if(y=A.destroy,u!==null&&Yd(u,A.deps)){p.memoizedState=ml(s,l,y,u);return}}sn.flags|=i,p.memoizedState=ml(1|s,l,y,u)}function B1(i,s){return $c(8390656,8,i,s)}function Jd(i,s){return Zc(2048,8,i,s)}function V1(i,s){return Zc(4,2,i,s)}function H1(i,s){return Zc(4,4,i,s)}function G1(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function W1(i,s,l){return l=l!=null?l.concat([i]):null,Zc(4,4,G1.bind(null,s,i),l)}function eh(){}function j1(i,s){var l=Li();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Yd(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function X1(i,s){var l=Li();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&Yd(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function q1(i,s,l){return(Gs&21)===0?(i.baseState&&(i.baseState=!1,Jn=!0),i.memoizedState=l):(zi(l,s)||(l=_c(),sn.lanes|=l,Ws|=l,i.baseState=!0),s)}function B3(i,s){var l=Ut;Ut=l!==0&&4>l?l:4,i(!0);var u=qd.transition;qd.transition={};try{i(!1),s()}finally{Ut=l,qd.transition=u}}function Y1(){return Li().memoizedState}function V3(i,s,l){var u=ls(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},$1(i))Z1(s,l);else if(l=A1(i,s,l,u),l!==null){var p=Xn();Wi(l,i,u,p),K1(l,s,u)}}function H3(i,s,l){var u=ls(i),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if($1(i))Z1(s,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var A=s.lastRenderedState,N=y(A,l);if(p.hasEagerState=!0,p.eagerState=N,zi(N,A)){var V=s.interleaved;V===null?(p.next=p,Vd(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}l=A1(i,s,p,u),l!==null&&(p=Xn(),Wi(l,i,u,p),K1(l,s,u))}}function $1(i){var s=i.alternate;return i===sn||s!==null&&s===sn}function Z1(i,s){dl=Yc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function K1(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,nd(i,l)}}var Kc={readContext:Pi,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},G3={readContext:Pi,useCallback:function(i,s){return nr().memoizedState=[i,s===void 0?null:s],i},useContext:Pi,useEffect:B1,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,$c(4194308,4,G1.bind(null,s,i),l)},useLayoutEffect:function(i,s){return $c(4194308,4,i,s)},useInsertionEffect:function(i,s){return $c(4,2,i,s)},useMemo:function(i,s){var l=nr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=nr();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=V3.bind(null,sn,i),[u.memoizedState,i]},useRef:function(i){var s=nr();return i={current:i},s.memoizedState=i},useState:k1,useDebugValue:eh,useDeferredValue:function(i){return nr().memoizedState=i},useTransition:function(){var i=k1(!1),s=i[0];return i=B3.bind(null,i[1]),nr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=sn,p=nr();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Tn===null)throw Error(t(349));(Gs&30)!==0||D1(u,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,B1(U1.bind(null,u,y,i),[i]),u.flags|=2048,ml(9,N1.bind(null,u,y,l,s),void 0,null),l},useId:function(){var i=nr(),s=Tn.identifierPrefix;if(Jt){var l=Mr,u=Sr;l=(u&~(1<<32-Nt(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=hl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=z3++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},W3={readContext:Pi,useCallback:j1,useContext:Pi,useEffect:Jd,useImperativeHandle:W1,useInsertionEffect:V1,useLayoutEffect:H1,useMemo:X1,useReducer:Kd,useRef:z1,useState:function(){return Kd(pl)},useDebugValue:eh,useDeferredValue:function(i){var s=Li();return q1(s,vn.memoizedState,i)},useTransition:function(){var i=Kd(pl)[0],s=Li().memoizedState;return[i,s]},useMutableSource:L1,useSyncExternalStore:I1,useId:Y1,unstable_isNewReconciler:!1},j3={readContext:Pi,useCallback:j1,useContext:Pi,useEffect:Jd,useImperativeHandle:W1,useInsertionEffect:V1,useLayoutEffect:H1,useMemo:X1,useReducer:Qd,useRef:z1,useState:function(){return Qd(pl)},useDebugValue:eh,useDeferredValue:function(i){var s=Li();return vn===null?s.memoizedState=i:q1(s,vn.memoizedState,i)},useTransition:function(){var i=Qd(pl)[0],s=Li().memoizedState;return[i,s]},useMutableSource:L1,useSyncExternalStore:I1,useId:Y1,unstable_isNewReconciler:!1};function Vi(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function th(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Qc={isMounted:function(i){return(i=i._reactInternals)?_r(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=Xn(),p=ls(i),y=wr(u,p);y.payload=s,l!=null&&(y.callback=l),s=rs(i,y,p),s!==null&&(Wi(s,i,p,u),Wc(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=Xn(),p=ls(i),y=wr(u,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=rs(i,y,p),s!==null&&(Wi(s,i,p,u),Wc(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),u=ls(i),p=wr(l,u);p.tag=2,s!=null&&(p.callback=s),s=rs(i,p,u),s!==null&&(Wi(s,i,u,l),Wc(s,i,u))}};function Q1(i,s,l,u,p,y,A){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,y,A):s.prototype&&s.prototype.isPureReactComponent?!tl(l,u)||!tl(p,y):!0}function J1(i,s,l){var u=!1,p=ts,y=s.contextType;return typeof y=="object"&&y!==null?y=Pi(y):(p=Qn(s)?ks:Fn.current,u=s.contextTypes,y=(u=u!=null)?Fa(i,p):ts),s=new s(l,y),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Qc,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=y),s}function eg(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&Qc.enqueueReplaceState(s,s.state,null)}function nh(i,s,l,u){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Hd(i);var y=s.contextType;typeof y=="object"&&y!==null?p.context=Pi(y):(y=Qn(s)?ks:Fn.current,p.context=Fa(i,y)),p.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(th(i,s,y,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Qc.enqueueReplaceState(p,p.state,null),jc(i,l,p,u),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Wa(i,s){try{var l="",u=s;do l+=de(u),u=u.return;while(u);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:s,stack:p,digest:null}}function ih(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function rh(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var X3=typeof WeakMap=="function"?WeakMap:Map;function tg(i,s,l){l=wr(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){su||(su=!0,xh=u),rh(i,s)},l}function ng(i,s,l){l=wr(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;l.payload=function(){return u(p)},l.callback=function(){rh(i,s)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){rh(i,s),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function ig(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new X3;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(l)||(p.add(l),i=aS.bind(null,i,s,l),s.then(i,i))}function rg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function sg(i,s,l,u,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=wr(-1,1),s.tag=2,rs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var q3=b.ReactCurrentOwner,Jn=!1;function jn(i,s,l,u){s.child=i===null?T1(s,null,l,u):Ba(s,i.child,l,u)}function ag(i,s,l,u,p){l=l.render;var y=s.ref;return Ha(s,p),u=$d(i,s,l,u,y,p),l=Zd(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Tr(i,s,p)):(Jt&&l&&Id(s),s.flags|=1,jn(i,s,u,p),s.child)}function og(i,s,l,u,p){if(i===null){var y=l.type;return typeof y=="function"&&!Ah(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,lg(i,s,y,u,p)):(i=fu(l.type,null,u,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(y=i.child,(i.lanes&p)===0){var A=y.memoizedProps;if(l=l.compare,l=l!==null?l:tl,l(A,u)&&i.ref===s.ref)return Tr(i,s,p)}return s.flags|=1,i=us(y,u),i.ref=s.ref,i.return=s,s.child=i}function lg(i,s,l,u,p){if(i!==null){var y=i.memoizedProps;if(tl(y,u)&&i.ref===s.ref)if(Jn=!1,s.pendingProps=u=y,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Jn=!0);else return s.lanes=i.lanes,Tr(i,s,p)}return sh(i,s,l,u,p)}function cg(i,s,l){var u=s.pendingProps,p=u.children,y=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Xa,_i),_i|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Vt(Xa,_i),_i|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=y!==null?y.baseLanes:l,Vt(Xa,_i),_i|=u}else y!==null?(u=y.baseLanes|l,s.memoizedState=null):u=l,Vt(Xa,_i),_i|=u;return jn(i,s,p,l),s.child}function ug(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function sh(i,s,l,u,p){var y=Qn(l)?ks:Fn.current;return y=Fa(s,y),Ha(s,p),l=$d(i,s,l,u,y,p),u=Zd(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Tr(i,s,p)):(Jt&&u&&Id(s),s.flags|=1,jn(i,s,l,p),s.child)}function fg(i,s,l,u,p){if(Qn(l)){var y=!0;Fc(s)}else y=!1;if(Ha(s,p),s.stateNode===null)eu(i,s),J1(s,l,u),nh(s,l,u,p),u=!0;else if(i===null){var A=s.stateNode,N=s.memoizedProps;A.props=N;var V=A.context,se=l.contextType;typeof se=="object"&&se!==null?se=Pi(se):(se=Qn(l)?ks:Fn.current,se=Fa(s,se));var xe=l.getDerivedStateFromProps,Me=typeof xe=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(N!==u||V!==se)&&eg(s,A,u,se),is=!1;var ve=s.memoizedState;A.state=ve,jc(s,u,A,p),V=s.memoizedState,N!==u||ve!==V||Kn.current||is?(typeof xe=="function"&&(th(s,l,xe,u),V=s.memoizedState),(N=is||Q1(s,l,N,u,ve,V,se))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=V),A.props=u,A.state=V,A.context=se,u=N):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,b1(i,s),N=s.memoizedProps,se=s.type===s.elementType?N:Vi(s.type,N),A.props=se,Me=s.pendingProps,ve=A.context,V=l.contextType,typeof V=="object"&&V!==null?V=Pi(V):(V=Qn(l)?ks:Fn.current,V=Fa(s,V));var Oe=l.getDerivedStateFromProps;(xe=typeof Oe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(N!==Me||ve!==V)&&eg(s,A,u,V),is=!1,ve=s.memoizedState,A.state=ve,jc(s,u,A,p);var He=s.memoizedState;N!==Me||ve!==He||Kn.current||is?(typeof Oe=="function"&&(th(s,l,Oe,u),He=s.memoizedState),(se=is||Q1(s,l,se,u,ve,He,V)||!1)?(xe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,He,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,He,V)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||N===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=He),A.props=u,A.state=He,A.context=V,u=se):(typeof A.componentDidUpdate!="function"||N===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),u=!1)}return ah(i,s,l,u,y,p)}function ah(i,s,l,u,p,y){ug(i,s);var A=(s.flags&128)!==0;if(!u&&!A)return p&&g1(s,l,!1),Tr(i,s,y);u=s.stateNode,q3.current=s;var N=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&A?(s.child=Ba(s,i.child,null,y),s.child=Ba(s,null,N,y)):jn(i,s,N,y),s.memoizedState=u.state,p&&g1(s,l,!0),s.child}function dg(i){var s=i.stateNode;s.pendingContext?p1(i,s.pendingContext,s.pendingContext!==s.context):s.context&&p1(i,s.context,!1),Gd(i,s.containerInfo)}function hg(i,s,l,u,p){return za(),Fd(p),s.flags|=256,jn(i,s,l,u),s.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function lh(i){return{baseLanes:i,cachePool:null,transitions:null}}function pg(i,s,l){var u=s.pendingProps,p=rn.current,y=!1,A=(s.flags&128)!==0,N;if((N=A)||(N=i!==null&&i.memoizedState===null?!1:(p&2)!==0),N?(y=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Vt(rn,p&1),i===null)return Ud(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,i=u.fallback,y?(u=s.mode,y=s.child,A={mode:"hidden",children:A},(u&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=A):y=du(A,u,0,null),i=Ys(i,u,l,null),y.return=s,i.return=s,y.sibling=i,s.child=y,s.child.memoizedState=lh(l),s.memoizedState=oh,i):ch(s,A));if(p=i.memoizedState,p!==null&&(N=p.dehydrated,N!==null))return Y3(i,s,A,u,N,p,l);if(y){y=u.fallback,A=s.mode,p=i.child,N=p.sibling;var V={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=V,s.deletions=null):(u=us(p,V),u.subtreeFlags=p.subtreeFlags&14680064),N!==null?y=us(N,y):(y=Ys(y,A,l,null),y.flags|=2),y.return=s,u.return=s,u.sibling=y,s.child=u,u=y,y=s.child,A=i.child.memoizedState,A=A===null?lh(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},y.memoizedState=A,y.childLanes=i.childLanes&~l,s.memoizedState=oh,u}return y=i.child,i=y.sibling,u=us(y,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function ch(i,s){return s=du({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Jc(i,s,l,u){return u!==null&&Fd(u),Ba(s,i.child,null,l),i=ch(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Y3(i,s,l,u,p,y,A){if(l)return s.flags&256?(s.flags&=-257,u=ih(Error(t(422))),Jc(i,s,A,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(y=u.fallback,p=s.mode,u=du({mode:"visible",children:u.children},p,0,null),y=Ys(y,p,A,null),y.flags|=2,u.return=s,y.return=s,u.sibling=y,s.child=u,(s.mode&1)!==0&&Ba(s,i.child,null,A),s.child.memoizedState=lh(A),s.memoizedState=oh,y);if((s.mode&1)===0)return Jc(i,s,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var N=u.dgst;return u=N,y=Error(t(419)),u=ih(y,u,void 0),Jc(i,s,A,u)}if(N=(A&i.childLanes)!==0,Jn||N){if(u=Tn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Er(i,p),Wi(u,i,p,-1))}return Th(),u=ih(Error(t(421))),Jc(i,s,A,u)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=oS.bind(null,i),p._reactRetry=s,null):(i=y.treeContext,vi=Jr(p.nextSibling),gi=s,Jt=!0,Bi=null,i!==null&&(Ri[Ci++]=Sr,Ri[Ci++]=Mr,Ri[Ci++]=zs,Sr=i.id,Mr=i.overflow,zs=s),s=ch(s,u.children),s.flags|=4096,s)}function mg(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),Bd(i.return,s,l)}function uh(i,s,l,u,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=l,y.tailMode=p)}function gg(i,s,l){var u=s.pendingProps,p=u.revealOrder,y=u.tail;if(jn(i,s,u.children,l),u=rn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&mg(i,l,s);else if(i.tag===19)mg(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Vt(rn,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Xc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),uh(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Xc(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}uh(s,!0,l,null,y);break;case"together":uh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function eu(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Tr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ws|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=us(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=us(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function $3(i,s,l){switch(s.tag){case 3:dg(s),za();break;case 5:P1(s);break;case 1:Qn(s.type)&&Fc(s);break;case 4:Gd(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;Vt(Hc,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Vt(rn,rn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?pg(i,s,l):(Vt(rn,rn.current&1),i=Tr(i,s,l),i!==null?i.sibling:null);Vt(rn,rn.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return gg(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(rn,rn.current),u)break;return null;case 22:case 23:return s.lanes=0,cg(i,s,l)}return Tr(i,s,l)}var vg,fh,_g,xg;vg=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},fh=function(){},_g=function(i,s,l,u){var p=i.memoizedProps;if(p!==u){i=s.stateNode,Hs(tr.current);var y=null;switch(l){case"input":p=wt(i,p),u=wt(i,u),y=[];break;case"select":p=le({},p,{value:void 0}),u=le({},u,{value:void 0}),y=[];break;case"textarea":p=oe(i,p),u=oe(i,u),y=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=Dc)}dt(l,u);var A;l=null;for(se in p)if(!u.hasOwnProperty(se)&&p.hasOwnProperty(se)&&p[se]!=null)if(se==="style"){var N=p[se];for(A in N)N.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?y||(y=[]):(y=y||[]).push(se,null));for(se in u){var V=u[se];if(N=p?.[se],u.hasOwnProperty(se)&&V!==N&&(V!=null||N!=null))if(se==="style")if(N){for(A in N)!N.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in V)V.hasOwnProperty(A)&&N[A]!==V[A]&&(l||(l={}),l[A]=V[A])}else l||(y||(y=[]),y.push(se,l)),l=V;else se==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,N=N?N.__html:void 0,V!=null&&N!==V&&(y=y||[]).push(se,V)):se==="children"?typeof V!="string"&&typeof V!="number"||(y=y||[]).push(se,""+V):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(V!=null&&se==="onScroll"&&Wt("scroll",i),y||N===V||(y=[])):(y=y||[]).push(se,V))}l&&(y=y||[]).push("style",l);var se=y;(s.updateQueue=se)&&(s.flags|=4)}},xg=function(i,s,l,u){l!==u&&(s.flags|=4)};function gl(i,s){if(!Jt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function kn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function Z3(i,s,l){var u=s.pendingProps;switch(Dd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(s),null;case 1:return Qn(s.type)&&Uc(),kn(s),null;case 3:return u=s.stateNode,Ga(),jt(Kn),jt(Fn),Xd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Bc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Bi!==null&&(Mh(Bi),Bi=null))),fh(i,s),kn(s),null;case 5:Wd(s);var p=Hs(fl.current);if(l=s.type,i!==null&&s.stateNode!=null)_g(i,s,l,u,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return kn(s),null}if(i=Hs(tr.current),Bc(s)){u=s.stateNode,l=s.type;var y=s.memoizedProps;switch(u[er]=s,u[al]=y,i=(s.mode&1)!==0,l){case"dialog":Wt("cancel",u),Wt("close",u);break;case"iframe":case"object":case"embed":Wt("load",u);break;case"video":case"audio":for(p=0;p<il.length;p++)Wt(il[p],u);break;case"source":Wt("error",u);break;case"img":case"image":case"link":Wt("error",u),Wt("load",u);break;case"details":Wt("toggle",u);break;case"input":Pt(u,y),Wt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!y.multiple},Wt("invalid",u);break;case"textarea":me(u,y),Wt("invalid",u)}dt(l,y),p=null;for(var A in y)if(y.hasOwnProperty(A)){var N=y[A];A==="children"?typeof N=="string"?u.textContent!==N&&(y.suppressHydrationWarning!==!0&&Ic(u.textContent,N,i),p=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(y.suppressHydrationWarning!==!0&&Ic(u.textContent,N,i),p=["children",""+N]):a.hasOwnProperty(A)&&N!=null&&A==="onScroll"&&Wt("scroll",u)}switch(l){case"input":bt(u),st(u,y,!0);break;case"textarea":bt(u),ge(u);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(u.onclick=Dc)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Qe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=A.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=A.createElement(l,{is:u.is}):(i=A.createElement(l),l==="select"&&(A=i,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):i=A.createElementNS(i,l),i[er]=s,i[al]=u,vg(i,s,!1,!1),s.stateNode=i;e:{switch(A=kt(l,u),l){case"dialog":Wt("cancel",i),Wt("close",i),p=u;break;case"iframe":case"object":case"embed":Wt("load",i),p=u;break;case"video":case"audio":for(p=0;p<il.length;p++)Wt(il[p],i);p=u;break;case"source":Wt("error",i),p=u;break;case"img":case"image":case"link":Wt("error",i),Wt("load",i),p=u;break;case"details":Wt("toggle",i),p=u;break;case"input":Pt(i,u),p=wt(i,u),Wt("invalid",i);break;case"option":p=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},p=le({},u,{value:void 0}),Wt("invalid",i);break;case"textarea":me(i,u),p=oe(i,u),Wt("invalid",i);break;default:p=u}dt(l,p),N=p;for(y in N)if(N.hasOwnProperty(y)){var V=N[y];y==="style"?Be(i,V):y==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ft(i,V)):y==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&Ee(i,V):typeof V=="number"&&Ee(i,""+V):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?V!=null&&y==="onScroll"&&Wt("scroll",i):V!=null&&w(i,y,V,A))}switch(l){case"input":bt(i),st(i,u,!1);break;case"textarea":bt(i),ge(i);break;case"option":u.value!=null&&i.setAttribute("value",""+Ce(u.value));break;case"select":i.multiple=!!u.multiple,y=u.value,y!=null?C(i,!!u.multiple,y,!1):u.defaultValue!=null&&C(i,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Dc)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return kn(s),null;case 6:if(i&&s.stateNode!=null)xg(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=Hs(fl.current),Hs(tr.current),Bc(s)){if(u=s.stateNode,l=s.memoizedProps,u[er]=s,(y=u.nodeValue!==l)&&(i=gi,i!==null))switch(i.tag){case 3:Ic(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ic(u.nodeValue,l,(i.mode&1)!==0)}y&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[er]=s,s.stateNode=u}return kn(s),null;case 13:if(jt(rn),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Jt&&vi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)M1(),za(),s.flags|=98560,y=!1;else if(y=Bc(s),u!==null&&u.dehydrated!==null){if(i===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[er]=s}else za(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;kn(s),y=!1}else Bi!==null&&(Mh(Bi),Bi=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(rn.current&1)!==0?_n===0&&(_n=3):Th())),s.updateQueue!==null&&(s.flags|=4),kn(s),null);case 4:return Ga(),fh(i,s),i===null&&rl(s.stateNode.containerInfo),kn(s),null;case 10:return zd(s.type._context),kn(s),null;case 17:return Qn(s.type)&&Uc(),kn(s),null;case 19:if(jt(rn),y=s.memoizedState,y===null)return kn(s),null;if(u=(s.flags&128)!==0,A=y.rendering,A===null)if(u)gl(y,!1);else{if(_n!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(A=Xc(i),A!==null){for(s.flags|=128,gl(y,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)y=l,i=u,y.flags&=14680066,A=y.alternate,A===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=A.childLanes,y.lanes=A.lanes,y.child=A.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=A.memoizedProps,y.memoizedState=A.memoizedState,y.updateQueue=A.updateQueue,y.type=A.type,i=A.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Vt(rn,rn.current&1|2),s.child}i=i.sibling}y.tail!==null&&Re()>qa&&(s.flags|=128,u=!0,gl(y,!1),s.lanes=4194304)}else{if(!u)if(i=Xc(A),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),gl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!A.alternate&&!Jt)return kn(s),null}else 2*Re()-y.renderingStartTime>qa&&l!==1073741824&&(s.flags|=128,u=!0,gl(y,!1),s.lanes=4194304);y.isBackwards?(A.sibling=s.child,s.child=A):(l=y.last,l!==null?l.sibling=A:s.child=A,y.last=A)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=Re(),s.sibling=null,l=rn.current,Vt(rn,u?l&1|2:l&1),s):(kn(s),null);case 22:case 23:return wh(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(_i&1073741824)!==0&&(kn(s),s.subtreeFlags&6&&(s.flags|=8192)):kn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function K3(i,s){switch(Dd(s),s.tag){case 1:return Qn(s.type)&&Uc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ga(),jt(Kn),jt(Fn),Xd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Wd(s),null;case 13:if(jt(rn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));za()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt(rn),null;case 4:return Ga(),null;case 10:return zd(s.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var tu=!1,zn=!1,Q3=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ja(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){cn(i,s,u)}else l.current=null}function dh(i,s,l){try{l()}catch(u){cn(i,s,u)}}var yg=!1;function J3(i,s){if(wd=Sc,i=Qm(),gd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var A=0,N=-1,V=-1,se=0,xe=0,Me=i,ve=null;t:for(;;){for(var Oe;Me!==l||p!==0&&Me.nodeType!==3||(N=A+p),Me!==y||u!==0&&Me.nodeType!==3||(V=A+u),Me.nodeType===3&&(A+=Me.nodeValue.length),(Oe=Me.firstChild)!==null;)ve=Me,Me=Oe;for(;;){if(Me===i)break t;if(ve===l&&++se===p&&(N=A),ve===y&&++xe===u&&(V=A),(Oe=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Oe}l=N===-1||V===-1?null:{start:N,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Td={focusedElem:i,selectionRange:l},Sc=!1,Ve=s;Ve!==null;)if(s=Ve,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ve=i;else for(;Ve!==null;){s=Ve;try{var He=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,un=He.memoizedState,K=s.stateNode,j=K.getSnapshotBeforeUpdate(s.elementType===s.type?We:Vi(s.type,We),un);K.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){cn(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,Ve=i;break}Ve=s.return}return He=yg,yg=!1,He}function vl(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&i)===i){var y=p.destroy;p.destroy=void 0,y!==void 0&&dh(s,l,y)}p=p.next}while(p!==u)}}function nu(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function hh(i){var s=i.ref;if(s!==null){var l=i.stateNode;i.tag,i=l,typeof s=="function"?s(i):s.current=i}}function Sg(i){var s=i.alternate;s!==null&&(i.alternate=null,Sg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[er],delete s[al],delete s[Cd],delete s[U3],delete s[F3])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Mg(i){return i.tag===5||i.tag===3||i.tag===4}function Eg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Mg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ph(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Dc));else if(u!==4&&(i=i.child,i!==null))for(ph(i,s,l),i=i.sibling;i!==null;)ph(i,s,l),i=i.sibling}function mh(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(mh(i,s,l),i=i.sibling;i!==null;)mh(i,s,l),i=i.sibling}var In=null,Hi=!1;function ss(i,s,l){for(l=l.child;l!==null;)wg(i,s,l),l=l.sibling}function wg(i,s,l){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Mn,l)}catch{}switch(l.tag){case 5:zn||ja(l,s);case 6:var u=In,p=Hi;In=null,ss(i,s,l),In=u,Hi=p,In!==null&&(Hi?(i=In,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Hi?(i=In,l=l.stateNode,i.nodeType===8?Rd(i.parentNode,l):i.nodeType===1&&Rd(i,l),$o(i)):Rd(In,l.stateNode));break;case 4:u=In,p=Hi,In=l.stateNode.containerInfo,Hi=!0,ss(i,s,l),In=u,Hi=p;break;case 0:case 11:case 14:case 15:if(!zn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var y=p,A=y.destroy;y=y.tag,A!==void 0&&((y&2)!==0||(y&4)!==0)&&dh(l,s,A),p=p.next}while(p!==u)}ss(i,s,l);break;case 1:if(!zn&&(ja(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(N){cn(l,s,N)}ss(i,s,l);break;case 21:ss(i,s,l);break;case 22:l.mode&1?(zn=(u=zn)||l.memoizedState!==null,ss(i,s,l),zn=u):ss(i,s,l);break;default:ss(i,s,l)}}function Tg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Q3),s.forEach(function(u){var p=lS.bind(null,i,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Gi(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var y=i,A=s,N=A;e:for(;N!==null;){switch(N.tag){case 5:In=N.stateNode,Hi=!1;break e;case 3:In=N.stateNode.containerInfo,Hi=!0;break e;case 4:In=N.stateNode.containerInfo,Hi=!0;break e}N=N.return}if(In===null)throw Error(t(160));wg(y,A,p),In=null,Hi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(se){cn(p,s,se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ag(s,i),s=s.sibling}function Ag(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Gi(s,i),ir(i),u&4){try{vl(3,i,i.return),nu(3,i)}catch(We){cn(i,i.return,We)}try{vl(5,i,i.return)}catch(We){cn(i,i.return,We)}}break;case 1:Gi(s,i),ir(i),u&512&&l!==null&&ja(l,l.return);break;case 5:if(Gi(s,i),ir(i),u&512&&l!==null&&ja(l,l.return),i.flags&32){var p=i.stateNode;try{Ee(p,"")}catch(We){cn(i,i.return,We)}}if(u&4&&(p=i.stateNode,p!=null)){var y=i.memoizedProps,A=l!==null?l.memoizedProps:y,N=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{N==="input"&&y.type==="radio"&&y.name!=null&&$e(p,y),kt(N,A);var se=kt(N,y);for(A=0;A<V.length;A+=2){var xe=V[A],Me=V[A+1];xe==="style"?Be(p,Me):xe==="dangerouslySetInnerHTML"?ft(p,Me):xe==="children"?Ee(p,Me):w(p,xe,Me,se)}switch(N){case"input":Kt(p,y);break;case"textarea":_e(p,y);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var Oe=y.value;Oe!=null?C(p,!!y.multiple,Oe,!1):ve!==!!y.multiple&&(y.defaultValue!=null?C(p,!!y.multiple,y.defaultValue,!0):C(p,!!y.multiple,y.multiple?[]:"",!1))}p[al]=y}catch(We){cn(i,i.return,We)}}break;case 6:if(Gi(s,i),ir(i),u&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,y=i.memoizedProps;try{p.nodeValue=y}catch(We){cn(i,i.return,We)}}break;case 3:if(Gi(s,i),ir(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{$o(s.containerInfo)}catch(We){cn(i,i.return,We)}break;case 4:Gi(s,i),ir(i);break;case 13:Gi(s,i),ir(i),p=i.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(_h=Re())),u&4&&Tg(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(zn=(se=zn)||xe,Gi(s,i),zn=se):Gi(s,i),ir(i),u&8192){if(se=i.memoizedState!==null,(i.stateNode.isHidden=se)&&!xe&&(i.mode&1)!==0)for(Ve=i,xe=i.child;xe!==null;){for(Me=Ve=xe;Ve!==null;){switch(ve=Ve,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:vl(4,ve,ve.return);break;case 1:ja(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){u=ve,l=ve.return;try{s=u,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(We){cn(u,l,We)}}break;case 5:ja(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Cg(Me);continue}}Oe!==null?(Oe.return=ve,Ve=Oe):Cg(Me)}xe=xe.sibling}e:for(xe=null,Me=i;;){if(Me.tag===5){if(xe===null){xe=Me;try{p=Me.stateNode,se?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(N=Me.stateNode,V=Me.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,N.style.display=rt("display",A))}catch(We){cn(i,i.return,We)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=se?"":Me.memoizedProps}catch(We){cn(i,i.return,We)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Gi(s,i),ir(i),u&4&&Tg(i);break;case 21:break;default:Gi(s,i),ir(i)}}function ir(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Mg(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ee(p,""),u.flags&=-33);var y=Eg(i);mh(i,y,p);break;case 3:case 4:var A=u.stateNode.containerInfo,N=Eg(i);ph(i,N,A);break;default:throw Error(t(161))}}catch(V){cn(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function eS(i,s,l){Ve=i,bg(i)}function bg(i,s,l){for(var u=(i.mode&1)!==0;Ve!==null;){var p=Ve,y=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||tu;if(!A){var N=p.alternate,V=N!==null&&N.memoizedState!==null||zn;N=tu;var se=zn;if(tu=A,(zn=V)&&!se)for(Ve=p;Ve!==null;)A=Ve,V=A.child,A.tag===22&&A.memoizedState!==null?Pg(p):V!==null?(V.return=A,Ve=V):Pg(p);for(;y!==null;)Ve=y,bg(y),y=y.sibling;Ve=p,tu=N,zn=se}Rg(i)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,Ve=y):Rg(i)}}function Rg(i){for(;Ve!==null;){var s=Ve;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zn||nu(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!zn)if(l===null)u.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Vi(s.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&C1(s,y,u);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}C1(s,A,l)}break;case 5:var N=s.stateNode;if(l===null&&s.flags&4){l=N;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var se=s.alternate;if(se!==null){var xe=se.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&$o(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||s.flags&512&&hh(s)}catch(ve){cn(s,s.return,ve)}}if(s===i){Ve=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ve=l;break}Ve=s.return}}function Cg(i){for(;Ve!==null;){var s=Ve;if(s===i){Ve=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ve=l;break}Ve=s.return}}function Pg(i){for(;Ve!==null;){var s=Ve;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{nu(4,s)}catch(V){cn(s,l,V)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(V){cn(s,p,V)}}var y=s.return;try{hh(s)}catch(V){cn(s,y,V)}break;case 5:var A=s.return;try{hh(s)}catch(V){cn(s,A,V)}}}catch(V){cn(s,s.return,V)}if(s===i){Ve=null;break}var N=s.sibling;if(N!==null){N.return=s.return,Ve=N;break}Ve=s.return}}var tS=Math.ceil,iu=b.ReactCurrentDispatcher,gh=b.ReactCurrentOwner,Ii=b.ReactCurrentBatchConfig,At=0,Tn=null,pn=null,Dn=0,_i=0,Xa=es(0),_n=0,_l=null,Ws=0,ru=0,vh=0,xl=null,ei=null,_h=0,qa=1/0,Ar=null,su=!1,xh=null,as=null,au=!1,os=null,ou=0,yl=0,yh=null,lu=-1,cu=0;function Xn(){return(At&6)!==0?Re():lu!==-1?lu:lu=Re()}function ls(i){return(i.mode&1)===0?1:(At&2)!==0&&Dn!==0?Dn&-Dn:k3.transition!==null?(cu===0&&(cu=_c()),cu):(i=Ut,i!==0||(i=window.event,i=i===void 0?16:Im(i.type)),i)}function Wi(i,s,l,u){if(50<yl)throw yl=0,yh=null,Error(t(185));Wo(i,l,u),((At&2)===0||i!==Tn)&&(i===Tn&&((At&2)===0&&(ru|=l),_n===4&&cs(i,Dn)),ti(i,u),l===1&&At===0&&(s.mode&1)===0&&(qa=Re()+500,Oc&&ns()))}function ti(i,s){var l=i.callbackNode;Zn(i,s);var u=pi(i,i===Tn?Dn:0);if(u===0)l!==null&&Ae(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&Ae(l),s===1)i.tag===0?O3(Ig.bind(null,i)):v1(Ig.bind(null,i)),D3(function(){(At&6)===0&&ns()}),l=null;else{switch(wm(u)){case 1:l=nt;break;case 4:l=qe;break;case 16:l=Mt;break;case 536870912:l=Gt;break;default:l=Mt}l=Bg(l,Lg.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Lg(i,s){if(lu=-1,cu=0,(At&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Ya()&&i.callbackNode!==l)return null;var u=pi(i,i===Tn?Dn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=uu(i,u);else{s=u;var p=At;At|=2;var y=Ng();(Tn!==i||Dn!==s)&&(Ar=null,qa=Re()+500,Xs(i,s));do try{rS();break}catch(N){Dg(i,N)}while(!0);kd(),iu.current=y,At=p,pn!==null?s=0:(Tn=null,Dn=0,s=_n)}if(s!==0){if(s===2&&(p=Fs(i),p!==0&&(u=p,s=Sh(i,p))),s===1)throw l=_l,Xs(i,0),cs(i,u),ti(i,Re()),l;if(s===6)cs(i,u);else{if(p=i.current.alternate,(u&30)===0&&!nS(p)&&(s=uu(i,u),s===2&&(y=Fs(i),y!==0&&(u=y,s=Sh(i,y))),s===1))throw l=_l,Xs(i,0),cs(i,u),ti(i,Re()),l;switch(i.finishedWork=p,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:qs(i,ei,Ar);break;case 3:if(cs(i,u),(u&130023424)===u&&(s=_h+500-Re(),10<s)){if(pi(i,0)!==0)break;if(p=i.suspendedLanes,(p&u)!==u){Xn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=bd(qs.bind(null,i,ei,Ar),s);break}qs(i,ei,Ar);break;case 4:if(cs(i,u),(u&4194240)===u)break;for(s=i.eventTimes,p=-1;0<u;){var A=31-Nt(u);y=1<<A,A=s[A],A>p&&(p=A),u&=~y}if(u=p,u=Re()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*tS(u/1960))-u,10<u){i.timeoutHandle=bd(qs.bind(null,i,ei,Ar),u);break}qs(i,ei,Ar);break;case 5:qs(i,ei,Ar);break;default:throw Error(t(329))}}}return ti(i,Re()),i.callbackNode===l?Lg.bind(null,i):null}function Sh(i,s){var l=xl;return i.current.memoizedState.isDehydrated&&(Xs(i,s).flags|=256),i=uu(i,s),i!==2&&(s=ei,ei=l,s!==null&&Mh(s)),i}function Mh(i){ei===null?ei=i:ei.push.apply(ei,i)}function nS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],y=p.getSnapshot;p=p.value;try{if(!zi(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function cs(i,s){for(s&=~vh,s&=~ru,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Nt(s),u=1<<l;i[l]=-1,s&=~u}}function Ig(i){if((At&6)!==0)throw Error(t(327));Ya();var s=pi(i,0);if((s&1)===0)return ti(i,Re()),null;var l=uu(i,s);if(i.tag!==0&&l===2){var u=Fs(i);u!==0&&(s=u,l=Sh(i,u))}if(l===1)throw l=_l,Xs(i,0),cs(i,s),ti(i,Re()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,qs(i,ei,Ar),ti(i,Re()),null}function Eh(i,s){var l=At;At|=1;try{return i(s)}finally{At=l,At===0&&(qa=Re()+500,Oc&&ns())}}function js(i){os!==null&&os.tag===0&&(At&6)===0&&Ya();var s=At;At|=1;var l=Ii.transition,u=Ut;try{if(Ii.transition=null,Ut=1,i)return i()}finally{Ut=u,Ii.transition=l,At=s,(At&6)===0&&ns()}}function wh(){_i=Xa.current,jt(Xa)}function Xs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,I3(l)),pn!==null)for(l=pn.return;l!==null;){var u=l;switch(Dd(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Uc();break;case 3:Ga(),jt(Kn),jt(Fn),Xd();break;case 5:Wd(u);break;case 4:Ga();break;case 13:jt(rn);break;case 19:jt(rn);break;case 10:zd(u.type._context);break;case 22:case 23:wh()}l=l.return}if(Tn=i,pn=i=us(i.current,null),Dn=_i=s,_n=0,_l=null,vh=ru=Ws=0,ei=xl=null,Vs!==null){for(s=0;s<Vs.length;s++)if(l=Vs[s],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,y=l.pending;if(y!==null){var A=y.next;y.next=p,u.next=A}l.pending=u}Vs=null}return i}function Dg(i,s){do{var l=pn;try{if(kd(),qc.current=Kc,Yc){for(var u=sn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Yc=!1}if(Gs=0,wn=vn=sn=null,dl=!1,hl=0,gh.current=null,l===null||l.return===null){_n=1,_l=s,pn=null;break}e:{var y=i,A=l.return,N=l,V=s;if(s=Dn,N.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var se=V,xe=N,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Oe=rg(A);if(Oe!==null){Oe.flags&=-257,sg(Oe,A,N,y,s),Oe.mode&1&&ig(y,se,s),s=Oe,V=se;var He=s.updateQueue;if(He===null){var We=new Set;We.add(V),s.updateQueue=We}else He.add(V);break e}else{if((s&1)===0){ig(y,se,s),Th();break e}V=Error(t(426))}}else if(Jt&&N.mode&1){var un=rg(A);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),sg(un,A,N,y,s),Fd(Wa(V,N));break e}}y=V=Wa(V,N),_n!==4&&(_n=2),xl===null?xl=[y]:xl.push(y),y=A;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var K=tg(y,V,s);R1(y,K);break e;case 1:N=V;var j=y.type,ee=y.stateNode;if((y.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(as===null||!as.has(ee)))){y.flags|=65536,s&=-s,y.lanes|=s;var we=ng(y,N,s);R1(y,we);break e}}y=y.return}while(y!==null)}Fg(l)}catch(Xe){s=Xe,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function Ng(){var i=iu.current;return iu.current=Kc,i===null?Kc:i}function Th(){(_n===0||_n===3||_n===2)&&(_n=4),Tn===null||(Ws&268435455)===0&&(ru&268435455)===0||cs(Tn,Dn)}function uu(i,s){var l=At;At|=2;var u=Ng();(Tn!==i||Dn!==s)&&(Ar=null,Xs(i,s));do try{iS();break}catch(p){Dg(i,p)}while(!0);if(kd(),At=l,iu.current=u,pn!==null)throw Error(t(261));return Tn=null,Dn=0,_n}function iS(){for(;pn!==null;)Ug(pn)}function rS(){for(;pn!==null&&!Fe();)Ug(pn)}function Ug(i){var s=zg(i.alternate,i,_i);i.memoizedProps=i.pendingProps,s===null?Fg(i):pn=s,gh.current=null}function Fg(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Z3(l,s,_i),l!==null){pn=l;return}}else{if(l=K3(l,s),l!==null){l.flags&=32767,pn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_n=6,pn=null;return}}if(s=s.sibling,s!==null){pn=s;return}pn=s=i}while(s!==null);_n===0&&(_n=5)}function qs(i,s,l){var u=Ut,p=Ii.transition;try{Ii.transition=null,Ut=1,sS(i,s,l,u)}finally{Ii.transition=p,Ut=u}return null}function sS(i,s,l,u){do Ya();while(os!==null);if((At&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(zy(i,y),i===Tn&&(pn=Tn=null,Dn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||au||(au=!0,Bg(Mt,function(){return Ya(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Ii.transition,Ii.transition=null;var A=Ut;Ut=1;var N=At;At|=4,gh.current=null,J3(i,l),Ag(l,i),T3(Td),Sc=!!wd,Td=wd=null,i.current=l,eS(l),Ge(),At=N,Ut=A,Ii.transition=y}else i.current=l;if(au&&(au=!1,os=i,ou=p),y=i.pendingLanes,y===0&&(as=null),Ye(l.stateNode),ti(i,Re()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(su)throw su=!1,i=xh,xh=null,i;return(ou&1)!==0&&i.tag!==0&&Ya(),y=i.pendingLanes,(y&1)!==0?i===yh?yl++:(yl=0,yh=i):yl=0,ns(),null}function Ya(){if(os!==null){var i=wm(ou),s=Ii.transition,l=Ut;try{if(Ii.transition=null,Ut=16>i?16:i,os===null)var u=!1;else{if(i=os,os=null,ou=0,(At&6)!==0)throw Error(t(331));var p=At;for(At|=4,Ve=i.current;Ve!==null;){var y=Ve,A=y.child;if((Ve.flags&16)!==0){var N=y.deletions;if(N!==null){for(var V=0;V<N.length;V++){var se=N[V];for(Ve=se;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:vl(8,xe,y)}var Me=xe.child;if(Me!==null)Me.return=xe,Ve=Me;else for(;Ve!==null;){xe=Ve;var ve=xe.sibling,Oe=xe.return;if(Sg(xe),xe===se){Ve=null;break}if(ve!==null){ve.return=Oe,Ve=ve;break}Ve=Oe}}}var He=y.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var un=We.sibling;We.sibling=null,We=un}while(We!==null)}}Ve=y}}if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,Ve=A;else e:for(;Ve!==null;){if(y=Ve,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:vl(9,y,y.return)}var K=y.sibling;if(K!==null){K.return=y.return,Ve=K;break e}Ve=y.return}}var j=i.current;for(Ve=j;Ve!==null;){A=Ve;var ee=A.child;if((A.subtreeFlags&2064)!==0&&ee!==null)ee.return=A,Ve=ee;else e:for(A=j;Ve!==null;){if(N=Ve,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:nu(9,N)}}catch(Xe){cn(N,N.return,Xe)}if(N===A){Ve=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Ve=we;break e}Ve=N.return}}if(At=p,ns(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Mn,i)}catch{}u=!0}return u}finally{Ut=l,Ii.transition=s}}return!1}function Og(i,s,l){s=Wa(l,s),s=tg(i,s,1),i=rs(i,s,1),s=Xn(),i!==null&&(Wo(i,1,s),ti(i,s))}function cn(i,s,l){if(i.tag===3)Og(i,i,l);else for(;s!==null;){if(s.tag===3){Og(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(as===null||!as.has(u))){i=Wa(l,i),i=ng(s,i,1),s=rs(s,i,1),i=Xn(),s!==null&&(Wo(s,1,i),ti(s,i));break}}s=s.return}}function aS(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=Xn(),i.pingedLanes|=i.suspendedLanes&l,Tn===i&&(Dn&l)===l&&(_n===4||_n===3&&(Dn&130023424)===Dn&&500>Re()-_h?Xs(i,0):vh|=l),ti(i,s)}function kg(i,s){s===0&&((i.mode&1)===0?s=1:(s=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var l=Xn();i=Er(i,s),i!==null&&(Wo(i,s,l),ti(i,l))}function oS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),kg(i,l)}function lS(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),kg(i,l)}var zg;zg=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Kn.current)Jn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Jn=!1,$3(i,s,l);Jn=(i.flags&131072)!==0}else Jn=!1,Jt&&(s.flags&1048576)!==0&&_1(s,zc,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;eu(i,s),i=s.pendingProps;var p=Fa(s,Fn.current);Ha(s,l),p=$d(null,s,u,i,p,l);var y=Zd();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qn(u)?(y=!0,Fc(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Hd(s),p.updater=Qc,s.stateNode=p,p._reactInternals=s,nh(s,u,i,l),s=ah(null,s,u,!0,y,l)):(s.tag=0,Jt&&y&&Id(s),jn(null,s,p,l),s=s.child),s;case 16:u=s.elementType;e:{switch(eu(i,s),i=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=uS(u),i=Vi(u,i),p){case 0:s=sh(null,s,u,i,l);break e;case 1:s=fg(null,s,u,i,l);break e;case 11:s=ag(null,s,u,i,l);break e;case 14:s=og(null,s,u,Vi(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Vi(u,p),sh(i,s,u,p,l);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Vi(u,p),fg(i,s,u,p,l);case 3:e:{if(dg(s),i===null)throw Error(t(387));u=s.pendingProps,y=s.memoizedState,p=y.element,b1(i,s),jc(s,u,null,l);var A=s.memoizedState;if(u=A.element,y.isDehydrated)if(y={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=Wa(Error(t(423)),s),s=hg(i,s,u,l,p);break e}else if(u!==p){p=Wa(Error(t(424)),s),s=hg(i,s,u,l,p);break e}else for(vi=Jr(s.stateNode.containerInfo.firstChild),gi=s,Jt=!0,Bi=null,l=T1(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(za(),u===p){s=Tr(i,s,l);break e}jn(i,s,u,l)}s=s.child}return s;case 5:return P1(s),i===null&&Ud(s),u=s.type,p=s.pendingProps,y=i!==null?i.memoizedProps:null,A=p.children,Ad(u,p)?A=null:y!==null&&Ad(u,y)&&(s.flags|=32),ug(i,s),jn(i,s,A,l),s.child;case 6:return i===null&&Ud(s),null;case 13:return pg(i,s,l);case 4:return Gd(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=Ba(s,null,u,l):jn(i,s,u,l),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Vi(u,p),ag(i,s,u,p,l);case 7:return jn(i,s,s.pendingProps,l),s.child;case 8:return jn(i,s,s.pendingProps.children,l),s.child;case 12:return jn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,y=s.memoizedProps,A=p.value,Vt(Hc,u._currentValue),u._currentValue=A,y!==null)if(zi(y.value,A)){if(y.children===p.children&&!Kn.current){s=Tr(i,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var N=y.dependencies;if(N!==null){A=y.child;for(var V=N.firstContext;V!==null;){if(V.context===u){if(y.tag===1){V=wr(-1,l&-l),V.tag=2;var se=y.updateQueue;if(se!==null){se=se.shared;var xe=se.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),se.pending=V}}y.lanes|=l,V=y.alternate,V!==null&&(V.lanes|=l),Bd(y.return,l,s),N.lanes|=l;break}V=V.next}}else if(y.tag===10)A=y.type===s.type?null:y.child;else if(y.tag===18){if(A=y.return,A===null)throw Error(t(341));A.lanes|=l,N=A.alternate,N!==null&&(N.lanes|=l),Bd(A,l,s),A=y.sibling}else A=y.child;if(A!==null)A.return=y;else for(A=y;A!==null;){if(A===s){A=null;break}if(y=A.sibling,y!==null){y.return=A.return,A=y;break}A=A.return}y=A}jn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,Ha(s,l),p=Pi(p),u=u(p),s.flags|=1,jn(i,s,u,l),s.child;case 14:return u=s.type,p=Vi(u,s.pendingProps),p=Vi(u.type,p),og(i,s,u,p,l);case 15:return lg(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Vi(u,p),eu(i,s),s.tag=1,Qn(u)?(i=!0,Fc(s)):i=!1,Ha(s,l),J1(s,u,p),nh(s,u,p,l),ah(null,s,u,!0,i,l);case 19:return gg(i,s,l);case 22:return cg(i,s,l)}throw Error(t(156,s.tag))};function Bg(i,s){return Z(i,s)}function cS(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(i,s,l,u){return new cS(i,s,l,u)}function Ah(i){return i=i.prototype,!(!i||!i.isReactComponent)}function uS(i){if(typeof i=="function")return Ah(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Q)return 11;if(i===ce)return 14}return 2}function us(i,s){var l=i.alternate;return l===null?(l=Di(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function fu(i,s,l,u,p,y){var A=2;if(u=i,typeof i=="function")Ah(i)&&(A=1);else if(typeof i=="string")A=5;else e:switch(i){case D:return Ys(l.children,p,y,s);case G:A=8,p|=8;break;case L:return i=Di(12,l,s,p|2),i.elementType=L,i.lanes=y,i;case Y:return i=Di(13,l,s,p),i.elementType=Y,i.lanes=y,i;case W:return i=Di(19,l,s,p),i.elementType=W,i.lanes=y,i;case ue:return du(l,p,y,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:A=10;break e;case k:A=9;break e;case Q:A=11;break e;case ce:A=14;break e;case te:A=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Di(A,l,s,p),s.elementType=i,s.type=u,s.lanes=y,s}function Ys(i,s,l,u){return i=Di(7,i,u,s),i.lanes=l,i}function du(i,s,l,u){return i=Di(22,i,u,s),i.elementType=ue,i.lanes=l,i.stateNode={isHidden:!1},i}function bh(i,s,l){return i=Di(6,i,null,s),i.lanes=l,i}function Rh(i,s,l){return s=Di(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function fS(i,s,l,u,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ch(i,s,l,u,p,y,A,N,V){return i=new fS(i,s,l,N,V),s===1?(s=1,y===!0&&(s|=8)):s=0,y=Di(3,null,null,s),i.current=y,y.stateNode=i,y.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(y),i}function dS(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function Vg(i){if(!i)return ts;i=i._reactInternals;e:{if(_r(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Qn(l))return m1(i,l,s)}return s}function Hg(i,s,l,u,p,y,A,N,V){return i=Ch(l,u,!0,i,p,y,A,N,V),i.context=Vg(null),l=i.current,u=Xn(),p=ls(l),y=wr(u,p),y.callback=s??null,rs(l,y,p),i.current.lanes=p,Wo(i,p,u),ti(i,u),i}function hu(i,s,l,u){var p=s.current,y=Xn(),A=ls(p);return l=Vg(l),s.context===null?s.context=l:s.pendingContext=l,s=wr(y,A),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=rs(p,s,A),i!==null&&(Wi(i,p,A,y),Wc(i,p,A)),A}function pu(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function Gg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Ph(i,s){Gg(i,s),(i=i.alternate)&&Gg(i,s)}function hS(){return null}var Wg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Lh(i){this._internalRoot=i}mu.prototype.render=Lh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));hu(i,s,null,null)},mu.prototype.unmount=Lh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;js(function(){hu(null,i,null,null)}),s[xr]=null}};function mu(i){this._internalRoot=i}mu.prototype.unstable_scheduleHydration=function(i){if(i){var s=bm();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Zr.length&&s!==0&&s<Zr[l].priority;l++);Zr.splice(l,0,i),l===0&&Pm(i)}};function Ih(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function gu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function jg(){}function pS(i,s,l,u,p){if(p){if(typeof u=="function"){var y=u;u=function(){var se=pu(A);y.call(se)}}var A=Hg(s,u,i,0,null,!1,!1,"",jg);return i._reactRootContainer=A,i[xr]=A.current,rl(i.nodeType===8?i.parentNode:i),js(),A}for(;p=i.lastChild;)i.removeChild(p);if(typeof u=="function"){var N=u;u=function(){var se=pu(V);N.call(se)}}var V=Ch(i,0,!1,null,null,!1,!1,"",jg);return i._reactRootContainer=V,i[xr]=V.current,rl(i.nodeType===8?i.parentNode:i),js(function(){hu(s,V,l,u)}),V}function vu(i,s,l,u,p){var y=l._reactRootContainer;if(y){var A=y;if(typeof p=="function"){var N=p;p=function(){var V=pu(A);N.call(V)}}hu(s,A,i,p)}else A=pS(l,s,i,p,u);return pu(A)}Tm=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Bt(s.pendingLanes);l!==0&&(nd(s,l|1),ti(s,Re()),(At&6)===0&&(qa=Re()+500,ns()))}break;case 13:js(function(){var u=Er(i,1);if(u!==null){var p=Xn();Wi(u,i,1,p)}}),Ph(i,1)}},id=function(i){if(i.tag===13){var s=Er(i,134217728);if(s!==null){var l=Xn();Wi(s,i,134217728,l)}Ph(i,134217728)}},Am=function(i){if(i.tag===13){var s=ls(i),l=Er(i,s);if(l!==null){var u=Xn();Wi(l,i,s,u)}Ph(i,s)}},bm=function(){return Ut},Rm=function(i,s){var l=Ut;try{return Ut=i,s()}finally{Ut=l}},he=function(i,s,l){switch(s){case"input":if(Kt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var p=Nc(u);if(!p)throw Error(t(90));z(u),Kt(u,p)}}}break;case"textarea":_e(i,l);break;case"select":s=l.value,s!=null&&C(i,!!l.multiple,s,!1)}},hn=Eh,Tt=js;var mS={usingClientEntryPoint:!1,Events:[ol,Na,Nc,St,nn,Eh]},Sl={findFiberByHostInstance:Os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ie(i),i===null?null:i.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||hS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Mn=_u.inject(gS),ht=_u}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS,ii.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(s))throw Error(t(200));return dS(i,s,null,l)},ii.createRoot=function(i,s){if(!Ih(i))throw Error(t(299));var l=!1,u="",p=Wg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Ch(i,1,!1,null,null,l,!1,u,p),i[xr]=s.current,rl(i.nodeType===8?i.parentNode:i),new Lh(s)},ii.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ie(s),i=i===null?null:i.stateNode,i},ii.flushSync=function(i){return js(i)},ii.hydrate=function(i,s,l){if(!gu(s))throw Error(t(200));return vu(null,i,s,!0,l)},ii.hydrateRoot=function(i,s,l){if(!Ih(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,y="",A=Wg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Hg(s,null,i,1,l??null,p,!1,y,A),i[xr]=s.current,rl(i),u)for(i=0;i<u.length;i++)l=u[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new mu(s)},ii.render=function(i,s,l){if(!gu(s))throw Error(t(200));return vu(null,i,s,!1,l)},ii.unmountComponentAtNode=function(i){if(!gu(i))throw Error(t(40));return i._reactRootContainer?(js(function(){vu(null,null,i,!1,function(){i._reactRootContainer=null,i[xr]=null})}),!0):!1},ii.unstable_batchedUpdates=Eh,ii.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!gu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return vu(i,s,l,!1,u)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var C_;function OA(){if(C_)return Rp.exports;C_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Rp.exports=FA(),Rp.exports}var P_;function kA(){if(P_)return Ku;P_=1;var n=OA();return Ku.createRoot=n.createRoot,Ku.hydrateRoot=n.hydrateRoot,Ku}var zA=kA();const BA=Symbol("@@iwer/devui/devui"),B0={buttonPressDuration:250},Oy=Dt.createContext(B0),Em=()=>Dt.useContext(Oy);class VA{constructor(e,t={}){e.ipd=0;const r=e.canvasContainer,a=document.createElement("div");a.style.position="fixed",a.style.width="100%",a.style.height="100%",a.style.top="0",a.style.left="0",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.overflow="hidden",a.style.pointerEvents="none",a.style.zIndex="3",r.appendChild(a);const o=new DA(e),c=o.domElement;c.style.position="fixed",c.style.width="100%",c.style.height="100%",c.style.top="0",c.style.left="0",c.style.zIndex="2",r.appendChild(c),zA.createRoot(a).render(B.jsx(HA,{xrDevice:e,inputLayer:o,options:t})),this[BA]={xrDevice:e,inputLayer:o}}}const HA=({xrDevice:n,inputLayer:e,options:t})=>{const[r,a]=Dt.useState(!1),[o,c]=Dt.useState(JE),[f,d]=Dt.useState(!1),[h,m]=Dt.useState(!1),[x,_]=Dt.useState(B0);return Dt.useEffect(()=>{var S;_({buttonPressDuration:(S=t.buttonPressDuration)!==null&&S!==void 0?S:B0.buttonPressDuration});const E=()=>{const M=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;a(!!M)};return document.addEventListener("pointerlockchange",E,!1),document.addEventListener("mozpointerlockchange",E,!1),document.addEventListener("webkitpointerlockchange",E,!1),()=>{document.removeEventListener("pointerlockchange",E,!1),document.removeEventListener("mozpointerlockchange",E,!1),document.removeEventListener("webkitpointerlockchange",E,!1)}},[]),B.jsx(Oy.Provider,{value:x,children:B.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[B.jsx(pw,{xrDevice:n,inputLayer:e,keyMapOpen:f,setKeyMapOpen:d,fovSettingOpen:h,setFovSettingOpen:m}),f&&B.jsx(tw,{keyMap:o,setKeyMap:c}),h&&B.jsx(dw,{xrDevice:n,inputLayer:e}),B.jsx(uw,{xrDevice:n,keyMap:o,pointerLocked:r})]})})},GA={metaQuest3:o5,metaQuest2:s5,metaQuestPro:a5,oculusQuest1:r5},WA=["left","none","right"];function YA(n){const e=typeof n=="string"?n:n.type??"metaQuest3",t=new JS(GA[e],typeof n=="string"?void 0:n);return typeof n!="string"&&(ky(t,n.headset),I_(t.hands,n.hand),I_(t.controllers,n.controller),t.primaryInputMode=n.primaryInputMode??"controller"),t.ipd=typeof n=="string"?0:n.ipd??0,t.installRuntime(),new VA(t),t}const L_=new Lp,jA=new xS;function I_(n,e){if(e!=null)for(const t of WA)ky(n[t],e[t])}function ky(n,e){n==null||e==null||(D_(n.position,e.position),D_(L_,e.rotation),N_(n.quaternion,jA.setFromEuler(L_)),N_(n.quaternion,e.quaternion))}function D_(n,e){if(e!=null){if(e instanceof Lp&&n instanceof Lp&&n.copy(e),Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2];return}n.x=e.x,n.y=e.y,n.z=e.z}}function N_(n,e){if(e!=null){if(Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];return}n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w}}export{YA as emulate};
