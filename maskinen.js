'use strict';
//
/*Instruction som kontrollera att Jquery funkar när man ladda sidan
och har i sin callbaks functionen hella programet*/
//$(document).ready(function () {console.log("Jquery och Script går");});
//
//

// mode = 1 , betyder att man spela mot maskinen
//aqui haremos un bucle que no saldra hasta que se seleccione 
//el modo del juego y entonces pondra las senales segun prefeencias
let mode = 0;
let spelare1 = 1;
let spelare2 = 0;
let spelareIa = 0;
let content;
let contKontroll;
let b1,b2,b3,b4,b5,b6,b7,b8,b9;


	// statement

/* spelareKontroll() returneras koden för tur;
värde 1 betyder: tur till spelare 1
värde 2 betyder: tur till spelare 2
värde 3 betyder: tur till spelare IA 
*/

// jag behåller event i loopen medan ingen 3 i raden finns.
$('.rutor').on ('click', function(){
	//
	//
	let rutan = $(this);
	//här vi kontrolerar om rutan är använd forut
	
	contKontroll = rutan.text(); 
	//debugger;
	console.log(contKontroll);
	if (contKontroll !== '' || contKontroll !==''){
		content = 1;
	}else{
		content = 0;
	}
	//
	console.log(content);
	let spelare = spelareKontroll();
	console.log(spelare);
	if (spelare === 1 && content === 0) {
		rutan.append('<p>X</p>');
		rutan.css('background','#f894a5');
			//debugger;		
	}else if (spelare === 2 && content === 0) {
		rutan.append('<p>O</p>');
		rutan.css('background','#f894a5');
			//debugger;
	}else if (spelare === 3 && content === 0) {
			/* skriv rutan.append('<p>O</p>');
				efter titta situationen på bordet
				och ger bästa svaret*/
	}else{
		alert('rutan är fullt, välja annat')
		/* sker spelareKontroll(); att tvinga samma
		spelare kunde clicka igen */
		spelare = spelareKontroll();
	}
	//aqui fuera haremos fuera de las condiciones un control de juego
	//spelKontroll ()
	//setTimeout(()=>{vinnareKontroll()},1000); 
	vinnareKontroll()

});




function spelareKontroll(){

	if (spelare1 === 1 && spelare2 === 0 && spelareIa === 0){
		console.log("spelare 1 har spelat");
		/*med nedre 3 variabler controlerar man nästan tur*/
		spelare1 = 0;
		spelare2 = 1;
		spelareIa = 1;
		return 1;
	}else if (spelare1 === 0 && spelare2 === 1 && mode === 0) {
		console.log("spelare 2 har spelat");
		spelare1 = 1;
		spelare2 = 0;
		spelareIa = 0;
		return 2;
	}else if (spelare1 === 0 && spelareIa === 1 && mode === 1) {
		console.log("IA har spelat");
		spelare1 = 1;
		spelareIa = 0;
		return 3;
	}else{
		alert('ingen spelare valt')
		return 0;
	}
};

function vinnareKontroll(){
	b1 = $('#b1 p').text();
	b2 = $('#b2 p').text();
	b3 = $('#b3 p').text();
	b4 = $('#b4 p').text();
	b5 = $('#b5 p').text();
	b6 = $('#b6 p').text();
	b7 = $('#b7 p').text();
	b8 = $('#b8 p').text();
	b9 = $('#b9 p').text();
	//
	/* (!!b$===true), Detta är använd för at undvika programmet 
	går i 'vinn' optioner med tre lika tomma värde.*/
	console.log(b1);
	console.log(b2);
	console.log(b3);
	console.log(b4);
	console.log(b5);
	console.log(b6);
	console.log(b7);
	console.log(b8);
	console.log(b9);
	//debugger;
	if (b1===b2 && b1===b3 && !!b1===true ){
		vinnareMedelande(b1);
		$('#b1 p').addClass('vinnRutor');
		$('#b2 p').addClass('vinnRutor');
		$('#b3 p').addClass('vinnRutor');
	}else if (b4===b5 && b4===b6 && !!b4===true) {
		vinnareMedelande(b4);
		$('#b4 p').addClass('vinnRutor');
		$('#b5 p').addClass('vinnRutor');
		$('#b6 p').addClass('vinnRutor');
	}else if (b7===b8 && b7===b9 && !!b7===true) {
		vinnareMedelande(b7);
		$('#b7 p').addClass('vinnRutor');
		$('#b8 p').addClass('vinnRutor');
		$('#b9 p').addClass('vinnRutor');
	// columner
	}else if (b1===b4 && b1===b7 && !!b1===true) {
		vinnareMedelande(b1);
		$('#b1 p').addClass('vinnRutor');
		$('#b4 p').addClass('vinnRutor');
		$('#b7 p').addClass('vinnRutor');
		
	}else if (b2===b5 && b2===b8 && !!b2===true) {
		vinnareMedelande(b2);
		$('#b2 p').addClass('vinnRutor');
		$('#b5 p').addClass('vinnRutor');
		$('#b8 p').addClass('vinnRutor');
		
	}else if (b3===b6 && b3===b9 && !!b3===true) {
		vinnareMedelande(b3);
		$('#b3 p').addClass('vinnRutor');
		$('#b6 p').addClass('vinnRutor');
		$('#b9 p').addClass('vinnRutor');
	// diagonaler	
	}else if (b1===b5 && b1===b9 && !!b1===true) {
		vinnareMedelande(b1);
		$('#b1 p').addClass('vinnRutor');
		$('#b5 p').addClass('vinnRutor');
		$('#b9 p').addClass('vinnRutor');
		
	}else if (b3===b5 && b3===b7 && !!b3===true) {
		vinnareMedelande(b3);
		$('#b3 p').addClass('vinnRutor');
		$('#b5 p').addClass('vinnRutor');
		$('#b7 p').addClass('vinnRutor');
	//	
	}else if (!!b1===true && !!b2===true && !!b3===true && !!b4===true && !!b5===true && !!b6===true && !!b7===true && !!b8===true && !!b9===true) {
		console.log('TABELLER, INGEN VINNER');
		$('.rutor').off ('click');
		$('#b1 p').addClass('tabellerRutor');
		$('#b2 p').addClass('tabellerRutor');
		$('#b3 p').addClass('tabellerRutor');
		$('#b4 p').addClass('tabellerRutor');
		$('#b5 p').addClass('tabellerRutor');
		$('#b6 p').addClass('tabellerRutor');
		$('#b7 p').addClass('tabellerRutor');
		$('#b8 p').addClass('tabellerRutor');
		$('#b9 p').addClass('tabellerRutor');
		alert('TABELLER, INGEN VINNER')

	}else{
		console.log("Spelet fortsätter");
		
	}
};

function vinnareMedelande(vem){
		//debugger;
		console.log(vem);
		if ( vem === 'X'){
			alert('Spelare 1 vinns');
		}else if(vem === 'O' && mode === 0){
			alert('Spelare 2 vinns');
		}else if(vem === 'O' && mode === 1){
			alert('Maskinen vinns');
		};
		//Vi stoppar att lyssnar rutan eftersom spel är slut.
		// då tvingar vi att spelarerna inte kan fortsätta.
		$('.rutor').off ('click');

};



