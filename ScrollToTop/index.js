// TODO 为了扩展，需要传入的参数有 点击返回顶部的回调函数
// 1，监听鼠标滚轮事件
// 2，滚轮滚动的时候根据位置显示和隐藏返回顶部的按钮
// 3, 添加点击返回顶部的事件
var e = function(className) {
    return document.querySelector(className)
}
var log = function() {
    console.log.apply(console, arguments)
}
var bindClickToTop = function(className, container) {
    var t = e(className)
    t.addEventListener('click', function(event){
        // 返回顶部
        e(container).scrollTop = 0
    })
}

var bindScrollMouse = function(container) {
    var top = document.querySelector('#toTop')
    var c = document.querySelector(container)
    // scrollTop 是滑动条距离顶部的位置
    // offsetHeight 是容器固定的高度
    c.addEventListener('scroll', function(e){
        if(c.scrollTop === 0) {
            top.classList.add('show')
        }else {
            top.classList.remove('show')
            top.style.top = c.scrollTop + c.offsetHeight - 120 + "px";
        }
    })
}

 var main = function(topClass, container) {
     bindScrollMouse(container)
     bindClickToTop(topClass, container)
 }
 main('#toTop', '.main')
