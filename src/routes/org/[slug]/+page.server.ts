import { getMapRecords, getOrgRecord } from '$lib/records';
import { error } from '@sveltejs/kit';
import type { RouteParams } from './$types.js';

export function entries() {
    const mapRecords = getMapRecords();

    const recordsSlugs: RouteParams[] = mapRecords.reduce((acc, record) => {
        if (record.slug && record.slug.length > 0) {
            acc.push({ slug: record.slug })
            return acc;
        }
        return acc;
    }, [] as RouteParams[])
    
    return recordsSlugs;
}

export async function load({ params }) {
    const org = getOrgRecord(params.slug);
    if (!org) error(404, 'Org Not found');
    return { org }
}
