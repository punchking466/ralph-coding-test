function solution(dirs) {
    const directions ={
        'U': [-1,0],
        'D': [1,0],
        'L': [0,-1],
        'R': [0,1],
    }
    
    const visited = new Set();
    let x = 5;
    let y = 5;
    let count = 0;
    for(const dir of dirs.split('')){
        const [dx, dy] = directions[dir];
        
        const nx = x + dx;
        const ny = y + dy;
        if(
            nx >=0 &&
            ny >=0 &&
            nx < 11 &&
            ny < 11
          ){
            const path = `${x}${y}${nx}${ny}`;
            const reverse = `${nx}${ny}${x}${y}`
            
            if(!visited.has(path) && !visited.has(reverse)){
                visited.add(path);
                visited.add(reverse);
                count++
            }
            x = nx;
            y = ny;
           
        }
    }
    return count;
}