var ArrayJson=[];
appli = {};
function mainPage2(){
	console.log("MAIN PAGE 2");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
      $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('Capacitive Sensor');
      $("#centerText").html('CONFIGURATION');
//      var htm = '<img src="images/capacitor_img0001.png" class="img-fluid" >'
      $("#canvas-div").html();
      console.log("len max"+lengthmax);
 
	   
	   var selection  = '<div class="row"><div class="col-sm-6" >'
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
	   +'<label class="labelstyle">Excitation Voltage (volt): </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="volt" " style="height:auto;">'
	    +'<option value="0">--- Select Excitation Voltage --- </option>'
	  	+'<option value="10">10</option>'
	   +'<option value="20">20</option>'
	  	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'
	   
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 8px; "  class="btn btn-danger btnStyle" id="submit"  ><b>  SUBMIT</b></button>' 
	    +'</div>'
		+'<br>'
		+'<br>'
    
    +'<div class="row" id="sensitivity" hidden >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Thickness Sensitivity Factor (mm/Volt): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAnsSen" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    +'<br>'
	    
	    +'<div class="row" id="thick" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Thickness in (mm): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalThk" style= 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnThk" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    +'<br>'
	     +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 8px; "  class="btn btn-danger btnStyle" id="result" hidden><b> RESULT </b></button>' 
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
    sentcnt = 0;
     $("#checkAnsSen").click(function() {
			 sentcnt++;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns=="" || flowAns == isAlphabetical(flowAns)){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
						if (flowAns == sensitivity) {
//							$("#modelMsg123").html("done ");
							$("#timeAnswer").prop('hidden',true);
							id=0;
							
//							addToMasterJSON();
							
							buttonflg = 1;
							mimic();
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							
							
							$("#thick").prop('hidden',false);
							
						} else if (flowAns != sensitivity.toFixed(3)) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula :Sensitivity  = Operating Gap / (V<sub>o</sub>Air - (V<sub>o</sub>Air - V<sub>o</sub>Sample))</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == sensitivity) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
//							addToMasterJSON();
							buttonflg = 1;
							mimic();
							
							
							$("#thick").prop('hidden',false);
							id=0;
							
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +sensitivity+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
				
				id1 = 1;
				thkcnt = 0;
     $("#checkAsnThk").click(function() {
			 thkcnt++;
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalThk").val();
	
		
				if(flowAns=="" || flowAns == isAlphabetical(flowAns)){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id1 <= 3) {
						if (flowAns == thickness) {
//							$("#modelMsg123").html("done ");
							$("#timeAnswer").prop('hidden',true);
							id1=0;
							
							addToMasterJSON1();
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#CalThk").val('');
							$("#result").prop("hidden",false);
							
							
							
						} else if (flowAns != thickness) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
							
						
						}


					} else if (id1 == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula :Thickness = Thickness Sensitivity Factor  X (V<sub>o</sub> - V<sub>o</sub>Sample)</b> ");

						
					} else {
						flowAns = $("#CalThk").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == thickness) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							$("#result").prop("hidden",false);
							addToMasterJSON1();
							
							
							$("#CalThk").val('');
							id1=0;
						
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +thickness+'</b>');
						}
					}
					id1++;
					}
					
//					
				});
				
    
    
    
    
    
    
    
     $("#submit").click(function() {

		 material = 	$("#material").val();
		 console.log(material);
		volt = $("#volt").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
//		   console.log("main frequency  =  "+ frequencySelect);	  
//		     console.log("distance =   "+distSelect);
//		    console.log("fluid TypeSelect =   "+fluidSelect);
		   
		 
	 if(material == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Please select Material </b>");
	}else if (volt == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Please select Volt </b>");
	}

	else{
		$("#errorPanel").prop("hidden",false);
		$("#sensitivity").prop('hidden',false);
		$("#errorPanel").prop("hidden",true);
		$("#selectCheck").prop("disabled",true);
	
//		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");	
		
		
			  mimic();
		
		 
				
	}

	});
	
	
	
	$("#result").click(function() {
		
		appli.senWro = sentcnt;
		appli.thkwro = thkcnt;
		appli.corapp = TimeMasterJson.app.length;
		data.app = appli;
		console.log(data);
		
		
		result();
	});	
	             
}