<script lang="ts">
	type $$Props = {
		size?: string | number;
		width?: string | number;
		height?: string | number;
		fill?: boolean;
		stroke?: string;
		color?: string;
		class?: string;
	};
	let { width, height, size = 21, stroke = '#1C1B1F', color, fill = false } = $$props as $$Props;
</script>

<svg
	width={width ?? size}
	height={height ?? size}
	viewBox="0 0 21 21"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<path
		d="M3 16.5C3 15.477 3.40638 14.4959 4.12973 13.7726C4.85309 13.0492 5.83416 12.6429 6.85714 12.6429H14.5714C15.5944 12.6429 16.5755 13.0492 17.2988 13.7726C18.0222 14.4959 18.4286 15.477 18.4286 16.5C18.4286 17.0115 18.2254 17.502 17.8637 17.8637C17.502 18.2254 17.0115 18.4286 16.5 18.4286H4.92857C4.41708 18.4286 3.92654 18.2254 3.56487 17.8637C3.20319 17.502 3 17.0115 3 16.5Z"
		stroke={color ?? stroke}
		fill={fill ? color ?? stroke : 'none'}
		stroke-width="0.875"
		stroke-linejoin="round"
	/>
	<path
		d="M10.7143 8.78571C12.312 8.78571 13.6071 7.49054 13.6071 5.89286C13.6071 4.29518 12.312 3 10.7143 3C9.1166 3 7.82143 4.29518 7.82143 5.89286C7.82143 7.49054 9.1166 8.78571 10.7143 8.78571Z"
		fill={fill ? color ?? stroke : 'none'}
		stroke={color ?? stroke}
		stroke-width="0.875"
	/>
</svg>
