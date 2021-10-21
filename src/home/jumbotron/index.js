import Card from '../../component/card/'
import './jumbotron.css'

export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <Card type="jumbotron">
                <img src="jumbo.png" alt="jumbotron" width="100%" height="170" />
            </Card>
        </div>
    )
}
