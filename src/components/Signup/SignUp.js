import React, {Component} from 'react';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onNameChange = (e)=>{
        this.setState({name: e.target.value})
        
    }
    onEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }

    onPasswordChange = (e)=>{
        this.setState({password: e.target.value});
    }
    
    onSubmit = (e)=>{
        e.preventDefault();
        fetch('https://calm-beach-72428.herokuapp.com/signup', {
            method: 'post',
            headers:{
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
         .then(res => res.json())
         .then(user =>{
             this.props.loadUser(user);
             this.props.onRouteChange('home') ; 
         })
    }

    render(){
        const {onRouteChange} = this.props;
        return (
            <div className="mw6 white center br4 pt5 pb5 pl4 pr4" style={{boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)'}}>
            <form className="measure center " onSubmit={this.onSubmit}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 center">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name *</label>
                        <input 
                            className="shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text"  
                            name="name"  
                            id="name" 
                            onChange={this.onNameChange}
                            required
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email *</label>
                        <input className="shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange} 
                        required
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password *</label>
                        <input className="shadow-5 b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange} required />
                    </div>
                </fieldset>
                <div>
                    <button 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    >Sign Up</button>
                </div>
                <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black" onClick={()=> onRouteChange('signin')}>Sign In</a> 
                </div>
            </form>

            
        </div>
        );
    }
}

export default SignUp;