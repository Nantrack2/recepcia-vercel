-- RecepcIA Supabase setup
-- Target project: djigyogjzcabvfhtijpp
-- This script is idempotent and creates only public.recepcia_leads.

create extension if not exists pgcrypto;

create table if not exists public.recepcia_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  business_name text,
  message text,
  source text not null default 'recepcia',
  vertical text not null default 'hotels',
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed', 'discarded')),
  page_url text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_recepcia_leads_created_at on public.recepcia_leads (created_at desc);
create index if not exists idx_recepcia_leads_status on public.recepcia_leads (status);
create index if not exists idx_recepcia_leads_source on public.recepcia_leads (source);

create or replace function public.set_recepcia_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_recepcia_leads_updated_at on public.recepcia_leads;

create trigger trg_recepcia_leads_updated_at
before update on public.recepcia_leads
for each row
execute function public.set_recepcia_leads_updated_at();

alter table public.recepcia_leads enable row level security;

comment on table public.recepcia_leads is
'Leads de la landing RecepcIA. Inserción prevista mediante endpoint backend en Vercel con service_role. No insertar desde frontend.';
