// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema } from '../internals';

export const TeamCreateWithoutEventInputObjectSchema = Yup.object({
    abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  homeArena: ArenaCreateNestedOneWithoutHomeTeamsInputObjectSchema
});
