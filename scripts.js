var products = [
    {
        "photo": "img/big-mac.png",
        "name": "X Big Mac",
        "price": 5.65,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "": 1.49,
        "active": false,
        "quantity": 0
    }
];
 
//SelfServiceMachine vai carregar a logica da aplicação
const SelfServiceMachine = {
    ///criando propriedade data(dados) com função
    data() {
        return {
            //message : "Hello World Vue.js"
            //Para uma aplicação real não é a melhor forma
            products: window.products
        }
    }
};


//iniciar a aplicação
//Passando o objeto criado e id aonde está o componente
Vue.createApp(SelfServiceMachine).mount('#app');