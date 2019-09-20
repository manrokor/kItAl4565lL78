
    var OctHom_array= [
    
'<img src="images/Octocat/домик1-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик2-120.jpg" alt="ОсьмиКотоДом  align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик3-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик4-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик5-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик6-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик7-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик8-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик9-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик10-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик11-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик12-120.jpg" title="этот дом еще нужно покрасить" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик13-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',
'<img src="images/Octocat/домик14-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none; border-radius:100px;">',
'<img src="images/Octocat/домик15-120.jpg" alt="ОсьмиКотоДом" align="right" style="margin= 10px; box-shadow: none;">',

      ];
       
var randomOctHomFu= function(OctHom_array){return OctHom_array[Math.floor(Math.random()*OctHom_array.length)];};
       //randomOctHomFu(OctHom_array);
      
var MIX_ARRAY_OCT_HO = [];
var ARR2 = OctHom_array;
var randomIndFuOctHo = function(ARR2) {
	return Math.floor(Math.random() * ARR2.length);
};
var RandomIndOctHo = ARR2[randomIndFuOctHo(ARR2)];
var l;
for (l = 0; l < ARR2.length; l++) {
	while (MIX_ARRAY_OCT_HO.indexOf(RandomIndOctHo) !== -1) {
		RandomIndOctHo = ARR2[randomIndFuOctHo(ARR2)];
	}
	MIX_ARRAY_OCT_HO[l] = RandomIndOctHo;
}

   
                //<script type="text/javascript">
                var curCatHo = 0; 
                var curCatHoIm = MIX_ARRAY_OCT_HO[curCatHo];
                var curCatHoFu = function(){return MIX_ARRAY_OCT_HO[curCatHo];}
                
                function allCatHoFu(){
                curCatHo++; if (curCatHo == MIX_ARRAY_OCT_HO.length){curCatHo = 0;}
                document.getElementById('octocathO').innerHTML = MIX_ARRAY_OCT_HO[curCatHo]; 
                    }; 
                //</script>