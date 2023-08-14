import * as Yup from 'yup';

export const LocationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","street","zip","city","cityId","state","lat","long","userId"])