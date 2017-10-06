function sendRequest(url, params, cb, type, errcb, ajaxerr_cb) {
    //var base_url = 'http://admin.baochiapi.com/v1/';
    var header = {
        'X-APP-ID': 20,
        'Authorization': Cookie.get('token') || ''
    };

    if (['member/login', 'member/register', 'agent/apply'].indexOf(url) > -1) {
        var cookieVal = Cookie.get('clientId');
        // console.log(cookieVal+'注册')
        header.clientId = cookieVal;
    } else {
        delete(header.clientId);
    }

    //jQuery.support.cors = true;
    var req = {
        //url: base_url + url,
        url: common.base_url + '/v1/' + url,
        headers: header,
        data: params,
        timeout: 30 * 1000,
        type: type || 'get',
        dataType: 'json', // todo jsonp
        success: function(res) {
            if (res.apistatus == 1) {
                cb(res);
            } else {
                if (res.errorCode === 1000001 || res.errorCode === 1000002 || res.errorCode === 1000003) {
                    // token失效时，退出登录
                    common.toast({ content: '您的帐户登陆已过时，请重新登陆', time: 3 });
                    logOut();
                } else {
                    if ('msg/count'.indexOf(url) > -1) {
                        return;
                    }
                    if (res.errorCode === 2030012) {
                        cb(res);
                        //common.toast({content:"网络较差，请稍后重试"});
                    } else {
                        if (res.errorCode === 2030011) {
                            if (res.errorMsg == "用户名重复") {} else {
                                common.toast({ content: res.errorMsg || '', time: 3 });
                            }
                        } else if (res.errorCode === 2030010) { //取款失败,如有疑问请联系客服!
                            common.toast_drawMoney({ content: res.errorMsg, time: 3 });
                            if (res.errorMsg == "取款失败,如有疑问请联系客服!") {
                                window.location.reload(true);
                            }
                        } else {
                            common.toast({ content: res.errorMsg || '', time: 3 });
                        }
                    }
                }
                // 某些请求需要处理错误返回的时候传参
                errcb && typeof errcb === 'function' && errcb(res);
               // console.log(res.errorMsg || '');
            }
        },
        error: function(err) {
            ajaxerr_cb && typeof ajaxerr_cb === 'function' && ajaxerr_cb(err);
        }
    };
    $.ajax(req);
}

function sendRequest_async(url, params, cb, type, errcb, ajaxerr_cb) {
    //var base_url = 'http://admin.baochiapi.com/v1/';
    var header = {
        'X-APP-ID': 20,
        'Authorization': Cookie.get('token') || ''
    };
    if (['member/login', 'member/register', 'agent/apply'].indexOf(url) > -1) {
        header.clientId = Cookie.get('clientId');
    } else {
        delete(header.clientId);
    }

    //jQuery.support.cors = true;
    var req = {
        //url: base_url + url,
        url: common.base_url + '/v1/' + url,
        headers: header,
        data: params,
        async: false,
        timeout: 30 * 1000,
        type: type || 'get',
        dataType: 'json', // todo jsonp
        success: function(res) {
            if (res.apistatus == 1) {
                cb(res);
            } else {
                if (res.errorCode === 1000002) {
                    // token失效时，退出登录
                    logOut();
                } else {
                    if ('msg/count'.indexOf(url) > -1) {
                        return;
                    }
                    if (res.errorCode === 2030012) {
                        cb(res);
                        //common.toast({content:"网络较差，请稍后重试"});
                    } else {
                        if (res.errorCode === 2030011) {

                        } else if (res.errorCode === 2030010) { //取款失败,如有疑问请联系客服!
                            common.toast_drawMoney({ content: res.errorMsg, time: 3 });
                            if (res.errorMsg == "取款失败,如有疑问请联系客服!") {
                                window.location.reload(true);
                            }
                        } else {
                            common.toast({ content: res.errorMsg || '', time: 3 });
                        }
                    }
                }
                // 某些请求需要处理错误返回的时候传参
                errcb && typeof errcb === 'function' && errcb(res);
              //  console.log(res.errorMsg || '');
            }
        },
        error: function(err, textStatus, errorThrown) {
            if (textStatus == "timeout") {
                common.toast({ content: '请求超时!', time: 3 });
            }
            ajaxerr_cb && typeof ajaxerr_cb === 'function' && ajaxerr_cb(err);
        }
    };
    $.ajax(req);
}

function sendRequest2(url, params, cb, type, errcb, ajaxerr_cb) {
    //var base_url = 'http://admin.baochiapi.com/v1/';
    var header = {
        'X-APP-ID': 20,
        'Authorization': Cookie.get('token') || ''
    };

    var req = {
        url: common.base_url + '/v1/' + url,
        headers: header,
        data: params,
        timeout: 30 * 1000,
        type: type || 'get',
        dataType: 'html', // todo jsonp
        success: function(res) {
            cb(res);
        },
        error: function(err) {
            ajaxerr_cb && typeof ajaxerr_cb === 'function' && ajaxerr_cb(err);
           // console.log(err);
        }
    };

    $.ajax(req);
}

function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

// 打开游戏loading
var loadStr = '<style>.bg-load{animation: spinnerFour 1s linear infinite;border: solid 7px transparent;border-top: solid 7px #4DB6AC;border-radius: 100%;width: 3em;height: 3em;} @keyframes spinnerFour { 0% {transform: rotate(0deg);}100% {transform: rotate(360deg);} };</style><div class=\"bg-load-all\" style="width: 110px;height: 50px;margin: 375px auto 0;background: #fff"><div class="bg-load" ></div><div class="bg-title" style="margin-top:5px">游戏跳转中...</div></div> ';
var openGameSize = 0 ; // 打开窗口次数
var localKeys=['token','clientId','userName','memberInfo'];
var Cookie = {
    get: function(name) {

        var v='';
       var name_client=name;
        name += '=';
        var cookies = (document.cookie || '').split(';'),
            cookie,
            nameLength = name.length,
            i = cookies.length;
        while (i--) {
            cookie = cookies[i].replace(/^\s+/, '');
            if (cookie.slice(0, nameLength) === name) {
                v= decodeURIComponent(cookie.slice(nameLength)).replace(/\s+$/, '');
                if(v){

                    return v;
                }
            }
        }

        if(name_client=='clientId'){
            return localStorage.clientId;
        }
        else if(name_client=='token'){
            return localStorage.token;
        }else if(name_client=='userName'){
            return localStorage.userName;
        } else if(name_client=='memberInfo'){
            return localStorage.memberInfo;
        }
        return '';
    },
    set: function(name, value, day) {

        var oDate = new Date();
        oDate.setDate(oDate.getDate() + day);
        // document.cookie = name + '=' + value + ';expires=' + oDate;
        document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate.toUTCString();
        if(name=='clientId' && value){
            localStorage.clientId=value;
        }
        else if(name=='token' && value){
            localStorage.token=value;
        } else if(name=='userName' && value){
            localStorage.userName=value;
        } else if(name=='memberInfo' && value){
            localStorage.memberInfo=value;
        }




    }
    /*    function(name, value, opt) {
        opt || (opt = {});
        var t = new Date(),
            exp = opt.exp;
        if (typeof exp === 'number') {
            t.setTime(t.getTime() + exp * 3600000); // 60m * 60s * 1000ms
        } else if (exp === 'forever') {
            t.setFullYear(t.getFullYear() + 50); // 专业种植cookie 50年
        } else if (value === null) { // 删除cookie
            value = '';
            t.setTime(t.getTime() - 3600000);
        } else if (exp instanceof Date) { // 传的是一个时间对象
            t = exp;
        } else {
            t = '';
        }
        document.cookie = name + '=' + encodeURIComponent(value) + (t && '; expires=' + t.toUTCString()) +
            '; domain=' + (opt.domain || document.domain) + '; path=' + (opt.path || '/') + (opt.secure ? '; secure' : '');
    }*/

};


// function getParam(paramName) {
//     paramValue = "", isFound = !1;
//     if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
//         arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
//         while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
//     }
//     return paramValue == "" && (paramValue = null), paramValue
// }

function getParam() {
    var url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) { //判断是否有参数
        var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        //alert(strs[1]);          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
        return strs[1];
    }
}

var fvalue = getParam();
if (typeof(fvalue) == "undefined") {
    fvalue = "";
}
var invitationCode = "";
if (fvalue !== "") {
    Cookie.set('f', JSON.stringify(fvalue));
    invitationCode =fvalue;
} else {
    namevalue = Cookie.get('f') && JSON.parse(Cookie.get('f')) || {};
    if (namevalue !== "") {
        invitationCode = namevalue;
    } else {
        invitationCode = "";
    }
}

var FormatNumber = {
    get: function(value) {
        // value = parseFloat(value);
        // value = value ? value : 0;
        // var STEP = 3;
        // var DELIMITER = ',';
        // var str = '' + value;
        // var arr = str.split('');
        // var len = arr.length;
        // for (var i = len - STEP; i > 0; i -= STEP) {
        //     arr.splice(i, 0, DELIMITER);
        // }
        // return arr.join('');

        var rex = /\d{1,3}(?=(\d{3})+$)/g;
        value = (value + '').replace(/^(-?)(\d+)((\.\d+)?)$/, function(s, s1, s2, s3) {
            return s1 + s2.replace(rex, '$&,') + s3;
        });

        return value;
    }
}

function momentFormatTime(val, fmt) {
    var start_date = new Date(val);
    var len = start_date.getTime();
    var offset = start_date.getTimezoneOffset() * 60 * 1000;
    var utcTime = len + offset;
    var start = new Date(start_date.getTime());
    start.setMonth(0);
    start.setDate(1);
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    var middle = new Date(start.getTime());
    middle.setMonth(6);
    // 夏令时
    if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
        var date = new Date(utcTime + 3600000 * -4);
    } else {
        var date = new Date(utcTime + 3600000 * -5);
    }
    date.setDate(date.getDate());
    date.setHours(date.getHours());
    date.setMinutes(date.getMinutes());
    date.setSeconds(date.getSeconds());
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "H+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }

    return fmt;
}

function formatTime(val, fmt) {
    try {
        val.getMonth();
    } catch (e) {
        return '';
    }
    if (!val.getDate()) {
        return '';
    }
    var o = {
        "M+": val.getMonth() + 1,
        "d+": val.getDate(),
        "H+": val.getHours(),
        "m+": val.getMinutes(),
        "s+": val.getSeconds(),
        "q+": Math.floor((val.getMonth() + 3) / 3),
        "S": val.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (val.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    return fmt;
}

function changeTime(val){
    var time = val.replace(/-/g,'/') ;
    return time ;
}

function msgAlert(opt) {
    /**
     * opt.title
     * opt.content
     * opt.okValue
     * opt.ok
     * opt.cancel
     * opt.type
     * opt.time
     */
    var d = dialog({
        title: opt.title || '警告',
        content: opt.content || '',
        fixed: true,
        okValue: opt.okValue || '确定',
        cancelValue: opt.cancelValue || '取消',
        ok: function() {
            $('.mask').hide();
            opt.ok && opt.ok();
        },
        cancel: function() {
            $('.mask').hide();
            opt.cancel && opt.cancel();
        }
    });
    $(".ui-dialog-title").html("<i class='icon-" + (opt.type || "warning") + "'></i>" + (opt.title || '提示信息'));
    $('.mask').show();
    d.show();

    // 定时关闭
    if (opt.time) {
        setTimeout(function() {
            d.close();
        }, opt.time * 1000);
    }
}

function logOut() {
    Cookie.set('userName', '');
    Cookie.set('token', '');
    Cookie.set('memberInfo', '');
    Cookie.set('already_refresh', '');
    Cookie.set('f', '');
    localStorage.userName='';
    localStorage.token='';
    localStorage.memberInfo='';
    localStorage.clientId='';
    location.reload(true);
    location.href = "/";
}

function ifLanded() {
    if(Cookie.get('userName') && Cookie.get('token')){
        return /\S/g.test(Cookie.get('userName')) && /\S/g.test(Cookie.get('token'));
     }
     else{
        return false;
     }
}

var regConfig = {
    placeholders: {
        username: '请输入4-15位英文与数字组合',
        password: '请输入6-20位英文与数字组合',

        confirmPassword: '请再次输入登录密码',

        paymentPassword: '请输入4位数字',
        realname: '请输入您的真实姓名',
        bankCardNo: '请输入您的银行卡号',
        bank: '请输入取款银行名称',
        bankDeposit: '请输入开户行地址',
        telephone: '请输入您的手机号',
        email: '请输入您的邮箱',
        weixin: '请输入您的微信账号',
        qq: '请输入您的QQ账号',
       // confirmPassword: '请再次输入6-20位密码',
        confirm_password: '请再次输入6-20位密码',
        confirm_paymentPassword: '请再次输入支付密码'
    },
    types: {
        username: 'text',
        password: 'password',
        paymentPassword: 'password',
        confirmPassword: 'password',
       // retryPasswd: 'password',
        realname: 'text',
        bankCardNo: 'text',
        bank: 'text',
        bankDeposit: 'text',
        telephone: 'text',
        email: 'text',
        weixin: 'text',
        qq: 'text',

        confirm_password: 'password',
        confirm_paymentPassword: 'password'
    },
    rules: {
        username: {
            isNumWord: true,
            minlength: 4,
            maxlength: 15
        },
        password: {
            isNumWord: true,
            minlength: 6,
            maxlength: 20
        },
        confirmPassword: {
            isNumWord: true,
            required: true,
            minlength: 6,
            maxlength: 20,
            equalTo: "#password"
        },
        paymentPassword: {
            digits: true,
            minlength: 4,
            maxlength: 4
        },
        confirm_paymentPassword: {
            digits: true,
            required: true,
            minlength: 4,
            maxlength: 4,
            equalTo: "#paymentPassword"
        },
        realname: {
            minlength: 2,
            maxlength: 5
        },
        bankCardNo: {
            minlength: 15,
            maxlength: 20,
            digits: true
        },
        bank: {},
        bankDeposit: {},
        telephone: {
            digits: true,
            minlength: 11,
            maxlength: 11
        },
        email: {
            email: true
        },
        weixin: {},
        qq: {
            digits: true
        },
        code: {
            required: true
        },
        agree: "required"
    },
    messages: {
        username: {
            required: '请输入4-15位英文与数字组合',
            minlength: '请至少输入4个字符',
            maxlength: '最多只能输入15个字符'
        },
        password: {
            required: '请输入6-20位英文与数字组合',
            minlength: '请至少输入6个字符',
            maxlength: '最多只能输入20个字符'
        },
        confirmPassword: {
            required: '请再次输入登录密码',
            minlength: '请至少输入6个字符',
            maxlength: '最多只能输入20个字符',
            equalTo: "两次输入密码不一致"
        },
        paymentPassword: {
            required: '请输入4位数字密码',
            minlength: '请输入4位数字密码',
            maxlength: '请输入4位数字密码',
            digits: '支付密码只能是数字'
        },
        confirm_paymentPassword: {
            required: '请再次输入4位数字密码',
            minlength: '请输入4位数字密码',
            maxlength: '请输入4位数字密码',
            digits: '支付密码只能是数字',
            equalTo: "两次支付密码输入不一致"
        },
        realname: {
            required: '请输入您的真实姓名',
            minlength: '请至少输入2个字',
            maxlength: '请最多输入5个字'
        },
        bankCardNo: {
            required: '请输入15-20位银行账号',
            minlength: '请输入15-20位银行账号',
            maxlength: '请输入15-20位银行账号',
            digits: '银行账号只能是数字'
        },
        bank: {
            required: '请输入银行名称'
        },
        bankDeposit: {
            required: '请输入开户行名称'
        },
        telephone: {
            required: '请输入11位手机号',
            digits: '手机号只能为数字',
            minlength: '请输入11位手机号',
            maxlength: '请输入11位手机号'
        },
        email: {
            required: '请输入您的邮箱',
            email: '邮箱格式不对'
        },
        weixin: {
            required: '请输入您的微信号'
        },
        qq: {
            digits: 'QQ号只能为数字',
            required: '请输入您的QQ号'
        },
        code: {
            required: '请输入验证码'
        },
        agree: "请先阅读并同意注册协议"
    },
    extInfo: {
        paymentPassword: '提款认证密码，请务必牢记',
        // password: '密码强度',
        realname: '必须与银行帐户名称相同，否则不能出款！'
    }
};

function $message(opt) {
    /**
     * opt.title    标题
     * opt.content  内容
     * opt.cancel   取消按钮文字
     * opt.hc       是否隐藏cancel按钮
     * opt.ccb      取消按钮点击回调
     * opt.ok       确定按钮文字
     * opt.okcb     确定按钮点击回调
     * opt.time     显示时长，不传一直显示
     * opt.hh       是否隐藏头
     * opt.hf       是否隐藏尾
     * opt.style    自定义弹出框的宽高
       opt.from
     */
    var msg_el = $('.message_content');
    // console.log(msg_el);
    // if(opt.from="draw"){
    //     alert("whiec")
    //     msg_el.html("");
    // }
    // 初始化事件
    msg_el
        .find('.modal-dialog')
        .removeAttr("style")
        .css(opt.style || {
            'top': '150px',
            'max-width': '400px'
        })
        .end()
        .find('.modal-header')
        .css({ display: opt.hh && 'none' || 'block' })
        .end()
        .find('.modal-title')
        .html(opt.title || '提示信息')
        .end()
        .find('.modal-body')
        .html(opt.content || '')
        .end()
        .find('.btn-default')
        .html(opt.cancel || '取消')
        .off('click')
        .on('click', function() {
            if (opt.ccb &&
                typeof opt.ccb == 'function') {
                opt.ccb();
            }
        })
        .css({ display: opt.hc && 'none' || 'inline-block' })
        .end()
        .find('.btn-primary')
        .html(opt.ok || '确定')
        .off('click')
        .on('click', function() {
            if (opt.okcb &&
                typeof opt.okcb == 'function') {
                opt.okcb();
            }
            msg_el.modal('hide');
        })
        .end()
        .find('.modal-footer')
        .css({ display: opt.hf && 'none' || 'block' });
    // toast
    if (opt.time) {
        setTimeout(function() {
            msg_el.modal('hide');
        }, opt.time * 1000)
    }
    if ($(".modal-backdrop").length > 5) {
        $(".modal-backdrop").remove();
        setTimeout(function() {
            window.location.reload(true);
        }, 2000);
    }
    msg_el.modal('show');
    $('body').removeAttr('style').removeClass('modal-open');
}

function $message_drawMoney(opt) {
    /**
     * opt.title    标题
     * opt.content  内容
     * opt.cancel   取消按钮文字
     * opt.hc       是否隐藏cancel按钮
     * opt.ccb      取消按钮点击回调
     * opt.ok       确定按钮文字
     * opt.okcb     确定按钮点击回调
     * opt.time     显示时长，不传一直显示
     * opt.hh       是否隐藏头
     * opt.hf       是否隐藏尾
     * opt.style    自定义弹出框的宽高
       opt.from
     */
    var msg_el = $('.message_content_drawMoney');
    // console.log(msg_el);
    // if(opt.from="draw"){
    //     alert("whiec")
    //     msg_el.html("");
    // }

    // 初始化事件
    msg_el
        .find('.modal-dialog')
        .removeAttr("style")
        .css(opt.style || {
            'top': '150px',
            'max-width': '400px'
        })
        .end()
        .find('.modal-header')
        .css({ display: opt.hh && 'none' || 'block' })
        .end()
        .find('.modal-title')
        .html(opt.title || '提示信息')
        .end()
        .find('.modal-body')
        .html(opt.content || '')
        .end()
        .find('.btn-default')
        .html(opt.cancel || '取消')
        .off('click')
        .on('click', function() {
            if (opt.ccb &&
                typeof opt.ccb == 'function') {
                opt.ccb();
            }
        })
        .css({ display: opt.hc && 'none' || 'inline-block' })
        .end()
        .find('.btn-primary')
        .html(opt.ok || '确定')
        .off('click')
        .on('click', function() {
            if (opt.okcb &&
                typeof opt.okcb == 'function') {
                opt.okcb();
            }
            msg_el.modal('hide');
        })
        .end()
        .find('.modal-footer')
        .css({ display: opt.hf && 'none' || 'block' });
    // toast
    if (opt.time) {
        setTimeout(function() {
            msg_el.modal('hide');
        }, opt.time * 1000)
    }
    // show
    msg_el.modal('show');
}

(function(root, factory) {
    //amd
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else if (typeof exports === 'object') { //umd
        module.exports = factory();
    } else {
        root.Loading = factory(window.Zepto || window.jQuery || $);
    }
})(this, function($) {
    var Loading = function() {};
    Loading.prototype = {
        loadingTpl: '<div class="ui-loading"><div class="ui-loading-mask"></div><i></i></div>',
        stop: function() {
            var content = $(this.target);
            this.loading.remove();
        },
        start: function() {
            var _this = this;
            var loading = this.loading;
            if (!loading) {
                loading = $(_this.loadingTpl);
                $('body').append(loading);
            }
            this.loading = loading;
            //console.log(cw,ch)
            this.setPosition();
        },
        setPosition: function() {
            var _this = this;
            var loading = this.loading;
            var target = _this.target;
            var content = $(target);
            var ch = $(content).outerHeight();
            var cw = $(content).outerWidth();
            if ($(target)[0].tagName == "HTML") {
                ch = Math.max($(target).height(), $(window).height());
                cw = Math.max($(target).width(), $(window).width());
            }
            loading.height(ch).width(cw);
            loading.find('div').height(ch).width(cw);
            if (ch < 100) {
                loading.find('i').height(ch).width(ch);
            }
            var offset = $(content).offset();
            loading.css({
                top: offset.top,
                left: offset.left
            });
            var icon = loading.find('i');
            var h = ch,
                w = cw,
                top = 0,
                left = 0;
            if ($(target)[0].tagName == "HTML") {
                h = $(window).height();
                w = $(window).width();
                top = (h - icon.height()) / 2 + $(window).scrollTop();
                left = (w - icon.width()) / 2 + $(window).scrollLeft();
            } else {
                top = (h - icon.height()) / 2;
                left = (w - icon.width()) / 2;
            }
            icon.css({
                top: top,
                left: left
            })
        },
        init: function(settings) {
            settings = settings || {};
            this.loadingTpl = settings.loadingTpl || this.loadingTpl;
            this.target = settings.target || 'html';
            this.bindEvent();
        },
        bindEvent: function() {
            var _this = this;
            $(this.target).on('stop', function() {
                _this.stop();
            });
            $(window).on('resize', function() {
                _this.setPosition();
            });
        }
    }
    return Loading;
});



// var newTab = null;


// module.exports
window.common = {
    // base_url:'http://admin.baochiapi.com',
    // photo_url:'http://admin.baochiapi.com/photo',
    base_url: 'http://api.blr53889.com',
    photo_url: 'http://img.will888.cn/photo',
    ajax: sendRequest,
    ajax_async: sendRequest_async,
    ajaxHtml: sendRequest2,
    getQueryString: getQueryStringByName,
    Cookie: Cookie,
    msgAlert: msgAlert,
    FormatNumber: FormatNumber,
    logOut: logOut,
    ifLanded: ifLanded,
    formatTime: formatTime,
    regConfig: regConfig,
    $message: $message,
    momentFormatTime: momentFormatTime,
    changeTime: changeTime ,
    newTab: null,
    toast: function(msg) {
        $message({
            content: msg.content || msg,
            time: 3,
            hh: true,
            hf: true
        });
    },
    toast_drawMoney: function(msg) {
      //  console.log(msg);
        $message_drawMoney({
            content: msg.content || msg,
            time: 3,
            hh: true,
            hf: true
        });
    },
    showframe: function(src) {
        $('#iframe_out').show();
        $('#iframe').attr('src', src);
    },
    openNewTab: function(src) {
        if (common.newTab === null) {
            common.newTab = window.open('/form?type=game', 'game', 'height=550,width=1200,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
        } else {
            common.newTab.location.href = "/form?type=game";
        }
    },
    positiveNum: function(num) {  // 验证数字
      //  var re = /^[0-9]*[1-9][0-9]*$/;
        var re=/^[0-9]*$/;
        return re.test(num);
    },
    checkNumber: function(num) {  // 验证数字，包含0
        var re=/^[0-9]*$/;
        return re.test(num);
    },
    positiveEngNum: function(val) {  // 验证英文与数字或者下划线，帐号验证
       // var re = /^[A-Za-z0-9]+$/;
        var re = /^[A-Za-z0-9|_|]+$/;
        return re.test(val);
    },
    trueName: function(val) {  // 验证真实姓名，中文字符
        var re = /^[\u4e00-\u9fa5]+$/;
        return re.test(val);
    },
    phoneNum: function (num) {  // 验证手机号码
        var re = /^1[3|4|5|7|8|][0-9]{9}$/;
        return re.test(num);
    },
   checkEmail: function (val) {  // 验证邮箱
        var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
        return re.test(val);
    },
    checkWechat: function (val) {  // 验证微信
        var re = /^[a-zA-Z\d_]{5,}$/ ;
        return re.test(val);
    },
    checkqq: function (val) {  // 验证qq
        var re = /^[1-9][0-9]{4,}$/ ;
        return re.test(val);
    },
    openGame: function(url) {
        openGameSize++ ;
        if (url) {
            return window.open(url, 'game', 'width=1200, height=800') ;
        }
       // return window.open('', 'game', 'width=1200, height=800').document.write(loadStr);
        return window.open('', 'game', 'width=1200, height=800') ;
    },
    randomDate: function() {
        var start_date = new Date();
        var len = start_date.getTime();
        var offset = start_date.getTimezoneOffset() * 60 * 1000;
        var utcTime = len + offset;
        var start = new Date(start_date.getTime());
        start.setMonth(0);
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        var middle = new Date(start.getTime());
        middle.setMonth(6);
        // 夏令时
        if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
            var date = new Date(utcTime + 3600000 * -4);
        } else {
            var date = new Date(utcTime + 3600000 * -5);
        }
        // console.log(date);
        var years = date.getFullYear();
        var hour = date.getHours();
        if (hour < 10) {
            hour = '0' + hour.toString();
        }
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month.toString();
        }

        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        var day = date.getDate();
        if (day < 10) {
            day = '0' + day.toString();
        }
        //var datevalue = years +'-'+ month +'-'+ day +' '+ hour +':'+ minutes +':'+ seconds;
        var datevalue = years + '/' + month + '/' + day;
        // console.log(years + month + day + hour + minutes + seconds);
        return datevalue;
    },
    randomDateYYMMDD: function() {
        var start_date = new Date();
        var len = start_date.getTime();
        var offset = start_date.getTimezoneOffset() * 60 * 1000;
        var utcTime = len + offset;
        var start = new Date(start_date.getTime());
        start.setMonth(0);
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        var middle = new Date(start.getTime());
        middle.setMonth(6);
        // 夏令时
        if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
            var date = new Date(utcTime + 3600000 * -4);
        } else {
            var date = new Date(utcTime + 3600000 * -5);
        }
        // console.log(date);
        var years = date.getFullYear();
        var hour = date.getHours();
        if (hour < 10) {
            hour = '0' + hour.toString();
        }
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month.toString();
        }

        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        var day = date.getDate();
        if (day < 10) {
            day = '0' + day.toString();
        }
        //var datevalue = years +'-'+ month +'-'+ day +' '+ hour +':'+ minutes +':'+ seconds;
        var datevalue = years + '' + month + '' + day;
        // console.log(years + month + day + hour + minutes + seconds);
        return datevalue;
    },
    pollingTheMail: function() {
        common.ajax('msg/unread/types', {}, function(data) {
            var countvalue = data && data.result && data.result.list;
            var notice = 0; //三种消息都没有新消息，或系统消息有新消息则显示系统消息
            var array;
            var redDot = $('.red-dot');
            if (redDot) {
                redDot.remove();
            }
            var tabIndex = common.Cookie.get("tabIndex");
            if (countvalue.length > 0) {
                var $mail = $('.icon-email');
                if ($mail) {
                    $mail.append('<em class="red-dot"></em>');
                    common.Cookie.set("alreadRead", "2");
                }
                array = countvalue.toString().split(","); //转换为数组
                //1,2,3都有
                if ($.inArray("1", array) >= 0 && $.inArray("2", array) >= 0 && $.inArray("3", array) >= 0) {
                    var redDotMsg = $('#em_msg_two');
                    if (redDotMsg.html() == undefined && tabIndex != "1") {
                        $('.aa_two').after('<em class="red-dot-msg" id="em_msg_two"></em>');
                    }
                    var redDotMsg2 = $('#em_msg_three');
                    if (redDotMsg2.html() == undefined && tabIndex != "2") {
                        $('.aa_three').after('<em class="red-dot-msg" id="em_msg_three"></em>');
                    }
                    var redDotMsg0 = $('#em_msg_one');
                    if (redDotMsg0.html() == undefined && tabIndex != "0") {
                        $('.aa_one').after('<em class="red-dot-msg" id="em_msg_one"></em>');
                    }
                }
                //1,2有3没有
                if ($.inArray("1", array) >= 0 && $.inArray("2", array) >= 0 && $.inArray("3", array) < 0) {
                    var redDotMsg = $('#em_msg_two');
                    if (redDotMsg.html() == undefined && tabIndex != "1") {
                        $('.aa_two').after('<em class="red-dot-msg" id="em_msg_two"></em>');
                    }
                    var redDotMsg0 = $('#em_msg_one');
                    if (redDotMsg0.html() == undefined && tabIndex != "0") {
                        $('.aa_one').after('<em class="red-dot-msg" id="em_msg_one"></em>');
                    }
                }
                //2,3有1没有
                if ($.inArray("1", array) < 0 && $.inArray("2", array) >= 0 && $.inArray("3", array) >= 0) {
                    notice = 1; //如果系统消息没有新消息，游戏消息有新消息则显示游戏
                    var redDotMsg = $('#em_msg_three');
                    if (redDotMsg.html() == undefined && tabIndex != "2") {
                        $('.aa_three').after('<em class="red-dot-msg" id="em_msg_three"></em>');
                    }
                    var redDotMsg2 = $('#em_msg_two');
                    if (redDotMsg2.html() == undefined && tabIndex != "1") {
                        $('.aa_two').after('<em class="red-dot-msg" id="em_msg_two"></em>');
                    }
                }
                //1,3有2 没有
                if ($.inArray("1", array) >= 0 && $.inArray("2", array) < 0 && $.inArray("3", array) >= 0) {
                    var redDotMsg = $('#em_msg_one');
                    if (redDotMsg.html() == undefined && tabIndex != "0") {
                        $('.aa_one').after('<em class="red-dot-msg" id="em_msg_one"></em>');
                    }
                    var redDotMsg2 = $('#em_msg_three');
                    if (redDotMsg2.html() == undefined && tabIndex != "2") {
                        $('.aa_three').after('<em class="red-dot-msg" id="em_msg_three"></em>');
                    }
                }
                //3有1,2没有
                if ($.inArray("1", array) < 0 && $.inArray("2", array) < 0 && $.inArray("3", array) >= 0) {
                    notice = 2; //如果系统消息与游戏消息都没有新消息，个人消息有新消息则显示个人消息
                }
                //2有1,3没有
                if ($.inArray("1", array) < 0 && $.inArray("2", array) >= 0 && $.inArray("3", array) < 0) {
                    notice = 1; //如果系统消息与游戏消息都没有新消息，个人消息有新消息则显示个人消息
                }
            } else {
                if (redDot) {
                    redDot.remove();
                    common.Cookie.set("alreadRead", "1");
                }
            }
            common.Cookie.set("notice", notice);
        });
    },
    checkReg:function () {
         $('#username').on('input focusout', function (aa) {
             var el = aa.target;
             var flag = $(el).parent('div').parent('div').children('label').find('em').length;
             var val = el && el.value || '';
             if(val == '' && flag ==0){
                 $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                 return ;
             }
             if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                 $(el).addClass("backgroundErr").parent('div').next().html('用户名不能为空').addClass("red");
                 return ;
             }
             if(!common.positiveEngNum(val) ||val.length<4 || val.length>15){
                 $(el).addClass("backgroundErr").parent('div').next().html('请输入4-15位英文与数字').addClass("red");
                 return ;
             }
             $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');

        });
        $('#password').on('input focusout', function (evt) { //密码验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            var tempPw = '';
            if($('#retryPasswd').length == 1){
                tempPw = $('#retryPasswd');
            }
            else if($('#confirmPassword').length == 1){
                tempPw = $('#confirmPassword');
            }
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(tempPw !== '' && tempPw.val() === val && tempPw.val().length>0){
                tempPw.removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
            }
            else if(tempPw !== '' && tempPw.val().length == 0){
                if(tempPw.hasClass('backgroundErr')){
                    tempPw.addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                }
                else {
                    tempPw.parent('div').next().html('').removeClass('red');
                }
            }
            else if(val.length !== 0){
                tempPw.addClass('backgroundErr').parent('div').next().html('确认密码错误，请重新输入').addClass('red');
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(val == $('#username').val()){
                $(el).addClass("backgroundErr").parent('div').next().html('与用户名重复').addClass("red");
                return ;
            }
            if(!common.positiveEngNum(val) ||val.length<6 || val.length>20){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入6-20位英文与数字').addClass("red");
                return ;
            }
            var strength = val.length <= 9 ? '低' : val.length >= 13 ? '高' : '中';
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>  密码强度：' + strength).removeClass('red');
        });

        $('#retryPasswd,#confirmPassword').on('input focusout', function (evt) { // 确认登录密码
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(val != $('#password').val()){
                $(el).addClass("backgroundErr").parent('div').next().html('确认密码错误，请重新输入').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#paymentPassword').on('input focusout', function (evt) { // 支付密码
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.checkNumber(val) ||val.length<4 || val.length>4){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入四位数字').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#realname').on('input focusout', function (evt) { // 真实姓名验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.trueName(val)){
                $(el).parent('div').next().html('必须与银行帐户名称相同，否则不能出款！').addClass("red");;
                return ;
            }
            if(val.length<2){
                $(el).parent('div').next().html('请至少输入2个字').addClass("red");
                return ;
            }
            if(val.length>5){
                $(el).parent('div').next().html('请最多输入5个字').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#bankCardNo').on('input focusout', function (evt) { // 银行卡号验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.positiveNum(val) || val.length<15 || val.length>20){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入15-20位银行账号').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#bankDeposit').on('input focusout', function (evt) { // 开户行地址验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入开户行地址').addClass("red");
                return ;
            }
        /*    if(!common.trueName(val)){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入开户行地址').addClass("red");
                return ;
            }*/
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#telephone').on('input focusout', function (evt) { // 手机号码验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.phoneNum(val) || val.length<11 || val.length>11){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入您的手机号').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#email').on('input focusout', function (evt) { // 邮箱验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.checkEmail(val) ){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入您的邮箱').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });

        $('#weixin').on('input focusout', function (evt) { // 微信号码验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.checkWechat(val) ){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入您的微信帐号').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#qq').on('input focusout', function (evt) { // qq号码验证
            var el = evt.target;
            var flag = $(el).parent('div').parent('div').children('label').find('em').length;
            var val = el && el.value || '';
            if(val == '' && flag ==0){
                $(el).removeClass('backgroundErr').parent('div').next().html('').removeClass('red');
                return ;
            }
            if(val =='' || val ==' ' || val.length ==0 && flag ==1){
                $(el).addClass("backgroundErr").parent('div').next().html('该项不能为空').addClass("red");
                return ;
            }
            if(!common.checkqq(val) ){
                $(el).addClass("backgroundErr").parent('div').next().html('请输入您的QQ帐号').addClass("red");
                return ;
            }
            $(el).removeClass('backgroundErr').parent('div').next().html('<span class="icon_ok"></span>').removeClass('red');
        });
        $('#code').on('input focusout', function (evt) { // 验证码
            var el = evt.target;
            var val = el && el.value || '';
            if(val =='' || val ==' ' || val.length ==0){
                $(el).addClass('backgroundErr').parent().next().next().html('请输入验证码').addClass("red").css("padding-left","10px");
                return ;
            }
            else {
                $(el).removeClass('backgroundErr').parent().next().next().html('').removeClass('red');
            }
        });

    }

};
$(function() {
    if (document.location.href.indexOf("blr6568.com") != -1) {
        common.photo_url = 'http://img.blr6568.com/photo';
    }
    var hasLogin = common.ifLanded(); //是否登录
    if (hasLogin) { //如果登录
        setInterval('common.pollingTheMail()', "60000"); //定时调用后台的接口，检查是否有新通知消息
    }
});

var hmt = hmt || [];
(function() {
    window.common.Cookie=Cookie;
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c4887eefa6b950d3e5cee197fcd30dc2";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
