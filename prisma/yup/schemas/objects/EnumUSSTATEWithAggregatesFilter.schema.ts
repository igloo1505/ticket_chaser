// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumUSSTATEWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumUSSTATEFilterObjectSchema } from '../internals';

export const EnumUSSTATEWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumUSSTATEWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumUSSTATEFilterObjectSchema,  _max: NestedEnumUSSTATEFilterObjectSchema
});
