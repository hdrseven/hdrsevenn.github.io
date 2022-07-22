setInterval(function(){
    // 创建rain属性
    var rain = document.createElement("div");

    // 初始化rain属性
    rain.style.position = "fixed";
    rain.style.height = "150px";
    rain.style.width = "2px";
    rain.style.background = "url(../imgs/02.jpg)";
    rain.style.filter = "blur(1px)";
    rain.style.top = "0px";
    // 随机化位置
    rain.style.left = Math.random()*1920 + "px";
    // 随机化透明度
    rain.style.opacity = parseInt(Math.random()*10)/10 + "";

    // 向body里添加rain
    document.body.appendChild(rain);

    // 使用定时器让雨滴每隔10毫秒落下一次
    var timer = setInterval(function() {
        var height = parseInt(rain.style.top);
        var k = 1;
        k++;

        // 模拟重力加速
        rain.style.top = height + 5*Math.pow(k,2) + "px";

        // 当雨滴达到底部后消失并清除子节点rain
        if(rain.style.top>="900px"){
            clearInterval(timer);
            rain.parentNode.removeChild(rain);
        }

    }, 10);
}, 10);








