function solution(maps){
    const direction = [[0,1], [0,-1], [1,0], [-1,0]];
    
    const N = maps.length; 
    const M = maps[0].length;
    
    const queue = new Deque();
    queue.pushBack([0,0]);
    maps[0][0] = 1;

    while(!queue.isEmpty()){
        const [r, c] = queue.popFront();
        
        const currentDist = maps[r][c];
        
        if(r === N-1 && c === M-1){
            return currentDist;
        }
        
        for(let [dr, dc] of direction){
            const nr = r + dr;
            const nc = c + dc;
            
            if(nr>=0 && nr<N && nc>=0 && nc<M){
                if(maps[nr][nc] === 1){
                    queue.pushBack([nr,nc]);
                    maps[nr][nc] = currentDist+1;
                }
            }
        }
    }
    return -1;
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