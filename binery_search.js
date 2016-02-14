var ary = [5,11,32,68,70,120,157];
var begin_ary = 0;
var last_ary = 6;
var key_exist = 11;
//var key_not_exist = 12;

var key = key_exist;
//var key = key_not_exist;

var value1 = 0;

do{
	var index = (begin_ary + last_ary) / 2;
	if(ary[index] == key){
		value1 = index;
		break;
	}else if(ary[index] < key){
		begin_ary = index + 1;
	}else{
		last_ary = index - 1;
	}

} while(begin_ary <= last_ary);

if(value1 == index){
	document.write("ary_number=" + value1);
}else{
document.write("value not exist");
}
