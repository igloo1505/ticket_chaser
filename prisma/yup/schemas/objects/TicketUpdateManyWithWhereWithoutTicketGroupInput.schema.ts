// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TicketScalarWhereInputObjectSchema } from '../internals';;
import { TicketUpdateManyMutationInputObjectSchema } from '../internals';;
import { TicketUncheckedUpdateManyWithoutTicketsInputObjectSchema } from '../internals';

export const TicketUpdateManyWithWhereWithoutTicketGroupInputObjectSchema = Yup.object({
    where: TicketScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TicketUpdateManyMutationInputObjectSchema,
TicketUncheckedUpdateManyWithoutTicketsInputObjectSchema])
});
