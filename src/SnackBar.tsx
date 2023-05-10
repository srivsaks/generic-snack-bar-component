import { useEffect, useState } from "react";
import styled from "styled-components";

const SnackBarDiv = styled.div<{ time: string }>`
  background: slateblue;
  height: 30px;
  text-align: center;
  color: white;
  padding: 10px;
  position: fixed;
  z-index: 1;
  bottom: 1%;
  left: 50%;
  animation: fadein 0.5s linear,
    fadeout 0.5s
      ${(props) => {
        console.log(props.time);
        return props.time;
      }}
      linear;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    100% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
  }
`;

const SnackBar = ({ open, message, duration, onClose }) => {
  const [show, setShow] = useState(open);
  const [timerId, setTimerId] = useState(null);

  const time = `${duration - 0.5 + 0.1}s`;

  useEffect(() => {
    setShow(open);
  }, [open]);

  useEffect(() => {
    if (show) {
      const id = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, duration * 1000);
      setTimerId(id);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [show]);

  return <>{show && <SnackBarDiv time={time}>{message}</SnackBarDiv>}</>;
};
export default SnackBar;
