$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".logo").on("click", spinLogo);
}

function spinLogo() {
    console.log("Logo spinnes");
    $(".logo").toggleClass("spin");
}
