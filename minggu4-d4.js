const table = document.querySelectorAll("table");
let kategoriData = [];

const loadData = async () => {
    try {
        const url = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        kategoriData = await url.json();
        console.log(kategoriData)
        loadDataKategori(kategoriData);
    } catch (err) {
        console.log(err)
    }
}

const loadDataKategori = (data) => {
    const output = data.map((el) => {
        return `
            <ul>
                <li><a href="#" onclick='loadMyData("${el.id}")'>${el.name}</a></li>
            </ul>
            `
    }).join('')
    document.getElementById("kategori").innerHTML = output;
}

function loadMyData(id) {
    fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
        .then((res) => res.json())
        .then((data) => {
            let ktg = ''
            let no = 1;
            data.forEach(element => {
                ktg += `
                <tr>
                    <td>` + (no++) + `</td>
                    <td>${element.name}</td>
                    <td>${element.kategori.nama}</td>
                </tr>
            `
            });
            document.querySelector("tbody").innerHTML = ktg
        })
}

loadData();