import { boolean, z } from "zod";

/**
 * Before
 * without zod
 */

//export interface User {
//  id: number;
//  name: string;
//  username: string;
//  email: string;
//  userId: number;
//}

/**
 * After
 * with zod
 */

export const UserSchema = z.object({
  id: z.number().or(z.string()),
  name: z.string(),
  username: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof UserSchema>;
