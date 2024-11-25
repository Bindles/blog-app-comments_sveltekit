<script>
  import { supabase } from '$lib/supabase';
  let email = '';
  let password = '';
  let error = '';

  const login = async () => {
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    error = authError ? authError.message : '';
  };
</script>

<div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
  <h2 class="text-xl font-bold mb-4">Login</h2>
  <input
    type="email"
    placeholder="Email"
    bind:value={email}
    class="w-full p-2 border rounded mb-2"
  />
  <input
    type="password"
    placeholder="Password"
    bind:value={password}
    class="w-full p-2 border rounded mb-4"
  />
  <button on:click={login} class="w-full bg-blue-500 text-white p-2 rounded">
    Log In
  </button>
  {#if error}
    <p class="text-red-500 mt-2">{error}</p>
  {/if}
</div>
