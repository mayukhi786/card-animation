const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const tomato = document.querySelector(".tomato img");
const buttons = document.querySelector(".buttons");
const sus = document.querySelector(".sus button");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    tomato.style.transform = 'translateZ(100px)';
    buttons.style.transform = 'translateZ(150px)';
    sus.style.transform = 'translateZ(150px)';
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    title.style.transform = 'translateZ(0px)';
    tomato.style.transform = 'translateZ(0px) rotateZ(0deg)';
    buttons.style.transform = 'translateZ(0px)';
    sus.style.transform = 'translateZ(0px)';
})