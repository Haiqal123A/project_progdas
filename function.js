let productArray = [];
let autoincremet = 1;

function saveForm() {
  const kodeProduk = (document.getElementById("kodeProduk").value =
    "MD-0" + autoincremet);
  const nameProduk = document.getElementById("nameProduk").value;
  const harga = document.getElementById("harga").value;
  const kategori = document.getElementById("kategori").value;
  const quantity = document.getElementById("quantity").value;





  productArray.push({
    kategori,
    kodeProduk,
    nameProduk,
    harga,
    quantity,
  });

  renderTable();
  autoincremet++;
  console.log("MD-0" + autoincremet++);
}

function renderTable() {
  const tablebody = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML = "";

  productArray.forEach((product, index) => {
    const row = tablebody.insertRow();

    validate_kategory = product.kategori == "makanan" ? "kategori-true" : "kategori-false";
    row.innerHTML = `<td>${index + 1}</td>
                      <td>${product.kodeProduk}</td>
                      <td>${product.nameProduk}</td>
                      <td>${product.harga}</td>
                      <td class ="${validate_kategory}">${product.kategori}</td>
                      <td class="">${product.quantity}</td>`;
  });
}
document.getElementById("kodeProduk").value = "MD-01" + autoincremet;
