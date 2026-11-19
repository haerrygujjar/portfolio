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

## Portfolio chat

The “Chat with me” panel answers common questions about Hiren, Invorto, Lumen, Converse, his background, and his technical focus directly from the portfolio profile. This works without an AI model. If an optional Amazon Bedrock model is enabled and unavailable, the assistant offers a contact form instead of leaving the visitor with an error.

Chat messages are stored in PostgreSQL. A visitor’s name, email, and unanswered question are stored only when they submit the contact form and agree that Hiren can use those details to reply. The database is reachable only on the private Docker network and uses a persistent Docker volume; it has no public port. The database password is kept in the ignored `.env` file.

```bash
cp .env.example .env
```

Replace `POSTGRES_PASSWORD` in `.env` with a long random value, then start the site:

```bash
docker compose up --build -d
```

Read submitted inquiries from the host:

```bash
docker compose exec db psql -U portfolio -d portfolio -c 'SELECT created_at, name, email, message FROM inquiries ORDER BY created_at DESC;'
```

Review recent chat exchanges:

```bash
docker compose exec db psql -U portfolio -d portfolio -c 'SELECT created_at, session_id, role, message FROM chat_messages ORDER BY created_at DESC LIMIT 100;'
```

The volume survives container recreation and `docker compose down`; do not use `docker compose down -v` unless you intend to erase stored messages. Back up the database volume regularly. To enable Bedrock responses for questions outside the built-in answers, set `BEDROCK_ENABLED=true` and provide an EC2 instance role with narrowly scoped model access. Model calls are billed; without that setting, no model is called. If the chat API or database is unavailable, the widget offers Hiren’s email as a fallback.

Nginx limits chat and inquiry submissions to 6 requests per minute per IP (with a small burst), caps global request rate, and rejects request bodies over 8 KB.

Keep dependencies updated and review `pnpm audit` before releases.
