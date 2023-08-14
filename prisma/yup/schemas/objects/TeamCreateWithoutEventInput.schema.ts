// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ColorsCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';

export const TeamCreateWithoutEventInputObjectSchema = Yup.object({
    abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  colors: ColorsCreateNestedOneWithoutTeamInputObjectSchema,  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema
});
