import { ZodError } from 'zod';

/**
 * Displays Zod error if there is one in a console.error
 *
 * @param zodResultSafeParse result of safeParse schema zod method
 * @param data original data from backend
 * @param url url
 * @returns
 */
export const checkSchemaError = (
  zodResultSafeParse: { success: boolean; error?: ZodError },
  data: any,
  url: string
) => {
  if (zodResultSafeParse.success) {
    return;
  }
  console.error(
    '⚠️ SCHEMA ERROR ⚠️ => Le schema attendu ne correspond pas aux datas reçus ',
    {
      url,
      zodErrors: zodResultSafeParse.error.issues,
      data,
    }
  );
};
