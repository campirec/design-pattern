
abstract class NavigationMap {
  abstract show: () => void;
}

class GoogleMap {
  show() {
    console.log('开始渲染谷歌地图');
  }
}

class BaiduMap {
  show() {
    console.log('开始渲染百度地图');
  }
}

class RenderMap {
  render(map: NavigationMap) {
    map.show();
  }
}

const renderMap = new RenderMap();
renderMap.render(new BaiduMap())
renderMap.render(new GoogleMap())
