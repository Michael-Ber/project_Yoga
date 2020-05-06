

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
       
    let hideTabContent = (a) => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }

    });
  
    //Timer

     let deadline = "2020-05-07:Z+8";

     let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor(((t/1000) % 60)),
            minutes = Math.floor(((t/1000/60) % 60)),
            hours = Math.floor(((t/1000/60/60)));
   
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
     };
   
     let setTimer = (id, endtime) => {
        let timeId = document.getElementById(id),
            hours = timeId.querySelector('.hours'),
            minutes = timeId.querySelector('.minutes'),
            seconds = timeId.querySelector('.seconds'),
            timerInterval = setInterval(updateTimer, 1000);
  
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            let addZero = (num) => {
                if(num <= 9){
                    return "0" + num;
                }return num;
            };
            
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
                
            if(t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timerInterval);
            }
                      
        }
     };
   
    setTimer('timer', deadline);
    

    //Modal window

    let callModal = (className) => {
        let moreBtn = document.querySelectorAll(className),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        
    
    
        for(let i = 0; i < moreBtn.length; i++) {
            moreBtn[i].addEventListener('click', () => {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
            close.addEventListener('click', () => {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                moreBtn[i].classList.remove('more-splash');
                }); 
        }
        
    }
    
    callModal('.more');   
    callModal('.description-btn');
    
  
});

