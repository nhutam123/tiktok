import {
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

const Video1 = (_, ref) => {
  const video1Ref = useRef(null);

  useImperativeHandle(ref,() => ({
      play() {
        video1Ref?.current.play();
      },
      pause() {
        video1Ref?.current.pause();
      },
    }));
  return <video ref={video1Ref} src="/videos/video2.mp4" />;
};

export const Video = forwardRef(Video1);
