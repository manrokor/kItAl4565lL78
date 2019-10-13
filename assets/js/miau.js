
   var MIAU_ARR = [
    
'audio/cat/cat(1).mp3',
'audio/cat/cat(2).mp3',
'audio/cat/cat(3).mp3',
'audio/cat/cat(4).mp3', 
'audio/cat/cat(5).mp3',
'audio/cat/cat(8).mp3',
'audio/cat/cat(9).mp3',
'audio/cat/cat(10).mp3',
'audio/cat/cat(11).mp3', 
'audio/cat/cat(12).mp3',
'audio/cat/cat(13).mp3',
'audio/cat/cat(14).mp3' 

      ]; 

// Mix array
var MIX_ARRAY_MIAU_ARR = [];
var ARR7 = MIAU_ARR;
var randomMiauIndFu = function(ARR7) {
	return Math.floor(Math.random() * ARR7.length);
};
var RandomMiau = ARR7[randomMiauIndFu(ARR7)];
var Miau;
for (Miau = 0; Miau < ARR7.length; Miau++) {
	while (MIX_ARRAY_MIAU_ARR.indexOf(RandomMiau) !== -1) {
		RandomMiau = ARR7[randomMiauIndFu(ARR7)];
	}
	MIX_ARRAY_MIAU_ARR[Miau] = RandomMiau;
}

// changeKnock
var Miau1 = 0;
function changeMiau(){
var myAudio = new Audio;
myAudio.src = MIX_ARRAY_MIAU_ARR[Miau1];
myAudio.play();
Miau1++; 
if (Miau1 == MIAU_ARR.length){Miau1 = 0;}}

//function playAudio4(){
//var myAudio = new Audio;
//myAudio.src = changeKnock();
//myAudio.play();
//}