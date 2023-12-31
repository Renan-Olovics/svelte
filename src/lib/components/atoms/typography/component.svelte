<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';

	type $$Props = {
		tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a' | 'label';
		schema: keyof typeof styles.variants.schema;
	} & (
		| HTMLAnchorAttributes
		| HTMLAttributes<HTMLSpanElement>
		| HTMLAttributes<HTMLHeadingElement>
		| HTMLAttributes<HTMLParagraphElement>
		| HTMLAttributes<HTMLLabelElement>
	);

	const styles = tv({
		variants: {
			schema: {
				title: 'text-primary-100 font-bold text-xl',
				text: 'text-corrigir-cor1 font-normal text-sm'
			}
		}
	});

	const { tag, schema } = $$props as $$Props;
</script>

<svelte:element this={tag} {...$$restProps} class={twMerge($$restProps.class, styles({ schema }))}>
	<slot />
</svelte:element>
