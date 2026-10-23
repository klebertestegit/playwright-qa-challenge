Playwright QA Challenge
Descrição
Projeto desenvolvido utilizando Playwright e TypeScript para automação de testes web.

Tecnologias Utilizadas
Playwright
TypeScript
Node.js
Estrutura do Projeto
pages
fixtures
tests
Cenários Automatizados
Login positivo com sucesso
Login negativo com usuário bloqueado
Compra de produto com sucesso
Massa de Teste
Localizada em:

fixtures/users.json
Instalação
npm install
Executar Todos os Testes
npx playwright test
Executar Testes Individuais
Login positivo:

npx playwright test tests/login-positive.spec.ts
Login negativo:

npx playwright test tests/login-negative.spec.ts
Compra de produto:

npx playwright test tests/purchase-flow.spec.ts
Relatório HTML
npx playwright show-report
Evidências
O projeto está configurado para gerar automaticamente:

Screenshot em caso de falha
Vídeo em caso de falha
Trace em caso de falha
Navegadores Utilizados
Chromium
Firefox
WebKit
