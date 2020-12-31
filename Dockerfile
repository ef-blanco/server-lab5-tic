# Configuración de la nueva imagen que se va a generar
# En caso de tener alguna duda o si desea profundizar consulte la guia oficial en
# https://docs.docker.com/engine/reference/builder/

# Imagen base sobre la cual montar los archivos. En este caso
# la ultima version disponible de Node.js. Si se desea especificar
# una version use <imagen>:<tag|version>
FROM node:lts-alpine3.12

# Vamos a copiar todos los archivos presentes en esta carpeta
# La ruta de de destino es relativa al contexto de esta carpeta en el
# sistema Host.
COPY . .

# Vamos a instalar todos los paquetes requeridos por la aplicacion
# para ello utilizamos la sentencia RUN que nos permite ejecutar comandos
# diferentes a la ejecución principal de la aplicación (entrrypoint). Estos
# ultimos los declararemos con la sentencia CMD mas adelante.
RUN npm i

# Como mencionamos anteriomente debemos generar el punto de entrada
# para ello usamos la sentencia CMD
CMD [ "npm", "run", "serve" ]

# Recordemos que esta es la configuracion de la imagen como tal
# si desean pueden incluir variables del entorno aqui aunque no es 
# recomendable. Declarenlas en la configuración del contenedor