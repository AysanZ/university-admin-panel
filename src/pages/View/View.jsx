import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsCalendarDateFill,
} from "react-icons/bs";
import { MdEmail, MdLanguage, MdLocationOn } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import css from "./View.module.css";

const View = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.header}>
          <img src="./avatar-03.jpg" alt="prof" />
          <span>
            <span>Bruce Willis</span>
            <span>Computer Science</span>
          </span>
        </div>
        <div className={css.main}>
          <div className={css.details}>
            <span className={css.head}>Personal Details :</span>
            <div className={css.item}>
              <BsFillPersonFill size={25} />
              <span>
                <span>Name</span>
                <span>Bruce Willis</span>
              </span>
            </div>
            <div className={css.item}>
              <FaBuilding size={25} />
              <span>
                <span>Department</span>
                <span>Computer Science</span>
              </span>
            </div>
            <div className={css.item}>
              <BsFillTelephoneFill size={25} />
              <span>
                <span>Mobile</span>
                <span>+91 89657 48512</span>
              </span>
            </div>
            <div className={css.item}>
              <MdEmail size={25} />
              <span>
                <span>Email</span>
                <span>daisy@gmail.com</span>
              </span>
            </div>
            <div className={css.item}>
              <BsFillPersonFill size={25} />
              <span>
                <span>Gender</span>
                <span>Male</span>
              </span>
            </div>
            <div className={css.item}>
              <BsCalendarDateFill size={25} />
              <span>
                <span>Date of Birth</span>
                <span>22 Apr 1995</span>
              </span>
            </div>
            <div className={css.item}>
              <MdLanguage size={25} />
              <span>
                <span>Language</span>
                <span>English, French, Bangla</span>
              </span>
            </div>
            <div className={css.item}>
              <MdLocationOn size={25} />
              <span>
                <span>Address</span>
                <span>480, Estern Avenue, New York</span>
              </span>
            </div>
          </div>

          <div className={css.about}>
            <span className={css.head}>About Me</span>
            <p>
              <p>Hello I am Daisy Parks</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              <p>Education</p>
              <p>2008 - 2009</p> Secondary Schooling at xyz school of secondary
              education, Mumbai. <p>2011 - 2012</p> Higher Secondary Schooling
              at xyz school of higher secondary education, Mumbai.{" "}
              <p>2012 - 2015</p> Bachelor of Science at Abc College of Art and
              Science, Chennai. <p>2015 - 2017</p>
              Master of Science at Cdm College of Engineering and Technology,
              Pune.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
