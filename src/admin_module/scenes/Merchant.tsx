import React from 'react';
import {Grid, Card, Header, Icon, Table, Menu} from "semantic-ui-react";
import MerchantCreateForm from './MerchantCreateForm'

interface  MyProps {  };
interface  MyState { showModal: Boolean };

export default class Merchant extends React.Component <MyProps, MyState> {
  render() {
    return (
      <div>
        <Grid columns="4" padded>
          <Grid.Row>
            
            <Grid.Column className="four wide computer eight wide tablet sixteen wide mobile">
              <Card fluid>
                <Card.Content>
                  <Icon name="user plus" className="right floated" size="big" />
                  <Card.Header>Add New Merchant</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <MerchantCreateForm />
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          
          </Grid.Row>
        </Grid>
        <Card fluid> 
        <Card.Content>
          <Header as="h3">
            <Icon name="folder" />
            Merchants List
          </Header>
        </Card.Content>
        <Card.Content description="Test Description of merchants list" />
        <Card.Content extra>
            <Table celled className="ui celled table">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Business Name</Table.HeaderCell>
                    <Table.HeaderCell>Branches</Table.HeaderCell>
                    <Table.HeaderCell>Licenses</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>Shikiys pitza</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>14</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Nyalimi</Table.Cell>
                    <Table.Cell>15</Table.Cell>
                    <Table.Cell>200</Table.Cell>
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