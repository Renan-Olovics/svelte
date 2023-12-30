<script lang="ts">
	import * as Icons from './svg';

	type $$Props = {
		name: keyof typeof Icons;
		size?: string | number;
		width?: string | number;
		height?: string | number;
		fill?: boolean;
		stroke?: string;
		color?: string;
	};

	let { name } = $$props as $$Props & {};
</script>

<svelte:component this={Icons[name]} {...$$restProps}></svelte:component>
