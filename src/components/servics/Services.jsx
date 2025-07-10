    import { useRef } from "react";
    import "./Services.scss";
    import { motion, useInView } from "framer-motion";

    const variants = {
    initial: {
        opacity: 0,
        y: 50,
        scale: 0.95,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
        },
    },
    };

    const servicesList = [
    {
        title: "Frontend Development",
        description:
        "I build responsive, performant, and accessible UIs using React, TypeScript, Tailwind, and modern JS frameworks.",
    },
    {
        title: "Backend APIs & Auth",
        description:
        "I design and implement secure, scalable REST/GraphQL APIs using Node.js, Express, MongoDB, and authentication with Clerk/Auth0.",
    },
    {
        title: "UI/UX Prototyping",
        description:
        "Figma to functional interface. I design smooth user journeys & intuitive layouts that engage users.",
    },
    {
        title: "Deployment & Optimization",
        description:
        "CI/CD, Vercel/Netlify, performance tuning, SEO best practices — I make apps launch-ready and lightning-fast.",
    },
    ];

    const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
        className="services"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        ref={ref}
        >
        <motion.div className="textContainer" variants={variants}>
            <p>
            Helping modern businesses grow through <br />
            clean code and purposeful design.
            </p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
            <img src="/people.webp" alt="Teamwork" />
            <h1>
                <motion.b whileHover={{ color: "orange" }}>Crafting</motion.b> Digital Experiences
            </h1>
            </div>
            <div className="title">
            <h1>
                <motion.b whileHover={{ color: "orange" }}>That Grow</motion.b> Your Business
            </h1>
            <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                LET’S WORK TOGETHER
            </button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
            {servicesList.map((service, i) => (
            <motion.div
                key={i}
                className="box"
                whileHover={{
                background: "rgba(255, 255, 255, 0.07)",
                scale: 1.02,
                transition: { duration: 0.3 },
                }}
            >
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button>Learn More</button>
            </motion.div>
            ))}
        </motion.div>
        </motion.div>
    );
    };

    export default Services;
