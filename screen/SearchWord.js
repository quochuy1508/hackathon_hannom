import React, { useState, useEffect, Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import userImage from '../assets/user.png';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'native-base';
class SearchWord extends Component {
	constructor(props: Object) {
		super(props);
		this.state = { timer: 20, answer: '', image: require('../assets/download1.png'), nextQuestion: 'ok' };
	}

	render() {
		return (
			<View style={{ flex: 1, marginTop: 30, fontSize: 20, marginLeft: 0 }}>
				<View style={{ flexDirection: 'row' }}>
					<AntDesign name="arrowleft" size={40} color="black" />
					<Text style={{ fontSize: 20, margin: 10 }}>Nghĩa của từ</Text>
				</View>
				<View
					style={{
						borderBottomColor: 'black',
						borderBottomWidth: 1,
						borderWidth: 1,
					}}
				/>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Image style={{ width: 150, height: 150 }} source={require('../assets/download1.png')} />
				</View>
				<View style={{ flex: 2, alignItems: 'center', paddingTop: 60 }}>
					<Image source={require('../assets/download3.png')} />
				</View>
				<View>
					<Image source={require('../assets/download2.png')} />
				</View>

				<Button
					style={{
						backgroundColor: 'gray',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: 80,
						marginHorizontal: 140,
						marginBottom: 20,
						marginTop: 20,
					}}
				>
					<Text style={{ alignItems: 'center' }}>Từ tiếp theo</Text>
				</Button>
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

export default SearchWord;
