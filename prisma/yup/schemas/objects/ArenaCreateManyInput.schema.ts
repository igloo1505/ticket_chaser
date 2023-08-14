// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ArenaCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  name: Yup.string().required(),  arenaAmenitiesId: Yup.number().required(),  locationId: Yup.number().required(),  sectionImageId: Yup.number().required()
});
