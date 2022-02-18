import { Container } from "./container";
import { ContactList } from "./contact_list";
import { SocialMediaList } from "./social_media_list";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footerContent">
          <ContactList />
          <SocialMediaList />
        </div>
      </Container>
    </div>
  );
};
