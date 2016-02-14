var ary = [22,5,11,32,120,68,70];
var min_ary = 0;
var max_ary = 6;

var swap = 0;



for(var i = 0; i < max_ary ; i++){
	var sort_min = i;
	for(j = i + 1; j < max_ary + 1; j++){
		if(ary[j] < ary[sort_min]){
			sort_min = j;
		}
	}
	swap = ary[i];
	ary[i] = ary[sort_min];
	ary[sort_min] = swap;
}
for(var m = 0;m < ary.length; m++ ){
	document.write(ary[m]);
	document.write("<br>");

}
