FROM node:22-alpine AS build

WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:stable-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/deploy/csp.conf /etc/nginx/snippets/portfolio-csp.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 8080
USER 101:101
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off; pid /tmp/nginx.pid;"]
