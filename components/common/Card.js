export default function Card(props) {
    return (
        <>
            {
                props.href ?
                    <a className={`block group cursor-pointer border border-skin-base/90 hover:border-skin-base border-r-2 rounded-md p-5 m-3 bg-skin-base relative text-center ${props.otherstyles}`} {...props}>
                        {
                            props.cardtitle && <div className='text-3xl font-extrabold group-hover:text-skin-base text-skin-base/90 text-center capitalize'>{props.cardtitle}</div>
                        }
                        {
                            props.icon && <div className='absolute shadow bg-skin-inverted p-2 rounded-full -top-2  group-hover:text-white text-white/80 -right-3'>{props.icon}</div>
                        }
                        {props.content && <p className='text-skin-base'>{props.content}</p>}
                        {props.children}
                    </a> :
                    <div className={`block group cursor-pointer border border-skin-base/90 hover:border-skin-base border-r-2 rounded-md p-5 m-3 bg-skin-base relative text-center ${props.otherstyles}`} {...props}>
                        {
                            props.cardtitle && <div className='text-3xl font-extrabold group-hover:text-skin-base text-skin-base/90 text-center capitalize'>{props.cardtitle}</div>
                        }
                        {
                            props.icon && <div className='absolute shadow bg-skin-inverted p-2 rounded-full -top-2  group-hover:text-white text-white/80 -right-3'>{props.icon}</div>
                        }
                        {props.content && <p className='text-skin-base'>{props.content}</p>}
                        {props.children}
                    </div>
            }
        </>
    )
}
