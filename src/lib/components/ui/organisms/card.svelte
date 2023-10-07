<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
</script>

<section
	class="rounded border border-dark-200 p-3 flex flex-col items-stretch justify-between gap-3"
>
	<div class="flex flex-col items-stretch justify-start gap-1">
		<h4 class="prose-subheading text-white-500">{title}</h4>
		{#if subtitle}
			<p class="prose-smalltext text-white-300">{subtitle}</p>
		{/if}
	</div>
	<div class="flex flex-col items-stretch justify-start flex-1 gap-3"><slot /></div>
</section>
