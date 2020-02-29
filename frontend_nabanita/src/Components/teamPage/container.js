import React from "react";
import Teamcard from "./teamHero";
import MemberCard from "./membercard";
import current_team_members from "../../Data/current_team_members";
import previous_team_members from "../../Data/previous_team_members";

function container() {
  return (
    <div>
      <Teamcard />
      <div>
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div
          className="container d-flex justify-content-center"
          style={{
            flexWrap: `wrap`
          }}
        >
          {current_team_members.map(member => {
            return <MemberCard member={member} />;
          })}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center mb-4">The Previous Team (2019-2020)</h2>
        <div
          className="container d-flex justify-content-center"
          style={{
            flexWrap: `wrap`
          }}
        >
          {previous_team_members.map(member => {
            return <MemberCard member={member} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default container;
