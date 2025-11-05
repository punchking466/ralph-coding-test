function solution(numbers, target) {
    
    const stack = [];
    stack.push([0,0]);

    let count = 0;
    while(stack.length> 0){
        const [index, sum] =  stack.pop();
        if(index >= numbers.length && sum === target){
            count++;
        }
        if(index < numbers.length){
        stack.push([index+1, sum+numbers[index]])
        stack.push([index+1, sum-numbers[index]]);    
        }
    }
    
    return count
}

class Queue{
    constructor(){
        this.items = [];
        this.head = 0;
    }
    
    push(item){
        this.items.push(item);
    }
    
    shift(){
        if(this.isEmpty()) return undefined;
        const item = this.items[this.head];
        this.head++;
        if(this.head === this.items.length){
            this.items = [];
            this.head = 0;
        }
        return item;
    }
    
    isEmpty(){
        return this.size() === 0;   
    }
    
    size(){
        return this.items.length - this.head;
    }
}