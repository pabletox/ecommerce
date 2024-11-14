# El Zorro Gamer

## Dependencias
| <img src="https://brandeps.com/logo-download/F/Firebase-logo-vector-02.svg" width="50"> | <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png" width="50"> | <img src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png" width="50"> |<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" width="50"> |<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" width=""> |<img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" width="90"> |<img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsr0hy4omyh9hbyc9r1mh.png" width=""> |
|:-----------:|:--------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| `firebase`| `react`   | `react-router-dom`    |`react-toastify`    |`yup`    |`tailwind`    |`vite + react`    |


## Descripción

Este ecommerce es un prototipo desarrollado como parte del proyecto final de un curso de Coderhouse. Aquí se aplicaron tecnologías de React para generar un sitio dinámico basado en componentes y se utilizaron distintas técnicas.

El prototipo permite al cliente buscar productos que se encuentran almacenados en una base de datos (Firebase) y que pueden ser filtrados por categoría, nombre o descripción utilizando los filtros laterales. También permite al cliente editar su carrito de compras agregando o eliminando productos, y finalmente le permite finalizar su orden, guardándola en Firebase y entregándole su número de pedido. Todo esto se realiza validando formularios y asegurando que el manejo de la información sea correcto.

## Revisión detallada de funcionalidades

### Página principal

- Carga una barra de navegación (NavBar) con las categorías existentes, el logo de El Zorro Gamer y el carrito de compras, junto con el indicador de la cantidad de productos en el carrito.
- Muestra el listado de todos los productos en Firebase con sus precios. Al hacer clic sobre cualquier producto, te llevará al detalle de este.
- En el lado izquierdo se muestra un filtro que permite buscar por cualquier palabra visible en la pantalla, y también un filtro de categorías.

### Detalle de Producto

- En el detalle de producto se pueden agregar distintas cantidades, controladas por un máximo según el stock disponible en Firebase.
- Cuando no quede stock, se mostrará un mensaje de "Sin stock" que reemplazará el botón de agregar al carrito.
- Al agregar productos al carrito, se mostrará una notificación indicando que el producto ha sido agregado en la parte superior derecha.

### Carrito de compra

- Se muestra el listado de productos seleccionados.
- Se pueden aumentar, disminuir y eliminar productos del carrito, actualizando los subtotales y el total a pagar.
- Existe un botón de "Vaciar carrito" que elimina todos los productos del carrito.
- Al agregar o quitar productos, se mostrará un mensaje indicando que la acción se realizó correctamente.
- Al terminar la compra, se redirige a la pantalla de checkout.

### Checkout

- Aquí se solicitan los datos necesarios para finalizar la orden. Se validarán los campos para asegurar que todos sean ingresados correctamente. El botón "Terminar compra" se habilitará solo cuando los campos estén bien llenados, mostrando un mensaje de "Cargando" y deshabilitando el botón temporalmente.
- Al finalizar el proceso, se guardará la orden en Firebase, se actualizará el stock del producto y se mostrará un botón de "Volver al inicio".


