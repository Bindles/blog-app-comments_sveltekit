<script>
  import { supabase } from '$lib/supabase';
  export let params;
  
  let post = { title: '', content: '' };
  let success = '';
  
  // Fetch the post by ID
  const loadPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', params.id)
      .single();
    
    if (error) {
      console.error(error.message);
    } else {
      post = data;
    }
  };
  
  // Update the post
  const updatePost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .update({ title: post.title, content: post.content })
      .eq('id', params.id);
    
    success = error ? error.message : 'Post updated!';
  };

  loadPost();
</script>

<div>
  <h1>Edit Post</h1>
  <input bind:value={post.title} placeholder="Title" />
  <textarea bind:value={post.content} placeholder="Content"></textarea>
  <button on:click={updatePost}>Update Post</button>
  {#if success}
    <p>{success}</p>
  {/if}
</div>
