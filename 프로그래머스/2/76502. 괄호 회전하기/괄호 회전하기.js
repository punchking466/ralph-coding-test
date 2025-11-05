function solution(s) {
    const arr = [...s, ...s];

    const itemType = {
        '[': 1,
        ']': -1,
        '{': 2,
        '}': -2,
        '(': 3,
        ')': -3,
    };
    
    let count =0;
    
    for(let i=0; i<s.length; i++){
        const sliced = arr.slice(i, i+s.length);
        const deque = new Deque();
        
        let isMatch = true;
        for(let item of sliced){
            if(itemType[item]>0){
                deque.pushBack(item);
                continue;
            }
            
            const tail = deque.popBack();

            if(itemType[tail] !== Math.abs(itemType[item])){
                isMatch = false;
                break;
            }
        }
        
        if(!deque.isEmpty()) isMatch =false;
        if(isMatch) count++
    }
    
    return count;
}

class Deque{
    constructor(){
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    pushFront(item){
        this.head--;
        this.items[this.head] = item
    }
    
    pushBack(item){
        this.tail++;
        this.items[this.tail] = item
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
        const item = this.items[this.tail];
        delete this.items[this.tail];
        this.tail--;
        return item;
    }
    
    isEmpty(){
        return this.size() === 0;   
    }
    
    size(){
        return this.tail - this.head;
    }
}