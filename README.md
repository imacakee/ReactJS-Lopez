# ReactJS E-Commerce

## Inicialización

Despues de clonar el repositorio es necesario instalar todos los paquetes de node utilizando el comando `npm install`

Para levantar el entorno de desarrollo se debe correr el comando `npm run dev`

## UI & UX

Sitio web de tipo ecommerce desarrollado en JavaScript utilizando la librería ReactJS.
En conjunto con ReactJS se utilizaron otras librerías para mejorar la experiencia de usuario.

- [SweetAlert 2](https://sweetalert2.github.io/)
- [react-responsive-modal](https://www.npmjs.com/package/react-responsive-modal)
- [Bootstrap](https://getbootstrap.com/)

Se utilizó SweetAlert y react-responsive-modal para mejorar la experiencia de usuario al momento del proceso de compra.
Para evitar el desarrollo de CSS personalizado se implmentó bootstrap, particularmente utilizando su conjunto de clases utilitarias.

## API & DB

A fines de evitar el desarrollo backend, se utilizó [firebase](https://firebase.google.com/) para obtener funcionalidades de API y base de datos.

### Collections:

##### products

##

##

```
{
    id: string
    title: string,
    description: string,
    category: string,
    price: number,
    pictureUrl: string,
    stock: number,
}
```

##### orders

##

##

```
{
    buyer: {
        name: string,
        email: string,
        phone: string
    },
    items: [
        {
            id: string,
            title: string,
            price: number,
            quantity: number,
        }
    ],
    total: number
}
```
