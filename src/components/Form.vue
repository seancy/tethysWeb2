<template>
    <div id="main_form">
        <form id="form" name="form" :method='method' :action='action'>
            <input v-for="ipt in ipts" :name="ipt.name" :value="ipt.value" :id="ipt.id" type="hidden"/>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'From',
        data: function () {
            return {
                method: '',
                action: '',
                ipts: []
            }
        },
        created: function () {
            var _self = this;
            var query = _self.$route.query;
            if (query.action) {
                _self.method = query.method;
                //_self.action = 'http://admin.baochiapi.com/v1/' + query.action;
                _self.action = common.base_url+'/v1/' + query.action;
                if (query.params) {
                    var params = decodeURIComponent(query.params);
                    var arr = params.split('&');
                    for (var i = 0; i < arr.length; i++) {
                        _self.ipts.push({
                            id: arr[i].split('=')[0],
                            name: arr[i].split('=')[0],
                            value: arr[i].split('=')[1] || ''
                        });
                    }
                }

                setTimeout(function () {
                    document.forms[0].submit();
                }, 500);
            } else if ('game' === query.type) {
                var gamehtml = common.Cookie.get('gamehtml');
                gamehtml = gamehtml && decodeURIComponent(gamehtml) || '';

                if (gamehtml) {
                    _self.$nextTick(function () {
                        $('#main_form').html(gamehtml);
                        common.Cookie.set('gamehtml', '');
                    });
                } else {
                    setTimeout(function () {
                        common.$message({
                            title: '提示信息',
                            content: '打开游戏失败，请返回重试！',
                            okcb: function () {
                                _self.closeTab();
                            }
                        });
                    }, 500)
                }
            }
            else {
                setTimeout(function () {
                    common.$message({
                        title: '提示信息',
                        content: '请求参数错误',
                        okcb: function () {
                            _self.closeTab();
                        }
                    });
                }, 500)
            }
        },
        methods: {
            closeTab: function () {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                        window.opener = null;
                        window.close();
                    } else {
                        window.open('', '_top');
                        window.top.close();
                    }
                }
                else if (navigator.userAgent.indexOf("Firefox") > 0) {
                    window.location.href = 'about:blank ';
                } else {
                    window.opener = null;
                    window.open('', '_self');
                    window.close();
                }
            }
        }
    }
</script>
