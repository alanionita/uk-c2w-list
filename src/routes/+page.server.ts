import { getMapRecords } from '$lib/records';
import { error } from '@sveltejs/kit';

export function load() {
    const records = getMapRecords();
    if (!records) error(404, 'MapRecords Not found');
    return { records }
}

export const ssr = false;
export const prerender = true;