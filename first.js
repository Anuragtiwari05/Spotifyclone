console.log("welcome to spotify");

//intialize the variable

let songIndex = 0;
let audioElement = new Audio('ddljtujhe.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogress = document.getElementById('myprogress');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName : "koi mil gya" , filePath :"song1.mp3" },
    { songName : "bole chudiyan" , filePath :"song2.mp3" },
    { songName : "tujhe dekha" , filePath :"song3.mp3" },
    { songName : "kabhi alvida " , filePath :"song4.mp3" },
    { songName : "kal ho na ho" , filePath :"song5.mp3" },
    { songName : "sajdaa" , filePath :"song6.mp3" },
    { songName : "Do pal" , filePath :"song7.mp3" },
]

songitem.forEach((element,i)=>{
    
   
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();
//play/pause
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
}
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{

progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

myprogress.value = progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime = myprogress.value*audioElement.duration/100;
})

const makeAllPlays =() =>{
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e) =>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',() =>{
    if(songIndex>=7){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
  audioElement.src = `song${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click',() =>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
  audioElement.src = `song${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

})