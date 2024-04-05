import type { GraphQLResolveInfo } from "graphql";
import { GroupBySchemaArgs } from "./args/GroupBySchemaArgs";
import { SchemaGroupBy } from "../../outputs/SchemaGroupBy";
export declare class GroupBySchemaResolver {
    groupBySchema(ctx: any, info: GraphQLResolveInfo, args: GroupBySchemaArgs): Promise<SchemaGroupBy[]>;
}
