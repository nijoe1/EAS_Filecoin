import type { GraphQLResolveInfo } from "graphql";
import { FindManySchemaArgs } from "./args/FindManySchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class FindManySchemaResolver {
    schemata(ctx: any, info: GraphQLResolveInfo, args: FindManySchemaArgs): Promise<Schema[]>;
}
