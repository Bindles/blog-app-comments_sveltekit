<script>
  import { supabase } from '$lib/supabase';

  let posts = [];
  let title = '';
  let content = '';
  let success = '';

  // Load posts when the page is loaded
  const loadPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*');

    if (error) {
      console.error(error.message);
    } else {
      posts = data || [];
    }
  };

  // Create a new post
  const createPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content }]);

    success = error ? error.message : 'Post created!';
    if (!error) {
      title = '';
      content = '';
      await loadPosts(); // Refresh the post list
    }
  };

  loadPosts();
</script>

<div>
  <h1>Posts</h1>
  <div>
    <h2>Create a Post</h2>
    <input bind:value={title} placeholder="Title" />
    <textarea bind:value={content} placeholder="Content"></textarea>
    <button on:click={createPost}>Submit</button>
    {#if success}
      <p>{success}</p>
    {/if}
  </div>
  <hr />
  <div>
    <h2>All Posts</h2>
    {#if posts.length === 0}
      <p>No posts yet. Be the first to create one!</p>
    {/if}
    {#each posts as post}
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    {/each}
  </div>
</div>
