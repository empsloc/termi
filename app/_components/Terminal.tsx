"use client";

import dynamic from "next/dynamic";

// Dynamically import ReactTerminal (disable SSR to fix `window` issue)
const ReactTerminal = dynamic(
  () => import("react-terminal").then((mod) => mod.ReactTerminal),
  { ssr: false }
);

function Terminal() {
  const commands = {
    // 👋 About
     matrix: () => {
      let output = "";
      const chars = "01";
      for (let i = 0; i < 50; i++) {
        output +=
          Array.from({ length: 40 })
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("") + "\n";
      }
      return (
        <pre style={{ color: "#00ff00", fontSize: "12px", lineHeight: "14px" }}>
          {output}
        </pre>
      );
    },
    about: () => (
      <div>
        <p>Hi 👋, I'm <b>Atharva Bokade</b></p>
        <p>💻 Full-Stack Developer | Software Engineer | Problem Solver</p>
        <p>⚡ Passionate about scalable web apps, backend systems, and problem solving</p>
        <p>🌐 Portfolio: <a href="https://atharva-bokade.vercel.app" target="_blank">atharva-bokade.vercel.app</a></p>
      </div>
    ),

    // 📚 Education
    education: () =>
      "🎓 Pursuing B.Tech in Computer Engineering at PCCOE, Pune.",

    // 🛠 Tech Stack
    stack: () => (
      <div>
        <p>💻 Languages: C, C++, Java, JavaScript, TypeScript, Dart, SQL</p>
        <p>🛠 Frameworks: React, Next.js, Tailwind, Node.js, Express, Flutter</p>
        <p>🗄️ Databases/ORMs: MySQL, MongoDB, Firebase, Prisma, Drizzle, Convex</p>
        <p>⚙️ Tools: Git, GitHub, VS Code, Android Studio, Jupyter</p>
      </div>
    ),

    // 🚀 Projects
    projects: () => (
      <div>
        <ul>
          <li>🚀 <a href="https://github.com/empsloc/" target="_blank">AIIDE</a> – Full-stack AI IDE with live preview</li>
          <li>🖼️ <a href="https://github.com/empsloc/WireframeToCode" target="_blank">WireframeToCode</a> – Convert wireframes → React apps</li>
          <li>📧 <a href="https://github.com/empsloc/ai-email-template" target="_blank">EmailTemp</a> – AI email template builder</li>
          <li>🎨 <a href="https://github.com/empsloc/ai-logo" target="_blank">LogoGen</a> – AI logo generator</li>
          <li>✍️ <a href="https://github.com/empsloc/ai-content-gen" target="_blank">ContentAssist</a> – AI blog & SEO generator</li>
          <li>📝 <a href="https://github.com/empsloc/ai-form" target="_blank">AutoForm</a> – Dynamic forms from prompts</li>
        </ul>
      </div>
    ),

    // 🏆 Achievements
    achievements: () => (
      <div>
        <p>🥇 1st Prize – PCCOE Techfest Website Dev 2022</p>
        <p>🥇 Winner – HackMatrix Hackathon (ARTIMAS 2023)</p>
        <p>⭐ 5-Star Problem Solving – HackerRank</p>
        <p>🔹 250+ DSA problems solved</p>
      </div>
    ),

    // 📊 GitHub Stats
    stats: () => (
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=empsloc&show_icons=true&theme=radical"
          alt="GitHub Stats"
          height="150"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=empsloc&layout=compact&theme=radical"
          alt="Top Languages"
          height="150"
        />
      </div>
    ),

    // 🌐 Socials
    contact: () => (
      <div>
        <p>📧 <a href="mailto:atharva0bokade@gmail.com">Email</a></p>
        <p>💼 <a href="https://www.linkedin.com/in/atharva-bokade-249871226/" target="_blank">LinkedIn</a></p>
        <p>🌎 <a href="https://atharva-portfolio.vercel.app" target="_blank">Portfolio</a></p>
        <p>🐙 <a href="https://github.com/empsloc" target="_blank">GitHub</a></p>
      </div>
    ),

    // 🆘 Help
    help: () => (
      <div>
        <p>Available commands:</p>
        <ul>
          <li><b>about</b> – About me</li>
          <li><b>education</b> – My education</li>
          <li><b>stack</b> – Tech stack</li>
          <li><b>projects</b> – Featured projects</li>
          <li><b>achievements</b> – My achievements</li>
          <li><b>stats</b> – GitHub stats</li>
          <li><b>contact</b> – Connect with me</li>
          <li><b>clear</b> – Clear the terminal</li>
        </ul>
      </div>
    ),
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",   // horizontally center
        alignItems: "center",       // vertically center
        height: "100vh",            // full screen height
        width: "100%",
             // optional background
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "600px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <ReactTerminal
          commands={commands}
          welcomeMessage={
            "👋 Welcome to Atharva's Portfolio Terminal!\n\nType 'help' to see available commands."
          }
          prompt="atharva@bokade:~$"
          theme="light"
        />
      </div>
    </div>
  );
}

export default Terminal;
