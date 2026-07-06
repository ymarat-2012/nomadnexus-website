# Stage 1 — собираем статический сайт
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — отдаём готовые файлы через nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 8080;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/index.html $uri/ =404;
    }

    error_page 404 /404.html;
}
EOF

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
