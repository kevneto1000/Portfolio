$(document).ready(function () {
    $("h3")
    new Typed("#animate", {
        strings: ["I am a frontend developer with adequate knowledge of HTML, CSS, Javascript and jQuery", "reach out to me on", "+2347015796524"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    })

    $(".fa-caret-down").click(function(){
        $(".side").show();
    })

    $(".fa-xmark").click(function(){
        $(".side").css("display", "none");
    })
});

AOS.init()