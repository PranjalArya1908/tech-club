function circle(){
    window.addEventListener('mousemove',function(dets){
        document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
circle();