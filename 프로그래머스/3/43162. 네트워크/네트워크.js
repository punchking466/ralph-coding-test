function solution(n, computers) {
    if(n === 1) return 1;
    
    let count = 0;
    const visited = new Set();
    for(let i=0; i<n; i++){
        if(!visited.has(i)){
            count++;
            
            const stack = [i];
        
            while(stack.length> 0){
                const node = stack.pop();
                if(visited.has(node)) continue;
                visited.add(node);

                for(let j=0; j<n; j++){
                    if(computers[node][j] === 1 && !visited.has(j)){
                        stack.push(j)
                    }
                }
            }
        }
        
    }
    return count;
}