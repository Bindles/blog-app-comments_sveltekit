// src/routes/posts/[id]/+page.js
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

    // Return the post data directly (No props here, just post)
    return { post };  // Return post directly as it will be passed as a prop to the Svelte component
  } catch (err) {
    console.error('Error in loading post:', err);
    return {
      status: 500,
      error: new Error('Internal server error')
    };
  }
}
