# escuelajs-reto-09
Reto 9 Octubre 26: Curso de Backend con Node

## Platzi Store Backend

Ya tenemos el Backend de Platzi Store funcionando de manera local, es momento de unirlo a una base de datos en la nube con MongoDBAtlas.

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

## Problema 1
1. Utilizando el archivo `.env-example` realiza la configuración para tu archivo `.env`.
2. Crear tu base de datos en MongoDBAtlas.
3. Verificar que la conexión de tu aplicación a MongoDBAtlas funcione.

## Problema 2
1. Subir la información del mock a MongoDBAtlas.
2. Utilizando el archivo `src/services/index.js`, cambiar la lógica de `getProducts` para obtener la información de MongoDBAtlas.
3. Exponer en la API la información de Products en `/api/products/`.

## Problema 3 (opcional)
1. Ya cuentas con el endpoint para leer todos los Products, es momento de crear un CRUD para un Product individual.
2. Realizar tests con Mocha a los endpoints, mínimo 1 al endpoint `/api/products/`.
3. Realizar el deploy de tu aplicación con Now.sh.

### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-09](https://github.com/platzi/escuelajs-reto-09/)

### Licencia
escuelajs-reto-09 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
