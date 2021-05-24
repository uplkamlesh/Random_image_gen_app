export const getimage = () => {
  var number = Math.floor(Math.random() * 2) + 1;
  console.log(number);
  switch (number) {
    case 1:
      this.setState({setpicture: require(`../src/image/img1.jpg`)});
      break;
    case 2:
      this.setState({setpicture: require(`../src/image/img2.jpg`)});
      break;
  }
};
