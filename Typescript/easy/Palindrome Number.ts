function isPalindrome(x: number): boolean {
        if (x < 0) return false; 

    let original= x;
    let reversed:number= 0;

    while (x !== 0) {
        let digit:number = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
};
