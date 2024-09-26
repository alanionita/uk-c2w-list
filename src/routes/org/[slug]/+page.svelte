<script lang="ts">
	export let data: App.OrgPage;
	import { base } from '$app/paths';
</script>

<a href="{base}/">Go back /</a>
<h1>{data.org.org}</h1>
<p>City/Town: {data.org.cityTown}</p>
<p>Postcode: {data.org.postcode}</p>
<p>Lat: {data.org.lat}</p>
<p>Long: {data.org.long}</p>
