import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import dataeng from "./dataproject";
import datafr from "./datafrancais";

import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  getProjectsByLanguage(language) {
    
    if (language == 'eng') {
      return (
        <>
          {dataeng.projects.map((project, index) => {
            console.log(project)
              // Check if the project's title matches the selected title
              if (project.title === this.props.data.title) {
                return (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #ddd",
                      margin: "20px",
                      padding: "10px",
                    }}
                  >
                    <h2>{project.title}</h2>
                    <p>{project.startDate}</p>
                    <div
                      className="modal-description"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    ></div>
                  </div>
                );
              }
              return null; // Do not render anything if the title doesn't match
            })}
                
      
                
              
        </>
      ); // English data
    } else {
      return (
        <>
         {datafr.projects.map((project, index) => {
              // Check if the project's title matches the selected title
              if (project.title === this.props.data.title) {
                return (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #ddd",
                      margin: "20px",
                      padding: "10px",
                    }}
                  >
                    <h2>{project.title}</h2>
                    <h2>{project.startDate}</h2>
                    <div
                      className="modal-description"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    ></div>
                  </div>
                );
              }
              return null; // Do not render anything if the title doesn't match
            })}
        </>
      ); // French data
    }
  }
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      var language = this.props.language;
      console.log(language)
      var getPro = this.getProjectsByLanguage(language);
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description">{getPro}</p>
            
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
