<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		value?: string;
		name?: string;
		error?: string;
		labelClass?: HTMLInputAttributes['class'];
		type: HTMLInputAttributes['type'];
		color?: keyof typeof divStyles.variants.color | keyof typeof inputStyle.variants.color;
		size?: keyof typeof divStyles.variants.size;
	};

	// export let label = '';
	// export let value = '';
	// export let name = 'input';
	// export let error = '';
	// export let color = undefined as $$Props['color'];
	// export let size = undefined as $$Props['size'];

	let { label, value = '', name, error, color, size } = $$props as $$Props;

	const isSubmit = $$restProps.type === 'submit';

	const divStyles = tv({
		base: '',
		variants: {
			size: {
				sm: 'w-32',
				md: 'w-52',
				lg: 'w-96'
			},
			color: {
				primary: ''
			}
		},
		defaultVariants: {
			size: 'lg',
			color: 'primary'
		}
	});

	const inputStyle = tv({
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

<!-- find a better way of not showing div on submit type -->
<svelte:element
	this={isSubmit ? 'div' : 'div'}
	class={twMerge($$restProps.labelClass, 'flex flex-col', divStyles({ size, color }))}
>
	{#if label}
		<label for={name} class="py-1">{label}</label>
	{/if}

	<input
		class={twMerge($$restProps.class, inputStyle({ color }))}
		bind:value
		{name}
		id={name}
		{...$$restProps}
	/>

	{#if error}
		<span class="text-sm text-red-500">{error}</span>
	{/if}
</svelte:element>
