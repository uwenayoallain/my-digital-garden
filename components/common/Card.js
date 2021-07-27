import { motion } from "framer-motion";

export default function Card(props) {
    const containerAnimations = {
        rest: {
            scale: 1,
        },
        hover: {
            scale: 1.09,
            rotate: [0, -1, 1, 0]
        },
        tap: {
            scale: 0.91,
        }
    }

    const iconAnimations = {
        rest: {
            scale: 1,
            x: 0,
        },
        hover: {
            rotate: [360, -360, 0],
            x: [-10, 0],
            duration: 1.5,
        },
        tap: {
            rotate: [360, -360, 0],
            x: 0,
            scale: 0.91,
        }
    }

    return (
        <motion.div className={`${props.otherstyles}`} initial="rest" whileHover="hover" whileTap="tap" animate="rest">
            {
                <motion.a className={`!no-underline block group cursor-pointer rounded-md p-5 m-3 bg-skin-inverted relative text-center`} {...props} variants={containerAnimations}>
                    {
                        props.cardtitle && <div className='text-3xl font-extrabold group-hover:text-white text-white/90 text-center capitalize'>{props.cardtitle}</div>
                    }
                    <motion.div className='absolute shadow bg-white p-2 rounded-full -top-2  group-hover:text-skin-base text-skin-base/80 -right-3' variants={iconAnimations} >{props.icon}</motion.div>
                    {props.content && <p className='text-white'>{props.content}</p>}
                    {props.children}
                </motion.a>
            }
        </motion.div>
    )
}
