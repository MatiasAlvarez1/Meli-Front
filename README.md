# Correr la app

1- Realizar npm i para instalar los paquetes necesarios para la aplicacion. Al encontrarse
   el package.json en el root, se instalaran los paquetes necesarios para correr client y 
   server.
   
2- El proyecto corre por medio del comando "npm run dev". Lo cual correra el programa para 
   el ambito local. Se ingresa al proyecto cliente por la url "localhost:3000".
   
3- Para crear el build, colocar el comando "npm run production". Este comando compila tanto
   el cliente como el servidor y crea el compilado de ambos en el directorio "dist" de cada
   uno. Luego se puede correr la aplicacion una vez compilada en la url "localhost:3001".


# Notas

- La version de node utilizada es la v12.18.4 (npm v6.14.6). La de react es la v17.0.2.

- La compilacion del node es realizada por medio de babel mientras que la del proyecto cliente
  se hace por la herramienta propia de react.

- En la parte de node se encuentran los servicios de adaptacion de datos de la API de mercado libre
  asi como las clases necesarias para esta adaptacion. 
  Los servicios (en este caso son 2 ya que la app consulta a 2 endpoints de la API de mercado libre
  diferente) se encuentran en el directorio "server/services", y los modelos en "server/models".

- Por problemas en la configuracion se decidio utilizar solamente Javascript y no Typescript.

- Hay notas adicionales como comentarios en archivos del server.

- En el cliente se encuentran dentro de "client/src/core/" los componentes, configuraciones, servicios
  y funciones utiles (utils).

- No se utiliza un tipado de clases en el cliente ya que es un test. En caso que la app sea productiva
  o compartida, se puede utilizar propTypes o typescript para conocer las props de cada componente.

- Las configuraciones de los entornos se colocaron por medio de NODE_ENV, y se colocan al momento de 
  correr las aplicaciones.

- La aplicacion en react cuenta con algunos componentes con test, realizados con react-test-library. 

  