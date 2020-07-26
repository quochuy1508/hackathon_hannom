import React, { useState, useEffect, Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import userImage from '../assets/user.png';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'native-base';
class LearningStep extends Component {
	constructor(props: Object) {
		super(props);
		this.state = { timer: 20, answer: '', image: require('../assets/learningstep.png'), nextQuestion: 'ok' };
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState((prevState) => ({ timer: prevState.timer - 1 }));
			if (this.state.timer === 0) {
				this.setState({
					answer: 'Đáp án',
					image: require('../assets/learningstep.png'),
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
			<View style={{ flex: 1, marginTop: 30, fontSize: 20, marginLeft: 0 }}>
				<View style={{ flexDirection: 'row' }}>
					<AntDesign name="arrowleft" size={40} color="black" />
					<Image source={require('../assets/noimage.png')} />
					<Text style={{ fontSize: 20, margin: 10 }}>Khởi đầu</Text>
				</View>
				<View
					style={{
						borderBottomColor: 'black',
						borderBottomWidth: 1,
						borderWidth: 1,
					}}
				/>
				<View style={{ flex: 1, alignItems: 'center', margin: 50 }}>
					<Text style={{ position: 'relative', bottom: 20, fontSize: 32 }}>{this.state.answer}</Text>
					<Image source={this.state.image} />
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						marginTop: 100,
						justifyContent: 'space-around',
					}}
				>
					<Button
						style={{
							backgroundColor: 'gray',
							alignItems: 'center',
							justifyContent: 'center',
							width: 100,
						}}
						onPress={() => {
							this.props.navigation.navigate('SearchWord');
						}}
					>
						<Text>Tra cứu</Text>
					</Button>
					<Button
						style={{
							backgroundColor: 'gray',
							alignItems: 'center',
							justifyContent: 'center',
							width: 100,
						}}
					>
						<Text>Từ tiếp theo</Text>
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
	lineStyle: {
		borderWidth: 0.5,
		borderColor: 'black',
		margin: 10,
	},
});

export default LearningStep;
