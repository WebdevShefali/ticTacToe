var chance = "X"
let isgameover = false;
function checkWin(){
  let boxText = document.getElementsByClassName("btn")
  let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
  wins.forEach(e =>{
      if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== "") ){
          document.getElementById("resultText").innerHTML = boxText[e[0]].innerHTML + " Won"
          isgameover = true
        document.getElementById("resultText").style.visibility = "visible"
        document.getElementById("reset-btn").style.visibility = "visible"
        document.getElementById("gif").style.visibility = "visible"
      }
  })
}

function disableBtn(id){
  if(chance === "X"){
    document.getElementById("turn").innerHTML = "Turn for O"
    document.getElementById(id).innerHTML = "X"
    chance = "O"
checkWin();

} else if(chance === "O"){
      document.getElementById("turn").innerHTML = "Turn for X"
    document.getElementById(id).innerHTML = "O"
    chance = "X"
checkWin();
  }
}

document.getElementById("reset-btn").addEventListener("click",()=>{
  window.location.reload();
  chance = "X"
  document.getElementById("resultText").style.visibility = "hidden"
  document.getElementById("reset-btn").style.visibility = "hidden"
  document.getElementById("gif").style.visibility = "hidden"
})
