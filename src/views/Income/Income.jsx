import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {}
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} md={3}>
            <Card className="card-stats">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={12}>
                    <div className="numbers text-success">
                      <p className="card-category">Income</p>
                      <CardTitle tag="p">48,000.00</CardTitle>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="numbers text-danger">
                      <p className="card-category">Outcome</p>
                      <CardTitle tag="p">10,345.00</CardTitle>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={12}>
                    <div className="numbers">
                      <p className="card-category">Balance</p>
                      <CardTitle tag="p">37,765.00</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter />
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <Card>
              <CardHeader>
                <CardTitle>Historys</CardTitle>
                <p className="card-category">November</p>
              </CardHeader>
              <CardBody>aaa</CardBody>
              <CardFooter>
                <hr />
                Update: 04/11/2018 10:10:58
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Income;
