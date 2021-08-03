import { motion } from "framer-motion";

export default function OuterLink(props) {
    const containerAnimations = {
        rest: {
            scale: 1,
        },
        hover: {
            scale: 1,
        },
    }

    const iconAnimations = {
        rest: {
            scale: 1,
            x: 0,
        },
        hover: {

            x: [null, 15],
            y: [null, -15],
            transition: {
                duration: 0.3,
            }
        },
        tap: {
            x: [null, 10, 0, -10, 0, 10, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
            }
        }
    }

    return (
        <motion.div className={`w-max ${props.otherstyles}`} initial="rest" whileHover="hover" whileTap="tap" animate="rest">
            {
                <motion.a className={`!no-underline py-4 px-8 flex justify-center items-center cursor-pointer w-max rounded-full bg-gray-900 dark:text-gray-900 text-gray-100 dark:bg-white hover:ring-4 hover:ring-gray-900 ring-0 transition dark:hover:ring-gray-50  border-4  border-transparent bg-clip-padding mt-10`} {...props} variants={containerAnimations}>
                    <span className="text-white m-2 dark:text-gray-800">{props.title}</span>
                    <motion.div className='inline-block m-3 text-white dark:text-gray-800' variants={iconAnimations} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 -rotate-45" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.div>
                </motion.a>
            }
        </motion.div>
    )
}
