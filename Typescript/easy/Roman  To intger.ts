function romanToInt(s: string): number {
 const romanMap: { [key: string]: number } = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  let total:number=0;
  for (let i=0;i<s.length;i++){
  const reman= romanMap[s[i]]
  const next = romanMap[s[i+1]]
  
  if (next>reman){
    total-=reman
  }
  else {
    total+=reman
  }
  }
    return total
};
