'use strict';
//
/*Instruction som kontrollera att Jquery funkar när man ladda sidan
och har i sin callbaks functionen hella programet*/
$(document).ready(function () {console.log("Jquery och Script går");
	//Vilkor i  början
	


	let spelare1 = 1;
	let spelare2 = 0;
	let spelareIa = 0;
	let content;
	let contKontroll;
	let mode;
	let b1,b2,b3,b4,b5,b6,b7,b8,b9;
	//
	/* spelareKontroll() returneras koden för tur;
	värde 1 betyder: tur till spelare 1
	värde 2 betyder: tur till spelare 2
	värde 3 betyder: tur till spelare IA 
	*/

	// jag behåller event i loopen medan ingen 3 i raden finns.

	/***********MAIN PROGRAM*******************/


	$('.rutor').on ('click', main);
	$('#reset').on ('click', init);

	//
	//
	//
	function main () {
		//debugger;
		mode = $('input[name="spelMode"]:checked').val();
		//debugger;
		//
		if (mode === 'sp' || mode === 'ia') {
			
		
			hiddenOption();
		//debugger;
			let rutan = $(this);
			
			/* här kontrolerar man om rutan är använd forut */
			contKontroll = rutan.text(); 
			console.log(contKontroll);
			if (contKontroll !== ''){
				content = 1;
			}else{
				content = 0;
			}
			//debugger;
			
			
			//spelareKontroll();
			
			//debugger;
			
			if (spelare1 === 1 && content === 0) {
				//debugger;
				rutan.append('<p>X</p>');
				rutan.css('background','#f894a5');
				//debugger;
				//memorizaremos casilla usada para comparar en IA
							
			}else if (spelare2 === 1 && content === 0) {
				//debugger;
				rutan.append('<p>O</p>');
				rutan.css('background','#f894a5');
				//debugger;
				
			}else{
				//debugger;
				alert('rutan är fullt, välja annat')
				//debugger;
				/* sker spelareKontroll(); att tvinga samma
				spelare kunde clicka igen */
				
				spelareKontroll();
			}
			spelareKontroll();
			//aqui fuera haremos fuera de las condiciones un control de juego
			//spelKontroll ()
			//setTimeout(()=>{vinnareKontroll()},1000); 
			vinnareKontroll()
			//debugger;
			if (spelareIa === 1 && content === 0 && mode === 'ia') {
				//mueve la maquina
				///debugger;
				//AQUI HACEMOS LECTURA TABLERO, Y BLOQUEAMOS O ATACAMOS
				//MEMORIZAREMOS LAS POSICIONES X CADA VEZ QUE SE RELLENEN
				console.log("mueve la maquina");
				//debugger;
				spelareKontroll();
				vinnareKontroll();
			}


			// statement
		}else{
			//debugger;
			alert('spel mode måste väljas')
			//debugger;
		}		// body... 
	};
	//
	function spelareKontroll(){
		

		if (spelare1 === 1 && spelare2 === 0){
			//debugger;
			console.log("spelare 1 har spelat");
			/*med nedre 3 variabler controlerar man nästan tur*/
			spelare1 = 0;
			spelare2 = 1;
			spelareIa = 1;
			//debugger;
			
		}else if (spelare1 === 0 && spelare2 === 1 && mode === 'sp') {
			console.log("spelare 2 har spelat");
			//debugger;
			spelare1 = 1;
			spelare2 = 0;
			spelareIa = 0;
			
		}else if (spelare1 === 0 && spelareIa === 1 && mode === 'ia') {
			console.log("IA har spelat");
			spelare1 = 1;
			spelare2 = 0;
			spelareIa = 0;
			
		}else{
			//debugger;
			alert('ingen spelare valt')
			
		}
	};
	//
	function vinnareKontroll(){
		//
		//debugger;
		b1 = $('#b1 p').text();
		b2 = $('#b2 p').text();
		b3 = $('#b3 p').text();
		b4 = $('#b4 p').text();
		b5 = $('#b5 p').text();
		b6 = $('#b6 p').text();
		b7 = $('#b7 p').text();
		b8 = $('#b8 p').text();
		b9 = $('#b9 p').text();
		//debugger;
		console.log(b1+b2+b3+b5+b6+b7+b8+b9);
		
		//
		/* (!!b$===true), Detta är använd för at undvika programmet 
		går i 'vinn' optioner med tre lika tomma värde.*/
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
			$('.rutor').off ('click');
		}else{
			console.log("Spelet fortsätter");
		}
	};
	//
	function vinnareMedelande(vem){
			//debugger;
			console.log(vem);
			//debugger;
			if ( vem === 'X'){
				alert('Spelare 1 vinns');
			}else if(vem === 'O' && mode === 'sp'){
				alert('Spelare 2 vinns');
			}else if(vem === 'O' && mode === 'ia'){
				alert('Maskinen vinns');
			};
			/*Vi stoppar att lyssnar rutorna eftersom spel är slut,
			 då, vi tvingar att spelarerna inte kan fortsätta.*/
			$('.rutor').off ('click');
	};
	function hiddenOption (){
		if (mode === 'sp') {
			$('#ia').css('visibility','hidden');
			$("[for='ia']").css('visibility','hidden');
		}else{
			$('#sp').css('visibility','hidden');
			$("[for='sp']").css('visibility','hidden');
		}
	}
	function init () {
		//debugger;
		spelare1 = 1;
		spelare2 = 0;
		spelareIa = 0;
		$('#sp').attr('checked','false');
		$('#ia').css('visibility','visible');
		$("[for='ia']").css('visibility','visible');
		$('#sp').css('visibility','visible');
		$("[for='sp']").css('visibility','visible');
		$('div p').remove();
		$('.rutor').css('background','pink');
		//debugger;
		//$('#sp').attr('checked','false');
		//$('#ia').attr('checked','false');
		//
		
		//
		$('.rutor').off ('click');
		$('.rutor').on ('click', main);
	}
});


