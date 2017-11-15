// TODO 为了扩展，需要传入的参数有 点击返回顶部的回调函数
// 1，监听鼠标滚轮事件
// 2，滚轮滚动的时候根据位置显示和隐藏返回顶部的按钮
// 3, 添加点击返回顶部的事件

var bindScrollMouse = function(container, callback) {
    var top = document.querySelector('#toTop')
    var c = document.querySelector(container)
    c.addEventListener('scroll', function(e){
        if(c.scrollTop === 0) {
            top.classList.add('show')
        }else {
            top.classList.remove('show')
            top.style.top = c.scrollTop + c.offsetHeight - 120 + "px";
        }
    })
}

 var main = function() {
     bindScrollMouse('.main')
 }
 main()
