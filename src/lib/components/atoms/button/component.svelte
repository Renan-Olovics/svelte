<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLButtonAttributes & {
		type: HTMLButtonAttributes['type'];
		color?: keyof typeof styles.variants.color;
		size?: keyof typeof styles.variants.size;
	};

	let { color, size } = $$props as $$Props;

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

<button
	class={twMerge($$restProps.labelClass, 'flex flex-col', styles({ size, color }))}
	{...$$restProps}
>
	<slot />
</button>
