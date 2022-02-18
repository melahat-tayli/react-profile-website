import { Container } from "./container";
import profile_pic from "../profile-pic.jpg";
import { aboutMe } from "./main_page_data";

export const Main = () => {
  return (
    <div className="homeMain">
      <Container>
        <div className="homeContent">
          <img
            alt="profile-photograph"
            src={profile_pic}
            style={{ height: "275px", paddingTop: "20px" }}
          />
          <div>
            <h2>{aboutMe.title}</h2>
            <p>{aboutMe.currentJob}</p>
            <p>
              {aboutMe.briefHistory} {aboutMe.work1} and collobarated with{" "}
              {aboutMe.work2}
            </p>
            <p>
              {aboutMe.followMe} {aboutMe.github}.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
