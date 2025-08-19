Contributing to Zip Chat

Thank you for your interest in contributing. This document outlines how to propose changes and help improve Zip Chat.

Code of conduct

Be respectful and constructive. Assume good intent. Focus on technical issues, not individuals.

Project layout

- apps/web: React + TypeScript web client
- server/auth: Auth service (Express)
- server/chat: Chat ingress service (Express, Kafka producer)
- server/message: WebSocket service (Express, Kafka consumer)
- packages/shared: Shared constants/types

Getting started (local)

1. Install Node.js >= 20 and npm >= 10
2. npm install
3. Copy .env.example to .env for each service and set required variables (MONGO_URI, KAFKA_BROKERS, AUTH_JWT_SECRET)
4. Start infra: docker compose -f server/docker-compose.yml up -d
5. Run services: npm run dev:auth, npm run dev:chat, npm run dev:message
6. Run web: npm --workspace apps/web run dev

Branching and PRs

- Create a feature branch from main
- Keep edits focused and incremental
- Include a concise description and motivation in the PR
- Reference related issues when applicable

Coding guidelines

- TypeScript strict mode
- Prefer explicit and descriptive names
- Keep functions small with clear responsibilities
- Add tests where it makes sense (unit/integration)
- Avoid introducing breaking API changes without discussion

Commit messages

- Use short, imperative subject lines
- Include context in the body when beneficial

Security and secrets

- Never commit secrets (.env, credentials)
- Report vulnerabilities privately to maintainers if discovered

Licensing

By contributing, you agree that your contributions will be licensed under the project’s chosen license. If LICENSE is not yet present, propose one (e.g., MIT) in your PR.

Questions

Open an issue for discussion or clarification before large changes. We welcome ideas and feedback.
