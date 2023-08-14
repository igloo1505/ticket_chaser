// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ImageUpdateOneRequiredWithoutArenaNestedInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema } from '../internals';

export const ArenaUpdateWithoutSectionsInputObjectSchema = Yup.object({
    name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  events: EventUpdateManyWithoutArenaNestedInputObjectSchema,  location: LocationUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  amenities: ArenaAmenitiesUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  sectionImage: ImageUpdateOneRequiredWithoutArenaNestedInputObjectSchema,  homeTeams: TeamUpdateManyWithoutHomeArenaNestedInputObjectSchema
});
