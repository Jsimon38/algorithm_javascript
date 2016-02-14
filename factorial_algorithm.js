var n = 5; //5!
var result = 0;

function factorial(value){
	if(value > 0){
		return value * factorial(value -1);
	}else{
		return 1;
	}
}
result = factorial(n);
document.write(result);
