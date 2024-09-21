import { FaLinkedin } from "react-icons/fa";
import {FaInstagram, FaXTwitter} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/company/giphy">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/giphy/">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/giphy">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;