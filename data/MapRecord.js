class MapRecord {
    constructor({ org, cityTown, postcode, slug }) {
        this.org = org;
        this.cityTown = cityTown;
        this.postcode = postcode;
        this.slug = slug;
    }
}

export function rowToMapRecord(row) {
    const org = row[0];
    const cityTown = row[4];
    const postcode = row[5];
    const slug = row[11];

    return new MapRecord({ org, cityTown, postcode, slug })
}
