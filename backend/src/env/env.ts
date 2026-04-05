import z from "zod/v3";

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.number(),
  BETTER_AUTH_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
});

export type env = z.infer<typeof envSchema>;
