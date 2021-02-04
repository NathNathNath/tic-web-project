import React from 'react'
import { Icon, Label, Menu, Table, Card, Header } from 'semantic-ui-react'

export default class Datatable extends React.Component  {
    render() {
        return (
          <Card fluid> 
            <Card.Content>
              <Header as="h3">
                <Icon name="user" />
                Users List
              </Header>
            </Card.Content>
            <Card.Content description="Test Description of user's list" />
            <Card.Content extra>
                <Table celled className="ui celled table">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
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
        )
    }
    
};
