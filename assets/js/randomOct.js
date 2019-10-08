
    var Oct_array= [
    
'<p><img src="images/Octocat/octocat-1-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я КОСМОНАВТ, cадись в ракету!</i></p>',
        
'<p><img src="images/Octocat/octocat-2-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ЖУРНАЛИСТ, сделаем журнал про МЧС!</i></p>',
        
'<p><img src="images/Octocat/octocat-3-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ВОДОЛАЗ, я нашёл сокровища под короблём.</i></p>',
'<p><img src="images/Octocat/octocat-4-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ФУТБОЛИСТ, я забил 15 голов!</i></p>',
'<p><img src="images/Octocat/octocat-5-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ВИЗИРЬ, привет с востока!</i></p>',
'<p><img src="images/Octocat/octocat-6-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ПОЖАРНЫЙ, я спас двух человек и попугая!</i></p>',
'<p><img src="images/Octocat/octocat-7-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я МЕКСИКАНЕЦ-ГИТАРИСТ, эскуча мэ!</i></p>',
'<p><img src="images/Octocat/octocat-8-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ЗОЛ! Мне разбили телефон!</i></p>',
'<p><img src="images/Octocat/octocat-9-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я просто ДЯДЯ с КОФЕ!</i></p>',
'<p><img src="images/Octocat/octocat-10-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я РЫЦАРЬ, я победил дракона!</i></p>',
'<p><img src="images/Octocat/octocat-11-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ЖЕНИХ! Надеюсь, моя невеста будет красивой!</i></p>',
'<p><img src="images/Octocat/octocat-12-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я КОРОЛЬ, я послал армию на врагов!</i></p>',
'<p><img src="images/Octocat/octocat-13-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ВОЛШЕБНИК, я наколдовал чудо!</i></p>',
'<p><img src="images/Octocat/octocat-14-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я РЫБАК, на ужин будет жареная щука!</i></p>',
'<p><img src="images/Octocat/octocat-15-130.png" alt="Осьмикот" align="center" style="margin= 10px; box-shadow: none; border-radius:130px;"> Привет, я <strong>ОсьмиКот</strong>!<i> Cегодня я ДЕДУШКА, ох, спина болит!</i></p>',
'<center><table class="Octo"><tr><th><p><img src="images/Octocat/octocat-16-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"></th> <th class="Octo">Привет, я <strong>ОсьмиКот</strong>!<br><i> Ну и денёк сегодня..Сначала постригли как индейца, а теперь ещё и кефир попался солёный!</i></p></th></tr></table></center>' 
      ];

      
var MIX_ARRAY_OCT = [];
var ARR1 = Oct_array;
var randomIndFuOct = function(ARR1) {
	return Math.floor(Math.random() * ARR1.length);
};
var RandomIndOct = ARR1[randomIndFuOct(ARR1)];
var k;
for (k = 0; k < ARR1.length; k++) {
	while (MIX_ARRAY_OCT.indexOf(RandomIndOct) !== -1) {
		RandomIndOct = ARR1[randomIndFuOct(ARR1)];
	}
	MIX_ARRAY_OCT[k] = RandomIndOct;
}

  
            var curCat = 0;
            var curCatIm = MIX_ARRAY_OCT[curCat];
                
            function allCatFu(){
            curCat++; if (curCat == MIX_ARRAY_OCT.length){curCat = 0;}
            
            document.getElementById('octocaT').innerHTML = MIX_ARRAY_OCT[curCat]; 
            }   
            
/* '<table class="Octo"><tr><th><p><img src="images/Octocat/octocat-1-130.png" alt="Осьмикот" align="center" style="margin= auto; box-shadow: none; border-radius:130px;"></th> <th class="Octo">Привет, я <strong>ОсьмиКот</strong>!<br><i> Cегодня я КОСМОНАВТ, cадись в ракету!</i></p></th></tr></table>' */

