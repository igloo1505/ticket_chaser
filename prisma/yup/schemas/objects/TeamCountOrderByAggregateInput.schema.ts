// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TeamCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  abbreviation: SortOrderSchema,  league: SortOrderSchema,  sport: SortOrderSchema,  conference: SortOrderSchema,  division: SortOrderSchema,  homeArenaId: SortOrderSchema,  eventId: SortOrderSchema,  colorsId: SortOrderSchema
});
