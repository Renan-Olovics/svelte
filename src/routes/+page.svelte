<script lang="ts">
	import { Button, Input } from '$lib/components/atoms';
</script>

<aside>
	<form method="POST" class="flex flex-col items-center">
		<Input label="email" type="email" iconName="mail" />
		<Input label="password" type="password" required iconName="lock" />
		<Button type="submit" disabled>Enviar</Button>
	</form>
</aside>
