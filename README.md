# REST API Node.js PostgreSQL

El presente proyecto permite registrar y obtener un usuario.

- Node.js
- PostgreSQL
- Express
- pg

## Instalación

Para instalar las dependencias iniciales del proyecto ejecutamos lo siguiente:

```sh
$ npm init -y
$ npm i express pg
```

Para iniciar el servidor escribimos lo siguiente en el terminal.

```sh
$ clear
$ node src/index.js
```

Si cada vez que realizamos un cambio no queremos deterner el servidor. En ese caso debemos usar nodemon.

```sh
$ npm i nodemon -D
$ npm run dev
```
Esta basado en el tutorial de Fazt: https://youtu.be/7NfvC-gOcRc

## Problema

Si se cierra sin cancelar el terminal con el nodemon activo (control + c).
Utilizar lo siguiente para liberar el puerto:

```sh
$ lsof -i tcp:3000 
$ kill -9 PID
```