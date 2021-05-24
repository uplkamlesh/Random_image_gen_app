import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {getimage} from './Codebase/getimage_function';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setpicture: require('./src/image/img1.jpg'),
    };
  }
  getimage = () => {
    var number = Math.floor(Math.random() * 21) + 1;
    console.log(number);
    switch (number) {
      case 1:
        this.setState({setpicture: require(`./src/image/img1.jpg`)});
        break;
      case 2:
        this.setState({setpicture: require(`./src/image/img2.jpg`)});
        break;
      case 3:
        this.setState({setpicture: require(`./src/image/img3.jpg`)});
        break;
      case 4:
        this.setState({setpicture: require('./src/image/img4.jpg')});
        break;
      case 5:
        this.setState({setpicture: require('./src/image/img5.jpg')});
        break;
      case 6:
        this.setState({setpicture: require('./src/image/img6.jpg')});
        break;
      case 7:
        this.setState({setpicture: require('./src/image/img7.jpg')});
        break;
      case 8:
        this.setState({setpicture: require('./src/image/img8.jpg')});
        break;
      case 9:
        this.setState({setpicture: require('./src/image/img9.jpg')});
        break;
      case 10:
        this.setState({setpicture: require('./src/image/img10.jpg')});
        break;
      case 11:
        this.setState({setpicture: require(`./src/image/img11.jpg`)});
        break;
      case 12:
        this.setState({setpicture: require('./src/image/img12.jpg')});
        break;
      case 13:
        this.setState({setpicture: require('./src/image/img13.jpg')});
        break;
      case 14:
        this.setState({setpicture: require('./src/image/img14.jpg')});
        break;
      case 15:
        this.setState({setpicture: require('./src/image/img15.jpg')});
        break;
      case 16:
        this.setState({setpicture: require('./src/image/img16.jpg')});
        break;
      case 17:
        this.setState({setpicture: require('./src/image/img17.jpg')});
        break;
      case 18:
        this.setState({setpicture: require('./src/image/img18.jpg')});
        break;
      case 19:
        this.setState({setpicture: require('./src/image/img19.jpg')});
        break;
      case 20:
        this.setState({setpicture: require('./src/image/img20.jpg')});
        break;
      case 21:
        this.setState({setpicture: require('./src/image/img21.jpg')});
        break;
    }
  };
  render() {
    return (
      <View>
        <Image
          source={this.state.setpicture}
          style={{
            height: 685,
            width: 360,
            alignSelf: 'center',
            resizeMode: 'cover',
          }}></Image>
        <TouchableOpacity
          onPress={this.getimage}
          style={{backgroundColor: '#38d185', height: 60}}>
          <Text
            style={{
              alignSelf: 'center',
              top: 5,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Generate Image
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
