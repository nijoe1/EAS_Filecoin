BEGIN;
-- Schema
ALTER TABLE "eas-metis"."Schema" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-metis"."Schema" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-metis"."Schema" DROP COLUMN "time";
ALTER TABLE "eas-metis"."Schema" RENAME COLUMN "time_new" TO "time";

-- Attestation
ALTER TABLE "eas-metis"."Attestation" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-metis"."Attestation" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-metis"."Attestation" DROP COLUMN "time";
ALTER TABLE "eas-metis"."Attestation" RENAME COLUMN "time_new" TO "time";

ALTER TABLE "eas-metis"."Attestation" ADD COLUMN "timeCreated_new" INTEGER;
UPDATE "eas-metis"."Attestation" SET "timeCreated_new" = CAST("timeCreated" AS integer);
ALTER TABLE "eas-metis"."Attestation" DROP COLUMN "timeCreated";
ALTER TABLE "eas-metis"."Attestation" RENAME COLUMN "timeCreated_new" TO "timeCreated";

ALTER TABLE "eas-metis"."Attestation" ADD COLUMN "expirationTime_new" INTEGER;
UPDATE "eas-metis"."Attestation" SET "expirationTime_new" = CAST("expirationTime" AS integer);
ALTER TABLE "eas-metis"."Attestation" DROP COLUMN "expirationTime";
ALTER TABLE "eas-metis"."Attestation" RENAME COLUMN "expirationTime_new" TO "expirationTime";

ALTER TABLE "eas-metis"."Attestation" ADD COLUMN "revocationTime_new" INTEGER;
UPDATE "eas-metis"."Attestation" SET "revocationTime_new" = CAST("revocationTime" AS integer);
ALTER TABLE "eas-metis"."Attestation" DROP COLUMN "revocationTime";
ALTER TABLE "eas-metis"."Attestation" RENAME COLUMN "revocationTime_new" TO "revocationTime";

-- SchemaName
ALTER TABLE "eas-metis"."SchemaName" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-metis"."SchemaName" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-metis"."SchemaName" DROP COLUMN "time";
ALTER TABLE "eas-metis"."SchemaName" RENAME COLUMN "time_new" TO "time";

COMMIT;
