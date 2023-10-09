$(document).ready( function(){
myinterval = 1;
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       if(myinterval == 1) { inicia_cron(); } else { para_cron();}  
    }
}

var tempo = prompt('Digite o tempo de Luta em Minutos 1 | 2 | 3 | 4 | 5 | 6');
 $("#minutos").html(tempo);


//Vantagem esquerda
$('#id_uplf_vtg_hover').click(function(){
	var vant = $('#id_vtg_lfvv span').text();
	vant=+vant+1;
	$('#id_vtg_lfvv span').text(vant);
});
//tira vantagem esquerda
$('#id_dwlf_vtg_hover').click(function(){
	var vant = $('#id_vtg_lfvv span').text();
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#id_vtg_lfvv span').text(vant);
});


//punicao esquerda
$('#id_uplf_pun_hover').click(function(){
	var vant = $('#id_vtg_lfvp span').text();
	vant=+vant+1;
	$('#id_vtg_lfvp span').text(vant);
});

//tira punicao esquerda

$('#id_dwlf_pun_hover').click(function(){
	var vant = $('#id_vtg_lfvp span').text();
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#id_vtg_lfvp span').text(vant);
});


//vantagem direita
$('#id_uprh_vtg_hover').click(function(){
	var vant = $('#id_vtg_rhvv span').text();
	vant=+vant+1;
	$('#id_vtg_rhvv span').text(vant);
});

//tira vantagem direita
$('#id_dwrh_vtg_hover').click(function(){
	var vant = $('#id_vtg_rhvv span').text();
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#id_vtg_rhvv span').text(vant);
});




//punicao direita
$('#id_uprh_pun_hover').click(function(){
	var vant = $('#id_vtg_rhvp span').text();
	vant=+vant+1;
	$('#id_vtg_rhvp span').text(vant);
});


//tira punicao direita
$('#id_dwrh_pun_hover').click(function(){
	var vant = $('#id_vtg_rhvp span').text();	
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#id_vtg_rhvp span').text(vant);
});


//PONTO ESQUERDA
$('#id_uplf_hover').click(function(){
	var vant = $('#time_a span').text();
	vant=+vant+1;
	$('#time_a span').text(vant);
});



//REMOVER PONTOS ESQUERDA
$('#id_dwlf_hover').click(function(){
	var vant = $('#time_a span').text();
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#time_a span').text(vant);
});


//PONTO DIREITA
$('#id_uprh_hover').click(function(){
	var vant = $('#time_b span').text();
	vant=+vant+1;
	$('#time_b span').text(vant);
});




//REMOVE PONTO DIREITA
$('#id_dwrh_hover').click(function(){
	var vant = $('#time_b span').text();
if(vant=="0"){
	vant=0
}else{
	vant=+vant-1;
}
	$('#time_b span').text(vant);
});


//setar o timer

$("#id_buttons label").click(function(){
		var id_tme = $(this).attr('id');
		 //"#minutos").attr("value",id_tme+":00");
		 $("#minutos").html(id_tme);
		
	});

	

function inicia_cron() {
//$('#id_crono_lf').click(function(){
	
var min = $("#minutos").html();
var sec = $("#segundos").html();

var timer2 =  min+":"+sec;	
//alert(timer2);

if(myinterval == 1) {
	myinterval = 0;
  interval = setInterval(function() {
  var timer = timer2.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes; 
  seconds = (seconds < 0) ? 59 : seconds;
    
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $('#minutos').html(minutes);
  $('#segundos').html(seconds);
  timer2 = minutes + ':' + seconds;
   //alert(timer2)
   if (minutes <= 0 && seconds <= 0  )  {  clearInterval(interval); } 
  
   
   
}, 1000);}





//});
}

function para_cron() {

//$('#id_crono_rh').click(function(){
	myinterval = 1;
	clearInterval(interval);

//});


}



//fim do scripts
});



