// 십진수를 이진수로 반환하는 함수(재귀함수, 스택구조)

function solution(n) {
  let answer = 0, tmp = [];
  function DFS(n) {
    if(n === 0) return;
    else {
      DFS(parseInt(n/2))
      tmp.push(n%2)
      
    }
  }
  DFS(n)
  console.log(tmp)
  answer = tmp.join("")
  return answer
}
console.log(solution(11))
