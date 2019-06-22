CREATE TABLE public.bank
(
    id bigserial,
    account character varying(64),
    bik_bank character varying(64),
    name character varying(256),
    name_mini character varying(64),
    address character varying(64),
);

COMMENT ON TABLE public.bank IS 'main table for banks information';
COMMENT ON COLUMN public.bank.id IS 'identifier';
COMMENT ON COLUMN public.bank.account IS 'bank corr account';
COMMENT ON COLUMN public.bank.bik_bank IS 'bik bank code';
COMMENT ON COLUMN public.bank.name IS 'name';
COMMENT ON COLUMN public.bank.name_mini IS 'mini name';
COMMENT ON COLUMN public.bank.address IS 'bank address';

CREATE INDEX bank_id_idx ON bank (id DESC);
