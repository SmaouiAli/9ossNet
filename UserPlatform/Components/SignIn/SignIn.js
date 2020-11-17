import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card, Button } from 'react-native-elements';



export default class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <View>
                <Card>
                    <Input
                        placeholder='Phone number'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Button
                        title="Sign In"
                    />
                </Card>
            </View>
        )
    }
}