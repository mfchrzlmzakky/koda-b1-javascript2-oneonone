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

function hitungDiskonDeclaration(harga, persenDiskon = 0) {
  if (harga <= 0) return 0;
  const potongan = harga * (persenDiskon / 100);
  return harga - potongan;
}
console.log(hitungDiskonDeclaration(10000, 30));

const hitungDiskonAnonymous = function (harga, persenDiskon = 0) {
  if (harga <= 0) return 0;
  const potongan = harga * (persenDiskon / 100);
  return harga - potongan;
};
console.log(hitungDiskonAnonymous(10000, 30));

const hitungDiskonArrow = (harga, persenDiskon = 0) => (harga <= 0 ? 0 : harga - harga * (persenDiskon / 100));
console.log(hitungDiskonArrow(10000, 30));
