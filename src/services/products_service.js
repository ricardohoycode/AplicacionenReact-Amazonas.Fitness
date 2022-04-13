const categories = [
    {
        id: 1,
        name: 'Ropas Deportivas'
    },
    {
        id: 2,
        name: 'Zapatillas',
    },
    {
        id: 3,
        name: 'Accesorios',
    },
    {
        id: 4,
        name: 'Suplementos',
    },

];

const productItems = [
    {
        id: 13,
        title: "Polos",
        price: 100,
        pictureUrl: "/polo.jpg",
        category: 1,
    },
    {
        id: 1,
        title: "Bibidis",
        price: 500,
        pictureUrl: "/bibidi.jpg",
        category: 1,
    },
    {
        id: 2,
        title: "Licra",
        price: 80,
        pictureUrl: "/Licra.jpg",
        category: 1,
    },
    {
        id: 3,
        title: "Shorts",
        price: 110,
        pictureUrl: "/shorts.jpg",
        category: 1,
    },
    {
        id: 4,
        title: "Tennis",
        price: 35000,
        pictureUrl: "/shorts.jpg",
        category: 2,
    },
    {
        id: 5,
        title: "Toperolas",
        price: 15000,
        pictureUrl: "/zapatilla.jpg",
        category: 2,
    },
    {
        id: 6,
        title: "muñequera",
        price: 45000,
        pictureUrl: "/muñequeraB.jpg",
        category: 3,
    },
    {
        id: 7,
        title: "Barras",
        price: 49000,
        pictureUrl: "/barras.jpg",
        category: 3,
    },
    {
        id: 8,
        title: "Rodillera",
        price: 35000,
        pictureUrl: "/rodillera.jpg",
        category: 3,
    },
    {
        id: 9,
        title: "Mancuernas",
        price: 75000,
        pictureUrl: "/mancuerna.jpg",
        category: 4,
    },
    {
        id: 10,
        title: "Pesas",
        price: 50000,
        pictureUrl: "/pesas.jpg",
        category: 4,
    },
    {
        id: 11,
        title: "mancuernas Plus",
        price: 55000,
        pictureUrl: "/plus.jpg",
        category: 4,
    },
    {
        id: 12,
        title: "Pesas Variables",
        price: 85000,
        pictureUrl: "/peso ligero.jpg",
        category: 4,
    },
]

const productDetails = [
    {

        id: 13,
        title: "Polos",
        price: 100000,
        pictureUrl: "/",
        size: "1.5x1.5",
        color: "Roja y café",
        material: "Tela",
        author: "Richy",
        code: "LOR-000",
        stock: 1,
        deliveryTime: 3,
    },
    {
        id: 1,
        title: "Bibiris",
        price: 1000,
        pictureUrl: "/",
        size: "1.5x1.5",
        color: "Gris y Negro",
        material: "Tela",
        author: "Richy",
        code: "LOR-001",
        stock: 1,
        deliveryTime: 3,
    }

]


const findProductDetails = (id) => {
    const details = productDetails.find(product => product.id === id);
    return details ? details : { id: 0, title: "", price: 0, pictureUrl: "", description: "", size: "", color: "", material: "", author: "", code: "", stock: 0, deliveryTime: 0 };
}

const findProducts = (category) => {
    return productItems.filter(product => product.category === category);
}

const loadCategories = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories);
        }, delay);
    });
}

const loadProduct = (delay, category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProducts(parseInt(category)));
        }, delay);
    });
}

const loadDetails = (delay, product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(findProductDetails(parseInt(product.id)));
        }, delay);
    });
}
export { loadProduct, loadDetails, loadCategories };