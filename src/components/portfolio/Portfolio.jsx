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
        desc: "AI Trip Planner …",
    },
    {
        id: 2,
        title: "QuickShow",
        img: QuickShowImg,
        link: "https://quickshow.vercel.app",
        desc: "QuickShow …",
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
