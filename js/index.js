// 分类点击显示事件
function showNavDiv() {
    var navUlA = document.getElementById("nav-ul-a1");
    var navUlDiv = document.getElementById("nav-ul-div");
    var menuUlA = document.getElementById("menu-ul-a1");
    var menuUlDiv = document.getElementById("menu-ul-div");
    navUlA.onclick = function (event) {
        navUlDiv.style.display = 'block';
        stopBubble(event);
        document.onclick = function () {
            navUlDiv.style.display = 'none';
            document.onclick = null;
        }
    }
    menuUlA.onclick = function (event) {
        if (menuUlDiv.style.display == 'flex') {
            menuUlDiv.style.display = 'none';
        } else {
            menuUlDiv.style.display = 'flex';
        }
    }
}

// 搜索点击显示事件
function showNavDiv2() {
    var navSpan = document.getElementById("nav-span1");
    var navDiv = document.getElementById("nav-div1");
    var navDivSpan = navDiv.querySelector(".nav-div1-span1");
    navSpan.onclick = function () {
        navSpan.style.display = 'none';
        navDiv.style.display = 'block';
    }
    navDivSpan.onclick = function () {
        navSpan.style.display = 'block';
        navDiv.style.display = 'none';
    }
}

// A点击显示事件
function showNavDiv1() {
    var navUlA = document.getElementById("nav-ul-a2");
    var navUlDiv = document.getElementById("nav-div2");
    var navDivColor1 = document.querySelector(".nav-div2-color1");
    var navDivColor2 = document.querySelector(".nav-div2-color2");
    var navDivColor3 = document.querySelector(".nav-div2-color3");
    var navDivColor4 = document.querySelector(".nav-div2-color4");
    var indexWhite = document.getElementById("index-white");
    if (localStorage.getItem("href")) {
        indexWhite.setAttribute("href", localStorage.getItem("href"));
    }
    navUlA.onclick = function (event) {
        navUlDiv.style.display = 'block';
        stopBubble(event);
        navDivColor1.onclick = function (event) {
            localStorage.setItem("href", "")
            indexWhite.setAttribute("href", "");
            stopBubble(event);
            document.onclick = function () {
                navUlDiv.style.display = 'none';
                document.onclick = null;
            }
        }
        navDivColor2.onclick = function (event) {
            localStorage.setItem("href", "css/index-white.css")
            indexWhite.setAttribute("href", "css/index-white.css");
            stopBubble(event);
            document.onclick = function () {
                navUlDiv.style.display = 'none';
                document.onclick = null;
            }
        }
        navDivColor3.onclick = function (event) {
            localStorage.setItem("href", "css/index-cream.css")
            indexWhite.setAttribute("href", "css/index-cream.css");
            stopBubble(event);
            document.onclick = function () {
                navUlDiv.style.display = 'none';
                document.onclick = null;
            }
        }
        navDivColor4.onclick = function (event) {
            localStorage.setItem("href", "")
            indexWhite.setAttribute("href", "");
            stopBubble(event);
            document.onclick = function () {
                navUlDiv.style.display = 'none';
                document.onclick = null;
            }
        }

    }
}


// 字体放大缩小
function smallBig(small,big,num) {
    var navSmall = document.getElementById(small);
    var navBig = document.getElementById(big);
    var navNum = document.getElementById(num);
    var aasd = document.querySelectorAll("a");
    var num = 100;
    navNum.innerHTML = num + "%";
    navSmall.onclick = function () {
        if (num == 80) {
            num = 80;
        } else {
            num -= 5;
        }
        navNum.innerHTML = num + "%";
        for (let index = 0; index < aasd.length; index++) {
            var item = aasd[index];
            item.style.fontSize = num + "%";
        }
    }
    navBig.onclick = function () {
        if (num == 120) {
            num = 120;
        } else {
            num += 5;
        }
        navNum.innerHTML = num + "%";
        for (let index = 0; index < aasd.length; index++) {
            var item = aasd[index];
            item.style.fontSize = num + "%";
        }
    }
}


// 点击其他地方隐藏
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}

smallBig("nav-div2-small","nav-div2-big","nav-div2-num");
smallBig("menu-div2-small","menu-div2-big","menu-div2-num");
showNavDiv();
showNavDiv1();
showNavDiv2();