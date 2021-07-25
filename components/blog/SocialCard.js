export default function SocialCard({ children }) {
    return (
        <>
            <div className="my-2 mx-auto w-3/5  p-4 text-white bg-skin-inverted rounded">
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                {children}
            </div>
            <div className="my-2 mx-auto w-3/5  p-4 text-white bg-skin-inverted rounded">
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                <span className="m-3 px-6 py-3 bg-white/30 text-black rounded backdrop-filter backdrop-blur-lg">
                </span>
                {children}
            </div>
        </>
    )
}
