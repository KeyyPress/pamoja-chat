Zip Chat

Overview

Zip Chat is an open source one-to-one and group chat application. It uses a TypeScript monorepo with a React frontend and Express-based microservices on the backend. Messages are end-to-end encrypted on the client. Kafka handles real-time fanout and MongoDB stores users, chats, and message history.

Tech stack

- Frontend: Vite + React + TypeScript
- Backend: Express (TypeScript) microservices
- Messaging: Kafka (via Docker Compose for local dev)
- Database: MongoDB (Atlas or local)
- WebSockets: ws
- Validation: zod

Monorepo layout

```
apps/
  web/                 # React web app
server/
  auth/                # Auth service (register, login, public keys)
  chat/                # Chat ingress API → produces to Kafka
  message/             # WebSocket service → consumes from Kafka
  docker-compose.yml   # Local infra (Kafka, Zookeeper, Kafka UI, Mongo)
packages/
  shared/              # Shared constants/types (e.g., Kafka topics)
```

Services

- auth
  - POST /register, POST /login, GET /public-key
  - Stores users, password hashes, and public keys in MongoDB
- chat
  - POST /messages validates encrypted payloads, persists, and publishes to Kafka
- message
  - WebSocket fanout; consumes messages from Kafka and pushes to online recipients

Prerequisites

- Node.js >= 20 and npm >= 10
- Docker Desktop (for local Kafka/Zookeeper/Kafka UI and optional Mongo)
- A MongoDB URI (MongoDB Atlas or local Mongo)

Environment variables

Backend services expect:

- MONGO_URI (e.g., mongodb://localhost:27017/zip or a MongoDB Atlas SRV URI)
- KAFKA_BROKERS (defaults to localhost:29092 for local dev)
- AUTH_JWT_SECRET (auth service)

Frontend expects in apps/web/.env:

- VITE_AUTH_BASE_URL (default http://localhost:4001)
- VITE_API_BASE_URL (default http://localhost:4002)
- VITE_WS_URL (default ws://localhost:4003)

Local development

1. Install dependencies

```
npm install
```

2. Configure env files

- Copy each server service `.env.example` to `.env` and set values as needed.
- Copy `apps/web/.env.example` to `apps/web/.env`.

3. Start infra

From the repo root:

```
docker compose -f server/docker-compose.yml up -d
```

If you use MongoDB Atlas instead of local Mongo, you can start only Kafka-related services:

```
docker compose -f server/docker-compose.yml up -d zookeeper kafka kafka-ui
```

4. Start backend services (in separate terminals)

```
npm run dev:auth
npm run dev:chat
npm run dev:message
```

Health checks:

- http://localhost:4001/health
- http://localhost:4002/health
- http://localhost:4003/health

5. Start frontend

```
npm --workspace apps/web run dev
```

Open the printed URL (typically http://localhost:5173).

Simple end-to-end test

1. Register two users via the auth service.
2. Open two browser tabs to the WebSocket URL with userId query param.
3. POST an encrypted message to the chat service; observe the message delivered to the recipient tab and persisted in MongoDB.

Deployment (Render example)

- Use managed Kafka and MongoDB (e.g., Upstash/Confluent and MongoDB Atlas). Set MONGO_URI and KAFKA_BROKERS (and SASL/SSL if required) for each service on Render.
- Create three Web Services for `server/auth`, `server/chat`, `server/message` and one Static Site for `apps/web`.
- Build command (root): `npm ci && npm -ws --if-present run build`
- Start commands:
  - Auth: `npm --workspace server/auth start`
  - Chat: `npm --workspace server/chat start`
  - Message: `npm --workspace server/message start`
- Frontend Static Site:
  - Root: `apps/web`
  - Build: `npm ci && npm run build`
  - Publish: `dist`

Open source

Zip Chat is an open source project. Contributions are welcome. See CONTRIBUTION.md for guidelines. A LICENSE file can be added to formalize licensing (e.g., MIT).

# zip-chat
