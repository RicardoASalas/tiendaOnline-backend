# THE ROCKSTORE (Tienda de instrumentos musicales online)

Este proyecto es un ejemplo ficticio para crear una e-Commerce o tienda online, en este caso basada en una tienda de
instrumentos musicales. Esta app simula un sistema de gestion de ventas de instrumentos vía online, por lo tanto, se podrán dar de alta usuarios, consultar su perfil, realizar compras, consultar las facturas de compra y en la parte de administrador se podran dar de alta nuevos productos, editar los existentes, consultar las facturas de todos los clientes asi como el historial de ventas por dia, més y año.

## Comenzando 🚀

Para instalar el programa y probarlo necesitarás descargar los archivos json para crear la base de datos, la parte de 
back, que suministrare el enlace más abajo y este mismo reposiorio que forma la parte del front.

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

Necesitas tener instalado Node.js, y todas las dependencias suministradas en el package.json tanto del back como del front.

Para hacer uso de la base de datos, debe tener instalado algun sistema de gestion de bases de datos tipo SQL (Mysql, MariaDB) y crear una base de datos llamada ecommerce, en este caso debe poner por defecto al crearla usuario: ecommerce,
y password: ecommerce para que funcione.

```
https://nodejs.org/es/

```
```
https://github.com/RicardoASalas/tiendaOnline-backend.git (Repositorio donde se encuentra el Back del proyecto)
https://github.com/RodXIII/tienda-online-frontend.git (Repositorio donde se encuentra el Front del proyecto)
```

### Instalación 🔧

Una vez descargados los dos repositorios e instalado Node.js en su equipo, desde una consola de comandos entre en el 
directorio de cada una de las partes del proyecto (Front y Back) y esriba en cada una de ellas:


```
$ npm install
```


## Despliegue 📦

Una vez instaladas las dependencias de cada una de las partes del proyecto, se procedera a crear y llenar las tablas 
de la base de datos. Para conseguir esto, en una consola de comandos, entramos en el directorio del proyecto backend 
y tecleamos: 

```
Sequelize db:seed:all
```
Una vez creada y sembrada la base de datos, debemos levantar el back y el front, tecleando en una consola de comandos,este mismo orden y en su respectivo directorio:

```
$ npm start
```

De este modo se abrirá una ventana en nuestro navegador predefinido con la aplicacion corriendo de forma local en el puerto 3000.

## Construido con 🛠️

Para desarrollar este proyecto se han utilizado las siguientes tecnologías:

* [React.js](https://es.reactjs.org/) - El framework web usado
* [Node.js](https://nodejs.org/es/) - Manejador de dependencias
* [Express.js](https://expressjs.com/es/) - Usado para generar la API
* [Sequelize](https://sequelize.org/) - ORM usado para conectar con la DB
* [MariaDB](https://go.mariadb.com/) - Sistema OpenSource de gestion de bases de datos MySql
* [Java Script](https://www.javascript.com/) - Lenguaje de desarrollo web
* [Git](https://git-scm.com/) - Sistema de control de versiones

## Autores ✒️

* **Ricardo Salas** - *Desarrollador* - [RicardoASalas](https://github.com/RicardoASalas)
* **Rodrigo Navarro** - *Desarollador* - [RodXIII](https://github.com/RodXIII)

## Licencia 📄

Este proyecto está bajo la Licencia (Open Source) 

---