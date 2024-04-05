import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySchemaArgs } from "./args/UpdateManySchemaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySchemaResolver {
    updateManySchema(ctx: any, info: GraphQLResolveInfo, args: UpdateManySchemaArgs): Promise<AffectedRowsOutput>;
}
