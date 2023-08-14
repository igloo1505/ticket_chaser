// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';;
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from '../internals';

export const TeamCreateInputObjectSchema = Yup.object({
    abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  colors: ColorsCreateNestedOneWithoutTeamInputObjectSchema,  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema,  Event: EventCreateNestedOneWithoutParticipantsInputObjectSchema
});
