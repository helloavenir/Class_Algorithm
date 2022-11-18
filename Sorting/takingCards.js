function solution(nums, k){  
  let answer = 0;
  let n = nums.length;
  // 카드의 큰 값 순으로 내림차순 정렬(원본 훼손 됨!)
  // 카드의 선택은 값이 큰 카드부터 선택한다 가정
  nums.sort((a, b)=> b - a);
  console.log(nums.sort((a, b) => b - a))
  // 각 라운드의 차이를 담을 배열
  let diff = [];
  // 두번째 플레이어가 얻을 값의 총합
  for(let i = 1; i < n; i += 2){
    answer += nums[i];
    // 내림차순 정렬된 상태에서 앞의 수에서 뒤의 수를 뺀 값들(각 라운드의 차이)을 저장
    diff.push(nums[i-1] - nums[i]);
  }
  // 차이가 큰 경우부터 앞으로 오게 정렬
  diff.sort((a, b)=> b - a);
  // k번의 우선권을 사용해서 큰 차이나는 카드를 먼저 집어 자기가 가져감
  // 카드값이 큰 거 순서로 가져가는 걸로 정해져 있으므로 각 라운드마다 카드를 서로 바꾸는 격이 됨 !
  for(let i = 0; i < k; i += 1) answer += diff[i];
  return answer;
}

console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2));
console.log(solution([8, 2, 12, 12, 12, 12, 2, 2], 2));
