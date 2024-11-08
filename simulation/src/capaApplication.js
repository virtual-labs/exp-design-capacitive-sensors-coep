//$(document).ready(function() {
    
function mimic() {
	//	var paper = new Raphael(document.getElementById('canvas-div'), 1000, 1000);
	$("#canvas-div").html('');	
	 $("#centerText").html('CONFIGURATION');
	$("#centerText1").html('THICKNESS OF OBJECT');
	

	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 1000;
	var h = 500;
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
	
	x = 10 ;
	y = 10;
	var reactfixl2;
	var reactfix13;
	var  line;
	var reading; 
	var plateflg = 0 ;
	var matName = "";
	
	
	  constant = 0;
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
	console.log("Material string"+matName);
	 min = 1;
	 max = 5;
	var thk =  Math.floor(Math.random() * (max - min + 1) ) + min;
	sensitivity1 = ((5) / (volt - (volt/constant))).toFixed(2);
	sensitivity = parseFloat(sensitivity1);
	samvolt = (((thk/sensitivity) - volt)*-1).toFixed(2);
	thickness1 = (sensitivity * (volt - samvolt)).toFixed(2);
	thickness = parseFloat(thickness1);
	
//		paper.path('M' + (x + 100 ) + ' ' + (y + 100 ) + 'l 80 0 M  ' + (x + 198 ) + ' ' + (y + 100 ) + 'l 100 0 l 0 50 l 10 -10 l -10 10 l -10 -10')
//			.attr({ 'stroke': 'black', 'stroke-width': '3' });
		 var img = paper.image('images/spring1.png', 500, 100, 70, 120);
		 upperline = 	paper.path('M' + (x + 530 ) + ' ' + (y + 55 ) + 'l 0 40 l 10 0').attr({ 'stroke': 'black', 'stroke-width': '2' });
		 downline = 	paper.path('M' + (x + 510 ) + ' ' + (y + 205 ) + 'l 20 0l 0 40 ').attr({ 'stroke': 'black', 'stroke-width': '2' });
		fixStand(x+320,y+80);	
		function fixStand(x,y){	
		reactfix = 	paper.path('M' + (x + 100 ) + ' ' + (y + 200 ) + 'l 200 0 l 0 10 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#5ab4db-#25404d'});
		
//		reactfixl = 	paper.path('M' + (x + 200 ) + ' ' + (y + 230 ) + 'l 0 50 ').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'30-#c4bebe-#141414'});	
		}
//		movStand(x+100,y+20);
		function movStand(x,y){
//		reactfixl2 = paper.path('M' + (x + 200 ) + ' ' + (y + 30 ) + 'l 0 50 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30  ').attr({ 'stroke': 'black', 'stroke-width': '3' });
//		reactfixl2 = paper.path('M' + (x + 200 ) + ' ' + (y + 30 ) + 'l 0 50 l 30 20 l -40 20 l 40 20 l -40 20 l 20 20 l 0 30 ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		reactfix13 = 	paper.path('M' + (x + 100 ) + ' ' + (y + 210 ) + 'l 200 0 l 0 10 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#5ab4db-#25404d'});	
		line = paper.path('M' + (x + 170 ) + ' ' + (y + 30 ) + 'l 60 0   ').attr({ 'stroke': 'black', 'stroke-width': '3' });
	}		
		
		reactfix13 = 	paper.path('M' + (x + 420 ) + ' ' + (y + 230 ) + 'l 200 0 l 0 10 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#5ab4db-#25404d'});	
		line = paper.path('M' + (x + 500 ) + ' ' + (y + 55 ) + 'l 60 0   ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		connct  = paper.path('M' + (x + 570 ) + ' ' + (y + 250 ) + 'l 0 -50 l 150 0 l 0 -50  ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		connct  = paper.path('M' + (x + 620 ) + ' ' + (y + 280 ) + ' l 150 0 l 0 -120  ').attr({ 'stroke': 'black', 'stroke-width': '3' });
		react   = paper.path('M' + (x + 690 ) + ' ' + (y + 120 ) + 'l 100 0 l 0 50 l -100 0 z  ').attr({ 'stroke': 'black', 'stroke-width': '3' ,'fill':'black'});
		table =  paper.path('M' + (x + 150 ) + ' ' + (y + 290 ) + 'l 600 0 l 0 200 l -600 0 z  ').attr({ 'stroke': '30-#c3944d-#b25e3a', 'stroke-width': '3' ,'fill':'30-#c3944d-#b25e3a'});
		fix = 	paper.path('M' + (x + 200 ) + ' ' + (y + 280 ) + 'l 200 0 l 0 10 l -200 0 z').attr({ 'stroke': 'black', 'stroke-width': '3' , 'fill':'50-#3d3939-#262323'});
		analog = paper.text((x + 730), (y + 140), "0" ).attr({ 'font-size': 25, 'stroke': 'white', 'fontFamily' :'Arial'});
		recttxt = paper.rect(x+700, y+20, 0, 0).attr({ 'stroke': '30-#62c74c-#4da33b', 'stroke-width': '3' ,'fill':'30-#62c74c-#4da33b'});
		recttxt1 = paper.rect(x+850, y+20, 0, 0).attr({ 'stroke': '50-#d44e3f-#b03b2e', 'stroke-width': '3' ,'fill':'50-#d44e3f-#b03b2e'});
		
					
					
			btn =  '<div class="col-sm-2">'
		
				       +'<button type="button"  "  class="btn btn-danger btnStyle" id="movebtn"  data-toggle="" data-target="#selectCheck" ><b>PLATE </b></button>'
				       +'</div>'
				       +'<div class="col-sm-2">'
		
				       +'<button type="button"  "  class="btn btn-danger btnStyle" id="movebtn1" data-toggle="" data-target="#selectCheck" ><b>TEST </b></button>'
				       +'</div>'
				       
//		$("#canvas-div").append(btn);
		if (buttonflg == 1){
			
		
		recttxt = paper.rect(x+700, y+20, 120, 50).attr({ 'stroke': '30-#62c74c-#4da33b', 'stroke-width': '3' ,'fill':'30-#62c74c-#4da33b'});
		recttxt1 = paper.rect(x+850, y+20, 120, 50).attr({ 'stroke': '50-#d44e3f-#b03b2e', 'stroke-width': '3' ,'fill':'50-#d44e3f-#b03b2e'});
		txt = paper.text((x + 750), (y + 50), "PLATE" ).attr({ 'font-size':15, 'stroke': 'white', 'fontFamily' :'Arial'});
		txt1 = paper.text((x + 890), (y + 50), "TEST" ).attr({ 'font-size': 15, 'stroke': 'white', 'fontFamily' :'Arial'});
		
		}
		
		recttxt.click(function(event){
				plateflg = 1;
				if (material == 1){
					steel.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				}else if (material == 2){
					glass.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				} else if (material == 3){
					paper.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				} 
		});
		 
		 
		 recttxt1.click(function(event)	 {
			 animateHeightScale();
			 reactfix13.animate({path: Raphael.transformPath("M"+(x+420)+" "+(y+230)+"  l 200 0 l 0 10 l -200 0 z ", 'T 0 '+(20))}, 1000);
				downline.animate({path: Raphael.transformPath("M"+(x+510)+" "+(y+205)+"  l 20 0  l 0 40", 'T 0 '+(10))}, 1000);
				upperline.animate({path: Raphael.transformPath("M"+(x+530)+" "+(y+55)+"  l 0 40  l 10 0", 'T 0 '+(-10))}, 1000);
				line.animate({path: Raphael.transformPath("M"+(x+500)+" "+(y+55)+"  l 60 0  ", 'T 0 '+(-10))}, 1000);
				 analog.hide();
				 if (plateflg == 1){
					setTimeout(function() { analog = paper.text((x + 730), (y + 140), samvolt ).attr({ 'font-size': 25, 'stroke': 'white', 'fontFamily' :'Arial'}) },1010); 
				 }else {
					 setTimeout(function() { analog = paper.text((x + 730), (y + 140), volt).attr({ 'font-size': 25, 'stroke': 'white', 'fontFamily' :'Arial'}) },1010);
				 }
				
			 
		 });
            
		
		 $("movebtn").click(function() {	       
//				reactfixl2.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+30)+"  l 0 60 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30 ", 'T 0 '+(100))}, 1000);			       
//				reactfix13.animate({path: Raphael.transformPath("M"+(x+100)+" "+(y+210)+"  l 200 0 l 0 20 l -200 0 z ", 'T 0 '+(100))}, 1000);
//				line.animate({path: Raphael.transformPath("M"+(x+170)+" "+(y+30)+"  l 60 0  ", 'T 0 '+(100))}, 1000);
//				img.transform('s1,' + 1.2);
//				animateHeightScale1();
//				upperline = 	paper.path('M' + (x + 530 ) + ' ' + (y + 45 ) + 'l 0 40 l 10 0').attr({ 'stroke': 'black', 'stroke-width': '2' });
				
//				wood.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				if (material == 1){
					steel.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				}else if (material == 2){
					glass.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				} else if (material == 3){
					paper.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+260)+"  l 200 0 l 0 20 l -200 0 z  ", 'T 220 0')}, 1000);
				} 
				
				
				
				       
		});	
		
		
		 $("#movebtn1").click(function() { 
			 
			 animateHeightScale();
			 reactfix13.animate({path: Raphael.transformPath("M"+(x+420)+" "+(y+230)+"  l 200 0 l 0 10 l -200 0 z ", 'T 0 '+(20))}, 1000);
				downline.animate({path: Raphael.transformPath("M"+(x+510)+" "+(y+205)+"  l 20 0  l 0 40", 'T 0 '+(10))}, 1000);
				upperline.animate({path: Raphael.transformPath("M"+(x+530)+" "+(y+55)+"  l 0 40  l 10 0", 'T 0 '+(-10))}, 1000);
				line.animate({path: Raphael.transformPath("M"+(x+500)+" "+(y+55)+"  l 60 0  ", 'T 0 '+(-10))}, 1000);
				connct1  = paper.path('M' + (x + 570 ) + ' ' + (y + 250 ) + 'l 0 -50 l 150 0 l 0 -50  ').attr({ 'stroke': 'black', 'stroke-width': '3' });
				 analog.hide();
				setTimeout(function() { analog = paper.text((x + 730), (y + 140), samvolt ).attr({ 'font-size': 25, 'stroke': 'white', 'fontFamily' :'Arial'}) },1010);
		});	 
		
	
		if(material == 4){
			wood = 	paper.path('M' + (x + 200 ) + ' ' + (y + 260 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#c3944d-#b25e3a', 'stroke-width': '3' , 'fill':'30-#c3944d-#b25e3a'});	
//		
			
		}else if (material == 1){
			steel = paper.path('M' + (x + 200 ) + ' ' + (y + 260 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#a8b0b2-#99a3a3', 'stroke-width': '3' , 'fill':'30-#a8b0b2-#99a3a3'});	
		
			
		}else if (material == 2){
			glass = paper.path('M' + (x + 200 ) + ' ' + (y + 260 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#d8e4e9-#a7c7cb', 'stroke-width': '3' , 'fill':'30-#d8e4e9-#a7c7cb'});	
		
			
		}else if (material == 3){
			paper = 	paper.path('M' + (x + 200 ) + ' ' + (y + 260 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#f8f8ba-#f8f87c', 'stroke-width': '3' , 'fill':'30-#f8f8ba-#f8f87c'});	
		
			
		}else if (material == 5){
			aluminium = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#636566-#323435', 'stroke-width': '3' , 'fill':'30-#636566-#323435'});	
		aluminium.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
			
		}else if(material == 6){
			
			titanium = 	paper.path('M' + (x + 350 ) + ' ' + (y + 330 ) + 'l 200 0 l 0 20 l -200 0 z').attr({ 'stroke': '30-#ea80fc-#6a1b9a', 'stroke-width': '3' , 'fill':'30-#ea80fc-#6a1b9a'});	
		titanium.animate({path: Raphael.transformPath("M"+(x+350)+" "+(y+330)+"  l 200 0 l 0 20 l -200 0 z  ", 'T -250 0')}, 1000);
		
			
		}
		
		
  // Create a Raphael paper
//  var paper = Raphael('canvas', 500, 500);

  // Add an image to the canvas
 

  // Apply transformations
//  img.transform('t100,50r45s1.5');

var heightScaleStart = 1; // Initial scale factor for height
  var heightScaleEnd = 1.2;   // Final scale factor for height
  var duration = 5000;      // Duration of the animation in milliseconds (5 seconds)
  var interval = 50;
  
    var startTime = new Date().getTime();

  // Function to animate the height scaling
  function animateHeightScale() {
    var intervalId = setInterval(function() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
      var progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1

      var currentScale = heightScaleStart + (heightScaleEnd - heightScaleStart) * progress;

      // Apply transformation
      img.transform('s1,' + currentScale);

      if (progress >= 1) {
        clearInterval(intervalId); // Stop the interval when animation is complete
      }
    }, interval);
  }
  
//   animateHeightScale();
   
   
    function animateHeightScale1() {
		
		 var duration = 1000;      // Duration of the animation in milliseconds (5 seconds)
 		 var interval = 50;
    var intervalId = setInterval(function() {
      var currentTime = new Date().getTime();
      var elapsedTime = currentTime - startTime;
      var progress = Math.min(elapsedTime / duration, 1); // Progress from 0 to 1

      var currentScale = 2 + (1 - 2) * progress;

      // Apply transformation
      img.transform('s1,' + currentScale);

      if (progress >= 1) {
        clearInterval(intervalId); // Stop the interval when animation is complete
      }
    }, interval);
  }
  
  

	 

	
	console.log("sensitivity,volt,thik,random thok"+sensitivity,samvolt,thickness,thk);
		function sensitivityCal(x,y){
			
		}
		
		

			

		

		
		
	
		
		
		
//		reactfixl2.animate({path: Raphael.transformPath("M"+(x+200)+" "+(y+30)+"  l 0 60 l 30 20 l -40 30 l 40 30 l -30 20 l 0 30 ", 'T 0 '+(70))}, 1000);			       
//		reactfix13.animate({path: Raphael.transformPath("M"+(x+100)+" "+(y+210)+"  l 200 0 l 0 20 l -200 0 z ", 'T 0 '+(70))}, 1000);
//		line.animate({path: Raphael.transformPath("M"+(x+170)+" "+(y+30)+"  l 60 0  ", 'T 0 '+(70))}, 1000);
				       
	
	
	
	
	};
	var TimeMasterJson1 = {};
	var array = [];
	function addToMasterJSON1() {
	
	tempJson1 = {};
	tempJson1.material = material;
	tempJson1.thickness = thickness;
	tempJson1.sensitivty = sensitivity ;
	array.push(tempJson1);
	TimeMasterJson.app = array;
	console.log(TimeMasterJson);
	tableCreateApp(TimeMasterJson);

}
	
	