// console.log('lol')
// alert(document.title)
const findAndReplaceDOMText = require(findAndReplaceDOMText)

let images = document.getElementsByTagName('img')
for (let i = 0, l = images.length; i < l; i++) {
  images[i].src =
    'https://placekitten.com/' + images[i].width + '/' + images[i].height
}

// let all = document.querySelectorAll('body')

// let doc = document.getElementsByTagName('*')
let doc = document.body

// for (let i = 0; i < doc.length; i++) {
// console.log(doc.item(i))
// doc.item(i).textContent = doc
//   .item(i)
//   .textContent // .replace('Lorem', 'ASDKJNSAD')
//   // .replace('Where does it come from?', '2')
//   .replace(/'/, '')
//   .replace(/BECAUSE/, 'CUZ')
//   .replace(/CAN I/, 'I CAN')
//   .replace(/HAVE/, 'HAS')
//   .replace(/ A/, '')
//   .replace(/IS/, 'IZ')
//   .replace(/ IT/, '')
//   .replace(/LIKE/, 'LIEK')
//   .replace(/SE/, 'Z')
//   .replace(/OO/, 'U')
//   .replace(/THAT/, 'TAHT')
//   .replace(/AID /, 'ED ')
//   .replace(/TO/, '2')
//   .replace(/YOU/, 'U')
//   .replace(/OF/, 'OV')
//   .replace(/ITS/, 'IZ')
//   .replace(/COULD/, 'CUD')
//   .replace(/OVE/, 'UV')
//   .replace(/KNOW/, 'KNOE')
//   .replace(/COMMUNICATE/, 'SPEEK')
//   .replace(/SPEAK/, 'SPEEK')
//   .replace(/TH /, 'F ')
//   .replace(/JUST/, 'JUS')
//   .replace(/WANT/, 'WANTS')
//   .replace(/NEED/, 'NEEDS')
//   .replace(/GIVE/, 'GIV')
//   .replace(/MY/, 'MAH')
//   .replace(/THE/, 'TEH')
//   .replace(/OTHER/, 'OTHR')
//   .replace(/WHO/, 'HOO')
//   .replace(/PLEASE/, 'PLZ')
//   .replace(/KITTY/, 'KITTEH')
//   .replace(/BABY/, 'BAYBEH')
//   .replace(/ATE/, 'EATED')
//   .replace(/HAPPY/, 'HAPPEE')
//   .replace(/NOTHING/, 'NOTHIN')
//   .replace(/ING /, 'N ')
//   .replace(/!/, '!!1')
//   .replace(/UM /, 'AM')
//   .replace(/TION /, 'SHUN')
//   .replace(/CIOUS /, 'SHUS')
//   .replace(/BOARD /, 'BORD')
//   .replace(/BORED/, 'BORD')
//   .replace(/LE /, 'L ')
//   .replace(/THING/, 'TING')
//   .replace(/ELP /, 'ALP ')
//   .replace(/FOR/, '4')
//   .replace(/E /, 'ES ')
//   .replace(/CS /, 'X ')
//   .replace(/AM/, 'ARE')
//   .replace(/AND/, 'N')
//   .replace(/HI/, 'HAI')
//   .replace(/UFF /, 'UFS ')
//   .replace(/BYE/, 'KTHXBYE')
//   .replace(/MONDAY/, 'CATURDAY')
//   .replace(/TUESDAY/, 'CATURDAY')
//   .replace(/WEDNESDAY/, 'CATURDAY')
//   .replace(/THURSDAY/, 'CATURDAY')
//   .replace(/FRIDAY/, 'CATURDAY')
//   .replace(/SATURDAY/, 'CATURDAY')
//   .replace(/SUNDAY/, 'CATURDAY')
//   .replace(/BOY/, 'BOI')
//   .replace(/ALS /, 'ULZ ')
//   .replace(/IE/, 'EE')
//   .replace(/REALLY/, 'RLY')
//   .replace(/ACK/, 'AK')
//   .replace(/PHY /, 'FEE')
//   .replace(/GIRL/, 'GURL')
//   .replace(/ER /, 'AH ')
//   .replace(/WORDS/, 'WURDS')
// }

// console.log(all)

//   inLolcat = inLolcat.replace(/'/, "");
//   inLolcat = inLolcat.replace(/BECAUSE/, "CUZ");
//   inLolcat = inLolcat.replace(/CAN I/, "I CAN");
//   inLolcat = inLolcat.replace(/HAVE/, "HAS");
//   inLolcat = inLolcat.replace(/ A/, "");
//   inLolcat = inLolcat.replace(/IS/, "IZ");
//   inLolcat = inLolcat.replace(/ IT/, "");
//   inLolcat = inLolcat.replace(/LIKE/, "LIEK")
//   inLolcat = inLolcat.replace(/SE/, "Z");
//   inLolcat = inLolcat.replace(/OO/, "U");
//   inLolcat = inLolcat.replace(/THAT/, "TAHT");
//   inLolcat = inLolcat.replace(/AID /, "ED ")
//   inLolcat = inLolcat.replace(/TO/, "2");
//   inLolcat = inLolcat.replace(/YOU/, "U");
//   inLolcat = inLolcat.replace(/OF/, "OV");
//   inLolcat = inLolcat.replace(/ITS/, "IZ");
//   inLolcat = inLolcat.replace(/COULD/, "CUD");
//   inLolcat = inLolcat.replace(/OVE/, "UV");
//   inLolcat = inLolcat.replace(/KNOW/, "KNOE");
//   inLolcat = inLolcat.replace(/COMMUNICATE/, "SPEEK");
//   inLolcat = inLolcat.replace(/SPEAK/, "SPEEK");
//   inLolcat = inLolcat.replace(/TH /, "F ");
//   inLolcat = inLolcat.replace(/JUST/, "JUS");
//   inLolcat = inLolcat.replace(/WANT/, "WANTS");
//   inLolcat = inLolcat.replace(/NEED/, "NEEDS");
//   inLolcat = inLolcat.replace(/GIVE/, "GIV");
//   inLolcat = inLolcat.replace(/MY/, "MAH");
//   inLolcat = inLolcat.replace(/THE/, "TEH");
//   inLolcat = inLolcat.replace(/OTHER/, "OTHR");
//   inLolcat = inLolcat.replace(/WHO/, "HOO");
//   /*
//       The translations from here down are by Eytukan (Txeptirea)
//   */
//  inLolcat = inLolcat.replace(/PLEASE/, "PLZ");
//  inLolcat = inLolcat.replace(/KITTY/, "KITTEH");
//  inLolcat = inLolcat.replace(/BABY/, "BAYBEH");
//  inLolcat = inLolcat.replace(/ATE/, "EATED");
//  inLolcat = inLolcat.replace(/HAPPY/, "HAPPEE");
//  inLolcat = inLolcat.replace(/NOTHING/, "NOTHIN");
//  inLolcat = inLolcat.replace(/ING /, "N ");
//  inLolcat = inLolcat.replace(/!/, "!!1");
//  inLolcat = inLolcat.replace(/UM /, "AM");
//  inLolcat = inLolcat.replace(/TION /, "SHUN");
//  inLolcat = inLolcat.replace(/CIOUS /, "SHUS");
//  inLolcat = inLolcat.replace(/BOARD /, "BORD");
//  inLolcat = inLolcat.replace(/BORED/, "BORD");
//  inLolcat = inLolcat.replace(/LE /, "L ");
//  inLolcat = inLolcat.replace(/THING/, "TING");
//  inLolcat = inLolcat.replace(/ELP /, "ALP ");
//  inLolcat = inLolcat.replace(/FOR/, "4");
//  inLolcat = inLolcat.replace(/E /, "ES ");
//  inLolcat = inLolcat.replace(/CS /, "X ");
//  inLolcat = inLolcat.replace(/AM/, "ARE");
//  inLolcat = inLolcat.replace(/AND/, "N");
//  inLolcat = inLolcat.replace(/HI/, "HAI");
//  inLolcat = inLolcat.replace(/UFF /, "UFS ");
//  inLolcat = inLolcat.replace(/BYE/, "KTHXBYE");
//  inLolcat = inLolcat.replace(/MONDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/TUESDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/WEDNESDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/THURSDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/FRIDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/SATURDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/SUNDAY/, "CATURDAY");
//  inLolcat = inLolcat.replace(/BOY/, "BOI");
//  inLolcat = inLolcat.replace(/ALS /, "ULZ ");
//  inLolcat = inLolcat.replace(/IE/, "EE");
//  inLolcat = inLolcat.replace(/REALLY/, "RLY");
//  inLolcat = inLolcat.replace(/ACK/, "AK");
//  inLolcat = inLolcat.replace(/PHY /, "FEE");
//  inLolcat = inLolcat.replace(/GIRL/, "GURL");
//  inLolcat = inLolcat.replace(/ER /, "AH ");
//  inLolcat = inLolcat.replace(/WORDS/, "WURDS");

let lolLibrary = [
  { find: "/'/g", replace: '' },
  { find: '/BECAUSE/g', replace: 'CUZ' },
  { find: '/CAN I/g', replace: 'I CAN' },
  { find: '/HAVE/g', replace: 'HAS' },
  { find: '/ A/g', replace: '' },
  { find: '/IS/g', replace: 'IZ' },
  { find: '/ IT/g', replace: '' },
  { find: '/LIKE/g', replace: 'LIEK' },
  { find: '/SE/g', replace: 'Z' },
  { find: '/OO/g', replace: 'U' },
  { find: '/THAT/g', replace: 'TAHT' },
  { find: '/AID /g', replace: 'ED ' },
  { find: '/TO/g', replace: '2' },
  { find: '/YOU/g', replace: 'U' },
  { find: '/OF/g', replace: 'OV' },
  { find: '/ITS/g', replace: 'IZ' },
  { find: '/COULD/g', replace: 'CUD' },
  { find: '/OVE/g', replace: 'UV' },
  { find: '/KNOW/g', replace: 'KNOE' },
  { find: '/COMMUNICATE/g', replace: 'SPEEK' },
  { find: '/SPEAK/g', replace: 'SPEEK' },
  { find: '/TH /g', replace: 'F ' },
  { find: '/JUST/g', replace: 'JUS' },
  { find: '/WANT/g', replace: 'WANTS' },
  { find: '/NEED/g', replace: 'NEEDS' },
  { find: '/GIVE/g', replace: 'GIV' },
  { find: '/MY/g', replace: 'MAH' },
  { find: '/THE/g', replace: 'TEH' },
  { find: '/OTHER/g', replace: 'OTHR' },
  { find: '/WHO/g', replace: 'HOO' },
  { find: '/PLEASE/g', replace: 'PLZ' },
  { find: '/KITTY/g', replace: 'KITTEH' },
  { find: '/BABY/g', replace: 'BAYBEH' },
  { find: '/ATE/g', replace: 'EATED' },
  { find: '/HAPPY/g', replace: 'HAPPEE' },
  { find: '/NOTHING/g', replace: 'NOTHIN' },
  { find: '/ING /g', replace: 'N ' },
  { find: '/!/g', replace: '!!1' },
  { find: '/UM /g', replace: 'AM' },
  { find: '/TION /g', replace: 'SHUN' },
  { find: '/CIOUS /g', replace: 'SHUS' },
  { find: '/BOARD /g', replace: 'BORD' },
  { find: '/BORED/g', replace: 'BORD' },
  { find: '/LE /g', replace: 'L ' },
  { find: '/THING/g', replace: 'TING' },
  { find: '/ELP /g', replace: 'ALP ' },
  { find: '/FOR/g', replace: '4' },
  { find: '/E /g', replace: 'ES ' },
  { find: '/CS /g', replace: 'X ' },
  { find: '/AM/g', replace: 'ARE' },
  { find: '/AND/g', replace: 'N' },
  { find: '/HI/g', replace: 'HAI' },
  { find: '/UFF /g', replace: 'UFS ' },
  { find: '/BYE/g', replace: 'KTHXBYE' },
  { find: '/MONDAY/g', replace: 'CATURDAY' },
  { find: '/TUESDAY/g', replace: 'CATURDAY' },
  { find: '/WEDNESDAY/g', replace: 'CATURDAY' },
  { find: '/THURSDAY/g', replace: 'CATURDAY' },
  { find: '/FRIDAY/g', replace: 'CATURDAY' },
  { find: '/SATURDAY/g', replace: 'CATURDAY' },
  { find: '/SUNDAY/g', replace: 'CATURDAY' },
  { find: '/BOY/g', replace: 'BOI' },
  { find: '/ALS /g', replace: 'ULZ ' },
  { find: '/IE/g', replace: 'EE' },
  { find: '/REALLY/g', replace: 'RLY' },
  { find: '/ACK/g', replace: 'AK' },
  { find: '/PHY /g', replace: 'FEE' },
  { find: '/GIRL/g', replace: 'GURL' },
  { find: '/ER /g', replace: 'AH ' },
  { find: '/WORDS/g', replace: 'WURDS' }
]
