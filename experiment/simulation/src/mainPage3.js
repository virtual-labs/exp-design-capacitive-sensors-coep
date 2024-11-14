var ArrayJson=[];
function mainPage3(){
	console.log("MAIN PAGE 3");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
     $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('LEVEL MEASUREMENT MIMIC');
      $("#centerText2").html('CONFIGURATION');
  var htm = '<img src="images/capacitor_img0001.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
     var selection  ='<div class="row"><div class="col-sm-6" >'
//	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Enter Width (mm) : </label>'
	   +'</div>'
	    +'<div class="col-sm-4">'
		 +'<input type="text" id="wdth" style = margin:15px 10px;width:100%;"  class=" form-control"/>'
		 +'</div>'
	   
	   
	   
	  
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitwdth" data-toggle="modal" data-target="#selectCheck" ><b>  SUBMIT1</b></button>' 
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
							
							addToMasterJSON1();
							
							
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime.toFixed(3)) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula :<br/>Capacitance  = " + unescape('%u2208') + " X Area / Distance</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime.toFixed(3)) {
							
//							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON1();
							
							
							$("#CalTime").val('');
							id=0;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct answer is  " +calculateTime.toFixed(3)+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
    
    
    
    
    
//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    
     $("#submitwdth").click(function() {
	
			distSelect = $("#wdth").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
		
		     console.log("distance =   "+distSelect);
		   
		   
	 if(distSelect == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#angleSelect").prop('disabled',true);
		$("#flowRateSelect").prop('disabled',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	
		   
		  $("#canvas-div").html("");
		  
		 mimic();
	
	}	

function addToMasterJSON(){
	tempJson={};	
						tempJson.material=materialIdName;
						tempJson.applicationSelection = applicationSelection;
						tempJson.current = current;
						
						tempJson.thickness = thickness;
						tempJson.fluxDensity = fluxDensity;
						tempJson.VoltageOutput = finalAns;
						ArrayJson.push(tempJson);
						thicknessMasterJson.demo = thicknessArrayJson;
						console.log(thicknessMasterJson);
//						tableCreate(masterJson);
}

	
	});

	             
}