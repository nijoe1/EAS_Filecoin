import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSchemaArgs } from "./args/DeleteOneSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class DeleteOneSchemaResolver {
    deleteOneSchema(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSchemaArgs): Promise<Schema | null>;
}
