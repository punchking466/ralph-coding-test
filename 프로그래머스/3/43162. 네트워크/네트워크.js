function solution(n, computers) {
    if(n===1) return n;
    const visited = new Set();
    let count = 0;
    
    for(let i=0; i<n; i++){
        if(visited.has(i)) continue;
        const stack = [i];
        count++;
        while(stack.length> 0){
            const node = stack.pop();
            
            visited.add(node);
            
            for(let j=0; j<n; j++){
 
                if(computers[node][j] === 1 && !visited.has(j)){
                    stack.push(j);
                }
            }
        }
    }
    return count;
}