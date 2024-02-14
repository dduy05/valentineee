
var letterContent = " Chúc mừng ngày Lễ tình nhân nhé. Chúc em bé của anh luôn vui vẻ, hạnh phúc và mãi là cô bé đáng yêu của anh.Cảm ơn tình yêu em dành cho anh, anh đang rất nhớ em, nhớ đến cồn cào. Anh ước mình có đôi cánh để có thể bay đến bên em, ôm em thật chặt. Chúc honey của anh ngày Valentine hạnh phúc. Anh hi vọng khoảng cách này sẽ mau chóng kết thúc để chúng ta có thể gặp nhauu. iu em"
durationWrite = 48
function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})