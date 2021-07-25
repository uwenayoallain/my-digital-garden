import { motion } from "framer-motion"
export default function Container(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}>
            {props.children}
        </motion.div>
    )
}
