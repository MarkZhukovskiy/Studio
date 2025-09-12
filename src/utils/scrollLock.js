export const createBodyScrollLocker = () => {
  let lockCount = 0;
  let previousOverflow = '';

  const lock = () => {
    if (typeof document === 'undefined') return;
    if (lockCount === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    lockCount += 1;
  };

  const unlock = () => {
    if (typeof document === 'undefined') return;
    if (lockCount > 0) {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = previousOverflow;
        previousOverflow = '';
      }
    }
  };

  return { lock, unlock };
};

export const bodyScrollLocker = createBodyScrollLocker(); 