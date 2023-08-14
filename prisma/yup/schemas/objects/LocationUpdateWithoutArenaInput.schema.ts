// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableIntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumUSSTATEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema } from '../internals';

export const LocationUpdateWithoutArenaInputObjectSchema = Yup.object({
    street: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  zip: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  cityId: Yup.mixed().oneOfSchemas([Yup.number(),
NullableIntFieldUpdateOperationsInputObjectSchema]),  state: Yup.mixed().oneOfSchemas([EnumUSSTATEFieldUpdateOperationsInputObjectSchema]),  lat: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  long: Yup.mixed().oneOfSchemas([Yup.number(),
NullableFloatFieldUpdateOperationsInputObjectSchema]),  personalDetails: PersonalDetailsUpdateOneWithoutLocationNestedInputObjectSchema
});
