# DSL Prototipe

MVP de gerador de telas Angular orientado por Design System. O LLM gera apenas uma Screen DSL JSON; o código Angular final é criado por renderers determinísticos.

## Requisitos

- Node.js LTS
- npm
- Docker Compose para PostgreSQL/Redis opcionais em desenvolvimento

## Instalação e execução

```bash
npm install
npm run db:migrate
npm run db:seed
npm test
npm run worker:demo
npm run build
```

## Variáveis de ambiente

- `DATABASE_URL`: conexão PostgreSQL para evolução real do Drizzle.
- `REDIS_URL`: conexão Redis/BullMQ.
- `OPENAI_API_KEY` ou `ANTHROPIC_API_KEY`: futuras integrações reais.

## Geração demonstrativa

`npm run worker:demo` gera `/contratos`, valida DSL, valida semântica, normaliza, cria arquivos Angular em `generated/contracts-project` e ZIP em `storage/contracts-project.zip`.

## Pacotes principais

- `packages/screen-dsl`: tipos, JSON Schema, Ajv e normalizador.
- `packages/design-system-registry`: catálogo DS demo e validação semântica.
- `packages/prompt-planner`: provider mock e interfaces OpenAI/Anthropic.
- `packages/angular-generation-model`: modelo intermediário.
- `packages/angular-generator`: renderers, arquivos e rota idempotente.
- `packages/sandbox`: comandos por allowlist.
- `apps/web`: Next.js App Router com login, dashboard, DS, nova geração e detalhe.
- `apps/worker`: pipeline vertical demonstrativo.

## Limitações do MVP

A checagem de build Angular é estática neste repositório para evitar instalação dinâmica durante a geração. O backend de negócio não é implementado; telas geradas usam apenas mocks. Autenticação é simples/demonstrativa.
