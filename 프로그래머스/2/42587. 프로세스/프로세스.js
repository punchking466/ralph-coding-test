function solution(priorities, location) {
    const deque = new Deque();
    
    for(let i = 0; i < priorities.length; i++){
        deque.pushBack([i, priorities[i]]);
    }
    
    let count = 0;

    while(true){
        const [idx, val] = deque.popFront();
        if(Object.values(deque.items).find((item)=> item[1] > val)){
           deque.pushBack([idx,val]);
        }else{
            count++;
            if(idx === location){
            return count;
        }
        }
       
    }
}

class Deque{
    constructor(){
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    pushFront(item){
        this.head--;
        this.items[this.head] = item;
    }
    
    pushBack(item){
        this.items[this.tail] = item;
        this.tail++
    }
    
    popFront(){
        if(this.isEmpty()) return undefined;
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
        
    }
    
    popBack(){
        if(this.isEmpty()) return undefined;
        this.tail--;
        const item = this.items[this.tail];
        delete this.items[this.tail];
        return item;
    }
    
    isEmpty(){
        return this.size() === 0;
    }
    
    size(){
        return this.tail - this.head;
    }
}