var demoapp = angular.module('demoapp', []);



demoapp.controller('democtrl',function($scope){

    var map = new AMap.Map('mapContainer', {
        //resizeEnable: true,
        //rotateEnable: true,
        //dragEnable: true,
        //zoomEnable: true,
        //设置可缩放的级别
        //zooms: [3,18],
        //传入2D视图，设置中心点和缩放级别
        view: new AMap.View2D({
            center: new AMap.LngLat(116.397428, 39.90923),
            zoom: 12
        })
    });
    map.plugin(["AMap.OverView"],function(){
        view = new AMap.OverView();
        map.addControl(view);
    });
    map.plugin(["AMap.ToolBar"],function(){
        //加载工具条
        var tool = new AMap.ToolBar();
        map.addControl(tool);
    });
    $scope.map=map;
    map = null;

});


