import type { GraphQLResolveInfo } from "graphql";
import { CreateManySchemaArgs } from "./args/CreateManySchemaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySchemaResolver {
    createManySchema(ctx: any, info: GraphQLResolveInfo, args: CreateManySchemaArgs): Promise<AffectedRowsOutput>;
}
