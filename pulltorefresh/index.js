// 1，监听鼠标滚轮事件
// 2，滚轮滚动的时候根据位置来设置百分比,设置显示的位置
var s = function(className) {
    return document.querySelector(className)
}
var log = function() {
    console.log.apply(console, arguments)
}
var changeTopTextRefresh = function() {
    s('.down-refresh').innerText = '...'
    s('.text').innerText = '刷新'
}
var bindScrollMouse = function(container) {
    s('.container').addEventListener('touchstart', function(e){
        // 需要根据移动的距离来进行不同的操作
        // 记录开始的位置
        window.startY = e.targetTouches[0].clientY
        log('开始',e.targetTouches, e.targetTouches[0].clientY)
    })
    s('.container').addEventListener('touchmove', function(e){
        // 需要根据移动的距离来进行不同的操作, 这个offset要做成全局的,下面的 end 也要实时监测
        offset =  e.targetTouches[0].clientY - window.startY
        s('.container').style.top = offset  + 'px'
        // 这里需要判断移动的距离超出之后，改变文字的状态问题
    })
    s('.container').addEventListener('touchend', function(e){
        // 需要根据移动的距离来进行不同的操作
        var up = s('.header').offsetHeight * 3 / 4
        log('end', offset, up)
        if(offset < up){
            // 需要恢复默认的状态
            s('.container').style.top = '0px'
        }else {
            // 需要进入刷新状态
            // 1. 改变顶部的状态
            changeTopTextRefresh()
            // 2. 设置 container 的高度
            // 3. 执行异步请求，等待数据
            // 4. 请求拿到之后，写入到页面
            // 5. 恢复初始的状态
        }
        // 根据 offset 的距离来进行对应的操作
    })
}

 var main = function() {
     // TODO 需要根据传入的对象数据，动态的插入到页面中，我们先在页面中创建好
     bindScrollMouse()
 }
 main()
