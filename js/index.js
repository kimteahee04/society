// $(".icon").on("click", function () {
//   $("header ul").toggleClass("on");

//   $(".icon").css({ "z-index": "10" });
// });

// $(".icon a").on("click", function (e) {
//   e.preventDefault();
//   $("header ul").toggleClass("on");
// });
$(function () {
  $(".icon").on("click", function (e) {
    e.preventDefault();

    console.log("클릭!");

    $("header ul").toggleClass("on");
  });
});