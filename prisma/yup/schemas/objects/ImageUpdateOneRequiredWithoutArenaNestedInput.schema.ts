// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateOrConnectWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUpsertWithoutArenaInputObjectSchema } from '../internals';;
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageUpdateWithoutArenaInputObjectSchema } from '../internals';;
import { ImageUncheckedUpdateWithoutArenaInputObjectSchema } from '../internals';

export const ImageUpdateOneRequiredWithoutArenaNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ImageCreateWithoutArenaInputObjectSchema,
ImageUncheckedCreateWithoutArenaInputObjectSchema]),  connectOrCreate: ImageCreateOrConnectWithoutArenaInputObjectSchema,  upsert: ImageUpsertWithoutArenaInputObjectSchema,  connect: ImageWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ImageUpdateWithoutArenaInputObjectSchema,
ImageUncheckedUpdateWithoutArenaInputObjectSchema])
});
