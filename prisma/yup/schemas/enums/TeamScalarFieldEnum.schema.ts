import * as Yup from 'yup';

export const TeamScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","abbreviation","league","sport","homeArenaId","eventId"])