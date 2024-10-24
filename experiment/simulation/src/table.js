
function tableCreate(masterJson)		
{
			console.log(masterJson);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Area (mm<sup>2</sup>)</center></th>'
//					+ '   <th scope="col"><center >Distance (cm)</center></th>'
					+ '  <th scope="col"><center>Distance (mm)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
					+ '  <th scope="col"><center>Calculated Capacitance (pf)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < masterJson.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + masterJson.demo[i].area1+ '</center></td>'
//								+' <td><center style="color:red;">' + masterJson.demo[i].distanceInput + '</center></td>'
								+ ' <td><center>' + masterJson.demo[i].distanceInput + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
						        + '<td><center>' + masterJson.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(tableReading >= 2)
					 {
//						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
						
//						$("#main-div-conf").html('');
//						$("#canvas-div").html('');
						$("#next").prop('hidden',false);
						
					}
					
					$("#tableDesign").html(tableMainDiv);
					 tableReading++;
					 console.log("tableReading "+tableReading);
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',true);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);
						$("#main-div-conf").html('');
						$("#canvas-div").html('');
						$("#errorPanel").prop("hidden",true);
						$("#selectCheck").prop("disabled",true);	
						
								mainPage2();
					});
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						if(methodType==1)
						{
							
							mainPage2();
							
							
						}
						else if(methodType==2)
						{
							mainPage3();
						}
						else
						{
							alert("Select Method Type  .");
						}
						
					});
					
				}	
				


//application table
function tableCreateApp()		
{
			console.log(TimeMasterJson);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Material</center></th>'
					+ '   <th scope="col"><center >Sensitivity (mm/Volt)</center></th>'
					+ '  <th scope="col"><center>Thickness (mm)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
//					+ '  <th scope="col"><center>Calculated Time (sec)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < TimeMasterJson.app.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + TimeMasterJson.app[i].material + '</center></td>'
								+' <td><center style="color:red;">' + TimeMasterJson.app[i].sensitivty + '</center></td>'
								+ ' <td><center>' + TimeMasterJson.app[i].thickness + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
//						        + '<td><center>' + TimeMasterJson.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
					 if(tableReading==4)
					 {
						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
					}
					
					$("#tableDesign").html(tableMainDiv);
					 tableReading++;
					 console.log("tableReading "+tableReading);
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',false);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);	
					});
					
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						
							mainPage3();
						
						
					});
					
				}






	
//Level MEASUREMENT
function tableCreateLevel(masterJson1)		
{
			console.log(masterJson1);
			var tableMainDiv='<div class="col-sm-12">'
//					+ '<div class=" well well-lg">'
////					+'<center class="blink"> TAKE ALL '+applicationName+' READINGS. </center>'
////					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
//				    +'<table class="table table-bordered table-responsive" >'
//					+ ' <thead>'
 + '<table class=" table table-bordered " style="margin:10px; text-align: center">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
					+ '  <tr>'
					+ '  <th><center>Sr.No</center></th>'
					+ '  <th scope="col"><center>Area (cm<sup>2</sup>)</center></th>'
					+ '   <th scope="col"><center >Distance (cm)</center></th>'
					+ '  <th scope="col"><center>Capacitance (pf)</center></th>'
//					+ '  <th scope="col"><center>distPath</center></th>'
//					+ '  <th scope="col"><center>speed</center></th>'
//					+ '  <th scope="col"><center>Calculated Time (sec)</center></th>'
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0,p=1; i < masterJson1.demo.length; i++,p++) {
					tableMainDiv += '<tr>'
					            +'<td>'+p+'</td>'
								+'   <td><center style="color:red;">' + masterJson1.demo[i].area1 + '</center></td>'
								+' <td><center style="color:red;">' + masterJson1.demo[i].distanceInput + '</center></td>'
//								+ ' <td><center>' + masterJson1.demo[i].speedOFsound + '</center></td>'
//						        + '<td><center>' + masterJson.demo[i].distPath + '</center></td>'
//						        + ' <td><center>' + masterJson.demo[i].speed + '</center></td>'
						        + '<td><center>' + masterJson1.demo[i].calculateTime + '</center></td>'
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
					 + ' </div>'
					
//					 if(tableReading==4)
//					 {
//						tableMainDiv +='<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="nextLevel"  ><b>NEXT LEVEL </b></button></div>'
//					}
					
					$("#tableDesign").html(tableMainDiv);
//					 tableReading++;
				
					$("#nextLevel").click(function() {
						$("#selectMethod").prop('hidden',false);
						$("#submitconfig").prop('disabled',true);
						$("#frequency").prop('disabled',true);
						$("#distance").prop('disabled',true);
						$("#fluidType").prop('disabled',true);	
						$("#nextLevel").prop('disabled',true);	
					});
					$("#selectMethod").change(function() {
						methodType=$("#methodType").val();
						
							mainPage2();
							
						
						
					});
					
				}
