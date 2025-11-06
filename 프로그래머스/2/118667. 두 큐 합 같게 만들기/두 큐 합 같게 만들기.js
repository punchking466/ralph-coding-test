function solution(queue1, queue2) {
    const q = [...queue1, ...queue2];
    const len = queue1.length;
    
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i=0; i<queue1.length; i++){
        sum1+=queue1[i];
        sum2+=queue2[i];
    }
    let total = sum1 + sum2;
    const target = total/2;
    if(total%2 !== 0) return;
    
    let i = 0;
    let j = len;
    
    let count = 0;
    while(count < len*4){
        if(sum1 === target) return count;
        if(sum1 > target){
            sum1 -= q[i++];
        }else{
            sum1 += q[j++];
        }
        count++;
    }
    return -1;
}