'use strict'

const playerImg = document.querySelector('.playerImg') //從HTML找到照片<img></img>標籤位置
const frogSound = document.querySelector('.frogSound') //從HTML找聲音<audio></audio>標籤位置

playerImg.addEventListener('mousedown', clickPlayer) //滑鼠按下點擊監聽

//監聽函式
function clickPlayer(){
  const scoreBox = event.target.parentElement.children[1] //此時scoreBox是<h4>0</h4>
  let score = Number(scoreBox.innerText) //此時scoreBox是 0

  score += 1   //JS加減
  console.log(score) //console可以查看數字
  scoreBox.innerText = score //JS渲染 HTML
  playerImg.src = "https://i.postimg.cc/wMKy9LTf/big.jpg" //PlayerImg變數 照片改
  frogSound.play() //Sound變數 使用播放功能
}

playerImg.addEventListener('mouseup', clickPlayer) //滑鼠放開點擊監聽

//監聽函式
function unclickCat() {
  playerImg.src = "https://i.postimg.cc/VN6bgzVR/small.jpg" //playerImg變數 照片改
}
