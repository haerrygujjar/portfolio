# Hirendra Gujjar — Portfolio

A responsive Next.js portfolio for software engineering, AI platforms, and distributed systems.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
```

This exports the site to `out/` and refreshes the script hashes used by the Content Security Policy.

## Host from your machine

The production image serves the static export through Nginx. It listens only on `127.0.0.1:8080`, runs as an unprivileged user, has a read-only filesystem, and drops Linux capabilities.

```bash
docker compose up --build -d
```

The container listens on `127.0.0.1:8080` by default. If that port is already in use, run `PORTFOLIO_HOST_PORT=8090 docker compose up --build -d` and open [http://localhost:8090](http://localhost:8090).

For a public site, create a named Cloudflare Tunnel and route your hostname to `http://127.0.0.1:8080`. Keep router port forwarding disabled and keep the local firewall closed to inbound web traffic. The tunnel makes outbound connections; Cloudflare handles public HTTPS and edge DDoS filtering before requests reach the local server. Enable any additional WAF or rate-limit rules available for your account. Once the hostname is using HTTPS, enable HSTS in Cloudflare.

The Nginx layer limits each client to 20 requests per second with a burst of 50, caps aggregate traffic at 100 requests per second with a burst of 150, limits concurrent requests per client, and rejects methods other than GET and HEAD. The limits are starting values for a portfolio and can be tuned in `deploy/nginx.conf`. The policy in `deploy/csp.conf` is regenerated on each production build from the exported HTML.

For private access, use Tailscale Serve instead of publishing a public hostname. For the least maintenance, host the static export on Cloudflare Pages or deploy through Vercel. Local hosting depends on your computer, power, and internet connection staying available. Avoid exposing the development server or forwarding port 3000 from your router.

This site has no API, login, database, or user-submitted content. Keep dependencies updated and review `pnpm audit` before releases.
