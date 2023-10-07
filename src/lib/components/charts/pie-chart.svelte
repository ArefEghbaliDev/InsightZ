<script>
	//@ts-nocheck

	import * as d3 from 'd3';

	export let data;
	export let width;
	export let height;
	export let innerRadius = 0;
	export let outerRadius = Math.min(width, height) / 2 - 1;

	const colourScale = d3
		.scaleOrdinal()
		.domain(data.map((d) => d.name))
		.range(['#3b82f6', '#6366f1', '#a855f7']);

	const pie = d3
		.pie()
		.sort(null)
		.value((d) => d.value);

	const arcPath = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

	const arcs = pie(data);
</script>

<svg
	{width}
	{height}
	viewBox="{-width / 2}, {-height / 2}, {width}, {height}"
	style:max-width="100%"
	style:height="auto"
>
	<g class="data">
		{#each arcs as slice}
			<path d={arcPath(slice)} fill={colourScale(slice.data.label)} stroke="none" />
		{/each}
	</g>
</svg>
