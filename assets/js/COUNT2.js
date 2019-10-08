
   var COUNT_ARR = [
    
"1000+12","5*5","25*5","7*12","52-13","84/4","125-26","6*5","24*5","7*7","162-13","99/3","154-36","8*8","32*5","6*6","252-14","102/2","110+20+5",
"4*4","42*3","3*10","152-12","80/4","152+210+215", "355+1000", "212-13", "5*15", "6-5", "812+655", "725-200", "1540-500", "625-425", "815-302", "415-12","45-16", "154+12+600", "8*3", "8*13", "8*7", "200+100","600+35-35-600", "415+15+430+2", "812-400-12-399", "2*2", "10000-1", "1010+1000+10000", "200+820-20+1000", "718-19-1", "8/4", "755-55-55-45", "9999-1", "35-34", "44/4", "66/2", "45-15+20-45-5", "112/2", "48/4", "4/2", "24+26+210-200+0", "45/3", "16/4", "25/5", "1000-500-450-40", "27/3", "27/3", "36/12", "100/10", "90/10", "9000-1000-100-10", "625-126", "5-3"
      ]; 

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

var Primer1;
var Primer2;
var Primer3;
var Primer4;
var Primer5;
var Primer6;
var CountPri = 1;            
var VveStr =  "Введите пример ";            
var GotPriStr =  "использовать готовые примеры";
var PokaCountStr =  "ОК, до следующего раза!";           
            
            function createTest(){
Primer1 =  prompt(VveStr + CountPri + ' ( например: 1+1 или 5-2 или 3*2 или 9/3) или нажмите "отмена", чтобы '  + GotPriStr); CountPri++;
    if(Primer1 == null | Primer1 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{
        Primer2 =  prompt(VveStr + CountPri); CountPri++;
            if(Primer2 == null | Primer2 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{
                Primer3 =  prompt(VveStr + CountPri); CountPri++;
                    if(Primer3 == null | Primer3 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{        
                        Primer4 =  prompt(VveStr + CountPri); CountPri++;
                            if(Primer4 == null | Primer4 == ""){if (confirm (GotPriStr)){CountPri = 1; CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{
                                Primer5 =  prompt(VveStr + CountPri); CountPri++;
                                    if(Primer5 == null | Primer5 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{
                                        Primer6 =  prompt(VveStr + CountPri); CountPri++;
                                            if(Primer6 == null | Primer6 == ""){if (confirm (GotPriStr)){CountPri = 1; randTestCountFu();} else {CountPri = 1; alert (PokaCountStr);}} else{         
if (confirm("Вы ввели следующие примеры: " + Primer1 +', '+Primer2 +', '+Primer3 +', '+Primer4 +', '+Primer5 +', '+Primer6+' . Нажмите "OK", чтобы использовать эти примеры, или нажмите "Отмена", чтобы ввести примеры заново.')){COUNT_ARR.push(Primer1);COUNT_ARR.push(Primer2);COUNT_ARR.push(Primer3);COUNT_ARR.push(Primer4);COUNT_ARR.push(Primer5);COUNT_ARR.push(Primer6); CountPri = 1; newTestCountFu(); COUNT_ARR;} else {CountPri = 1; createTest()}
                                                }}}}}}
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
                      //IntervalIdGe = setInterval(createGeWordMixArr,8000);
                      setTimeout(wiederFu,6000); 
}  

// runRandom            
   
function randTestCountFu(){
   var l = 1;
   countCor = 0;
   createMixArrFu(); 
   for (; l<7; l++){ var A = eval(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]); var Count1 = prompt(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]); 
                    if(Count1 == null | !Number.isInteger(A)){alert (Skip);} else { 
       Count1 = parseInt(Count1); while (Count1 !== A){alert("Неверно"); Count1 = parseInt(prompt(MIX_ARRAY_COUNT_ARR[MIX_ARRAY_COUNT_ARR.length-l]));}                     alert("Правильно!"); countCor++;}
                    } alert(countCor + CountRes); showImFu(); MIX_ARRAY_COUNT_ARR.length = 0; setTimeout(wiederFu,6000);
//document.getElementById('self').style.display='none';
//document.getElementById('ready').style.display='block';
//document.getElementById('img0').style.display='none';
//document.getElementById('img1').style.display='none';      

                        }  

// changButtom
function ersetBut(){ 
        document.getElementById('topl').style.display='none';
        document.getElementById('topr').style.display='none';
        document.getElementById('botl').style.display='none';
        document.getElementById('botr').style.display='none';
document.getElementById('img0').style.display='none';
document.getElementById('img1').style.display='none';    
document.getElementById('self').style.display='none';
document.getElementById('buttom').style.display='block';
document.getElementById('ready').style.display='block';
document.getElementById('buttom').innerHTML='<input  class="alt" type="button" onclick="createTest()" value="пРИдУмАтЬ пРиМерЫ и РешИТь!"/>';
document.getElementById('ready').innerHTML='<a style="color: darkgreen; " href="#" onclick="readyBut(); return false;">иСПОлЬзоВАтЬ ГОТоВыЕ пРИмеРЫ!</a>';
    
clearInterval(IntervalIdGe);

                    }

function readyBut(){

document.getElementById('ready').style.display='none';
document.getElementById('img0').style.display='none';
document.getElementById('img1').style.display='none';
document.getElementById('self').style.display='block';
document.getElementById('buttom').style.display='block';        
document.getElementById('buttom').innerHTML='<input  class="alt" type="button" onclick="randTestCountFu()" value="пРиСТуПитЬ к РешЕНиЮ гОтОвЫх ПриМЕРоВ!"/>';
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
                    
                    
                    }
