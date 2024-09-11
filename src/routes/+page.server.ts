import { getMapRecords } from '$lib/mapRecords';
import { error } from '@sveltejs/kit';

export function load() {
    const records = getMapRecords();
    if (!records) error(404, 'MapRecords Not found');
    return { records }
}

export const prerender = true;