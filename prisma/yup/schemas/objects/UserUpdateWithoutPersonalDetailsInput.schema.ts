// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumROLEFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PaymentAccountDetailsUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';;
import { PurchaseHistoryUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';

export const UserUpdateWithoutPersonalDetailsInputObjectSchema = Yup.object({
    email: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  password: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  role: Yup.mixed().oneOfSchemas([EnumROLEFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  verified: Yup.mixed().oneOfSchemas([EnumVERIFICATIONSTATUSFieldUpdateOperationsInputObjectSchema]),  paymentAccount: PaymentAccountDetailsUpdateOneWithoutUserNestedInputObjectSchema,  purchaseHistory: PurchaseHistoryUpdateOneWithoutUserNestedInputObjectSchema
});
