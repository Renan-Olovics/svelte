<script lang="ts">
	import { Button, Input, Typography } from '$lib/components/atoms';
</script>

<aside>
	<form method="POST" class="flex flex-col items-center">
		<Typography tag="h1" schema="title">Crie sua conta</Typography>
		<Input label="email" type="email" iconName="mail" />
		<Input label="password" type="password" required iconName="lock" />
		<Typography tag="h1" schema="text"
			>Sua senha deve conter pelo menos 8 caracteres de a-z e pelo menos 1 número de 1-9
		</Typography>
		<Button type="submit" disabled>Enviar</Button>
	</form>
</aside>
