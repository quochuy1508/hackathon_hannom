import React, { useState } from 'react';
import { Alert, TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';
import userImage from '../assets/user.png';
import { AntDesign } from '@expo/vector-icons';
function Challenge({ navigation }) {
	const categories = [
		{
			id: 1,
			avatar: userImage,
			title: 'Phòng 212423',
		},
		{
			id: 2,
			avatar: userImage,
			title: 'Phòng 212424',
		},
		{
			id: 3,
			avatar: userImage,
			title: 'Phòng 212425',
		},
		{
			id: 4,
			avatar: userImage,
			title: 'Phòng 212426',
		},
	];
	const [cate, setCate] = useState(categories);
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ marginBottom: 20 }}>
				<Menu navigation={navigation} style={styles.menu} />
				<TextInput
					style={styles.textInput}
					placeholder="Tìm phòng để thi đấu Hán Nôm"
					onChangeText={(text) => {
						console.log(text);
					}}
				/>
			</View>
			<ScrollView>
				<View style={{ width: 350 }}>
					{cate.map((category) => {
						return (
							<View
								key={category.id}
								style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderRadius: 30 }}
								onStartShouldSetResponder={() => navigation.navigate('RoomChallenge')}
							>
								<Image
									style={{
										width: 100,
										height: 100,
										borderTopLeftRadius: 30,
										borderBottomLeftRadius: 30,
									}}
									source={category.avatar}
								/>
								<Text
									style={{
										// backgroundColor: 'green',
										paddingVertical: 30,
										marginHorizontal: 50,
										fontSize: 20,
										fontWeight: '500',
										margin: 0,
									}}
								>
									{category.title}
								</Text>
							</View>
						);
					})}
				</View>
			</ScrollView>
			<AntDesign
				name="pluscircle"
				size={40}
				color="black"
				style={{ position: 'absolute', bottom: 10, right: 20 }}
			/>
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

export default Challenge;
