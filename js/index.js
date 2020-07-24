'use strict'
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuPageBody = document.querySelector('.menu-page__body');
const menuItems = document.querySelectorAll('.submenu-page__item');
const menuPageBurger = document.querySelector('.menu-page__burger');


let openNow =null;
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('menu_active');

});

function closeAllMenu(){
    menuItems.forEach((item,index,arr) =>{           
        if(item.classList.contains('_active')){
            item.classList.remove('_active');                
            openNow = index;
        }    
   })
}


menuPageBody.addEventListener('click', event => {
    event.preventDefault();
    
    console.log(event.target.dataset.item);  
    console.log(menuItems);
    if(event.target.dataset.item){

        closeAllMenu();
        if(openNow !== +event.target.dataset.item){
             menuItems[+event.target.dataset.item].classList.add('_active');      
        }
         else{            
            openNow= null;
         }
    }
    else{
        event.preventDefault();
        if(!event.target.classList.contains('submenu-page__item')){
          closeAllMenu();
          console.log('closed ',event.target)
        }
    }
})

menuPageBurger.addEventListener('click', event => {
        closeAllMenu();
        menuPageBurger.classList.toggle('_active');      
        menuPageBody.classList.toggle('_active');
        
})

