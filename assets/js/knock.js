
// Mix array
function playAudio3(){
var myAudio = new Audio;
myAudio.src = "audio/button/button3.mp3";
myAudio.play();
}
            
function playAudio2(){
var myAudio = new Audio;
myAudio.src = "audio/button/button2.mp3";
myAudio.play();
}

function playAudio1(){
var myAudio = new Audio;
myAudio.src = "audio/button/button1.mp3";
myAudio.play();
}


   var KNOCK_ARR = [
    
'audio/knock/knock(1).mp3',
'audio/knock/knock(2).mp3',
'audio/knock/knock(3).mp3',
'audio/knock/knock(4).mp3',   
'audio/knock/knock(5).mp3',
'audio/knock/knock(6).mp3',
'audio/knock/knock(7).mp3',
'audio/knock/knock(8).mp3',  
'audio/knock/knock(9).mp3',
'audio/knock/knock(10).mp3',
'audio/knock/knock(11).mp3'

      ]; 

// Mix array
var MIX_ARRAY_KNOCK_ARR = [];
var ARR6 = KNOCK_ARR;
var randomKnockIndFu = function(ARR6) {
	return Math.floor(Math.random() * ARR6.length);
};
var RandomKnock = ARR6[randomKnockIndFu(ARR6)];
var Knock;
for (Knock = 0; Knock < ARR6.length; Knock++) {
	while (MIX_ARRAY_KNOCK_ARR.indexOf(RandomKnock) !== -1) {
		RandomKnock = ARR6[randomKnockIndFu(ARR6)];
	}
	MIX_ARRAY_KNOCK_ARR[Knock] = RandomKnock;
}

// changeKnock
var Knock1 = 0;
function changeKnock(){
var myAudio = new Audio;
myAudio.src = MIX_ARRAY_KNOCK_ARR[Knock1];
myAudio.play();
Knock1++; 
if (Knock1 == KNOCK_ARR.length){Knock1 = 0;}}

//function playAudio4(){
//var myAudio = new Audio;
//myAudio.src = changeKnock();
//myAudio.play();
//}