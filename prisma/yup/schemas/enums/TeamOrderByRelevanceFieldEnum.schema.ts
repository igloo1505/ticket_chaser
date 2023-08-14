import * as Yup from 'yup';

export const TeamOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["abbreviation"])