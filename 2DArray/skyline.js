// 스카이라인
// 매개변수 board가 도시의 각 빌딩의 높이 정보라고 할 때, 도시의 스카이라인은 변하지 않는 선에서 각 빌딩을 최대한 높인다고 한다. 각 빌딩을 최대한 높일 수 있는 층수의 합을 구하는 프로그램을 작성

function solution(board) {
  let answer = 0
  let n = board.length
  // 각 행에서의/ 각 열에서의 스카이라인을 담을 배열을 0으로 n개 채워놓기
  let row = Array(n).fill(0)
  let col = Array(n).fill(0)    
  for(let i = 0; i < n; i += 1) {
    for(let j = 0; j < n; j += 1) {
      // 0 행부터 n-1 행까지 그 행의 0 열부터 n-1 열까지 돌면서 비교하여 각 열의 최대값을 행으로 담는다.
      row[i] = Math.max(row[i], board[i][j]);
      // 0 열부터 n-1 열까지 그 열의 0 행부터 n-1 행까지 돌면서 비교하여 각 행의 최대값을 열로 담는다.
      col[i] = Math.max(col[i], board[j][i]);     
    }
  }
  for( let i = 0; i < n; i += 1) {
    for( let j = 0; j < n; j += 1) {
     // board의 각 요소를 돌면서 그 요소의 행의 최대값과 열의 최대값을 비교하여 
    // 스카이라인을 해치지 않을 최소 층수를 구하고 본인의 높이를 빼면 더 올릴 수 있는 층수를 구할 수 있다.
      answer += (Math.min(row[i], col[j]) - board[i][j])
    }
  }  
  return answer
}


console.log(solution([[2, 5, 7, 3], [6, 8, 9, 7], [3, 2, 4, 5], [7, 2, 5, 8]]))
console.log(solution([[3, 7, 6, 2], [5, 3, 8, 7], [3, 2, 5, 7], [7, 7, 5, 3]]))
console.log(solution([[2, 5, 7, 3, 5], [6, 8, 9, 7, 3], [3, 2, 4, 5, 7], [7, 2, 5, 8, 6], [1, 2, 3, 4, 5]]))
console.log(solution([[10, 11, 12, 11, 15], [15, 12, 13, 23, 11], [11, 13, 23, 25, 1],    [11, 2, 3, 11, 13], [5, 7, 9, 10, 12]]))
