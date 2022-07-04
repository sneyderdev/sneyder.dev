import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import { FooterContainer, SocialContainer, SocialLink } from "./Footer.styles";

interface SocialMedia {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const Footer = () => {
  const socialLinks: SocialMedia[] = [
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
      icon: <FontAwesomeIcon icon={faAt} />,
    },
  ];

  return (
    <FooterContainer>
      <p>Get in touch 👇🏻</p>
      <SocialContainer>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </SocialLink>
        ))}
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
