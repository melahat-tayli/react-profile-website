import { GithubIcon, LinkedinIcon } from "./address";

export const SocialMediaList = () => {
  return (
    <ul className="socialMediaList">
      <li>
        <a href="https://github.com/melahat-tayli">
          <GithubIcon />
          melahat-tayli
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/melahat-tayli-2b622129/">
          <LinkedinIcon />
          Melahat(Sahin)Tayli
        </a>
      </li>
    </ul>
  );
};
