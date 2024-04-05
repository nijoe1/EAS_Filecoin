import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSchemaArgs } from "./args/FindFirstSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class FindFirstSchemaResolver {
    findFirstSchema(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchemaArgs): Promise<Schema | null>;
}
