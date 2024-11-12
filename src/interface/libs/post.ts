import { z } from "zod";

/**
 * Before
 * without zod
 */

//export interface Post {
//  userId: number;
//  id: number;
//  title: string;
//  body: string;
//  published: boolean;
//}

/**
 * After
 * with zod
 */

export const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
  published: z.boolean(),
});

export type Post = z.infer<typeof PostSchema>;
