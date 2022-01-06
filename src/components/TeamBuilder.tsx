import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./TeamBuilder.css";

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
    <div className="teambuilder">
      <h3>Clash Team Builder</h3>

      <hr />

      <Form className="teambuilder__form">
        <Form.Group className="teambuilder__input">
          <Form.Control
            className="teambuilder__input--name"
            placeholder="Player Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.currentTarget.value)}
          />
          <Form.Control
            className="teambuilder__input--role"
            placeholder="Role"
            value={mainRole}
            onChange={(e) => setMainRole(e.currentTarget.value)}
          />
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
      <div className="teambuilder__team-info">
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
