<script>
	import { page } from '$app/stores';
	import DashboardSidebarItem from './dashboard-sidebar-item.svelte';
	import Icon from '@iconify/svelte';

	const accountId = $page.params.accountId;
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
			<DashboardSidebarItem link={`/${accountId}/dashboard`}>
				<Icon icon="feather:grid" width={16} height={16} />
				Dashboard
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/${accountId}/dashboard/posts`}>
				<Icon icon="feather:file" width={16} height={16} />
				Posts
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/${accountId}/dashboard/schedule`}>
				<Icon icon="feather:calendar" width={16} height={16} />
				Schedule
			</DashboardSidebarItem>
			<DashboardSidebarItem link={`/${accountId}/dashboard/team`}>
				<Icon icon="feather:users" width={16} height={16} />
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
				<Icon icon="feather:instagram" width={16} height={16} />
				ArefEghbali.Web
			</DashboardSidebarItem>
		</div>
	</div>
</div>
