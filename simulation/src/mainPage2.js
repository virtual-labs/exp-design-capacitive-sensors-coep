var ArrayJson=[];

function mainPage2(){
	console.log("MAIN PAGE 2");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
      $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('Capacitive Sensor');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/capacitor_img0001.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
      console.log("len max"+lengthmax);
      
//   $("#frequency").prop('disabled',true);

//       var selection  ='<div class="row"><div class="col-sm-6" >'
//       +'<label class="labelstyle"> Select Width of Plate (mm) : </label>'   
//       +'</div>'
//       +'<div class="col-sm-6">'
//	   +'<select  class="form-control selectConf" id="frequency"  style="height:auto;">'
//	   +'<option value="0">--- Select Width --- </option>'
//	   +'<option value="1">1</option>'
//	   +'<option value="10">10</option>'
//	   +'<option value="100">100</option>'
//	   +'<option value="200">200</option>'
//	   +'<option value="300">300</option>'
//	   +'<option value="400">400</option>'
//	   +'<option value="500">500</option>'
//	   +'<option value="600">600</option>'
//	   +'<option value="700">700</option>'
//	   +'<option value="800">800</option>'
//	   +'<option value="900">900</option>'
//	   +'<option value="1000">1000</option>'
//	   +'</select>'          
//       +'</div>' 
//       +'</div>'  
//       +'<br>'
//       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Distance (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="0">--- Select Distance --- </option>'
	   +'<option value="1" >1</option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	  +'<option value=" 4">4 </option>'
	  +'<option value=" 5">5 </option>'
	  +'<option value=" 6">6 </option>'
	  +'<option value=" 7">7 </option>'
	  +'<option value="8 "> 8</option>'
	  +'<option value="9 "> 9</option>'
	  +'<option value="10">10</option>'

	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   var selection  ='<div class="row"><div class="col-sm-6" >'
//	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Enter Length (mm) : </label>'
	   +'</div>'
	    +'<div class="col-sm-4">'
		 +'<input type="text" id="flowAns" style=margin:15px 10px;width:100%;"  class=" form-control"/>'
		 +'</div>'
	   
	   
	   
	  
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  SUBMIT</b></button>' 
	    +'</div>'

    
    +'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Capacitance in (pF): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnTime" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    
    
    
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
     $("#checkAsnTime").click(function() {
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns==""){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == calculateTime.toFixed(3)) {
//							$("#modelMsg123").html("done ");
							$("#timeAnswer").prop('hidden',true);
							id=0;
							
							addToMasterJSON();
							
							
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime.toFixed(3)) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula :Capacitance  = " + unescape('%u2208') + " X Area / Distance</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime.toFixed(3)) {
							
//							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON();
							
							
							$("#CalTime").val('');
							id=0;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime.toFixed(3)+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
    
    
    
    
    
    
    
     $("#submitconfig").click(function() {
//		 width = $("#frequency").val();
//		  distance = $("#distance").val();
		  length = $("#flowAns").val();
		  console.log("length changge"+length);
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
//		   console.log("main frequency  =  "+ frequencySelect);	  
//		     console.log("distance =   "+distSelect);
//		    console.log("fluid TypeSelect =   "+fluidSelect);
		   
		   if(width1 == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Frequency </b>");
	}else if(distance == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else if(length == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Please give a change in length </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	
		
			  animation2();
		
		 
				
	}

	});

	             
}