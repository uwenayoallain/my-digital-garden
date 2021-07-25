
export default function Looper(props) {
    const styles = "px-5 py-2.5 capitalize text-skin-base hover:bg-skin-base m-3 leading-8 rounded"
    return (
        <>
            <div className={`${props.otherstyles}`} {...props}>
                {
                    props.elements.map((element, key) =>
                    (
                        <div key={key}>
                            {
                                Array.isArray(element) ? <a target="_blank" className={`!no-underline !text-skin-base ${styles}`} href={element[1]}>{element[0]}</a> : <span className={styles}>{element}</span>
                            }
                        </div>
                    )
                    )
                }
            </div>
        </>
    )
}
