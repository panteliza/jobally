import emailjs from 'emailjs-com'
const Contact=()=>{
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_c8qgd8l','template_4wytfgg',e.target,)
  }
  return(
    <div className="container border" 
    style={{marginTop:"50px",
    width:'50%',
    backgroundImage:`url(https://img.freepik.com/free-vector/binary-code-pattern-blue-background_53876-116182.jpg?w=740&t=st=1676123792~exp=1676124392~hmac=b41b5ac2b39429273c0561bd247ba6f449d0b54e01f54c37dd9623427037a12f)`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    
    
    }}
    >
      <h2 style={{marginTop:"25px" ,}}>
        Contact Us
      </h2>
      <form className="row" style={{margin:"25px 85px 75px 100px"}} 
      onSubmit={sendEmail}>
      
        <label>Name</label>
        <input type='text' name='name' className="form-control"/>
        <label>Email</label>
        <input type='email' name='user_email' className="form-control"/>
        <label>Message</label>
        <textarea name='message' rows='4' className="form-control"/>
        <input type='submit' value='Send' className="form-control btn btn-primary"
         style={{marginTop:'30px'}}

        />
        
      </form>
    </div>
  )
}
export default Contact