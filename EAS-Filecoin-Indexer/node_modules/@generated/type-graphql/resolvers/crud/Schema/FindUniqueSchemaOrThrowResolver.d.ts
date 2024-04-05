import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchemaOrThrowArgs } from "./args/FindUniqueSchemaOrThrowArgs";
import { Schema } from "../../../models/Schema";
export declare class FindUniqueSchemaOrThrowResolver {
    getSchema(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchemaOrThrowArgs): Promise<Schema | null>;
}
