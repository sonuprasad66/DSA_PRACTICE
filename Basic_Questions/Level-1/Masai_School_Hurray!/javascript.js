

// Sample Input 1 
// 7

// Sample Output 1
// Masai

let n = 7

function MasaiSchoolHurray(n){
    if(n%35==0){
        console.log("Masai School")
    }
    else if(n%7==0){
        console.log("Masai")
    }
    else if(n%5==0){
        console.log("School")
    }
  
    else{
         console.log("Hurray!")
    }
}

MasaiSchoolHurray(n)