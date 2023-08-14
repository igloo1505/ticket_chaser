// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaCreateManyAmenitiesInputObjectSchema = Yup.object({
    id: Yup.number(),  name: Yup.string().required(),  locationId: Yup.number().required(),  sectionImageId: Yup.number().required()
});
