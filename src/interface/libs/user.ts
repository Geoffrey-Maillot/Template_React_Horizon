import { z } from "zod";

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
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  userId: z.number(),
});

export type User = z.infer<typeof UserSchema>;
