function solution(maps) {
    const dis = [[-1,0], [1,0], [0,-1], [0,1]];
    
    const queue = [[0,0,1]];
    const visited = Array.from({length : maps.length},
                               ()=> Array(maps[0].length).fill(false));
    
    while(queue.length > 0){
        const [x, y, count] = queue.shift();
        if(x === maps.length-1 && y === maps[0].length-1){
            return count;
        }
        
        for(let [dx,dy] of dis){
            let nx = dx + x;
            let ny = dy + y;
            
            if(nx>=0 &&
               ny>=0 &&
               nx<maps.length &&
               ny<maps[0].length &&
               maps[nx][ny]>0 &&
              !visited[nx][ny]){
                queue.push([nx, ny, count+1]);
                visited[nx][ny] = true;
            }
        }
    }
    
    return -1;
}