var url = 'http://192.168.3.241/api';


$.ajax({
    url: url+ '/index/other',
    type: 'POST',
    data: {
        data: '1'
    },
    success: function( res ){
        $.each(res.data.class, function(i,item){
            $('#Class').append('<a href="javascript:;"><em>'+item.name+'</em></a>')
        })
        $.each(res.data.pt, function(i, item){
            $('#Platform').append(' <a  href="javascriop:;"><em>'+item.name+'</em></a>');
        })
        $.each(res.data.level,function(i, item){
            $('#Level').append(' <a  href="javascriop:;"><em>'+item.name+'</em></a>')
        })
            $('#Platform').find('a').on("click",function(){
                console.log($(this).text())
            })
    }
})
var search = "";

$.ajax({
    url: url+ '/search/want'+ search,
    type: 'GET',
    success: function( res ){
        // console.log(res)
    }
})