let button = document.querySelector('#dark-toggle');

button.addEventListener('click', ()=>{

  document.querySelector('body').classList.toggle('dark-mode');


  excluded=[".contact_btn-main"]

  excluded.forEach((element)=>{

  document.querySelector(element).classList.toggle('undo-invert');

  });
  document.querySelector('#dark-toggle>i').classList.toggle("fa-moon");
  document.querySelector('#dark-toggle>i').classList.toggle("fa-sun");

  
});

function setAnimation(file) {

console.log(file);
  document.querySelector("#animation-image").src = file;
  
}


service1=document.querySelector("#service1");
service2=document.querySelector("#service2");
service3=document.querySelector("#service3");
service4=document.querySelector("#service4");



service1.addEventListener("mouseover",()=>{setAnimation("./assets/images/web_design.gif")});
service2.addEventListener("mouseover",()=>{setAnimation("./assets/images/app_design.gif")});
service3.addEventListener("mouseover",()=>{setAnimation("./assets/images/marketing.gif")});
service4.addEventListener("mouseover",()=>{setAnimation("./assets/images/ui_design.gif")});

