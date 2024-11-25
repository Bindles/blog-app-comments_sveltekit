<script context="module">
  import { supabase } from '$lib/supabase';  // Ensure supabase is imported correctly

  export async function load({ params }) {
    try {
      // Fetch the post by ID
      const { data: post, error } = await supabase
        .from('posts')
        .select('title, content')  // Select 'title' and 'content' columns
        .eq('id', params.id)  // Filter by the dynamic id from the URL
        .single();  // Expect a single post

      if (error) {
        console.error('Error fetching post:', error);
        return {
          status: 404,
          error: new Error('Post not found')
        };
      }

      console.log('Fetched post:', post);  // Log the fetched post

      return {
        props: { post }  // Return the post data to the page
      };
    } catch (err) {
      console.error('Error in loading post:', err);
      return {
        status: 500,
        error: new Error('Internal server error')
      };
    }
  }
</script>

<script>
  export let post;  // The post prop passed from the load function
</script>

{#if post}
  <h1>{post.title}</h1>  <!-- Display the post title -->
  <p>{post.content}</p>  <!-- Display the post content -->
{:else}
  <p>Post not found or loading...</p>
{/if}
