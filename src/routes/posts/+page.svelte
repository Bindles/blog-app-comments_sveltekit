<script>
  import { supabase } from '$lib/supabase';
  let posts = [];

  // Fetch all posts
  const loadPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*');
    
    if (error) {
      console.error(error.message);
    } else {
      posts = data;
    }
  };

  loadPosts();

  // Handle post deletion
  const deletePost = async (id) => {
    const { data, error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error(error.message);
    } else {
      posts = posts.filter(post => post.id !== id); // Update the local state
    }
  };
</script>

<h1>All Posts</h1>
<a href="/posts/new">New Post</a>  
{#each posts as post}
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <a href={`/posts/${post.id}`}>View</a> |  <!-- View post page -->
    <a href={`/posts/${post.id}/edit`}>Edit</a> |  <!-- Edit post page -->
    <button on:click={() => deletePost(post.id)}>Delete</button>  <!-- Delete button -->
  </div>
{/each}
