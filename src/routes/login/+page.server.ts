import { z } from 'zod';

import { API_URL } from '$env/static/private';

const schema = z.object({
	email: z.string().email('Email invalido'),
	password: z.string().min(6, 'Senha muito curta').max(16, 'Senha muito longa'),
	//TODO: it's returning 'on' maybe i can check a better way of doing this
	terms: z.string().refine((value) => value === 'on', { message: 'Você precisa aceitar os termos' })
});

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			schema.parse(formData);

			const response = await fetch(`${API_URL}/user/register`, {
				method: 'POST',
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			console.log(JSON.stringify(data, null, 2));

			//navigate to login page
		} catch (error) {
			if (!(error instanceof z.ZodError)) return;
			const { fieldErrors } = error.flatten();

			return { data: { email: formData.email }, errors: fieldErrors };
		}
	}
};
