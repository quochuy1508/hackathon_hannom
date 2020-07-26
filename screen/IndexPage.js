import * as React from 'react';
import { TextInput, Text, View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

function IndexPage({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
			{/* Logo APP */}
			<View>
				<Image source={require('../assets/logo.png')} />
			</View>
			<View>
				<View
					style={{
						width: 400,
						flexDirection: 'row',
						justifyContent: 'space-between',

						marginLeft: 100,
						marginVertical: 20,
					}}
				>
					<View style={{ flex: 1 }}>
						<FontAwesome5
							name="leanpub"
							size={24}
							color="black"
							onPress={() => navigation.navigate('HomeScreen')}
						/>
						<Text>Học tiếng</Text>
					</View>
					<View style={{ flex: 1 }}>
						<MaterialIcons name="event-available" size={24} color="black" />
						<Text>Sự kiện</Text>
					</View>
					<View style={{ flex: 1 }}>
						<FontAwesome5
							name="blogger"
							size={24}
							color="black"
							onPress={() => Linking.openURL('https://www.facebook.com/groups/1087253598032345/')}
						/>
						<Text>Blog</Text>
					</View>
				</View>

				<View
					style={{
						width: 400,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginLeft: 100,
					}}
				>
					<View style={{ flex: 1 }}>
						<FontAwesome5
							name="mountain"
							size={24}
							color="black"
							onPress={() => navigation.navigate('Challenge')}
						/>
						<Text>Challenge</Text>
					</View>
					<View style={{ flex: 1 }}>
						<MaterialIcons
							name="chat-bubble-outline"
							size={24}
							color="black"
							onPress={() => navigation.navigate('Chatbot')}
						/>
						<Text>Chat</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Ionicons name="ios-people" size={24} color="black" />
						<Text>People</Text>
					</View>
				</View>
			</View>
			<View style={{ marginTop: 20 }}>
				<Image source={require('../assets/gioithieu.png')} />
			</View>

			<View style={{ marginTop: 20 }}>
				<Text style={{ marginLeft: 30, fontWeight: '700' }}>Bài viết nổi bật</Text>
				<View>
					<Image style={{ resizeMode: 'contain' }} source={require('../assets/artical.png')} />
				</View>
			</View>
		</View>
	);
}

export default IndexPage;
