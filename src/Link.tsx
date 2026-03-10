import { useLinkBuilder, useLinkProps } from '@react-navigation/native'
import { useMemo } from 'react'
import {
	Pressable as PressableBase,
	type PressableProps as PressableBaseProps,
	type StyleProp,
	View,
	type ViewStyle,
} from 'react-native'

export type LinkProps = Omit<PressableBaseProps, 'onPress' | 'style'> & {
	href: string
	style?: StyleProp<ViewStyle>
}

const Link = ({ href, ...props }: LinkProps) => {
	const { buildAction } = useLinkBuilder()

	const action = buildAction(href)
	const actionMemo = useMemo(() => buildAction(href), [href, buildAction])

	const linkProps = useLinkProps({
		href,
		action,
	})
	const linkPropsMemo = useLinkProps({
		href,
		action: actionMemo,
	})

	return (
		<View style={{ flexDirection: 'row', gap: 8 }}>
			<PressableBase {...props} {...linkProps} role="link" />

			<PressableBase
				{...props}
				{...linkPropsMemo}
				style={[
					{
						outlineWidth: 2,
						outlineColor: 'red',
						outlineStyle: 'dashed',
					},
					props.style,
				]}
				role="link"
			/>
		</View>
	)
}

export default Link
