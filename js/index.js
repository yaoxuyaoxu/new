var url = 'http://192.168.3.241/api';

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();
$(function() {
    var win_width = $(window).width();
    var win_height = $(window).height();

    var btn2 = true;
    var aj=0;
     var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: ''
                };


  setTimeout(function() {
            $('.intop-advertising1').slideDown(500);

        }, 1000);

    

    var shiliswiper = new Swiper('.index-swiper', {

        roundLengths: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        loop:true,
        speed: 2000,
          pagination: {
        el: '.swiper-pagination',
         clickable: true,
      },

    });


       var tuiswiper = new Swiper('.tui-swiper', {

        roundLengths: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop:true,
            speed: 2000,
              pagination: {
            el: '.swiper-pagination',
             clickable: true,
          },

        });

              var user1swiper = new Swiper('.user1-swiper', {

        roundLengths: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop:true,
            speed: 2000,
              pagination: {
            el: '.swiper-pagination',
             clickable: true,
          },

        });

                     var user2swiper = new Swiper('.user2-swiper', {

        roundLengths: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop:true,
            speed: 3000,
              pagination: {
            el: '.swiper-pagination',
             clickable: true,
          },

        });

    var user3swiper = new Swiper('.user3-swiper', {

        roundLengths: true,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            loop:true,
            speed: 3000,
              pagination: {
            el: '.swiper-pagination',
             clickable: true,
          },

        });

        $('.user_safe_bd .item .item_hd').click(function() {
                          $('.item_hd').parent().find('.item_bd').hide();
                           $(this).parent().find('.item_bd').show();
                        })
          $('.label_item_2 label').click(function() {
                         $(this).addClass("on");
                         $(this).find('input').attr("checked","checked");
                        $(this).siblings().removeClass("on");
                        $(this).siblings().find('input').removeAttr("checked");
            });
           $('.label_item_4 label').click(function() {
                         $(this).addClass("on");
                         $(this).find('input').attr("checked","checked");
                        $(this).siblings().removeClass("on");
                        $(this).siblings().find('input').removeAttr("checked");
            });

            $('.fdiv1-tem a').click(function() {
                         $(this).addClass("active");
               
                        $(this).siblings().removeClass("active");
                        
            });

             $('.gylx-ul li').click(function() {
                         $(this).addClass("on");
               
                        $(this).siblings().removeClass("on");
                        
            });

             $('#xieyi').click(function() {
                 var e = layer.open({
                    type: 1,
                    title: "店伯乐支付全款协议",
                    skin: "layer-open",
                    area: ["760px", "700px"],
                    btn: ["同意并继续"],
                    content: $("#xieyicon"),
                    yes: function() {
                      $(".change-check").attr("checked", "checked"),

                        layer.close(e)
                    }
                })


            });



 $(".se-videoul li").click(function(){
    var videoUrl=$(this).attr("data-url");
     $("#video_yscj").attr("src",videoUrl);
     $(".video_div").stop(false,true).animate({"top":"0px"},500);
  });

 $(".pvideo").click(function(){
    var videoUrl=$(this).attr("data-url");
     $("#video_yscj").attr("src",videoUrl);
     $(".video_div").stop(false,true).animate({"top":"0px"},500);
  });

  $(".sale_list li").click(function(){
    var videoUrl=$(this).attr("data-url");
     $("#video_yscj").attr("src",videoUrl);
     $(".video_div").stop(false,true).animate({"top":"0px"},500);
  });

$(".video_div_closebtv").click(function(){
    $(".video_div").stop(false,true).animate({"top":"-100%"},500);
    $("#video_yscj").attr("src","");
  });



            $('.title-links a').hover(function(){
    $('.title-links a').removeClass('curlink');
    $(this).addClass('curlink');
    var type = $(this).attr('data-type');
    $('.more').attr('data-type',1);
    if(type=='m'){
      $('.more').hide();
    }else{
      $('.more a').html('加载更多');
            $('.more').show();
    }
    $('.container .lists').removeClass('curLists');
    $('.container .lists').eq($(this).index()).addClass('curLists')
  })

                var two1 = "63536200.00";
                var two2 = "3722";
                var two3 = "19363";
                var three1 = "4259242.00";
                var three2 = "259";
                var three3 = "890";

                var demo4 = new CountUp("two1", 0, two1, 0, 1, options);
                var demo5 = new CountUp("two2", 0, two2, 0, 1, options);
                var demo6 = new CountUp("two3", 0, two3, 0, 1, options);
                var demo7 = new CountUp("three1", 0, three1, 0, 1, options);
                var demo8 = new CountUp("three2", 0, three2, 0, 1, options);
                var demo9 = new CountUp("three3", 0, three3, 0, 1, options);


                function starttwo() {
                    demo4.reset();
                    demo5.reset();
                    demo6.reset();
                    demo4.start();
                    demo5.start();
                    demo6.start();
                }
                function startthree() {
                    demo7.reset();
                    demo8.reset();
                    demo9.reset();
                    demo7.start();
                    demo8.start();
                    demo9.start();
                }

             $(".goods_list li").hover(function(){
              var mdindex=$(this).index();
           $(this).toggleClass("on").siblings().removeClass("on");
           $('.goods_shdl dd').hide().eq(mdindex).show();

          },function(){
          
          });

               $(".topbanner").slide({
                    mainCell: ".div3 ul",
                    autoPage: true,
                    effect: "topLoop",
                    autoPlay: true,
                    vis: 1,
                    prevCell:".ggprev",
                    nextCell:".ggnext",
                    delayTime: 1000,
                     startFun:function(i,c){
                                $(".usggpage").html(i+1);
                            },
                });
                     $(".topbanner").slide({
                    mainCell: ".bannerbd_lists",
                    autoPage: true,
                    effect: "topLoop",
                    autoPlay: true,
                    vis: 1,
                 
                    delayTime: 1000,
                    
                });
                 
               $(".user_index_active").slide({effect:"left"});

 var _footer_scroll = 0;
             
    $(window).scroll(function () {
        if (_footer_scroll == 0) {
            if ($(this).scrollTop() > 150) {
                $(".supension_con").css({"left": "0"});
                $(".supension_btn").css({"left": "-130px"});
                $(".supension_con").fadeIn();
            } else {
                $(".supension_con").css({"left": "-100%"});
                $(".supension_btn").css({"left": "15px"});
                $(".supension_con").fadeOut();
            }
        }
    });

    // 店铺详情视频切换
    $('.changeVideo').find('li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.help_video').eq($(this).index()).show().siblings().hide();        ;
    })

    //店铺详情点击切换
    $('.gray-part-tab').find('span').click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var _tabindex = $(this).index();
        switch (_tabindex) {
            case 0:
                $('.gray-part01').show();
                $('.gray-part02').hide();
                break;
            case 1:
                $('.gray-part02').show();
                $('.gray-part01').hide();
                break;
        }
    })
     //店铺详情点击切换
        //帮助中心交易流程切换

         $('.tran_process_showt span').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        if ($(this).index() === 0) {
          $('.buyer_process').show()
          
          $('.seller_process').hide()
        } else {
          $('.seller_process').show()
          
          $('.buyer_process').hide()
        }
      })
         //帮助中心交易流程切

    
    $(".supension_close").click(function () {
        _footer_scroll = 1;
        $(".supension_con").animate({"left": "-100%"}, {duration: 300, easing: 'easeOutQuad'});
        $(".supension_btn").delay(100).animate({"left": "15px"}, {duration: 200, easing: 'easeInQuad'});
        $(".supension_con").fadeOut();
    });

    $(".supension_btn").click(function () {
        _footer_scroll = 0;
        $(".supension_con").animate({"left": "0"}, {duration: 300, easing: 'easeInQuad'});
        $(".supension_btn").animate({"left": "-190px"}, {duration: 200, easing: 'easeOutQuad'});
        $(".supension_con").fadeIn();
    });
            $(".slideServerbox").slide({
              
                mainCell: ".serverbox_bd ul",
                autoPlay: true,
                vis: 4,
                effect: "leftLoop",
     
                scroll: 1
            });
            $(".slideServerbox").hover(function() {
                $(".slideServerbox .serverbox_hd .prev").show();
                $(".slideServerbox .serverbox_hd .next").show();
            }).mouseleave(function() {
                $(".slideServerbox .serverbox_hd .prev").hide();
                $(".slideServerbox .serverbox_hd .next").hide();
            })


            
          $(".dynamic").slide({
                    mainCell: ".bd ul",
                    autoPage: true,
                    effect: "fade",
                    autoPlay: true,
                    vis: 1,
                    delayTime: 1000,
                    startFun: function (i, c) {
                        var syn_text = '';
                        if (i == 0) {
                            syn_text = '本月动态数据';
                            starttwo();
                        } else if (i == 1) {
                            syn_text = '昨日动态数据';
                            startthree();
                        }
                        $(".dynamic .tit").html(syn_text);
                    },
                });
            $(".dynscroll").slide({
                    mainCell: ".bd ul",
                    autoPage: true,
                    effect: "topLoop",
                    autoPlay: true,
                    vis: 1,
                    delayTime: 1000
                });

             $('.letter').dotdotdot({
                wrap: 'letter',
                after: 'a'
            });
            $('.good_letter').dotdotdot({
                wrap: 'letter'
            });

               // 模拟下拉框
        $('.kind_list').click(function () {
            var _this = this;
            $(this).addClass('active').find('.select_lists').slideToggle(500);
            $(".kind_list").mouseleave(function () {
                $('.select_lists').slideUp(500);
                $(_this).removeClass('active');
            });
        });
        $('.select_list').click(function () {
            $(this).parents('.kind_list').addClass('gray').find('i').text($(this).text());
        });

        // 排序
        $('.sort_default').click(function () {
            $(this).toggleClass('sortcolor');
        });
        $('.sort_new').click(function () {
            $(this).toggleClass('sortcolor1');
            $(this).toggleClass('sortcolor2');
        });




     //点击城市获取地区
 $('#province').change(function () {
   var province_id = $(this).val();
     //清空城市
     $('#city').html('<option value="">请选择城市</option>');
     //清空地区
     $('#area').html('<option value="">请选择县/区</option>');
   //判断为空时不请求
   if(!province_id.length){
       return;
   }
   //请求查询城市地址
    // $.post('/userCenter/getCity',{province_id:province_id,_token:$('#csrf_token').val()},function (data) {
    //     var rst = eval("("+data+")");
    //     var html ='';
    //     html +="<option value=''>请选择城市</option>";
    //     $.each(rst,function (i, v) {
    //         html +="<option value='"+v.area_id+"'>"+v.area_name+"</option>";
    //     });
    //     $('#city').html(html);
    // })
});

   //联动地区
     $('#city').change(function () {
         var city_id = $(this).val();

         //清空地区
         $('#area').html('<option value="">请选择县/区</option>');

         //判断为空时不请求
         if(!city_id.length){
             //清空地区
             return;
         }
         //请求查询城市地址
         $.post('/userCenter/getArea',{city_id:city_id,_token:$('#csrf_token').val()},function (data) {
             var rst = eval("("+data+")");
             var html ='';
             html +="<option value=''>请选择县/区</option>";
             $.each(rst,function (i, v) {
                 html +="<option value='"+v.area_id+"'>"+v.area_name+"</option>";
             });
             $('#area').html(html);
         })
     })







});




           function checkgrade(){
             
            
               
                        var mingrade = $('.mingrade').val();
                        var maxgrade = $('.maxgrade').val();
                        if(mingrade==0){
                            layer.msg('请选择开始区间',{icon: 0});
                            return false;
                        }
                        if(maxgrade==0){
                            layer.msg('请选择结束区间',{icon: 0});
                            return false;
                        }
                    }
                    function checkprice(){
                        var price_left = $('.price_left').val();
                        var price_right = $('.price_right').val();
                        if(price_left==0){
                            layer.msg('请选择最低价格',{icon: 0});
                            return false;
                        }
                        if(price_right==0){
                            layer.msg('请选择最高价格',{icon: 0});
                            return false;
                        }
                    }

 function search(t1) {
            var _str = '';
            var _str_arr = _str.split('-');
            var _first_str = t1.substr(0, 1);
            var flag = 1;
            for (var i in _str_arr) {
                if (_str_arr[i].substr(0, 1) == _first_str) {
                    flag = 0;
                    _str_arr[i] = t1;
                }
                if (_str_arr[i].substr(0, 1) == 'p') {
                    _str_arr.splice(i, 1);
                }
                if(_first_str == 'f' && _str.indexOf('v') != -1){
                    if (_str_arr[i].substr(0, 1) == 'v') {
                        _str_arr.splice(i, 1);
                    }
                }

            }
            _str = _str_arr.join('-');
            if (flag == 1 && _str != '') {
                _str += "-" + t1;
            } else if (flag == 1 && _str == '') {
                _str += t1;
            }
            window.location.href = '/tmall/' + _str;

        }
                    
// 首页


$.ajax({
    url: url + '/index/get_index',
    type: 'POST',
    data:{ index: '1'},
    // xhrFields: {
    //   withCredentials: true // 这里设置了withCredentials
    // },
    success: function(res) {
        $(function () {
            // 底部通栏切换
            $('.supension_next').click(function () {
                tabList('.tianmao_list', 'maoShow', 'next');
                tabList('.jing_list', 'maoShow', 'next');
                tabList('.tao_list', 'maoShow', 'next');
                tabList('.mo_list', 'maoShow', 'next');
            });
            $('.supension_prev').click(function () {
                tabList('.tianmao_list', 'maoShow', 'prev');
                tabList('.jing_list', 'maoShow', 'prev');
                tabList('.tao_list', 'maoShow', 'prev');
                tabList('.mo_list', 'maoShow', 'prev');
            });
            $('.tianmao_list').eq(0).addClass('maoShow');
            $('.jing_list').eq(0).addClass('maoShow');
            $('.tao_list').eq(0).addClass('maoShow');
            $('.mo_list').eq(0).addClass('maoShow');
        
            // 封装切换函数
            function tabList(node_classname, classname, type) {
                var index = $(node_classname).parent().find('.' + classname).index();
                for (var i = 0; i < $(node_classname).length; i++) {
                    $(node_classname).eq(i).removeClass(classname);
                }
                if (type == "next") {
                    index++;
                    if (index >= $(node_classname).length) {
                        index = 0;
                    }
                    $(node_classname).eq(index).addClass(classname);
                } else {
                    index--;
                    if (index < 0) {
                        index = $(node_classname).length - 1;
                    }
                    $(node_classname).eq(index).addClass(classname);
                }
            }
        })
        // 底部客服
                for(var i=0;i<4;i++){
                    var server = res.data.service 
                    var Server = server[Math.floor(Math.random()*server.length)];
                    var name = Server.name;
                    var img  = Server.headimg;
                    var QQ = Server.email;
                    var item =Server.weight
                    if(item == "A"){
                        item = "金牌客服"
                    }else if(item == "B"){
                        item = "高级客服"
                    }else if( item == "C"){
                        item = "中级客服"
                    }else if( item == "D"){
                        item = "普通客服"
                    }
               
                    
                    console.log(server)
                    $('#Aserver').append('<li class="tianmao_list" id="Tianmao_list"><dl class="supension_dl clearfix"><dt class="supension_dt fl"><img src="'+img+'" alt=""></dt><dd class="supension_dd fl"><p class="supension_consult"><span class="supension_title">'+item+'</span><i class="supension_name">'+name+'</i></p><p class="supension_consult"><span class="supension_title">QQ</span><i class="supension_name">'+QQ+'</i></p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+QQ+'&amp;site=qq&amp;menu=yes" target="_blank"  rel="nofollow" class="supension_contact">立即联系TA</a></dd></dl></li>');
                    $('#Bserver').append('<li class="jing_list"><dl class="supension_dl clearfix"><dt class="supension_dt fl"><img src="'+img+'"  alt=""></dt><dd class="supension_dd fl"><p class="supension_consult"><span class="supension_title">'+item+'</span><i class="supension_name">'+name+'</i></p><p class="supension_consult"><span class="supension_title">QQ</span><i class="supension_name">'+QQ+'</i></p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+QQ+'&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow" class="supension_contact">立即联系TA</a></dd></dl></li></ul></li>');
                    $('#Cserver').append('<li class="tao_list"><dl class="supension_dl clearfix"><dt class="supension_dt fl"><img src="http://cdn.yidian51.com/pc/201810/07/937bd9a7a7af9f0a2e262f3a2c64ee55.jpg" alt=""></dt><dd class="supension_dd fl"><p class="supension_consult"><span class="supension_title">'+item+'</span><i class="supension_name">'+name+'</i></p><p class="supension_consult"><span class="supension_title">QQ</span><i class="supension_name">3004783990</i></p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3004783990&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow" class="supension_contact">立即联系TA</a></dd></dl></li>')
                    $('#Dserver').append('<li class="mo_list"><dl class="supension_dl clearfix"><dt class="supension_dt fl"><img src="'+img+'"  alt=""></dt><dd class="supension_dd fl"><p class="supension_consult"><span class="supension_title">'+item+'</span><i class="supension_name">'+name+'</i></p><p class="supension_consult"><span class="supension_title">QQ</span><i class="supension_name">'+QQ+'</i></p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin='+QQ+'&amp;site=qq&amp;menu=yes" target="_blank"  rel="nofollow" class="supension_contact">立即联系TA</a></dd></dl></li>');
                }
                
    
               
            
                
               
            
               
                
   
            
        
            
            // var item = server[Math.floor(Math.random()*server.length)];
            // var name = item.name;
            // $('#JDserver').append('<li class="jing_list"><dl class="supension_dl clearfix"><dt class="supension_dt fl"><img src="https://cdn.yidian51.com/pc/201809/21/d73d673ad8c5724b5d20235fa3491d85.jpg" alt=""></dt><dd class="supension_dd fl"><p class="supension_consult"><span class="supension_title">天猫顾问</span><i class="supension_name">'+name+'</i></p><p class="supension_consult"><span class="supension_title">QQ</span><i class="supension_name">3003552549</i></p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3003552549&amp;site=qq&amp;menu=yes" target=""  rel="nofollow" class="supension_contact">立即联系TA</a></dd></dl></li>')
        
        //    推荐
       $.each(res.data.article.faq,function(i,item){
       
        var time = timestampToTime(item.time)
            var b = new Base64();
            var str = item.content;
          //解密
            str = b.decode(str);
             $('#faq').append('<li><a href=""><div class="s3"><p>'+str+'</p><span>'+ time +'</span></div></a></li>')
       })
       $.each(res.data.article.notice,function(i,item){
        var date = new Date(item.time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        var time1 = Y+ M +D
            var b = new Base64();
            var str = item.content;
          //解密
            str = b.decode(str);
             $('#notice').append('<li><a href=""><div class="s3"><p>'+ str +'</p><span>'+ time1 +'</span></div></a></li>')
       });
       $.each(res.data.shop.tmao,function(i,item){
            var recommend = item.title;
            var shangbiao = item.trademark_attribute;
            var shopType = item.shop_type;
            var price = item.price/10000;
            var s = price +'';
            var priceCut = s.substring(0,s.indexOf(".") + 3);

             $('#tmallshop').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_1.png" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：'+shopType+'</span></p><p><span>商标：'+ shangbiao+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
       });
       $.each(res.data.shop.tbao,function(i,item){
            var recommend = item.title;
            var level = item.name;
            var shopType = item.shop_type;
            var price = item.price/10000;
            if(level == "1钻"){
                level = 's_cap_31.gif'
            }else if(level == "2钻"){
                level = 's_cap_32.gif'
            }else if(level == "3钻"){
                level = 's_cap_33.gif'
            }else if(level == "4钻"){
                level = 's_cap_34.gif'
            }else if(level == "5钻"){
                level = 's_cap_35.gif'
            }else if(level == "1心"){
                level = 's_cap_1.gif'
            }else if(level == "2心"){
                level = 's_cap_2.gif'
            }else if(level == "3心"){
                level = 's_cap_3.gif'
            }else if(level == "4心"){
                level = 's_cap_4.gif'
            }else if(level == "5心"){
                level = 's_cap_5.gif'
            }else if(level == "1皇冠"){
                level = 's_cap_11.gif'
            }else if(level == "2皇冠"){
                level = 's_cap_12.gif'
            }else if(level == "3皇冠"){
                level = 's_cap_13.gif'
            }else if(level == "4皇冠"){
                level = 's_cap_14.gif'
            }else if(level == "5皇冠"){
                level = 's_cap_15.gif'
            }
       

         $('#tbaoshop').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_2.png" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：'+shopType+'</span></p><p><span>店铺等级： <img src="../image/'+ level+'">  </span></p></div><div class="price">￥<span><img src="">'+price+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>');
         
        });
        $.each(res.data.shop.jd,function(i,item){
            var recommend = item.title;
            var shangbiao = item.trademark_attribute;
            var shopType = item.shop_type;
            var price = item.price/10000;
            var s = price +'';
            var priceCut = s.substring(0,s.indexOf(".") + 3);
             $('#jdshop').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_3.png" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：'+shopType+'</span></p><p><span>商标：'+ shangbiao+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
       })
       $.each(res.data.shop.new,function(i,item){
           var type = item.dp_web;
           var recommend = item.title;
           var shangbiao = item.trademark_attribute;
           var shopType = item.shop_type;
           var price = item.price/10000;
           var s = price +'';
           var priceCut = s.substring(0,s.indexOf(".") + 3);
           var level = item.name;
           if(type == "1"){
               type = "淘宝";
               $('#new').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_4.jpg" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>店铺等级 ：'+level+'</span></p><p><span>网店类型：'+ shopType+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
            }else if(type == "2"){
                type = "天猫";
                $('#new').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_1.png" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：'+shopType+'</span></p><p><span>商标：'+ shangbiao+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
            }else if(type = "3"){
                type = "京东";
                $('#new').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_4.jpg" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：'+shopType+'</span></p><p><span>商标：'+ shangbiao+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
            }
           
       })
        $.each(res.data.shop.special,function(i,item){
            var recommend = item.title;
            var shangbiao = item.trademark_attribute;
            var shopType = item.shop_type;
            var price = item.price/10000;
            var s = price +'';
            var priceCut = s.substring(0,s.indexOf(".") + 3);
            $('#special').append('  <li><a href="" target="_blank" class="a"><div class="title letter" style="word-wrap: break-word;"><img src="image/logo_4.jpg" alt="" style="display: block;">'+recommend+'</div><div class="stag"><p><span>网店类型：天猫'+shopType+'</span></p><p><span>商标：'+ shangbiao+' </span></p></div><div class="price">￥<span><img src="">'+priceCut+'万</span></div></a><div class="connect"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">联系客服</a></div></li>')
        })
    },
});
    // 判断是否登录
    var token = localStorage.getItem("token");
    if( token ==   ''){

        $('#log').append('<a href="./login.html">登录</a><a href="./logon.html">注册</a>')
    }else{
        console.log($('#log'))
        $('#log').append('<a href="">个人中心</a><a href="">退出</a>')
        console.log(2)
    }



         /**
     * 时间戳转日期
     * @param timestamp
     * @returns {*}
     */
    function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
        s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
        // console.log(Y+M+D+h+m+s)
    }
