

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
       
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
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

     let deadline = "2020-05-04:Z+8";

     function getTimeRemaining(endtime) {
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
     }
   
     function setTimer(id, endtime) {
        let timeId = document.getElementById(id),
            hours = timeId.querySelector('.hours'),
            minutes = timeId.querySelector('.minutes'),
            seconds = timeId.querySelector('.seconds'),
            timerInterval = setInterval(updateTimer, 1000);
  
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            
            if(t.total > 0) {
                
                if(t.hours < 10) {hours.textContent = "0" + t.hours;}else {hours.textContent = t.hours;}
                if(t.minutes < 10) {minutes.textContent = "0" + t.minutes;}else{minutes.textContent = t.minutes;}
                if(t.seconds < 10) {seconds.textContent = "0" + t.seconds;}else{seconds.textContent = t.seconds;}
                
            }else {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timerInterval);
            }
                      
        }
     }
   
    setTimer('timer', deadline);
    // let obj = {
    //     'total' : "1",
    //     'hours' : "2",
    //     'minutes' : "3",
    //     'seconds' : "4"
    // };
    // console.log(Object.values(obj)[0] + "0");
});

