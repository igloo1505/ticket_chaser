// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SortOrderInputObjectSchema } from '../internals';;
import { ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { EventOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TeamOrderByRelevanceInputObjectSchema } from '../internals';

export const TeamOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  abbreviation: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  league: SortOrderSchema,  sport: SortOrderSchema,  homeArenaId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  eventId: Yup.mixed().oneOfSchemas([SortOrderSchema,
SortOrderInputObjectSchema]),  homeArena: ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema,  Event: EventOrderByWithRelationAndSearchRelevanceInputObjectSchema,  _relevance: TeamOrderByRelevanceInputObjectSchema
});
