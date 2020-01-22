import React from 'react';
import SplitText from 'react-pose-text';
import Wrapper from './Wrapper';

const wordPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
};

export default () => {
  return (
    <Wrapper>
      <div className="header">SERVICES</div>

      <div className="content">
        <div className="col">
          <div className="col_header">Design</div>

          <div className="description">
            <SplitText initialPose="exit" pose="enter" {...{ wordPoses }}>
              Balancing functionality and creativity to deliver brand and digital experiences that
              enhance your projects vision
            </SplitText>
          </div>
          <div className="features">
            <div className="item">
              <SplitText
                initialPose="exit"
                pose="enter"
                {...{
                  wordPoses: {
                    ...wordPoses,
                    enter: { ...wordPoses.enter, delay: 50 },
                  },
                }}
              >
                UI/UX Design
              </SplitText>
            </div>
            <div className="item">
              <SplitText
                initialPose="exit"
                pose="enter"
                {...{
                  wordPoses: {
                    ...wordPoses,
                    enter: { ...wordPoses.enter, delay: 100 },
                  },
                }}
              >
                UI/UX Design
              </SplitText>
              Visual Design
            </div>
            <div className="item">
              <SplitText
                initialPose="exit"
                pose="enter"
                {...{
                  wordPoses: {
                    ...wordPoses,
                    enter: { ...wordPoses.enter, delay: 150 },
                  },
                }}
              >
                Project Management
              </SplitText>
            </div>
            <div className="item">
              <SplitText
                initialPose="exit"
                pose="enter"
                {...{
                  wordPoses: {
                    ...wordPoses,
                    enter: { ...wordPoses.enter, delay: 200 },
                  },
                }}
              >
                Business solutions consultancy
              </SplitText>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col_header">
            <SplitText
              initialPose="exit"
              pose="enter"
              {...{
                wordPoses: {
                  ...wordPoses,
                  enter: { ...wordPoses.enter, delay: 250 },
                },
              }}
            >
              Engineering
            </SplitText>
          </div>
          <div className="description">
            <SplitText
              initialPose="exit"
              pose="enter"
              {...{
                wordPoses: {
                  ...wordPoses,
                  enter: { ...wordPoses.enter, delay: 300 },
                },
              }}
            >
              Pushing digital development boundaries while creating functional experiences that work
              for our partners and their customers
            </SplitText>
          </div>
          <div className="features">
            <div className="item">
              <SplitText
                initialPose="exit"
                pose="enter"
                {...{
                  wordPoses: {
                    ...wordPoses,
                    enter: { ...wordPoses.enter, delay: 350 },
                  },
                }}
              >
                Web Development
              </SplitText>
            </div>
            <SplitText
              initialPose="exit"
              pose="enter"
              {...{
                wordPoses: {
                  ...wordPoses,
                  enter: { ...wordPoses.enter, delay: 400 },
                },
              }}
            >
              Technical Support
            </SplitText>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
