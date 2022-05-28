//Animation HOMEPAGE
gsap.fromTo("header", {y:-50, opacity: 0},{y:0, opacity:1, ease:"power2.out", duration:2.5})
gsap.fromTo(".left h1", {x:-500, opacity: 0},{x:0, opacity:1, ease:"power2.out", duration:3})
gsap.fromTo(".left p", {x:-1000, opacity: 0},{x:0, opacity:1, ease:"power2.out", duration:3.5})
gsap.fromTo(".right img", {x:400, opacity:0}, {x:0, opacity:1, ease:"power3.out", duration:4})