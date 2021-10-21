import './card.css'

export default function card(props){
    return(
        <div className={props.type + " card"}>
            {props.children}
        </div>
    );
}