import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface TeammateState {
  name: string;
  mainRole: string;
}

interface Props {}

const TeamBuilder: React.FC<Props> = () => {
  const [playerName, setPlayerName] = useState<string>("");
  const [mainRole, setMainRole] = useState<string>("");
  const [teammateInfo, setTeammateInfo] = useState<TeammateState[]>([
    { name: "Player1", mainRole: "mid" },
  ]);

  const handleSubmit = () => {
    const newTeammate = [
      ...teammateInfo,
      { name: playerName, mainRole: mainRole },
    ];
    setTeammateInfo(newTeammate);
    setPlayerName("");
    setMainRole("");
  };

  return (
    <div>
      <h3>Clash Team Builder</h3>
      <Button variant="primary">Primary</Button>
      <hr />
      <div>
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.currentTarget.value)}
        />
        <input
          value={mainRole}
          onChange={(e) => setMainRole(e.currentTarget.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {teammateInfo.map((teammate) => (
          <div key={teammate.name}>
            {teammate.name} {teammate.mainRole}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBuilder;
