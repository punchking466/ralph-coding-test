function solution(want, number, discount) {
    
    const totalCount = number.reduce((acc,cur)=>{return acc+=cur},0);
    const discountDay = discount.length;
    
    let limit = discountDay - totalCount ;
    let count = 0;
    while(limit >=0){

        const wantMap = want.reduce((acc, cur, idx)=>{
            return {
                ...acc,
                [cur]: number[idx]
            }      
        },{});
        for(let i=0; i<totalCount; i++){
            const item = discount[i]
            if(!wantMap[item]) continue;
            wantMap[item] = wantMap[item] -1 >=0 ? wantMap[item]-1 : 0;
        }
        const result = Object.values(wantMap).reduce((acc,cur)=>{
           return acc += cur; 
        },0);
        
        if(result === 0 ) count ++;
        limit--;
        discount.shift();
    }
    
    
    return count;
}