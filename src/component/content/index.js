import './content.css'

function Content(props) {

    return(
        <div>            
            <div className="main">
                {props.children}
            </div>
        </div>        
    );
}

export default Content;