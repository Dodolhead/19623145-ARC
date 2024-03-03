function tes(callback1){
    console.log("Hello")
    callback1()
}

function tes2(){
    console.log("World!")
}

tes(tes2)

function tambah(callback2, x, y){
    let hasil = x + y
    callback2(hasil, 4)
}

function kali(hasil, z){
    let hasil2 = hasil*z
    console.log(hasil2)
}

tambah(kali, 1, 3)