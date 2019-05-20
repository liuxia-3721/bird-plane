let bird = document.querySelector("#bird") ; //小鸟
let box = document.getElementById("bird-box");//笼子
// 小鸟的部分
bird.style.left = box.offsetWidth/2 - bird.offsetWidth/2 + "px"
let jump = box.offsetHeight/2 - bird.offsetHeight/2  
bird.style.top =  jump + "px"


document.onclick=function(){
    jump -=20;
    bird.style.top =  jump + "px"
}
let move = 0 ;  //背景图定位的距离
setInterval(
    ()=>{
        move+= 2 ;
        box.style.background=`url(./images/bg.jpg)`
        box.style.backgroundPositionX = move+ "px ";
    },35
)