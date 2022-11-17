// 최대 길이 부분수열
// 0과 1로 구성된 수열에서 최대 k번까지만 0을 1로 변경하여 1로 되어 있는 부분수열이 될 수 있는 최대길이 반환하는 프로그램
// 투 포인터스로 주어진 배열의 0의 개수를 센다.

function solution(nums, k){
  // left 인덱스와 0의 개수를 세는 cnt, 두 인덱스 사이의 길이
  let lt = 0, cnt = 0, len = 0, answer = 0
  // 먼저 오른쪽 포인터를 하나 움직여, 0을 발견하면 cnt를 올려 주어진 k개만큼 1로 바꿔서 최대길이를 만들려고 한다.
  for(let rt = 0; rt < nums.length; rt += 1) {
    // 값이 0인 경우, 카운팅한다.
    if(nums[rt] === 0) {
      cnt += 1      
    }
    // 그 카운팅이 1로 바꿀 수 있는 횟수를 초과하게 되면 다음 while문이 수행된다.
    while(cnt > k) {
      // 최대 길이 카운팅은 0이 시작되는 
      if(nums[lt] === 0) cnt -= 1
      lt += 1
      
    // 다시 while문으로 올라가서 여전히 주어진 부분합(m)이 크면 계속 왼쪽 포인터를 움직일 것이다.
    // 그러다 합이 주어진 부분합보다 작거나 같아지면 while문을 빠져나오게 된다.
    }
    // cost가 주어진 예산 m가 같거나 막 작아질때 그간의 공사구간을 담는다.
    len = rt-lt+1
    // 그 전에 담아두었던 값과 비교해 큰 값을 담아둔다.
    answer = Math.max(answer, len)
  }  
  return answer 
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
console.log(solution([1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 3));
console.log(solution([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1], 5));
console.log(solution([1, 1, 0, 0, 1, 1, 0], 3));



