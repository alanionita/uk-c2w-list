<script lang="ts">
	export let data: App.MapPage;

	import type { LatLngExpression } from 'leaflet';
	import Map from '../components/Map/+page.svelte';

	const initialView: LatLngExpression = [53.480759, -2.242631];
</script>

<section class="container">
	<h1>Welcome to C2W map</h1>

	<!-- TODO: move this older list to a ListView -->
	<!-- <ul>
		{#each data.records as record}
			<article>
				<h2>{record.org}</h2>
				<p>{record.cityTown}</p>
				<p>{record.postcode}</p>
				<a href={`./org/${record.slug}`}>{record.slug}</a>
			</article>
		{:else}
			<li>No map records found</li>
		{/each}
	</ul> -->
	<Map view={initialView} zoom={13} records={data.records} />
</section>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 4rem 1fr;
		height: 95vh;
		width: 100%;
	}
</style>
