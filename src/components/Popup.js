// src/Popup/utils/context.js
import { createContext } from "react";
var PopupContext = createContext(void 0);
var context_default = PopupContext; // src/Popup/Popup.js

import React3, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Icon, Button, useConstructorMode } from "@quarkly/widgets"; // src/Popup/props/overrides.js

import { FiX } from "react-icons/fi";
var overrides_default = {
	Popup: {
		kind: "Box",
		props: {
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			"align-items": "center",
			"justify-content": "center",
			display: "flex",
			position: "fixed",
			"z-index": "105"
		}
	},
	"Popup :open": {
		kind: "Box",
		props: {
			"pointer-events": "all",
			visibility: "visible",
			opacity: "1"
		}
	},
	"Popup :closed": {
		kind: "Box",
		props: {
			"pointer-events": "none",
			visibility: "hidden",
			opacity: "0"
		}
	},
	Wrapper: {
		kind: "Box",
		props: {
			"min-width": "320px",
			background: "#FFFFFF",
			"box-shadow": `
            0 14px 28px rgba(0,0,0,0.25),
            0 10px 10px rgba(0,0,0,0.22)
        `,
			"border-radius": "4px",
			position: "relative",
			overflow: "hidden",
			display: "flex",
			"z-index": "107"
		}
	},
	"Wrapper :open": {
		kind: "Box",
		props: {
			transform: "scale(1)"
		}
	},
	"Wrapper :closed": {
		kind: "Box",
		props: {
			transform: "scale(.7)"
		}
	},
	Content: {
		kind: "Box",
		props: {
			"padding-top": "40px",
			width: "100%",
			"min-width": "0px",
			"min-height": "0px",
			"max-height": "100%",
			"overflow-x": "hidden",
			"overflow-y": "auto"
		}
	},
	Overlay: {
		kind: "Box",
		props: {
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			background: "rgba(0,0,0, .3)",
			position: "fixed",
			"z-index": "106"
		}
	},
	"Button Close": {
		kind: "Icon",
		props: {
			category: "fi",
			defaultIcon: FiX,
			size: "24px",
			color: "--dark",
			top: "0",
			right: "0",
			padding: "8px",
			background: "none",
			"user-select": "none",
			cursor: "pointer",
			position: "absolute",
			"z-index": "109"
		}
	},
	"Button Open": {
		kind: "Button",
		props: {
			children: "Open Popup"
		}
	}
}; // src/Popup/props/propsInfo.js

var propsInfo_default = {
	animDuration: {
		title: {
			en: "Show/hide animation duration",
			ru: "Длительность появления и скрытия"
		},
		control: "input",
		variants: ["0s", "0.1s", "0.2s", "0.3s", "0.5s", "1s"],
		type: "text",
		category: "Main",
		weight: 1
	},
	animFunction: {
		title: {
			en: "Animation timing function",
			ru: "Функция сглаживания анимации"
		},
		control: "input",
		variants: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"],
		type: "text",
		category: "Main",
		weight: 1
	},
	onloadShow: {
		title: {
			en: "Show a pop-up when loading",
			ru: "Показать попап при загрузке"
		},
		control: "checkbox",
		category: "Test",
		weight: 1
	}
}; // src/Popup/props/propsDefault.js

var propsDefault_default = {
	animDuration: "0.15s",
	animFunction: "linear",
	onloadShow: false
}; // src/utils/isEmptyChildren.js

import React from "react";

var isPlaceholder = child => child && child.props && child.props.text === "child placeholder";

var isOverride = child => child && child.props && typeof child.props.slot === "string" && child.props.slot.length > 0;

function isEmptyChildren(children) {
	const childrenArray = React.Children.toArray(children);
	return !childrenArray.some(child => child && !isPlaceholder(child) && !isOverride(child));
} // src/utils/pick.js


var pick = (obj, ...keys) => keys.reduce((result, key) => {
	result[key] = obj[key];
	return result;
}, {});

var pick_default = pick; // src/utils/toggleScroll.js

var prevBodyStyles = {};

var disable = () => {
	const {
		body
	} = window.document;
	const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
	prevBodyStyles = pick_default(body.style, "position", "left", "top", "right");
	Object.assign(body.style, {
		position: "fixed",
		left: "0",
		top: `-${window.scrollY}px`,
		right: `${scrollWidth}px`
	});
};

var enable = () => {
	const {
		body
	} = window.document;
	const scrollY = body.style.top;
	Object.assign(body.style, prevBodyStyles);
	window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

var toggleScroll_default = {
	disable,
	enable
}; // src/utils/getAPI.js

var getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

var getAPI_default = getAPI; // src/ComponentNotice.js

import React2 from "react";
import atomize from "@quarkly/atomize";
var Message = atomize.div();

var ComponentNotice = ({
	message,
	...props
}) => <Message
	padding="16px"
	width="100%"
	font="--font-base"
	font-style="italic"
	color="--color-grey"
	background-color="--color-light"
	border="1px dashed --color-lightD2"
	box-sizing="border-box"
	{...props}
>
	{message || "Some Text"}
</Message>;

var ComponentNotice_default = atomize(ComponentNotice)({
	name: "Component Notice",
	propInfo: {
		message: {
			title: "Message",
			control: "input",
			type: "text",
			weight: 1
		}
	}
}); // src/Popup/Popup.js

var PopupComponent = ({
	animDuration,
	animFunction,
	onloadShow,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides_default);
	const [isOpen, setOpen] = useState(onloadShow);
	const isEmpty = useMemo(() => isEmptyChildren(children), [children]);
	const contentRef = useRef();
	const mode = useConstructorMode();
	useEffect(() => {
		setOpen(onloadShow);
		const node = contentRef.current;
		return () => toggleScroll_default.enable(node);
	}, [onloadShow]);
	const popupTransition = useMemo(() => isOpen ? `visibility ${animDuration} step-start, opacity ${animDuration} ${animFunction}` : `visibility ${animDuration} step-end, opacity ${animDuration} ${animFunction}`, [isOpen, animFunction, animDuration]);
	const wrapperTransition = useMemo(() => `transform ${animDuration} ${animFunction}`, [animFunction, animDuration]);
	const openPopup = useCallback(() => {
		const isDev = getAPI_default().mode === "development";
		if (isDev && mode === "constructor") return;
		contentRef.current.scrollTo(0, 0);
		toggleScroll_default.disable(contentRef.current);
		setOpen(true);
	}, [mode]);
	const closePopup = useCallback(() => {
		const isDev = getAPI_default().mode === "development";
		if (isDev && mode === "constructor") return;
		toggleScroll_default.enable(contentRef.current);
		setOpen(false);
	}, [mode]);
	const context = useMemo(() => ({
		isOpen,
		openPopup,
		closePopup
	}), [isOpen, openPopup, closePopup]);
	return <Box {...rest}>
		    
		<Button onClick={openPopup} {...override("Button Open")}>
			{override("Button Open").children}
		</Button>
		    
		<Box {...override("Popup", `Popup ${isOpen ? ":open" : ":closed"}`)} transition={popupTransition}>
			      
			<Box onClick={closePopup} {...override("Overlay", `Overlay ${isOpen ? ":open" : ":closed"}`)} />
			      
			<Box {...override("Wrapper", `Wrapper ${isOpen ? ":open" : ":closed"}`)} transition={wrapperTransition}>
				        
				<Icon {...override("Button Close")} onClick={closePopup} />
				        
				<context_default.Provider value={context}>
					<Box {...override("Content")} ref={contentRef}>
						{children}
					</Box>
				</context_default.Provider>
				        
				{isEmpty && <ComponentNotice_default message="Drag any component here" />}
				      
			</Box>
			    
		</Box>
		  
	</Box>;
};

Object.assign(PopupComponent, {
	title: "Popup",
	description: {
		en: "This is a pop-up window that appears when clicking on a button",
		ru: "Всплывающее окно, которое появляется по клику на кнопку"
	},
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default,
	overrides: overrides_default
});
var Popup_default = PopupComponent;
export { context_default as PopupContext, Popup_default as default };