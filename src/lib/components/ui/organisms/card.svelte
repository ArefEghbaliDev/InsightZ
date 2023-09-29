<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
</script>

<section class="rounded border border-dark-200 p-3">
	<h4 class="prose-subheading text-white-500">{title}</h4>
	{#if subtitle}
		<p class="prose-smalltext text-white-300 pt-1">{subtitle}</p>
	{/if}
	<div class="pt-6"><slot /></div>
</section>
