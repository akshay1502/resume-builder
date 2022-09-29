import { connect } from 'react-redux';
import { updatePersonalinfo } from '../actions/resumeActions';

function Edit({ dispatch, fullName, email, phoneNo, github, linkedIn }) {
  return(
    <div>
      <form>
        <h2>Personal Details</h2>
        <label htmlFor="fullName">
          Full Name
          <input
            type="text"
            placeholder="FirstName LastName"
            id="fullName"
            value={fullName}
            name="fullName"
            onChange={(e) => dispatch(updatePersonalinfo(e))}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => dispatch(updatePersonalinfo(e))}
          />
        </label>
        <br />
        <label htmlFor="phoneNo">
          Phone No
          <input
            type="phoneNo"
            id="phoneNo"
            value={phoneNo}
            name="phoneNo"
            onChange={(e) => dispatch(updatePersonalinfo(e))}
          />
        </label>
        <br />
        <label htmlFor="github">
          Github
          <input
            type="github"
            id="github"
            value={github}
            name="github"
            onChange={(e) => dispatch(updatePersonalinfo(e))}
          />
        </label>
        <br />
        <label htmlFor="linkedIn">
          LinkedIn
          <input
            type="linkedIn"
            id="linkedIn"
            value={linkedIn}
            name="linkedIn"
            onChange={(e) => dispatch(updatePersonalinfo(e))}
          />
        </label>
        <br />
      </form>
      <form>
        <h2>Education details</h2>
        <label htmlFor='collegeInstituteName'>
          College/Institute Name
          <input 
            type="text"
            value=""
            id="collegeInstituteName"
            name="collegeInstituteName"
          />
        </label>
        <label htmlFor='degree'>
          Degree
          <select value="" id="degree">
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="B.E.">B.E.</option>
            <option value="B.Tech">B.Tech</option>
          </select>
        </label>
        <label htmlFor='percentage'>
          Percentage
          <input 
            type="text"
            value=""
            id="percentage"
            name="percentage"
          />
        </label>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  fullName: state.personalInfo.fullName,
  email: state.personalInfo.email,
  phoneNo: state.personalInfo.phoneNo,
  github: state.personalInfo.github,
  linkedIn: state.personalInfo.linkedIn,
})

export default connect(mapStateToProps)(Edit)