import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./FormCard.scss";


export const FormCard: React.FC<IFormCardProps> = ({ TextSelectUI, callbackFn }) => {

    const {t} = useTranslation();

    return(
        <Card className="p-2">
            <Card.Body >
                <Form.Group className="mb-3">
                    <Row>
                        <TextSelectUI>
                            <Col lg={8}>
                                <Form.Control
                                    type="number"
                                    id="tokenQty"
                                    min={0}
                                    className="numericForm"
                                    placeholder={t('form.tokenQtyPlaceholder')}
                                >
                                </Form.Control>
                            </Col>
                            <Col lg={4}>
                                <Form.Select size="sm" style={{width: '100px'}}> 
                                    <option value="1">Bitcoin</option>
                                </Form.Select>
                            </Col>
                        </TextSelectUI>
                    </Row>
                </Form.Group>
                <Card.Title className="d-flex justify-content-center mb-3">
                    {t('form.firstDepositBonusTitle')}
                </Card.Title>
                <Card.Text className="d-flex justify-content-center text-align-center">
                    {t('form.firstDepositBonusText')}
                </Card.Text>
                <Button onClick={callbackFn}>Connect wallet</Button>
            </Card.Body>
        </Card>
    )
}

interface IFormCardProps{
    TextSelectUI: any
    callbackFn: () => void
}