
import { CSSTransition } from 'react-transition-group';

const FadeIn = ({ children, duration }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={duration}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  );
};

export default FadeIn;
