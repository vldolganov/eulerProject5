let count = 0; 
let num = 1;

const eulerTask = (num, count) => {
    for(i=1;i<=20;i++){
        if(num % i === 0){
            ++;
        } else{
            count = 0;
            break;
        }
    }
    console.log(count);
}; 

eulerTask()