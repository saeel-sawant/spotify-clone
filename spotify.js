let songIndex=0;
let audioElement=new Audio('songs/1.mp3')

let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitems'));
let songitemplay=Array.from(document.getElementsByClassName('songItemPlay'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"Warriyo-Mortals" , filePath:'songs/1.mp3', coverPath:'covers/1.jpg' },
    {songName:"Ciena-Huna Huna" , filePath:'songs/2.mp3', coverPath:'covers/2.jpg' },
    {songName:"Deaf Cave-Invincible" , filePath:'songs/3mp3', coverPath:'covers/3.jpg' },
    {songName:"Different Heavens-My Heart" , filePath:'songs/4.mp3', coverPath:'covers/4.jpg' },
    {songName:"Jnji Heroes Tonight-NCS" , filePath:'songs/5.mp3', coverPath:'covers/5.jpg' },
    {songName:"Daam-Sage" , filePath:'songs/6.mp3', coverPath:'covers/6.jpg' },
];
songitems.forEach((element,i)=>{
// console.log(element,i);
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})

songitemplay.forEach((element)=>{
element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlay();
masterSongName.innerText=songs[songIndex].songName;
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity=1;

})
})

const makeAllPlay=()=>{
    songitemplay.forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
       
    })   
};

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=6){
    songIndex=0;

}else{
   songIndex+=1;
}
audioElement.src=`songs/${songIndex}.mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    
    }else{
       songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
    
    