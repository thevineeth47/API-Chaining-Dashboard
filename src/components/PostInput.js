import React from "react";

function PostInput({ postDetails, onChange, onSubmit }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={postDetails.title}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Body</label>
        <textarea
          name="body"
          value={postDetails.body}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Enter body"
        />
      </div>
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Create Post
      </button>
    </div>
  );
}

export default PostInput;

