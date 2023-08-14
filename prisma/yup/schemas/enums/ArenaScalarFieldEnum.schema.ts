import * as Yup from 'yup';

export const ArenaScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","arenaAmenitiesId","locationId","sectionImageId"])