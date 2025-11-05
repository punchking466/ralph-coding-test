function solution(progresses, speeds) {
    const stack = [...progresses.reverse()];
    const speedsR = [...speeds.reverse()];
    
    const result = [];
    while(stack.length > 0){
        let count =0;
        for(let i=0; i< stack.length; i++){
            if(stack[i]<100){
                stack[i] += speedsR[i];            
            }
        }
        
        for(let i=stack.length-1; i >= 0; i--){
            if(stack[i] >= 100){
                stack.pop();
                count++;
            }else{
                break;
            }
        }
        
        if(count>0) result.push(count);
    }
    
    return result;
}