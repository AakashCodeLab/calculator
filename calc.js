
$(document).ready(function(){
  
$(".keys,.power,.backspace").on("mouseover mouseout",function(e){
if(e.type=="mouseover"){

    $(this).addClass("keycolorchange");

}else if(e.type=="mouseout"){
    $(this).removeClass("keycolorchange");
}

});
  
});
var onscreen= $('input[name=display]').val();
$(document).ready(function(){
   
    $(".keys").on("click",function(){   
    var v=$(this).val();
    onscreen+=v;
    $("#display").attr("value",onscreen);
    });

    $(".ac").on("click",function(){
        
    $("#display").attr("value","");
    onscreen="";

 });

 $("#equal").on("click",function(){
    
var calculate=$("#display").attr("value");
var answer=eval(calculate);
$("#display").attr("value",answer);
 onscreen=answer;
});

$(".power").on("click",function(){
    
    var powerofvalues=$("#display").attr("value"); 
    var powerans=eval(powerofvalues*powerofvalues);
    $("#display").attr("value",powerans);
    onscreen=powerans;

 });

 $(".backspace").on("click",function(){
    var value= $('input[name=display]').val();
    var len = value.length-1;
    var newNum = value.substring(0,len);
    $("#display").attr("value",newNum);
    onscreen=newNum;

 });

  });

 

    





























/* 
function power(){
  x=box.value;
  x=eval(x*x);
  box.value=x;
} */

/* function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value  = newNum;
} */

