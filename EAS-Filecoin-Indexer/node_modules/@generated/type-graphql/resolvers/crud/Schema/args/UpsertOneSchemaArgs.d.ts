import { SchemaCreateInput } from "../../../inputs/SchemaCreateInput";
import { SchemaUpdateInput } from "../../../inputs/SchemaUpdateInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";
export declare class UpsertOneSchemaArgs {
    where: SchemaWhereUniqueInput;
    create: SchemaCreateInput;
    update: SchemaUpdateInput;
}
