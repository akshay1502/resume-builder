import Link from 'next/link';
import { useState } from 'react';
import { connect } from 'react-redux';
import { storeToLocalStorage, updateEducation, updatePersonalInfo, validatePersonalInfo } from '../actions/resumeActions';
import styles from '../styles/edit.module.css';

function Edit({
  dispatch, personalInfo, personalInfoValidation, educationDetails
}) {
  const [education, setEducation] = useState({
    collegeInstituteName: '',
    degree: 'SSC',
    percentage: ''
  });
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation({...education, [name]: value});
  }
  const handlePersonalInfoChange = (e) => {
    dispatch(updatePersonalInfo(e));
    dispatch(validatePersonalInfo(e));
    dispatch(storeToLocalStorage());
  }
  const handleEducationSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    dispatch(updateEducation(education));
    dispatch(storeToLocalStorage());
    setEducation({
      collegeInstituteName: '',
      degree: '',
      percentage: ''
    })
  }
  return(
    <div>
      <form>
        <h2>Personal Details</h2>
        <div className={`${styles.formElement} ${styles.fullName}`}>
          <div>
            <label htmlFor="firstName">
              First Name
              <br />
              <input
                type="text"
                id="firstName"
                value={personalInfo.firstName}
                name="firstName"
                onChange={(e) => handlePersonalInfoChange(e)}
              />
            </label>
            <br />
            <small>{personalInfoValidation.firstName}</small>
          </div>
          <div>
          <label htmlFor="lastName">
              Last Name
              <br />
              <input
                type="text"
                id="lastName"
                value={personalInfo.lastName}
                name="lastName"
                onChange={(e) => handlePersonalInfoChange(e)}
              />
            </label>
            <br />
            <small>{personalInfoValidation.lastName}</small>
          </div>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="email">
            Email
            <br />
            <input
              type="email"
              id="email"
              value={personalInfo.email}
              name="email"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <small>{personalInfoValidation.email}</small>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="phoneNo">
            Phone No
            <br />
            <input
              type="phoneNo"
              id="phoneNo"
              value={personalInfo.phoneNo}
              name="phoneNo"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <small>{personalInfoValidation.phoneNo}</small>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="github">
            Github
            <br />
            <input
              type="github"
              id="github"
              value={personalInfo.github}
              name="github"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <small>{personalInfoValidation.github}</small>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="linkedIn">
            LinkedIn
            <br />
            <input
              type="linkedIn"
              id="linkedIn"
              value={personalInfo.linkedIn}
              name="linkedIn"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <small>{personalInfoValidation.linkedIn}</small>
        </div>
      </form>
      <form method="post" onSubmit={(e) => handleEducationSubmit(e)} >
        <h2>Education details</h2>
        <div>
          {!!(educationDetails.length) && educationDetails.map((education) => {
            return(
              <div key={education.id} >
                <p>{education.collegeInstituteName}</p>
                <span>{education.degree}</span>
                <span>{education.percentage}</span>
              </div>
            )
          })}
        </div>
        <div className={styles.formElement}>
          <label htmlFor='collegeInstituteName'>
            College/Institute Name
            <br />
            <input 
              type="text"
              value={education.collegeInstituteName}
              onChange={(e) => handleEducationChange(e)}
              id="collegeInstituteName"
              name="collegeInstituteName"
              required
            />
          </label>
          <br />
          <small></small>
        </div>
        <div className={styles.formElement}>
          <label htmlFor='degree'>
            Degree
            <br />
            <select 
              value={education.degree}
              onChange={(e) => handleEducationChange(e)}
              id="degree"
              name="degree"
              required
            >
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="B.E.">B.E.</option>
              <option value="B.Tech">B.Tech</option>
            </select>
          </label>
          <br />
          <small></small>
        </div>
        <div className={styles.formElement}>
          <label htmlFor='percentage'>
            Percentage
            <br />
            <input 
              type="number"
              value={education.percentage}
              onChange={(e) => handleEducationChange(e)}
              id="percentage"
              name="percentage"
              required
            />
          </label>
          <br />
          <small></small>
        </div>
        <input type="submit" value="Save" className={styles.save} />
      </form>
      <Link href="/preview">
        <button className={styles.btn}>Preview</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalInfo: state.resume.personalInfo,
  personalInfoValidation: state.resume.personalInfoValidation,
  educationDetails: state.resume.educationDetails
})

export default connect(mapStateToProps)(Edit)