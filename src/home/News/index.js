import Content from '../../component/content';
import Headline from '../../component/content/headline';
import Card from '../../component/card';

import './news.css'

export default function News() {
    return (
        <div>
            <Content>
                <Headline headline="News"></Headline>
                <div className="news-list">
                    <Card type="news-card">
                        <img src="news/1.jpg" width="240" height="120" alt="news" />
                        <div className="news-content">
                            <h4 className="text-1 txt-black">Daftar Melalui aplikasi online</h4>
                            <p className="text-3 txt-primary">Jun, 2021</p>
                        </div>
                    </Card>
                    <Card type="news-card">
                        <img src="news/2.jpg" width="240" height="120" alt="news" />
                        <div className="news-content">
                            <h4 className="text-1 txt-black">Daftar Melalui aplikasi online</h4>
                            <p className="text-3 txt-primary">Jun, 2021</p>
                        </div>
                    </Card>
                    <Card type="news-card">
                        <img src="news/3.jpg" width="240" height="120" alt="news" />
                        <div className="news-content">
                            <h4 className="text-1 txt-black">Daftar Melalui aplikasi online</h4>
                            <p className="text-3 txt-primary">Jun, 2021</p>
                        </div>
                    </Card>
                </div>
            </Content>
        </div>
    )
}
