class PageRecord {
    constructor({ org, cityTown, postcode, slug, lat, long }) {
        this.org = org;
        this.cityTown = cityTown;
        this.postcode = postcode;
        this.slug = slug.toLowerCase();
        this.lat =  lat;
        this.long = long
    }
}

export function rowToPageRecord(row) {
    if(!row.UID) return;
    if(row.UID) {
        row.Slug = row.UID // Replace old Slug
    }
    return row // No longer returning PageRecord because it can be so broad
}
