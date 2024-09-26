// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface MapRecord {
			org: string;
			cityTown: string
			postcode: string
			lat: string
			long: string
			slug: string
		};
		type MapPageData = {
			records: MapRecord[]
		}
		type MapPage = PageData & MapPageData


		interface OrgRecord {
			org: string;
			cityTown: string
			postcode: string
			lat: string
			long: string
			slug: string
		};
		type OrgPageData = {
			org: OrgRecord
		}
		type OrgPage = PageData & OrgPageData
	}
}

export { };
