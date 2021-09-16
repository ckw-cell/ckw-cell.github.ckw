var comment = [{
        "id": 1,
        "src": "./img/head1.webp",
        "author": "蚩梦",
        "date": "1个月前",
        "body": "<p>站点名称：蚩梦资源网</p><p>站点链接：https://www.mscar.cc</p><p>站点描述：蚩梦资源网努力每天更新精品免费资源内容，优质资源、活动线</p><p>报、绿色软件，专业的网络技术的资源分享平台，来蚩梦让我们的生活更加精彩</p><p>站点图标：https://i.loli.net/2021/07/05/bJeRWpm75V9kqLu.png</p>"
    },
    {
        "id": 2,
        "src": "./img/head2.webp",
        "author": "初见",
        "date": "1个月前",
        "body": "<p>大佬求互换～</p><p>本站标题・初 x 见</p><p>本站链接：chuxjian.asia</p><p>本站头像：https://pic.imgdb.cn/item/5f4752b1160a154a674f4644.png</p><p>本站描述：一个记录个人生活学习的蒟蒻的博客</p>"
    },
    {
        "id": 3,
        "src": "./img/head3.webp",
        "author": "琛苏设计",
        "date": "3个月前",
        "body": "<p>换了个域名，有空更新一下。</p>"
    },
    {
        "id": 4,
        "src": "./img/head4.webp",
        "author": "尤子",
        "date": "6个月前",
        "body": "<p>友联申请啦！，是个生活小栈！</p><p>名称：尤且’s 小栈</p><p>网址 : https://blog.liy8.cn</p><p>头像 : https://q1.qlogo.cn/g?b=qq&nk=47453459&s=640</p><p>简介：努力，上进，不负野心。</p>"
    },
    {
        "id": 5,
        "src": "./img/head5.webp",
        "author": "泽泽",
        "date": "8个月前",
        "body": "<p>qqdie.com 麻烦换成 zezeshe.com（泽泽社），我的域名换了，感谢</p>"
    },
    {
        "id": 6,
        "src": "./img/head6.webp",
        "author": "Tespera",
        "date": "10个月前",
        "body": "<p>站点名称：行走的代码</p><p>站点链接：https://www.tespera.com/</p><p>站点描述：写如诗的代码，分享温而不沸的生活。</p><p>站点图标：https://www.tespera.com/static/admin/img/img-Author.jpg</p><p>&nbsp;</p><p>已添加贵站～</p>"
    },
    {
        "id": 7,
        "src": "./img/head7.webp",
        "author": "Kiwiape",
        "date": "10个月前",
        "body": "<p>啊这，巧了，没想到大佬也是师范生 </p>"
    },
    {
        "id": 8,
        "src": "./img/head8.webp",
        "author": "Alili 丶前端大爆炸",
        "date": "10个月前",
        "body": "<p>名称：Alili 丶前端大爆炸</p><p>&nbsp;</p><p>简介：一个前端技术博客</p><p>&nbsp;</p><p>网址：https://alili.tech</p><p>&nbsp;</p><p>头像: https://alili.tech/images/logo.png</p>"
    },
    {
        "id": 9,
        "src": "./img/head9.webp",
        "author": "brewin",
        "date": "11个月前",
        "body": "<p>博客名称：之石先生的小屋</p><p>博客地址: http://www.brewin073.top</p><p>&nbsp;</p><p>本站 3D 博客墙：http://www.brewin073.top/index/module/blogwall</p><p>欢迎站主前来挑选元素位置</p><p>http://www.brewin073.top/index/module/blog/article/detail/118</p>"
    },
    {
        "id": 10,
        "src": "./img/head10.webp",
        "author": "yir",
        "date": "2020 年 07 月 28 日",
        "body": "<p>瞧我发现了什么</p>"
    }
]

function commentList() {
    var commentList = document.getElementById("comment-list");
    var commentNum = document.getElementById("comment-num");
    commentNum.innerHTML = " <span>已有" + comment.length + "条评论</span>";
    for (var index = 0; index < comment.length; index++) {
        const item = comment[index];
        var oUl = document.createElement("ul");
        var oSpan1 = document.createElement("span");
        oSpan1.innerHTML = "<img src=" + item.src + ">";
        var oLi = document.createElement("li");
        var oDiv1 = document.createElement("div");
        oDiv1.innerHTML = "<span>" + item.author + "</span>";
        var oDiv2 = document.createElement("div");
        oDiv2.innerHTML = "<span>" + item.date + "</span><span>回复</span>";
        var oDiv3 = document.createElement("div");
        oDiv3.innerHTML = item.body;
        oLi.appendChild(oDiv1);
        oLi.appendChild(oDiv2);
        oLi.appendChild(oDiv3);
        oUl.appendChild(oSpan1);
        oUl.appendChild(oLi);
        commentList.appendChild(oUl);
    }
}

commentList();