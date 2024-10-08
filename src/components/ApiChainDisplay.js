import React from "react";

function ApiChainDisplay({ selectedUser, postId, comments }) {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-semibold">API Chain Results</h2>
      
      {selectedUser && (
        <div className="mt-4">
          <h3 className="text-xl font-medium">Selected User:</h3>
          <p>{selectedUser.name}</p>
        </div>
      )}

      {postId && (
        <div className="mt-4">
          <h3 className="text-xl font-medium">Created Post ID:</h3>
          <p>{postId}</p>
        </div>
      )}

      {comments.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-medium">Comments for the Post:</h3>
          <ul className="list-disc pl-5">
            {comments.map(comment => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ApiChainDisplay;

