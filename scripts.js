let count = 0;
let num = 1;

const optimEuler = () => {
    while(count < 20){
        for(i = 1; i<= 20; i++){
            if(!(num % i)){
                count++;
            } else {
                count = 0;
                break;
            } 
        }
        if(count === 20){
            alert(num);
        } else {
            num ++;
        }
    }
}

optimEuler();
