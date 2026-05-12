# RecepcIA — Vercel + Supabase + Resend

Landing vertical de RecepcIA preparada para desplegar en Vercel sin depender de Base44 Internal DB.

## Seguridad

- No hay `VITE_SUPABASE_*` en el frontend.
- `SUPABASE_SERVICE_ROLE_KEY` solo se usa en `api/recepcia-lead.js`.
- El formulario envía datos a `/api/recepcia-lead`.
- La tabla destino es `public.recepcia_leads` en el proyecto Supabase `djigyogjzcabvfhtijpp`.

## Variables de entorno en Vercel

```env
SUPABASE_URL=https://djigyogjzcabvfhtijpp.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
RECEPCIA_NOTIFY_EMAIL=pimeiatgn@gmail.com
RECEPCIA_FROM_EMAIL=info@pimeia.es
RECEPCIA_SOURCE=recepcia
RECEPCIA_VERTICAL=hotels
```

## Orden recomendado

1. Subir este proyecto a GitHub.
2. Importar el repositorio en Vercel.
3. Configurar las variables de entorno.
4. Hacer deploy preview.
5. Probar el formulario.
6. Verificar que aparece una fila en `public.recepcia_leads`.
7. Verificar el email interno.
8. Solo después conectar `recepcia.es`.
