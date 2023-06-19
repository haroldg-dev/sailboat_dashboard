import { Spring, animated } from "@react-spring/web";

export const animations = {
  fadeToLeft: {
    from: {
      opacity: 0,
      x: 50,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  },
  fadeFromBottom: {
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  },
};

const Animatable = ({ children, animation = animations.fadeToLeft }) => (
  <Spring from={animation.from} to={animation.to}>
    {(style) => <animated.div style={style}>{children}</animated.div>}
  </Spring>
);

export default Animatable;
