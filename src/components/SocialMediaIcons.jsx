import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:jusity-start my-10 gap-7">
      <a
        className="hover: opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/peleg-mazuz-253282217"
        target="_blank"
        rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} color="white" />
      </a>
    
      <a
        className="hover: opacity-50 transition duration-500"
        href="https://github.com/pelegsch666"
        target="_blank"
        rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} color="white" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
