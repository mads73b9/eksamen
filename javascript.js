// når brugeren trykker på menubutton:
//skift/toggle classen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".logo").on("click", spinLogo);
}

function spinLogo() {
    console.log("Logo spinnes");
    $(".logo").toggleClass("spin");
}
