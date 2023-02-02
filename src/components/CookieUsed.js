// ../community-kit/src/CookieUsed/CookieUsed.js
import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, Text } from "@quarkly/widgets";
import { useOverrides } from "@quarkly/components"; // ../community-kit/src/CookieUsed/utils/storage.js

var item = "accept_cookies";

var get = () => {
	if (typeof window === "undefined") return false;
	console.log('storage.get');
	return localStorage.getItem(item);
};

var set = value => {
	if (typeof window === "undefined") return;
	console.log('storage.set');
	localStorage.setItem(item, value);
};

var storage_default = {
	get,
	set
}; // ../community-kit/src/CookieUsed/utils/getDefaultState.js

var getDefaultState = (isDev, show) => {
	console.log('getDefaultState');
	console.log('isDev', isDev);
	console.log(!storage_default.get());
	return isDev ? show : !storage_default.get();
};

var getDefaultState_default = getDefaultState; // ../community-kit/src/CookieUsed/props/overrides.js

var overrides_default = {
	Text: {
		kind: "Text",
		props: {
			color: "--color-light",
			"vertical-align": "middle",
			children: "We use cookies to improve your experience on our site. By using our site, you consent to out use of cookies."
		}
	},
	Button: {
		kind: "Button",
		props: {
			children: "Accept",
			color: "--color-primary",
			background: "--color-light"
		}
	}
}; // ../community-kit/src/CookieUsed/props/propsInfo.js

var propsInfo_default = {
	variant: {
		title: {
			en: "Variant",
			ru: "Вариант"
		},
		control: "radio-group",
		variants: [{
			title: {
				en: "Vertical",
				ru: "Вертикальный"
			},
			value: "vertical"
		}, {
			title: {
				en: "Horizontal",
				ru: "Горизонтальный"
			},
			value: "horizontal"
		}]
	},
	show: {
		title: {
			en: "Show",
			ru: "Показать"
		},
		category: "Test",
		control: "checkbox"
	}
}; // ../community-kit/src/CookieUsed/props/propsDefault.js

var propsDefault_default = {
	variant: "vertical",
	show: true,
	display: "flex"
}; // ../community-kit/src/CookieUsed/CookieUsed.js

var CookieUsed = ({
	variant,
	show: showFromProps,
	display,
	...props
}) => {
	const isDev = false;
	const [show, setShow] = useState(getDefaultState_default(isDev, showFromProps));
	const {
		override,
		rest
	} = useOverrides(props, overrides_default);
	const handleClick = useCallback(() => {
		if (isDev) return;
		storage_default.set(true);
		setShow(false);
	}, [isDev]);
	useEffect(() => {
		if (!isDev) return;
		setShow(showFromProps);
	}, [showFromProps, isDev]);
	console.log(show);
	return <Box
		display={show ? display : "none"}
		flex-direction={variant === "horizontal" ? "row" : "column"}
		justify-content="center"
		align-items="center"
		position="fixed"
		width="100%"
		background="--color-primary"
		padding="10px 0"
		bottom="0"
		z-index="1000"
		{...rest}
	>
		    
		<Text {...override("Text")} />
		    
		<Button margin-left={variant === "horizontal" && "10px"} onClick={handleClick} {...override("Button")} />
		  
	</Box>;
};

Object.assign(CookieUsed, {
	title: "CookieUsed",
	description: {
		en: "This component notifies users about the use of cookies."
	},
	overrides: overrides_default,
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default
});
var CookieUsed_default = CookieUsed;
export { CookieUsed_default as default };