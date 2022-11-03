  let num = 13
function checkPrime(){


let count = 0
for(let i=0;i<num.length;i++){
if(num%i==0){
count++;
}
}

if(count==2){
console.log("Prime Number")
}else{
console.log("Not a prime")
}

}