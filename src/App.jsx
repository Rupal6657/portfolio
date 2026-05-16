import { motion } from "framer-motion";import profile from "./assets/profile.jpg";import { Typewriter } from "react-simple-typewriter"; import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa"; function App() { return ( <motion.div id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{
  background: "linear-gradient(to right, #0f172a, #111827, #1e1b4b)", color: "white", minHeight: "100vh", padding: "50px", fontFamily: "Arial",scrollBehavior: "smooth", }} ><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px", }} > <h2 style={{ color: "#a855f7", fontSize: "30px", }} >  </h2> <div style={{ display: "flex", gap: "25px", fontSize: "18px", }} > <p>Home</p> <a
  href="#about"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  About
</a> <a
  href="#skills"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Skills
</a> <a
  href="#projects"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Projects
</a> <a
  href="#contact"
  style={{
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
>
  Contact
</a> </div> </div><img
  src={profile}
  alt="Profile"
  style={{
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #a855f7",
    marginBottom: "30px",
  }}
/> <h1
  style={{
    fontSize: "60px",
    color: "#a855f7",
    textShadow: "0px 0px 20px #a855f7",
  }}
> Rupal Choudhary </h1> <p style={{ fontSize: "24px", marginTop: "20px", }} > <Typewriter words={[ "Software Engineer","Java Developer", "Frontend Developer", "AI Enthusiast", ]} loop={true} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1000} /> </p> <motion.button whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px #a855f7", }} style={{ marginTop: "30px", padding: "12px 25px", backgroundColor: "#9333ea", color: "white", border: "none", borderRadius: "10px", fontSize: "18px", cursor: "pointer", }} > View Projects </motion.button><a href="/resume.docx" download>
  <motion.button whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px #a855f7", }} style={{ marginTop: "20px", marginLeft: "20px", padding: "12px 25px", backgroundColor: "#1e293b", color: "white", border: "2px solid #a855f7", borderRadius: "10px", fontSize: "18px", cursor: "pointer", }} > Download Resume </motion.button>
</a><div id="about" style={{ marginTop: "80px", backgroundColor: "#1e293b", padding: "30px", borderRadius: "15px", }} > <h2 style={{ color: "#a855f7", fontSize: "35px", }} > About Me </h2> <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.8", }} > Aspiring Software Engineer focused on Java Development, Full Stack Web Development, and Artificial Intelligence. </p> </div><div id="skills" style={{ marginTop: "80px", }} > <h2 style={{ color: "#a855f7", fontSize: "35px", marginBottom: "30px", }} > Skills </h2> <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", }} > {[ "Java", "Python", "React.js", "HTML", "CSS", "JavaScript", "SQL", "GitHub", ].map((skill) => ( <motion.div key={skill} whileHover={{ scale: 1.1 }} style={{ backgroundColor: "#1e293b", padding: "15px 25px", borderRadius: "12px", fontSize: "18px", }} > {skill} </motion.div> ))} </div> </div><div id="projects" style={{ marginTop: "80px", }} > <h2 style={{ color: "#a855f7", fontSize: "35px", marginBottom: "30px", }} > Projects </h2> <motion.div whileHover={{ scale: 1.03 }} style={{ backgroundColor: "#1e293b", padding: "30px", borderRadius: "15px", marginBottom: "20px", }} > <h3 style={{ fontSize: "28px", }} > SmartCare – Drug Interaction Detector </h3> <p style={{ marginTop: "15px", lineHeight: "1.8", fontSize: "18px", }} > AI-powered application using Machine Learning and NLP. </p> <div
  style={{
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  }}
>
  <a
    href="https://github.com/Rupal6657"
    target="_blank"
    rel="noreferrer"
  >
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#9333ea",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      GitHub Code
    </button>
  </a>

  <button
    style={{
      padding: "10px 20px",
      backgroundColor: "#1e293b",
      color: "white",
      border: "1px solid #a855f7",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Live Demo
  </button>
</div></motion.div> <motion.div whileHover={{ scale: 1.03 }} style={{ backgroundColor: "#1e293b", padding: "30px", borderRadius: "15px", }} > <h3 style={{ fontSize: "28px", }} > Breast Cancer Detection Using ML </h3> <p style={{ marginTop: "15px", lineHeight: "1.8", fontSize: "18px", }} > Machine learning project using CNN algorithms and image processing. </p> </motion.div> </div>
<div
  id="contact"
  style={{
    marginTop: "80px",
    marginBottom: "50px",
  }}
>
  <h2
    style={{
      color: "#a855f7",
      fontSize: "35px",
      marginBottom: "30px",
    }}
  >
    Contact Me
  </h2>

  <div
    style={{
      backgroundColor: "#1e293b",
      padding: "30px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >

    <a
      href="mailto:rupalchoudhary510@gmail.com"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaEnvelope color="#a855f7" />
      rupalchoudhary510@gmail.com
    </a>

    <a
      href="https://www.linkedin.com/in/rupal-choudhary-61b5b731b/"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaLinkedin color="#a855f7" />
      LinkedIn Profile
    </a>

    <a
      href="https://github.com/Rupal6657"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <FaGithub color="#a855f7" />
      GitHub Profile
    </a>

  </div>
</div><div
  style={{
    textAlign: "center",
    marginTop: "100px",
    padding: "20px",
    color: "#94a3b8",
    borderTop: "1px solid #334155",
  }}
>
  © 2026 Rupal Choudhary | Built with React.js
</div>
</motion.div>
  );
}

export default App;
