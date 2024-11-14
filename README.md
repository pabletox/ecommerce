# El Zorro Gamer

## Dependencias
| <img src="https://brandeps.com/logo-download/F/Firebase-logo-vector-02.svg" width="50"> | <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" width="50"> | <img src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" width="50"> |<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" width="50"> |<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" width=""> |<img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" width="90"> |<img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsr0hy4omyh9hbyc9r1mh.png" width=""> |
|:-----------:|:--------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| `firebase`| `react`   | `react-router-dom`    |`react-toastify`    |`yup`    |`tailwind`    |`vite + react`    |


## Descripción

Este ecommerce es un prototipo perteneciente al proyecto final de un curso de coderhouse, aqui se aplicaron tecnologias de react para generar un sitio dinamico que esta basado en componentes y se utilizand distintas tecnicas.

El prototipo permite al cliente buscar productos que se encuentran almacenados en una base de datos (Firebase) y los cuales pueden ser filtrados por categoria, nombre o descripción utilizando los filtros laterales. Tambien permitira al cliente editar su carro de compra agregando o eliminando productos ahi mismo y finalmente le permitira finalizar su orden guardandola en Firebase y entregandole su numero de pedido, todo esto filtrando formularios y cuidando que el manejo de la información sea el correcto.

## Revision detallada de funcionalidad

### Pagina principal

- Carga una barra de navegaión (NavBar) con las categorias existentes, el logo del Zorro Gamer y el carrito de compra y el indicador de cuantos productos tiene en su carrito de compra.
- Muestra el listado de todos los produtos en Firebase con sus precios, al hacer click sobre cualquier producto te llevara al detalle de este.
- En el lado izquierdo se muestra un filtro que permite buscar por cualquier palabra de la pantalla, y tambien un filtro de categorias.

### Detalle de Producto

- En el detalle de producto se podra agregar distintas cantidades de productos, esto controlado por un maximo del stock generado el Firebase.
- Cuando no quede stock se mostrara un mensaje de sin stock que reemplazara el boton de agregar carrito.
- Al agregar productos al carrito se mostrara una notificación indicando que se agrego el producto en la parte superior derecha.

### Carrito de compra

- Se muestra el listado de productos seleccionados.
- Se pueden aumentar, disminur y eliminar productos del carrito cambiando los subtotales y totales a pagar.
- Existe un boton de vaciar carrito que elimina el carrito.
- Al agregar o quitar productos se mostrara un mensaje indicando que la accion se realizo.
- Al terminar la compra se digira a la ultima pantalla.

### Check out

- Aqui se soliitan los datos para finalizar la orden la cual  validara los campos para que todos sean ingresados y tomara el control del boton Terminar compra al momento de presionarlo y que todos los campos sean bien llenados, mostrando un mensaje de Cargando y deshabilitando el boton.
- Al finalizar el proceso se guardara la orden en firebase y tambien se actualizara el stock del producto y mostrara un boton de volver al inicio.



