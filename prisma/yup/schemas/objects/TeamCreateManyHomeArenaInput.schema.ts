// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TeamCreateManyHomeArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  abbreviation: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName: Yup.mixed().oneOfSchemas([Yup.string()]),  displayName_short: Yup.mixed().oneOfSchemas([Yup.string()]),  nickname: Yup.mixed().oneOfSchemas([Yup.string()]),  eventId: Yup.mixed().oneOfSchemas([Yup.number()]),  colorsId: Yup.mixed().oneOfSchemas([Yup.number()])
});
