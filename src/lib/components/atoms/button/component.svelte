<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLButtonAttributes & {
		type: HTMLButtonAttributes['type'];
		color?: keyof typeof styles.variants.color;
		size?: keyof typeof styles.variants.size;
	};

	const { color, size, disabled } = $$props as $$Props;

	const styles = tv({
		base: 'rounded-3xl flex items-center',
		variants: {
			size: {
				sm: 'w-32 h-10',
				md: 'w-52 h-10',
				lg: 'w-96 h-10'
			},
			color: {
				primary: 'bg-primary text-white',
				secondary: 'bg-transparent text-[#1C1B1F]'
			},
			disabled: {
				true: 'bg-[#1C1B1F] text-white opacity-50 cursor-not-allowed'
			}
		},
		defaultVariants: {
			size: 'lg',
			color: 'primary'
		}
	});
</script>

<button
	class={twMerge(
		$$restProps.labelClass,
		'flex flex-col items-center justify-center',
		styles({ size, color, disabled: !!disabled })
	)}
	{...$$restProps}
>
	<slot />
</button>
