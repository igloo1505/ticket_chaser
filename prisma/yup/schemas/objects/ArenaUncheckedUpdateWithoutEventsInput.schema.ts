// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema } from '../internals';

export const ArenaUncheckedUpdateWithoutEventsInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  locationId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  sectionImageId: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  sections: ArenaSectionUncheckedUpdateManyWithoutArenaNestedInputObjectSchema,  homeTeams: TeamUncheckedUpdateManyWithoutHomeArenaNestedInputObjectSchema
});
