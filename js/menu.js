window.onscroll = function () {
    var menu = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-btn");
    menu.style.left = "-270px";
    document.body.style.paddingLeft = "0px";
    menuBtn.style.left = "12px";
    // var header = document.querySelector("header");
    // var page = document.getElementById("page");
    // var bodys = document.getElementById("bodys");
    // var bodyA = bodys.getElementsByTagName("a");
    // bodys.style.paddingLeft = "0px";
    // bodyA.style.marginLeft = "0px";
    // header.style.marginLeft = "0px";
    // page.style.paddingLeft = "0px";


    // 计算离顶部还有多少距离
    var len = document.documentElement.scrollTop || document.body.scrollTop;
    var upTop = document.getElementById("up-top");

    if (len >= 300) {
        upTop.style.bottom = 30 + "px";
    } else {
        upTop.style.bottom = -60 + "px";
    }
}


// 回到顶部的方法
function toTop() {
    var toTop = document.getElementById("up-top");
    var timer = null;
    toTop.onclick = function () {
        timer = setInterval(function () {
            var toTopLen = document.documentElement.scrollTop || document.body.scrollTop;
            toTopLen -= 20;
            if (toTopLen > 0) {
                window.scrollTo(0, toTopLen);
            } else {
                window.scrollTo(0, 0);
                clearInterval(timer);
            }
        }, 1);
    }
}

function menu() {
    var menu = document.getElementById("menu");
    var menuBtn = document.getElementById("menu-btn");
    // var header = document.querySelector("header");
    // var bodys = document.getElementById("bodys");
    // var page = document.getElementById("page");
    // var bodyA = bodys.getElementsByTagName("a");
    menuBtn.onclick = function () {
        document.body.style.paddingLeft = "265px";
        document.body.style.transition = "400ms";
        document.body.style.transitionTimingFunction = "ease-in";
        menu.style.left = "0";
        menu.style.transition = "400ms";
        menu.style.transitionTimingFunction = "ease-in";
        menuBtn.style.left = "250px";
        menuBtn.style.transition = "400ms";
        menuBtn.style.transitionTimingFunction = "ease-in";
        // header.style.marginLeft = "265px";
        // bodys.style.paddingLeft = "265px";
        // page.style.paddingLeft = "265px";
        // // bodyA.style.marginLeft = "265px";
    }

}


function showNavDiv2() {
    var navUlA = document.getElementById("menu-ul-a2");
    var navUlDiv = document.getElementById("menu-div2");
    var menuBottom = document.getElementById("menu-bottom");
    var navDivColor1 = navUlDiv.querySelector(".nav-div2-color1");
    var navDivColor2 = navUlDiv.querySelector(".nav-div2-color2");
    var navDivColor3 = navUlDiv.querySelector(".nav-div2-color3");
    var navDivColor4 = navUlDiv.querySelector(".nav-div2-color4");
    var indexWhite = document.getElementById("index-white");
    if (localStorage.getItem("href")) {
        indexWhite.setAttribute("href", localStorage.getItem("href"));
    }
    navUlA.onclick = function () {
        if (menuBottom.style.bottom == "165px") {
            navUlDiv.style.bottom = "-165px";
            menuBottom.style.bottom = "0px";
            navUlDiv.style.transition = "500ms";
            menuBottom.style.transition = "500ms";
        } else {
            menuBottom.style.bottom = "165px";
            navUlDiv.style.bottom = "0px";
            navUlDiv.style.transition = "500ms";
            menuBottom.style.transition = "500ms";
        }
        navDivColor1.onclick = function () {
            localStorage.setItem("href", "")
            indexWhite.setAttribute("href", "");
        }
        navDivColor2.onclick = function () {
            localStorage.setItem("href", "css/index-white.css")
            indexWhite.setAttribute("href", "css/index-white.css");
        }
        navDivColor3.onclick = function () {
            localStorage.setItem("href", "css/index-cream.css")
            indexWhite.setAttribute("href", "css/index-cream.css");
        }
        navDivColor4.onclick = function () {
            localStorage.setItem("href", "")
            indexWhite.setAttribute("href", "");
        }

    }
}
showNavDiv2();
menu();
toTop();