function firstWord(s) {
  // your code here
	 let s = s + " "
	  let temp = " "
   for(let i=0; i<s.length; i++){
   
        if((s.charAt(i) != " "){
            temp += s.charAt(i)
        }
        else{
           return temp
        }
    return temp;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
