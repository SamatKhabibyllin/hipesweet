//questions acco

var questItem = document.querySelectorAll('.questions__item');
var questTitle = document.querySelectorAll('.questions__item__title');
var questText = document.querySelectorAll('.questions__item__text');



questTitle[0].addEventListener('click', function(){
    questTitle[0].classList.toggle('questions__item__title--active');
    questItem[0].classList.toggle('questions__item--active');
    questText[0].classList.toggle('questions__item__text--active');
    
    questTitle[1].classList.remove('questions__item__title--active');
    questItem[1].classList.remove('questions__item--active');
    questText[1].classList.remove('questions__item__text--active');
    
    questTitle[2].classList.remove('questions__item__title--active');
    questItem[2].classList.remove('questions__item--active');
    questText[2].classList.remove('questions__item__text--active');
    
    questTitle[3].classList.remove('questions__item__title--active');
    questItem[3].classList.remove('questions__item--active');
    questText[3].classList.remove('questions__item__text--active');
});

questTitle[1].addEventListener('click', function(){
    questTitle[1].classList.toggle('questions__item__title--active');
    questItem[1].classList.toggle('questions__item--active');
    questText[1].classList.toggle('questions__item__text--active');
    
    questTitle[0].classList.remove('questions__item__title--active');
    questItem[0].classList.remove('questions__item--active');
    questText[0].classList.remove('questions__item__text--active');
    
    questTitle[2].classList.remove('questions__item__title--active');
    questItem[2].classList.remove('questions__item--active');
    questText[2].classList.remove('questions__item__text--active');
    
    questTitle[3].classList.remove('questions__item__title--active');
    questItem[3].classList.remove('questions__item--active');
    questText[3].classList.remove('questions__item__text--active');
});

questTitle[2].addEventListener('click', function(){
    questTitle[2].classList.toggle('questions__item__title--active');
    questItem[2].classList.toggle('questions__item--active');
    questText[2].classList.toggle('questions__item__text--active');
    
    questTitle[0].classList.remove('questions__item__title--active');
    questItem[0].classList.remove('questions__item--active');
    questText[0].classList.remove('questions__item__text--active');
    
    questTitle[1].classList.remove('questions__item__title--active');
    questItem[1].classList.remove('questions__item--active');
    questText[1].classList.remove('questions__item__text--active');
    
    questTitle[3].classList.remove('questions__item__title--active');
    questItem[3].classList.remove('questions__item--active');
    questText[3].classList.remove('questions__item__text--active');
});

questTitle[3].addEventListener('click', function(){
    questTitle[3].classList.toggle('questions__item__title--active');
    questItem[3].classList.toggle('questions__item--active');
    questText[3].classList.toggle('questions__item__text--active');
    
    questTitle[0].classList.remove('questions__item__title--active');
    questItem[0].classList.remove('questions__item--active');
    questText[0].classList.remove('questions__item__text--active');
    
    questTitle[1].classList.remove('questions__item__title--active');
    questItem[1].classList.remove('questions__item--active');
    questText[1].classList.remove('questions__item__text--active');
    
    questTitle[2].classList.remove('questions__item__title--active');
    questItem[2].classList.remove('questions__item--active');
    questText[2].classList.remove('questions__item__text--active');
});