let count = 0;
let num = 1;

const eulerTaskFive = () => {
    while (count < 20) {
        for (i = 1; i <= 20; i++) {
            if (num % i === 0) {
                count++;
            } else {
                count = 0;
                break;
            }
        }
        
        
    }
}