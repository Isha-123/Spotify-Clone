
console.log("welcome to spotify");
let songIndex=0;
let play=document.getElementById('play');
let audioElement=new Audio('song1.mp3');
let myProgressBar=document.getElementById(' myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=
[  
    {songName:"Kesariya",filePath:"song1.mp3"},
    {songName:"Shape of you",filePath:"song2.mp3"},
    {songName:"Agar tum sath ho",filePath:"song3.mp3"},
    {songName:"Tu Mileya",filePath:"\song4.mp3"},
    {songName:"Lari chhoti",filePath:"song5.mp3"},
    {songName:"Pasoori",filepath:"song1.mp3"},
    {songName:"let me slow down",filePath:"song1.mp3"},
]
songItems.forEach((element,i)=>{
    
    
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-solid fa-play');
        play.classList.add('fa-solid fa-pause');
        
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-solid fa-pause');
        play.classList.add('fa-solid fa-play');
        

    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-solid fa-pause');
    element.classList.add('fa-solid fa-play');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-solid fa-play');
        e.target.classList.add('fa-solid fa-pause');
        audioElement.src='songs/${songIndex+1}.mp3';
        
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-solid fa-play');
        play.classList.add('fa-solid fa-pause');

    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>8){
        songIndex=0;
    
}
else{
    songIndex+=1;
}
audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-solid fa-play');
        play.classList.add('fa-solid fa-pause');


}
)
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    
}
else{
    songIndex-=1;
}
audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-solid fa-play');
        play.classList.add('fa-solid fa-pause');


}
)

