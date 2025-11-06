function solution(n) {
    if (n === 1) return 1 % 1000000007;
    if (n === 2) return 1 % 1000000007;
    let last1 = 1;
    let last2 = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = last1 + last2 > 1000000007
                ? (last1 + last2) % 1000000007
                :  last1 + last2;
        last1 = last2;
        last2 = result;
    }

    return result;
}