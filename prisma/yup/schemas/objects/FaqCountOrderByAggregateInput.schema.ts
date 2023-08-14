// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const FaqCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  title: SortOrderSchema,  subtitle: SortOrderSchema,  body: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  priority: SortOrderSchema
});
