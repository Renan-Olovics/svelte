<script lang="ts">
	type $$Props = {
		name: string;
		label?: string;
		checked?: boolean;
	};

	let { name, label, checked } = $$props as $$Props;
</script>

<div>
	<input bind:checked id={name} {name} type="checkbox" />

	{#if label}
		<label for={name}>
			{label}
		</label>
	{/if}

	<slot />
</div>
