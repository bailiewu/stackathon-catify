// console.log('lol')
// alert(document.title)

let images = document.getElementsByTagName('img')
for (let i = 0, l = images.length; i < l; i++) {
  images[i].src =
    'https://placekitten.com/' + images[i].width + '/' + images[i].height
}
