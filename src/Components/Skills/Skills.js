import React from "react";
import styles from "./Skills.module.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.marquee1}>
        <Marquee gradient={false} speed={50}>
          
          {/* languages */}
          <img src="./skills/python.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/c.png" alt="" />
          <img src="./skills/sharp.png" alt="" />
          <img src="./skills/ts.png" alt="" />
          <img src="./skills/Php4.png" alt="" />
          <img src="./skills/Arduino.png" alt="" />

          {/* web  */}
          <img src="./skills/react.png" alt="" />
          <img src="./skills/nodejs.png" alt="" />
          <img src="./skills/express.png" alt="" />
          <img src="./skills/css.png" alt="" />
          <img src="./skills/html.png" alt="" />
          <img src="./skills/bootstrap.png" alt="" />
          <img src="./skills/sass.png" alt="" />
          
          {/* mobile */}
          <img src="./skills/flutter.png" alt="" />
          <img src="./skills/native.png" alt="" />

          {/* backend */}
          <img src="./skills/postgres.png" alt="" />
          <img src="./skills/mysql.png" alt="" />
          <img src="./skills/mongodb.png" alt="" />
          <img src="./skills/postman.png" alt="" />
          <img src="./skills/firebase.png" alt="" />

          {/* other */}
          <img src="./skills/git.png" alt="" />
          <img src="./skills/heroku.png" alt="" />
          <img src="./skills/figma.png" alt="" />
        </Marquee>
      </div>

      <div className={styles.marquee2}>
        <Marquee direction={"right"} gradient={false} speed={50}>
          <img src="./skills/python.png" alt="" />
          <img src="./skills/js.png" alt="" />
          <img src="./skills/c.png" alt="" />
          <img src="./skills/sharp.png" alt="" />
          <img src="./skills/ts.png" alt="" />
          <img src="./skills/Php4.png" alt="" />
          <img src="./skills/Arduino.png" alt="" />
          
          <img src="./skills/react.png" alt="" />
          <img src="./skills/nodejs.png" alt="" />
          <img src="./skills/express.png" alt="" />

          <img src="./skills/css.png" alt="" />
          <img src="./skills/html.png" alt="" />        
          <img src="./skills/flutter.png" alt="" />
          <img src="./skills/native.png" alt="" />
        </Marquee>
      </div>
      <div className={styles.marquee3}>
        <Marquee gradient={false} speed={45}>
          <img src="./skills/postgres.png" alt="" />
          <img src="./skills/mysql.png" alt="" />
          <img src="./skills/mongodb.png" alt="" />
          <img src="./skills/firebase.png" alt="" />
          
          <img src="./skills/git.png" alt="" />
          <img src="./skills/postman.png" alt="" />
          <img src="./skills/heroku.png" alt="" />
          <img src="./skills/bootstrap.png" alt="" />
          <img src="./skills/sass.png" alt="" />
          <img src="./skills/figma.png" alt="" />
          <img src="./skills/excel.png" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
