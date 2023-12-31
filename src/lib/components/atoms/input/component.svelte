<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { Icon, type IconNames } from '..';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		value?: string;
		name?: string;
		error?: string;
		type: HTMLInputAttributes['type'];
		iconName?: IconNames;
	};

	let { label, value = '', name, error, iconName } = $$props as $$Props;

	let isActive = false;
</script>

<div class="relative m-4 flex w-96 flex-col bg-inherit">
	{#if iconName}
		<Icon class="absolute left-3 top-3" name={iconName} />
	{/if}

	<input
		data-error={!!error}
		bind:value
		on:focus={() => (isActive = true)}
		on:blur={() => (isActive = false)}
		{name}
		data-active={!!value}
		id={name}
		class="peer h-12 w-96 rounded-xl border bg-inherit pl-9 data-[error=true]:border-red-500 data-[error=true]:outline-red-500"
		{...$$restProps}
	/>

	{#if label}
		<label
			class="peer-focus: bg-background text-fontColor pointer-events-none
			absolute left-8 top-3 px-2 text-sm duration-300 ease-in-out peer-focus:-top-3
			data-[active=true]:-top-3
			"
			data-active={!!value || isActive}
			for={name}>{label}</label
		>
	{/if}

	<span data-error={!!error} class="pl-2 pt-1 text-sm text-red-500 data-[error=false]:hidden">
		{error}
	</span>
</div>
