Hola, voy comentando aquí mis decisiones en el código para esta prueba técnica. 

Quería estar seguro de completar el trabajo a tiempo y, ya que empecé con un poco de retraso, he decidido no utilizar Reducer y Redux.

La plataforma consiste en una única página y permite visualizar “tarjetas” contenidas en una API. 
La llamada a la API la hice en el archivo *api.js con la librería “axios” y se encuentra en la carpeta shared. Elegí este método por la facilidad con la que se hace el CRUD y pensando en futuras posibilidades para la plataforma. 

En *App.jsx utilicé la librería “react-router-dom” para dar una ruta y mostrar la posibilidad de tener más páginas. Al principio pensaba hacer los nuevos posts en una página dedicada pero luego preferí hacer todo en la página Home porque me parecía mucho mejor poder ver el post que se añadía en tiempo real en el listado. 

Los componentes: 

*MyButton.jsx es el componente reutilizable para cumplir con el primer objetivo. 

*Card.jsx creé una función para poner en mayúsculas las respuestas de la API y también llamo a la función deletePost. 

En *CardList.jsx utilizo el useState en 2 ocasiones: una para el uso del componente Loading.jsx (el setTimeOut() está para poder ver el gif) y el segundo uso es para modificar el array cards para eliminar y añadir posts en tiempo real. También utilizo el useEffect al hacer la llamada a la API y controlar el renderizado. 

*NewPost.jsx utilicé el useForm para el formulario al darle al boton se añade un post nuevo al listado en tiempo real pero también con un falso envío de datos a la API como si estuviera el backend. 

*NavBar y Footer ayudan a moverse arriba y abajo en la página. En caso de añadir otra o más páginas, mi intención es mover el botón de scroll down o cambiarle el nombre. 

*Loading para entretener durante el cargamiento de los datos, es completamente reutilizable en caso de necesidad.

Hice uso de chakra al final cuando vi que los objetivos minimios estaban cumplidos y me quedava un poco de timpo. No quise añadir la libreria en las roots ma solo donde necesitaba sus componentes, sobre todos los iconos y en card.jsx para mostrar las tarjetas desplegables.


