import React from "react";
import "./me.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-box">
        <h2 className="title">Where I Am At</h2>

        <div className="set">
          <p>
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah
          </p>
        </div>
      </div>

      <div className="resume-box">
        <h2 className="title">Work Experience</h2>

        <div className="set">
          <p className="set-name">살라드 잉글리시 [콘텐츠 검수]</p>
          <p className="set-duration">2019.06 - 2019.12</p>
          <li className="set-detail">어찌고 저찌고</li>
          <li className="set-detail">어찌고 저찌고2</li>
          <li className="set-detail">어찌고 저찌고3</li>
        </div>

        <div className="set">
          <p className="set-name">대안학교 [영어 슨생님]</p>
          <p className="set-duration">2015.09 ~</p>
          <li className="set-detail">어찌고 저찌고</li>
          <li className="set-detail">어찌고 저찌고2</li>
          <li className="set-detail">어찌고 저찌고3</li>
        </div>

        <div className="set">
          <p className="set-name">서울기독학교 [연구부장]</p>
          <p className="set-duration">2016.07 - 2017.06</p>
          <li className="set-detail">어찌고 저찌고</li>
          <li className="set-detail">어찌고 저찌고2</li>
          <li className="set-detail">어찌고 저찌고3</li>
        </div>
      </div>

      <div className="resume-box">
        <h2 className="title">Education</h2>
        <div className="set">
          <span className="set-name">Chung-ang University</span>
          <span className="set-duration">2014.08 - 2016.07</span>
          <li className="set-detail">MA, Second Language Acquisition</li>
          <p>
            <span>- Thesis :</span>
            <span className="italic">
              The Relationship among Korean High School Students'
              Implicit/Explicit L2 Grammatical Knowledge, English Proficiency
              and Working Memory Capacity
            </span>
          </p>
          <p>- Thesis Advisor : Jin-Hwa Lee</p>
        </div>
        <div className="set">
          <span className="set-name">Chongshin University</span>
          <span className="set-duration">2007.03 - 2014.02</span>
          <li className="set-detail">BA, English Education</li>
        </div>
      </div>
    </div>
  );
};

export default Resume;
