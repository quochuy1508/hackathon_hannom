import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Menu from '../components/Menu';

function HomeScreen({ navigation }) {
	const categories = [
		{
			id: 1,
			avatar: require('../assets/homepage/khoidau.png'),
			title: 'Khởi đầu',
		},
		{
			id: 2,
			avatar: require('../assets/homepage/thethao.png'),
			title: 'Thể Thao',
		},
		{
			id: 3,
			avatar: require('../assets/homepage/anuong.png'),
			title: 'Ăn Uống',
		},
		{
			id: 4,
			avatar: require('../assets/homepage/giadinh.png'),
			title: 'Gia Đình',
		},
	];
	const [cate, setCate] = useState(categories);
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ marginBottom: 20 }}>
				<Menu navigation={navigation} style={styles.menu} />
				<TextInput
					style={styles.textInput}
					placeholder="Nhập danh mục bạn mong muốn"
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
								onStartShouldSetResponder={() => navigation.navigate('LearningStep')}
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

export default HomeScreen;
