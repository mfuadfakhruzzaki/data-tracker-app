import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity className="p-4">
        <View>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;
