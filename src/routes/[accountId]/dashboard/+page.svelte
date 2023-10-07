<script>
	import LineChart from '$lib/components/charts/line-chart.svelte';
	import PieChart from '$lib/components/charts/pie-chart.svelte';
	import Tag from '$lib/components/ui/atoms/tag.svelte';
	import SwitchTabItem from '$lib/components/ui/molecules/switch-tab-item.svelte';
	import SwitchTab from '$lib/components/ui/molecules/switch-tab.svelte';
	import Card from '$lib/components/ui/organisms/card.svelte';
	import { compactNumber } from '$lib/utils/compact_number';

	const pie_data = [
		{ label: 'Reels', value: 400 },
		{ label: 'Videos', value: 200 },
		{ label: 'Photos', value: 100 }
	];

	const chartData = [
		{ timestamp: new Date('2023-01-01'), value: 1000 },
		{ timestamp: new Date('2023-02-01'), value: 1200 },
		{ timestamp: new Date('2023-03-01'), value: 1500 },
		{ timestamp: new Date('2023-04-01'), value: 1100 },
		{ timestamp: new Date('2023-05-01'), value: 1300 },
		{ timestamp: new Date('2023-06-01'), value: 1600 },
		{ timestamp: new Date('2023-07-01'), value: 1400 },
		{ timestamp: new Date('2023-08-01'), value: 1800 },
		{ timestamp: new Date('2023-09-01'), value: 2000 }
	];
</script>

<div class="flex flex-col items-stretch justify-start gap-4 py-5">
	<div class="grid grid-cols-4 gap-5">
		<Card title="Published Posts">
			<div class="flex items-center justify-between gap-3">
				<div class="flex items-center justify-center relative">
					<h2 class="prose-h2 absolute">
						{compactNumber(2300)}
					</h2>
					<PieChart width={120} height={120} data={pie_data} innerRadius={45} />
				</div>
				<div class="flex flex-col items-stretch justify-start gap-1 flex-1">
					<div class="flex items-center justify-between">
						<div class="flex items-center justify-start gap-2">
							<span class="w-2 h-2 rounded-full bg-violet-500" />
							Reels
						</div>
						<p class="prose-body1">50%</p>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-center justify-start gap-2">
							<span class="w-2 h-2 rounded-full bg-purple-500" />
							Videos
						</div>
						<p class="prose-body1">30%</p>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-center justify-start gap-2">
							<span class="w-2 h-2 rounded-full bg-blue-500" />
							Photos
						</div>
						<p class="prose-body1">20%</p>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-center justify-start gap-2">
							<span class="w-2 h-2 rounded-full bg-gray-500" />
							Mixed
						</div>
						<p class="prose-body1">0%</p>
					</div>
				</div>
			</div>
		</Card>
		<Card title="Followers" subtitle="Since last week">
			<div class="flex items-start justify-between gap-3">
				<div class="flex items-start justify-start gap-2">
					<h2 class="prose-h1">{compactNumber(23800)}</h2>
					<Tag color="success">+5%</Tag>
				</div>
				<LineChart data={chartData} width={200} height={70} color="#10b981" />
			</div>
		</Card>
		<Card title="Posting Frequency" subtitle="Since last week">
			<div class="flex items-start justify-start gap-3">
				<div class="flex items-start justify-start gap-2">
					<h2 class="prose-h1">7</h2>
					<Tag color="danger">-5%</Tag>
				</div>
				<LineChart data={chartData} width={200} height={70} color="#fb7185" />
			</div>
		</Card>
		<Card title="Posting Time" subtitle="Based on weekly data">
			<div class="flex items-start justify-start gap-3">
				<div class="flex items-start justify-start gap-2">
					<h2 class="prose-h1">7</h2>
					<Tag color="danger">-5%</Tag>
				</div>
				<LineChart data={chartData} width={200} height={70} color="#fb7185" />
			</div>
		</Card>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<Card title="Performance" subtitle="Overall account performance">
			<div class="flex justify-start">
				<SwitchTab>
					<SwitchTabItem onClick={() => {}} isActive={true}>7D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>30D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>90D</SwitchTabItem>
				</SwitchTab>
			</div>
			<LineChart
				data={chartData}
				width={492}
				height={240}
				withAxis={true}
				margin={{
					top: 10,
					bottom: 30,
					left: 40,
					right: 0
				}}
			/>
		</Card>
		<Card title="Accounts Reached" subtitle="Number of new accounts discovered you">
			<div class="flex justify-start">
				<SwitchTab>
					<SwitchTabItem onClick={() => {}} isActive={true}>7D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>30D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>90D</SwitchTabItem>
				</SwitchTab>
			</div>
			<LineChart
				data={chartData}
				width={492}
				height={240}
				withAxis={true}
				margin={{
					top: 10,
					bottom: 30,
					left: 40,
					right: 0
				}}
			/>
		</Card>
		<Card title="Engagement Metrics" subtitle="Likes, Comments, Replies, Saves and more">
			<div class="flex justify-start">
				<SwitchTab>
					<SwitchTabItem onClick={() => {}} isActive={true}>7D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>30D</SwitchTabItem>
					<SwitchTabItem onClick={() => {}}>90D</SwitchTabItem>
				</SwitchTab>
			</div>
			<LineChart
				data={chartData}
				width={492}
				height={240}
				withAxis={true}
				margin={{
					top: 10,
					bottom: 30,
					left: 40,
					right: 0
				}}
			/>
		</Card>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<Card title="Trends & Virals" subtitle="Trending and viral content similar to yours" />
		<Card title="Peak Engagement Moments" subtitle="Most active times based on user behavior" />
		<Card title="Hashtags Performance" subtitle="Performance of hashtags used by you" />
	</div>
</div>
