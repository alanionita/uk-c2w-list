import { getOrgRecord } from '$lib/records';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const org = getOrgRecord(params.slug);
    if (!org) error(404, 'Org Not found');
    return { org }
}

export const ssr = false;