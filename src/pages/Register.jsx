import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" type="text" defaultValue="Jordi" />
        <FormRow
          name="lastName"
          labelText="last name"
          type="text"
          defaultValue="Bordi"
        />
        <FormRow name="location" type="text" defaultValue="Egypt" />
        <FormRow
          name="email"
          type="email"
          defaultValue="youssifbebo@gmail.com"
        />
        <FormRow name="password" type="password" defaultValue="123456" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
