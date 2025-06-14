// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware({
  // Rotas públicas: acessíveis sem login
  publicRoutes: [
    '/',
    '/sign-in',
    '/sign-up',
    '/product(.*)',
    '/api/webhooks/user',
    '/api/webhooks/stripe',
  ],

  // Função executada após verificação de autenticação
  afterAuth(auth, req) {
    // Se a rota for privada e o usuário não estiver logado
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Libera acesso
    return NextResponse.next();
  },
});
export const config = {
  matcher: [
    // Aplica o middleware em todas as rotas, exceto arquivos estáticos e do _next
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
