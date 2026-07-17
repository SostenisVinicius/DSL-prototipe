# Plano de implementação

1. **Análise**: repositório estava vazio, contendo apenas Git e `.gitkeep`; portanto o MVP foi criado como monorepo TypeScript do zero.
2. **Fluxo vertical primeiro**: implementar prompt demonstrativo → provider mock → DSL → schema/semântica → normalização → modelo Angular → arquivos → validação → ZIP.
3. **Fundação**: workspaces `apps/*` e `packages/*`, TypeScript strict, scripts, Docker Compose, Drizzle schema/migration/seed e documentação.
4. **DSL e DS**: contrato versionado, JSON Schema Draft 2020-12, registry demonstrativo com 17 componentes e validações próprias.
5. **Gerador**: renderers determinísticos por componente, template Angular sem bibliotecas visuais externas e registro idempotente de rota via AST do TypeScript.
6. **Pipeline**: sandbox por allowlist, logs estruturados, empacotamento ZIP e worker demonstrativo.
7. **Interface**: Next.js com páginas de login, dashboard, Design Systems, nova geração e detalhe com polling.

## Tarefas

- [x] Criar monorepo e configurações.
- [x] Criar plano antes das demais alterações.
- [x] Implementar contratos, schema e validações.
- [x] Implementar catálogo DS demonstrativo.
- [x] Implementar provider mock e reparo limitado.
- [x] Implementar modelo intermediário e renderers.
- [x] Implementar pipeline vertical e ZIP.
- [x] Implementar banco, migrations e seed.
- [x] Implementar UI MVP.
- [x] Adicionar testes principais e documentação.
