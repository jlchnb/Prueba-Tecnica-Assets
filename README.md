# Prueba-Tecnica-Assets
Prueba tecnica realizada por Julio Cohen Banda

Instrucciones para ejecucion del codigo:<br>
1.- Clonar el repositorio git clone https://github.com/jlchnb/Prueba-Tecnica-Assets.git<br>
2.- Instalar dependencias para el backend:<br>
    <center>*cd backend*</center><br>
    *pip install -r requirements.txt*<br>
    una vez hecho eso, levantar el entorno virtual con el comando<br>
    *.\env\Scripts\activate*<br>
    luego levantar el servidor<br>
    *python manage.py runserver*<br>
3.- Instalar dependencias para el front end:<br>
    *cd frontend*<br>
    *npm install*<br>
    *npm start*<br>

Prueba Técnica Desarrollador Assets 1
Prueba Técnica Desarrollador
Assets
Introducción
El objetivo de este proyecto es desarrollar una aplicación full stack que extraiga
datos de una base de datos existente, cree modelos relacionados y muestre la
información a través de una interfaz frontend. Este ejercicio tiene como fin evaluar
tu capacidad para manejar un proyecto desde el backend hasta el frontend,
utilizando herramientas modernas de desarrollo web.
Parte 1: Configuración del Entorno
Se proporcionarán las credenciales para acceder a la base de datos existente que
contiene la tabla tabla_cubo . Esta tabla contiene datos ejemplo de gestiones que
resultaron en pagos de deudores gestionados por nuestros gestores durante un
mes. Utiliza estos datos únicamente para lectura.
1. Descripción de la Tabla tabla_cubo
CLIENTE: Nombre del cliente (cartera).
RUT: Número de identificación del deudor.
GESTOR: Nombre del gestor que realizó la gestión.
MONTO: Monto de la pago.
F_PAGO: Fecha de pago.
ABONOS: Total de abonos realizados.
2. Credenciales
Host: --------------------------
Database: assets_backend_test
Username: assets_backend_test_user
Prueba Técnica Desarrollador Assets 2
Password: --------------------
Parte 2: Desarrollo Backend
1. Configuración Inicial
Crea un proyecto utilizando Django (idealmente) u otro framework
backend de tu elección.
2. Modelos de Datos
Crea los siguientes modelos en tu proyecto:
Cliente: información relevante sobre los clientes.
Gestor: información relevante sobre los gestores.
Pago: representa un pago, incluyendo fecha, cliente, monto, gestor,
deudor y cualquier otra información relevante.
Los modelos deben estar relacionados correctamente entre ellos.
3. Extracción de Datos
Escribe un script para extraer datos de la tabla tabla_cubo en la base de
datos proporcionada y poblar las tablas Cliente , Gestor y Pago en tu base
de datos local (por ejemplo, SQLite).
4. Endpoints API
Crea los endpoints necesarios para acceder a los datos desde el frontend,
permitiendo operaciones básicas de lectura y escritura.
Parte 3: Desarrollo Frontend
1. Configuración del Frontend
Utiliza React (idealmente) u otro framework frontend de tu elección para
crear una interfaz de usuario.
2. Visualización de Datos
Crea una vista en la interfaz frontend que muestre la siguiente información
acerca de cada cliente:
La información de cada cliente (nombre)
Prueba Técnica Desarrollador Assets 3
Los gestores que hicieron gestiones para cada cliente.
El monto total gestionado por cada gestor (suma de abonos).
El abono total recibido por cada cliente, sumando los abonos de todos
los gestores los pagos asociados.
3. Integración con la API
Configura el frontend para realizar llamadas a los endpoints de la API y
mostrar los datos en la interfaz.
Instrucciones de Entrega
Repositorio GitHub
Crea un repositorio en GitHub y sube todo el código fuente (backend y
frontend) al repositorio. Puede ser uno para front y otro para back o uno
para ambos, en cualquier caso, dejar explicitado.
Proporciona un archivo README.md con instrucciones claras sobre cómo
ejecutar el proyecto tanto en el backend como en el frontend.
Incluye cualquier comando necesario para poblar el código.
Enlace de Entrega
Envía el enlace al repositorio de GitHub por correo electrónico a
ignacio_urrutia@assets.cl .
Notas Adicionales
Escribe un código limpio y bien documentado.
Puedes utilizar librerías adicionales si lo consideras necesario, pero
documenta claramente su uso en el archivo README.md .
Cualquier supuesto, dejar explicitado en el Readme.