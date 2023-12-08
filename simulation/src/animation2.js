
var frequency;
var distanceInput;
var speedOFsound;
var distPath;
var speed;
var calculateTime;
var ArrayJson = [];
var masterJson = {};
var animate = 0 ;
var area = 0;
function animation2(){
	$("#canvas-div").html('');	
    $("#centerText1").html('CAPACITIVE SENSOR ');
    $("#centerText").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
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
width = width;
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
	console.log("area"+area);
	capacitance = (8.852 * Math.pow(10,-12)*area)/distance;
	console.log("area capata"+capacitance);
	calculateTime = capacitance/ Math.pow(10, -12);
	

console.log("Time Calculation"+calculateTime)


var plate ;
	var plae_line;

	console.log("Time Calculation" + calculateTime)
	plate_fix(x, y);
	
//	plate_rotate(x, y);

	//var USworking = paper.image("images/capacitivearea.gif", (x+140), (y+10),430, 380);

	function plate_fix(x, y) {
		paper.path("M " + (x) + " " + (y + 100) + "l 0  200 l 100 -80 l 0 -200 l -103 80").attr({ 'stroke-width': 12, 'stroke': 'black', 'fill': 'grey' });
		paper.path("M " + (x) + " " + (y + 200) + "l -100  0 ").attr({ 'stroke-width': 8, 'stroke': 'black' });
		distText = paper.text((x + 200), (y + 440), "Distance ( " + distance + " mm )").attr({ 'font-size': 25, 'stroke': '#800000' });
		distText1 = paper.text((x + 400), (y + 440), "Material is Air").attr({ 'font-size': 25, 'stroke': '#800000' });
	}

	function plate_rotate(x, y) {
		plate = paper.path("M " + (x + 200) + " " + (y + 100) + "l 0  200 l 100 -80 l 0 -200 l -103 80").attr({ 'stroke-width': 12, 'stroke': 'black', 'fill': 'grey' });
		plae_line = paper.path("M " + (x + 250) + " " + (y + 180) + "l 100  -20 ").attr({ 'stroke-width': 8, 'stroke': 'black' });
	}
	

	var animate = 0 ;

	var x1 = 0;
	var y1 = 0;
	if (distance != 0){
		x1 = (distance * (100 - 50) / 10) + 50;
		console.log("x1 value"+x1);
			plate_rotate(x-200+x1, y);
	}
	
	if (length != 0){
		y1 = (lengthmax * (100 - 10) / 1000) + 10;
		console.log("y1 value"+y1);
			increment(x, y) ;
		
	}
	

	function increment(x, y) {
		
		floatIec = setInterval(function() {
			if (animate == 0) {

				 plate.remove();
			 plae_line.remove();
			plate_rotate(x-200+x1, y-y1);
			 animate = 1;
			}
			
			else {
				clearInterval(floatIec);
				
//				decrement(x, y) ;
			

			}
		}, 1000);
	};
	
	function decrement(x, y) {
		
		floatDec = setInterval(function() {
			if (animate == 1) {

				 plate.remove();
			 plae_line.remove();
			 plate_rotate(x-200+x1, y); 
			 animate = 0;
			 

			}
			
			else {
				clearInterval(floatDec);
				
//				increment(x, y);
			

			}
		}, 1000);
	};


$("#timeAnswer").prop('hidden',false);

$("#checkAsnTime").click(function() {

	decrement(x, y);
	console.log("animate cal");
});




//changenames= setInterval(names,3500);

}



function addToMasterJSON(){
	
						animate = 2;
	                  tempJson={};	
						tempJson.frequency = width1;
						tempJson.distanceInput = distance;
						tempJson.speedOFsound = length;
						tempJson.calculateTime = calculateTime;
						tempJson.area1 = area;
						ArrayJson.push(tempJson);
						masterJson.demo = ArrayJson;
						console.log(masterJson);
						tableCreate(masterJson);

}