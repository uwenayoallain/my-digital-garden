export default function Blockquote(props) {
    return (
        <>
            {
                <div className={`relative border-l-4 dark:text-white border-skin-base pl-6 p-5 leading-7 rounded m-3 bg-skin-base dark:bg-gray-800 ${props.otherstyles}`} {...props}>
                    {
                        props.icon && <div className='flex justify-center items-center absolute text-white p-2 bg-skin-inverted rounded-full -top-3 -left-4'>{props.icon}</div>
                    }
                    {props.content && <p className=''>{props.content}</p>}
                    {props.children}
                </div>
            }
        </>
    )
}
