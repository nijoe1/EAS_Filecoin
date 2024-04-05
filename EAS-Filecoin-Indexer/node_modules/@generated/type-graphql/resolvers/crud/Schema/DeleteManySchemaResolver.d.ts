import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySchemaArgs } from "./args/DeleteManySchemaArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySchemaResolver {
    deleteManySchema(ctx: any, info: GraphQLResolveInfo, args: DeleteManySchemaArgs): Promise<AffectedRowsOutput>;
}
