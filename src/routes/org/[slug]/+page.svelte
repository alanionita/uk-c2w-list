<script lang="ts">
	export let data: App.OrgPage;
	import { base } from '$app/paths';
</script>

<a href="{base}/">Go back /</a>
<h1>{data.org.org}</h1>
<p>{data.org.cityTown}</p>
<p>{data.org.postcode}</p>
