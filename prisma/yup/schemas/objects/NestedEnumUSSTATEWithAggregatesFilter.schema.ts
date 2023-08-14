// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumUSSTATEFilterObjectSchema } from '../internals';

export const NestedEnumUSSTATEWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumUSSTATEWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumUSSTATEFilterObjectSchema,  _max: NestedEnumUSSTATEFilterObjectSchema
});
