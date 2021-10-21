import Content from '../../component/content';
import Headline from '../../component/content/headline';
import Card from '../../component/card';

import './appointment.css'

export default function Appointment() {
    return(
        <div>
            <Content>
                <Headline headline="Your Appointment"></Headline>
                
                <Card type="appo">
                    <div className="appointment">
                        <img src="appo-active.png" alt="appointment-active" />
                        <div className="appo-info">
                            <div className="appo-doctor">
                                <h6 className="text-1 txt-black">Poli Jantung</h6>
                                <p className="text-2 txt-grey">
                                    Dr. Hendra Wirawan
                                </p>
                            </div>
                            <div className="appo-date">
                                <h6 className="txt-primary">17 Sept</h6>
                                <p className="text-2 txt-grey">
                                    09:00 - 12:00
                                </p>
                            </div>
                        </div>                    
                    </div>
                </Card>
                
            </Content>
        </div>
    );
}

