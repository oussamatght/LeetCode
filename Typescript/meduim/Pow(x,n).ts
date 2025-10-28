function myPow(x: number, n: number): number {
    if (n==0){return 1};
    if (n<0){
        n=-n;
        x=1/x;
    }
    let result=Math.pow(x,n)
    return result
  
    

};
