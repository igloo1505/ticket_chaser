// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';;
import { PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';

export const UserUncheckedUpdateWithoutPaymentAccountInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  email: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  password: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  role: Yup.mixed().oneOfSchemas([EnumROLEFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  verified: Yup.mixed().oneOfSchemas([EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema]),  purchaseHistory: PurchaseHistoryUncheckedUpdateOneWithoutUserNestedInputObjectSchema,  personalDetails: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInputObjectSchema
});
