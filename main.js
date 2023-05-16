const logo = document.getElementById("logo");
const mainscreen = document.getElementById("mainscreen");
logo.addEventListener("click",()=>{
    mainscreen.scrollIntoView({behavior:"smooth"});
})
const hamburgernav = document.getElementById("hamburgernav");
const knife = document.getElementById("knife");
const spoon = document.getElementById("spoon");
const fork = document.getElementById("fork");
const hamburgerlinks = document.getElementById("hamburgerlinks");
const body = document.body;
const blur = document.querySelector("#blur");

hamburgernav.addEventListener("click",()=>{
    if(hamburgernav.classList.contains("clicked")){
        hamburgernav.classList.remove("clicked");
        hamburgernav.classList.add("unclicked");
        blur.style.display = "none";
    }
    else{
        hamburgernav.classList.remove("unclicked");
        hamburgernav.classList.add("clicked");
        blur.style.display = "block";
    }
    hamburgerlinks.classList.toggle("hidden");
    body.classList.toggle("scrolllock");
})


let observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("appear")
    }
  })
  
},{threshold:0.6});

document.querySelectorAll("p").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("h1").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("h2").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("button").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("img").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("label").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("input").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll(".offer").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("textarea").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll(".buttonlink").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("span").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("aside").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("video").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("#videocaption").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll("h3").forEach(entry=>{
  observer.observe(entry);
})
document.querySelectorAll(".container").forEach(entry=>{
  observer.observe(entry);
})
observer.unobserve(document.querySelector("#spoon"))
document.querySelector("#spoon").classList.remove("appear")

let menuObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("appear")
      
    }
  })
  
},{threshold:0.01});

const menu = document.querySelector("#menu");
if(menu != null){
  menuObserver.observe(menu);
}
document.querySelectorAll("form").forEach(entry=>{
  menuObserver.observe(entry);
})
document.querySelectorAll("#map").forEach(entry=>{
  menuObserver.observe(entry);
})

