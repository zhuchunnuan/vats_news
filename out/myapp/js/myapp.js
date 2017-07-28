(function () {
    var window = require("Window");
    var document = require("Document");
    var time = require("Time");
    var app = require("App");
    var textBox;
    var numText;
    var num = 10;
    window.on("loaded", function (e) {
        var textclose = document.getElement("textclose");
        //文本区域
        textBox = document.getElement("textBox");
        //倒计时文本区域
        numText = document.getElement("numText");


        //初始的时候先隐藏
        textBox.setStyle("visibility", "hidden");
        textclose.on("click", function (e) {
            app.exitNoAsk();
        });
    });

    window.on("animator", function () {
        //启动动画
        startTextAnimation();
    });
    //文本区域动画
    function startTextAnimation() {
        //设置文本可见
        textBox.setStyle("visibility", "visible");

        var jsonData = {};
        jsonData.fillAfter = 1;
        var animationSet = new Array();
        //缩放动画
        var scaleAni = {};
        scaleAni.type = "scale";
        scaleAni.duration = 1500;
        scaleAni.curve = "linear";
        scaleAni.scaleFromX = 0.1;
        scaleAni.scaleToX = 1;
        scaleAni.scaleFromY = 0.1;
        scaleAni.scaleToY = 1;
        animationSet.push(scaleAni);
        //旋转动画
        var rotateAni = {};
        rotateAni.type = "rotate";
        rotateAni.duration = 1500;
        rotateAni.curve = "linear";
        rotateAni.fromDegree = 0;
        rotateAni.toDegree = 360;
        animationSet.push(rotateAni);
        jsonData.animationSet = animationSet;
        //启动动画
        textBox.startAnimation(jsonData, function () {
            numText.setText("倒计时：" + num);
            time.setInterval(startTextNum, 1000);
            document.refresh();

        });
    }

    function startTextNum() {
        num--;
        if (num == 0) {
            app.exitNoAsk();
        }
        else {
            numText.setText("倒计时：" + num);
        }
    }
})();