# DSL Prototipe MVP

Monorepo TypeScript para gerar telas Angular standalone a partir de uma Screen DSL validada contra um Design System cadastrado.

## Execução

- `npm install`
- `npm run db:migrate`
- `npm run db:seed`
- `npm test`
- `npm run worker:demo`
- `npm run build`

## Arquitetura

Prompt refinado → provider de DSL mockado/IA → JSON Schema Draft 2020-12 → validação semântica → normalização determinística → Angular Generation Model → renderers determinísticos → template Angular → validação/build estático → ZIP.

## Segurança

O gerador não aceita comando livre; `packages/sandbox` expõe apenas comandos por enum. O registro semântico bloqueia componentes, inputs, outputs, bindings e estilos/código arbitrários desconhecidos. O template não usa Angular Material, PrimeNG, Bootstrap ou bibliotecas visuais externas.

## Limitações do MVP

A validação de build Angular neste ambiente é estática para manter a entrega reproduzível sem instalação dinâmica durante a geração; o template contém dependências Angular pré-declaradas e scripts de checagem. Providers OpenAI/Anthropic estão preparados, mas não fazem chamadas reais sem implementação/configuração de chave.
