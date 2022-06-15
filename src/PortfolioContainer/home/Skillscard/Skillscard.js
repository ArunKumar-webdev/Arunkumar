import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./Skillscard.css";

export default function () {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center pb-5">
          <div className="col-md-2">
            <div
              className="highlighted-text skillposition"
              style={{ fontFamily: "Poppins Light" , fontSize: '3rem' }}
            >
              Skills
            </div>
            <div style={{ color: "white", width:'20rem' }}>I can say i’m quite good at</div>
          </div>
        </div>
        <div className="row">
          <div
            className="card mb-3 col-xl-6 col-lg-6 col-sm-6 mx-auto"
            style={{ maxWidth: "30rem", margin: 'auto' }}
          >
            <div className="card-header">FrontEnd</div>
            <div className="card-body">
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem" }}>HTML</span>
                <Progress
                  className="pl-3"
                  percent={90}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>Bootstrap CSS</span>
                <Progress
                  className="pl-3"
                  percent={90}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>Tailwind CSS</span>
                <Progress
                  className="pl-3"
                  percent={90}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>CSS</span>
                <Progress
                  className="pl-3"
                  percent={80}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>JavaScript</span>
                <Progress
                  className="pl-3"
                  percent={80}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>ReactJs</span>
                <Progress
                  className="pl-3"
                  percent={70}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem", fontFamily: 'Poppins Regular', lineHeight: '30px' }}>TypeScript</span>
                <Progress
                  className="pl-3"
                  percent={50}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="card mb-3 col-xl-6 col-lg-6 col-sm-6 mx-auto"
            style={{ maxWidth: "30rem", margin: 'auto' }}
          >
            <div className="card-header">UI Design</div>
            <div className="card-body">
              <div style={{ display: "flex" }}>
                <span style={{ width: "20rem" }}>Figma</span>
                <Progress
                  className="pl-3"
                  percent={80}
                  theme={{
                    success: {
                      symbol: "?‍",
                      color: "rgb(223, 105, 180)",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
