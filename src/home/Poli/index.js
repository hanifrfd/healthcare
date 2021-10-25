import Content from '../../component/content';
import Headline from '../../component/content/headline';
import ListPoli from './ListPoli'
import './finddoc.css'

export default function Poli() {
    return (
        <div>
            <Content>
                <Headline headline="Find Doctor"></Headline>
                <div className="poli-list">
                    <ListPoli poli="jantung" img="poli/jantung.png"></ListPoli>
                    <ListPoli poli="anak" img="poli/anak.png"></ListPoli>
                    <ListPoli poli="THT" img="poli/tht.png"></ListPoli>
                    <ListPoli poli="gigi" img="poli/gigi.png"></ListPoli>
                    <ListPoli poli="paru" img="poli/paru.png"></ListPoli>
                </div>
            </Content>
        </div>
    )
}
