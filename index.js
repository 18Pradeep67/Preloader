document.getElementById("actual-content").style.display="none";
gsap.to("#logo", { duration: 1, y:-50, opacity: 100, ease: "power2.in" });
gsap.utils.toArray("#name span").forEach((span, index) => {
    gsap.to(span, { 
        duration: 0.5, 
        y: -50, 
        opacity: 1, 
        ease: "power2.inOut", 
        delay: 1 + index * 0.3,
        onComplete: () => {
            span.classList.add("word-animation");
            if (index === gsap.utils.toArray("#name span").length - 1) {
               setTimeout(showContent,2000);
            }
        }
    });
});
let a=document.getElementById("preload");
function showContent() {
    document.getElementById("actual-content").style.opacity = 1;
    gsap.to("#logo", { 
        duration: 0.5, 
        y: -500, 
        opacity: 1, 
        ease: "power2.inOut"
    });
    gsap.utils.toArray("#name span").forEach((span, index) => {
        gsap.to(span, { 
            duration: 0.5, 
            y: -1000, 
            opacity: 1, 
            ease: "power2.inOut"
        });
    });
    document.getElementById("actual-content").style.display="contents";
    // setTimeout(function() {
    //     window.location.href = "https://vitchennai.acm.org/";
    // }, 1000);
    gsap.to('body',{
        duration:2,
        y:"-100vh",
        opacity:1,
        ease:"power2.inOut"
    });

}

