import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Engagement() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Our <strong className="purple">Engagement</strong> Activity
      </h1>

      <p style={{ color: "rgb(187, 93, 242)", maxWidth: "600px", textAlign: "center", marginBottom: "20px" }}>
        Visualizing our engagement over the year – events, mentorships, and collaborative initiatives.
      </p>

      <GitHubCalendar
        username="soumyajit4419" // ممكن تحطي أي يوزر عنده activity
        blockSize={15}
        blockMargin={5}
        color="#bb5df2"
        fontSize={16}
      />
    </Row>
  );
}

export default Engagement;
