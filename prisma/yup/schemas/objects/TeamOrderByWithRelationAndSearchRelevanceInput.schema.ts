// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TeamOrderByRelevanceInputObjectSchema } from '../internals';

export const TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  abbreviation: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  league: SortOrderSchema,  sport: SortOrderSchema,  conference: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  division: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  homeArenaId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  colorsId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  colors: ColorsOrderByWithRelationAndSearchRelevanceInputObjectSchema,  homeArena: ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,  Event: EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: TeamOrderByRelevanceInputObjectSchema
});
