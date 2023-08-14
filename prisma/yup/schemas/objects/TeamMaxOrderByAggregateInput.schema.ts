// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  abbreviation: SortOrderSchema,  league: SortOrderSchema,  sport: SortOrderSchema,  homeArenaId: SortOrderSchema,  eventId: SortOrderSchema
});
