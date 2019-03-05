var url = 'https://api.51dianbole.com/';


$(function () {
    var condition = "";
    var category="";
    var menu ="";
    var obj={}
    $('.classify').on("click", "em",function(){
       var d = $(this).parents('.talign').data('id');
       obj[d]=  $(this).data('id');
       console.log(obj);
       
    })
});

$.ajax({
    url: url+ '/index/other',
    type: 'POST',
    data: {
        data: '1'
    },
    success: function( res ){
        $.each(res.data.class, function(i,item){
            i=i+2;
            $('#Class').append('<a href="javascript:;"><em data-id="'+i+'">'+item.name+'</em></a>')
        })
        $.each(res.data.pt, function(i, item){
            i=i+1;
            $('#Platform').append(' <a  href="javascriop:;"><em data-id="'+i+'">'+item.name+'</em></a>');
        })
        $.each(res.data.level,function(i, item){
            $('#Level').append(' <a  href="javascriop:;"><em data-id="'+i+'">'+item.name+'</em></a>')
        })
           
    }
})

