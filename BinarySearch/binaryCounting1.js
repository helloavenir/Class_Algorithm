//nums로 전달된 수를 이진수로 변환했을 때 1의 개수가 적은 것부터 많은 것 순으로 정렬하되 동순일때는 십진수 기준 오름차순으로 정렬
function solution(nums){  
  let answer= [];  
  // 수와 그 수의 이진수에 등장하는 1의 개수를 담을 배열
  let pair = [];
  nums.forEach(num => {
    // 1의 개수를 셀 cnt
    let cnt = 0;
    // 각 수를 담아 이진수의 1의 개수를 확인할 tmp
    let tmp = num;
    while(tmp > 0){
      // tmp에 담은 각 수를 2로 나눠 나머지가 1이 나오면 1이, 0이면 0이 더해져 이진수 마지막 자릿수의 1이 카운팅될 것이고, 
      cnt += (tmp % 2);  
      // 나눈 몫을 다시 tmp에 담아 위의 과정을 반복해 1을 카운팅한다.
      tmp = parseInt(tmp / 2);
    }
    // 각 수와 1의 개수를 쌍으로 새 배열에 담는다.
    pair.push([num, cnt]);
  });
  pair.sort((a, b) => {
    // 1의 개수가 같은 동순의 경우, 수를 기준으로 오름차순으로 정렬
    if(a[1] === b[1]) return a[0] - b[0]
    // 그렇지 않다면 그냥 1의 개수 기준으로 오름차순 정렬
    else return a[1] - b[1]
  }) // 1의 개수 순으로 정렬된 pair배열에서 해당 수만 answer 배열에 담는다. 
  // for(let [a, b] of pair){
  //   answer.push(a);  
  pair.forEach((b) => answer.push(b[0]))
  return answer;
}
console.log(solution([5, 6, 7, 8, 9]));
console.log(solution([5, 4, 3, 2, 1]));


