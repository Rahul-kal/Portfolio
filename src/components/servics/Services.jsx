    import { useRef } from "react";
    import "./services.scss";
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
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        },
    },
    };

    const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
        className="services"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}

        ref={ref}
        >
        <motion.div className="textContainer" variants={variants}>
            <p>
            I focus on helping your brand grow
            <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
            </div>
            <div className="title">
            <h1>
                <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
            </h1>
            <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            {[...Array(4)].map((_, i) => (
            <motion.div
                key={i}
                className="box"
                whileHover={{ background: "lightgray", color: "black" }}
            >
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                animi! Ad nam pariatur assumenda quae mollitia libero repellat
                explicabo maiores?
                </p>
                <button>Go</button>
            </motion.div>
            ))}
        </motion.div>
        </motion.div>
    );
    };

    export default Services;
