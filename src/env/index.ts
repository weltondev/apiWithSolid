import { z } from 'zod';
import 'dotenv/config';


const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
	PORT: z.coerce.number().default(3333)
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	console.error(`Envs not found!`, _env.error.format());

	throw new Error(`Environments not found!`);
}

export const env = _env.data;