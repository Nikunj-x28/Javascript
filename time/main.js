const clock= document.getElementById("clock");
document.getElementById("start").onclick=function(){
    setInterval(currentTime,1000);
    function currentTime(){
          let date = new Date();
          clock.innerHTML= formatTime(date);  
    }
    function formatTime(time){
        let hr=('0'+time.getHours()).slice(-2);
        let mnt=('0'+time.getMinutes()).slice(-2);
        let sec=('0'+time.getSeconds()).slice(-2);
        return `${hr}:${mnt}:${sec}`;
    }
}
const stopWatch= document.getElementById("stopWatch");
let id = null;
document.getElementById("WatchButton").onclick=function(){
    if(id == null){
        document.getElementById("WatchButton").innerHTML="Stop";
        id = setInterval(countTime,10);
        let ms = 0;
        let mnt=0,sec=0;
        function countTime(){
            ms+=10;
            if(ms==1000){
                ms=0;
                sec+=1;
            }
            if(sec==60){
                sec=0;
                mnt+=1;
            }
            let minute=('0'+mnt).slice(-2);
            let seconds=('0'+sec).slice(-2);
            let millisec=('00'+ms).slice(-3);
            stopWatch.innerHTML=`${minute}:${seconds}:${millisec}`;
        }
    }
    else{
        document.getElementById("WatchButton").innerHTML="Start";
        clearInterval(id);
        id=null;
    }
}

