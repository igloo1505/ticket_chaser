import * as Yup from 'yup';

export const FaqCategorySchema = Yup.mixed().oneOf(["general","billing","trustAndSaftey"])