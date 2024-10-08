import React from "react";

function ApiSelector({ users, onUserSelect }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700">Select User:</label>
      <select
        className="mt-2 p-2 border border-gray-300 rounded"
        onChange={(e) => {
          const selectedUser = users.find(user => user.id === parseInt(e.target.value));
          onUserSelect(selectedUser);
        }}
      >
        <option value="">-- Select User --</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
}

export default ApiSelector;

