import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import dataeng from "./dataproject"
import datafr from "./datafrancais"
class Experience extends Component {

  getExperienceByLanguage(language) {

    if (language === "eng") {
      return (
        <>
          {dataeng.experience.map((e, index) => {

            return (
              <div dangerouslySetInnerHTML={{ __html: e.description }}
              ></div>
            )

          })}
        </>
      ); // English data
    } else{
      return (
        <>
          {datafr.experience.map((e, index) => {

            return (
              <div dangerouslySetInnerHTML={{ __html: e.description }}
              ></div>
            )

          })}
        </>
      );
    }
  }
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var language = this.props.currentLanguage;
      var getExp = this.getExperienceByLanguage(language);
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;





        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}

            </h4>
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {getExp}
              
            </h3>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}

            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
