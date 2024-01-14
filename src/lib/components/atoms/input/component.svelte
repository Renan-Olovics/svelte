<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { Icon, type IconNames } from '..';

	type $$Props = HTMLInputAttributes & {
		label?: string;
		value?: string;
		name: string;
		error?: string;
		type: HTMLInputAttributes['type'];
		iconName?: IconNames;
		form?: any;
	};

	let { label, name, error, iconName, form } = $$props as $$Props;

	export let value = form?.data[name] ?? '';
	let hasError = false;
	let formError = form?.errors[name];
	$: hasError = !!formError ?? !!error;

	let isActive = false;
</script>

<div class="relative m-4 flex w-96 flex-col bg-inherit">
	<input
		{...$$restProps}
		data-error={!!error || !!formError}
		bind:value
		on:focus={() => (isActive = true)}
		on:blur={() => (isActive = false)}
		{name}
		data-active={!!value}
		id={name}
		class="peer h-12 w-96 rounded-xl border bg-inherit pl-9 data-[error=true]:border-red-500 data-[error=true]:outline-red-500"
	/>
	{#if label}
		<label
			class="peer-focus: text-fontColor pointer-events-none absolute
			left-8 top-3 bg-background px-2 text-sm duration-300 ease-in-out peer-focus:-top-3
			data-[active=true]:-top-3"
			data-active={!!value || isActive}
			for={name}
		>
			{label}
		</label>
	{/if}

	<span data-visible={!!hasError} class="pl-2 pt-1 text-sm text-red-500 data-[error=true]:hidden">
		{error ?? !!formError ? formError : ''}&nbsp;
	</span>

	{#if iconName}
		<Icon class="absolute left-3 top-3" name={iconName} />
	{/if}
</div>
