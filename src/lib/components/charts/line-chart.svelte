<script>
	// @ts-nocheck
	import * as d3 from 'd3';
	import dayjs from 'dayjs';

	export let data;
	export let width;
	export let height;
	export let color = '#4ade80';
	export let lineWidth = 4;
	export let domain = 'weekly';
	export let withAxis = false;
	export let margin = { top: 1, left: 1, right: 1, bottom: 1 };

	const finalWidth = width - margin.left - margin.right;
	const finalHeight = height - margin.top - margin.bottom;

	let extentX = d3.extent(data, (d) => d.timestamp);
	let xScale = d3.scaleTime().domain(extentX).range([0, finalWidth]);

	let extentY = [0, d3.max(data, (d) => d.value)];
	let yScale = d3.scaleLinear().domain(extentY).range([finalHeight, 0]);

	$: domainLabel = (timestamp) => {
		if (domain === 'weekly') {
			return dayjs(timestamp).format('dd');
		} else if (domain === 'monthly') {
			return dayjs(timestamp).format('DD/MM');
		}

		return dayjs(timestamp).format('mm');
	};

	let path = d3
		.line()
		.curve(d3.curveNatural)
		.x((d) => xScale(d.timestamp))
		.y((d) => yScale(d.value));

	let area = d3
		.area()
		.curve(d3.curveNatural)
		.x((d) => xScale(d.timestamp))
		.y0(yScale(0))
		.y1((d) => yScale(d.value));
</script>

<svg {width} {height} viewBox="0 0 {width} {height}" fill="none">
	<g transform="translate({margin.left}, {margin.top})">
		<path d={path(data)} fill="none" stroke={color} stroke-width={lineWidth} />
		<path d={area(data)} fill={d3.color(color).darker(7)} stroke={'none'} />
	</g>
	{#if withAxis}
		<g transform="translate(0,{height - margin.bottom})">
			<line stroke="#333333" x1={margin.left} x2={width} />
			{#each xScale.ticks() as tick}
				<line stroke="currentColor" x1={xScale(tick)} x2={xScale(tick)} y1={0} y2={6} />
				<text
					fill="currentColor"
					font-size={11}
					text-anchor="middle"
					x={xScale(tick)}
					y={22}
				>
					{domainLabel(tick.getTime())}
				</text>
			{/each}
		</g>
		<g transform="translate({margin.left},{margin.top})">
			{#each yScale.ticks() as tick}
				{#if tick !== 0}
					<line
						stroke="currentColor"
						x1={0}
						x2={-6}
						y1={yScale(tick)}
						y2={yScale(tick)}
					/>
				{/if}

				<text
					fill="currentColor"
					text-anchor="end"
					dominant-baseline="middle"
					font-size={11}
					x={-9}
					y={yScale(tick)}
				>
					{Intl.NumberFormat('en', {
						compactDisplay: 'short',
						notation: 'compact'
					}).format(tick)}
				</text>
			{/each}
		</g>
	{/if}
</svg>
