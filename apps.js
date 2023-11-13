let ipadresse1 = document.getElementById("ip1").value;
let ipadresse2 = document.getElementById("ip2").value;
let ipadresse3 = document.getElementById("ip3").value;
let ipadresse4 = document.getElementById("ip4").value;
let binært = "";
let rep = "";

function update() {
  ipadresse1 = document.getElementById("ip1").value;
  console.log(ipadresse1);
  if (ipadresse1 >= 128) {
    ipadresse1 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 64) {
    ipadresse1 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 32) {
    ipadresse1 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 16) {
    ipadresse1 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 8) {
    ipadresse1 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 4) {
    ipadresse1 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 2) {
    ipadresse1 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 1) {
    ipadresse1 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update1() {
  ipadresse2 = document.getElementById("ip2").value;
  console.log(ipadresse2);
  if (ipadresse2 >= 128) {
    ipadresse2 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 64) {
    ipadresse2 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 32) {
    ipadresse2 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 16) {
    ipadresse2 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 8) {
    ipadresse2 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 4) {
    ipadresse2 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 2) {
    ipadresse2 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 1) {
    ipadresse2 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update2() {
  ipadresse3 = document.getElementById("ip3").value;
  console.log(ipadresse3);
  if (ipadresse3 >= 128) {
    ipadresse3 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 64) {
    ipadresse3 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 32) {
    ipadresse3 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 16) {
    ipadresse3 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 8) {
    ipadresse3 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 4) {
    ipadresse3 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 2) {
    ipadresse3 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 1) {
    ipadresse3 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update3() {
  ipadresse4 = document.getElementById("ip4").value;
  console.log(ipadresse4);
  if (ipadresse4 >= 128) {
    ipadresse4 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 64) {
    ipadresse4 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 32) {
    ipadresse4 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 16) {
    ipadresse4 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 8) {
    ipadresse4 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 4) {
    ipadresse4 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 2) {
    ipadresse4 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 1) {
    ipadresse4 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært;
  binært = "";
}

function svar() {
  document.getElementById("svar").innerHTML = "Binary representation: " + rep;
  console.log(rep);
  rep = "";
}

function bin() {
  let bi2ip;
  bi2ip = document.getElementById("biToIp").value;
  //bi2ip = [0,0,0,0,0,0,0,0];
  let navn = 0;
  console.log(bi2ip);
  if (bi2ip[0] >= 1) {
    navn += 128;
  }
  if (bi2ip[1] >= 1) {
    navn += 64;
  }
  if (bi2ip[2] >= 1) {
    navn += 32;
  }
  if (bi2ip[3] >= 1) {
    navn += 16;
  }
  if (bi2ip[4] >= 1) {
    navn += 8;
  }
  if (bi2ip[5] >= 1) {
    navn += 4;
  }
  if (bi2ip[6] >= 1) {
    navn += 2;
  }
  if (bi2ip[7] >= 1) {
    navn += 1;
  }
  if (bi2ip[8] === ".") {
    navn += ".";
  }
  let navn2 = 0;
  if (bi2ip[9] >= 1) {
    navn2 += 128;
  }
  if (bi2ip[10] >= 1) {
    navn2 += 64;
  }
  if (bi2ip[11] >= 1) {
    navn2 += 32;
  }
  if (bi2ip[12] >= 1) {
    navn2 += 16;
  }
  if (bi2ip[13] >= 1) {
    navn2 += 8;
  }
  if (bi2ip[14] >= 1) {
    navn2 += 4;
  }
  if (bi2ip[15] >= 1) {
    navn2 += 2;
  }
  if (bi2ip[16] >= 1) {
    navn2 += 1;
  }
  if (bi2ip[17] === ".") {
    navn2 += ".";
  }
  let navn3 = 0;
  if (bi2ip[18] >= 1) {
    navn3 += 128;
  }
  if (bi2ip[19] >= 1) {
    navn3 += 64;
  }
  if (bi2ip[20] >= 1) {
    navn3 += 32;
  }
  if (bi2ip[21] >= 1) {
    navn3 += 16;
  }
  if (bi2ip[22] >= 1) {
    navn3 += 8;
  }
  if (bi2ip[23] >= 1) {
    navn3 += 4;
  }
  if (bi2ip[24] >= 1) {
    navn3 += 2;
  }
  if (bi2ip[25] >= 1) {
    navn3 += 1;
  }
  if (bi2ip[26] === ".") {
    navn3 += ".";
  }
  let navn4 = 0;
  if (bi2ip[27] >= 1) {
    navn4 += 128;
  }
  if (bi2ip[28] >= 1) {
    navn4 += 64;
  }
  if (bi2ip[29] >= 1) {
    navn4 += 32;
  }
  if (bi2ip[30] >= 1) {
    navn4 += 16;
  }
  if (bi2ip[31] >= 1) {
    navn4 += 8;
  }
  if (bi2ip[32] >= 1) {
    navn4 += 4;
  }
  if (bi2ip[33] >= 1) {
    navn4 += 2;
  }
  if (bi2ip[34] >= 1) {
    navn4 += 1;
  }

  document.getElementById("svar1").innerHTML =
    "Ip Adresse: " + navn + navn2 + navn3 + navn4;
}

//let tabel = [128, 64, 32, 16, 8, 4, 2, 1];
//for (let i = 0; i < tabel.length; i++) {
// if (tabel[i] === "1") {
//   tabel[i] = tabel + (2 ^ (i - 1));
// }
// return tabel;
// console.log(tabel);
// }

//document.getElementById("svar1").innerHTML = "IP adresse: " + tabel;

//for (let i = 0; i < convertBinary.length; i++) {}

//for (let i = 0; i < 8; i++) {
//console.log(2 ** i);
//}

//let randomNumber = Math.floor(Math.random() * 241) + 60;
//console.log(randomNumber);
