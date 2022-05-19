import { React, useState, useEffect } from 'react'
import SharePost from './Components/SharePost'
import Posts from './Components/Posts'
import { v4 as uuidv4 } from 'uuid'

function App() {


  const [posts, setPosts] = useState([])


  // Get posts from server by calling fetchPosts() --> cannot create async func right on useEffect()
  useEffect(() => {
    const getPosts = async () => {
      const fromServer = await fetchPosts()
      setPosts(fromServer)
    }
 
    getPosts()
  }, [])

  // Fetch Posts from JSON server with Fetch API -> async / await
  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()

    return data
  }


  // Share Post --> becomes async when implementing FetchAPI
  const sharePost = async (post) => {
    const res = await fetch('http://localhost:5000/posts/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()
    
    setPosts([...posts, data])

    //  // Set content variable to text input of post
    //  const content = post.text
    //  // Set Posts to all pervious posts + newly added post with new id
    //  setPosts(prevPosts => {
    //    return [...prevPosts, {id: uuidv4(), content: content}]
    //  })
  }


  // Delete Post --> becomes async when implementing Fetch API
  const deletePost = async(id) => {
    // fetch post with specific id from JSON server
    // make a request by calling DELETE method
    await fetch(`http://localhost:5000/posts/${id}`,{
      method: 'DELETE'
    })
    // Set posts to all posts whose id != to the id that was passed into deletePost()
    setPosts(posts.filter((post) => post.id !== id))
  }


  return ( 
    <>
      <SharePost onShare={sharePost}/>
      {posts.length > 0 
        ? <Posts posts={posts} onDelete={deletePost}/>
        : <h4>No posts at the moment</h4>}

    </>
  );
}

export default App;
