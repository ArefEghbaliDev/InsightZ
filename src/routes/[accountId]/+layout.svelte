<script>
	import DashboardSidebar from '$lib/components/ui/organisms/dashboard-sidebar/dashboard-sidebar.svelte';
</script>

<div class="flex items-start justify-between h-screen">
	<DashboardSidebar />
	<div class="flex-1 px-6 py-5">
		<slot />
	</div>
</div>
