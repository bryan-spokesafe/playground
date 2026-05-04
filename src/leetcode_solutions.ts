function decodeString(s: string): string {
  const stringStack: string[] = [];
  const countStack: number[] = [];

  let currentStr = "";
  let currentCount = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentCount = currentCount * 10 + Number(char);
    } else if (char == "[") {
      stringStack.push(currentStr);
      countStack.push(currentCount);

      currentCount = 0;
      currentStr = "";
    } else if (char == "]") {
      let repeatTimes = countStack.pop()!;
      let prevStr = stringStack.pop()!;

      currentStr = prevStr + currentStr.repeat(repeatTimes);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
}


function predictPartyVictory(senate: string):string {
  const radiant: number[] = [];
  const dire: number[] = [];
  const n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] == "R") radiant.push(i)
      else dire.push(i)
  }

  while (radiant.length && dire.length){
    let r = radiant.shift()!;
    let d = dire.shift()!

    if (r < d) radiant.push(r + n)
      else dire.push(d + n)
  }
  
  return radiant.length ? "Radiant" : "Dire"
}

