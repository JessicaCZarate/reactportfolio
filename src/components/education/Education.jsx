import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="education section" id="education">
      <div className="education_container container grid">
        <div className="education_content grid">
          <h2 className="section_title">Education</h2>
          <span className="section_subtitle">My Academic Background</span>
          <div className="edu_card">
            <h3 className="card_title">
              Bachelor of Science and Information Technology
            </h3>
            <h5 className="card_smdata">2021 - Present</h5>
            <span className="card_data">PHINMA University of Pangasinan</span>
          </div>
          <div className="edu_card">
            <h3 className="card_title">Basic Education, Senior High School</h3>
            <h5 className="card_smdata">2017-2019</h5>
            <span className="card_data">PHINMA University of Pangasinan</span>
          </div>
          <div className="edu_card">
            <h3 className="card_title">Junior High School</h3>
            <h5 className="card_smdata">2014-2017</h5>
            <span className="card_data">Dagupan City National High School</span>
          </div>
          <div className="edu_card">
            <h3 className="card_title">Elementary School</h3>
            <h5 className="card_smdata">2008-2014</h5>
            <span className="card_data">Caranglaan Elementary School</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
