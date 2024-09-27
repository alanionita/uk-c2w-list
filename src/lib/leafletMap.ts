import Leaflet from 'leaflet';

export class CustomLeafletMap {
    init(htmlEl: HTMLElement, markers: App.MapRecord[]): Leaflet.Map | Error {
        try {
            const MAX_ZOOM: number = 20;
            let map: Leaflet.Map = Leaflet.map(htmlEl);
            
            // Add Tile Layer
            const mapWithTiles = this.addTileLayer(map, MAX_ZOOM);
            
            if (mapWithTiles instanceof Leaflet.Map) {
                map = mapWithTiles
            }
            
            // Add Markers Layer
            if (markers && markers.length > 0) {
                const layerGroup: Leaflet.LayerGroup = Leaflet.layerGroup();
                const layerGroupWithMarkers = this.addMarkers(layerGroup, markers)
                if (layerGroupWithMarkers instanceof Leaflet.LayerGroup) {
                    layerGroupWithMarkers.addTo(map)
                }
            }

            return map;

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Err [lib/leafletMap/init]:', err.message);
                console.info(JSON.stringify(err.stack))
                return err
            }
            return Error('Unknown error')
        }
    }

    addTileLayer(map: Leaflet.Map, maxZoom: number): Leaflet.Map | Error {
        try {
            if (map instanceof Leaflet.Map === false) {
                throw new Error('Map not initialised')
            }
            Leaflet.tileLayer(
                'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
                {
                    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
                &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
                    subdomains: 'abcd',
                    maxZoom
                }
            ).addTo(map);

            return map
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Err [lib/leafletMap/addTileLayer]:', err.message);
                console.info(JSON.stringify(err.stack))
                return err
            }
            return Error('Unknown error')
        }

    }
    addMarkers(layerGroup: Leaflet.LayerGroup, markers: App.MapRecord[]): Leaflet.LayerGroup | Error {
        try {
            if (!layerGroup || layerGroup instanceof Leaflet.LayerGroup === false || !markers) {
                throw new Error('Layer group or markers are invalid')
            }
            markers.forEach(({ lat, long, org, slug }: App.MapRecord) => {
                if (slug) {
                    const popup = this.makeMarkerPopup(slug, org);
                    const marker = Leaflet.marker([lat, long]).bindPopup(popup).openPopup();
                    layerGroup.addLayer(marker);
                }
            });
            return layerGroup;
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Err [lib/leafletMap/addMarkers]:', err.message);
                console.info(JSON.stringify(err.stack))
                return err
            }
            return Error('Unknown error')
        }


    }
    makeMarkerPopup(slug: string, org: string): string {
        const html = `<div>
                    <a href="./org/${slug}">${org}</a>
                </div>`;
        return html;
    }
}
