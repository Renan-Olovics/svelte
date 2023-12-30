<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface $$Props extends HTMLInputAttributes {
		label?: string;
		value?: string;
		name?: string;
		error?: string;
	}

	export let label = '';
	export let value = '';
	export let name = 'input';
	export let error = '';
</script>

<label class="flex w-96 flex-col">
	{#if label}
		<span class="text-sm text-gray-500">{label}</span>
	{/if}
	<input bind:value {name} {...$$restProps} />
	{#if error}
		<span class="text-sm text-red-500">{error}</span>
	{/if}
</label>
