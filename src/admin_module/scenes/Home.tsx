import React from 'react';
import {Grid, Card, Button, Header, Icon, Table, Label, Menu} from "semantic-ui-react";


export default class Home extends React.Component  {
  render() {
    return (
      <div>
        <Grid columns="4" padded>
          <Grid.Row>
            <Grid.Column className="four wide computer eight wide tablet sixteen wide mobile">
            <Card fluid>
              <Card.Content>
                <Icon name="users" className="right floated p-text-color" size="big" />
                <Card.Header>1,001</Card.Header>
                <Card.Meta>Total Employees</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    View Details
                  </Button>
                </div>
              </Card.Content>
            </Card>
            </Grid.Column>
            
            <Grid.Column className="four wide computer eight wide tablet sixteen wide mobile">
            <Card fluid>
              <Card.Content>
                <Icon name="chat" className="right floated p-text-color" size="big" />
                <Card.Header>5.25 Minutes</Card.Header>
                <Card.Meta>Average Call Duration</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    View Details
                  </Button>
                </div>
              </Card.Content>
            </Card>
            </Grid.Column>
            
            <Grid.Column className="four wide computer eight wide tablet sixteen wide mobile">
            <Card fluid>
              <Card.Content>
                <Icon name="call" className="right floated p-text-color" size="big" />
                <Card.Header>6,900</Card.Header>
                <Card.Meta>Total # of Calls Today</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    View Details
                  </Button>
                </div>
              </Card.Content>
            </Card>
            </Grid.Column>
            
          </Grid.Row>
        </Grid>
        <Card fluid> 
        <Card.Content>
          <Header as="h3">
            <Icon name="user" />
            Employees List
          </Header>
        </Card.Content>
        <Card.Content description="All active Employees" />
        <Card.Content extra>
            <Table celled className="ui celled table">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>Billy Jack Sanchez</Table.Cell>
                    <Table.Cell>Branch Manager</Table.Cell>
                    <Table.Cell>
                      <Label as='a' color="blue" tag>
                        Active
                      </Label>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jack Stone</Table.Cell>
                    <Table.Cell>Food Attendant</Table.Cell>
                    <Table.Cell>
                      <Label as='a' color='red' tag>
                        Rest Day
                      </Label>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Michael Rocks</Table.Cell>
                    <Table.Cell>Food Attendant</Table.Cell>
                    <Table.Cell>
                      <Label as='a' color="blue" tag>
                        Active
                      </Label>
                    </Table.Cell>
                </Table.Row>
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        </Card.Content>
      </Card>
    </div>
    )
  }
}