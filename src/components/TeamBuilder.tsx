import React, { useState } from "react";

interface TeammateState {
  name: string;
}

interface Props {}

const TeamBuilder: React.FC<Props> = () => {
  const [teammateInfo, setTeammateInfo] = useState<TeammateState[]>([
    { name: "Player1" },
  ]);

  console.log("Added new team member: " + teammateInfo);

  return (
    <div>
      <h3>Clash Team Builder</h3>
      <hr />
      <button
        onClick={() =>
          setTeammateInfo([...teammateInfo, { name: "New member" }])
        }
      >
        Add new team member
      </button>
    </div>
  );
};

export default TeamBuilder;
