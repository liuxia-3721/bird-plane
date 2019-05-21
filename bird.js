let bird = document.querySelector("#bird") ; //小鸟
let box = document.getElementById("bird-box");//笼子
// 小鸟的部分
bird.style.left = box.offsetWidth/2 - bird.offsetWidth/2 + "px"
let jump = box.offsetHeight/2 - bird.offsetHeight/2  
bird.style.top =  jump + "px"


document.onclick=function(){
    jump -=25;
    bird.style.top =  jump + "px"
}
setInterval(
    ()=>{
        if(bird.offsetTop<150){
            jump += 3;
        }else{
            jump += 1;
        }
        bird.style.top =  jump + "px"
    },30
)




function ele(){
    let upper = document.createElement("div") ;
    upper.style.cssText = `background:red;width:50px;height:${Math.round(Math.random()*110+90)}px;
                            position:absolute;top:0;right:0`
    let lower = document.createElement("div") ;
    lower.style.cssText = `background:#33f;width:50px;height:${Math.round(Math.random()*100+100)}px;
                            position:absolute;bottom:0;right:0`
    box.appendChild(upper) ;
    box.appendChild(lower) ;

    let timer =  setInterval(
        ()=>{
            upper.style.left = upper.offsetLeft-2  + "px"
            lower.style.left = upper.offsetLeft-2  + "px"
            if((upper.offsetLeft) <= -upper.offsetWidth ){
                upper.remove()
                lower.remove()
                clearInterval(timer)
            }
            if( bird.offsetTop < upper.offsetHeight &&( bird.offsetLeft + bird.offsetWidth > upper.offsetLeft && 
                bird.offsetLeft < upper.offsetLeft + upper.offsetWidth  ) ){
                window.history.go(0)
            }
            if( bird.offsetTop + bird.offsetHeight > lower.offsetTop &&( bird.offsetLeft + bird.offsetWidth > lower.offsetLeft && 
                bird.offsetLeft < lower.offsetLeft + lower.offsetWidth  )) {
                    window.history.go(0)
            }
        },30
    )
}
setInterval(()=>{
    ele()
    // console.log((Math.random()*4+1 )*1000)
},(Math.random()*3+1)*1000)
let move = 0 ;  //背景图定位的距离
setInterval(
    ()=>{
        move -= 2 ;
        box.style.background=`url(./images/bg.jpg)`
        box.style.backgroundPositionX = move+ "px ";

        if( bird.offsetTop<=0 || bird.offsetTop>=box.offsetHeight-bird.offsetHeight){
            window.history.go(0)
        }
    },35
)