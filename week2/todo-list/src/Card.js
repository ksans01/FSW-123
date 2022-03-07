
function Card (props){

    return(
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.desc}</h3>
        </>
    )
}

export default Card;