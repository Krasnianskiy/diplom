CREATE TABLE public.currency
(
    id bigserial,
    alfa_code character varying(64),
    alfa2_code character varying(64),
    course character varying(256),
);

COMMENT ON TABLE public.currency IS 'main table for banks information';
COMMENT ON COLUMN public.currency.alfa_code IS 'alfa code';
COMMENT ON COLUMN public.currency.alfa2_code IS 'alfa2 code';
COMMENT ON COLUMN public.currency.course IS 'cours between currency and RUB';

CREATE INDEX currency_id_idx ON currency (id DESC);
