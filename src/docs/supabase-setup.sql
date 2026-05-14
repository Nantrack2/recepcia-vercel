-- ============================================================
-- RecepcIA — Setup Supabase
-- Proyecto: djigyogjzcabvfhtijpp
-- Tabla:    public.recepcia_leads
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================================

create table if not exists public.recepcia_leads (
  id            uuid        primary key default gen_random_uuid(),
  name          text        not null,
  email         text        not null,
  phone         text,
  business_name text,
  message       text,
  source        text        not null default 'recepcia',
  vertical      text        not null default 'hotels',
  status        text        not null default 'new',
  consent_rgpd  boolean     not null default false,
  page_url      text,
  user_agent    text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Trigger para updated_at automático
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger recepcia_leads_updated_at
  before update on public.recepcia_leads
  for each row execute function public.set_updated_at();

-- RLS activado: ningún cliente puede leer ni escribir directamente
alter table public.recepcia_leads enable row level security;

-- No se crea ninguna policy pública.
-- El insert se hace desde /api/recepcia-lead usando SUPABASE_SERVICE_ROLE_KEY (solo backend).
-- La lectura de leads se hace desde el Dashboard de Supabase o con service_role en backend.

-- Índices útiles para búsqueda y orden
create index if not exists recepcia_leads_email_idx      on public.recepcia_leads (email);
create index if not exists recepcia_leads_created_at_idx on public.recepcia_leads (created_at desc);
create index if not exists recepcia_leads_status_idx     on public.recepcia_leads (status);
create index if not exists recepcia_leads_source_idx     on public.recepcia_leads (source);