// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutEventsInputObjectSchema } from '../internals';;
import { TicketGroupCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema } from '../internals';;
import { TagCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutEventInputObjectSchema } from '../internals';

export const EventCreateWithoutTicketsInputObjectSchema = Yup.object({
    date: Yup.date().required(),  title: Yup.string().required(),  description: Yup.string().required(),  arena: ArenaCreateNestedOneWithoutEventsInputObjectSchema,  ticketGroups: TicketGroupCreateNestedManyWithoutEventInputObjectSchema,  amenities: ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema,  tags: TagCreateNestedManyWithoutEventInputObjectSchema,  participants: TeamCreateNestedManyWithoutEventInputObjectSchema
});
