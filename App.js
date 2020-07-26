import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from './screen/HomeScreen';
import IndexPage from './screen/IndexPage';
import Chatbot from './screen/Chatbot';
import Challenge from './screen/Challenge';
import RoomChallenge from './screen/RoomChallenge';
import LearningStep from './screen/LearningStep';
import SearchWord from './screen/SearchWord';

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
			<DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
		</DrawerContentScrollView>
	);
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="IndexPage" component={IndexPage} />
			<Drawer.Screen name="HomeScreen" component={HomeScreen} />
			<Drawer.Screen name="Chatbot" component={Chatbot} />
			<Drawer.Screen name="Challenge" component={Challenge} />
			<Drawer.Screen name="RoomChallenge" component={RoomChallenge} />
			<Drawer.Screen name="LearningStep" component={LearningStep} />
			<Drawer.Screen name="SearchWord" component={SearchWord} />
		</Drawer.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyDrawer />
		</NavigationContainer>
	);
}
