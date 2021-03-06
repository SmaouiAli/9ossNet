import React, { Component, useState } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Card, Button, Avatar } from "react-native-elements";
import Axios from "axios";
import store from "../../store.js";
export default class Uploadimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      status: "",
      up: true
    };
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleSubmitFile = this.handleSubmitFile.bind(this);
  }
  handleFileInputChange(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "angular_cloudinary");
    data.append("cloud_name", "codexmaker");
    this.setState({ image: data });
    console.log(data);
    console.log(file);
    this.setState({
      up: !this.state.up
    })
  }

  async handleSubmitFile(e) {
    e.preventDefault();
    const storedData = store.getState();
   await Axios.post(
      "https://api.cloudinary.com/v1_1/codexmaker/image/upload",
      this.state.image
    ).then((res) => {
      this.props.imageChange(res.data.url);
      Axios.post("http://localhost:5000/users/update/image", {
        image: res.data.url,
        phone: window.localStorage.phone,
      })
        .then((res) => {
          console.log("image updated!");
        })
        .catch((err) => {
          console.log(err);
        });
    });
    this.setState({ status: "shown" });
  }
  render() {
    return (
      <View>
        <Card>
          <Text>Update Profile Picture</Text>
          <form onSubmit={this.handleSubmitFile} className="form">
          {this.state.up && <input
              id="fileInput"
              type="file"
              name="image"
              onChange={this.handleFileInputChange}
              className="form-input"
            /> }
           {!this.state.up &&  <View><button className="btn" type="submit">
              Submit
            </button> </View>} 
          </form>
        </Card>
      </View>
    );
  }
}
