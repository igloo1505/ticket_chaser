// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';

export const ArenaScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ArenaScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ArenaScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ArenaScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  arenaAmenitiesId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  locationId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  sectionImageId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()])
});
