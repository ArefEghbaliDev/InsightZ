<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let isActive: boolean = false;
	export let onClick: () => void;
	export let disabled: boolean = false;
</script>

<button
	type="button"
	on:click={onClick}
	{disabled}
	class={cn(
		'rounded px-2 py-1 select-none focus:outline-none prose-smalltext hover:text-white-500 active:text-violet-300 transition-colors duration-150 flex items-center justify-center gap-2 text-white-100',
		{
			'bg-dark-300 text-white-500': isActive
		}
	)}
>
	<slot /></button
>
