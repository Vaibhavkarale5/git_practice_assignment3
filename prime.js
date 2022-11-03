
function checkPrime(num){
	let fact = 0;
	for (let i=0; i < num.length; i++){
		if(num % i == 0){
			fact++;
		}
	}

	fact==2 ? console.log("Prime Number") : console.log("Not a Prime Number");

}

checkPrime(29);