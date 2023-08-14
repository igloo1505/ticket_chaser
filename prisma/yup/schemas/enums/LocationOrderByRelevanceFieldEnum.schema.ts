import * as Yup from 'yup';

export const LocationOrderByRelevanceFieldEnumSchema = Yup.mixed().oneOf(["street","city"])