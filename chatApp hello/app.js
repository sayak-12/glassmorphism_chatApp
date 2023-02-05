const navbar = document.querySelector(".nav");
navbar.addEventListener("mousemove", (e)=>{
    const percent = (e.clientX/navbar.offsetWidth)*100;
    const basestartpercent = 40,
    baseendpercent = 60,
    startpercent = percent -20,
    endpercent = percent + 20;
    navbar.style.setProperty("--startperc", startpercent + "%");
    navbar.style.setProperty("--endperc", endpercent + "%");

})
const cover = document.querySelector(".coverdiv");
cover.addEventListener("mousemove", (e)=>{
    const percx = (e.clientX/cover.offsetWidth)*100;
    const percy = (e.clientY/cover.offsetHeight)*100;
    cover.style.setProperty("--percx", percx+ "%");
    cover.style.setProperty("--percy", percy+ "%");
})
const userbtn = document.querySelectorAll(".signbtn")
window.onresize =()=>{
    if (window.innerWidth <= 1150) {
        userbtn.forEach((userbtn)=>{
            userbtn.classList.add("active");
        })
        document.querySelector(".signin").style.display = "none";
        document.querySelector(".signup").style.display = "none";
        document.querySelectorAll(".menuitem").forEach((item)=>{
            item.style.display = "none";
        })

    }
    else{
        userbtn.forEach((userbtn)=>{
            userbtn.classList.remove("active");
        })
        document.querySelector(".signin").style.display = "flex";
        document.querySelector(".signup").style.display = "flex";
        document.querySelectorAll(".menuitem").forEach((item)=>{
            item.style.display = "flex";
        })

    }
}