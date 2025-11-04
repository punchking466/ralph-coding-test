function solution(want, number, discount) {
    
    const totalCount = number.reduce((acc,cur)=>{return acc+=cur},0);
    const discountDay = discount.length;

    let count = 0;
    
    const wantMapIndex = want.reduce((acc,cur,idx)=>{
       return{
           ...acc,
           [cur]: idx+1,
       } 
    },{});
    console.log(wantMapIndex)
    
    const arr = Array.from({length:number.length}).fill(0);
    
    for(let j=0; j<= discount.length - totalCount; j++){
        for(let i=j; i<j+totalCount; i++){
            const index = wantMapIndex[discount[i]];
            if(!index) continue;

            arr[index-1]++;
        }
        
        let result = true;
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== number[i]) result =false;
            arr[i] = 0;
        }
        if(result){
            count++;
        }
    }

    return count;
}