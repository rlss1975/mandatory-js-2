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
	let contKontroll = rutan.text(); 
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
		rutan.css('background','grey');
			//debugger;		
	}else if (spelare === 2 && content === 0) {
		rutan.append('<p>O</p>');
		rutan.css('background','grey');
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
	debugger;
	b1 = $('#b1').text();
	b2 = $('#b2').text();
	b3 = $('#b3').text();
	b4 = $('#b4').text();
	b5 = $('#b5').text();
	b6 = $('#b7').text();
	b7 = $('#b7').text();
	b8 = $('#b8').text();
	b9 = $('#b9').text();
	debugger;
	console.log(b1);
	console.log(b2);
	//debugger;
	// rader
	// condition har en test av boolean för att undvika sker att gå
	// i om dem 3 variabler har samma tumma värde.
	if (b1===b2 && b1===b3 && b1 === true){
		vinnareMedelande();
	}else if (b4===b5 && b4===b6 && b4===true) {
		vinnareMedelande();
	}else if (b7===b8 && b7===b9 && b7===true) {
		vinnareMedelande();
	// columner
	}else if (b1===b4 && b1===b7 && b1===true) {
		vinnareMedelande();
		
	}else if (b2===b5 && b2===b8 && b2===true) {
		vinnareMedelande();
		
	}else if (b3===b6 && b3===b9 && b3===true) {
		vinnareMedelande();
	// diagonaler	
	}else if (b1===b5 && b1===b9 && b1===true) {
		vinnareMedelande();
		
	}else if (b3===b5 && b3===b7 && b3===true) {
		vinnareMedelande();
	//	
	}else{
		console.log("aldrig borde programm skriv detta");
		
	}
	//b2 = $(selector div /b1).text();
	//b3 = $(selector div /b1).text();
	//b4 = $(selector div /b1).text();
	//
	//SWITCH
	// if (B1='O'&& B2='O' && B3='O' && mode = 0){console.log("vinnare är spelare 2 eller IA "); }

}

function vinnareMedelande(){

		if (b1=== 'X'){
			alert('Spelare 1 vinns');
		}else if(mode === 1){
			alert('maskinen vinns')
		}else{
			alert('Spelare 2 vinns')
		};


};



