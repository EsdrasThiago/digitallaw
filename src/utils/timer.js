const timer = () => {
  const oneSecond = 1000;
  setInterval(() => {
    this.setState((old) => ({ timer: old.timer - 1 }));
  }, oneSecond);
};

export default timer;