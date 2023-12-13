import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { UPDATE_USER } from "./querys";

function UpdateUserForm() {
  const [userId, setUserId] = useState("");
  const [updateInput, setUpdateInput] = useState({});
  const [updateUser] = useMutation(UPDATE_USER);

  const handleUpdate = async () => {
    try {
      const { data } = await updateUser({
        variables: { userId, updateInput },
      });

      console.log("user update:", data.updateUser);
    } catch (error) {
      console.error("user dont update:", error.message);
    }
  };

  return (
    <div>
      <label>
        Userid ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <label>
        Update UserName:
        <input
          type="text"
          onChange={(e) =>
            setUpdateInput({ ...updateInput, username: e.target.value })
          }
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateUserForm;
