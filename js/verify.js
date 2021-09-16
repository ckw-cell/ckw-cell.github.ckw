const verify = {
    isEmpty: function (str) {
        var str_trim = str.trim();
        return str_trim.length;
    },
    isEmail: function (str) {
        var str_trim = str.trim();
        var patten = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return patten.test(str_trim);
    },
    isChinese: function (str) {
        var str_trim = str.trim();
        var patten = /^[\u4e00-\u9fa5].*$/;
        return patten.test(str_trim);
    },
    isNumber: function (str) {
        var str_trim = str.trim();
        var patten = /^[0-9]*$/;
        return patten.test(str_trim);
    },
}

function verifyInput(elId, spanId, topId, isVerify, innerText) {
    var el = document.getElementById(elId);
    var span = document.getElementById(spanId);
    var topId = document.getElementById(topId);
    var isBool = null;
    el.onblur = function () {
        isBool = verify[isVerify](this.value);
        if (!isBool) {
            span.innerText = innerText;
            span.style.display = "block";
            topId.style.display = "block";
            verifyBtn(el, isVerify);
            return false;
        } else {
            span.innerText = "";
            span.style.display = "none";
            topId.style.display = "none";
            verifyBtn(el, isVerify);
        }
    }
}

function verifyBtn(elem, isVerify) {
    isBool != verify[isVerify](elem.value);
    if (!isBool) {
        for (let index = 0; index < elem.parentNode.parentNode.children.length; index++) {
            const element = elem.parentNode.parentNode.children[index];
            if (element.children[0].nodeName === 'BUTTON') {
                element.children[0].setAttribute('disabled', 'disabled')
            }
        }
    } else {
        for (let index = 0; index < elem.parentNode.parentNode.children.length; index++) {
            const element = elem.parentNode.parentNode.children[index];
            if (element.children[0].nodeName === 'BUTTON') {
                element.children[0].removeAttribute('disabled')
            }
        }
    }
}

verifyInput('textarea', 'comment-span1', 'comment-top1', 'isEmpty', '请填写此字段');
verifyInput('username', 'comment-span2', 'comment-top2', 'isEmpty', '请填写此字段');
verifyInput('email', 'comment-span3', 'comment-top3', 'isEmail', '邮箱格式不合法');