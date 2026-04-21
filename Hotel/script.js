const menu=document.querySelector('.menu')
const menulist=document.querySelector('div ul')
menu.addEventListener('click',function(){
    menulist.classList.toggle('showmenu')
})
//for count
let idlyc=0
let dhosaic=0
let cdhosaic=0
let mutdhosaic=0
let fdhosaic=0
let mdhosaic=0
let pooric=0
let chappathic=0
let parottac=0
let kparottac=0
let cricec=0
let vricec=0
let cbiriyanic=0
let mbiriyanic=0
let vbiriyanic=0
let fbiriyanic=0
let mandhic=0
let vegmealc=0
let nonmealc=0
let thanthooric=0
let c65c=0
let ffryc=0
let mfryc=0
//for amount
let idlya=0
let dhosaia=0
let cdhosaia=0
let mutdhosaia=0
let fdhosaia=0
let mdhosaia=0
let pooria=0
let chappathia=0
let parottaa=0
let kparottaa=0
let cricea=0
let vricea=0
let cbiriyania=0
let mbiriyania=0
let vbiriyania=0
let fbiriyania=0
let mandhia=0
let vegmeala=0
let nonmeala=0
let thanthooria=0
let c65a=0
let ffrya=0
let mfrya=0 

var idly=document.querySelector('.idly')
var dhosai=document.querySelector('.dhosai')
var chikdosa=document.querySelector('.chikdosa')
var mutdosa=document.querySelector('.mutdosa')
var famdosa=document.querySelector('.famdosa')
var mdosai=document.querySelector('.mdosai')
var poori=document.querySelector('.poori')
var chappathi=document.querySelector('.chappathi')
var parotta=document.querySelector('.parotta')
var kparotta=document.querySelector('.kparotta')
var crice=document.querySelector('.crice')
var vrice=document.querySelector('.vrice')
var cbiriyani=document.querySelector('.cbiriyani')
var mbiriyani=document.querySelector('.mbiriyani')
var vbiriyani=document.querySelector('.vbiriyani')
var fbiriyani=document.querySelector('.fbiriyani')
var mandhi=document.querySelector('.mandhi')
var vmeal=document.querySelector('.vmeal')
var nmeal=document.querySelector('.nmeal')
var thanthoori=document.querySelector('.thanthoori')
var c65=document.querySelector('.c65')
var ffry=document.querySelector('.ffry')
var mfry=document.querySelector('.mfry')

idly.addEventListener('click',function(){
    idlyc++;
    idlya=idlya+30
    showAlert("IDLY", idlyc)
})
dhosai.addEventListener('click',function(){
    dhosaic++;
    dhosaia=dhosaia+30
    showAlert("DHOSAI",dhosaic)
})
chikdosa.addEventListener('click',function(){
    cdhosaic++;
    cdhosaia=cdhosaia+50
    showAlert("CHICKEN DHOSAI",cdhosaic)
})
mutdosa.addEventListener('click',function(){
    mutdhosaic++;
    mutdhosaia=mutdhosaia+70
    showAlert("MUTTON DHOSAI",mutdhosaic)
})
famdosa.addEventListener('click',function(){
    fdhosaic++;
    fdhosaia=fdhosaia+100
    showAlert("FAMILY DHOSAI",fdhosaic)
})
mdosai.addEventListener('click',function(){
    mdhosaic++;
    mdhosaia=mdhosaia+40
    showAlert("MUDAKATHON DHOSAI",mdhosaic)
})
poori.addEventListener('click',function(){
    pooric++;
    pooria=pooria+40
    showAlert("POORI",pooric)
})
chappathi.addEventListener('click',function(){
    chappathic++;
    chappathia=chappathia+40
    showAlert("CHAPPATHI",chappathic)
})
parotta.addEventListener('click',function(){
    parottac++;
    parottaa=parottaa+40
    showAlert("PAROTTA",parottac)
})
kparotta.addEventListener('click',function(){
    kparottac++;
    kparottaa=kparottaa+100
    showAlert("KOTHU PAROTTA",kparottac)
})
crice.addEventListener('click',function(){
    cricec++;
    cricea=cricea+80
    showAlert("CHICKEN RICE",cricec)
})
vrice.addEventListener('click',function(){
    vricec++;
    vricea=vricea+70
    showAlert("VEG RICE",vricec)
})
cbiriyani.addEventListener('click',function(){
    cbiriyanic++;
    cbiriyania=cbiriyania+110
    showAlert("CHICKEN BIRIYANI",cbiriyanic)
})
mbiriyani.addEventListener('click',function(){
    mbiriyanic++;
    mbiriyania=mbiriyania+200
    showAlert("MUTTON BIRIYANI",mbiriyanic)
})
vbiriyani.addEventListener('click',function(){
    vbiriyanic++;
    vbiriyania=vbiriyania+90
    showAlert("VEG BIRIYANI",vbiriyanic)
})
fbiriyani.addEventListener('click',function(){
    fbiriyanic++;
    fbiriyania=fbiriyania+130
    showAlert("FISH BIRIYANI",fbiriyanic)
})
mandhi.addEventListener('click',function(){
    mandhic++;
    mandhia=mandhia+250
    showAlert("MANDHI",mandhic)
})
vmeal.addEventListener('click',function(){
    vegmealc++;
    vegmeala=vegmeala+60
    showAlert("VEG MEAL",vegmealc)
})
nmeal.addEventListener('click',function(){
    nonmealc++;
    nonmeala=nonmeala+100
    showAlert("NON-VEG MEAL",nonmealc)
})
thanthoori.addEventListener('click',function(){
    thanthooric++;
    thanthooria=thanthooria+150
    showAlert("THANTHOORI",thanthooric)
})
c65.addEventListener('click',function(){
    c65c++;
    c65a=c65a+40
    showAlert("CHICKEN 65",c65c)
})
ffry.addEventListener('click',function(){
    ffryc++;
    ffrya=ffrya+30
    showAlert("FISH FRY",ffryc)
})
mfry.addEventListener('click',function(){
    mfryc++;
    mfrya=mfrya+50
    showAlert("MUTTON FRY",mfryc)
}) 
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popupbox")
var donebtn = document.getElementById("done")
donebtn.addEventListener("click", function () {
    popupoverlay.style.display = "flex"
    popupbox.style.display = "block"
    generateBill()
})
function generateBill() {
    let billBody = document.getElementById("billBody");
    billBody.innerHTML = ""    // clear old bill
    let total = 0
    function addItem(name, qty, price) {
        if (qty > 0) {
            let row = `
                <tr>
                    <td>${name}</td>
                    <td>${qty}</td>
                    <td>${price}</td>
                </tr>
            `;
            billBody.innerHTML += row
            total += price
        }
    }
    addItem("IDLY", idlyc, idlya)
    addItem("DHOSAI", dhosaic, dhosaia)
    addItem("CHICKEN DHOSAI", cdhosaic, cdhosaia)
    addItem("MUTTON DHOSAI", mutdhosaic, mutdhosaia)
    addItem("FAMILY DHOSAI", fdhosaic, fdhosaia)
    addItem("MUDAKATHON DHOSAI", mdhosaic, mdhosaia)
    addItem("POORI", pooric, pooria)
    addItem("CHAPPATHI", chappathic, chappathia)
    addItem("PAROTTA", parottac, parottaa)
    addItem("KOTHU PAROTTA", kparottac, kparottaa)
    addItem("CHICKEN RICE", cricec, cricea)
    addItem("VEG RICE", vricec, vricea)
    addItem("CHICKEN BIRIYANI", cbiriyanic, cbiriyania)
    addItem("MUTTON BIRIYANI", mbiriyanic, mbiriyania)
    addItem("VEG BIRIYANI", vbiriyanic, vbiriyania)
    addItem("FISH BIRIYANI", fbiriyanic, fbiriyania)
    addItem("MANDHI", mandhic, mandhia)
    addItem("VEG MEAL", vegmealc, vegmeala)
    addItem("NON-VEG MEAL", nonmealc, nonmeala)
    addItem("THANTHOORI", thanthooric, thanthooria)
    addItem("CHICKEN 65", c65c, c65a)
    addItem("FISH FRY", ffryc, ffrya)
    addItem("MUTTON FRY", mfryc, mfrya)
    document.getElementById("grandTotal").innerText = total;
}

var popupoverlay1 = document.querySelector(".popup-overlay1")
var popupbox1 = document.querySelector(".popupbox1")
var pay=document.querySelector('.pay')
var exit=document.querySelector('.exit')
pay.addEventListener('click',function(){
    popupoverlay1.style.display="block"
    popupbox1.style.display="block"
})
exit.addEventListener('click',function(){
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function showAlert(itemName, count){
    const overlay = document.getElementById("alertOverlay")
    const text = document.getElementById("alertText")

    text.innerText = `Order Added ✅\nItem: ${itemName}\nCount: ${count}`
    overlay.style.display = "flex"

    setTimeout(() => {
        overlay.style.display = "none"
    }, 750)
}