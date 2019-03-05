// 【准备工作：获取元素】
var ul = document.querySelector('#list');
var btnLeft = document.querySelector('#btnLeft');
var btnRight = document.querySelector('#btnRight');
var banner = document.querySelector('#banner');
var control = document.querySelector('.control');
var links = control.children;
var index = 0;

// 【功能1：点击右侧按钮实现轮播】
btnRight.onclick = function () {
  if (index == 0) {
    ul.style.left = '0px';
  }
  links[index].className = '';
  index++;
  var v = index * -790;
  move(ul, v, 60);
  if (index > 6) {
    index = 0;
  }
  links[index].className = 'active';
};

// 【功能2：点击左侧按钮实现轮播】
btnLeft.onclick = function () {
  links[index].className = '';
  index--;
  if (index < 0) {
    index = 6;
    ul.style.left = '-5530px';
  }
  var v = index * -790;
  move(ul, v, 60);
  links[index].className = 'active';
};

// 【功能3：点击小点点按钮实现轮播】
for (var i = 0; i < links.length; i++) {
  links[i].setAttribute('num', i);
}

control.onclick = function (e) {
  var t = e.target;
  if (t.nodeName == 'A') {
    links[index].className = '';
    index = t.getAttribute('num');
    var v = index * -790;
    move(ul, v, 60);
    links[index].className = 'active';

  }
};
 
// 【功能4：自动轮播】
var flag2 = setInterval(function () { 
  btnRight.onclick();
}, 4000);


// 【功能5：停止自动轮播】
banner.onmouseenter = function () { 
  clearInterval(flag2);
}; 

// 【功能6：启动自动轮播】
banner.onmouseleave= function () { 
  flag2 = setInterval(function () { 
    btnRight.onclick();
  }, 4000);
}; 