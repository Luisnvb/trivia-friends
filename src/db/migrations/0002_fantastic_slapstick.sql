CREATE TABLE IF NOT EXISTS "episode" (
	"id" serial PRIMARY KEY NOT NULL,
	"season" integer NOT NULL,
	"episode" integer NOT NULL,
	"title_en" text NOT NULL,
	"title_es" text NOT NULL,
	"synopsis" text NOT NULL,
	"characters" text[] DEFAULT '{}' NOT NULL,
	"memorable_moments" text[] DEFAULT '{}' NOT NULL,
	"memorable_quotes" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "episode_season_episode_unique" ON "episode" USING btree ("season","episode");