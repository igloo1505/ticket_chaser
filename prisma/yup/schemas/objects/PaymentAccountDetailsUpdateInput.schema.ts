// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema } from '../internals';

export const PaymentAccountDetailsUpdateInputObjectSchema = Yup.object({
    nameOnAccount: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  User: UserUpdateManyWithoutPaymentAccountNestedInputObjectSchema
});
