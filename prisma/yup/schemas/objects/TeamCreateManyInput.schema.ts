// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TeamCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  homeArenaId: Yup.mixed().oneOfSchemas([Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([Yup.number()]),  colorsId: Yup.mixed().oneOfSchemas([Yup.number()])
});