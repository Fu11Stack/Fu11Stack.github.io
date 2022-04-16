import React from 'react'
import { From, Input, TextArea, Button} from 'semantic-ui-react'

const Email = () => {
 return (
  <div className= 'email'>
    <From onsubmit={HandleOnSubmit}>
     <FormData.Field
     id='form-input-control-email'
     control={Input}
     label='Email'
     name='user_email'
     placeholder='Email...'
     required
     icon='mail'
     iconPosition='left'
     />
     <Form.Field
     id="form-input-control-last-name"
     control={Input}
     label='Name'
     name='user_name'
     placeholder='Name...'
     required
     icon='user circle'
     iconPosition='left'
     />

     <From.Field
     id='form-textarea-control-opinion'
     control={TextArea}
     label='Message'
     name='user_message'
     placeholder='Message'
     required />
    </From>
  </div>

 );
}

export default Email