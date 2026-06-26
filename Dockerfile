# Fase di build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase di produzione con NGINX
FROM nginx:alpine
# Copia l'output della build
COPY --from=build /app/dist /usr/share/nginx/html
# Copia la configurazione personalizzata per gestire la SPA e la porta 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
