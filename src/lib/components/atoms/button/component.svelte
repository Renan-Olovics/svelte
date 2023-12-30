<script lang="ts">
	import type { HTMLInputAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type CommonProps = {
		value?: string;
		type: HTMLButtonAttributes['type'];
		color?: keyof typeof styles.variants.color;
		size?: keyof typeof styles.variants.size;
	};

	type $$Props = (HTMLButtonAttributes & CommonProps) | (HTMLInputAttributes & CommonProps);

	let { value = '', color, size } = $$props as $$Props;

	const isSubmit = $$restProps.type === 'submit';

	const styles = tv({
		base: 'rounded flex items-center',
		variants: {
			size: {
				sm: 'w-32',
				md: 'w-52',
				lg: 'w-96'
			},
			color: {
				primary: 'bg-primary-600 text-white'
			}
		},
		defaultVariants: {
			size: 'lg',
			color: 'primary'
		}
	});
</script>

<svelte:element
	this={isSubmit ? 'input' : 'button'}
	class={twMerge($$restProps.labelClass, 'flex flex-col', styles({ size, color }))}
	{...$$restProps}
	{value}
>
	<slot />
</svelte:element>
