// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumLeaguesFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumSportsFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ColorsUpdateOneWithoutTeamNestedInputObjectSchema } from '../internals';;
import { ArenaUpdateOneWithoutHomeTeamsNestedInputObjectSchema } from '../internals';;
import { EventUpdateOneWithoutParticipantsNestedInputObjectSchema } from '../internals';;
import { LogoUpdateManyWithoutTeamNestedInputObjectSchema } from '../internals';

export const TeamUpdateInputObjectSchema = Yup.object({
    name: Yup.mixed().oneOfSchemas([EnumNFLTeamNameFieldUpdateOperationsInputObjectSchema]),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  displayName: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  nickname: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  league: Yup.mixed().oneOfSchemas([EnumLeaguesFieldUpdateOperationsInputObjectSchema]),  sport: Yup.mixed().oneOfSchemas([EnumSportsFieldUpdateOperationsInputObjectSchema]),  conference: Yup.mixed().oneOfSchemas([NullableEnumNFL_ConferenceFieldUpdateOperationsInputObjectSchema]),  division: Yup.mixed().oneOfSchemas([NullableEnumNFL_DivisionFieldUpdateOperationsInputObjectSchema]),  colors: ColorsUpdateOneWithoutTeamNestedInputObjectSchema,  homeArena: ArenaUpdateOneWithoutHomeTeamsNestedInputObjectSchema,  Event: EventUpdateOneWithoutParticipantsNestedInputObjectSchema,  logos: LogoUpdateManyWithoutTeamNestedInputObjectSchema
});
