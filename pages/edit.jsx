import Link from 'next/link';
import { useState } from 'react';
import { connect } from 'react-redux';
import { storeToLocalStorage, updateEducation, updateExperinece, updatePersonalInfo, validatePersonalInfo } from '../actions/resumeActions';
import styled from 'styled-components';

const Heading2 = styled.h2`
  margin-bottom: 16px;
`;
const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #cacaca;
  font-size: 16px;
  outline: none;
  width: ${props => props.size || "60%"};
  margin: 6px 2px 2px 2px;
  &:focus {
    border-color: #1c1c1c;
    border-width: 1.5px;
  }
`;
const Button = styled.button`
  font-size: 16px;
  padding: 12px 24px;
  background: #010101;
  border: none;
  color: white;
  font-weight: 500;
  margin-right: 16px;
  border-radius: 4px;
  cursor: pointer;
`;
const FormElement = styled.div`
  margin-bottom: 16px;
`;
const SaveButton = styled.input`
  font-size: 14px;
  padding: 8px 12px;
  background: #1c1c1c;
  border: none;
  color: white;
  font-weight: 500;
  margin-right: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 32px;
`;
const Small = styled.small`
  height: 12px;
  display: block;
  color: red;
`;
const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #6d6d6d;
  font-size: 16px;
  outline: none;
  width: 100%;
  margin: 6px 2px;
`;
const FormElementFlex = styled(FormElement)`
  display: flex;
  width:60%
`;
const FlexGrow = styled.div`
  flex-grow: 1;
  &:first-child {
    margin-right: 32px;
  }
`;
const Span = styled.span`
  margin-right: 8px;
`;
const EducationElementPreview = styled.div`
  margin-bottom: 8px;
  color: #666;
`;
const ExperienceElementPreview = styled(EducationElementPreview)``;

function Edit({
  dispatch, personalInfo, personalInfoValidation, educationDetails, experienceDetails
}) {
  const [education, setEducation] = useState({
    collegeInstituteName: '',
    degree: 'SSC',
    percentage: ''
  });
  const [experience, setExperience] = useState({
    companyName: '',
    designation: '',
    duration: '',
    summary: ''
  })
  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation({...education, [name]: value});
  }
  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience({...experience, [name]: value});
  }
  const handlePersonalInfoChange = (e) => {
    dispatch(updatePersonalInfo(e));
    dispatch(validatePersonalInfo(e));
    dispatch(storeToLocalStorage());
  }
  const handleEducationSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEducation(education));
    dispatch(storeToLocalStorage());
    setEducation({
      collegeInstituteName: '',
      degree: '',
      percentage: ''
    })
  }
  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExperinece(experience));
    dispatch(storeToLocalStorage());
    setExperience({
      companyName: '',
      designation: '',
      duration: '',
      summary: ''
    })
  }
  return(
    <div>
      <form>
        <Heading2>Personal Details</Heading2>
        <FormElementFlex>
          <FlexGrow>
            <label htmlFor="firstName">
              First Name
              <br />
              <Input
                size="100%"
                type="text"
                id="firstName"
                value={personalInfo.firstName}
                name="firstName"
                onChange={(e) => handlePersonalInfoChange(e)}
              />
            </label>
            <br />
            <Small>{personalInfoValidation.firstName}</Small>
          </FlexGrow>
          <FlexGrow>
            <label htmlFor="lastName">
                Last Name
                <br />
                <Input
                  size="100%"
                  type="text"
                  id="lastName"
                  value={personalInfo.lastName}
                  name="lastName"
                  onChange={(e) => handlePersonalInfoChange(e)}
                />
            </label>
            <br />
            <Small>{personalInfoValidation.lastName}</Small>
          </FlexGrow>
        </FormElementFlex>
        <FormElement>
          <label htmlFor="email">
            Email
            <br />
            <Input
              type="email"
              id="email"
              value={personalInfo.email}
              name="email"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <Small>{personalInfoValidation.email}</Small>
        </FormElement>
        <FormElement>
          <label htmlFor="phoneNo">
            Phone No
            <br />
            <Input
              type="phoneNo"
              id="phoneNo"
              value={personalInfo.phoneNo}
              name="phoneNo"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <Small>{personalInfoValidation.phoneNo}</Small>
        </FormElement>
        <FormElement>
          <label htmlFor="github">
            Github
            <br />
            <Input
              type="github"
              id="github"
              value={personalInfo.github}
              name="github"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <Small>{personalInfoValidation.github}</Small>
        </FormElement>
        <FormElement>
          <label htmlFor="linkedIn">
            LinkedIn
            <br />
            <Input
              type="linkedIn"
              id="linkedIn"
              value={personalInfo.linkedIn}
              name="linkedIn"
              onChange={(e) => handlePersonalInfoChange(e)}
            />
          </label>
          <br />
          <Small>{personalInfoValidation.linkedIn}</Small>
        </FormElement>
      </form>
      <form method='POST' onSubmit={(e) => handleExperienceSubmit(e)}>
        <Heading2>Experience Details</Heading2>
        <div>
          {!!(experienceDetails.length) && experienceDetails.map((experience) => {
            return(
              <ExperienceElementPreview key={experience.id} >
                <p>{experience.companyName}</p>
                <Span>{experience.designation}</Span>
                <span>{experience.duration} months</span>
                <p>{experience.summary}</p>
              </ExperienceElementPreview>
            )
          })}
        </div>
        <FormElement>
          <label htmlFor='companyName'>
            Company Name
            <br />
            <Input
              type="text"
              id="companyName"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleExperienceChange(e)}
            />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='designation'>
            Designation
            <br />
            <Input
              type="text"
              id="designation"
              name="designation"
              value={experience.designation}
              onChange={(e) => handleExperienceChange(e)}
            />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='duration'>
            Duration
            <br />
            <Input
              size="20%"
              type="number"
              id="duration"
              name="duration"
              value={experience.duration}
              placeholder="Enter in months eg.4"
              onChange={(e) => handleExperienceChange(e)}
            />
          </label>
        </FormElement>
        <FormElement>
          <label htmlFor='summary'>
            Summary
            <br />
            <textarea
              cols="50"
              type="text"
              id="summary"
              name="summary"
              value={experience.summary}
              onChange={(e) => handleExperienceChange(e)}
            />
          </label>
        </FormElement>
        <SaveButton type="submit" value="Save" />
      </form>
      <form method="post" onSubmit={(e) => handleEducationSubmit(e)} >
        <Heading2>Education details</Heading2>
        <div>
          {!!(educationDetails.length) && educationDetails.map((education) => {
            return(
              <EducationElementPreview key={education.id} >
                <p>{education.collegeInstituteName}</p>
                <Span>{education.degree}</Span>
                <span>{education.percentage}</span>
              </EducationElementPreview>
            )
          })}
        </div>
        <FormElement>
          <label htmlFor='collegeInstituteName'>
            College/Institute Name
            <br />
            <Input 
              type="text"
              value={education.collegeInstituteName}
              onChange={(e) => handleEducationChange(e)}
              id="collegeInstituteName"
              name="collegeInstituteName"
              required
            />
          </label>
          <br />
          <Small />
        </FormElement>
        <FormElementFlex>
          <FlexGrow>
            <label htmlFor='degree'>
              Degree
              <br />
              <Select 
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
              </Select>
            </label>
            <br />
            <Small />
          </FlexGrow>
          <FlexGrow>
            <label htmlFor='percentage'>
              Percentage
              <br />
              <Input 
                size="100%"
                type="number"
                value={education.percentage}
                onChange={(e) => handleEducationChange(e)}
                id="percentage"
                name="percentage"
                required
              />
            </label>
            <br />
            <Small />
          </FlexGrow>
        </FormElementFlex>
        <SaveButton type="submit" value="Save" />
      </form>
      <Link href="/preview">
        <Button>Preview</Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalInfo: state.resume.personalInfo,
  personalInfoValidation: state.resume.personalInfoValidation,
  educationDetails: state.resume.educationDetails,
  experienceDetails: state.resume.experienceDetails
})

export default connect(mapStateToProps)(Edit)