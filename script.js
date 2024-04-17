/*
const likebtn = getElementById('likebtn');
const likeCount = getElementById('likeConut')

likebtn.addEventListener('click', () => changeClass(likebtn, likePath));
function likeOn(likebtn, likePath){
    if(likebtn.classList.contain('like-default')){
        likebtn.classList.remove('like-default');
        likebtn.classList.add('like-active');  
        likePath.setAttribute('d','M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z')
    }else{
        likebtn.classList.remove('like-active');
        likebtn.classList.add('like-default');
        likePath.setAttribute('d','M19.3 5.71002C18.841 5.24601 18.2943 4.87797 17.6917 4.62731C17.0891 4.37666 16.4426 4.2484 15.79 4.25002C15.1373 4.2484 14.4909 4.37666 13.8883 4.62731C13.2857 4.87797 12.739 5.24601 12.28 5.71002L12 6.00002L11.72 5.72001C10.7917 4.79182 9.53273 4.27037 8.22 4.27037C6.90726 4.27037 5.64829 4.79182 4.72 5.72001C3.80386 6.65466 3.29071 7.91125 3.29071 9.22002C3.29071 10.5288 3.80386 11.7854 4.72 12.72L11.49 19.51C11.6306 19.6505 11.8212 19.7294 12.02 19.7294C12.2187 19.7294 12.4094 19.6505 12.55 19.51L19.32 12.72C20.2365 11.7823 20.7479 10.5221 20.7442 9.21092C20.7405 7.89973 20.2218 6.64248 19.3 5.71002Z" fill="#000000')
    }
}

exports.getTestPost = functions.https.onRequest(async (req, res) => {
    const userId = req.query.userId;
    const postId = req.query.postId;
  
    const postRef = db.collection("testPosts").doc(postId);
    const likeSnapshot = await db
      .collection("testPosts")
      .doc(postId)
      .collection("likedUsers")
      .doc(userId)
      .get();
    const postSnapshot = await postRef.get();
    const post = postSnapshot.data();
  
    if (likeSnapshot.exists) {
      post.likeCheck = true;
    } else {
      post.likeCheck = false;
    }
  
    res.send(post);
  });
/*
$("#likebtn").click(async function () {
    let likeCount = $('#likeCount').val();

    let doc = {
        "likeCount": likeCount
    };
    await addDoc(collection(db, "isLiked"), doc);
    alert("좋아요");
    window.location.reload();
});



let docs = await getDocs(collection(db, "isLiked"));
docs.forEach((doc) => {
    let row = doc.data();

    let likeCount = row['likeCount'];

});
*/




/* 슬라이드 메뉴 */

$(document).ready(function () {

    $(".btn").click(function () {
        $("#menu,.page_cover,html").addClass("open");
        window.location.hash = "#open";
    });

    window.onhashchange = function () {
        if (location.hash != "#open") {
            $("#menu,.page_cover,html").removeClass("open");
        }
    };

});