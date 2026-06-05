CREATE TABLE IF NOT EXISTS properties (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  location_id TEXT NOT NULL,
  price TEXT NOT NULL,
  budget TEXT NOT NULL,
  image TEXT NOT NULL,
  gallery JSONB NOT NULL DEFAULT '[]'::jsonb,
  about_title TEXT NOT NULL,
  about_text TEXT NOT NULL,
  facts JSONB NOT NULL DEFAULT '[]'::jsonb,
  amenities JSONB NOT NULL DEFAULT '[]'::jsonb,
  master_plan_title TEXT NOT NULL DEFAULT 'Master Plan',
  master_plan_image TEXT NOT NULL DEFAULT '',
  master_plan TEXT NOT NULL,
  terrace_plan TEXT NOT NULL DEFAULT '',
  floor_plan_title TEXT NOT NULL DEFAULT 'Floor Plans',
  floor_plan_image TEXT NOT NULL DEFAULT '',
  floor_plan TEXT NOT NULL DEFAULT '',
  units JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE properties ADD COLUMN IF NOT EXISTS master_plan_title TEXT NOT NULL DEFAULT 'Master Plan';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS master_plan_image TEXT NOT NULL DEFAULT '';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS terrace_plan TEXT NOT NULL DEFAULT '';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS floor_plan_title TEXT NOT NULL DEFAULT 'Floor Plans';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS floor_plan_image TEXT NOT NULL DEFAULT '';
ALTER TABLE properties ADD COLUMN IF NOT EXISTS floor_plan TEXT NOT NULL DEFAULT '';
