CREATE TYPE "public"."series_fact_category" AS ENUM('award', 'guest_actor', 'cast_career', 'dubbing_actor', 'location', 'other');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "series_fact" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" "series_fact_category" NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "episode" ADD COLUMN "extra_notes" text;