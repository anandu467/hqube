let button = document.querySelector('#dark-toggle');

button.addEventListener('click', ()=>{

  document.documentElement.classList.toggle('dark-mode');


  excluded=[".contact_btn-main"]

  excluded.forEach((element)=>{

  document.querySelector(element).classList.toggle('undo-invert');

  });
  document.querySelector('#dark-toggle>i').classList.toggle("fa-moon");
  document.querySelector('#dark-toggle>i').classList.toggle("fa-lightbulb");

  
});