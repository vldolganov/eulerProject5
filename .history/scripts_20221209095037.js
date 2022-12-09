let count = 0; 
let num = 0;

const eulerTask = (num, count) => {
    for(i=1, i<=20, i++){
        if(num % i === 0){
            count++;
        }
    }
}