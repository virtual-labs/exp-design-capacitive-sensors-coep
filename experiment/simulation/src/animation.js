
var frequency;
var distanceInput;
var speedOFsound;
var distPath;
var speed;
var calculateTime;
var area ;
var ArrayJson = [];
var TimeMasterJson = {};

function animation() {
	
	$("#canvas-div").html('');
	$("#centerText1").html('CAPACITIVE SENSOR ');
	$("#centerText").html('CONFIGURATION');

	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 900;
	var h = 600;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

	var x = 100;
	var y = 100;
	
	distance = distance;
	length = length;

	// 	smallR = 0 ;
	//	poisRto = 0.25;
	//	E = 2.07 * Math.pow(10, 5);
	//	console.log("young module"+E);
	//	diffR = (Math.pow(radius,2)- Math.pow(smallR,2));
	//	console.log("radius diff"+diffR);
	//	numY = 3 * pressure *(1 - Math.pow(poisRto, 2))* Math.pow(diffR,2);
	//	console.log("numarator"+numY);
	//	denoY = 16 * E *(Math.pow(thickness, 3));
	//	console.log("denostor"+denoY);
	//	y_ans = numY / denoY;



	area = width1 * length;

	constant = 0;
	matName = '';
	if (material == 1){
		constant = 8;
		matName = "Mica";
	}else if (material == 2){
		constant = 5;
		matName = "Glass";
	}else if (material == 3){
		constant = 2.1;
		matName = "Teflon";
	}
	
	//* Math.pow(10, -12)
	capacitance = (constant ) * (area* Math.pow(10, -6) )/ (distance* Math.pow(10, -3));
	//	console.log("area capata"+capacitance);
	capacitance1 = ((constant ) * (area* Math.pow(10, -4) )/ (distance* Math.pow(10, -3))).toFixed(3);

	calculateTime = parseFloat(capacitance1);
//	calculateTime = capacitance / Math.pow(10, -12);
	var plate ;
	var plae_line;

	
//	plate_fix(x, y);
	var x1 = 0;
	if (distance != 0){
		x1 = (distance * (100 - 50) / 10) + 50;
	
//			plate_rotate(x-200+x1, y);
	}


	var USworking = paper.image("images/capacitivesensor1.jpg", (x+140), (y+10),430, 380);
	distText = paper.text((x + 200), (y + 440), "Distance ( " + distance + " mm )").attr({ 'font-size': 25, 'stroke': '#800000' });
	distText1 = paper.text((x + 400), (y + 440), "Material is "+matName).attr({ 'font-size': 25, 'stroke': '#800000' });

	function plate_fix(x, y) {
		paper.path("M " + (x) + " " + (y + 100) + "l 0  200 l 100 -80 l 0 -200 l -103 80").attr({ 'stroke-width': 12, 'stroke': 'black', 'fill': 'grey' });
		paper.path("M " + (x) + " " + (y + 200) + "l -100  0 ").attr({ 'stroke-width': 8, 'stroke': 'black' });
		
	}

	function plate_rotate(x, y) {
		plate = paper.path("M " + (x + 200) + " " + (y + 100) + "l 0  200 l 100 -80 l 0 -200 l -103 80").attr({ 'stroke-width': 12, 'stroke': 'black', 'fill': 'grey' });
		plae_line = paper.path("M " + (x + 250) + " " + (y + 180) + "l 100  -20 ").attr({ 'stroke-width': 8, 'stroke': 'black' });
	}
	

	var animate = 0 ;

	
//	increment(x, y) ;
	
	function increment(x, y) {
		
		floatIec = setInterval(function() {
			if (animate == 0) {

			 plate.remove();
			 plae_line.remove();
			 plate_rotate(x, y-100); 
			 animate = 1;
			 

			}
			else {
				clearInterval(floatIec);
				decrement(x, y) ;
			

			}
		}, 1000);
	};
	
	function decrement(x, y) {
		
		floatDec = setInterval(function() {
			if (animate == 1) {

				 plate.remove();
			 plae_line.remove();
			 plate_rotate(x, y); 
			 animate = 0;
			 

			}
			else {
				clearInterval(floatDec);
				increment(x, y);
			

			}
		}, 1000);
	};


	$("#timeAnswer").prop('hidden', false);


	//changenames= setInterval(names,3500);


 function  clear(){
	 decrement(x, y);
 }
}
capacorrt = 0;
function addToMasterJSON() {
	clear();
	tempJson = {};
	tempJson.frequency = width1;
	tempJson.distanceInput = distance;
	tempJson.speedOFsound = length;
	tempJson.calculateTime = calculateTime;
	ArrayJson.push(tempJson);
	TimeMasterJson.demo = ArrayJson;

	tableCreate(TimeMasterJson);

}