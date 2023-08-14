// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamAvgOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  homeArenaId: SortOrderSchema,  eventId: SortOrderSchema
});
