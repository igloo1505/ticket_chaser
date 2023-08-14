// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumUSSTATEFilterObjectSchema } from '../internals';

export const EnumUSSTATEFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumUSSTATEFilterObjectSchema])
});
