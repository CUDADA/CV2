window.onload = function () {
    document.querySelector('.list-left').addEventListener('touchmove', function (e) {

        e.preventDefault();

    });
    document.querySelector('.list-right').addEventListener('touchmove', function (e) {

        e.preventDefault();

    });
    new IScroll(document.querySelector('.list-left'), {
        scrollX: false,
        scrollY: true,
        click: true,
        taps: true
    });
    new IScroll(document.querySelector('.list-right'), {
        scrollX: false,
        scrollY: true,
        click: true,
        taps: true
    });
    var oUL = document.getElementById('oUL')
    var aLI = oUL.getElementsByTagName('li')
    oUL.onclick = function (e) {
        var e = e || window.event
        var target = e.target || e.src.Elment;
        if (target.nodeName.toLowerCase() == 'li') {
            // console.log(target.parentNode.childNodes)
            var list=target.parentNode.childNodes
            list.forEach(value => {
                value.classList=[]
            });
            target.className='now'
            // console.log(e)
            // console.log(target.innerText)
            // console.log(target.index)
            switch(target.innerText){
                case 'HTML':
                    document.getElementById('html').scrollIntoView()
                    break
                case 'CSS':
                    document.getElementById('css').scrollIntoView()
                    break
                case 'JS':
                    document.getElementById('js').scrollIntoView()
                    break
                case 'DOM':
                    document.getElementById('dom').scrollIntoView()
                    break
                case 'JQUERY':
                    document.getElementById('jquery').scrollIntoView()
                    break
                case 'AJAX':
                    document.getElementById('ajax').scrollIntoView()
                    break
                case 'CSS:3':
                    document.getElementById('css3').scrollIntoView()
                    break
                case 'Vue.js':
                    document.getElementById('vue').scrollIntoView()
                    break
                case 'JS':
            }
        }
    }
    window.onscroll=function(){
        console.log($(window).scrollTop())
        var scrollHeight=$(window).scrollTop()
    }

}