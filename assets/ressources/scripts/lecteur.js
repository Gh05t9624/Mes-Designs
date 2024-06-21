let videoList = document.querySelectorAll('.videos .video');

videoList.forEach(vid =>{
    vid.onclick = () =>{
       videoList.forEach(remove =>{remove.classList.remove('active')});
       vid.classList.add('active');
       let src = vid.querySelector('.list-video').src;
       let title = vid.querySelector('.title').innerHTML;
       document.querySelector('.container-video .main-video').src = src;
       document.querySelector('.container-video .main-video').play();
       document.querySelector('.container-video .title').innerHTML = title;
    };
 });