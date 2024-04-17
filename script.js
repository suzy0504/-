/* 좋아요 toggle */
function like() {
    const likebtn = document.getElementById('likebtn');
    const likePath = likebtn.getElementsByTagName('path')[0];

    const likeCount = document.getElementById("likeCount");
    let num = likeCount.innerText; //화면에 표시된 좋아요 값

    console.log("Like Button Clicked.")


    if (likebtn.classList.contains('like-default')) {
        likebtn.classList.remove('like-default');
        likebtn.classList.add('like-active');
        likePath.setAttribute('fill', '#ffffff');
        likePath.setAttribute('stroke', '#000000');

        /* 좋아요 카운트 취소 */
        num = Math.floor(num) - 1;
        likeCount.innerText = num;

    } else {
        likebtn.classList.remove('like-active');
        likebtn.classList.add('like-default');
        likePath.setAttribute('fill', 'rgb(217,57,73)');
        likePath.setAttribute('stroke', 'rgb(217,57,73)');

        /* 좋아요 카운트 누적 */
        num = Math.floor(num) + 1;
        likeCount.innerText = num;
    }
}





/* 슬라이드 메뉴 */
$(document).ready(function () {

    $(".btn-top").click(function () {
        $("#menu,.page_cover,html").addClass("open");
        window.location.hash = "#open";
    });

    window.onhashchange = function () {
        if (location.hash != "#open") {
            $("#menu,.page_cover,html").removeClass("open");
        }
    };

});