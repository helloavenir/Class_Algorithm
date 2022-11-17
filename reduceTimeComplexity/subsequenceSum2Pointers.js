// 부분 수열(투 포인터스 알고리즘: O(N^2)이 될 것을 O(N)으로 만들어준다 !
// 자연수로 이루어진 수열에서 부분수열의 합이 주어진 수 m이 되는 경우가 몇번인지를 반환하는 프로그램

function solution(nums, m){
  // left 인덱스와 right 인덱스, 부분합
  let lt = 0, sum = 0, answer = 0
  // 먼저 오른쪽 포인터를 하나 움직이고 합을 구한다.
  for(let rt = 0; rt < nums.length; rt += 1) {
    sum += nums[rt];
    // 위의 합이 주어진 부분합보다 작거나 같으면 아래 while문은 수행되지 않고 내려간다. 
    // 이중 반복문 같아서 O(N^2)같아보이지만, 안의 while문만 lt이 증가하면서 바깥 반복문과 상관없이 
    // 자기만 돌기 때문에 O(N)이다. 
    while(sum > m) {
      // 오른쪽을 움직이면 더한 합이 주어진 부분합보다 커지면(같지 않고)
      // 왼쪽 포인터를 오른쪽으로 움직이면서(합을 줄이면서) 합이 주어진 부분합에 가까워지도록 해본다.
      sum -= nums[lt]
      lt += 1
    // 다시 while문으로 올라가서 여전히 주어진 부분합(m)이 크면 계속 왼쪽 포인터를 움직일 것이다.
    // 그러다 합이 주어진 부분합보다 작거나 같아지면 while문을 빠져나오게 된다.
    }
    // while문을 빠져나올 때의 합이 주어진 부분합과 같은 값이면 answer에 하나 카운팅
    if(sum === m) answer += 1  
  }  
  return answer 
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));
console.log(solution([5, 5, 5], 5));
