var clockWrap=$("#clockWrap");
var horParts=$(".part0 , .part3 , .part6");
var vertParts=$(".part1 , .part2, .part4, .part5");
var p0=$(".part0");
var p1=$(".part1");
var p2=$(".part2");
var p3=$(".part3");
var p4=$(".part4");
var p5=$(".part5");
var p6=$(".part6");
var digitWraps=$(".clockDigit");
var spacedDigits=$("#clockDigit3 , #clockDigit5");

var setScale=function(){

  var wrapWidth=clockWrap.width();
  clockWrap.css({marginTop:"20px"});
  digitWraps.css({
    "width": wrapWidth*(115/880),
    "height": wrapWidth*(210/880),
    "margin": wrapWidth*(10/880)+"px"
  });

  spacedDigits.css(
  {
    "margin-left": wrapWidth*(40/880)+"px"
  } 
  );

  horParts.css({
    width: wrapWidth*(75/880),
    height: wrapWidth*(30/880)
  });
  horParts.attr({
    width: wrapWidth*(75/880),
    height: wrapWidth*(30/880)
 
  });
/*  vertParts.css({
    height: wrapWidth*(75/880),
    width: wrapWidth*(30/880)

  });
*/
  vertParts.attr({
    height: wrapWidth*(75/880),
    width: wrapWidth*(30/880)

  });

}


var time=function(){return(new Date().toString().slice(16,24))};//helper function for time strings
timeToDigits=function(timeString){
	var di1=timeString[0];
	var di2=timeString[1];
	var di3=timeString[3];
	var di4=timeString[4];
	var di5=timeString[6];
	var di6=timeString[7];
	return([di1,di2,di3,di4,di5,di6]);
}
var d1=$("#clockDigit1");
var d2=$("#clockDigit2");
var d3=$("#clockDigit3");
var d4=$("#clockDigit4");
var d5=$("#clockDigit5");
var d6=$("#clockDigit6");
var clockDigits=[d1,d2,d3,d4,d5,d6];


var setDigit = function(dig,num){
if(num=="9"){var onOff=[1,1,1,1,0,1,0]}
if(num=="8"){var onOff=[1,1,1,1,1,1,1]}
if(num=="7"){var onOff=[1,0,1,0,0,1,0]}
if(num=="6"){var onOff=[1,1,0,1,1,1,1]}
if(num=="5"){var onOff=[1,1,0,1,0,1,1]}
if(num=="4"){var onOff=[0,1,1,1,0,1,0]}
if(num=="3"){var onOff=[1,0,1,1,0,1,1]}
if(num=="2"){var onOff=[1,0,1,1,1,0,1]}
if(num=="1"){var onOff=[0,0,1,0,0,1,0]}
if(num=="0"){var onOff=[1,1,1,0,1,1,1]}
setParts(dig,onOff);

}

var setParts = function(dig,onOff){
	dig.find(".part").hide();
	for(part in onOff){
    		if(onOff[part]==1){
			dig.find(".part"+part).toggle();
                  }
         }
}

var updateClock=function(){
	digitNumbers=timeToDigits(time());
	for(digit in clockDigits){
		setDigit(clockDigits[digit],digitNumbers[digit]);
	}
		
}
setScale();
document.body.style.backgroundColor="#282828";
updateClock();
setInterval(updateClock,1000);
$(window).resize(setScale);

$("#fgColorPicker").farbtastic(function(){$("g").css({fill:$.farbtastic("#fgColorPicker").color}); $("#fgColorPicker").toggle();});
 $.farbtastic("#fgColorPicker").setColor("#89c");
 $("fgColorPicker").toggle();
$("g").click(function(){$("#fgColorPicker").toggle()});


