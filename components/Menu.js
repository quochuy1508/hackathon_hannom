import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Menu({ navigation, style }) {
	return (
		<Ionicons
			name="ios-arrow-round-back"
			size={40}
			color="black"
			onPress={() => navigation.openDrawer()}
			style={style}
		/>
	);
}
