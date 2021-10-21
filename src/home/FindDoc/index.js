import Content from '../../component/content';
import Headline from '../../component/content/headline';
import Poli from './poli'
import './finddoc.css'

export default function FindDoc() {
    return (
        <div>
            <Content>
                <Headline headline="Find Doctor"></Headline>
                <div className="poli-list">
                    <Poli poli="jantung" img="poli/jantung.png"></Poli>
                    <Poli poli="anak" img="poli/anak.png"></Poli>
                    <Poli poli="THT" img="poli/tht.png"></Poli>
                    <Poli poli="gigi" img="poli/gigi.png"></Poli>
                    <Poli poli="paru" img="poli/paru.png"></Poli>
                </div>
            </Content>
        </div>
    )
}
