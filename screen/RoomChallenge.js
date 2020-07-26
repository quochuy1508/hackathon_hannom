import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import userImage from '../assets/user.png';
import { AntDesign } from '@expo/vector-icons';
function RoomChallenge({ navigation }) {
	const [milisecond, setMilisecone] = useState(20);

	// const countDown = setInterval(() => {
	// 	setMilisecone(milisecond - 1);
	// 	if (milisecond <= 0) {
	// 		clearInterval(countDown);
	// 		console.log('done!');
	// 		return;
	// 	}
	// }, 1000);
	return (
		<View style={{ flex: 1, marginTop: 50, fontSize: 20, marginLeft: 20 }}>
			<View>
				<Text style={{ fontSize: 20, margin: 10 }}>Thời gian còn lại: {milisecond} giây</Text>
				<Text style={{ fontSize: 20, margin: 10 }}>Câu hỏi 1/10</Text>
				<Text style={{ fontSize: 20, margin: 10 }}>Hãy viết chữ này</Text>
			</View>

			<View style={{ flex: 1, alignItems: 'center', margin: 50 }}>
				<Image source={require('../assets/chuchuaviet.png')} />
			</View>
		</View>
	);
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
