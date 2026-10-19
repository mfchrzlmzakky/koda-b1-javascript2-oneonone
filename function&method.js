// // Function Declaration
// function tambahDeclaration(a, b) {
//   return a + b;
// }
// console.log(tambahDeclaration(5, 5));

// // Function Anonymous
// const tambahAnonym = function (a, b) {
//   return a + b;
// };
// console.log(tambahAnonym(5, 5));

// // Function Arrow
// const tambahArrow = (a, b) => {
//   return a + b;
// };
// console.log(tambahArrow(5, 5));

// function hitungDiskonDeclaration(harga, persenDiskon = 0) {
//   if (harga <= 0) return 0;
//   const potongan = harga * (persenDiskon / 100);
//   return harga - potongan;
// }
// console.log(hitungDiskonDeclaration(10000, 30));

// const hitungDiskonAnonymous = function (harga, persenDiskon = 0) {
//   if (harga <= 0) return 0;
//   const potongan = harga * (persenDiskon / 100);
//   return harga - potongan;
// };
// console.log(hitungDiskonAnonymous(10000, 30));

// const hitungDiskonArrow = (harga, persenDiskon = 0) => (harga <= 0 ? 0 : harga - harga * (persenDiskon / 100));
// console.log(hitungDiskonArrow(10000, 30));

// MINI TASK

// 1
function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}

// 2
const hitungDiskon = (subtotal, isMember) => {
  if (isMember && subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (isMember) {
    return subtotal * 0.05;
  } else if (subtotal >= 100000) {
    return subtotal * 0.1;
  }
  return 0;
};

// 3
const hitungTotal = (subtotal, diskon) => subtotal - diskon;

// 4
function cetakStruk(nama, harga, jumlah, isMember) {
  const subtotal = hitungSubtotal(harga, jumlah);
  const diskon = hitungDiskon(subtotal, isMember);
  const total = hitungTotal(subtotal, diskon);
  return `
Produk   : ${nama}
Subtotal : Rp${subtotal}
Diskon   : Rp${diskon}
Total    : Rp${total}
`;
}

// 5
console.log(cetakStruk("Ayam Bakar", 25000, 5, true));
console.log(cetakStruk("Mie Ayam", 15000, 4, true));
console.log(cetakStruk("Bakso", 20000, 6, false));
