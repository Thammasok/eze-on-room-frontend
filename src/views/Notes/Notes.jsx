import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const iconUrl = "https://image.flaticon.com/icons/svg/1055/1055646.svg";

class Notes extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs={8} md={8}>
                    <CardTitle tag="h4">Notes</CardTitle>
                  </Col>
                  <Col xs={4} md={4} className="text-right">
                    <Button size="sm" color="primary">
                      <i className="fa fa-pencil-alt"> </i> New
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col xs={1} md={1}>
                        <div className="avatar">
                          <img
                            src={iconUrl}
                            alt="icon spaceship"
                            className="img-circle img-no-padding img-responsive"
                          />
                        </div>
                      </Col>
                      <Col xs={9} md={9}>
                        <strong className="text-muted">
                          Why Do All Websites Look the Same?
                        </strong>
                        <br />
                        <span className="text-muted">
                          <small>
                            Today’s internet is bland. Everything...
                          </small>
                        </span>
                      </Col>
                      <Col xs={2} md={2} className="text-right">
                        <Button size="sm" color="info" round icon outline>
                          <i className="fa fa-angle-right"> </i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={1} md={1}>
                        <div className="avatar">
                          <img
                            src={iconUrl}
                            alt="iconUrl"
                            className="img-circle img-no-padding img-responsive"
                          />
                        </div>
                      </Col>
                      <Col xs={9} md={9}>
                        <strong className="text-muted">
                          The End Is Near for Mobile Apps
                        </strong>
                        <br />
                        <span className="text-muted">
                          <small>In the next three to seven years...</small>
                        </span>
                      </Col>
                      <Col xs={2} md={2} className="text-right">
                        <Button size="sm" color="info" round icon outline>
                          <i className="fa fa-angle-right"> </i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={1} md={1}>
                        <div className="avatar">
                          <img
                            src={iconUrl}
                            alt="iconUrl"
                            className="img-circle img-no-padding img-responsive"
                          />
                        </div>
                      </Col>
                      <Col xs={9} md={9}>
                        <strong className="text-muted">
                          Instagram Can’t Hide Behind Facebook Anymore
                        </strong>
                        <br />
                        <span className="text-muted">
                          <small>Six years ago, Facebook made...</small>
                        </span>
                      </Col>
                      <Col xs={2} md={2} className="text-right">
                        <Button size="sm" color="info" round icon outline>
                          <i className="fa fa-angle-right"> </i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <Row>
                  <Col xs={10} md={10}>
                    <CardTitle>Edit Note</CardTitle>
                  </Col>
                  <Col xs={2} md={2} className="text-right">
                    <Button size="sm" color="primary" round icon outline>
                      <i className="fa fa-pencil-alt"> </i>
                    </Button>
                    <Button size="sm" color="danger" round icon outline>
                      <i className="fa fa-trash-alt"> </i>
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <h1>Why Do All Websites Look the Same?</h1>
                <p>
                  Today’s internet is bland. Everything looks the same: generic
                  fonts, no layouts to speak of, interchangeable pages, and an
                  absence of expressive visual language. Even micro-typography
                  is a mess. Web design today seems to be driven by technical
                  and ideological constraints rather than creativity and ideas.
                  Every page consists of containers in containers in containers;
                  sometimes text, sometimes images. Nothing is truly designed,
                  it’s simply assumed. Ironically, today’s web technologies have
                  enormous design capabilities. We have the capability to
                  implement almost every conceivable idea and layout. We can
                  create radical, surprising, and evocative websites. We can
                  combine experimental typography with generative images and
                  interactive experiences. And yet, even websites for designers
                  are based on containers in containers in containers. The most
                  popular portals for creatives on the web — Dribbble and
                  Behance — are so fundamentally boring they’re basically
                  interchangeable. (See lead image.)
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notes;
