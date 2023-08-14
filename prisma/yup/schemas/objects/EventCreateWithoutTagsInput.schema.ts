// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutEventsInputObjectSchema } from '../internals';;
import { TicketCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { TicketGroupCreateNestedManyWithoutEventInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema } from '../internals';;
import { TeamCreateNestedManyWithoutEventInputObjectSchema } from '../internals';

export const EventCreateWithoutTagsInputObjectSchema = Yup.object({
    date: Yup.date().required(),  title: Yup.string().required(),  description: Yup.string().required(),  arena: ArenaCreateNestedOneWithoutEventsInputObjectSchema,  tickets: TicketCreateNestedManyWithoutEventInputObjectSchema,  ticketGroups: TicketGroupCreateNestedManyWithoutEventInputObjectSchema,  amenities: ArenaAmenitiesCreateNestedOneWithoutEventInputObjectSchema,  participants: TeamCreateNestedManyWithoutEventInputObjectSchema
});
