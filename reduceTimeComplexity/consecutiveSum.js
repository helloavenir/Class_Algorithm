// 연속된 자연수의 합
// 입력된 양수 n이 2개 이상의 연속된 자연수의 합으로 표현될 수 있는 경우 수를 반환하는 프로그램

function solution(n){
  let lt = 0, answer = 0, sum = 0
  // 자연수 리스트를 Array.from으로 만들기 위한 길이관련 변수 m
  // 최소 2개의 자연수로 n을 만들 것이므로, n이 홀수일 경우 최소 2개로 구성된 경우인 n//2+(n//2+1)가 마지막 경우의 수가 될 수 있을 것이므로 자연수 리스트의 크기를 n/2+1로 잡는다.
  let m = parseInt(n/2)+1  
  // let nums = Array.from({length: m}, (v, i) => i+1)
  // Array.from이 조금 더 느림
  let nums = Array(m).fill(0)
  for(let i = 0; i <= m; i +=1) nums[i] = i+1
  
  for(let rt = 0; rt <= nums.length; rt += 1) {
    sum += nums[rt]
    
    while( sum > n) {
      sum -= nums[lt]
      lt += 1
    }
    if (sum === n) answer+= 1
  }  
  return answer 
}

console.log(solution(15));
// console.log(solution(45678));
// console.log(solution(98765));
// RangeError: Potential infinite loop: exceeded 2000 iterations. ?

