import Link from 'next/link';
import { connect } from "react-redux";
import styled from 'styled-components';

const Heading2 = styled.h2`
  margin-bottom: 16px;
  text-align: center;
`;
const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;
const BoldParagraph = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
`;
const BoldSpan = styled.span`
  font-weight: 500;
  margin-right: 8px;
`;
const EducationElement = styled.div`
  margin-bottom: 16px;
`;
const ExperienceElement = styled(EducationElement)``;
const Heading4 = styled.h4`
  margin-bottom: 8px;
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
const Div = styled.div`
  margin-bottom: 24px;
`;
function Preview({personalInfo, educationDetails, experienceDetails}) {
  return(
    <div>
      <Heading2>Resume</Heading2>
      <TextCenter>
        <h3>{personalInfo.firstName} {personalInfo.lastName}</h3>
        <div>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}>{personalInfo.email}</a>
          ,{` `}
          <a href={personalInfo.phoneNo}>{personalInfo.phoneNo}</a>
        </div>
        <p>
          connect with me on <a href={personalInfo.github}>Github</a>, <a href={personalInfo.linkedIn}>LinkedIn</a>
        </p>
      </TextCenter>
      <Div>
        <Heading4>Experience</Heading4>
        {
          !!(experienceDetails.length) && experienceDetails.map((experience) => {
            return (
              <ExperienceElement key={experience.id}>
                <BoldParagraph>{experience.companyName}</BoldParagraph>
                <BoldSpan>{experience.designation}</BoldSpan>
                <span>{experience.duration} months</span>
                <p>{experience.summary}</p>
              </ExperienceElement>
            );
          })
        }
      </Div>
      <Div>
        <Heading4>Education</Heading4>
        {
          !!(educationDetails.length) && educationDetails.map((education) => {
            return (
              <EducationElement key={education.id}>
                <BoldParagraph>{education.collegeInstituteName}</BoldParagraph>
                <BoldSpan>{education.degree}</BoldSpan>
                <span>{education.percentage}%</span>
              </EducationElement>
            );
          })
        }
      </Div>
      <Link href="/edit">
        <Button>Edit</Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalInfo: state.resume.personalInfo,
  educationDetails: state.resume.educationDetails,
  experienceDetails: state.resume.experienceDetails
})

export default connect(mapStateToProps)(Preview)
