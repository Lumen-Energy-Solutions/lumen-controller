# Lumen Controller

**Lumen Controller** es una plataforma de control de dispositivos IoT desarrollada por [Lumen Energy Solutions](https://www.lumenenergysolutions.com/). Esta aplicación permite la gestión y supervisión de dispositivos de energía inteligente a través de una interfaz web moderna y un backend robusto.

## 🚀 Características

- **Backend en Python**: Utiliza `Flask` para manejar las operaciones del servidor.
- **Frontend en TypeScript**: Interfaz de usuario interactiva y receptiva.
- **Contenedorización con Docker**: Facilita el despliegue y la escalabilidad.
- **Gestión de dependencias**: Manejo eficiente de paquetes mediante `requirements.txt` y `package.json`.
- **Automatización de tareas**: Uso de `Makefile` para simplificar comandos comunes.
- **Configuración flexible**: Archivos `.env` para una fácil configuración del entorno.

## 📁 Estructura del Proyecto

\`\`\`
lumen-controller/
├── src/                  # Código fuente del backend
├── ui/                   # Código fuente del frontend
├── .dockerignore         # Archivos y carpetas ignorados por Docker
├── .env.example          # Ejemplo de archivo de variables de entorno
├── .gitignore            # Archivos y carpetas ignorados por Git
├── Dockerfile            # Instrucciones para construir la imagen de Docker
├── Makefile              # Tareas automatizadas
├── deploy.txt            # Instrucciones de despliegue
├── docker-compose.yml    # Configuración de servicios Docker
├── main.py               # Punto de entrada principal del backend
├── package.json          # Dependencias y scripts del frontend
├── requirements.txt      # Dependencias del backend
└── wsgi.py               # Configuración para servidores WSGI
\`\`\`

## 🛠️ Requisitos Previos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Python 3.8+](https://www.python.org/downloads/)
- [Node.js 14+](https://nodejs.org/)

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio:**

   \`\`\`bash
   git clone https://github.com/Lumen-Energy-Solutions/lumen-controller.git
   cd lumen-controller
   \`\`\`

2. **Configurar las variables de entorno:**

   Copia el archivo `.env.example` y renómbralo a `.env`. Luego, ajusta las variables según tu entorno.

   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. **Construir y levantar los contenedores:**

   \`\`\`bash
   docker-compose up --build
   \`\`\`

   Esto iniciará tanto el backend como el frontend en contenedores separados.

4. **Acceder a la aplicación:**

   Una vez que los servicios estén en funcionamiento, puedes acceder a la interfaz web en [http://localhost:3000](http://localhost:3000).

## 📦 Despliegue

Para construir y publicar imágenes multiplataforma en Docker Hub, usa los siguientes comandos:

\`\`\`bash
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t lumensolutions/lumen-controller:latest --push .
docker buildx build --platform linux/arm/v7 -t lumensolutions/lumen-controller:latest --push .
\`\`\`


## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agregar nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.


---

> Desarrollado con ❤️ por [Lumen Energy Solutions](https://www.lumenenergysolutions.com/).