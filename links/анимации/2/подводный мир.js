(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"подводный мир_atlas_1", frames: [[0,0,642,628],[644,276,68,69],[644,0,382,274],[0,630,805,487]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.краб = function() {
	this.initialize(ss["подводный мир_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.пузырик = function() {
	this.initialize(ss["подводный мир_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.рыба = function() {
	this.initialize(ss["подводный мир_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3125,2084);


(lib.черепаха = function() {
	this.initialize(ss["подводный мир_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.пузырик();
	this.instance.setTransform(0,0,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,32.1,32.6), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.пузырик();
	this.instance.setTransform(0,0,0.6754,0.6754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,45.9,46.6), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.пузырик();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,68,69), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.пузырик();
	this.instance.setTransform(0,0,0.7059,0.7059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,48,48.7), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.пузырик();
	this.instance.setTransform(0,0,0.4117,0.4117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,28,28.4), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.краб();
	this.instance.setTransform(0,0,0.0905,0.0905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,58.1,56.9), null);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.черепаха();
	this.instance.setTransform(71.6,-43.3,0.1778,0.1778,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-43.3,143.1,86.6);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.черепаха();
	this.instance.setTransform(71.55,-43.3,0.1778,0.1778,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-43.3,143.2,86.6);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.рыба();
	this.instance.setTransform(-42.25,-30.3,0.2212,0.2212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-30.3,84.5,60.6);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.рыба();
	this.instance.setTransform(-42.25,-30.3,0.2212,0.2212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-30.3,84.5,60.6);


// stage content:
(lib.подводныймир = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// рыба
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(824.25,395.3);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(-95.75,371.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},28).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-29.9992,x:523.85,y:320.8},16).to({regX:0.1,regY:0.1,scaleX:1.2437,scaleY:1.2437,rotation:-23.9986,x:400,y:330.9},7).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-95.75,y:371.3},28).wait(1));

	// черепаха
	this.instance_2 = new lib.Анимация11("synched",0);
	this.instance_2.setTransform(-167.9,146.85);

	this.instance_3 = new lib.Анимация12("synched",0);
	this.instance_3.setTransform(943.05,469.4,1.5658,1.5658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},51).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1.5658,scaleY:1.5658,guide:{path:[-167.8,147,-163.8,144.2,-157.7,143.3,-153.9,142.7,-146.7,142.8,-80,143.1,-13.3,143.4,10.3,143.5,22.2,144,90,147.1,153.4,170.7,161.5,173.7,166.1,176.5,172.7,180.6,175.7,186,178.6,191.5,178.8,199.9,179.1,209.3,176.4,218.5,174.2,225.8,168.1,239.9,163.4,252.7,164.7,261.8,191.3,272.6,230.2,274.4,252.7,275.5,298.1,274.6,347.3,275.1,395.7,283.9,415.7,287.4,430.6,291.9,447.3,296.8,463.2,304.3,472.6,308.7,478.4,313.1,486,318.8,489.5,325.9,493.8,334.8,492.7,350,492.4,354.1,491.6,362.6,491,370.1,491.3,375.2,491.9,383.6,495.3,388.7,498.3,393.1,504.3,396.2,508.2,398.2,515.7,400.5,601.4,427,675,440.2,703.7,445.3,758.5,452.8,817.5,460.9,847.4,463.9,896.9,468.8,936.7,468.2,941.2,468.1,942.7,469.8]}},51).wait(1));

	// пузырь
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(485,610.1,1,1,0,0,0,16,16.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:16.3,x:485.05,y:586.7,alpha:0.0196},0).wait(1).to({x:485.1,y:564.1,alpha:0.0392},0).wait(1).to({x:485.15,y:542.45,alpha:0.0588},0).wait(1).to({x:485.2,y:521.65,alpha:0.0784},0).wait(1).to({x:485.25,y:501.75,alpha:0.098},0).wait(1).to({x:485.3,y:482.65,alpha:0.1176},0).wait(1).to({x:485.35,y:464.45,alpha:0.1373},0).wait(1).to({x:485.4,y:447,alpha:0.1569},0).wait(1).to({y:430.35,alpha:0.1765},0).wait(1).to({x:485.45,y:414.5,alpha:0.1961},0).wait(1).to({x:485.5,y:399.4,alpha:0.2157},0).wait(1).to({x:485.55,y:385,alpha:0.2353},0).wait(1).to({y:371.35,alpha:0.2549},0).wait(1).to({x:485.6,y:358.4,alpha:0.2745},0).wait(1).to({y:346.15,alpha:0.2941},0).wait(1).to({x:485.65,y:334.55,alpha:0.3137},0).wait(1).to({x:485.7,y:323.55,alpha:0.3333},0).wait(1).to({y:313.2,alpha:0.3529},0).wait(1).to({x:485.75,y:303.5,alpha:0.3725},0).wait(1).to({y:294.35,alpha:0.3922},0).wait(1).to({y:285.8,alpha:0.4118},0).wait(1).to({x:485.8,y:277.75,alpha:0.4314},0).wait(1).to({y:270.3,alpha:0.451},0).wait(1).to({x:485.85,y:263.3,alpha:0.4706},0).wait(1).to({y:256.85,alpha:0.4902},0).wait(1).to({y:250.85,alpha:0.5098},0).wait(1).to({y:245.3,alpha:0.5294},0).wait(1).to({x:485.9,y:240.25,alpha:0.549},0).wait(1).to({y:235.55,alpha:0.5686},0).wait(1).to({y:231.3,alpha:0.5882},0).wait(1).to({y:227.45,alpha:0.6078},0).wait(1).to({y:223.95,alpha:0.6275},0).wait(1).to({x:485.95,y:220.8,alpha:0.6471},0).wait(1).to({y:217.95,alpha:0.6667},0).wait(1).to({y:215.45,alpha:0.6863},0).wait(1).to({y:213.25,alpha:0.7059},0).wait(1).to({y:211.3,alpha:0.7255},0).wait(1).to({y:209.6,alpha:0.7451},0).wait(1).to({y:208.2,alpha:0.7647},0).wait(1).to({y:206.95,alpha:0.7843},0).wait(1).to({y:205.95,alpha:0.8039},0).wait(1).to({y:205.1,alpha:0.8235},0).wait(1).to({y:204.45,alpha:0.8431},0).wait(1).to({y:203.95,alpha:0.8627},0).wait(1).to({y:203.55,alpha:0.8824},0).wait(1).to({y:203.25,alpha:0.902},0).wait(1).to({y:203.05,alpha:0.9216},0).wait(1).to({y:202.95,alpha:0.9412},0).wait(1).to({y:202.9,alpha:0.9608},0).wait(1).to({alpha:0.9804},0).wait(1).to({x:486,alpha:1},0).wait(1));

	// пузырь
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(315.4,540.85,1,1,0,0,0,22.9,23.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:23,regY:23.3,x:315.6,y:508.5,alpha:0.0196},0).wait(1).to({x:315.7,y:477.35,alpha:0.0392},0).wait(1).to({x:315.8,y:447.45,alpha:0.0588},0).wait(1).to({x:315.9,y:418.75,alpha:0.0784},0).wait(1).to({x:316,y:391.25,alpha:0.098},0).wait(1).to({x:316.1,y:364.95,alpha:0.1176},0).wait(1).to({x:316.2,y:339.75,alpha:0.1373},0).wait(1).to({x:316.3,y:315.7,alpha:0.1569},0).wait(1).to({x:316.4,y:292.75,alpha:0.1765},0).wait(1).to({x:316.45,y:270.85,alpha:0.1961},0).wait(1).to({x:316.55,y:249.95,alpha:0.2157},0).wait(1).to({x:316.6,y:230.15,alpha:0.2353},0).wait(1).to({x:316.7,y:211.3,alpha:0.2549},0).wait(1).to({x:316.75,y:193.4,alpha:0.2745},0).wait(1).to({x:316.8,y:176.45,alpha:0.2941},0).wait(1).to({x:316.85,y:160.45,alpha:0.3137},0).wait(1).to({x:316.9,y:145.3,alpha:0.3333},0).wait(1).to({x:316.95,y:131.05,alpha:0.3529},0).wait(1).to({x:317,y:117.6,alpha:0.3725},0).wait(1).to({x:317.05,y:105,alpha:0.3922},0).wait(1).to({x:317.1,y:93.15,alpha:0.4118},0).wait(1).to({x:317.15,y:82.1,alpha:0.4314},0).wait(1).to({x:317.2,y:71.75,alpha:0.451},0).wait(1).to({y:62.15,alpha:0.4706},0).wait(1).to({x:317.25,y:53.2,alpha:0.4902},0).wait(1).to({x:317.3,y:44.95,alpha:0.5098},0).wait(1).to({y:37.3,alpha:0.5294},0).wait(1).to({x:317.35,y:30.3,alpha:0.549},0).wait(1).to({y:23.85,alpha:0.5686},0).wait(1).to({x:317.4,y:18.05,alpha:0.5882},0).wait(1).to({y:12.7,alpha:0.6078},0).wait(1).to({y:7.85,alpha:0.6275},0).wait(1).to({x:317.45,y:3.5,alpha:0.6471},0).wait(1).to({y:-0.4,alpha:0.6667},0).wait(1).to({y:-3.85,alpha:0.6863},0).wait(1).to({y:-6.9,alpha:0.7059},0).wait(1).to({x:317.5,y:-9.6,alpha:0.7255},0).wait(1).to({y:-11.9,alpha:0.7451},0).wait(1).to({y:-13.9,alpha:0.7647},0).wait(1).to({y:-15.6,alpha:0.7843},0).wait(1).to({y:-17,alpha:0.8039},0).wait(1).to({y:-18.15,alpha:0.8235},0).wait(1).to({y:-19.05,alpha:0.8431},0).wait(1).to({y:-19.75,alpha:0.8627},0).wait(1).to({y:-20.3,alpha:0.8824},0).wait(1).to({y:-20.7,alpha:0.902},0).wait(1).to({y:-20.95,alpha:0.9216},0).wait(1).to({y:-21.1,alpha:0.9412},0).wait(1).to({y:-21.2,alpha:0.9608},0).wait(1).to({alpha:0.9804},0).wait(1).to({x:317.55,y:-21.25,alpha:1},0).wait(1));

	// пузырь
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(635,534.5,1,1,0,0,0,34,34.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:635.5,y:503.25,alpha:0.0196},0).wait(1).to({x:636,y:473.2,alpha:0.0392},0).wait(1).to({x:636.45,y:444.4,alpha:0.0588},0).wait(1).to({x:636.95,y:416.75,alpha:0.0784},0).wait(1).to({x:637.35,y:390.25,alpha:0.098},0).wait(1).to({x:637.8,y:364.85,alpha:0.1176},0).wait(1).to({x:638.2,y:340.6,alpha:0.1373},0).wait(1).to({x:638.6,y:317.4,alpha:0.1569},0).wait(1).to({x:638.95,y:295.3,alpha:0.1765},0).wait(1).to({x:639.3,y:274.2,alpha:0.1961},0).wait(1).to({x:639.65,y:254.1,alpha:0.2157},0).wait(1).to({x:639.95,y:234.95,alpha:0.2353},0).wait(1).to({x:640.25,y:216.8,alpha:0.2549},0).wait(1).to({x:640.55,y:199.55,alpha:0.2745},0).wait(1).to({x:640.8,y:183.25,alpha:0.2941},0).wait(1).to({x:641.05,y:167.8,alpha:0.3137},0).wait(1).to({x:641.3,y:153.2,alpha:0.3333},0).wait(1).to({x:641.55,y:139.45,alpha:0.3529},0).wait(1).to({x:641.75,y:126.5,alpha:0.3725},0).wait(1).to({x:641.95,y:114.35,alpha:0.3922},0).wait(1).to({x:642.15,y:102.95,alpha:0.4118},0).wait(1).to({x:642.3,y:92.3,alpha:0.4314},0).wait(1).to({x:642.5,y:82.35,alpha:0.451},0).wait(1).to({x:642.65,y:73.05,alpha:0.4706},0).wait(1).to({x:642.8,y:64.45,alpha:0.4902},0).wait(1).to({x:642.9,y:56.5,alpha:0.5098},0).wait(1).to({x:643.05,y:49.15,alpha:0.5294},0).wait(1).to({x:643.15,y:42.35,alpha:0.549},0).wait(1).to({x:643.25,y:36.15,alpha:0.5686},0).wait(1).to({x:643.35,y:30.55,alpha:0.5882},0).wait(1).to({x:643.45,y:25.4,alpha:0.6078},0).wait(1).to({x:643.5,y:20.75,alpha:0.6275},0).wait(1).to({x:643.6,y:16.55,alpha:0.6471},0).wait(1).to({x:643.65,y:12.8,alpha:0.6667},0).wait(1).to({x:643.7,y:9.45,alpha:0.6863},0).wait(1).to({x:643.75,y:6.5,alpha:0.7059},0).wait(1).to({x:643.8,y:3.95,alpha:0.7255},0).wait(1).to({x:643.85,y:1.7,alpha:0.7451},0).wait(1).to({y:-0.2,alpha:0.7647},0).wait(1).to({x:643.9,y:-1.85,alpha:0.7843},0).wait(1).to({y:-3.2,alpha:0.8039},0).wait(1).to({x:643.95,y:-4.3,alpha:0.8235},0).wait(1).to({y:-5.2,alpha:0.8431},0).wait(1).to({y:-5.85,alpha:0.8627},0).wait(1).to({y:-6.4,alpha:0.8824},0).wait(1).to({y:-6.75,alpha:0.902},0).wait(1).to({y:-7,alpha:0.9216},0).wait(1).to({y:-7.15,alpha:0.9412},0).wait(1).to({y:-7.25,alpha:0.9608},0).wait(1).to({alpha:0.9804},0).wait(1).to({x:644,y:-7.3,alpha:1},0).wait(1));

	// пузырь
	this.instance_7 = new lib.Символ3();
	this.instance_7.setTransform(316.4,541.95,1,1,0,0,0,23.9,24.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:24,regY:24.4,x:316.05,y:510,alpha:0.0196},0).wait(1).to({x:315.65,y:479.25,alpha:0.0392},0).wait(1).to({x:315.25,y:449.7,alpha:0.0588},0).wait(1).to({x:314.85,y:421.35,alpha:0.0784},0).wait(1).to({x:314.5,y:394.2,alpha:0.098},0).wait(1).to({x:314.15,y:368.2,alpha:0.1176},0).wait(1).to({x:313.8,y:343.35,alpha:0.1373},0).wait(1).to({x:313.45,y:319.55,alpha:0.1569},0).wait(1).to({x:313.15,y:296.9,alpha:0.1765},0).wait(1).to({x:312.85,y:275.25,alpha:0.1961},0).wait(1).to({x:312.6,y:254.65,alpha:0.2157},0).wait(1).to({x:312.35,y:235.05,alpha:0.2353},0).wait(1).to({x:312.1,y:216.45,alpha:0.2549},0).wait(1).to({x:311.85,y:198.75,alpha:0.2745},0).wait(1).to({x:311.6,y:182.05,alpha:0.2941},0).wait(1).to({x:311.4,y:166.2,alpha:0.3137},0).wait(1).to({x:311.2,y:151.25,alpha:0.3333},0).wait(1).to({x:311,y:137.15,alpha:0.3529},0).wait(1).to({x:310.85,y:123.9,alpha:0.3725},0).wait(1).to({x:310.65,y:111.45,alpha:0.3922},0).wait(1).to({x:310.5,y:99.75,alpha:0.4118},0).wait(1).to({x:310.35,y:88.8,alpha:0.4314},0).wait(1).to({x:310.2,y:78.6,alpha:0.451},0).wait(1).to({x:310.1,y:69.15,alpha:0.4706},0).wait(1).to({x:309.95,y:60.3,alpha:0.4902},0).wait(1).to({x:309.85,y:52.15,alpha:0.5098},0).wait(1).to({x:309.75,y:44.6,alpha:0.5294},0).wait(1).to({x:309.65,y:37.65,alpha:0.549},0).wait(1).to({x:309.6,y:31.3,alpha:0.5686},0).wait(1).to({x:309.5,y:25.5,alpha:0.5882},0).wait(1).to({x:309.45,y:20.25,alpha:0.6078},0).wait(1).to({x:309.35,y:15.5,alpha:0.6275},0).wait(1).to({x:309.3,y:11.2,alpha:0.6471},0).wait(1).to({x:309.25,y:7.35,alpha:0.6667},0).wait(1).to({x:309.2,y:3.9,alpha:0.6863},0).wait(1).to({x:309.15,y:0.9,alpha:0.7059},0).wait(1).to({y:-1.75,alpha:0.7255},0).wait(1).to({x:309.1,y:-4,alpha:0.7451},0).wait(1).to({x:309.05,y:-6,alpha:0.7647},0).wait(1).to({y:-7.65,alpha:0.7843},0).wait(1).to({y:-9.05,alpha:0.8039},0).wait(1).to({x:309,y:-10.15,alpha:0.8235},0).wait(1).to({y:-11.1,alpha:0.8431},0).wait(1).to({y:-11.8,alpha:0.8627},0).wait(1).to({y:-12.3,alpha:0.8824},0).wait(1).to({y:-12.7,alpha:0.902},0).wait(1).to({y:-12.95,alpha:0.9216},0).wait(1).to({y:-13.1,alpha:0.9412},0).wait(1).to({y:-13.2,alpha:0.9608},0).wait(1).to({alpha:0.9804},0).wait(1).to({y:-13.25,alpha:1},0).wait(1));

	// пузырь
	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(78,518.95,1,1,0,0,0,14,14.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({x:78.05,y:493.2,alpha:0.0196},0).wait(1).to({x:78.1,y:468.5,alpha:0.0392},0).wait(1).to({x:78.15,y:444.75,alpha:0.0588},0).wait(1).to({x:78.2,y:422,alpha:0.0784},0).wait(1).to({x:78.25,y:400.2,alpha:0.098},0).wait(1).to({x:78.3,y:379.3,alpha:0.1176},0).wait(1).to({x:78.35,y:359.35,alpha:0.1373},0).wait(1).to({x:78.4,y:340.25,alpha:0.1569},0).wait(1).to({y:322.05,alpha:0.1765},0).wait(1).to({x:78.45,y:304.65,alpha:0.1961},0).wait(1).to({x:78.5,y:288.1,alpha:0.2157},0).wait(1).to({x:78.55,y:272.35,alpha:0.2353},0).wait(1).to({y:257.4,alpha:0.2549},0).wait(1).to({x:78.6,y:243.25,alpha:0.2745},0).wait(1).to({y:229.8,alpha:0.2941},0).wait(1).to({x:78.65,y:217.1,alpha:0.3137},0).wait(1).to({x:78.7,y:205.1,alpha:0.3333},0).wait(1).to({y:193.75,alpha:0.3529},0).wait(1).to({x:78.75,y:183.1,alpha:0.3725},0).wait(1).to({y:173.1,alpha:0.3922},0).wait(1).to({y:163.7,alpha:0.4118},0).wait(1).to({x:78.8,y:154.95,alpha:0.4314},0).wait(1).to({y:146.75,alpha:0.451},0).wait(1).to({x:78.85,y:139.1,alpha:0.4706},0).wait(1).to({y:132,alpha:0.4902},0).wait(1).to({y:125.45,alpha:0.5098},0).wait(1).to({y:119.4,alpha:0.5294},0).wait(1).to({x:78.9,y:113.85,alpha:0.549},0).wait(1).to({y:108.75,alpha:0.5686},0).wait(1).to({y:104.05,alpha:0.5882},0).wait(1).to({y:99.8,alpha:0.6078},0).wait(1).to({y:96,alpha:0.6275},0).wait(1).to({x:78.95,y:92.55,alpha:0.6471},0).wait(1).to({y:89.45,alpha:0.6667},0).wait(1).to({y:86.7,alpha:0.6863},0).wait(1).to({y:84.3,alpha:0.7059},0).wait(1).to({y:82.15,alpha:0.7255},0).wait(1).to({y:80.3,alpha:0.7451},0).wait(1).to({y:78.75,alpha:0.7647},0).wait(1).to({y:77.4,alpha:0.7843},0).wait(1).to({y:76.3,alpha:0.8039},0).wait(1).to({y:75.4,alpha:0.8235},0).wait(1).to({y:74.65,alpha:0.8431},0).wait(1).to({y:74.1,alpha:0.8627},0).wait(1).to({y:73.65,alpha:0.8824},0).wait(1).to({y:73.35,alpha:0.902},0).wait(1).to({y:73.15,alpha:0.9216},0).wait(1).to({y:73,alpha:0.9412},0).wait(1).to({y:72.95,alpha:0.9608},0).wait(1).to({alpha:0.9804},0).wait(1).to({x:79,alpha:1},0).wait(1));

	// краб
	this.instance_9 = new lib.Символ1();
	this.instance_9.setTransform(799.1,324,1,1,0,0,0,29.1,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:28.4,x:789.05,y:316.4},0).wait(1).to({x:779.05,y:317.4},0).wait(1).to({x:769.05,y:318.45},0).wait(1).to({x:759.05,y:319.45},0).wait(1).to({x:749.05,y:320.5},0).wait(1).to({x:739.05,y:321.5},0).wait(1).to({x:729.05,y:322.55},0).wait(1).to({x:719,y:323.55},0).wait(1).to({x:709,y:324.55},0).wait(1).to({x:699,y:325.6},0).wait(1).to({x:689,y:326.6},0).wait(1).to({x:679,y:327.65},0).wait(1).to({x:669,y:328.65},0).wait(1).to({x:659,y:329.7},0).wait(1).to({x:649,y:330.7},0).wait(1).to({x:638.95,y:331.7},0).wait(1).to({x:628.95,y:332.75},0).wait(1).to({x:618.95,y:333.75},0).wait(1).to({x:608.95,y:334.8},0).wait(1).to({x:598.95,y:335.8},0).wait(1).to({x:588.95,y:336.85},0).wait(1).to({x:578.95,y:337.85},0).wait(1).to({x:568.95,y:338.9},0).wait(1).to({x:576.95,y:332.4},0).wait(1).to({x:586.05,y:326.95},0).wait(1).to({x:595.9,y:322.25},0).wait(1).to({x:606.2,y:318.1},0).wait(1).to({x:616.55,y:314.3},0).wait(1).to({x:626.7,y:310.65},0).wait(1).to({x:636.35,y:306.85},0).wait(1).to({x:645.1,y:302.8},0).wait(1).to({x:655.1,y:300},0).wait(1).to({x:667.2,y:299.25},0).wait(1).to({x:679.2,y:298.7},0).wait(1).to({x:688.8,y:296.65},0).wait(1).to({x:697.35,y:294.65},0).wait(1).to({x:707.05,y:294.8},0).wait(1).to({x:716.9,y:295.7},0).wait(1).to({x:725.95,y:296.1},0).wait(1).to({x:733.35,y:294.7},0).wait(1).to({x:743.15,y:294},0).wait(1).to({x:755.75,y:294.9},0).wait(1).to({x:764.55,y:293.8},0).wait(1).to({x:768.45,y:290.1},0).wait(1).to({x:771.1,y:286.1},0).wait(1).to({x:773,y:282},0).wait(1).to({x:774.65,y:278.3},0).wait(1).to({x:776.5,y:275.3},0).wait(1).to({x:779.1,y:273.4},0).wait(1).to({x:782.9,y:273},0).wait(1).to({x:788.4,y:274.4},0).wait(1));

	// фон
	this.instance_10 = new lib.фон();
	this.instance_10.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(135.5,205.5,919.7,421);
// library properties:
lib.properties = {
	id: 'ADD625E9BA07DD41AA2D82A512D42EE6',
	width: 750,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фон_.png", id:"фон"},
		{src:"images/подводный мир_atlas_1.png", id:"подводный мир_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ADD625E9BA07DD41AA2D82A512D42EE6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;