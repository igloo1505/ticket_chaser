// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { IntFilterObjectSchema } from '../internals';;
import { EnumNFLTeamNameFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { EnumLeaguesFilterObjectSchema } from '../internals';;
import { EnumSportsFilterObjectSchema } from '../internals';;
import { IntNullableFilterObjectSchema } from '../internals';;
import { ArenaRelationFilterObjectSchema } from '../internals';;
import { ArenaWhereInputObjectSchema } from '../internals';;
import { EventRelationFilterObjectSchema } from '../internals';;
import { EventWhereInputObjectSchema } from '../internals';

export const TeamWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => TeamWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  name: Yup.mixed().oneOfSchemas([EnumNFLTeamNameFilterObjectSchema]),  abbreviation: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  league: Yup.mixed().oneOfSchemas([EnumLeaguesFilterObjectSchema]),  sport: Yup.mixed().oneOfSchemas([EnumSportsFilterObjectSchema]),  homeArenaId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  eventId: Yup.mixed().oneOfSchemas([IntNullableFilterObjectSchema,
Yup.number()]),  homeArena: Yup.mixed().oneOfSchemas([ArenaRelationFilterObjectSchema,
ArenaWhereInputObjectSchema]),  Event: Yup.mixed().oneOfSchemas([EventRelationFilterObjectSchema,
EventWhereInputObjectSchema])
});
