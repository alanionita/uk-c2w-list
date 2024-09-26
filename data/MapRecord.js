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
    const org = row[0];
    const cityTown = row[5];
    const postcode = row[6];
    const lat = row[7];
    const long = row[8];
    const slug = row[2]; // Actually uses UUID

    return new MapRecord({ org, cityTown, postcode, slug, lat, long })
}
