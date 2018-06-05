// når brugeren trykker på menubutton:
//skift/toggle classen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises")
    $(".menubutton").on("click", trykPaaMenuButton);
}

function trykPaaMenuButton() {
    console.log("Tryk på menu button");
    $("nav").toggleClass("hidden");
    // skift kanppen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}
