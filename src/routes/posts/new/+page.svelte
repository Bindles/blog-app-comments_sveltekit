<script>
  import { supabase } from '$lib/supabase';
  let title = '';
  let content = '';
  let success = '';

  const createPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content }]);

    success = error ? error.message : 'Post created!';
    if (!error) {
      // Clear the form
      title = '';
      content = '';
    } else {
      goto(`/posts/${newPostId}`);
    }
  };
</script>

<div>
  <h1>Create a Post</h1>
  <input bind:value={title} placeholder="Title" />
  <textarea bind:value={content} placeholder="Content"></textarea>
  <button on:click={createPost}>Submit</button>
  {#if success}
    <p>{success}</p>
  {/if}
  <p><a href="/posts">Go back to Posts</a></p>
</div>
