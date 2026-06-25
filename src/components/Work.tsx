import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Yahan apne 6 projects ki details fill karein
const projects = [
  {
    title: "Glow & Spa Salon",
    category: "WordPress Development",
    tools: "WordPress, CSS, Elementor",
    link: "https://dev-glowwwspasalon.pantheonsite.io/",
    image: "/images/glowandspa.PNG"
  },

  
{
  title: "Crockery Items Store",
  category: "Shopify Development",
  tools: "Shopify, Custom Liquid, CSS, JS",
  link: "https://darshna-liquid-store.myshopify.com/collections",
    image: "/images/glam.jpg"
},
  
  // Isi tarah baki 4 projects ki details yahan likhein...
  { title: "Home Services", category: "Full-Stack PHP", tools: "PHP, MySQL, HTML, CSS, JS", link: "https://658858ce3098fa4ab4d5c042--bespoke-alfajores-575d79.netlify.app/home", image: "/images/home.PNG" },
  { title: "Beauty With Grace Salon", category: "Web Development", tools: "HTML, CSS, JavaScript", link: "https://beauty-with-grace-salon.vercel.app", image: "/images/bg.PNG" },
  { title: "Spicy Chicken Noodles Campaign", category: "AI Food Cinematography", tools: "AI Prompt Engineering, Color Grading", link: "https://www.instagram.com/web.ads.creator?igsh=MTh5MGdicW8xb2R6MA%3D%3D", image: "/images/maggi.png" },
  { title: "Pizza Burger Campaign", category: "AI Food Cinematography", tools: "AI Prompt Engineering, Visual Storytelling", link: "https://www.instagram.com/web.ads.creator?igsh=MTh5MGdicW8xb2R6MA%3D%3D", image: "/images/pizza.png" },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
              <WorkImage alt={project.title} image={project.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
