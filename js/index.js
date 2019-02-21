$(function () {
    new Swiper('.swiper-container',{
        autoplay:2000,
        loop:true,
        pagination:'.swiper-pagination',
        autoplayDisableOnInteraction:false
    });
    window.onscroll=function(){
        console.log($(window).scrollTop())
        var scrollHeight=$(window).scrollTop()
        if(scrollHeight>66){
            $('.topBar').css('display','none')
        }else{
            $('.topBar').css('display','block')

        }
    
    }
    // $('#fa-user a').click(function(){
    //     console.log(2)
    //     $('.fa-user').addClass('colorRed')
    //     $('.fa-list-alt').removeClass('colorBlue')
    // })
    // $('#fa-list a').click(function(){
    //     console.log(1)
    //     $('.fa-list-alt').addClass('colorBlue')
    //     $('.fa-user').removeClass('colorRed')
    // })
    $('#messages a').click(function () {
        $(this).children('span').addClass("colorBlue")
        $(this).siblings().children('span').removeClass("colorBlue")
        if (!($('#messages a').hasClass("lastClick"))) {
            $('.alert').show()
            $(this).addClass("lastClick").siblings().removeClass("lastClick")    
        } else if(!($(this).hasClass("lastClick"))&&$(this).siblings().hasClass("lastClick")){
            $(this).addClass("lastClick").siblings().removeClass("lastClick") 
        } else{
            // ($(this).hasClass("lastClick"))
            $('.alert').hide()
            $(this).children('span').removeClass("colorBlue")
            $('#messages a').removeClass("lastClick")
        }
        console.log($(this).index())
        var index = $(this).index();
        switch (index) {
            case 0:
                $('#border').css('width','4rem').html('<p><h3>姓名：刘健</h3></p>')
                break
            case 1:
                $('#border').css('width','4rem').html('<p><h3>性别：男</h3></p>')
                break
            case 2:
                $('#border').css('width','5rem').html('<p><h3>学校：天津工业大学</h3></p>')
                break
            case 3:
                $('#border').css('width','5rem').html('<p><h3>lj17602656463@gmail.com</h3></p>')
                break
            case 4:
                $('#border').css('width','5rem').html('<p><h3>HTML,CSS,JS,Jquery...</h3></p>')
                break
            case 5:
                $('#border').css('width','6rem').html('<p><h3>喜欢游泳，打球，跑步等体育运动</h3></p>')
                break
            case 6:
                $('#border').css('width','5rem').html('<p><h3>河南省信阳市</h3></p>')
                break
            case 7:
                $('#border').css('width','4rem').html('<p><h3>17602656463</h3></p>')
                break
        }
    })
})
