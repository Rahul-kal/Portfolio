    import "./Hero.scss";
    import { motion } from "framer-motion";
    import resume from "../assets/Resume1.pdf";

    const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
        duration: 1,
        staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
        duration: 2,
        repeat: Infinity,
        },
    },
    };
    const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
        },
    },
    };

    const Hero = () => {
    return (
        <div className="hero">
        <div className="wrapper">
            <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
            <motion.h2 variants={textVariants} >Rahul Kaliraman</motion.h2>
            <motion.h1 variants={textVariants}>
                I am a Full Stack Developer.

            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
            <motion.button className="btn primary" variants={textVariants} onClick={"https://drive.google.com/uc?export=download&id=1z2n7Pkc_r1P-oEraDUFv6Tg3tuqMYKn5"}>
            <motion.a
            href={resume}
            download="Rahul_Kaliraman_Resume"
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
            variants={textVariants}
            >
            Download CV
            </motion.a>

            </motion.button>
            <motion.button className="btn outline glow-text" variants={textVariants}>
                Hire Me
            </motion.button>
            </motion.div>

            <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/scroll.png"
                alt=""
            />
            </motion.div>
        </div>
        <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
        >
            Writer Content Creator Influencer
        </motion.div>
        <div className="imageContainer">
            <img src="/IMG_4016.HEIC" alt="" />
        </div>
        </div>
    );
    };

    export default Hero;
