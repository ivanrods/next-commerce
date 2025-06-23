# 🛍️ NightShift Commerce

NightShift Commerce é uma aplicação de e-commerce de roupas com foco em performance, autenticação segura e integração com pagamentos online. Desenvolvida com tecnologias modernas como Next.js, Clerk, Stripe e Prisma.

---

## 🚀 Demonstração

![Screenshot From 2025-06-23 11-06-37](https://github.com/user-attachments/assets/11e8e9aa-47a1-4bd1-b4d9-b2fd3b5de765)


---

## ✨ Funcionalidades

- Autenticação de usuários com Clerk
- Cadastro automático de clientes no Stripe
- Integração completa com pagamentos (Stripe)
- Gerenciamento de carrinho de compras com Zustand
- Interface responsiva e moderna com Tailwind + Framer Motion
- API segura com proteção via middleware
- Painel de pedidos para o usuário

---

## 🧪 Tecnologias utilizadas

- [Next.js](https://nextjs.org/) `15.3.3`
- [React](https://reactjs.org/) `19`
- [Prisma](https://www.prisma.io/)
- [Clerk Auth](https://clerk.dev/) (`@clerk/nextjs`, `svix`)
- [Stripe](https://stripe.com/) (`stripe`, `@stripe/react-stripe-js`)
- [Zustand](https://zustand-demo.pmnd.rs/) – gerenciamento de estado global
- [Lucide React](https://lucide.dev/) – ícones modernos
- [Framer Motion](https://www.framer.com/motion/) – animações
- Tailwind CSS v4 

---

## 📦 Instalação e uso local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nightshift-commerce.git
cd nightshift-commerce

# Instale as dependências
yarn

# Configure o ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do Clerk, Stripe e banco de dados

# Gere o client do Prisma
npx prisma generate

# Rode as migrations e atualize o banco
npx prisma migrate dev --name init

# Inicie o servidor de desenvolvimento
yarn dev

