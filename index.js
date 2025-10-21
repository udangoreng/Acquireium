var selectedId = 0;
var amount = 0;
var stock = 7;
const amountIn = document.getElementById("amount");
const imgModal = document.getElementById("modalImage");
const imgModal2 = document.getElementById("pImage");

function add() {
    if (amount < stock) {
        amount += 1;
        amountIn.value = amount;
        console.log(amount);
    } else {
        alert('Not Enough Stock!')
    }
}

function sub() {
    if (amount > 0) {
        amount -= 1;
        amountIn.value = amount;
    }
}

function SeeDetails(Id) {
    selectedId = Id;
    const product = document.getElementById(Id);
    const name = product.getElementsByTagName("h6")[0];
    const spec = product.getElementsByTagName("p")[0];
    const price = document.getElementById("price");
    const img = product.parentElement.getElementsByTagName("img")[0];

    const mSpecies = document.getElementById("mSpec");
    const mStock = document.getElementById("mStock");
    const mPrice = document.getElementById("mPrice");
    const mName = document.getElementById("mName");

    mName.textContent = name.textContent;
    mSpecies.textContent = spec.textContent;
    mPrice.textContent = price.textContent;
    mStock.textContent = stock;

    if (img) {
        imgModal.src = img.src;
    } else {
        imgModal.src = "img/not-found.png";
    }
}

function proceed() {
    if (amount < 1) {
        alert('Please put the correct amount!');
        return;
    }

    if (amount > stock) {
        alert('Not Enough Stock! Please Wait For Us To Restock!')
    }
    
    const product = document.getElementById(selectedId);
    const name = product.getElementsByTagName("h6")[0];
    const spec = product.getElementsByTagName("p")[0];
    const price = document.getElementById("price");
    const img = product.parentElement.getElementsByTagName("img")[0];
    const stockShow = product.querySelector("p#stock");

    const mSpecies = document.getElementById("pSpec");
    const mPrice = document.getElementById("pPrice");
    const mName = document.getElementById("pName");
    const total = document.getElementById("pTotal");
    const subtotal = document.getElementById("pSubTotal");

    mName.textContent = name.textContent;
    mSpecies.textContent = spec.textContent;
    mPrice.textContent = "Rp." + (price.textContent);
    subtotal.textContent = "Rp." + (price.textContent * amount);
    total.textContent = "Rp." + (parseInt(price.textContent * amount) + 25000);

    if (img) {
        console.log(img.src);
        imgModal2.src = img.src;
    } else {
        imgModal2.src = "img/not-found.png";
    }

    const secondModal = new bootstrap.Modal(document.getElementById('exampleModalToggle2'));
    secondModal.show();

}

function success() {
    const product = document.getElementById(selectedId);
    const stockShow = product.querySelector("p#stock");

    const iName = document.getElementById("iName");
    const iEmail = document.getElementById("email");
    const iPhone = document.getElementById("phone");
    const iAddress = document.getElementById("address");
    const iPayment = document.querySelector('input[name = "payment"]:checked');

    if (iName.value == "" || iEmail.value == "" || iPhone == "" || iAddress.value == "" || iPayment == null) {
        alert("Please Fill Out All Field!");
        return;
    }

    stock -= amount;
    amount = 0;
    amountIn.value = 0;

    if (stock == 0) {
        stockShow.textContent = 'Out Of Stock!';
    }

    iName.value = "";
    iEmail.value = "";
    iPhone.value = "";
    iAddress.value = "";

    const secondModal = bootstrap.Modal.getInstance(document.getElementById('exampleModalToggle2'));
    const firstModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    const thirdModal = new bootstrap.Modal(document.getElementById('exampleModalToggle3'));
    firstModal.hide();
    secondModal.hide();
    thirdModal.show();
}