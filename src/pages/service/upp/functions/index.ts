type setStateType = React.Dispatch<React.SetStateAction<number>>;

export const handleScroll =
  (setFirstOpacity: setStateType, setSecondOpacity: setStateType) => () => {
    const currentScrollY: number = window.scrollY;
    const innerHeight = window.innerHeight;

    let scheduleAnimationFrame = false;

    if (scheduleAnimationFrame) return;

    scheduleAnimationFrame = true;

    if (currentScrollY >= innerHeight && currentScrollY <= 2 * innerHeight) {
      // h ~ 2h
      setFirstOpacity((1 / innerHeight) * currentScrollY - 1);
      setSecondOpacity(0);
    } else if (
      // 2h ~ 3h
      currentScrollY > 2 * innerHeight &&
      currentScrollY <= 3 * innerHeight
    ) {
      setFirstOpacity(1);
      setSecondOpacity(0);
    } else if (
      // 3h ~ 4h
      currentScrollY > 3 * innerHeight &&
      currentScrollY <= 4 * innerHeight
    ) {
      setFirstOpacity(4 - (1 / innerHeight) * currentScrollY);
      setSecondOpacity((1 / innerHeight) * currentScrollY - 3);
    } else if (
      // 4h ~ 5h
      currentScrollY > 4 * innerHeight &&
      currentScrollY <= 5 * innerHeight
    ) {
      setFirstOpacity(0);
      setSecondOpacity(1);
    } else if (
      // 5h ~ 6h
      currentScrollY > 5 * innerHeight &&
      currentScrollY <= 6 * innerHeight
    ) {
      setFirstOpacity(0);
      setSecondOpacity(6 - (1 / innerHeight) * currentScrollY);
    } else {
      setFirstOpacity(0);
      setSecondOpacity(0);
    }
    scheduleAnimationFrame = false;
  };
