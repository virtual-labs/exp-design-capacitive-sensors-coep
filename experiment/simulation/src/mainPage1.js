tableReading=0;
var lengthmax = 0;
var buttonflg = 0;

$("#refer").prop('hidden',false);

function mainPage1(){
	$("#refer").prop('hidden',false);
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('CAPACITIVE SENSOR DIAGRAM');
      $("#centerText").html('CONFIGURATION');
      var htm = '<img src="images/capacitivesensor1.jpg" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Dielectric Material : </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="material"  style="height:auto;">'
	   +'<option value="0">--- Select Dielectric Material --- </option>'
	   +'<option value="1">Mica</option>'
	   +'<option value="2">Glass</option>'
	   +'<option value="3">Teflon</option>'
//	   +'<option value="4">Paper</option>'
//	   +'<option value="5">Copper</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       
        +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Width of Plate (mm)  : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="frequency" " style="height:auto;">'
	    +'<option value="0">--- Select Width --- </option>'
	  	+'<option value="10">10</option>'
	   +'<option value="20">20</option>'
	   +'<option value="30">30</option>'
	   +'<option value="40">40</option>'
	   +'<option value="50">50</option>'
	   +'<option value="60">60</option>'
	   +'<option value="70">70</option>'
	   +'<option value="80">80</option>'
	   +'<option value="90">90</option>'
	   +'<option value="100">100</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Length (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidType" " style="height:auto;">'
	    +'<option value="0">--- Select length --- </option>'
	  	+'<option value="10">10</option>'
	   +'<option value="20">20</option>'
	   +'<option value="30">30</option>'
	   +'<option value="40">40</option>'
	   +'<option value="50">50</option>'
	   +'<option value="60">60</option>'
	   +'<option value="70">70</option>'
	   +'<option value="80">80</option>'
	   +'<option value="90">90</option>'
	   +'<option value="100">100</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Thickness (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="0">--- Select Thickness --- </option>'
	   +'<option value="1" >1</option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	  +'<option value=" 4">4 </option>'
	  +'<option value=" 5">5 </option>'
//	  +'<option value=" 6">6 </option>'
//	  +'<option value=" 7">7 </option>'
//	  +'<option value="8 "> 8</option>'
//	  +'<option value="9 "> 9</option>'
//	  +'<option value="10">10</option>'

	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
	      
	   
	   
	   
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

      +'<br>' 
      +'<br>' 
     
+'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Capacitance (pf): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnTime" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div><br>'
	     +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 6px;"  class="btn btnStyle " id="next" hidden ><b>  NEXT PAGE </b></button>' 
	    +'</div>'

      +'<br>'
	    
	        
      
	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg123">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
		id = 1;
		capcnt = 0;
     $("#checkAsnTime").click(function() {
			 capcnt++;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns=="" || flowAns == isAlphabetical(flowAns)){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == calculateTime) {
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b> ");
							$("#timeAnswer").prop('hidden',true);
							$("#selectCheck").prop('hidden',false);
							$("#distance").prop('disabled',false);
							id = 1;
							
							addToMasterJSON();
//							mainPage2();
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : Capacitance  = " + unescape('%u2208') + " X Area / Distance</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
//							$("#timeAnswer").prop('hidden',false);
							$("#selectCheck").prop('hidden',false);
							$("#distance").prop('disabled',false);
							
							addToMasterJSON();
//							mainPage2();
							$("#CalTime").val('');
							id = 1;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});

//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    
     $("#submitconfig").click(function() {
	 width1 = $("#frequency").val();
		  distance = $("#distance").val();
		  length = $("#fluidType").val();
		  material = $("#material").val();
			lengthmax = length;
				

		   
		   if(width1 == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Frequency </b>");
	}else if(distance == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else if(length == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid Type </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#material").prop('disabled',true);
		$("#fluidType").prop('disabled',true);
		$("#distance").prop('disabled',true);	
		$("#frequency").prop('disabled',true);
	
		   
		  animation();

	}	


	
	});
	
	 $("#next").click(function() {
		 config1 = {};
		 capacorrt = masterJson.demo.length;
		config1.correct = capacorrt;
		config1.wrong = capcnt;
		data.config = config1;
		
		$("#errorPanel").prop("hidden",true);
		$("#selectCheck").prop("hidden",true);
		mainPage2();
	
		
		mimic();
	});
	$("#refer12").prop('hidden',false);
	$("#refer12").click(function() { 
	
	modelImg = '<img src="images/Table.png" class="img-responsive" alt="Cinque Terre">'
	$("#modelMsg123").html(modelImg);
	
	});
	             
}	





