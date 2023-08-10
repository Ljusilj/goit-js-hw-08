import VimeoPlayer  from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log("player", VimeoPlayer)



const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);


player.on('timeupdate', throttle(onTime, 1000));

function onTime(data) {
    let currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
        player.setCurrentTime(parseFloat(savedTime))
            .then(function(seconds) {
               
            })
            .catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                        
                        break;

                    default:
                        
                        break;
                }
            });
    }
});




























   
    
    
    

    



    
