<script>
  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import autores from "../../constants/autores";
</script>

<h1 class="text-3xl font-bold">Autores</h1>

<div class="grid grid-cols-2 gap-5">
  {#each autores as autor}
    <ItemAutor {autor} />
  {/each}
</div>
