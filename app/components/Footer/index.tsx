import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { FooterContainer, MediaLink } from "./Footer.styles";

type SocialMedia = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const Footer = () => {
  const mediaLinks: SocialMedia[] = [
    {
      name: "Twitter",
      url: "https://twitter.com/sneyderdev",
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sneyderdev",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sneyderdev",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
    {
      name: "Mail",
      url: "mailto:hello@sneyder.dev",
      icon: <FontAwesomeIcon icon={faPaperPlane} />,
    },
  ];

  return (
    <FooterContainer>
      {mediaLinks.map((link, index) => (
        <MediaLink key={index} href={link.url} target="_blank" rel="noreferrer">
          {link.icon}
        </MediaLink>
      ))}
    </FooterContainer>
  );
};

export default Footer;
