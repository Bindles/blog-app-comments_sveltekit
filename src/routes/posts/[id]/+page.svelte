<script>
  export let post;  // The post prop passed from the load function

  // Debugging - Check if post is being received
  console.log(post);  
  {JSON.stringify(post)} 

</script>

{#if post}
  <h1>{post.title}</h1>  <!-- Display the post title -->
  <p>{post.content}</p>  <!-- Display the post content -->
{:else}
  <p>Post not found or loading...</p>
{/if}
