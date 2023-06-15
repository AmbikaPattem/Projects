var inp = '';
		function calculation(input){
			//give an input not equal to = and x then input will be accessed
			if((input != '=') &&(input !='x')) {
				inp += input + '';
			}
			if(input =='x'){
				inp=inp.toString().slice(0,-1);
			}

			let d = document.getElementById("result");
			//inp = input == '=' ? eval(inp) : inp;
			inp = (input ==' ')?input:(input == '=' ? eval(inp) : inp);
			
			d.innerHTML= inp;
			
		}