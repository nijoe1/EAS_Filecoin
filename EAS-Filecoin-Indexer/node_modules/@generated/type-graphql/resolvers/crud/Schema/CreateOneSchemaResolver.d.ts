import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSchemaArgs } from "./args/CreateOneSchemaArgs";
import { Schema } from "../../../models/Schema";
export declare class CreateOneSchemaResolver {
    createOneSchema(ctx: any, info: GraphQLResolveInfo, args: CreateOneSchemaArgs): Promise<Schema>;
}
