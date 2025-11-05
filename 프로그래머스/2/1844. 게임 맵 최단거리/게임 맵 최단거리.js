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
        this.items = new Map();
        this.head = 0;
        this.tail = 0;
    }
    
    pushFront(item){
        this.head--;
        this.items.set(this.head, item);
    }
    
    pushBack(item){
        this.items.set(this.tail, item)
        this.tail++
    }
    
    popFront(){
        if(this.isEmpty()) return undefined;
        const item = this.items.get(this.head);
        this.items.delete(this.head);
        this.head++;
        return item;
    }
    
    popBack(){
        if(this.isEmpty()) return undefined;
        this.tail--;
        const item = this.items.get(this.tail);
        this.items.delete(this.tail);
        return item;
    }
    
    isEmpty(){
        return this.size() === 0;    
    }
    
    size(){
        return this.tail - this.head;
    }
}