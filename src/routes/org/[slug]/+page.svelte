<script lang="ts">
	export let data: App.OrgPage;
	import { base } from '$app/paths';
</script>

<div class="container mx-auto">
	<a class="text-blue-600" href="{base}/">{`< Back to map`}</a>
	<div class="px-4 sm:px-0">
	  <h3 class="text-2xl font-semibold leading-7 text-gray-900">{data.org.Org}</h3>
	  <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Company details</p>
	</div>
	<div class="mt-6 border-t border-gray-100">
	  <dl class="divide-y divide-gray-100">
		{#each Object.keys(data.org) as key}
			{#if data.org[key].length > 0}
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">{key}</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.org[key]}</dd>
				</div>
			{:else}
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">{key}</dt>
					<dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">N/A</dd>
				</div>
			{/if}
		{:else}
			<div></div>
		{/each}
	  </dl>
	</div>
  </div>