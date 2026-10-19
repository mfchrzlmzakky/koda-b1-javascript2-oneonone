// const hasilUjianAndi = [75, 77, 80, 90];
// const hasilUjianInda = [70, 76, 76, 86];
// const gabung = [hasilUjianAndi, hasilUjianInda];
// const gabungkanSpreadOp = [...hasilUjianAndi, ...hasilUjianInda, 80];

// console.log(hasilUjianAndi);
// console.log(hasilUjianInda);
// console.log(gabung);
// console.log(gabungkanSpreadOp);

// MIN MAX
// const angka1 = [80, 70, 85, 75, 90];
// const angka2 = [77, 76, 67, 62, 50];
// const gabung = [...angka1, ...angka2];

// console.log(gabung);

// let min = 100;
// let max = 0;
// gabung.map((n) => {
//   if (n > max) {
//     max = n;
//   }
// });
// gabung.map((n) => {
//   if (n < min) {
//     max = n;
//   }
// });

// console.log(max);
// console.log(min);

// SPREAD OBJECT
// const bio = {
//   name: "John D",
//   age: 30,
// };
// const extraInfo = {
//   skills: ["Web Programming", "Painting"],
//   education: [
//     {
//       name: "SMKN 1 Depok",
//       year: 2021,
//     },
//   ],
// };
// const profile = {
//   ...bio,
//   ...extraInfo,
//   price: 50000,
// };
// const updateProfile = {
//   ...profile,
//   age: 37,
//   city: "Jakarta",
//   price: 37000,
// };
// console.log(profile.education[0].year);
// console.log(updateProfile);
// console.log(`Umur: ${updateProfile.age}`);

// const productDasar = {
//   id: "P021",
//   namaProduct: "Mouse",
//   harga: 50000,
//   stok: 15,
// };
// const infoPengiriman = {
//   berat: "800 gram",
//   dikirimDari: "Jakarta",
//   bebasOngkir: true,
// };
// const productPromo = { ...productDasar, ...infoPengiriman, kategory: "Aksesoris Komputer" };
// console.log(productPromo);

// Destructuring Array
// const colors = ["#000", "#FFF", "#F00", "BLUE"];
// const [warnaAwal, blue, ...warna] = colors;

// console.log(warnaAwal);
// console.log(blue);
// console.log(warna);

// Destructuring Object
// const student = {
//   name: "Budi",
//   age: 20,
//   propertyTambahan: {
//     tambahan1: "tambahan1",
//     tambahan2: "tambahan2",
//     tambahan3: "tambahan3",
//     tambahan4: {
//       tambahan41: "tambahan41",
//       tambahan42: "tambahan42",
//       tambahan43: "tambahan43",
//     },
//   },
//   address: {
//     city: "Jakarta",
//     postalCode: 16459,
//     test: {
//       gambar: "Gambar1",
//       gambar2: "Gambar2",
//     },
//   },
// };

// const {
//   name,
//   age,
//   propertyTambahan: {
//     tambahan1,
//     tambahan2,
//     tambahan3,
//     tambahan4: { tambahan41, tambahan42, tambahan43 },
//   },
//   address: {
//     city,
//     postalCode,
//     test: { gambar, gambar2 },
//   },
// } = student;

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(postalCode);
// console.log(gambar);
// console.log(tambahan1);
// console.log(tambahan2);
// console.log(tambahan3);
// console.log(tambahan41);
// console.log(tambahan42);
// console.log(tambahan43);

// const karakter = {
//   nama: "Raka",
//   level: 12,
//   stats: {
//     hp: 100,
//     attack: 35,
//   },
//   inventory: ["Pedang", "Potion"],
// };
// const itemBonus = ["Perisai", "Elixir"];
// const infoGuild = {
//   guild: "Phoenix",
//   rank: "Silver",
// };
// // 1
// const karakter2 = { ...karakter, ...infoGuild };
// console.log(karakter2);
// // 2
// const inventory = [...karakter.inventory, ...itemBonus];
// console.log(inventory);
// // 3
// const karakterUpgrade = { ...karakter2, inventory: [...inventory] };
// console.log(karakterUpgrade);
// // 4
// const {
//   nama,
//   level,
//   stats: { hp },
//   guild,
// } = karakterUpgrade;
// console.log(nama);
// console.log(level);
// console.log(hp);
// console.log(guild);
// // 5
// const [pedang] = inventory;
// console.log(pedang);
// // 6
// console.log(karakterUpgrade);
