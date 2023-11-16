import * as React from "react";

const styles = {
  about: {
    paddingTop: "3em",
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}


const AboutPage: React.FC = () => {
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>About</b></div>
        <div style={styles.version}>React CRM Demo App 2.0.0</div>
        <div style={styles.desc}>
          <p>CRM Project by Harsh Vardhan Shukla - during internship @ MAssistCRM-Innthink pvt. ltd., supervision of Mr. Karan (Senior Developer - SQL)
           </p>
        </div>
      </div>
    );
  }


export default AboutPage;
