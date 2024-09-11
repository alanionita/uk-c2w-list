class PageRecord {
    constructor({ org, cityTown, postcode, slug }) {
        this.org = org;
        this.cityTown = cityTown;
        this.postcode = postcode;
        this.slug = slug.toLowerCase();
    }
}

export function rowToPageRecord(row) {
    const org = row[0];
    const cityTown = row[4];
    const postcode = row[5];
    const slug = row[11];
    if (!slug) {
        return null;
    } 
    return new PageRecord({ org, cityTown, postcode, slug })
}
