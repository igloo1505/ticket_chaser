// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { EventOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { ArenaSectionOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ArenaOrderByRelevanceInputObjectSchema } from '../internals';

export const ArenaOrderByWithRelationAndSearchRelevanceInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  arenaAmenitiesId: SortOrderSchema,  locationId: SortOrderSchema,  sectionImageId: SortOrderSchema,  events: EventOrderByRelationAggregateInputObjectSchema,  location: LocationOrderByWithRelationAndSearchRelevanceInputObjectSchema,  sections: ArenaSectionOrderByRelationAggregateInputObjectSchema,  amenities: ArenaAmenitiesOrderByWithRelationAndSearchRelevanceInputObjectSchema,  sectionImage: ImageOrderByWithRelationAndSearchRelevanceInputObjectSchema,  homeTeams: TeamOrderByRelationAggregateInputObjectSchema,  _relevance: ArenaOrderByRelevanceInputObjectSchema
});
