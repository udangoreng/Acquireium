var products = {
    equipment: {
        product1: {
            name: "ISTA Hang-On Filter Inlet Sponge",
            price: 150000,
            stock: 10,
            description: "Hang on filter inlet sponge",
            imgPath: "img/filter.jpg"
        },
        product2: {
            name: "UNS Mighty HOB Aquarium Filter",
            price: 200000,
            stock: 5,
            description: "The Mighty HOB Aquarium Filters (HOB = Hang On Back Filter) are compact filters for nano aquariums. The Hang On filters are available in three different sizes and provide the necessary filtration in freshwater planted nano aquariums. These units are easy to maintain, feature adjustable flow and levelling knobs and are made from durable materials for optimum performance and longevity. Each filter is pre-loaded with media, is self-priming and can be quickly installed at the edge of any nano tank.",
            imgPath: "img/equip.JPG"
        },
        product3: {
            name: "EHEIM InstallationsKit 2 Pressure Side 17 mm",
            price: 400000,
            stock: 5,
            description: "The EHEIM Basic Installation Set 2 is used to connect to the pressure side of all external filters. Thus, it can be determined individually, where the water in the aquarium should flow. The set has a safe and watertight hose connection.\n The installation kit allows hose cleaning without removing the hose connection. In addition, it ensures a secure and permanent attachment in the basin through the supplied suction cups.",
            imgPath: "img/filter-2.jpg"
        }
    },
    plants: {
        product1: {
            name: "Anubias Plant",
            price: 50000,
            species:"Anubias Nana Pinto",
            stock: 20,
            description: "Low maintenance aquatic plant",
            imgPath: "img/anubias.png"
        },
        product2: {
            name: "Java Moss",
            price: 30000,
            species:"Vesicularia dubyana",
            stock: 25,
            description: "The species is monoecious and perennial, with an irregularly branched stem. In the wild, it is found on soils, rocks, and trunks of trees.",
            imgPath: "img/javafern.png"
        },
        product3: {
            name: "Singapore Blood Red",
            price: 25000,
            species:"Rotala rotundifolia",
            stock: 18,
            description: "'Singapore Blood Red', also 'Blood Red Singapore', certainly has the most intense red colouring of all Rotala rotundifolia forms. Under the same conditions, this Rotala has a darker red shade than R. rotundifolia 'Colorata'. As with normal Rotala rotundifolia, the shoots grow mostly upright to ascending, in very strong light also more or less horizontally. As with 'normal' Rotala rotundifolia, the shoots grow to over 50 cm long, but look better if they are kept about 20 - 40 cm high by cutting and replanting cuttings. They branch quite well, the bushy growth is promoted by occasional pruning.",
            imgPath: "img/rotala.jpg"
        },
        product4: {
            name: "Grass leaved bladderwort",
            price: 30000,
            species:"Utricularia graminifolia",
            stock: 7,
            description: "Utricularia graminifolia is a grass-like bladderwort species from the Asian tropics that grows into a lush bright light green lawn. It is thus quite popular in aquascaping, too. It is not always easy to cultivate, but under favourable conditions (lots of light, soft water, CO2, macro- and micronutrient fertilisation) it is a fast grower.",
            imgPath: "img/grass.jpg"
        },
    },
    fish: {
        product1: {
            name: "Male Tangerine Koi Betta",
            price: 25000,
            species:"Betta splendens",
            stock: 30,
            description: "The Male Tangerine Koi is a majestic variant admired for its marbled orange, white and sometimes black coloration. Though delicate-looking, they are hardy and intelligent, thriving with proper care in a well-maintained aquarium. A varied diet of high-quality Betta pellets, frozen or live foods such as Bloodworms, Brine shrimp, and Daphnia is ideal for their continued health. A gentle filter is recommended and be sure to prevent strong currents for this Betta. With proper care, the Male Tangerine Koi Betta can live 2-4 years, serving as a stunning and mesmerizing aquatic pet.",
            imgPath: "img/betafish.jpg"
        },
        product2: {
            name: "Female Guppy (6)",
            price: 15000,
            species:"Poecilia reticulata",
            stock: 50,
            description: "Assorted Fancy Female Guppies are a beautiful, easy to care for, vibrant and hardy option for the beginner hobbyist. The males are smaller in size and tend to be more colorful than the feamles. It is not recommended to add multiple males to the aquarium because they can become territorial. They are peaceful fish that will do great in community tanks. Be aware that these are livebearers so when adding females and males that you can end up with more than when you started. This Guppy will eat just about anything offered from frozen freshwater foods to pellets, freeze dried and flakes.",
            imgPath: "img/guppies.jpg"
        },
        product3: {
            name: "Opaline Gourami",
            price: 10000,
            species:"Trichopodus trichopterus",
            stock: 75,
            description: "The opaline gourami (Trichopodus trichopterus) is a beginner-friendly freshwater fish with a lot to offer aquarists of any skill level. Sometimes called the marbled gourami, this fish is not naturally occurring. It’s a product of selective breeding and is considered a distinct variation of the famous three-spot gourami.",
            imgPath: "img/opaline.jpg"
        },
        product4: {
            name: "Black Angelfish",
            price: 2500,
            species:"Pterophyllum scalare",
            stock: 12,
            description: "The Black Angels will help make your aquarium more elegant. The Angelfish are an excellent candidate for planted aquariums and are relatively peaceful. Angelfish are in the cichlid family, which is why they are considered semi-aggressive. They can be territorial especially if they have decided to lay eggs. To reduce the chance of aggression, try adding the Angels to the aquarium last. They do prefer slightly more acidic water conditions. Adding driftwood can help naturally soften the water while also providing a place for the angels to hide. Be sure to feed them a variety of foods that include vegetables and meaty substances.",
            imgPath: "img/angelfish.jpg"
        },
        product5: {
            name: "Yellow Cichlid (3)",
            price: 5000,
            species:"Labidochromis caeruleus",
            stock: 34,
            description: "The Electric Yellow Cichlid will bring a little sunshine into your aquarium. Males typically display spots on their anal fins and are also usually more colorful than the females. However, the males are also usually more aggressive, so we suggest a ratio of 3 to 4 females to one male. They prefer an aquarium with a sandy substrate with lots of hiding spaces. In the wild, the Electric Yellow Cichlids are found in brackish waters, so they will do best in aquariums with a basic pH and low salinity. Use caution when choosing aquarium's size because they can grow to about 6'' long. Be sure to feed a varied diet of meaty foods and pellets that contain vegetable matter.",
            imgPath: "img/lemon.jpg"
        },
        product6: {
            name: "Domestic Koi",
            price: 35000,
            species:"Cyprinus carpio",
            stock: 6,
            description: "Assorted Domestic Koi are known to be especially hardy and are bred within the United States. They come in a variety of colors and patterns, which makes them all the more exciting. Koi can live 25-35 years or more in captivity when properly cared for, and get as large as 3 feet long, so they will need a large space made specifically for koi. They are considered diggers, so use caution when adding plants because they can get uprooted. Use large rocks to help keep the plants anchored down. Feeding many times a day is recommended since they are very active swimmers. Koi are very messy eaters, so be sure to monitor the water quality and perform water changes as needed. They will eat almost any pellet or flake that you offer, but be sure the food has vegetable foods in it. Freshwater food with vegetables will help prevent swim bladder problems.",
            imgPath: "img/koi.jpg"
        }
    }
};

var selectedId = 0;
var amount = 0;
var stock;
var category;
var currentPage = location.pathname.split("/").pop();;
const amountIn = document.getElementById("amount");
const imgModal = document.getElementById("modalImage");
const imgModal2 = document.getElementById("pImage");

function getCategory() {
    switch (currentPage) {
        case 'shopequip.html':
            category = 'equipment';
            break;

        case 'shopplant.html':
            category = 'plants';
            break;

        case 'shopfish.html':
            category = 'fish';
            break;

        default:
            break;
    }
}

function getAllProducts() {
    getCategory();
    console.log(currentPage);
    const currentCategory = products[category];

    for (let productId in currentCategory) {
        const product = currentCategory[productId];

        const cardId = document.getElementById(productId);
        const name = cardId.getElementsByTagName("h6")[0];
        const spec = cardId.getElementsByTagName("p")[0];
        const price = cardId.querySelector("#price");
        const img = cardId.parentElement.getElementsByTagName("img")[0];
        
        name.textContent = product.name;
        spec.textContent = product.species;
        price.textContent = product.price;
        img.src = product.imgPath;
    }

}

function add() {
    const currentStock = parseInt(document.getElementById("mStock").textContent);
    if (amount < currentStock) {
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
    const desc =  products[category][Id].description;
    const stock =  products[category][Id].stock;

    const mSpecies = document.getElementById("mSpec");
    const mStock = document.getElementById("mStock");
    const mPrice = document.getElementById("mPrice");
    const mName = document.getElementById("mName");
    const mDesc = document.getElementById("mDesc");

    mName.textContent = name.textContent;
    mSpecies.textContent = spec.textContent ? spec.textContent : '-';
    mPrice.textContent = price.textContent;
    mStock.textContent = stock;
    mDesc.textContent = desc;

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
    mSpecies.textContent = spec.textContent ? spec.textContent : '-';
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

    getCategory();

    products[category][selectedId].stock -= amount;
    amount = 0;
    amountIn.value = 0;

    if (products[category][selectedId].stock == 0) {
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