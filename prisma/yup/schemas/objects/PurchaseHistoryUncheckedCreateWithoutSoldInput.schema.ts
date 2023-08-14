// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from '../internals';

export const PurchaseHistoryUncheckedCreateWithoutSoldInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number().required(),  bought: TransactionUncheckedCreateNestedManyWithoutBuyerInputObjectSchema
});
