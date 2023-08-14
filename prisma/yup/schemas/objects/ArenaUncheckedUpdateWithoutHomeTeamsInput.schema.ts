// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateWithoutHomeTeamsInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  locationId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  sectionImageId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  events: EventUncheckedUpdateManyWithoutArenaNestedInputObjectSchema,  sections: ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema
});
