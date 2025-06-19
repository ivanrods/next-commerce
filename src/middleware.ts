import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({});

export const config = {
  matcher: [
    // Ignora arquivos estáticos, _next e rotas API específicas (sem captura)
    '/((?!_next|api/(?:webhooks/user|webhooks/stripe|create-payment-intent)|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Aplica a todas as outras rotas API e trpc
    '/(api|trpc)(.*)',
  ],
};
