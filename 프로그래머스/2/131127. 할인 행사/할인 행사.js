function solution(want, number, discount) {
    const totalCount = number.reduce((acc,cur)=>{return acc+cur},0);
    const discountDay = discount.length;
    const wantMap = new Map();
    
    for(let i=0; i<want.length; i++){
        wantMap.set(want[i], number[i]);
    }
    
    let count = 0;
    
    for(let i=0; i<=discountDay-totalCount; i++){
        const sliced = discount.slice(i, i+totalCount);
        const counter = new Map();
        
        for(let item of sliced){
            counter.set(item, (counter.get(item)||0)+1);
        }
        
        let isMatch = true;
        
        for(let [key, val] of wantMap.entries()){
            if(counter.get(key) !== val){
                isMatch= false;
                break;
            }
        }
        
        if(isMatch) count++;
    }

    return count;
}