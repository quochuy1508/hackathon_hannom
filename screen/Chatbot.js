import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, Button, Image } from 'react-native';

export default function Chatbot() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text:
					'Ký tự này được dùng để diễn tả chữ "phở". Bộ Mễ 米 bên trái cho thấy ý nghĩa của ký tự liên quan đến gạo. Phần 頗 còn lại dùng để gợi âm.',
				createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://facebook.github.io/react/img/logo_og.png',
				},
				image:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nom_Character_V04-5055.svg/1200px-Nom_Character_V04-5055.svg.png',
				// You can also add a video prop:
				// Mark the message as sent, using one tick
				sent: true,
				// Mark the message as received, using two tick
				received: true,
				// Mark the message as pending with a clock loader
				pending: true,
				// Any additional custom parameters are passed through
			},
			{
				_id: 2,
				text: 'Chào bạn đến với mục chat: Mỗ ngày học một tiếng hán nôm ',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://facebook.github.io/react/img/logo_og.png',
				},
				quickReplies: {
					type: 'radio', // or 'checkbox',
					keepIt: true,
					values: [
						{
							title: '😋 Tra tử điển',
							value: 'yes',
						},
						{
							title: '📷 Xem hình ảnh tiếng hán nôm!',
							value: 'yes_picture',
						},
					],
				},
				user: {
					_id: 2,
					name: 'React Native',
				},
			},
			{
				_id: 3,
				text: 'Đây là hệ thống chatbot học tiếng hán nôm tự động. Chúc bạn một ngày mới vui vẻ',
				createdAt: new Date(),
				quickReplies: {
					type: 'checkbox', // or 'radio',
					values: [
						{
							title: ' ',
							value: 'yes',
						},
						{
							title: 'Yes, let me show you with a picture!',
							value: 'yes_picture',
						},
					],
				},
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://facebook.github.io/react/img/logo_og.png',
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		</View>
	);
}
{
	/* <View>
			<Image sourse={require('../assets/chatbot.png')} style={{ width: 100, height: 100 }} />	</View> */
}
