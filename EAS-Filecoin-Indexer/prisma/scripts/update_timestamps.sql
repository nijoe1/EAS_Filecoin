BEGIN;
-- Schema
ALTER TABLE "eas-filecoin"."Schema" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-filecoin"."Schema" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-filecoin"."Schema" DROP COLUMN "time";
ALTER TABLE "eas-filecoin"."Schema" RENAME COLUMN "time_new" TO "time";

-- Attestation
ALTER TABLE "eas-filecoin"."Attestation" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-filecoin"."Attestation" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-filecoin"."Attestation" DROP COLUMN "time";
ALTER TABLE "eas-filecoin"."Attestation" RENAME COLUMN "time_new" TO "time";

ALTER TABLE "eas-filecoin"."Attestation" ADD COLUMN "timeCreated_new" INTEGER;
UPDATE "eas-filecoin"."Attestation" SET "timeCreated_new" = CAST("timeCreated" AS integer);
ALTER TABLE "eas-filecoin"."Attestation" DROP COLUMN "timeCreated";
ALTER TABLE "eas-filecoin"."Attestation" RENAME COLUMN "timeCreated_new" TO "timeCreated";

ALTER TABLE "eas-filecoin"."Attestation" ADD COLUMN "expirationTime_new" INTEGER;
UPDATE "eas-filecoin"."Attestation" SET "expirationTime_new" = CAST("expirationTime" AS integer);
ALTER TABLE "eas-filecoin"."Attestation" DROP COLUMN "expirationTime";
ALTER TABLE "eas-filecoin"."Attestation" RENAME COLUMN "expirationTime_new" TO "expirationTime";

ALTER TABLE "eas-filecoin"."Attestation" ADD COLUMN "revocationTime_new" INTEGER;
UPDATE "eas-filecoin"."Attestation" SET "revocationTime_new" = CAST("revocationTime" AS integer);
ALTER TABLE "eas-filecoin"."Attestation" DROP COLUMN "revocationTime";
ALTER TABLE "eas-filecoin"."Attestation" RENAME COLUMN "revocationTime_new" TO "revocationTime";

-- SchemaName
ALTER TABLE "eas-filecoin"."SchemaName" ADD COLUMN "time_new" INTEGER;
UPDATE "eas-filecoin"."SchemaName" SET "time_new" = CAST("time" AS integer);
ALTER TABLE "eas-filecoin"."SchemaName" DROP COLUMN "time";
ALTER TABLE "eas-filecoin"."SchemaName" RENAME COLUMN "time_new" TO "time";

COMMIT;
