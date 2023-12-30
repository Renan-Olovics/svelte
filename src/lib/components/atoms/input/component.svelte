<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		value?: string;
		name?: string;
		error?: string;
		type: HTMLInputAttributes['type'];
		size?: HTMLInputAttributes['class'];
		color?: keyof typeof styles.variants.color;
		labelClass?: HTMLInputAttributes['class'];
	};

	let { label, value = '', name, error, color, size, labelClass } = $$props as $$Props;

	const styles = tv({
		base: 'rounded border',
		variants: {
			color: {
				primary: ''
			}
		},
		defaultVariants: {
			color: 'primary'
		}
	});
</script>

<div class={twMerge(size, 'flex h-16 w-80 flex-col')}>
	{#if label}
		<label
			class={twMerge(labelClass, 'mb-2 block text-sm font-medium text-gray-900 dark:text-white')}
			for={name}>{label}</label
		>
	{/if}

	<input
		class={twMerge($$restProps.class, styles({ color }))}
		bind:value
		{name}
		id={name}
		{...$$restProps}
	/>

	{#if error}
		<span class="text-sm text-red-500">{error}</span>
	{/if}
</div>
