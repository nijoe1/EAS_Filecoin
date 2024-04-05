import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSchemaArgs } from "./args/UpsertOneSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class UpsertOneSchemaResolver {
    upsertOneSchema(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSchemaArgs): Promise<Schema>;
}
