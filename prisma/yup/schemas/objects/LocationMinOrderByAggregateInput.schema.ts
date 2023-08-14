// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const LocationMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  street: SortOrderSchema,  zip: SortOrderSchema,  city: SortOrderSchema,  cityId: SortOrderSchema,  state: SortOrderSchema,  lat: SortOrderSchema,  long: SortOrderSchema,  userId: SortOrderSchema
});
