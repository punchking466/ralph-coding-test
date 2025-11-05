function solution(numbers, target) {
    
    const stack = [];
    stack.push([0,0]);

    let count = 0;
    while(stack.length> 0){
        const [index, sum] =  stack.pop();
        if(index >= numbers.length){
            if(sum === target) count++;
            continue;
        }
        stack.push([index+1, sum+numbers[index]])
        stack.push([index+1, sum-numbers[index]]);    
    }
    
    return count
}