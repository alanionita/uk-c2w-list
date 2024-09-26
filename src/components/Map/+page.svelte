<script lang="ts">
	import Leaflet from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { onDestroy, onMount, setContext } from 'svelte';

	let map: Leaflet.Map | null;
	let mapEl: HTMLElement;
	let mapLayers: Leaflet.LayerGroup;

	export let bounds: Leaflet.LatLngBoundsExpression | null = null;
	export let view: Leaflet.LatLngExpression | null = null;
	export let zoom: number | null = null;
	export let records: App.MapRecord[] | null = null;

	onMount(() => {
		try {
			map = Leaflet.map(mapEl) as Leaflet.Map;

			Leaflet.tileLayer(
				'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
				{
					attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
                &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
					subdomains: 'abcd',
					maxZoom: 10
				}
			).addTo(map);

            mapLayers = Leaflet.layerGroup()

			if (map instanceof Leaflet.Map && records) {
				records.forEach(({ lat, long, org, slug }: App.MapRecord) => {
                    // TODO: break into smaller component
                    const popUp = `<div>
                        <a href="./org/${slug}">${org}</a>
                    </div>`

					const marker = Leaflet.marker([lat, long]).bindPopup(popUp).openPopup();
                    mapLayers.addLayer(marker);
				});
			}

			mapLayers.addTo(map);
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error('Error [Map] :', err?.message);
				throw err;
			}
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
