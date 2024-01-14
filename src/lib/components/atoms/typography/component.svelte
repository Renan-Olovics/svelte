<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = {
		tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a' | 'label';
		schema: keyof typeof styles.variants.schema;
		for?: string;
		href?: string;
	};

	const styles = tv({
		variants: {
			schema: {
				title: 'text-primary-100 font-bold text-xl',
				text: 'text-corrigir-cor1 font-normal text-sm',
				link: 'text-corrigir-cor2 font-normal text-sm underline',
				error: 'text-red-500 font-normal text-sm'
			}
		}
	});

	const { tag, schema } = $$props as $$Props;
</script>

<svelte:element this={tag} {...$$restProps} class={twMerge($$restProps.class, styles({ schema }))}>
	<slot />
</svelte:element>
