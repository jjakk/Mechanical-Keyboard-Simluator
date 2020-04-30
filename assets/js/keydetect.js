
function playClick(event){
	
	var audio;
	
	var audioFileName;
	
	//`
	if(event.keyCode == 192){audio = new Audio(audioFileName = '`');}
	//1
	else if(event.keyCode == 49){audio = new Audio(audioFileName = '1');}
	//2
	else if(event.keyCode == 50){audio = new Audio(audioFileName = '2');}
	//3
	else if(event.keyCode == 51){audio = new Audio(audioFileName = '3');}
	//4
	else if(event.keyCode == 52){audio = new Audio(audioFileName = '4');}
	//5
	else if(event.keyCode == 53){audio = new Audio(audioFileName = '5');}
	//6
	else if(event.keyCode == 54){audio = new Audio(audioFileName = '6');}
	//7
	else if(event.keyCode == 55){audio = new Audio(audioFileName = '7');}
	//8
	else if(event.keyCode == 56){audio = new Audio(audioFileName = '8');}
	//9
	else if(event.keyCode == 57){audio = new Audio(audioFileName = '9');}
	//0
	else if(event.keyCode == 48){audio = new Audio(audioFileName = '0');}
	//-
	else if(event.keyCode == 189){audio = new Audio(audioFileName = '-');}
	//=
	else if(event.keyCode == 187){audio = new Audio(audioFileName = '=');}
	//backspace
	else if(event.keyCode == 8){audio = new Audio(audioFileName = 'back');}
	
	
	else {audioFileName = '`';}
	
	audio = new Audio('assets/audio/keysounds/' + audioFileName + '.mp3');
	
	audio.volume = document.getElementById("volumeInput").value / 100;
	
	audio.play();
	
}

