import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSchemaOrThrowArgs } from "./args/FindFirstSchemaOrThrowArgs";
import { Schema } from "../../../models/Schema";
export declare class FindFirstSchemaOrThrowResolver {
    findFirstSchemaOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchemaOrThrowArgs): Promise<Schema | null>;
}
