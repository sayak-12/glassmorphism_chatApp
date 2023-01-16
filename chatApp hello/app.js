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