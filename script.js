document.addEventListener('DOMContentLoaded', async() => {
 const { data } = await (await fetch('https://api.imgflip.com/get_memes')).json();
 console.log(data);
 const allphotos = data.memes;
 allphotos.forEach(photo => {
    let newA = document.createElement('a');
   //  newA.setAttribute('href', photo.url);
   //  newA.setAttribute('target', '_blank');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', photo.url);
    newImg.setAttribute('alt', photo.name);
    newImg.classList.add('thumbnail');
    newImg.id = photo.id;
    newA.appendChild(newImg)
    document.querySelector('#thumbnailsContainer').appendChild(newA);
 });
 const expandedImg = document.querySelector('#expandedImageContainer img');
 const thumbnailsContainer = document.querySelector('#thumbnailsContainer');
 thumbnailsContainer.addEventListener('click', ({target}) => {
   expandedImg.setAttribute('src', target.src);
   expandedImg.setAttribute('alt', target.alt);   
 })
})