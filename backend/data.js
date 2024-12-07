import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: "Saurav Mahajan",
            email: "mahajansaurav03@gmail.com",
            password: bcrypt.hashSync("dadu2000"),
            isAdmin: true

        }, {
            name: "Viren Mahajan",
            email: "mahajanviren08@gmail.com",
            password: bcrypt.hashSync("om2012"),
            isAdmin: false

        }

    ],
    products: [
        {
            // _id:"1",
            name: "Nike Slim Shirt",
            slug: "nike-slim-shirt",
            category: "Shirts",
            image: "/images/p1.jpg",
            price: 899,
            countInStock: 50,
            brand: "Nike",
            rating: 4.6,
            numReviews: 10,
            description: "Best Quality product",

        }, {
            // _id:"2",
            name: "Puma Shirt",
            slug: "puma-fit-shirt",
            category: "Shirts",
            image: "/images/p2.jpg",
            price: 1199,
            countInStock: 20,
            brand: "Puma",
            rating: 4.8,
            numReviews: 20,
            description: "High Quality product",

        }, {
            // _id:"3",
            name: "Nike Slim Pant",
            slug: "nike-slim-pant",
            category: "Pants",
            image: "/images/p3.jpg",
            price: 999,
            countInStock: 0,
            brand: "Nike",
            rating: 4.4,
            numReviews: 15,
            description: "Best Quality pant",

        },
        {
            // _id:"4",
            name: "Puma Slim pant",
            slug: "puma-slim-pant",
            category: "Pants",
            image: "/images/p4.jpg",
            price: 1299,
            countInStock: 40,
            brand: "Puma",
            rating: 4.6,
            numReviews: 10,
            description: "HIGH Quality product",

        }, {
            // _id:"5",
            name: "Allen solly hoodie",
            slug: "Black hoddie",
            category: "Hoodie",
            image: "/images/p5.jpg",
            price: 1599,
            countInStock: 100,
            brand: "Allen Solly",
            rating: 3.5,
            numReviews: 6,
            description: "HIGH Quality product",

        }
    ]
}

export default data