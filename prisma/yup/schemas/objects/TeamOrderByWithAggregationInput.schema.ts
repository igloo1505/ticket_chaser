// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { TeamCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamSumOrderByAggregateInputObjectSchema } from '../internals';

export const TeamOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  abbreviation: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  league: SortOrderSchema,  sport: SortOrderSchema,  homeArenaId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  _count: TeamCountOrderByAggregateInputObjectSchema,  _avg: TeamAvgOrderByAggregateInputObjectSchema,  _max: TeamMaxOrderByAggregateInputObjectSchema,  _min: TeamMinOrderByAggregateInputObjectSchema,  _sum: TeamSumOrderByAggregateInputObjectSchema
});
