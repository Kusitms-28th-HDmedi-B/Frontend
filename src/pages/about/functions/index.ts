type setStateType = React.Dispatch<React.SetStateAction<number>>;

export const handleScroll =
  (setFirstOpacity: setStateType, setSecondOpacity: setStateType) => () => {
    const currentScrollY: number = window.scrollY;
    const innerHeight = window.innerHeight;

    let scheduleAnimationFrame = false;
    if (scheduleAnimationFrame) return;
    scheduleAnimationFrame = true;

    if (currentScrollY <= innerHeight) {
      setFirstOpacity(1 - (1 / innerHeight) * currentScrollY);
      setSecondOpacity((1 / innerHeight) * currentScrollY);
    } else if (
      innerHeight <= currentScrollY &&
      currentScrollY <= 2 * innerHeight
    ) {
      setFirstOpacity(0);
      setSecondOpacity(2 - (1 / innerHeight) * currentScrollY);
    } else {
      setFirstOpacity(0);
      setSecondOpacity(0);
    }
    scheduleAnimationFrame = false;
  };
