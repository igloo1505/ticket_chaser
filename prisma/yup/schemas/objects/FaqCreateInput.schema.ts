// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const FaqCreateInputObjectSchema = Yup.object({
    title: Yup.string().required(),  subtitle: Yup.string().required(),  body: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  priority: Yup.number()
});
