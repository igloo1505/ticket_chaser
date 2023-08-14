// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { EventCreateNestedOneWithoutParticipantsInputObjectSchema } from '../internals';

export const TeamCreateWithoutHomeArenaInputObjectSchema = Yup.object({
    abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  colors: ColorsCreateNestedOneWithoutTeamInputObjectSchema,  Event: EventCreateNestedOneWithoutParticipantsInputObjectSchema
});
