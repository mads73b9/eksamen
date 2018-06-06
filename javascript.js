// når brugeren trykker på menubutton:
//skift/toggle classen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises")
    $(".container1").on("click", gaaTilTema1);
}

function gaaTilTema1() {
    console.log("Gå til Tema1");
    $("nav").toggleClass("hidden");
    // skift kanppen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}
