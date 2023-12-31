<script lang="ts">
	import { Button, Checkbox, Input, Typography } from '$lib/components/atoms';
</script>

<aside>
	<form method="POST" class="flex flex-col items-center">
		<Typography tag="h1" schema="title">Crie sua conta</Typography>
		<Input label="email" type="email" iconName="mail" />
		<Input label="password" type="password" required iconName="lock" />
		<Typography tag="h1" schema="text"
			>Sua senha deve conter pelo menos 8 caracteres de a-z e pelo menos 1 número de 1-9
		</Typography>

		<Checkbox name="terms">
			<Typography for="terms" tag="label" schema="text">
				Estou de acordo com os
				<Typography tag="a" href="/#" schema="link">termos de uso</Typography>
				e a
				<Typography tag="a" href="/#" schema="link">Política de Privacidade</Typography>
			</Typography>
		</Checkbox>

		<Button type="submit" disabled>Enviar</Button>
	</form>
</aside>
