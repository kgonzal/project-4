//jshint esversion: 6

let controller = function() {
  if (localStorage.getItem("commentsList")) {
    $(".comments").html(localStorage.getItem("commentsList"));
  }

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //log the list of paragraph elements
      localStorage.setItem("commentsList", $(".comments").html());
      console.log(localStorage.getItem("commentsList"));
      console.log($(".comments").html());
    }
  };

  //log the list of paragraph elements

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

let deleteHandler = () => {
  console.log("dh");
  localStorage.removeItem("commentsList");
  window.location.reload();
};

$(document).ready(() => {
  console.log("ready");
  let buttonElem = document.querySelectorAll("button")[1];
  buttonElem.addEventListener("click", deleteHandler);
  controller();
});

$(document).ready(controller);

/*
if ($(".localstorage.setItem").val() !== "") {
  $(".comments").html(localStorage.getItem("toDoList"));
} else {
  ($(".localstorage.setItem" = ".toDoList").val("");
}
$(".return null");
*/

/*
for(let key in localStorage) {
  if ($(".comments").html(localStorage.getItem("toDoList"));
} else {
  return != $(".null"));
};
});
*/
