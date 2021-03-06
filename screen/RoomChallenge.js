import React, { useState, useEffect, Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import userImage from '../assets/user.png';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'native-base';
class RoomChallenge extends Component {
	constructor(props: Object) {
		super(props);
		this.state = { timer: 20, answer: '', image: require('../assets/chuchuaviet.png'), nextQuestion: '' };
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState((prevState) => ({ timer: prevState.timer - 1 }));
			if (this.state.timer === 0) {
				this.setState({
					answer: 'Đáp án',
					image: require('../assets/chudaviet.png'),
					nextQuestion: 'Câu hỏi tiếp theo',
				});
			}
		}, 1000);
	}

	componentDidUpdate() {
		if (this.state.timer === 0) {
			clearInterval(this.interval);
		}
	}

	componentWillUnmount() {
		if (this.state.timer === 0) {
		}
		clearInterval(this.interval);
	}
	render() {
		return (
			<View style={{ flex: 1, marginTop: 50, fontSize: 20, marginLeft: 20 }}>
				<View>
					<Text style={{ fontSize: 20, margin: 10 }}>Thời gian còn lại: {this.state.timer} giây</Text>
					<Text style={{ fontSize: 20, margin: 10 }}>Câu hỏi 1/10</Text>
					<Text style={{ fontSize: 20, margin: 10 }}>Hãy viết chữ này</Text>
				</View>

				<View style={{ flex: 1, alignItems: 'center', margin: 50 }}>
					<Text style={{ position: 'relative', bottom: 20, fontSize: 32 }}>{this.state.answer}</Text>
					<Image source={this.state.image} />
					<Button
						style={{
							backgroundColor: 'gray',
							alignItems: 'center',
							justifyContent: 'center',
							marginLeft: 60,
							marginTop: 30,
						}}
					>
						<Text>{this.state.nextQuestion}</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		position: 'relative',
		top: 45,
		left: -30,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#20232a',
		borderRadius: 6,
		width: 280,
		height: 40,
		marginLeft: 20,
	},
});

export default RoomChallenge;
