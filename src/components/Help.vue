<template>
  <div id="main">
      <div class="personal_box" id="help">
          <div class="contain_width">
              <h2 class="personal_title"></h2>
          </div>
          <div class="contain_width">
              <!--左侧选单-->
              <div class="left_menu">
                  <ul class="psn_menu" id="help_menu">
                      <li>
                          <a href="javascript:;" :class="current_title === 'question'?'active':''"><span class="icon_sprite icon_help-withdrawal"></span>常见问题</a>
                          <ul>
                              <li v-for="(list_question,index) in help_list.question">
                                  <a href="javascript:;" class="sub-link" @click="getContent('question',list_question.id)">
                                      <span>{{list_question.name}}</span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li>
                          <a :class="(current_title==='deposit'?'active':'')" href="javascript:;">
                              <span class="icon_sprite icon_help-deposit"></span>存款帮助</a>
                          <ul>
                              <li v-for="(list_deposit,index) in help_list.deposit">
                                  <a href="javascript:;" class="sub-link" @click="getContent('deposit',list_deposit.id)">
                                      <span>{{list_deposit.name}}</span>
                                  </a>
                              </li>

                          </ul>
                      </li>
                      <li>
                          <a :class="(current_title==='withdrawal'?'active':'')"><span class="icon_sprite icon_help_duty"></span>取款帮助</a>
                          <ul>
                              <li v-for="(list_withdrawal,index) in help_list.withdrawal">
                                  <a href="javascript:;" class="sub-link" @click="getContent('withdrawal',list_withdrawal.id)">
                                      <span>{{list_withdrawal.name}}</span>
                                  </a>
                              </li>

                          </ul>
                      </li>
                  </ul>
              </div>
              <!--end 左侧选单-->
              <!--右侧内容-->
              <div class="right_main">
                  <div class="psn_wrap">
                      <!--常见问题-->
                      <div class="psn_content">
                          <div class="join_wrap" v-html="help_content">

                          </div>
                      </div><!--end 常见问题-->
                  </div>
              </div>
              <!--end 右侧内容-->
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Help',
    data: function() {
      return {
        msg: 'help page',
        help_list: [],
        help_content: '',
        current_title: ''
      }
    },
    created: function() {

    },
    mounted: function() {
      var _self = this;
      _self.$nextTick(function() {
        _self.current_title = 'question';
        _self.getList();
      })
    },
    methods: {
      getList: function() {
        var _self = this;
        common.ajax('cms/client/copyright/help/list', {}, function(data) {
          if (data && data.apistatus === 1) {
            _self.help_list = data.result;
            _self.getContent(_self.current_title, data.result[_self.current_title][0]['id']);
          }
        }, 'get', function(data) {
          if (data && data.apistatus === 0) {
            common.toast({
              content: '读取目录清单发生错误，请稍候尝试',
              time: 3
            });
          }
        });
      },
      getContent: function(current, id) {
        var _self = this;
        _self.current_title = current;
        common.ajax('cms/client/copyright/details', {
          code: id
        }, function(data) {
          if (data && data.apistatus === 1) {
            _self.help_content = '<h3>' + (!data.result.title ? '' : data.result.title) + '<a class="anchor"></a></h3>' + (!data.result.content ? '' : data.result.content);
          }
        }, 'get', function(data) {
          if (data && data.apistatus === 0) {
            common.toast({
              content: '读取资料发生错误，请稍候尝试',
              time: 3
            });
          }
        });
      }
    }
  }
</script>