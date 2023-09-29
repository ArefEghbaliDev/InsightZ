<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils/cn';

	export let link: string;

	const isActive: boolean = $page.url.pathname === link;
</script>

<a
	href={link}
	class={cn(
		'flex items-center justify-start gap-2 py-1 transition-colors duration-150 hover:text-violet-500',
		{
			'text-violet-500': isActive
		}
	)}
>
	<slot />
</a>
