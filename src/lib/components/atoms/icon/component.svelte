<script context="module" lang="ts">
	import * as Icons from './svg';
	export type IconNames = keyof typeof Icons;
	import type { SVGAttributes } from 'svelte/elements';
</script>

<script lang="ts">
	type $$Props = SVGAttributes<SVGSVGElement> & {
		name: IconNames;
		size?: string | number;
		color?: string;
	};

	let { name } = $$props as $$Props;
</script>

<svelte:component this={Icons[name]} {...$$restProps} />
