const fib =(n)=>{
	if (n==1){
return [0, 1 ]
	}

	let res =[0, 1]
		for (var i = 2; i < n+1; i++) {

			res.push(res[i-2] + res[i-1])			
		}
		
		return res;

}

console.log(fib(50));
