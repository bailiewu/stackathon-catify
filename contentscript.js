// console.log('lol')
// alert(document.title)

let images = document.getElementsByTagName('img')
for (let i = 0, l = images.length; i < l; i++) {
  images[i].src =
    'https://placekitten.com/' + images[i].width + '/' + images[i].height
}

// let all = document.querySelectorAll('body')

let doc = document.getElementsByTagName('*')
for (let i = 0; i < doc.length; i++) {
  doc.item(i).innerHTML = doc
    .item(i)
    .innerHTML.replace('Lorem', 'ASDKJNSAD')
    .replace('Where does it come from?', '2')
}

// console.log(all)
