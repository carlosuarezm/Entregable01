//Clase "Product" 

class Product {

    //Constructor
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}


//Clase "ProductManager"
class ProductManager {

    //Constructor
    constructor() {
        this.products = []
        this.idCount = 0
    }

    //Metodo "addProduct" verifica que el producto cuente con todas las propiedades necesarias, verifica que no exista 
    // un producto con el mismo "code" que del que se quiere agregar y si estas condiciones se cumplen lo agrega
    // al array products
    addProduct(newProduct) {

        //Verificacion de las propiedades necesarias
        let hasTitle = newProduct.title != null
        let hasDescription = newProduct.description != null
        let hasPrice = newProduct.price != null
        let hasThumbnail = newProduct.thumbnail != null
        let hasCode = newProduct.code != null
        let hasStock = newProduct.stock != null

        //Si tiene todas la propiedades intenta agregar el producto, sino envia un mensaje a consola
        if (hasTitle & hasDescription & hasPrice & hasThumbnail & hasCode & hasStock) {

            //Buscar en "products" un elemento con la propiedad "code" igual a la propiedad "code"
            // del elemento que se recibe
            let product = this.products.find((p) => p.code == newProduct.code)

            //Si se encuentra un producto que tenga el mismo código no se agrega al array y se envía un mensaje al usuario
            if (product != undefined) {
                console.log(`You can't add this product, this code ${newProduct.code} already exists`)

                //Si el no se encuentra un elemento con el mismo código se agrega al array y se avisa por consola
            } else {
                newProduct.id = ++this.idCount
                this.products.push(newProduct)
                console.log(`This product has been added: `, this.products)
            }

        } else {
            console.log(`Please check the data and try again`)
        }
    }

    //Metodo que devuelve el array "products"
    getProducts() {
        return this.products
    }

    //Metodo que busca en el array "products" un elemento que coincida con el "id" que se recibe por parametro
    getProductById(id) {
        let product = this.products.find((p) => p.id == id)
        if (product == undefined) {
            console.log(`Not found`)
        } else {
            return product
        }
    }

}


//Test del codigo
//Creacion de un obejto de la clase "ProductManager"
let productManager1 = new ProductManager()

//Creacion de un objeto de la clase "Product"
let product1 = new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

//Se agrega el objeto creado anteriormente 
productManager1.addProduct(product1)

//Se agrega otro objeto con los mismo valores que el anterior
productManager1.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25))

//Se imprime en consola los productos
console.log(`Products: `, productManager1.getProducts())

//Se busca un elemento con un ID existente
console.log(`El producto de ID 1 es:`, productManager1.getProductById(1))

//Se busca un elemento con un ID inexistente
productManager1.getProductById(0)
