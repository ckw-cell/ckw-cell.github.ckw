function database(fn, url) {
    var xml = new XMLHttpRequest();
    xml.open("get", url, true);
    xml.send();
    xml.onreadystatechange = function () {
        if (this.status === 200) {
            if (this.readyState === 4) {
                fn(this.responseText);
            }
        }
    }
}

var backColor = [{
        "value": "url(./img/backimg1.png)"
    },
    {
        "value": "url(./img/backimg2.png)"
    },
    {
        "value": "url(./img/backimg3.png)"
    },
    {
        "value": "url(./img/backimg4.png)"
    },
    {
        "value": "url(./img/backimg5.png)"
    },
    {
        "value": "url(./img/backimg6.png)"
    },
    {
        "value": "url(./img/backimg7.png)"
    },
    {
        "value": "url(./img/backimg8.png)"
    },
    {
        "value": "url(./img/backimg9.png)"
    },
    {
        "value": "url(./img/backimg10.png)"
    }
]


database(function (text) {
    var archives = JSON.parse(text);

    // 上一页下一页功能
    function initPage() {
        var oBtn1 = document.getElementById("page-btn1");
        var oBtn2 = document.getElementById("page-btn2");
        var num = 0;
        if (num > 0) {
            oBtn1.style.visibility = "visible";
        } else {
            oBtn1.style.visibility = "hidden";
        }
        oBtn1.onclick = function () {
            if (num == 1) {
                oBtn1.style.visibility = "hidden";
            }
            if (num <= parseInt(archives.length / 10) + 1) {
                oBtn2.style.visibility = "visible";
            }
            num--;
            let item = archives.slice(num * 10, (+num + 1) * 10);
            initArchs(item);
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

        oBtn2.onclick = function () {
            if (num == 0) {
                oBtn1.style.visibility = "visible";
            }
            if (num == parseInt(archives.length / 10) - 1) {
                oBtn2.style.visibility = "hidden";
            }
            num++;
            let item = archives.slice(num * 10, (+num + 1) * 10);
            initArchs(item);
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

    var header = document.querySelector("header");
    var headerH1 = document.createElement("h1");
    header.appendChild(headerH1);


    // 分类导航
    function sortNav(elBtn) {
        var itemArrs = [];
        var navSort1 = document.getElementById(elBtn);
        var headerImg = document.getElementById("header-img");
        var sortValue = navSort1.getElementsByTagName("p")[0];
        navSort1.onclick = function () {
            headerImg.style.display = "none";
            headerH1.innerHTML = sortValue.innerText;
            var itemArr = archives.filter(function (item) {
                return item.info.match(sortValue.innerText);
            });
            itemArrs = itemArrs.concat(itemArr);
            sortInitArchs(itemArrs);

            function initPage() {
                var oBtn1 = document.getElementById("page-btn1");
                var oBtn2 = document.getElementById("page-btn2");
                var num = 0;
                if (num > 0) {
                    oBtn1.style.visibility = "visible";
                } else {
                    oBtn1.style.visibility = "hidden";
                }
                oBtn1.onclick = function () {
                    if (num == 1) {
                        oBtn1.style.visibility = "hidden";
                    }
                    if (num <= parseInt(itemArrs.length / 10) + 1) {
                        oBtn2.style.visibility = "visible";
                    }
                    num--;
                    let item = itemArrs.slice(num * 10, (+num + 1) * 10);
                    sortInitArchs(item);
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

                oBtn2.onclick = function () {
                    if (num == 0) {
                        oBtn1.style.visibility = "visible";
                    }
                    if (num == parseInt(itemArrs.length / 10) - 1) {
                        oBtn2.style.visibility = "hidden";
                    }
                    num++;
                    let item = itemArrs.slice(num * 10, (+num + 1) * 10);
                    console.log(itemArrs);
                    sortInitArchs(item);
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
            initPage();
        }


        // 分类导航显示文章
        function sortInitArchs(arr) {
            if (arr.length > 10) {
                arr = itemArrs.slice();
                arr.length = 10;
            }
            var oBodys = document.getElementById("bodys");
            oBodys.innerHTML = '';
            for (var index = 0; index < arr.length; index++) {
                var item = arr[index];
                var bacColor = backColor[Math.floor(Math.random() * backColor.length)];
                var oA = document.createElement("a");
                var oP1 = document.createElement("p");
                var oP2 = document.createElement("p");
                oA.style.background = bacColor.value;
                oA.style.backgroundSize = "100% 248px";
                oP1.innerHTML = item.title;
                oP2.innerHTML = item.time + " · " + item.info;
                oA.appendChild(oP1);
                oA.appendChild(oP2);
                oBodys.appendChild(oA);
            }
        }

    }


    // 显示文章
    function initArchs(arr) {
        if (typeof arr === "undefined") {
            arr = archives.slice();
        }
        arr.length = 10;
        var oBodys = document.getElementById("bodys");
        oBodys.innerHTML = '';
        for (var index = 0; index < arr.length; index++) {
            var item = arr[index];
            var bacColor = backColor[Math.floor(Math.random() * backColor.length)];
            var oA = document.createElement("a");
            var oP1 = document.createElement("p");
            var oP2 = document.createElement("p");
            oA.style.background = bacColor.value;
            oA.style.backgroundSize = "100% 248px";
            oP1.innerHTML = item.title;
            oP2.innerHTML = item.time + " · " + item.info;
            oA.appendChild(oP1);
            oA.appendChild(oP2);
            oBodys.appendChild(oA);
        }
    }

    sortNav("nav-sort1");
    sortNav("nav-sort2");
    sortNav("nav-sort3");
    sortNav("nav-sort4");
    sortNav("nav-sort5");
    sortNav("menu-sort1");
    sortNav("menu-sort2");
    sortNav("menu-sort3");
    sortNav("menu-sort4");
    sortNav("menu-sort5");
    initArchs();
    initPage();
}, "./database/archives.json");


// 回车搜索功能
function EnterPress(e, archives) {
    var e = e || window.event;
    var objKeyWord = document.getElementById("nav-input");
    var objKeyWord1 = document.getElementById("menu-input");
    var searchBtn = document.getElementById("search-btn");

    function searchs() {
        if (objKeyWord.value.length) {
            var itemArr = archives.filter(function (item) {
                return item.title.match(objKeyWord.value);
            });
            initArchs(itemArr);
        } else if (objKeyWord1.value.length) {
            var itemArr = archives.filter(function (item) {
                return item.title.match(objKeyWord1.value);
            });
            initArchs(itemArr);
        } else {
            alert("内容不能为空！");
        }
    }
    searchBtn.onclick = function () {
        searchs();
    }
    if (e.keyCode == 13) {
        searchs();
    }
}