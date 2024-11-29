<script>
    import Logo from "./Logo.svelte";

</script>
<div class="flex flex-col min-h-screen bg-black text-white">
    <Logo />

    <main>
        <slot></slot>
    </main>

</div>