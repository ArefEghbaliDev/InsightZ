<script>
	import { page } from '$app/stores';
	import DashboardSidebarItem from './dashboard-sidebar-item.svelte';
	import Icon from '@iconify/svelte';

	const slug = $page.params.accountId;

	console.log(slug);
</script>

<div
	class="flex flex-col items-stretch justify-start gap-6 h-full w-[230px] bg-dark-400 border-r border-dark-200"
>
	<h4 class="pt-5 px-3 font-medium text-2xl">
		Insight
		<span class="font-medium text-violet-500 pl-[2px]">Z</span>
	</h4>
	<div class="flex flex-col items-stretch justify-start gap-5">
		<div class="flex flex-col items-stretch justify-start gap-2 px-3">
			<p class="text-sm text-white-200">Management</p>
			<DashboardSidebarItem link={`/1234/dashboard`}>
				<Icon icon="fi:grid" />
				Dashboard
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/1234/dashboard/posts`}>
				<Icon icon="fi:file" />
				Posts
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/1234/dashboard/schedule`}>
				<Icon icon="fi:calculator" />
				Schedule
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/1234/dashboard/team`}>
				<Icon icon="fi:users" />
				Team
			</DashboardSidebarItem>
			<div class="w-full border-b border-dark-200 pt-2" />
		</div>
		<div class="flex flex-col items-stretch justify-start gap-2 px-3">
			<div class="flex items-center justify-between">
				<div class=" flex items-center justify-start gap-1">
					<p class="text-sm text-white-200">Accounts</p>
					<span class="bg-dark-100 rounded-full text-sm px-2"> 4 </span>
				</div>
			</div>
			<DashboardSidebarItem link="/accountid/dashboard">
				<Icon icon="fi:instagram" />
				ArefEghbali.Web
			</DashboardSidebarItem>
		</div>
	</div>
</div>
