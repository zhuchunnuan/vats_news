(function () {
    var window = require("Window");
    var document = require("Document");
    var time = require("Time");
    var app = require("App");
    var device = require("Device");
    var ui = require("UI");
    var console = require("Console");
    var $ = require("JQLite");


    var menubarjson = {};
    var ary = new Array();
    var itemJson = {};
    itemJson.icon = "image/new.png";
    itemJson.iconCurrent = "image/new_select.png";
    itemJson.text = "新闻";
    ary.push(itemJson);
    itemJson = {};
    itemJson.icon = "image/live.png";
    itemJson.iconCurrent = "image/live_select.png";
    itemJson.text = "直播";
    ary.push(itemJson);
    itemJson = {};
    itemJson.icon = "image/talk.png";
    itemJson.iconCurrent = "image/talk_select.png";
    itemJson.text = "话题";
    ary.push(itemJson);
    itemJson = {};
    itemJson.icon = "image/me.png";
    itemJson.iconCurrent = "image/me_select.png";
    itemJson.text = "我";
    ary.push(itemJson);
    menubarjson.datas = ary;

    var dodata = {
        selectedItem: function (e, index) {
            console.log("3333");
            //为了提升显示效率，模块动态加载
            $.ui.toast(index, 0);
            if (index == 0) {
                //显示新闻
                $("#new").css("visibility", "visible");
                if ($("#zhibo")[0] != null) {
                    $("#zhibo").css("visibility", "hidden");
                }
                if ($("#huati")[0] != null) {
                    $("#huati").css("visibility", "hidden");
                }
                if ($("#wo")[0] != null) {
                    $("#wo").css("visibility", "hidden");
                }
                $("#new")[0].initList();


            }
            else if (index === 1) {
                if ($("#zhibo")[0] == null) {
                    require("wangyi-live");
                    //直播模块还没有加载的情况下，先动态加载
                    var xmlstr = "<wangyi-live class='live' id='zhibo' style='background-color:red'></wangyi-live>";
                    var zhibodom = document.createElementByXml(xmlstr);
                    $("#rootBox")[0].appendChild(zhibodom);

                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#huati")[0] != null) {
                        $("#huati").css("visibility", "hidden");
                    }
                    if ($("#wo")[0] != null) {
                        $("#wo").css("visibility", "hidden");
                    }

                    $.ui.refreshDom('#rootBox');
                    $("#zhibo")[0].initList();

                }
                else {

                    $("#zhibo").css("visibility", "visible");
                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#huati")[0] != null) {
                        $("#huati").css("visibility", "hidden");
                    }
                    if ($("#wo")[0] != null) {
                        $("#wo").css("visibility", "hidden");
                    }
                }

            }
            else if (index == 2) {
                if ($("#huati")[0] == null) {
                    //直播模块还没有加载的情况下，先动态加载
                    var xmlstr = "<box class='talk' id='huati' style='background-color:red'></box>";
                    var huatidom = document.createElementByXml(xmlstr);
                    $("#rootBox")[0].appendChild(huatidom);
                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#zhibo")[0] != null) {
                        $("#zhibo").css("visibility", "hidden");
                    }
                    if ($("#wo")[0] != null) {
                        $("#wo").css("visibility", "hidden");
                    }
                    $.ui.refreshDom('#rootBox');


                }
                else {
                    $("#huati").css("visibility", "visible");
                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#zhibo")[0] != null) {
                        $("#zhibo").css("visibility", "hidden");
                    }
                    if ($("#wo")[0] != null) {
                        $("#wo").css("visibility", "hidden");
                    }
                }


            }
            else if (index == 3) {
                if ($("#wo")[0] == null) {
                    //直播模块还没有加载的情况下，先动态加载
                    var xmlstr = "<box class='me' id='wo' style='background-color:blue'></box>";
                    var wodom = document.createElementByXml(xmlstr);
                    $("#rootBox")[0].appendChild(wodom);
                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#zhibo")[0] != null) {
                        $("#zhibo").css("visibility", "hidden");
                    }
                    if ($("#huati")[0] != null) {
                        $("#huati").css("visibility", "hidden");
                    }
                    $.ui.refreshDom('#rootBox');


                }
                else {
                    $("#wo").css("visibility", "visible");
                    if ($("#new")[0] != null) {
                        $("#new").css("visibility", "hidden");
                    }
                    if ($("#zhibo")[0] != null) {
                        $("#zhibo").css("visibility", "hidden");
                    }
                    if ($("#huati")[0] != null) {
                        $("#huati").css("visibility", "hidden");
                    }
                }

            }
        }
    }

    window.on("loaded", function (e) {
        window.setStatusBarMode("light");

        $("#menubar1")[0].loadData(menubarjson);
        $("#rootBox").render(dodata);

    });

    window.on("animator", function () {

        //初始化数据
    });
})();