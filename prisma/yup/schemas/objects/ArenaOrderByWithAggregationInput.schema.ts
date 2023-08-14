// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ArenaCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ArenaSumOrderByAggregateInputObjectSchema } from '../internals';

export const ArenaOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  arenaAmenitiesId: SortOrderSchema,  locationId: SortOrderSchema,  sectionImageId: SortOrderSchema,  _count: ArenaCountOrderByAggregateInputObjectSchema,  _avg: ArenaAvgOrderByAggregateInputObjectSchema,  _max: ArenaMaxOrderByAggregateInputObjectSchema,  _min: ArenaMinOrderByAggregateInputObjectSchema,  _sum: ArenaSumOrderByAggregateInputObjectSchema
});
