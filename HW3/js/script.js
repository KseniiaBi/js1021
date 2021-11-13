

function sort (a) {

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a[i]+1; j++) {
            if (a[j] > a[j+1]) {
                let swap = a[j+1];
                a[j+1] = a[j];
                a[j] = swap; 
            }
        }
    }
    return a;
}

console.log(sort([7,3,1,9,2,8,6,5,4]));


function task2 (a,b,c){
    let sum = a+b;
    div = sum / c;
    console.log(sum);
    console.log(div);
}
task2 (6,4,2);


function fibon (f) {
    if(f==0){
        return 0;
    }
    if(f==1){
        return 1;
    }
    else{
        return fibon(f-1) + fibon(f-2);
    }
}

let result = fibon(11);
console.log(result);


function positives(a){
    let arr = [];
    index = 0;

    for (let i = 0; i < a.length; i++){
        if(a[i] > 0){
            arr[index] = a[i];
            index++;
        }
    }
    return arr;
}

console.log(positives([-1,2,-4,9,-2,34,-55,87,0]));

function negatives(b) {
    let arr = [];
    index = 0;

    for(let i = 0; i < b.length; i++) {
        if(b[i]<0){
        arr[index] = b[i];
        index++;
        }
    }
    return arr;
}

console.log(negatives([-1,2,-4,9,-2,34,-55,87,0]));