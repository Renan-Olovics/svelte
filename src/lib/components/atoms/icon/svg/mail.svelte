<script lang="ts">
	type $$Props = {
		size?: string | number;
		width?: string | number;
		height?: string | number;
		fill?: boolean;
		stroke?: string;
		color?: string;
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
		stroke={color ?? stroke}
		fill={fill ? color ?? stroke : 'none'}
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M3.5 6.5V14.5C3.5 15.0304 3.71071 15.5391 4.08579 15.9142C4.46086 16.2893 4.96957 16.5 5.5 16.5H15.5C16.0304 16.5 16.5391 16.2893 16.9142 15.9142C17.2893 15.5391 17.5 15.0304 17.5 14.5V6.5C17.5 5.96957 17.2893 5.46086 16.9142 5.08579C16.5391 4.71071 16.0304 4.5 15.5 4.5H5.5C4.96957 4.5 4.46086 4.71071 4.08579 5.08579C3.71071 5.46086 3.5 5.96957 3.5 6.5Z"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		stroke={color ?? stroke}
		fill={fill ? color ?? stroke : 'none'}
		d="M5.5 7.5L10.5 10.5L15.5 7.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
