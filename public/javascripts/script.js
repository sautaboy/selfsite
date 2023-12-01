
// Get the div element




let zindex = 0
setInterval(function () {
    let allImages = document.querySelectorAll(".sliding-image")
    zindex = zindex + 1

    var index = Math.floor(Math.random() * allImages.length)
    allImages[index].style.zIndex = zindex

    gsap.from(allImages[index],
        {
            y: "100%",
            duration: 2,
            opacity: 1,
        })
}, 10000)



document.querySelector("#find-me-on-map").addEventListener("mouseover", function () {
    document.querySelector("#find-me-on-map-text").classList.add("active")
})
document.querySelector("#find-me-on-map").addEventListener("mouseleave", function () {
    document.querySelector("#find-me-on-map-text").classList.remove("active")
})



document.querySelector("#cancel-google-map").addEventListener("click", function () {
    document.querySelector("#google-map").classList.remove("active")
})
document.querySelector("#find-me-on-map").addEventListener("click", function () {
    document.querySelector("#google-map").classList.add("active")
})

document.querySelector("#discord-button").addEventListener("click", function () {
    alert("sautaboy")
})