let mtl = gsap.timeline()
let counter = 0;
let countertext = document.querySelector(".prenub")
let mousefollower = document.querySelector(".mousefollower")
let mouseint = document.querySelectorAll(".mouseentering")
let clutter = "";
const yValues = ["-100%", "-800%", "-900%", "-800%"];

function locomotiveScrollf(){
    const locomotiveScroll = new LocomotiveScroll();
}

function mouseFollower(){
    document.body.addEventListener("mousemove",function(dets){
        gsap.to(mousefollower,{
            left:dets.clientX,
            top:dets.clientY,
            ease:"cubic-bezier(0.5, 0, 0.75, 0)",
            duration:0.3,
        })
    })
    mouseint.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(mousefollower,{
                scale:0.5,
            })
        })
    
        elem.addEventListener("mouseleave",function(){
            gsap.to(mousefollower,{
               scale:1,
            })
        })
    })

}


function preloader(){
    mtl.to(".preloaderbox",{
        y:"-130%",
        duration:3,
        delay:1.1,
    })
    
    setInterval(function(){
        if(counter < 100){
            counter++
        }
        countertext.textContent = counter
    },20)
    

}

function m_page1(){
    mtl.from(".m-page1 .heading h2",{
        y:"100%",
        duration:1,
        stagger:0.5,
    },"-=0.5")
    mtl.from("html,body",{
        overflow:"hidden",
    })

    mtl.from(".m-header p",{
        y:"-100%",
        duration:0.8,
        opacity:0,
        ease:"cubic-bezier(0.5, 0, 0.75, 0)",
        
    },"a")
    mtl.from(".m-imgbox",{
        opacity:0,
        duration:0.8,
    },"a")
    
    let page1tl = gsap.timeline({
        scrollTrigger:{
            trigger:".m-page1",
            scroller:"body",
            start:"18% 10%",
            end:"25% 10%",
            scrub:5,
            
        }
    })
    
    page1tl.from(".m-imgbox>img",{
        scale:2.3,
        duration:0.1,
        ease:"cubic-bezier(0.5, 0, 0.75, 0)",
       
    },"frsame")
    
    page1tl.from(".m-imgbox2>img",{
        scale:2.3,
        duration:0.1,
        ease:"cubic-bezier(0.5, 0, 0.75, 0)",
        x:"-30%",
    },"frsame")
}


function m_page2(){
    for(i = 0; i<10; i++){
        clutter += `<span class="nospan">${i}</span>`
    }
   
    document.querySelectorAll(".m-left .number").forEach(function(items){
        items.innerHTML = clutter
    })
    
    
    
    yValues.forEach((yValue, index) => {
        gsap.to(`.m-page2 .number:nth-child(${index + 1}) span`, {
            y: yValue,
            duration:2,
            ease:"cubic-bezier(0.5, 0, 0.75, 0)",
            scrollTrigger: {
                trigger: ".m-page2 .number:first-child span",
                scroller: "body",
                start: "-70% 50%",
                end: "top 90%",
           
            }
        });
    });
    
    gsap.to(".m-page2", {
        scrollTrigger: {
            trigger: ".m-intro-l>span",
            scroller: "body",
            start: "top 50%",
            end: "90% 50%",
            scrub: 5,
            pin: true,
        }
    });
    
}


function m_page5(){

    
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".m-page5",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 10,
        stagger:.2,
    }
});


tl.to(".maskdiv", {
    '--clipw': "15%",
    duration: 0.8
})
.to(".maskdiv", {
    '--clipx': '53%',
    '--clipy': '75%',
    duration: 0.8,
    start: "top 100%"
})
.to(".maskdiv", {
    '--clipx': '28%',
    '--clipy': '75%',
    duration: 0.8
})
.to(".maskdiv", {
    '--clipx': '55%',
    '--clipy': '75%',
    duration: 0.8
})
.to(".maskdiv", {
    '--clipw': "10%",
    '--clipx': '46%',
    '--clipy': '49%',
    duration: 0.8
})
.to(".maskdiv", {
    '--clipw': "12%",
    '--clipx': '15%',
    '--clipy': '72%',
    duration: 0.8
})
.to(".maskdiv", {
    '--clipw': "100%",
    '--clipx': '50%',
    '--clipy': '50%',
    duration: 0.8
});


}

function m_page6(){
    gsap.to(".m-page6", {
        scrollTrigger: {
            trigger: ".m-intro-l>span",
            scroller: "body",
            start: "top 50%",
            end: "105% 50%",
            scrub: 5,
            pin: true,
        }
    });
    gsap.from(".m-page6 .heading h2",{
        y:"100%",
        duration:0.5,
        stagger:0.5,
        scrollTrigger:{
            trigger:".m-page6",
            start:"-10% top",
            end:"5% top",
        }
    })
    gsap.to(".m-painting img",{
        scale:"2",
        duration:0.5,
        scrollTrigger:{
            trigger:".m-page6",
            start:"32% top",
            end:"bottom top",
            scrub:2,
        }
    })
}

function m_page7(){
    gsap.from(".m-page7 .heading h2",{
        y:"100%",
        duration:0.5,
        stagger:0.5,
        scrollTrigger:{
            trigger:".m-page7",
            start:"-40% top",
            end:"top top",
            
        }
    })

    gsap.to(".m-page7", {
        scrollTrigger: {
            trigger: ".m-intro-l>span",
            scroller: "body",
            start: "top 50%",
            end: "65% 50%",
            scrub: 5,
            pin: true,
        }
    });

}

function m_page8(){
    gsap.from(".m-page8 .heading h2",{
        y:"100%",
        duration:0.5,
        stagger:0.5,
        scrollTrigger:{
            trigger:".m-page8",
            start:"-40% top",
            end:"top top",
   
        }
    })

    gsap.to(".m-page8", {
        scrollTrigger: {
            trigger: ".m-intro-l>span",
            scroller: "body",
            start: "top 50%",
            end: "70% 50%",
            scrub: 5,
            pin: true,
           
        }
    });

}

footertl = gsap.timeline({
    scrollTrigger:{
        trigger:".m-page8",
        start:"80% top",
        end:"bottom top",
        scrub:3,
        markers:true,
    }
})
footertl.to(".m-imgfooterbox",{
    '--footerclip1':"58%",
    '--footerclip2':"58%",
    '--footerclip3':"42%",
    '--footerclip4':"42%",
    duration:0.3,
},"d")
footertl.to(".m-imgfooterbox img",{
    scale:"1.5",
    duration:0.3,
},"d")




locomotiveScrollf()
mouseFollower()
preloader()
m_page1()
m_page2()
m_page5()
m_page6()
m_page7()
m_page8()