(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ферма_atlas_1", frames: [[0,428,189,257],[0,687,189,257],[191,428,189,257],[191,687,189,257],[382,428,41,127],[0,0,426,426]]}
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



(lib.бабочка_крылоголубое = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.бабочка_крылооранжевое = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.бабочка_крылорозовое = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.бабочка_крылофиолетовое = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.бабочка_тело = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.лопости = function() {
	this.initialize(ss["ферма_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.фон = function() {
	this.initialize(img.фон);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2083,2083);// helper functions:

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


(lib.лопости_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.лопости();
	this.instance.setTransform(0,0,0.2394,0.2394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.лопости_2, new cjs.Rectangle(0,0,102,102), null);


(lib.крыло_фиолетовое_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_крылофиолетовое();
	this.instance.setTransform(0,0,0.1122,0.1122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крыло_фиолетовое_2, new cjs.Rectangle(0,0,21.2,28.9), null);


(lib.крыло_розовое_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_крылорозовое();
	this.instance.setTransform(0,0,0.2037,0.2037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крыло_розовое_2, new cjs.Rectangle(0,0,38.5,52.4), null);


(lib.крыло_оранжевое_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_крылооранжевое();
	this.instance.setTransform(0,0,0.2076,0.2076);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крыло_оранжевое_2, new cjs.Rectangle(0,0,39.3,53.4), null);


(lib.крыло_голубое_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_крылоголубое();
	this.instance.setTransform(0,0,0.1217,0.1217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.крыло_голубое_2, new cjs.Rectangle(0,0,23,31.3), null);


(lib.лопости_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.лопости_2();
	this.instance.setTransform(51,51,1,1,0,0,0,51,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.6154,y:51.05},0).wait(1).to({rotation:9.2308,x:50.95},0).wait(1).to({rotation:13.8462,y:51},0).wait(1).to({rotation:18.4615,x:51,y:51.05},0).wait(1).to({rotation:23.0769,x:50.95,y:51},0).wait(1).to({rotation:27.6923},0).wait(1).to({rotation:32.3077,x:51},0).wait(1).to({rotation:36.9231,x:50.95},0).wait(1).to({rotation:41.5385},0).wait(1).to({rotation:46.1538,x:51,y:51.05},0).wait(1).to({rotation:50.7692,y:51},0).wait(1).to({rotation:55.3846},0).wait(1).to({rotation:60},0).wait(1).to({rotation:64.6154,x:50.95,y:51.05},0).wait(1).to({rotation:69.2308,x:51},0).wait(1).to({rotation:73.8462,x:50.95},0).wait(1).to({rotation:78.4615,x:51,y:51},0).wait(1).to({rotation:83.0769,x:50.95,y:51.05},0).wait(1).to({rotation:87.6923,x:51,y:51},0).wait(1).to({rotation:92.3077,y:50.95},0).wait(1).to({rotation:96.9231,x:50.95,y:51},0).wait(1).to({rotation:101.5385,x:51,y:50.95},0).wait(1).to({rotation:106.1538,x:50.95,y:51},0).wait(1).to({rotation:110.7692,y:50.95},0).wait(1).to({rotation:115.3846,y:51},0).wait(1).to({rotation:120,x:51,y:50.95},0).wait(1).to({rotation:124.6154},0).wait(1).to({rotation:129.2308},0).wait(1).to({rotation:133.8462,x:50.95},0).wait(1).to({rotation:138.4615,x:51,y:51},0).wait(1).to({rotation:143.0769},0).wait(1).to({rotation:147.6923,y:50.95},0).wait(1).to({rotation:152.3077,y:51},0).wait(1).to({rotation:156.9231},0).wait(1).to({rotation:161.5385,x:50.95,y:50.95},0).wait(1).to({rotation:166.1538,x:51,y:51},0).wait(1).to({rotation:170.7692,x:50.95},0).wait(1).to({rotation:175.3846,y:50.95},0).wait(1).to({rotation:180,x:51,y:51},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-21.1,144.2,144.2);


(lib.крыло_фиолетовое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крыло_фиолетовое_2();
	this.instance.setTransform(21.2,14.4,1,1,0,0,0,21.2,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.6,scaleX:0.9175,x:11.45},0).wait(1).to({scaleX:0.8349,x:12.35},0).wait(1).to({scaleX:0.7524,x:13.2},0).wait(1).to({scaleX:0.6698,x:14.1},0).wait(1).to({scaleX:0.5873,x:14.95},0).wait(1).to({scaleX:0.5047,x:15.85},0).wait(1).to({scaleX:0.6018,x:14.8},0).wait(1).to({scaleX:0.699,x:13.75},0).wait(1).to({scaleX:0.7961,x:12.75},0).wait(1).to({scaleX:0.8932,x:11.7},0).wait(1).to({scaleX:0.9904,x:10.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,28.9);


(lib.крыло_розовое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крыло_розовое_2();
	this.instance.setTransform(38.5,26.2,1,1,0,0,0,38.5,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.3,scaleX:0.7708,x:23.7},0).wait(1).to({scaleX:0.5416,x:28.05},0).wait(1).to({scaleX:0.6923,x:25.15},0).wait(1).to({scaleX:0.8431,x:22.25},0).wait(1).to({scaleX:0.9938,x:19.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,52.4);


(lib.крыло_оранжевое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крыло_оранжевое_2();
	this.instance.setTransform(39.2,26.7,1,1,0,0,0,39.2,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.6,scaleX:0.9505,x:20.55},0).wait(1).to({scaleX:0.9009,x:21.5},0).wait(1).to({scaleX:0.8514,x:22.5},0).wait(1).to({scaleX:0.8018,x:23.45},0).wait(1).to({scaleX:0.7523,x:24.45},0).wait(1).to({scaleX:0.7028,x:25.4},0).wait(1).to({scaleX:0.6532,x:26.4},0).wait(1).to({scaleX:0.6037,x:27.4},0).wait(1).to({scaleX:0.5541,x:28.35},0).wait(1).to({scaleX:0.5885,x:27.7},0).wait(1).to({scaleX:0.6229,x:27},0).wait(1).to({scaleX:0.6573,x:26.35},0).wait(1).to({scaleX:0.6916,x:25.65},0).wait(1).to({scaleX:0.726,x:25},0).wait(1).to({scaleX:0.7604,x:24.3},0).wait(1).to({scaleX:0.7948,x:23.65},0).wait(1).to({scaleX:0.8292,x:22.95},0).wait(1).to({scaleX:0.8635,x:22.3},0).wait(1).to({scaleX:0.8979,x:21.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.3,53.4);


(lib.крыло_голубое_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.крыло_голубое_2();
	this.instance.setTransform(23,15.6,1,1,0,0,0,23,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:11.5,scaleX:0.8571,x:13.1},0).wait(1).to({scaleX:0.7141,x:14.75},0).wait(1).to({scaleX:0.5712,x:16.4},0).wait(1).to({scaleX:0.4283,x:18},0).wait(1).to({scaleX:0.5399,x:16.75},0).wait(1).to({scaleX:0.6516,x:15.5},0).wait(1).to({scaleX:0.7633,x:14.2},0).wait(1).to({scaleX:0.8749,x:12.9},0).wait(1).to({scaleX:0.9866,x:11.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.1,31.3);


(lib.бабочка_фиолетовая = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_тело();
	this.instance.setTransform(19.1,0,0.2146,0.1817,14.999);

	this.instance_1 = new lib.крыло_фиолетовое_1();
	this.instance_1.setTransform(30.9,14.4,0.9151,1,0,0,180,10.6,14.4);

	this.instance_2 = new lib.крыло_фиолетовое_1();
	this.instance_2.setTransform(10.6,15.15,1,1,0,0,0,10.6,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка_фиолетовая, new cjs.Rectangle(0,0,40.6,29.6), null);


(lib.бабочка_розовая = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_тело();
	this.instance.setTransform(37.4,5.5,0.2499,0.2499,14.9977);

	this.instance_1 = new lib.крыло_розовое_1();
	this.instance_1.setTransform(56.7,26.2,0.9272,1,0,0,180,19.2,26.2);

	this.instance_2 = new lib.крыло_розовое_1();
	this.instance_2.setTransform(19.2,28.45,1,1,0,0,0,19.2,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка_розовая, new cjs.Rectangle(0,0,74.5,54.6), null);


(lib.бабочка_оранжевая = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_тело();
	this.instance.setTransform(38.45,6.25,0.2366,0.2362,14.9987);

	this.instance_1 = new lib.крыло_оранжевое_1();
	this.instance_1.setTransform(57.8,26.7,0.8829,1,0,0,180,19.7,26.7);

	this.instance_2 = new lib.крыло_оранжевое_1();
	this.instance_2.setTransform(19.6,26.7,1,1,0,0,0,19.6,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка_оранжевая, new cjs.Rectangle(0,0,75.2,53.4), null);


(lib.бабочка_голубая = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.бабочка_тело();
	this.instance.setTransform(20.9,0,0.2409,0.2409,14.9973);

	this.instance_1 = new lib.крыло_голубое_1();
	this.instance_1.setTransform(32.6,19.9,0.8435,1,0,0,180,11.6,15.6);

	this.instance_2 = new lib.крыло_голубое_1();
	this.instance_2.setTransform(0,6.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.бабочка_голубая, new cjs.Rectangle(0,0,42.4,37.8), null);


// stage content:
(lib.ферма = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// бабочка_тело_png
	this.instance = new lib.бабочка_фиолетовая();
	this.instance.setTransform(-50.7,100.35,1,1,135,0,0,20.2,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:20.3,regY:14.8,rotation:133.604,x:-41.6,y:106.3},0).wait(1).to({rotation:132.12,x:-32.5,y:111.85},0).wait(1).to({rotation:130.573,x:-23.45,y:117.1},0).wait(1).to({rotation:128.961,x:-14.4,y:122.05},0).wait(1).to({rotation:127.284,x:-5.45,y:126.6},0).wait(1).to({rotation:125.541,x:3.5,y:130.8},0).wait(1).to({rotation:123.73,x:12.45,y:134.65},0).wait(1).to({rotation:121.851,x:21.3,y:138.15},0).wait(1).to({rotation:119.905,x:30.05,y:141.25},0).wait(1).to({rotation:117.894,x:38.8,y:144.1},0).wait(1).to({rotation:115.818,x:47.55,y:146.45},0).wait(1).to({rotation:113.68,x:56.2,y:148.55},0).wait(1).to({rotation:111.483,x:64.8,y:150.3},0).wait(1).to({rotation:109.233,x:73.4,y:151.6},0).wait(1).to({rotation:106.933,x:81.95,y:152.65},0).wait(1).to({rotation:104.591,x:90.45,y:153.3},0).wait(1).to({rotation:102.212,x:98.85,y:153.65},0).wait(1).to({rotation:99.8045,x:107.25},0).wait(1).to({rotation:97.3763,x:115.6,y:153.25},0).wait(1).to({rotation:94.9358,x:123.9,y:152.5},0).wait(1).to({rotation:92.4919,x:132.15,y:151.4},0).wait(1).to({rotation:90.0535,x:140.45,y:149.95},0).wait(1).to({rotation:87.6291,x:148.6,y:148.15},0).wait(1).to({rotation:85.2274,x:156.75,y:146},0).wait(1).to({rotation:82.8561,x:164.8,y:143.5},0).wait(1).to({rotation:80.5227,x:172.85,y:140.6},0).wait(1).to({rotation:78.2338,x:180.85,y:137.35},0).wait(1).to({rotation:75.9952,x:188.8,y:133.85},0).wait(1).to({rotation:73.8117,x:196.75,y:129.9},0).wait(1).to({rotation:71.6875,x:204.6,y:125.6},0).wait(1).to({rotation:69.6257,x:212.45,y:121},0).wait(1).to({rotation:67.6287,x:220.2,y:116},0).wait(1).to({rotation:65.6981,x:227.95,y:110.65},0).wait(1).to({rotation:63.8347,x:235.6,y:104.95},0).wait(1).to({rotation:62.0389,x:243.3,y:98.95},0).wait(1).to({rotation:60.9387,x:250.6,y:92.5},0).wait(1).to({rotation:62.5422,x:258,y:86.35},0).wait(1).to({rotation:64.1917,x:265.5,y:80.6},0).wait(1).to({rotation:65.8861,x:273,y:75.1},0).wait(1).to({rotation:67.6245,x:280.55,y:69.85},0).wait(1).to({rotation:69.4051,x:288.2,y:64.95},0).wait(1).to({rotation:71.2261,x:295.9,y:60.3},0).wait(1).to({rotation:73.0849,x:303.65,y:55.95},0).wait(1).to({rotation:74.9789,x:311.45,y:51.95},0).wait(1).to({rotation:76.9048,x:319.4,y:48.2},0).wait(1).to({rotation:78.8588,x:327.3,y:44.75},0).wait(1).to({rotation:80.8372,x:335.35,y:41.6},0).wait(1).to({rotation:82.8355,x:343.4,y:38.75},0).wait(1).to({rotation:84.8491,x:351.55,y:36.2},0).wait(1).to({rotation:86.8733,x:359.75,y:33.9},0).wait(1).to({rotation:88.903,x:368.05,y:31.95},0).wait(1).to({rotation:90.9332,x:376.35,y:30.25},0).wait(1).to({rotation:92.9588,x:384.75,y:28.85},0).wait(1).to({rotation:94.9749,x:393.25,y:27.75},0).wait(1).to({rotation:96.9765,x:401.75,y:27},0).wait(1).to({rotation:98.959,x:410.4,y:26.5},0).wait(1).to({rotation:100.918,x:419,y:26.3},0).wait(1).to({rotation:102.85,x:427.7,y:26.35},0).wait(1).to({rotation:104.75,x:436.55,y:26.8},0).wait(1).to({rotation:106.616,x:445.35,y:27.4},0).wait(1).to({rotation:108.444,x:454.3,y:28.4},0).wait(1).to({rotation:110.233,x:463.25,y:29.7},0).wait(1).to({rotation:111.979,x:472.3,y:31.2},0).wait(1).to({rotation:113.682,x:481.4,y:33.1},0).wait(1).to({rotation:115.34,x:490.55,y:35.25},0).wait(1).to({rotation:116.953,x:499.8,y:37.7},0).wait(1).to({rotation:118.519,x:509.1,y:40.45},0).wait(1).to({rotation:120.038,x:518.5,y:43.45},0).wait(1).to({rotation:121.511,x:527.9,y:46.8},0).wait(1).to({rotation:122.938,x:537.4,y:50.45},0).wait(1));

	// бабочка_тело_png
	this.instance_1 = new lib.бабочка_розовая();
	this.instance_1.setTransform(-53.4,516,1,1,0,0,0,37.2,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-49.7937,x:-49.9,y:500.5},0).wait(1).to({rotation:-56.1427,y:484.4},0).wait(1).to({rotation:-60.412,x:-51.2,y:468.4},0).wait(1).to({rotation:-36.8429,x:-50.65,y:452.5},0).wait(1).to({rotation:3.9284,x:-41.95,y:439.3},0).wait(1).to({rotation:11.4803,x:-27.85,y:431.55},0).wait(1).to({rotation:23.9215,x:-12.6,y:426.5},0).wait(1).to({rotation:26.6161,x:3.2,y:423.3},0).wait(1).to({rotation:23.6296,x:19.15,y:420.85},0).wait(1).to({rotation:16.4265,x:33.2,y:414.4},0).wait(1).to({rotation:-0.5748,x:47.25,y:406.75},0).wait(1).to({rotation:-26.1132,x:56.7,y:393.95},0).wait(1).to({rotation:-15.776,x:65,y:380.1},0).wait(1).to({rotation:14.4146,x:79.05,y:372.6},0).wait(1).to({rotation:16.2564,x:94.05,y:366.75},0).wait(1).to({rotation:30.0563,x:109.7,y:363.05},0).wait(1).to({rotation:41.316,x:125.8,y:362.75},0).wait(1).to({rotation:56.4662,x:141.15,y:367.35},0).wait(1).to({rotation:55.5939,x:156.35,y:372.75},0).wait(1).to({rotation:55.0213,x:171.65,y:377.9},0).wait(1).to({rotation:54.4963,x:186.9,y:382.95},0).wait(1).to({rotation:53.9483,x:202.25,y:387.85},0).wait(1).to({rotation:52.2786,x:217.65,y:392.55},0).wait(1).to({rotation:47.5807,x:233.35,y:396.25},0).wait(1).to({rotation:43.5973,x:249.2,y:398.75},0).wait(1).to({rotation:39.9529,x:265.25,y:400.3},0).wait(1).to({rotation:36.0621,x:281.4,y:400.7},0).wait(1).to({rotation:18.2423,x:297.45,y:399.55},0).wait(1).to({rotation:15.9048,x:309.1,y:395.15},0).wait(1).to({rotation:15.7961,x:320.7,y:390.8},0).wait(1).to({rotation:15.7175,x:332.35,y:386.4},0).wait(1).to({rotation:15.648,x:344,y:381.95},0).wait(1).to({rotation:15.5817,x:355.65,y:377.5},0).wait(1).to({rotation:15.5158,x:367.25,y:373.05},0).wait(1).to({rotation:15.4484,x:378.9,y:368.55},0).wait(1).to({rotation:16.3187,x:390.55,y:364.15},0).wait(1).to({rotation:16.9351,x:402.2,y:359.95},0).wait(1).to({rotation:17.4312,x:413.95,y:355.85},0).wait(1).to({rotation:18.0367,x:425.75,y:351.8},0).wait(1).to({rotation:18.9975,x:437.55,y:347.95},0).wait(1).to({rotation:21.3344,x:449.5,y:344.45},0).wait(1).to({rotation:27.4455,x:461.65,y:341.9},0).wait(1).to({rotation:30.4358,x:474,y:340.25},0).wait(1).to({rotation:33.3562,x:486.4,y:339.25},0).wait(1).to({rotation:37.5158,x:498.85,y:339},0).wait(1).to({rotation:45.0698,x:511.15,y:340},0).wait(1).to({rotation:43.6387,x:523.5,y:341.6},0).wait(1).to({rotation:43.3863,x:536,y:343.15},0).wait(1).to({rotation:43.2662,x:548.35,y:344.65},0).wait(1).to({rotation:43.1917,x:560.65,y:346.05},0).wait(1).to({rotation:43.1397,x:573.05,y:347.5},0).wait(1).to({rotation:43.1006,x:585.4,y:348.95},0).wait(1).to({rotation:43.0697,x:597.8,y:350.4},0).wait(1).to({rotation:43.0445,x:610.15,y:351.8},0).wait(1).to({rotation:43.0234,x:622.5,y:353.25},0).wait(1).to({rotation:43.0053,x:634.9,y:354.6},0).wait(1).to({rotation:42.9897,x:647.25,y:356},0).wait(1).to({rotation:42.9759,x:659.6,y:357.4},0).wait(1).to({rotation:42.9636,x:671.95,y:358.85},0).wait(1).to({rotation:42.9525,x:684.4,y:360.25},0).wait(1).to({rotation:42.9426,x:696.75,y:361.65},0).wait(1).to({rotation:42.9334,x:709.1,y:363.05},0).wait(1).to({rotation:42.9251,x:721.45,y:364.45},0).wait(1).to({rotation:42.9174,x:733.8,y:365.85},0).wait(1).to({rotation:42.9102,x:746.2,y:367.25},0).wait(1).to({rotation:42.9036,x:758.55,y:368.6},0).wait(1).to({rotation:42.8973,x:770.9,y:369.95},0).wait(1).to({rotation:42.8915,x:783.25,y:371.35},0).wait(1).to({rotation:42.886,x:795.6,y:372.75},0).wait(1).to({rotation:42.8808,x:808,y:374.1},0).wait(1));

	// бабочка_тело_png
	this.instance_2 = new lib.бабочка_голубая();
	this.instance_2.setTransform(-36.1,328.5,1,1,104.9983,0,0,22.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:21.2,regY:18.9,rotation:103.586,x:-29.45},0).wait(1).to({rotation:102.128,x:-22.25,y:330.2},0).wait(1).to({rotation:100.654,x:-14.95,y:331.65},0).wait(1).to({rotation:99.1667,x:-7.7,y:332.95},0).wait(1).to({rotation:97.6678,x:-0.5,y:334},0).wait(1).to({rotation:96.159,x:6.85,y:334.85},0).wait(1).to({rotation:94.6425,x:14.1,y:335.55},0).wait(1).to({rotation:93.1202,x:21.4,y:336},0).wait(1).to({rotation:91.5943,x:28.6,y:336.35},0).wait(1).to({rotation:90.067,x:35.95,y:336.5},0).wait(1).to({rotation:88.5404,x:43.2,y:336.4},0).wait(1).to({rotation:87.0165,x:50.45,y:336.1},0).wait(1).to({rotation:85.4977,x:57.7,y:335.65},0).wait(1).to({rotation:83.9859,x:64.95,y:335},0).wait(1).to({rotation:82.4831,x:72.25,y:334.05},0).wait(1).to({rotation:80.9914,x:79.55,y:333.05},0).wait(1).to({rotation:79.5126,x:86.8,y:331.8},0).wait(1).to({rotation:78.0484,x:94.1,y:330.35},0).wait(1).to({rotation:76.6006,x:101.35,y:328.7},0).wait(1).to({rotation:75.1705,x:108.7,y:326.9},0).wait(1).to({rotation:73.7597,x:116,y:324.85},0).wait(1).to({rotation:72.3695,x:123.25,y:322.6},0).wait(1).to({rotation:71.0008,x:130.55,y:320.2},0).wait(1).to({rotation:69.6549,x:137.85,y:317.6},0).wait(1).to({rotation:68.3325,x:145.15,y:314.8},0).wait(1).to({rotation:67.0344,x:152.4,y:311.75},0).wait(1).to({rotation:65.7613,x:159.7,y:308.6},0).wait(1).to({rotation:64.5135,x:167,y:305.2},0).wait(1).to({rotation:63.2916,x:174.35,y:301.6},0).wait(1).to({rotation:62.0957,x:181.6,y:297.85},0).wait(1).to({rotation:60.9261,x:188.95,y:293.9},0).wait(1).to({rotation:59.7828,x:196.2,y:289.65},0).wait(1).to({rotation:58.6658,x:203.55,y:285.3},0).wait(1).to({rotation:57.575,x:210.9,y:280.75},0).wait(1).to({rotation:56.5104,x:218.2,y:276},0).wait(1).to({rotation:55.4715,x:225.55,y:271},0).wait(1).to({rotation:54.4583,x:232.8,y:265.9},0).wait(1).to({rotation:53.4702,x:240.15,y:260.55},0).wait(1).to({rotation:52.507,x:247.5,y:254.95},0).wait(1).to({rotation:51.5683,x:254.85,y:249.25},0).wait(1).to({rotation:50.6536,x:262.2,y:243.35},0).wait(1).to({rotation:49.7624,x:269.45,y:237.2},0).wait(1).to({rotation:48.8943,x:276.8,y:230.85},0).wait(1).to({rotation:48.0487,x:284.15,y:224.3},0).wait(1).to({rotation:47.2251,x:291.5,y:217.6},0).wait(1).to({rotation:45.1275,x:299.45,y:209.25},0).wait(1).to({rotation:48.1503,x:307.65,y:201.4},0).wait(1).to({rotation:51.3733,x:316,y:194.2},0).wait(1).to({rotation:54.7948,x:324.35,y:187.75},0).wait(1).to({rotation:58.4071,x:333,y:181.95},0).wait(1).to({rotation:62.1957,x:341.75,y:176.85},0).wait(1).to({rotation:66.1385,x:350.65,y:172.45},0).wait(1).to({rotation:70.2057,x:359.65,y:168.7},0).wait(1).to({rotation:74.361,x:368.85,y:165.6},0).wait(1).to({rotation:78.5626,x:378.2,y:163.3},0).wait(1).to({rotation:82.7659,x:387.65,y:161.6},0).wait(1).to({rotation:86.9261,x:397.35,y:160.55},0).wait(1).to({rotation:91.0013,x:407.1,y:160.3},0).wait(1).to({rotation:94.9544,x:416.95,y:160.7},0).wait(1).to({rotation:98.7553,x:427,y:161.8},0).wait(1).to({rotation:102.381,x:437.25,y:163.65},0).wait(1).to({rotation:105.817,x:447.5,y:166.15},0).wait(1).to({rotation:109.055,x:458.05,y:169.35},0).wait(1).to({rotation:112.093,x:468.65,y:173.2},0).wait(1).to({rotation:114.933,x:479.35,y:177.75},0).wait(1).to({rotation:117.581,x:490.25,y:183.05},0).wait(1).to({rotation:120.046,x:501.25,y:189},0).wait(1).to({rotation:122.339,x:512.4,y:195.65},0).wait(1).to({rotation:124.469,x:523.65,y:203},0).wait(1).to({rotation:126.449,x:535.1,y:211},0).wait(1));

	// бабочка_тело_png
	this.instance_3 = new lib.бабочка_оранжевая();
	this.instance_3.setTransform(560.85,526.65,1,1,-74.9989,0,0,6.5,24.9);
	this.instance_3.cache(-2,-2,79,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:37.6,regY:26.7,scaleX:1.0057,scaleY:1.0057,rotation:-72.9145,x:560,y:496.9},0).wait(1).to({scaleX:1.0114,scaleY:1.0114,rotation:-70.7199,x:549.5,y:496.3},0).wait(1).to({scaleX:1.017,scaleY:1.017,rotation:-68.459,x:539.05,y:495.4},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,rotation:-66.1446,x:528.65,y:494.05},0).wait(1).to({scaleX:1.0283,scaleY:1.0283,rotation:-63.7819,x:518.45,y:492.3},0).wait(1).to({scaleX:1.034,scaleY:1.034,rotation:-61.3864,x:508.25,y:490.1},0).wait(1).to({scaleX:1.0397,scaleY:1.0397,rotation:-58.9652,x:498.2,y:487.55},0).wait(1).to({scaleX:1.0453,scaleY:1.0453,rotation:-56.5357,x:488.25,y:484.55},0).wait(1).to({scaleX:1.051,scaleY:1.051,rotation:-54.1069,x:478.45,y:481.15},0).wait(1).to({scaleX:1.0567,scaleY:1.0567,rotation:-51.6951,x:468.9,y:477.3},0).wait(1).to({scaleX:1.0623,scaleY:1.0623,rotation:-49.3114,x:459.35,y:473.1},0).wait(1).to({scaleX:1.068,scaleY:1.068,rotation:-46.9661,x:450.05,y:468.5},0).wait(1).to({scaleX:1.0737,scaleY:1.0737,rotation:-44.672,x:440.95,y:463.45},0).wait(1).to({scaleX:1.0793,scaleY:1.0793,rotation:-42.4383,x:432,y:458.05},0).wait(1).to({scaleX:1.085,scaleY:1.085,rotation:-40.2706,x:423.35,y:452.35},0).wait(1).to({scaleX:1.0907,scaleY:1.0907,rotation:-38.1733,x:414.75,y:446.2},0).wait(1).to({scaleX:1.0963,scaleY:1.0963,rotation:-47.1361,x:398.65,y:434.25},0).wait(1).to({scaleX:1.102,scaleY:1.102,rotation:-51.8491,x:383.3,y:425.5},0).wait(1).to({scaleX:1.1077,scaleY:1.1077,rotation:-56.297,x:367.35,y:418.1},0).wait(1).to({scaleX:1.1134,scaleY:1.1134,rotation:-60.4261,x:351.05,y:412.05},0).wait(1).to({scaleX:1.119,scaleY:1.119,rotation:-64.2235,x:334.6,y:407.2},0).wait(1).to({scaleX:1.1247,scaleY:1.1247,rotation:-67.6859,x:318,y:403.55},0).wait(1).to({scaleX:1.1304,scaleY:1.1304,rotation:-70.8271,x:301.35,y:400.85},0).wait(1).to({scaleX:1.136,scaleY:1.136,rotation:-73.669,x:284.8,y:399.15},0).wait(1).to({scaleX:1.1417,scaleY:1.1417,rotation:-76.242,x:268.3,y:398.25},0).wait(1).to({scaleX:1.1474,scaleY:1.1474,rotation:-78.57,x:251.95,y:398.05},0).wait(1).to({scaleX:1.153,scaleY:1.153,rotation:-80.679,x:235.7,y:398.6},0).wait(1).to({scaleX:1.1587,scaleY:1.1587,rotation:-66.2504,x:226.6,y:399.25},0).wait(1).to({scaleX:1.1644,scaleY:1.1644,rotation:-63.5505,x:210.8,y:396.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-61.2826,x:194.8,y:392.95},0).wait(1).to({scaleX:1.1757,scaleY:1.1757,rotation:-58.8937,x:179.1,y:388.8},0).wait(1).to({scaleX:1.1814,scaleY:1.1814,rotation:-56.0381,x:163.7,y:384.1},0).wait(1).to({scaleX:1.187,scaleY:1.187,rotation:-52.2383,x:149.2,y:378.95},0).wait(1).to({scaleX:1.1927,scaleY:1.1927,rotation:-46.5153,x:136,y:373.5},0).wait(1).to({scaleX:1.1983,scaleY:1.1983,rotation:-36.264,x:125.6,y:368.75},0).wait(1).to({scaleX:1.204,scaleY:1.204,rotation:-12.5817,x:119.85,y:369.5},0).wait(1).to({scaleX:1.2097,scaleY:1.2097,rotation:2.3696,x:118.6,y:361.95},0).wait(1).to({scaleX:1.2154,scaleY:1.2154,rotation:0.9579,x:115,y:343.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-11.6625,x:109.5,y:318.35},0).wait(1).to({scaleX:1.1846,scaleY:1.1846,rotation:-26.8323,x:96.85,y:293.95},0).wait(1).to({scaleX:1.1692,scaleY:1.1692,rotation:-43.2696,x:76.9,y:274.45},0).wait(1).to({scaleX:1.1539,scaleY:1.1539,rotation:-51.1654,x:57.45,y:262.65},0).wait(1).to({scaleX:1.1385,scaleY:1.1385,rotation:-63.1928,x:34.45,y:252.8},0).wait(1).to({scaleX:1.1231,scaleY:1.1231,rotation:-69.474,x:13.15,y:249.05},0).wait(1).to({scaleX:1.1077,scaleY:1.1077,rotation:-70.1132,x:-5.1,y:247.45},0).wait(1).to({scaleX:1.0923,scaleY:1.0923,rotation:-70.3944,x:-23.15,y:246.1},0).wait(1).to({scaleX:1.077,scaleY:1.077,rotation:-70.562,x:-41.15,y:244.8},0).wait(1).to({scaleX:1.0616,scaleY:1.0616,rotation:-70.6769,x:-59.1,y:243.65},0).wait(1).to({scaleX:1.0462,scaleY:1.0462,rotation:-70.762,x:-77.1,y:242.45},0).wait(1).to({scaleX:1.0308,scaleY:1.0308,rotation:-70.8287,x:-94.95,y:241.35},0).wait(1).to({scaleX:1.0154,scaleY:1.0154,rotation:-70.8828,x:-112.95,y:240.2},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,rotation:-70.9282,x:-130.85,y:239.05},0).wait(1).to({scaleX:0.9847,scaleY:0.9847,rotation:-70.9669,x:-148.85,y:238},0).wait(1).to({scaleX:0.9693,scaleY:0.9693,rotation:-71.0006,x:-166.8,y:236.95},0).wait(1).to({scaleX:0.9539,scaleY:0.9539,rotation:-71.0305,x:-184.65,y:235.9},0).wait(1).to({scaleX:0.9386,scaleY:0.9386,rotation:-71.0572,x:-202.6,y:234.8},0).wait(1).to({scaleX:0.9232,scaleY:0.9232,rotation:-71.0815,x:-220.5,y:233.75},0).wait(1).to({scaleX:0.9078,scaleY:0.9078,rotation:-71.1038,x:-238.4,y:232.7},0).wait(1).to({scaleX:0.8924,scaleY:0.8924,rotation:-71.1245,x:-256.4,y:231.7},0).wait(1).to({scaleX:0.8771,scaleY:0.8771,rotation:-71.144,x:-274.3,y:230.65},0).wait(1).to({scaleX:0.8617,scaleY:0.8617,rotation:-71.1624,x:-292.25,y:229.7},0).wait(1).to({scaleX:0.8463,scaleY:0.8463,rotation:-71.1802,x:-310.15,y:228.65},0).wait(1).to({scaleX:0.8309,scaleY:0.8309,rotation:-71.1975,x:-328.1,y:227.65},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,rotation:-71.2148,x:-346.05,y:226.6},0).wait(1).to({scaleX:0.8002,scaleY:0.8002,rotation:-71.2324,x:-363.85,y:225.6},0).wait(1).to({scaleX:0.7848,scaleY:0.7848,rotation:-71.2509,x:-381.8,y:224.65},0).wait(1).to({scaleX:0.7694,scaleY:0.7694,rotation:-71.2717,x:-399.75,y:223.65},0).wait(1).to({scaleX:0.754,scaleY:0.754,rotation:-71.2973,x:-417.7,y:222.65},0).wait(1).to({scaleX:0.7387,scaleY:0.7387,rotation:-71.3371,x:-435.6,y:221.7},0).wait(1).to({scaleX:0.7233,scaleY:0.7233,rotation:-71.518,x:-453.65,y:220.7},0).wait(1));

	// лопости
	this.instance_4 = new lib.лопости_1();
	this.instance_4.setTransform(417,241,1,1,0,0,0,51,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71));

	// фон_jpg
	this.instance_5 = new lib.фон();
	this.instance_5.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-230.5,250,1084.4,296.70000000000005);
// library properties:
lib.properties = {
	id: '545C736D284B3C4EB0F9EF71127FC29C',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/фон_.jpg", id:"фон"},
		{src:"images/ферма_atlas_1.png", id:"ферма_atlas_1"}
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
an.compositions['545C736D284B3C4EB0F9EF71127FC29C'] = {
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