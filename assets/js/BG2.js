/*
var BG_ARR = [
    
'url(assets/css/ImageBG/NY/NY-bg-1.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-2.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-3.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-4.jpg)',   
'url(assets/css/ImageBG/NY/NY-bg-5.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-6.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-7.jpg)',
'url(assets/css/ImageBG/NY/NY-bg-8.jpg)',  
'url(assets/css/ImageBG/NY/NY-bg-9.jpg)',

      ]; 

*/
   var BG_ARR = [
    
'url(assets/css/ImageBG/AB-bg-1.jpg)',
'url(assets/css/ImageBG/AB-bg-2.jpg)',
'url(assets/css/ImageBG/AB-bg-3.jpg)',
'url(assets/css/ImageBG/AB-bg-4.jpg)',   
'url(assets/css/ImageBG/AB-bg-5.jpg)',
'url(assets/css/ImageBG/AB-bg-6.jpg)',
'url(assets/css/ImageBG/AB-bg-7.jpg)',
'url(assets/css/ImageBG/AB-bg-8.jpg)',  
'url(assets/css/ImageBG/AB-bg-9.jpg)',
'url(assets/css/ImageBG/AB-bg-10.jpg)',
'url(assets/css/ImageBG/AB-bg-11.jpg)',
'url(assets/css/ImageBG/AB-bg-12.jpg)',
'url(assets/css/ImageBG/AB-bg-13.jpg)'

      ]; 


// Mix array
var MIX_ARRAY_BG_ARR = [];
var ARR5 = BG_ARR;
var randomBGIndFu = function(ARR5) {
	return Math.floor(Math.random() * ARR5.length);
};
var RandomBG = ARR5[randomBGIndFu(ARR5)];
var bg;
for (bg = 0; bg < ARR5.length; bg++) {
	while (MIX_ARRAY_BG_ARR.indexOf(RandomBG) !== -1) {
		RandomBG = ARR5[randomBGIndFu(ARR5)];
	}
	MIX_ARRAY_BG_ARR[bg] = RandomBG;
}

// changeBG
var bbg = 1;
function changeBg(){
    document.body.style.backgroundImage = MIX_ARRAY_BG_ARR[bbg]; bbg++; 
    if (bbg == BG_ARR.length){bbg = 0;}}


setInterval(changeBg, 20000);

