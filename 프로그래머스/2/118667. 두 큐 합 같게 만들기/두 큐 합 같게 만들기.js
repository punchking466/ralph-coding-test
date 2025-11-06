function solution(queue1, queue2) {
    const cQueue1 = new Queue();
    const cQueue2 = new Queue();
    let sum1 = 0;
    let sum2 = 0;
    
    if((sum1 + sum2)%2 !== 0) return -1;
    
    for(let i=0; i<queue1.length; i++){
        sum1 += queue1[i];
        sum2 += queue2[i];
        cQueue1.push(queue1[i]);
        cQueue2.push(queue2[i]);
    }
    
    const avg = Math.floor((sum1 + sum2)/2);
    
    let count =0;
    let tryCount= 0;
    while(sum1 !== avg ){
        if(tryCount > queue1.length *3) return -1;
         
        let num = 0;
        if(sum1 > sum2){
            num = cQueue1.shift();
            if(cQueue1.size() === 0 && num > sum2) return -1;
            cQueue2.push(num);
            sum2 += num;
            sum1 -= num;
        }else{
            num = cQueue2.shift();
            if(cQueue2.size() === 0 && num > sum1) return -1;
            cQueue1.push(num);
            sum1 += num;
            sum2 -= num;
        }
        count++;
        tryCount++;
    }
    return count;
}

class Queue {
    constructor(){
        this.items=[];
        this.head = 0;
    }
    
    size(){
        return this.items.length - this.head;
    }
    
    push(item){
        this.items.push(item);
    }
    
    shift(){
        if(this.items.length === 0) return undefined;
        const item = this.items[this.head];
        this.head++;
        if(this.items.length === this.head){
            this.items = [];
            this.head = 0;
        }
        return item;
    }
}