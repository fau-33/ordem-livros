<script>
  import { page } from "$app/stores";
  import ConteudoAutor from "../../../components/autor/conteudoAutor.svelte";
</script>

<ConteudoAutor autor={$page.data.autor} />
