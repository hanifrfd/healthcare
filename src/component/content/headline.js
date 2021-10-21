import './headline.css'

function Headline(props){
    return(
        <div>
            <div className="headline">
                <h4 className="text-0 txt-black">{props.headline}</h4>
                <a href="/" className="txt-primary text-2">Lihat Semua</a>
            </div>
        </div>
    );    
}

export default Headline