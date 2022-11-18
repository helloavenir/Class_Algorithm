// 좌표 x값에 의한 오름차순, 동순일 때 y값에 따라 좌표 정렬

function solution(nums) {
  nums.sort((a, b) => {
  // 두 좌표의 x 값이 같다면, y 값을 오름 차순으로 반환
  if(a[0] === b[0]) return a[1] - b[1] 
  // 두 좌표의 x 값이 같지 않다면, x값으로 오름차순
  else return a[0] - b[0]
  })
  return nums; 
}
console.log(solution([[2, 3], [1, 4], [3, 1], [1, 2]]));
