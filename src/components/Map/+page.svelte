<script lang="ts">
	import { CustomLeafletMap } from '$lib/leafletMap';
	import Leaflet from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { onDestroy, onMount, setContext } from 'svelte';

	let map: Leaflet.Map | null;
	let mapEl: HTMLElement;

	export let bounds: Leaflet.LatLngBoundsExpression | null = null;
	export let view: Leaflet.LatLngExpression | null = null;
	export let zoom: number | null = null;
	export let records: App.MapRecord[] | null = null;

	onMount(() => {
		try {
			const customLeafletMap = new CustomLeafletMap();
			if (records && records.length > 0) {
				const leafletMap = customLeafletMap.init(mapEl, records);
				if (leafletMap instanceof Leaflet.Map) {
					map = leafletMap;
				}
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error('Error [Map] :', err.message);
				throw err;
			}

			return Error('Unknown error')
		}
	});
	onDestroy(() => {
		map?.remove();
		map = null;
	});

	setContext('map', {
		getMap: () => map
	});

	// react exp
	$: if (map) {
		if (bounds) {
			map.fitBounds(bounds);
		}
		if (view && zoom) {
			map.setView(view, zoom);
		}
	}
</script>

<figure class="map" bind:this={mapEl}>
	<slot />
</figure>

<style>
	.map {
		margin: 0;
		padding: 0;
	}
</style>
