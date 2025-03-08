const nama = "Aghis Mahyana"
let usia = 16;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = 'generasi dewasa';
    }
    else if (usia >= 30) {
        generasi = 'generasi sepuh kehidupan';
    }
    else if (usia > 3 && usia < 10)
        generasi = 'generasi anak';
    else {
        generasi = 'generasi bayi kemarin sore';
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();