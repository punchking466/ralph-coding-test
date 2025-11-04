function solution(elements) {
    var answer = 0;
    
    const arr = [...elements, ...elements];
    const result = new Set();
    
    for(let i=1; i<=elements.length; i++){
        let sum =0;
        
        for(let n=0; n<i; n++) sum += arr[n]
        
        result.add(sum);
        
        for(let j=i; j<arr.length; j++){
            sum += arr[j]-arr[j-i];
            result.add(sum);
        }
    }
    return result.size;
}