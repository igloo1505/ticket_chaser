import * as Yup from 'yup';

export const FaqScalarFieldEnumSchema = Yup.mixed().oneOf(["id","title","subtitle","body","createdAt","updatedAt","priority"])