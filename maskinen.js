'use strict';
/******************************************/
/*Instruction som kontrollera att Jquery funkar när man ladda sidan
och har i sin callbaksfunctionen hella programet*/
$(document).ready(function () {console.log("Jquery och Script går");
	/******************************************/
	/*****initial variable conditions**********/
	/******************************************/
	let spelare1 = 1;
	let spelare2 = 0;
	let spelareIa = 0;
	let content;
	let contKontroll;
	let mode;
	let b1,b2,b3,b4,b5,b6,b7,b8,b9;
	let iaMinning = [];
	let iaSortering = [];
	let iaCodeInput = [];
	let resultRandom;
	let slutFlag = 0;
	//
	/******************************************/
	/*******MAIN KONTROLL PROGRAM**************/
	/******************************************/
	$('.rutor').on ('click', main);
	$('#reset').on ('click', init);
	/******************************************/
	/******************************************/
	/******************************************/
	//
	//
	//
	/******************************************/
	/*******PROGRAM FUNCTIONER*****************/
	/******************************************/
	//
	//funktionen main() är programmets träd sker
	//
	function main () {
		//
		mode = $('input[name="spelMode"]:checked').val();
		//
		//
		if (mode === 'sp' || mode === 'ia') {
			//debugger;
			hiddenOption();
			//
			let rutan = $(this);
			console.log(rutan);
			//
			/* här kontrolerar man om rutan är använd forut */
			contKontroll = rutan.text(); 
			console.log(contKontroll);
			if (contKontroll !== ''){
				content = 1;
			}else{
				content = 0;
			}
			//debugger;			
			if (spelare1 === 1 && content === 0) {
				//debugger;
				rutan.append('<p>X</p>');
				rutan.css('background','#f894a5');
				//debugger;
			}else if (spelare2 === 1 && content === 0) {
				//debugger;
				rutan.append('<p>O</p>');
				rutan.css('background','#f894a5');
				//debugger;
			}else{
				//debugger;
				alert('rutan är fullt, välja annat')
				/* sker spelareKontroll(); att tvinga samma
				spelare kunde clicka igen */				
				spelareKontroll();
			}
			spelareKontroll();
			vinnareKontroll()
			if (slutFlag === 0) {
				// statement
				if (spelareIa === 1 && content === 0 && mode === 'ia') {
					//
					//Här IA analisera spel och använd sin turn
					setTimeout(function(){iaCPU(iaCodeInput)},800,);
					//
					//debugger;
					spelareKontroll();
				}
				slutFlag = 0;
			}
			// statement
		}else{
			//debugger;
			alert('spel mode måste väljas')
			
		}		 
	};
	//
	//spelareKontroll() denna funktionen styr spelarens tur.
	//
	function spelareKontroll(){
		//debugger;
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
		iaMinning[0] = b1;
		b2 = $('#b2 p').text();
		iaMinning[1] = b2;
		b3 = $('#b3 p').text();
		iaMinning[2] = b3;
		b4 = $('#b4 p').text();
		iaMinning[3] = b4;
		b5 = $('#b5 p').text();
		iaMinning[4] = b5;
		b6 = $('#b6 p').text();
		iaMinning[5] = b6;
		b7 = $('#b7 p').text();
		iaMinning[6] = b7;
		b8 = $('#b8 p').text();
		iaMinning[7] = b8;
		b9 = $('#b9 p').text();
		iaMinning[8] = b9;
		//
		//debugger;
		//		
		/* den här delen är för att skapa situationen i array 
		till använda sen i IA.*/		
		iaSortering = iaMinning.map((element)=>{
		if(element === 'X'){
				return 'X';
			}else if ( element ==='O'){
				return 'O';
			}else{
				//E empty
				return '#';
			}
		});
		console.log(iaSortering);
		iaCodeInput = iaSortering.join('');
		console.log(iaCodeInput);
		//debugger;
		//
		/* (!!b$===true), Detta variable är använd för at undvika programmet 
		går i 'vinn' optioner med tre lika tomma värde.*/
		//
	//if (slutFlag === 0) {	
		if (b1===b2 && b1===b3 && !!b1===true ){
			
			$('#b1 p').addClass('vinnRutor');
			$('#b2 p').addClass('vinnRutor');
			$('#b3 p').addClass('vinnRutor');
			vinnareMedelande(b1);
		}else if (b4===b5 && b4===b6 && !!b4===true) {
			
			$('#b4 p').addClass('vinnRutor');
			$('#b5 p').addClass('vinnRutor');
			$('#b6 p').addClass('vinnRutor');
			vinnareMedelande(b4);
		}else if (b7===b8 && b7===b9 && !!b7===true) {
			
			$('#b7 p').addClass('vinnRutor');
			$('#b8 p').addClass('vinnRutor');
			$('#b9 p').addClass('vinnRutor');
			vinnareMedelande(b7);
		// columner
		}else if (b1===b4 && b1===b7 && !!b1===true) {
			
			$('#b1 p').addClass('vinnRutor');
			$('#b4 p').addClass('vinnRutor');
			$('#b7 p').addClass('vinnRutor');
			vinnareMedelande(b1);
			
		}else if (b2===b5 && b2===b8 && !!b2===true) {
			
			$('#b2 p').addClass('vinnRutor');
			$('#b5 p').addClass('vinnRutor');
			$('#b8 p').addClass('vinnRutor');
			vinnareMedelande(b2);
			
		}else if (b3===b6 && b3===b9 && !!b3===true) {
			
			$('#b3 p').addClass('vinnRutor');
			$('#b6 p').addClass('vinnRutor');
			$('#b9 p').addClass('vinnRutor');
			vinnareMedelande(b3);
		// diagonaler	
		}else if (b1===b5 && b1===b9 && !!b1===true) {
			
			$('#b1 p').addClass('vinnRutor');
			$('#b5 p').addClass('vinnRutor');
			$('#b9 p').addClass('vinnRutor');
			vinnareMedelande(b1);
			
		}else if (b3===b5 && b3===b7 && !!b3===true) {
			
			$('#b3 p').addClass('vinnRutor');
			$('#b5 p').addClass('vinnRutor');
			$('#b7 p').addClass('vinnRutor');
			vinnareMedelande(b3);
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
			slutFlag = 1;
			$('.rutor').off ('click');
		}else{
			console.log("Spelet fortsätter");
		}
	};
	//
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
		slutFlag = 1 ;
	};
	//
	/* function hiddenOption() tar bort mode som man inte 
	använd under spel*/	
	function hiddenOption (){
		if (mode === 'sp') {
			$('#ia').css('visibility','hidden');
			$("[for='ia']").css('visibility','hidden');
		}else{
			$('#sp').css('visibility','hidden');
			$("[for='sp']").css('visibility','hidden');
		}
	};
	//
	/*function init () gör en stor Reset för att spela från borjan*/	
	function init () {
		//debugger;
		slutFlag = 0;
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
		//
		$('.rutor').off ('click');
		$('.rutor').on ('click', main);
	};
	//
	//
	function iaCPU(inputCode){
		switch (inputCode) {
			// spel 1
			case 'X########':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '#X#######':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '##X######':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '###X#####':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '####X####':
				/******************************************/
				$('#b1').append('<p>O</p>');
				$('#b1').css('background','#f894a5');
				break;
				/******************************************/
			case '#####X###':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '######X##':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				// statements_1
				break;
			case '#######X#':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '########X':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			/******************************************/
			/******************************************/
			// spel 2
			case 'XX##O####':
				$('#b3').append('<p>O</p>');
				$('#b3').css('background','#f894a5');
				break;
			case 'X#X#O####':
				$('#b2').append('<p>O</p>');
				$('#b2').css('background','#f894a5');
				break;
			case '#XX#O#####':
				$('#b1').append('<p>O</p>');
				$('#b1').css('background','#f894a5');
				break;
			case '####O#XX#':
				$('#b9').append('<p>O</p>');
				$('#b9').css('background','#f894a5');
				break;
			case '####O#X#X':
				$('#b8').append('<p>O</p>');
				$('#b8').css('background','#f894a5');
				break;
			case '####O##XX':
				$('#b7').append('<p>O</p>');
				$('#b7').css('background','#f894a5');
				break;
			case 'X##XO####':
				$('#b7').append('<p>O</p>');
				$('#b7').css('background','#f894a5');
				// statements_1
				break;
			case '##X#O#X##':
				$('#b9').append('<p>O</p>');
				$('#b9').css('background','#f894a5');
				// statements_1
				break;				
			// spel 2.1
			case '##X#O###X':
				$('#b6').append('<p>O</p>');
				$('#b6').css('background','#f894a5');
				break;
			case '####O##XX':
				$('#b3').append('<p>O</p>');
				$('#b3').css('background','#f894a5');
				break;	
			/******************************************/
			/******************************************/
			// spel 2.1
			case 'OX##X####':
				$('#b8').append('<p>O</p>');
				$('#b8').css('background','#f894a5');
				break;
			case 'O#X##X###':
				$('#b9').append('<p>O</p>');
				$('#b9').css('background','#f894a5');
				break;
			case 'O#X#X#####':
				$('#b7').append('<p>O</p>');
				$('#b7').css('background','#f894a5');
				break;
			case 'O#X####X##':
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;
			case '####O#X#X':
				$('#b8').append('<p>O</p>');
				$('#b8').css('background','#f894a5');
				break;
			case 'O#####XX#':
				$('#b9').append('<p>O</p>');
				$('#b9').css('background','#f894a5');
				break;
			case 'O######XX':
				$('#b7').append('<p>O</p>');
				$('#b7').css('background','#f894a5');
				// statements_1
				break;
			case 'O#####X#X':
				$('#b8').append('<p>O</p>');
				$('#b8').css('background','#f894a5');
				// statements_1
				break;				
			/******************************************/
			/******************************************/
			/***efter 3 spel, maskinen blir dum och spela random******/
			default:
				random();
				renderRandom(resultRandom);
				break;
		}
	};
	//
	//
	function random (){
		//debugger;
		let ledigRutor=[];
		//
		for(let i = 0; i < iaSortering.length; i++){
			if(iaSortering[i] === '#'){
				ledigRutor.push(i+1);
			}
		}
		let nummerRutor = ledigRutor.length;
		let indexRandom =Math.floor(Math.random()*nummerRutor);
		console.log(ledigRutor[indexRandom]);
		resultRandom = ledigRutor[indexRandom];
	}
	//
	//
	function renderRandom (datain){
		//debugger;
		switch (datain) {
			case 1:
				$('#b1').append('<p>O</p>');
				$('#b1').css('background','#f894a5');
				break;
			case 2:
				$('#b2').append('<p>O</p>');
				$('#b2').css('background','#f894a5');
				break;
			case 3:
				$('#b3').append('<p>O</p>');
				$('#b3').css('background','#f894a5');
				break;
			case 4:
				$('#b4').append('<p>O</p>');
				$('#b4').css('background','#f894a5');
				break;
			case 5:
				$('#b5').append('<p>O</p>');
				$('#b5').css('background','#f894a5');
				break;																
			case 6:
				$('#b6').append('<p>O</p>');
				$('#b6').css('background','#f894a5');
				break;					
			case 7:
				$('#b7').append('<p>O</p>');
				$('#b7').css('background','#f894a5');
				break;									
			case 8:
				$('#b8').append('<p>O</p>');
				$('#b8').css('background','#f894a5');
				break;					
			case 9:
				$('#b9').append('<p>O</p>');
				$('#b9').css('background','#f894a5');
				break;					
			default:
				alert('något problem i spel cpu');
				alert('gärna kontakta med utvecklare')
				break;
		}
		vinnareKontroll();
	}
});


