<script lang="ts">
	import { Button, Input } from '$lib/components/atoms';
</script>

<form method="POST">
	<h1
		class="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight md:text-2xl"
	>
		Sign in to your account
	</h1>
	<Input label="email" type="email" required />
	<Input label="senha" type="password" required />
	<br />
	<Button type="submit" value="Enviar" />
</form>
