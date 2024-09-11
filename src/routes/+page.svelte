<script lang="ts">
	export let data: App.MapPage;
</script>

<h1>Welcome to C2W map</h1>
<ul>
	{#each data.records as record}
		<article>
			<h2>{record.org}</h2>
			<p>{record.cityTown}</p>
			<p>{record.postcode}</p>
			<a href={`./org/${record.slug}`}>{record.slug}</a>
		</article>
	{:else}
		<li>No map records found</li>
	{/each}
</ul>
