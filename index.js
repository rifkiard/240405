// study case:

// 4 orang.
// 1 = Budi, Laki-laki, 2005 Febuari 20
// 2 = Anton, Laki-laki, 2003 Januari 10
// 3 = Alex , Laki-laki, 2004 Maret 7
// 4 = Dina, Perempuan, 2002 Mei 20

class Orang {
    nama;
    jenisKelamin;
    tanggalLahir;

    constructor(nama, jenisKelamin, tanggalLahir) {
        this.nama = nama;
        this.jenisKelamin = jenisKelamin;
        this.tanggalLahir = tanggalLahir;
    }

    perkenalan() {
        return `Halo, nama saya ${this.nama}, jenis kelamin saya ${this.jenisKelamin}, lahir pada tanggal ${this.tanggalLahir}`;
    }
}

var budi = new Orang('Budi', 'Laki-laki', '2005 Febuari 20');
var anton = new Orang('Anton', 'Laki-laki', '2003 Januari 10');
var alex = new Orang('Alex', 'Laki-laki', '2004 Maret 7');
var dina = new Orang('Dina', 'Perempuan', '2002 Mei 20');

console.log(budi.perkenalan());
console.log(anton.perkenalan());
console.log(alex.perkenalan());
console.log(dina.perkenalan());