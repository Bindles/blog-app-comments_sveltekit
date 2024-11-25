<script>
  import { supabase } from '$lib/supabase';
  export let params;
  
  let success = '';
  
  const deletePost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .delete()
      .eq('id', params.id);
    
    success = error ? error.message : 'Post deleted!';
  };
</script>

<div>
  <h1>Are you sure you want to delete this post?</h1>
  <button on:click={deletePost}>Yes, Delete</button>
  <p>{success}</p>
  <a href="/posts">Go back to Posts</a>
</div>
