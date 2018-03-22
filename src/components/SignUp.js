import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&    
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div>
      {status === "sending" && <div>sending...</div>}
      {
        status === "error" && 
        <div dangerouslySetInnerHTML={ { __html: message } }></div>
      }      
      {
        status === "success" && 
        <div angerouslySetInnerHTML={ { __html: message } }>
        {message}
        </div>
      }
      {
        status !== "success" && 
        <div>
        <input 
        style={{ display: "none" }}     
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button onClick={submit}>
        Submit
      </button>
        </div>
      }
    </div>
  );
};

class SignUp extends React.Component {
  
  render() {
    const url = 'https://goatnbike.us12.list-manage.com/subscribe/post?u=d0d83b49d8fcb13f79207dfc6&amp;id=f6b4838105'

    return (
      <div style={{width: '60vw'}}>        
        <h2>Sign up for updates!</h2>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm 
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>

    )
  }
}





export default SignUp
