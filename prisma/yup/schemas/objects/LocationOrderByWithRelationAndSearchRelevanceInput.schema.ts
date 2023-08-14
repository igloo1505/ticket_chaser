// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ArenaOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { LocationOrderByRelevanceInputObjectSchema } from '../internals';

export const LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  street: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  city: SortOrderSchema,  cityId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  state: SortOrderSchema,  lat: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  arena: ArenaOrderByRelationAggregateInputObjectSchema,  personalDetails: PersonalDetailsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: LocationOrderByRelevanceInputObjectSchema
});
