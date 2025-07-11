    import { useRef } from "react";
    import "./Portfolio.scss";
    import { motion, useScroll, useSpring, useTransform } from "framer-motion";
    import TripMateImg   from "../assets/TripMate.png";
    import QuickShowImg  from "../assets/QuickShow1.png";

    const items = [
        {
        id: 1,
        title: "AI‑Trip‑Planner",
        img: TripMateImg,          // ← use the imported variable
        link: "https://your-tripmate-demo-link.com",
        desc: "AI Trip Planner is a full-stack travel planning web app that leverages the power of Gemini AI to generate personalized travel itineraries. Built with React.js, TailwindCSS v4, and Firebase, the app allows users to input basic trip details and receive AI-generated plans, complete with destinations, activities, and suggestions. It features Google Authentication, cloud-based data storage via Firestore, and dynamic form handling. Users can view, edit, and save their trip history, and location details are enriched using the Google Places and Photos API. The project also includes responsive design for a smooth user experience and is deployed using Vite and hosted on the web. A mobile version of the app is built using React Native, supporting both Android and iOS platforms. This project showcases full-stack development, AI integration, and real-world API usage.",
    },
    {
        id: 2,
        title: "QuickShow",
        img: QuickShowImg,
        link: "https://quickshow.vercel.app",
        desc: "As a full-stack web developer, I built and deployed QuickShow, a complete Movie Ticket Booking website using the MERN Stack. This app allows users to sign up via Clerk Auth, explore movies, and book seats with real-time availability. I integrated multi-session support to let users manage multiple profiles seamlessly. Admins can manage listings and bookings through a powerful Admin Dashboard. Using Inngest, I implemented background jobs to send email confirmations, reminders, and handle temporary seat reservations on failed payments, releasing them after 10 minutes. This project showcases my skills in building secure, scalable, and interactive applications with a focus on user experience and reliability.",
    }
    ];

    const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt={`Preview of ${item.title}`} />
            </div>
            <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
                </a>
            </motion.div>
            </div>
        </div>
        </section>
    );
    };

    const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
        </div>
    );
    };

    export default Portfolio;
