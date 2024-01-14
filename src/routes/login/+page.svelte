<script lang="ts">
	import { Button, Checkbox, Input, Typography } from '$lib/components/atoms';

	export let form;

	const formData: any = form;
	$: console.log(form);
</script>

<aside>
	<form method="POST" class="flex flex-col items-center">
		<Typography tag="h1" schema="title">Crie sua conta</Typography>

		<Input name="email" label="email" type="email" iconName="mail" form={formData} required />
		<Input
			name="password"
			label="password"
			type="password"
			iconName="lock"
			form={formData}
			required
		/>

		<Typography tag="h1" schema="text">
			Sua senha deve conter pelo menos 8 caracteres de a-z e pelo menos 1 número de 1-9
		</Typography>

		<Checkbox name="terms">
			<Typography for="terms" tag="label" schema="text">
				Estou de acordo com os
				<Typography tag="a" href="/#" schema="link">termos de uso</Typography>
				e a
				<Typography tag="a" href="/#" schema="link">Política de Privacidade</Typography>
			</Typography>
		</Checkbox>
		{#if form?.errors.terms}
			<Typography tag="span" schema="error">
				É necessário aceitar os termos de uso e a política de privacidade
			</Typography>
		{/if}

		<Button type="submit">Enviar</Button>
	</form>
</aside>
