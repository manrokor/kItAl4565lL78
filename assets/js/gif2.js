
   var GIF_ARR = [
    
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-1.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-2.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-3.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-4.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-5.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-6.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-7.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-8.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-9.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-10.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-11.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-12.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-13.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-14.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-15.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-16.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-17.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-18.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-19.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-20.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-21.gif" alt="AB1">',
'<img width = "350px" style="border-radius: 350px;" src="images/images2/AB-22.gif" alt="AB1">'


      ]; 

// Mix array
var MIX_ARRAY_GIF_ARR = [];
var ARR6 = GIF_ARR;
var randomGifIndFu = function(ARR6) {
	return Math.floor(Math.random() * ARR6.length);
};
var RandomGif = ARR6[randomGifIndFu(ARR6)];
var gf;
for (gf = 0; gf < ARR6.length; gf++) {
	while (MIX_ARRAY_GIF_ARR.indexOf(RandomGif) !== -1) {
		RandomGif = ARR6[randomGifIndFu(ARR6)];
	}
	MIX_ARRAY_GIF_ARR[gf] = RandomGif;
}

// changeGif
var gif = 0;
function changeGif(){
    ++gif; if (gif == GIF_ARR.length){gif = 0; return MIX_ARRAY_GIF_ARR[gif];} else{ return MIX_ARRAY_GIF_ARR[gif];}}



