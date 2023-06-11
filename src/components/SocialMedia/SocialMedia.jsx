import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import css from "./SocialMedia.module.css";
const SocialMedia = () => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <span className={css.details}>
          <span>Like us on facebook</span>
          <span>50,095</span>
        </span>
        <div>
          <FiFacebook size={35} color="#1877F2" />
        </div>
      </div>
      <div className={css.item}>
        <span className={css.details}>
          <span>Follow us on twitter</span>
          <span>48,565</span>
        </span>
        <div>
          <TfiTwitter size={35} color="#1D9BF0" />
        </div>
      </div>
      <div className={css.item}>
        <span className={css.details}>
          <span>Follow us on instagram</span>
          <span>52,085</span>
        </span>
        <div>
          <RxInstagramLogo size={35} color="#BD328E" />
        </div>
      </div>
      <div className={css.item}>
        <span className={css.details}>
          <span>Follow us on linkedin</span>
          <span>69,095</span>
        </span>
        <div>
          <SlSocialLinkedin size={35} color="#0A66C2" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
