// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from '../internals';

export const TeamCreateWithoutColorsInputObjectSchema = Yup.object({
    abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema,  Event: EventCreateNestedOneWithoutParticipantsInputObjectSchema
});
