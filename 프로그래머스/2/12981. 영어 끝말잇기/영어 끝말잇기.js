function solution(n, words) {
    let tempWord = '';
    const setWords = new Set();
    
    for(let i=0; i<words.length; i++){
        const tempLength = tempWord.length;
        
        if(tempLength === 0){
            tempWord = words[i];
            setWords.add(words[i]);
            continue;
        }
        
        if(setWords.has(words[i])) return [(i%n) +1, Math.floor(i/n)+1];
        
        if(tempWord[tempLength-1] !== words[i][0]){
            return  [(i%n) +1, Math.floor(i/n)+1];
        }else{
            tempWord = words[i];
            setWords.add(words[i]);
        }
    }
    
    return [0,0]
}