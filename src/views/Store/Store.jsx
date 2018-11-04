import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Table,
  Row,
  Col
} from "reactstrap";

import { thead, tbody } from "variables/store";

class Store extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Itme</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                <Form>
                  <FormGroup>
                    <Label for="itemName">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="itemName"
                      placeholder="Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="itemAmount">Amount</Label>
                    <Input
                      type="text"
                      name="amount"
                      id="itemAmount"
                      placeholder="Amount"
                    />
                  </FormGroup>
                  <hr />
                  <Button size={"md"} color="primary" block>
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Store</CardTitle>
              </CardHeader>
              <CardBody className="all-icons">
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th
                              key={key}
                              className="text-center"
                              width={prop.width}
                            >
                              {prop.name}
                            </th>
                          );
                        return (
                          <th key={key} width={prop.width}>
                            {prop.name}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                          <td className="text-center">
                            <Button size="sm" color="info">
                              <i className="far fa-edit" /> Edit
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                {/* <div id="icons-wrapper">
                  <section>
                    <ul>
                      {store.map((prop, key) => {
                        return (
                          <li key={key}>
                            <img src={prop.url} style={{ width: "100px" }} />
                            <h6>{prop.name}</h6>
                            <em>
                              <span className="text-danger">{prop.amount}</span>
                              /<span className="text-primary">{prop.all}</span>
                            </em>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </div> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Store;
