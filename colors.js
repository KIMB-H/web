var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackGroundColor: function (color) {
        // document.querySelector('body').style.background = color;
        $('body').css('background', color);
    }
}
/**
 * jQuery에서는 반복문을 직접 쓰지 않아도 된다.

$(’a’).css(’color’,color);

$라는 이름의 함수, 모든 ‘a’ 태그를 jQuery로 제어하겠다.
 */
var Links = {
    setColor: function (color) {
        // var lists = document.querySelectorAll('a');
        // for (var i = 0; i < lists.length; i++) {
        //     lists[i].style.color = color;
        // }
        $('a').css('color', color);
    }
}
/* body.bookkeeper = 'duru'; 
    객체에 변수 추가하기
    변수에 공백이 있다면 body["data scientist"] 이런 식으로 쓴다.
    
    함수 추가하기
    body.showAll = function() {

    }
    
    */

function nightDayHandler(self) {
    var target = document.querySelector('body');

    if (self.value === 'night') {
        Body.setBackGroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('powderblue');
    } else {
        Body.setBackGroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('black');
    }
}