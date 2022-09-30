import { connect } from "react-redux";

function Preview({personalInfo, educationDetails}) {
  console.log(educationDetails);
  return(
    <div>
      <h2>Resume</h2>
      <div>
        <h3>{personalInfo.firstName} {personalInfo.lastName}</h3>
        <div>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={personalInfo.phoneNo}>{personalInfo.phoneNo}</a>
        </div>
        <div>
          connect with me on <a href={personalInfo.github}>Github</a>, <a href={personalInfo.linkedIn}>LinkedIn</a>
        </div>
      </div>
      <div>
        {
          educationDetails.map((education) => {
            return (
              <div key={education.id}>
                <p>{education.collegeInstituteName}</p>
                <span>{education.degree}</span>
                <span>{education.percentage}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  personalInfo: state.resume.personalInfo,
  educationDetails: state.resume.educationDetails
})

export default connect(mapStateToProps)(Preview)
