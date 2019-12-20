
function playAudio4(){
var myAudio = new Audio;
myAudio.src = "audio/button/button3.mp3";
myAudio.play();
}

   var COUNT_ARR = [
    
"1000+12","5*5","25*5","7*12","52-13","84/4","125-26","6*5","24*5","7*7","162-13","99/3","154-36","8*8","32*5","6*6","252-14","102/2","110+20+5",
"4*4","42*3","3*10","152-12","80/4","152+210+215", "355+1000", "212-13", "5*15", "6-5", "812+655", "725-200", "1540-500", "625-425", "815-302", "415-12","45-16", 
"154+12+600", "8*3", "8*13", "8*7", "200+100","600+35-35-600", "415+15+430+2", "812-400-12-399", "2*2", "10000-1", "1010+1000+10000", "200+820-20+1000", "718-19-1", "8/4", 
"755-55-55-45", "9999-1", "35-34", "44/4", "66/2", "45-15+20-45-5", "112/2", "48/4", "4/2", "24+26+210-200+0", "45/3", "16/4", "25/5", "1000-500-450-40", "27/3", "36/12", "100/10", "90/10", 
"9000-1000-100-10", "625-126", "5-3", "1000000-1", "16/2", "84/2", "124+12+53+1+14", "466-400-60-5", "8*4", "15+16+15+16+8-70", "45*3", "625-26-99", "1*5", "64/2", "27/9", "25*2", "80/2/2/2/2", "1000+1+10-11", 
"12000+13000+2", "100000-50000", "1000000/2", "40/2/4", "600/6/2", "120*2+160", "554-55-99-399-1", "10*11", "402+1", "4+4+12+22+8+50+101-202","68-5-3-30-3-7-15-4","100*3*3","200*2*3","60/6-9-1",
"100000+105000","5-5+100+1000+900-2000","35*4","100/2/2/5","13*2+4+70-80","315-16-98-1-100","42*2","8+8+8+8+8+8+8+8","8+8","454-155-99-150-49-1","545+455+1000","818*2","20-22", "125-20-100-6", 
"999-99-1-99-801", "4*12", "7+7+7", "7+7+7+7+7+7+7", "412*2", "15/5", "1020/2", "25-26", "4-8", "5-10", "2-10", "45/5", "32/8", "153/3", "8*9", "7*8", "9*9","1+2*2+10","5-10/2+100","6+15+9+70/2",
"10000-9999","815+816+9","412-5*2-2","82+18*1+100+1000","225-5*5-150-49","7*13","92-94","100-50-25*2","8+(10-2)+100+100","100*(2/2)","3-3+112+88+800-999","215*2+570",
"3+3+3+3+3+3+3+3+3+3","10512-2113"   ]; 

// Mix array
var MIX_ARRAY_COUNT_ARR = [];
var ARR2 = COUNT_ARR;

var createMixArrFu = function(){
var randomCountIndFu = function(ARR2) {return Math.floor(Math.random() * ARR2.length);};
var RandomCount = ARR2[randomCountIndFu(ARR2)];
var Cu;
for (Cu = 0; Cu < ARR2.length; Cu++){
	while (MIX_ARRAY_COUNT_ARR.indexOf(RandomCount) !== -1) {
		RandomCount = ARR2[randomCountIndFu(ARR2)];
	}
	MIX_ARRAY_COUNT_ARR[Cu] = RandomCount;
}}

       
// Global
var Skip ="пропустим.."    
var CountRes =" правильных ответов. Хорошо постарался :) "
var countCor = 0;

// geWord
var GeWord = "bird";
var GeWordMixArr=[];
var GeWordRandLetFu = function(GeWord){return Math.floor(Math.random() * GeWord.length)};
var GeWordRandLet = GeWord[GeWordRandLetFu(GeWord)];
var GeWordMix; //= GeWordMixArr.join('');
var Ge0;
var Ge1;
var Ge2;
var Ge3;
var Ge4;
var Ge5;
var IntervalIdGe;
        /*Ge0 = GeWordMix[2]; console.log(Ge0);
        Ge1 = GeWordMix[0];
        Ge2 = GeWordMix[1];
        Ge3 = GeWordMix[3];
        Ge4 = GeWordMix[4];
        Ge5 = GeWordMix[5];*/

var createGeWordMixArr = function(){
GeWordMixArr.length = 0; 
var G;
for (G = 0; G < GeWord.length; G++){while (GeWordMixArr.indexOf(GeWordRandLet) !== -1) {
		GeWordRandLet = GeWord[GeWordRandLetFu(GeWord)];} GeWordMixArr[G] = GeWordRandLet;}
        GeWordMix = GeWordMixArr.join('');
        Ge0 = GeWordMix[2]; 
        Ge1 = GeWordMix[0]; 
        Ge2 = GeWordMix[1]; 
        Ge3 = GeWordMix[3];
        document.getElementById('img0').style.marginTop =1;
        document.getElementById('topl').innerHTML=Ge0;
        document.getElementById('topr').innerHTML=Ge1;
        document.getElementById('botl').innerHTML=Ge2;
        document.getElementById('botr').innerHTML=Ge3;
        //console.log(Ge0+Ge1+Ge2+Ge3);
}

//createGeWordMixArr();

//clearInterval(IntervalIdGe);


// Create test

var Primer; //var Primer1;
//var Primer2;
//var Primer3;
//var Primer4;
//var Primer5;
//var Primer6;
var CountPri;            
var VveStr =  "Введите пример ";            
var GotPriStr =  "использовать готовые примеры";
var VveStrAgain = "Такой пример уже существует, введите новый ";
var PokaCountStr =  "ОК, до следующего раза!";           
            
            function createTest(){
for (CountPri=1; CountPri<7; CountPri++){
    
    //prompt(VveStr + CountPri + ' из 6 ( например: 1+1 или 5-2 или 3*2 или 9/3) или нажмите "отмена", чтобы '  + GotPriStr); CountPri++;
  //if(Primer1 == null | Primer1 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
  //else if (COUNT_ARR.indexOf(Primer1) !==-1){while(COUNT_ARR.indexOf(Primer1) !==-1){Primer1 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer1);{}
  Primer = prompt(VveStr + CountPri); 
    if(Primer == null | Primer == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {alert (PokaCountStr); break;}} 
        else if (COUNT_ARR.indexOf(Primer) !==-1){while(COUNT_ARR.indexOf(Primer) !==-1){Primer = prompt(VveStrAgain);} COUNT_ARR.push(Primer);} else {COUNT_ARR.push(Primer);}
                            }
                         
if (!Primer == null | !Primer == ""){if (confirm("Вы ввели следующие примеры: " + COUNT_ARR[COUNT_ARR.length-1] +', '+COUNT_ARR[COUNT_ARR.length-2] +', '+COUNT_ARR[COUNT_ARR.length-3] +', '+COUNT_ARR[COUNT_ARR.length-4] +', '+COUNT_ARR[COUNT_ARR.length-5] +', '+COUNT_ARR[COUNT_ARR.length-6]+' . Нажмите "OK", чтобы использовать эти примеры, или нажмите "Отмена", чтобы ввести примеры заново.')){CountPri = 1; newTestCountFu();}} else {
var c; for (c=1; c<7; c++){COUNT_ARR.pop();} CountPri = 1;}
                                                }
            
                
// runNewTests
function newTestCountFu(){
   var i = 1;
   countCor = 0;   
   for (; i<7; i++){ var A = eval(COUNT_ARR[COUNT_ARR.length-i]); var Count1 = prompt(COUNT_ARR[COUNT_ARR.length-i]); 
                    if(Count1 == null | !Number.isInteger(A)){alert (Skip);} else { 
       Count1 = parseInt(Count1); while (Count1 !== A){alert("Неверно"); Count1 = parseInt(prompt(COUNT_ARR[COUNT_ARR.length-i]));}                     alert("Правильно!"); countCor++;}
                    } alert(countCor + CountRes); 
                      document.getElementById('ready').style.display='none';
                      document.getElementById('self').style.display='block';
                      showImFu();
                      //IntervalIdGe = setInterval(createGeWordMixArr,4000);
                      setTimeout(wiederFu,2000); 
}  

// runRandom            
   
function randTestCountFu(){
   var l = 1;
   countCor = 0;
   createMixArrFu(); 
   for (; l<7; l++){ var A = eval(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]); var Count1 = prompt(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]); 
                    if(Count1 == null | !Number.isInteger(A)){alert (Skip);} else { 
       Count1 = parseInt(Count1); while (Count1 !== A){alert("Неверно"); Count1 = parseInt(prompt(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]));}                     alert("Правильно!"); countCor++;}
                    } alert(countCor + CountRes); showImFu(); MIX_ARRAY_COUNT_ARR.length = 0;
                      setTimeout(wiederFu,2000);
                        }  

// changButtom
function ersetBut(){ 
document.getElementById('img0').style.display='none';
document.getElementById('img1').style.display='none';    
document.getElementById('self').style.display='none';
document.getElementById('buttom').style.display='block';
document.getElementById('ready').style.display='block';
document.getElementById('buttom').innerHTML='<input  class="alt" type="button" onclick="playAudio4(); setTimeout(createTest(),600);" value="пРИдУмАтЬ пРиМерЫ и РешИТь!"/>';
document.getElementById('ready').innerHTML='<a style="color: darkgreen; " href="#" onclick="readyBut(); return false;">иСПОлЬзоВАтЬ ГОТоВыЕ пРИмеРЫ!</a>';
    
clearInterval(IntervalIdGe);

                    }

function readyBut(){

document.getElementById('ready').style.display='none';
document.getElementById('img0').style.display='none';
document.getElementById('img1').style.display='none';
document.getElementById('self').style.display='block';
document.getElementById('buttom').style.display='block';        
document.getElementById('buttom').innerHTML='<input  class="alt" type="button" onclick="playAudio4(); setTimeout(randTestCountFu(),600);" value="пРиСТуПитЬ к РешЕНиЮ гОтОвЫх ПриМЕРоВ!"/>';
document.getElementById('self').innerHTML='<a style="color: darkred;" href="#" onclick="ersetBut(); return false;">пРИдУмАтЬ пРиМерЫ!</a>';
                    }


function geWoFu(){
    var enterGe = prompt("Введите секретное слово: ");
    if(enterGe !== null){if (enterGe == GeWordMix){alert ("Верно!"); ersetBut();} else{alert ("Неверно :(");} }
    } 

function wiederFu(){if(confirm("Решать новые примеры?")){
document.getElementById('ready').style.display='none';
document.getElementById('img0').style.display='none';
document.getElementById('img1').style.display='none';
document.getElementById('self').style.display='block';
document.getElementById('buttom').style.display='none';
randTestCountFu(); } else{
document.getElementById('img0').innerHTML='<a style="font-size: 28px; margin-top: 3em; color: darkgreen;" href="index.html">вернуться на главную страницу</a>';}
document.getElementById('self').innerHTML='<a style="color: darkslategray;" href="#" onclick="/*createGeWordMixArr();*/setTimeout(geWoFu,1000); return false;">пРИдУмАтЬ пРиМерЫ!</a>';                
                    
                    }

function sound() {
	 var audio = new Audio(); // Создаём новый элемент Audio
	 audio.src = '...'; // Указываем путь к звуку "клика"
	 audio.autoplay = true; // Автоматически запускаем
}

  /*function createTest(){
Primer1 =  prompt(VveStr + CountPri + ' из 6 ( например: 1+1 или 5-2 или 3*2 или 9/3) или нажмите "отмена", чтобы '  + GotPriStr); CountPri++;
  if(Primer1 == null | Primer1 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
  else if (COUNT_ARR.indexOf(Primer1) !==-1){while(COUNT_ARR.indexOf(Primer1) !==-1){Primer1 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer1); 

Primer2 =  prompt(VveStr + CountPri+' из 6'); CountPri++;
 if(Primer2 == null | Primer2 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
   else if (COUNT_ARR.indexOf(Primer2) !==-1){while(COUNT_ARR.indexOf(Primer2) !==-1){Primer2 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer2); 
       
Primer3 =  prompt(VveStr + CountPri+' из 6'); CountPri++;
 if(Primer3 == null | Primer3 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
   else if (COUNT_ARR.indexOf(Primer3) !==-1){while(COUNT_ARR.indexOf(Primer3) !==-1){Primer3 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer3); 
       
Primer4 =  prompt(VveStr + CountPri+' из 6'); CountPri++;
 if(Primer4 == null | Primer4 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
   else if (COUNT_ARR.indexOf(Primer4) !==-1){while(COUNT_ARR.indexOf(Primer4) !==-1){Primer4 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer4); 
       
Primer5 =  prompt(VveStr + CountPri+' из 6'); CountPri++;
 if(Primer5 == null | Primer5 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
   else if (COUNT_ARR.indexOf(Primer5) !==-1){while(COUNT_ARR.indexOf(Primer5) !==-1){Primer5 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer5); 
       
Primer6 =  prompt(VveStr + CountPri+' из 6'); CountPri++;
 if(Primer6 == null | Primer6 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} 
   else if (COUNT_ARR.indexOf(Primer6) !==-1){while(COUNT_ARR.indexOf(Primer6) !==-1){Primer6 = prompt(VveStrAgain);}} COUNT_ARR.push(Primer6); 
       
if (confirm("Вы ввели следующие примеры: " + Primer1 +', '+Primer2 +', '+Primer3 +', '+Primer4 +', '+Primer5 +', '+Primer6+' . Нажмите "OK", чтобы использовать эти примеры, или нажмите "Отмена", чтобы ввести примеры заново.')){CountPri = 1; newTestCountFu(); COUNT_ARR;} else {
var c; for (c=1;c<7;c++){COUNT_ARR.pop();}
CountPri = 1; createTest()}
                                                }*/

