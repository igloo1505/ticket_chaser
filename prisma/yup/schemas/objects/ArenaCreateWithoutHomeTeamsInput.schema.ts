// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { EventCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema } from '../internals';;
import { ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';;
import { ImageCreateNestedOneWithoutArenaInputObjectSchema } from '../internals';

export const ArenaCreateWithoutHomeTeamsInputObjectSchema = Yup.object({
    name: Yup.string().required(),  events: EventCreateNestedManyWithoutArenaInputObjectSchema,  location: LocationCreateNestedOneWithoutArenaInputObjectSchema,  sections: ArenaSectionCreateNestedManyWithoutArenaInputObjectSchema,  amenities: ArenaAmenitiesCreateNestedOneWithoutArenaInputObjectSchema,  sectionImage: ImageCreateNestedOneWithoutArenaInputObjectSchema
});
