/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6282224426226
 * Supported By Gpt Assistant 
 
 • Renovasi oleh biji
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6282224426226'
global.nomerowner = ["6288212276830"]

// Apikey 

global.skizo = 'FalX'
global.casterix = 'GoldenWings'
//watermark 
global.packname = 'Di Buat Oleh'
global.author = 'biji -MD'

global.setmenu = "v1"
global.setreply = "v1"
// cpanel 
global.domain = 'https://panelardipay.webprivate.my.id' // Isi Domain Lu
global.apikey2 = 'ptlc_xK4LKRXKTfrOjmypbJ1xhHtQeNiRGt24oOTYwpspkiG' // Isi Apikey Plta Lu
global.capikey2 = 'ptla_xMtAsVIiC0W89eSQENJcT6lGSDQq22vLU6YJOp4Btxw' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location


global.apilinode = ''// apikey   akun vps linode
global.apitokendo = ''

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
// Jangan di ubh
global.antibot = false
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

})
