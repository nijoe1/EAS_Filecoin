import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSchemaArgs } from "./args/UpdateOneSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class UpdateOneSchemaResolver {
    updateOneSchema(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSchemaArgs): Promise<Schema | null>;
}
