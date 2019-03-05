var url = 'http://192.168.3.241/api';
// var url = 'https://www.51dianbole.com';
var urllocal = 'https://www.51dianbole.com';
// toggle tabs
var TAB_MAP = {
  default: '.login-default',
  fast: '.login-fast'
};
var activeTab = '.login-default'
var activeTab1 = '.login-fast'
$('.login-tabs').on('click', '.login-tabs__item', function() {
  $(this).addClass('active').siblings().removeClass('active');
  var currentTab = $(this).data('tab');
  for (var key in TAB_MAP) {
    $(TAB_MAP[key]).hide()
  }
  $(".login-tooltip").html('');
  $(TAB_MAP[currentTab]).show();
  activeTab = TAB_MAP[currentTab]
});

// $(document).keydown(function (event) {
//   if (event.keyCode == 13) $(activeTab).find('button').click()
// });
// $(document).keydown(function (event) {
//   if (event.keyCode == 13) $(activeTab1).find('button').click()
// });

//=========用户名/手机密码登录=============
$('.login-default__submit',).click(function() {
  
  // username
  var username = $('#username').val();
  var password = $('#password').val();

  // var _token = $('._token').val();
  var fromurl = $('#fromurl').val();
  $.ajax({
    url: url + '/user/user_login',
    type: 'POST',
    data: {mobile: username,password: password}, 
    // xhrFields: {
    //   withCredentials: true // 这里设置了withCredentials
    // },
    success: function(res) {
      if(res.code != '0000'){
       layer.msg('密码错误',{icon:2})
      }else{
        
        localStorage.setItem("token", res.data.token);
        window.location.href = 'http://127.0.0.1:5500/index.html'
      }
    },
  });
});




// =======手机短信登录========



// =======手机短信登录========
$('#codeBtn').click(function(){
  
  intAs = 120; // 手机短信超时时间
  jsInnerTimeout('codeBtn', intAs);
  var mobile = $('#phone').val();
  if (!checkMobile(mobile)) {
        layer.open({
          content: '请输入正确的手机号码'
          ,skin: 'msg'
        });
      return false;
  }else{
    $.ajax({
      type: 'POST',
      data: {mobile: mobile,type:'login'},
      url: url + '/user/getcode',
      // xhrFields: {
      //   withCredentials: true // 这里设置了withCredentials
      // },
      success: function(res) {
        if(res.code == 0000){
          layer.msg(res.msg ,{icon:1});
        }else{
          layer.msg(res.msg,{icon:2});
        };
      }
    });
  }
});
$('.login-fast__submit').on('click', function() {
  intAs = 120; // 手机短信超时时间
  jsInnerTimeout('codeBtn', intAs);

  var phone = $('#phone').val() ;// 手机号
  var code = $('#code').val() ;// 手机验证码
  var fromurl = $('#fromurl').val();
  $.ajax({
    type: 'POST',
    data: {mobile: phone,code: code},
    url: url + '/user/sms_login',
    // xhrFields: {
    //   withCredentials: true // 这里设置了withCredentials
    // },
    success: function(res) {
      if(res.code == 0000){
        console.log(res.code)
        layer.msg(res.msg ,{icon:1});
        window.location.href(urllocal +'/index.html')
      }else{
        layer.msg(res.msg,{icon:2});
      };
    }
  });
});
$('#LoginBtn').on('click', function() {
  var mobile = $('#phone').val();
  if(1){

  }else{
    
  }
  intAs = 120; // 手机短信超时时间
  jsInnerTimeout('LoginBtn', intAs);
        if (!checkMobile(mobile)) {
          console.log(mobile)
                layer.open({
                  content: '请输入正确的手机号码'
                  ,skin: 'msg'
                });
            return false;
        }else{
          $.ajax({
            type: 'POST',
            data: {mobile: mobile,type:'login'},
            url: url + '/user/getcode',
            // xhrFields: {
            //   withCredentials: true // 这里设置了withCredentials
            // },
            success: function(res) {
              if(res.code == 0000){
                layer.msg(res.msg ,{icon:1});
              }else{
                layer.msg(res.msg,{icon:2});
              };
            }
          });
        }

        //ajax短信接口
        //  intAs = 120;  手机短信超时时间
          // jsInnerTimeout('LoginBtn', intAs);
        // $.ajax({
        //     url: url,
        //     success: function(res) {
        //         if (res.status == 1) {
        //             $('#count_down').attr("disabled", "disabled");
        //             intAs = 300; // 手机短信超时时间
        //             jsInnerTimeout('count_down', intAs);
        //             layer.alert(res.msg, { icon: 1 });
        //         } else {
        //             layer.alert(res.msg, { icon: 2 });
        //             // verify('reflsh_code2')
        //         }
        //     }
        // });
  
});
  
    
    //手机判断
    function checkMobile(tel) {
      var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
      if (reg.test(tel)) {
          return true;
      } else {
          return false;
      };

      // var phone = document.getElementById('phone').value;
      // if(!(/^1[34578]\d{9}$/.test(phone))){ 
      //     alert("手机号码有误，请重填");  
      //     return false; 
      // } 

      // var myreg=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;  
      //   if (!myreg.test(tel)) {  
      //     console.log(myreg.test(tel))
      //       return false;  
      //   } else {  
      //     console.log(2323)
      //       return true;  
      //   }  
  };

    // 登录
    // $('#code').on('click', function() {
    //   var mobile = $('#phone').val();

    //     if (!checkMobile(mobile)) {
    //       console.log(mobile)
    //             layer.open({
    //               content: '请输入正确的手机号码'
    //               ,skin: 'msg'
    //             });
    //         return false;
    //     }else{
    //       $.ajax({
    //         type: 'POST',
    //         data: {mobile: phone,type:'reg'},
    //         url: url + '/api/user/getcode',
    //         success: function(res) {
    //           if(res.code == 0000){
    //             layer.msg(res.msg ,{icon:1});
    //           }else{
    //             layer.msg(res.msg,{icon:2});
    //           };
    //         }
    //       });
    //     }
    //   });
    $('#firstSubmit').click(function(){
      var phone = $('#phone').val();
      var code = $('#phoneCode').val();
      var password = $('#password').val();
      $.ajax({
        type: 'POST',
        data: {mobile: phone, password: password, code: code},
        // xhrFields: {
        //   withCredentials: true // 这里设置了withCredentials
        // },
        url: url + '/user/user_reg',
        success: function(res) {
          console.log(res)
          window.location.href(urllocal +'/registDone.html')
        }
      });
    });


    function jsInnerTimeout(id, intAs) {
      var codeObj = $("#" + id);
    

      intAs--;
      if (intAs <= -1) {
          codeObj.removeAttr("disabled");
          codeObj.text("发送");
          return true;
      }

      codeObj.text(intAs + '秒');

      setTimeout("jsInnerTimeout('" + id + "'," + intAs + ")", 1000);
    };