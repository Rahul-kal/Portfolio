    import { motion } from "framer-motion";
    import { useState } from "react";

    const Test = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i) => ({
        opacity: 1,
        x: 100,
        transition: { delay: i * 0.3 },
        }),
        hidden: { opacity: 0 },
    };

    const items = ["item1", "item2", "item3", "item4"];

    return (
        <div className="course">
        <button onClick={() => setOpen(!open)}>Toggle</button>
        <motion.ul>
            {items.map((item, i) => (
            <motion.li
                key={item}
                custom={i}
                variants={variants}
                initial="hidden"
                animate={open ? "visible" : "hidden"}
                style={{ listStyle: "none", margin: "10px 0" }}
            >
                {item}
            </motion.li>
            ))}
        </motion.ul>
        </div>
    );
    };

    export default Test;
