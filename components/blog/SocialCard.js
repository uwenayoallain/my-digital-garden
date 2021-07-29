import { motion } from "framer-motion";

export default function SocialCard({ props }) {
    const container = {
        hidden: { opacity: 0 },
        hover: {},
        visible: {
            opacity: 1, transition: {
                staggerChildren: 1,
            }
        },
    }
    const variant1 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "121%", "121%", "242%", "242%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant2 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "121%", "121%", "-121%", "-121%"],
            y: ["0%", "0%", "0%", "121%", "121%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }

    const variant3 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "-363%", "-363%", "-242%", "-242%"],
            y: ["0%", "0%", "0%", "0%", "0%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant4 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "0%", "-484%", "-484%", "-484%"],
            y: ["0%", "0%", "121%", "0%", "0%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant5 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "121%", "121%", "363%", "363%"],
            y: ["0%", "0%", "0%", "-121%", "-121%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant6 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "121%", "121%", "0%", "0%"],
            y: ["0%", "0%", "0%", "0%", "0%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant7 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "121%", "121%", "-242%", "-242%"],
            y: ["0%", "0%", "0%", "0%", "0%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    const variant8 = {
        hidden: {},
        hover: {
            backgroundColor: "rgba(255, 255, 255, 0.25)",
        },
        tap: {
            scale: 0.95,
        },
        visible: {
            x: ["0%", "-484%", "0%", "0%", "0%"],
            y: ["0%", "0%", "-121%", "0%", "0%"],
            transition: {
                duration: 5.5,
                repeat: 5,
                repeatDelay: 3,
                repeatType: "reverse",
                delay: 2,
            }
        },
    }
    return (
        <>
            <motion.div className="relative my-1 !text-black mx-auto w-full md:w-5/6 lg:w-3/5 rounded grid grid-cols-5 " {...props} initial="hidden" animate="visible" variants={container} whileHover="hover">
                <motion.a variants={variant1} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded"  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin"><path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path></svg>
                </motion.a>
                <motion.a variants={variant2} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M10,0 C4.4794,0 0,4.4794 0,10 C0,15.5206 4.4794,20 10,20 C15.50976,20 20,15.5206 20,10 C20,4.4794 15.50976,0 10,0 Z M16.6052,4.60954 C17.79826,6.0629 18.5141,7.91758 18.5358,9.92408 C18.2538,9.86984 15.43384,9.29502 12.5922,9.65292 C12.52712,9.51194 12.47288,9.36008 12.40782,9.20824 C12.23428,8.7961 12.03904,8.3731 11.84382,7.9718 C14.98916,6.69198 16.42082,4.84816 16.6052,4.60954 Z M10,1.475054 C12.1692,1.475054 14.15402,2.2885 15.6616,3.62256 C15.50976,3.83948 14.21908,5.564 11.18222,6.70282 C9.78308,4.13232 8.2321,2.0282 7.9935,1.70282 C8.6334,1.550976 9.30586,1.475054 10,1.475054 Z M6.3666,2.27766 C6.59436,2.58134 8.1128,4.69632 9.53362,7.21258 C5.5423,8.27548 2.01736,8.25383331 1.637744,8.25383331 C2.19088,5.60738 3.98048,3.40564 6.3666,2.27766 Z M1.453362,10.01084 C1.453362,9.92408 1.453362,9.83732 1.453362,9.75054 C1.822126,9.76138 5.9653,9.81562 10.22776,8.5358 C10.47722,9.01302 10.70498,9.50108 10.9219,9.98916 C10.81344,10.0217 10.69414,10.05424 10.58568,10.08676 C6.18222,11.5076 3.83948,15.39046 3.64426,15.71584 C2.2885,14.20824 1.453362,12.20174 1.453362,10.01084 Z M10,18.54664 C8.02604,18.54664 6.2039,17.87418 4.76138,16.7462 C4.91324,16.43168 6.6486,13.0911 11.4642,11.40998 C11.4859,11.39914 11.49674,11.39914 11.51844,11.38828 C12.72234,14.50108 13.21042,17.11496 13.34056,17.86334 C12.3102,18.30802 11.18222,18.54664 10,18.54664 Z M14.7614,17.08244 C14.67462,16.56182 14.2191,14.06724 13.10196,10.99784 C15.78092,10.57484 18.12364,11.26898 18.41648,11.3666 C18.04772,13.74186 16.68112,15.79176 14.7614,17.08244 Z"></path></svg>
                </motion.a >
                <motion.a variants={variant1} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -4 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path></svg>
                </motion.a>
                <motion.a variants={variant3} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -3 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M19.986 8.029a2.51 2.51 0 0 0-4.285-1.771c-1.404-.906-3.197-1.483-5.166-1.573a2.734 2.734 0 0 1 1.028-2.139 2.735 2.735 0 0 1 2.315-.539l.112.025c0 .028-.004.056-.004.084a2.095 2.095 0 1 0 .328-1.121L14.113.95a3.812 3.812 0 0 0-3.228.752 3.812 3.812 0 0 0-1.433 2.983c-1.97.09-3.762.667-5.165 1.572a2.51 2.51 0 1 0-2.94 3.994c-.061.31-.093.628-.093.952 0 3.606 3.912 6.53 8.74 6.53 4.826 0 8.739-2.924 8.739-6.53 0-.324-.032-.641-.093-.952a2.508 2.508 0 0 0 1.346-2.222zm-3.905-6.925a1.013 1.013 0 0 1 0 2.025 1.013 1.013 0 0 1 0-2.025zM1.083 8.03c0-.787.64-1.427 1.427-1.427.337 0 .646.118.89.314-.763.655-1.354 1.425-1.721 2.27a1.423 1.423 0 0 1-.596-1.157zm14.442 6.923c-1.465 1.095-3.43 1.698-5.532 1.698s-4.067-.603-5.531-1.698c-1.37-1.023-2.125-2.355-2.125-3.75 0-1.394.754-2.725 2.125-3.75C5.926 6.359 7.89 5.757 9.993 5.757c2.103 0 4.067.602 5.532 1.697 1.37 1.024 2.125 2.355 2.125 3.75 0 1.394-.755 2.726-2.125 3.75zm2.782-5.767c-.367-.845-.958-1.614-1.721-2.269.244-.196.554-.314.89-.314.787 0 1.427.64 1.427 1.427 0 .476-.235.898-.596 1.156z"></path><circle cx="6.801" cy="9.678" r="1.143"></circle><circle cx="13.185" cy="9.678" r="1.143"></circle><path d="M12.701 12.455a4.357 4.357 0 0 1-2.94 1.138 4.325 4.325 0 0 1-3.195-1.39.541.541 0 1 0-.793.738 5.47 5.47 0 0 0 3.988 1.735 5.437 5.437 0 0 0 3.67-1.421.541.541 0 1 0-.73-.8z"></path></svg>
                </motion.a>
                <motion.a variants={variant4} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path><path d="M12.746 14.068v-2.636h.832v3.511H6.065v-3.511h.832v2.636z"></path><path d="M7.816 11.182l4.087.898.173-.864-4.087-.898-.173.864zm.54-2.046l3.785 1.853.345-.796L8.703 8.33l-.346.806zm1.05-1.954l3.21 2.807.53-.67-3.21-2.808-.53.67zm2.075-2.08l-.67.523 2.486 3.523.67-.523-2.486-3.523zm-3.751 8.08h4.173v-.875H7.73v.875z"></path></svg>
                </motion.a>
                <motion.a variants={variant5} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -8 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M0 0h20v6.857H10V8H5.556V6.857H0V0zm1.111 5.714h2.222V2.286h1.111v3.428h1.112V1.143H1.11v4.571zm5.556-4.571v5.714h2.222V5.714h2.222V1.143H6.667zm5.555 0v4.571h2.222V2.286h1.112v3.428h1.11V2.286h1.112v3.428h1.11V1.143h-6.666z"></path><path d="M10 4.7H9V2.2h1z"></path></svg>
                </motion.a>
                <motion.a variants={variant1} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
                    </svg>
                </motion.a>
                <motion.a variants={variant6} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-3 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M15.45,0 C16.5684694,0 17.4812026,0.901320283 17.4997134,2.02517151 L17.5,2.06 L17.5,20 L15.35,18.1 L14.14,16.98 L12.86,15.79 L13.39,17.64 L2.05,17.64 C0.931530612,17.64 0.0187973761,16.7386797 0.000286625896,15.6148285 L0,15.58 L0,2.06 C0,0.931632653 0.901320283,0.0187984173 2.01547452,0.00028663652 L2.05,0 L15.45,0 Z M7.32,4.78 L7.22,4.6599169 L7.1630624,4.66059412 C6.890192,4.66871965 5.6772,4.7596 4.41,5.71 L4.36156128,5.802081 C4.110624,6.291581 2.97,8.6742 2.97,11.54 L2.99079837,11.5731719 C3.132297,11.789822 4.0089,12.9963 6.02,13.06 L6.31452473,12.6987136 C6.43107266,12.5548097 6.56647059,12.3864706 6.69,12.23 C5.5242617,11.8811964 5.02413637,11.1785226 4.94987673,11.0655003 L4.94,11.05 L4.98113281,11.0774219 C5.02625,11.1067188 5.1075,11.1575 5.22,11.22 C5.23,11.23 5.24,11.24 5.26,11.25 C5.29,11.27 5.32,11.28 5.35,11.3 C5.6,11.44 5.85,11.55 6.08,11.64 C6.49,11.8 6.98,11.96 7.55,12.07 C8.27857143,12.206 9.12982041,12.2570694 10.0579114,12.0948686 L10.14,12.08 C10.61,12 11.09,11.86 11.59,11.65 C11.94,11.52 12.33,11.33 12.74,11.06 L12.7236045,11.0849198 C12.6278835,11.2248395 12.1044828,11.9182759 10.93,12.25 L11.0953826,12.4572606 C11.347936,12.770868 11.59,13.06 11.59,13.06 C13.8,12.99 14.65,11.54 14.65,11.54 C14.65,8.32 13.21,5.71 13.21,5.71 C11.9716,4.7812 10.784972,4.67329454 10.4769888,4.66128549 L10.4,4.6599169 L10.26,4.82 C11.7675403,5.28112997 12.5594623,5.92313048 12.7194499,6.06258405 L12.75,6.09 C11.71,5.52 10.69,5.24 9.74,5.13 C9.02,5.05 8.33,5.07 7.72,5.15 C7.66,5.15 7.61,5.16 7.55,5.17 L7.493785,5.17528 C7.11445,5.21385 6.2965,5.3535 5.28,5.8 L5.13470143,5.86775227 C4.9530442,5.9537305 4.82068394,6.02127593 4.74962341,6.05838585 L4.69,6.09 C4.69,6.09 5.503483,5.315721 7.26629086,4.79567994 L7.32,4.78 Z M6.94,8.39 C7.51,8.39 7.97,8.89 7.96,9.5 C7.96,10.11 7.51,10.61 6.94,10.61 C6.38,10.61 5.92,10.11 5.92,9.5 C5.92,8.89 6.37,8.39 6.94,8.39 Z M10.59,8.39 C11.16,8.39 11.61,8.89 11.61,9.5 C11.61,10.11 11.16,10.61 10.59,10.61 C10.03,10.61 9.57,10.11 9.57,9.5 C9.57,8.89 10.02,8.39 10.59,8.39 Z"></path></svg>
                </motion.a>
                <motion.a variants={variant7} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path></svg>
                </motion.a>
                <motion.a variants={variant8} whileTap="tap" whileHover="hover" intial="hidden" animate="visible" href="https://www.github.com/uwenayoallain" className="m-2 flex p-6 justify-center items-center  bg-white/10 rounded" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M3.683 16.418C1.436 14.722 0 12.14 0 9.248 0 4.14 4.477 0 10 0s10 4.14 10 9.248c0 5.107-4.477 9.248-10 9.248a10.77 10.77 0 0 1-2.96-.412l-3.357 1.891v-3.557zm5.25-9.703l-5.394 5.66 4.908-2.67 2.565 2.67 5.362-5.66-4.853 2.622-2.589-2.622z"></path></svg>
                </motion.a>
                <motion.div className="absolute -z-index inset-0 bg-gradient-to-br from-yellow-500 via-yellow-700 to-purple-800 rounded-full"></motion.div>
            </motion.div>
        </>
    )
}
