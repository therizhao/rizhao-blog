import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { Fade } from '@material-ui/core';

const ParticlesWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  opacity: ${props => (props.isShowBubbles ? 1 : 0)};
  transition: all 1s;

  & > div {
    width: 100%;
    height: 100%;
  }

  canvas {
    pointer-events: none;
  }
`;

const Bubbler = ({ children }) => {
  const [isShowBubbles, setIsShowBubbles] = React.useState(false);

  if (typeof window !== `undefined`) {
    React.useEffect(() => {
      setIsShowBubbles(false);
    }, [window.location.pathname]);
  }

  return (
    <>
      <div onMouseOver={() => setIsShowBubbles(100)}>{children}</div>
      <Fade in={isShowBubbles} timeout={{ enter: 1000, exit: 0 }}>
        <ParticlesWrapper>
          {isShowBubbles && (
            <Particles
              params={{
                particles: {
                  number: {
                    value: (window.screen.width * window.screen.height) / 50000,
                  },
                  opacity: {
                    random: false,
                    value: 0,
                    anim: false,
                  },
                  size: {
                    value: 50,
                    random: true,
                    anim: {
                      size_min: 30,
                    },
                  },
                  shape: {
                    type: 'circle',
                    stroke: {
                      width: 1,
                      color: 'black',
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    enable: true,
                    bounce: true,
                  },
                },
              }}
            />
          )}
        </ParticlesWrapper>
      </Fade>
    </>
  );
};
export default Bubbler;
