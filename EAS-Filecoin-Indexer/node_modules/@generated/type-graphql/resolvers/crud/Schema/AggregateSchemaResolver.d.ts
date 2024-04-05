import type { GraphQLResolveInfo } from "graphql";
import { AggregateSchemaArgs } from "./args/AggregateSchemaArgs";
import { AggregateSchema } from "../../outputs/AggregateSchema";
export declare class AggregateSchemaResolver {
    aggregateSchema(ctx: any, info: GraphQLResolveInfo, args: AggregateSchemaArgs): Promise<AggregateSchema>;
}
