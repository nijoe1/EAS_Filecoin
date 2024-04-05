import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSchemaArgs } from "./args/FindUniqueSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class FindUniqueSchemaResolver {
    schema(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchemaArgs): Promise<Schema | null>;
}
