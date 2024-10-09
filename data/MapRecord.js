class MapRecord {
    constructor({ org, cityTown, postcode, slug, lat, long }) {
        this.org = org;
        this.cityTown = cityTown;
        this.postcode = postcode;
        this.slug = slug.toLowerCase();
        this.lat =  lat;
        this.long = long
    }
}

export function rowToMapRecord(row) {
    const org = row['Org'];
    const cityTown = row['City/Town'];
    const postcode = row['Postcode'];
    const lat = row['lat'];
    const long = row['long'];
    const slug = row['UID'];
    if (!slug || slug.length === 0) return; 
    return new MapRecord({ org, cityTown, postcode, slug, lat, long })
}
