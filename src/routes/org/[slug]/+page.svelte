<script lang="ts">
	export let data: App.OrgPage;
</script>

<a href={'/'}>Go back /</a>
<h1>{data.org.org}</h1>
<p>{data.org.cityTown}</p>
<p>{data.org.postcode}</p>
