import React from 'react';
import { Button, Header, Icon,  Modal, Form, Input, TextArea, Divider} from "semantic-ui-react";

interface  MyProps {  };
interface  MyState { showModal: Boolean };

export default class MerchantCreateForm extends React.Component <MyProps, MyState> {
  constructor(props: any) {
    super(props)
      
    this.state = {
      showModal: false
    }
  }
  toggleModal () {
    console.log(Boolean(this.state.showModal))
    this.setState({showModal: !Boolean(this.state.showModal)})
  }
  render() {
    return (
      <Modal
        open={ Boolean(this.state.showModal)}
        onClose={() => this.toggleModal()}
        onOpen={() => this.toggleModal()}
        trigger={<Button basic color='green'>Create</Button>}
      >
        <Modal.Header>Create New Merchant</Modal.Header>
        <Modal.Content image scrolling>

          <Modal.Description>
            <Form>
              <Form.Field
                id='form-textarea-control-business-name'
                control={TextArea}
                label='Business Name'
                placeholder='Business Name'
              />
              <Form.Field
                id='form-textarea-control-business-type'
                control={Input}
                label='Business Type'
                placeholder='Business Type'
              />
              
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-textarea-control-branches'
                  control={Input}
                  label='No. of Branch'
                  type="number"
                  min="1"
                  placeholder='No. of Branch'
                />
                <Form.Field
                  id='form-textarea-control-license'
                  control={Input}
                  type="number"
                  min="1"
                  label='No. of License'
                  placeholder='No. of License'
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Field
                  id='form-textarea-control-contact-person'
                  control={Input}
                  label='Contact Person'
                  placeholder='Contact Person'
                />
                <Form.Field
                  id='form-textarea-control-contact-number'
                  control={Input}
                  type="number"
                  min="1"
                  label='Contact Number'
                  placeholder='Contact Number'
                />
                <Form.Field
                  id='form-textarea-control-email'
                  control={Input}
                  label='Email'
                  placeholder='Email'
                />
              </Form.Group>

              <Divider horizontal className="mt-50">
                <Header as='h4'>
                  <Icon name="location arrow" />
                    Location
                </Header>
              </Divider>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-textarea-control-coordinates'
                  control={Input}
                  label='Coordinates'
                  type="number"
                  min="1"
                  placeholder='Coordinates'
                />
                <Form.Field
                  id='form-textarea-control-radius'
                  control={Input}
                  type="number"
                  min="1"
                  label='Radius'
                  placeholder='Radius'
                />
              </Form.Group>
              
              <Divider horizontal className="mt-50">
                <Header as='h4'>
                  <Icon name="sign-in" />
                    Login Credentials
                </Header>
              </Divider>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-textarea-control-username'
                  control={Input}
                  label='Username'
                  placeholder='Username'
                />
                <Form.Field
                  id='form-textarea-control-password'
                  control={Input}
                  label='Password'
                  placeholder='Password'
                />
              </Form.Group>
              {/* <Form.Field
                id='form-button-control-public'
                control={Button}
                primary
                content='Save Merchant'
                label=''
              /> */}
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => this.toggleModal()} primary>
            <Icon name='save' /> Save Merchant
          </Button>
          <Button onClick={() => this.toggleModal()} color="google plus">
            <Icon name='close' /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}