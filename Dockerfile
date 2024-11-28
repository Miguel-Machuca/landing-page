# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de tu proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Expón el puerto 80 para que Nginx esté accesible
EXPOSE 80
