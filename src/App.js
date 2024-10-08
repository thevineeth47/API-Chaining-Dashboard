import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiChainDisplay from "./components/ApiChainDisplay";
import ApiSelector from "./components/ApiSelector";
import PostInput from "./components/PostInput";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [postDetails, setPostDetails] = useState({ title: '', body: '', userId: null });
  const [postId, setPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users (GET request)
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      setError("Error fetching users.");
    } finally {
      setLoading(false);
    }
  };

  // Create Post (POST request)
  const createPost = async () => {
    if (!selectedUser) {
      setError("No user selected.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        ...postDetails,
        userId: selectedUser.id,
      });
      setPostId(response.data.id);
      fetchComments(response.data.id);  // Chaining the next API call
    } catch (error) {
      setError("Error creating post.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Comments (GET request)
  const fetchComments = async (postId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      setComments(response.data);
    } catch (error) {
      setError("Error fetching comments.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Post Input Changes
  const handlePostInputChange = (e) => {
    const { name, value } = e.target;
    setPostDetails(prev => ({ ...prev, [name]: value }));
  };

  // Handle User Selection
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setPostDetails(prev => ({ ...prev, userId: user.id }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">API Chaining Dashboard</h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-blue-500">Loading...</div>}

      {/* API Selection Component */}
      <ApiSelector users={users} onUserSelect={handleUserSelect} />

      {/* Input form for creating a post */}
      <PostInput postDetails={postDetails} onChange={handlePostInputChange} onSubmit={createPost} />

      {/* Display the flow and results */}
      <ApiChainDisplay selectedUser={selectedUser} postId={postId} comments={comments} />
    </div>
  );
}

export default App;

