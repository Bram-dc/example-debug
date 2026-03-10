import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Link from './Link'

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home Screen</Text>
			<Link href="/profile" style={styles.button}>
				<Text style={styles.buttonText}>Go to Profile</Text>
			</Link>
		</View>
	)
}

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profile Screen</Text>
			<Link href="/" style={styles.button}>
				<Text style={styles.buttonText}>Go Home</Text>
			</Link>
		</View>
	)
}

const MainDrawer = createDrawerNavigator({
	screens: {
		Home: {
			screen: HomeScreen,
			linking: {
				path: '/',
			},
		},
		Profile: {
			screen: ProfileScreen,
			linking: {
				path: '/profile',
			},
		},
	},
})

const RootStack = createNativeStackNavigator({
	screens: {
		MainDrawer: {
			screen: MainDrawer,
			options: {
				headerShown: false,
			},
		},
	},
})

export type RootStackType = typeof RootStack

declare module '@react-navigation/core' {
	interface RootNavigator extends RootStackType {}
}

const Navigation = createStaticNavigation(RootStack)

export default function App() {
	return <Navigation />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	button: {
		backgroundColor: '#007AFF',
		padding: 10,
		borderRadius: 8,
		marginTop: 10,
		minWidth: 150,
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
	},
})
