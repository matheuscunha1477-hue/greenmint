Hortelã Verde - Mercado NFT
Desafio Greenfield / Jungle Gaming

Marketplace de NFTs onde o usuário pode explorar artes vivas, visualizar preços em ETH e simular a compra com cálculo preciso de taxas.

**Demo Online:** https://greenmint-phi.vercel.app/
**Repositório:** https://github.com/matheuscunha1477-hue/greenmint

Acesso para teste
**E-mail:** teste@teste.com
**Senha:** 123456

---

Status do Projeto

**MVP entregue dentro do prazo de 2 dias.**

Devido ao prazo curto do desafio, priorizei entregar um MVP funcional, estável e com deploy realizado, ao invés de entregar todas as telas incompletas. As funcionalidades que não foram finalizadas estão documentadas em "Próximos Passos" ao final deste README, com a solução técnica já definida.

Como rodar o projeto

```bash
npm install
npm run dev
Acesse em `http://localhost:5173`

Stack Utilizada

- *React + TypeScript + Vite*
- *TanStack Router* - Estrutura de rotas e navegação
- *TanStack Query + Axios* - Busca de dados, cache e loading (cliente em `src/api/client.ts`)
- *MSW 2.4.9* - Mock da API (mocks em `src/mocks`)
- *Socket.IO Client* - Comunicação em tempo real
- *Decimal.js* - Cálculo preciso de valores financeiros em ETH
- *Tailwind CSS* - Estilização

Funcionalidades Entregues

- [x] Listagem de NFTs com imagem, nome, coleção e preço
- [x] Login de teste para simular fluxo do usuário
- [x] Mock completo da API com MSW, sem depender de backend
- [x] Cálculo de preço final: preço + 10% de taxa
- [x] Deploy funcional na Vercel
- [x] Layout responsivo

Decisões Técnicas

*1. http://Decimal.js para cálculo de ETH*
Não usei conta normal em JavaScript porque ela gera erro de ponto flutuante (ex: 0.1 + 0.2 = 0.30000000004). Com http://Decimal.js o cálculo de preço + taxa fica exato, o que é essencial para valores financeiros.

*2. MSW para mockar a API*
Permite que o front-end funcione de forma independente do back-end, facilitando testes e desenvolvimento.

*3. TanStack Query + Axios*
Para gerenciar cache, loading e requisições de forma organizada, evitando `useEffect` + `fetch` soltos.

*4. Priorização do MVP*
Com 2 dias de prazo, escolhi garantir que a listagem, o login e o cálculo funcionassem 100% antes de avançar para telas secundárias.

O que não foi finalizado pelo prazo

Por conta do prazo de 2 dias, as seguintes features ficaram para a próxima etapa e já estão mapeadas:

- [ ] Página de detalhes do NFT (`/nft/:id`) com TanStack Router - estrutura de rota já criada
- [ ] Busca e filtro por nome / coleção
- [ ] Carrinho / Favoritos com persistência
- [ ] Testes unitários do cálculo com http://Decimal.js

A base do projeto já está pronta para receber essas features sem refatoração.

Estrutura de Pastas
src/
  api/ - cliente Axios
  mocks/ - handlers MSW
  pages/ - telas
  components/ - componentes reutilizáveis
---

Desenvolvido por Matheus José da Cunha



