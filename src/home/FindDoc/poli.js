import Card from '../../component/card';
import './poli.css'

export default function Poli(props) {
    return (
        <div>
            <Card type="poli">
                <div className="poli">
                    <img src={props.img} alt="poli-jantung" width="30" height="30" />
                    <p className="text-3">{props.poli}</p>
                </div>
            </Card>
        </div>
    )
}
