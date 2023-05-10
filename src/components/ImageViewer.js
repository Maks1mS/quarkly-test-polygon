// src/ImageViewer/ImageViewer.js
import React, { useCallback as useCallback2, useEffect as useEffect2, useRef, useState as useState2 } from "react";
import atomize from "@quarkly/atomize";
import { Box, Image, Text, Icon, Button, useConstructorMode } from "@quarkly/widgets";
import { useOverrides } from "@quarkly/components"; // src/ImageViewer/props/propsInfo.js

var propsInfo_default = {
	src: {
		title: {
			en: "Image src",
			ru: "Ссылка на изображение"
		},
		category: "Image",
		control: "image",
		weight: 1
	},
	size: {
		title: {
			en: "Size",
			ru: "Размер"
		},
		category: "Image",
		control: "radio-group",
		variants: [{
			title: "Scale",
			value: "scale"
		}, {
			title: "Real size",
			value: "real"
		}],
		weight: 1
	},
	duration: {
		title: {
			en: "Duration",
			ru: "Длительность"
		},
		category: "Animation",
		control: "input",
		variants: ["0ms", "100ms", "300ms", "500ms", "700ms", "1000ms"]
	},
	timingFunction: {
		title: {
			en: "Timing function",
			ru: "Функция сглаживания"
		},
		category: "Animation",
		control: "input",
		variants: ["ease", "ease-in", "ease-out"]
	},
	showCaption: {
		title: {
			en: "Show Caption",
			ru: "Показывать Подпись"
		},
		category: "Caption",
		control: "checkbox"
	},
	showLightbox: {
		title: {
			en: "Show Lightbox",
			ru: "Показать Lightbox"
		},
		control: "checkbox"
	},
	showButtonOpen: {
		title: {
			en: "Show Button :open",
			ru: "Показать Button :open"
		},
		control: "checkbox"
	}
}; // src/ImageViewer/props/propsDefault.js

var propsDefault_default = {
	src: "https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
	size: "scale",
	duration: "300ms",
	timingFunction: "ease",
	showLightbox: false,
	showCaption: true
}; // src/ImageViewer/props/overrides.js

import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
var overrides_default = {
	Overlay: {
		kind: "Overlay",
		props: {
			position: "absolute",
			width: "100%",
			height: "100%",
			z: 10,
			cursor: "pointer",
			"hover-button-opacity": 1
		}
	},
	"Lightbox Overlay": {
		kind: "Box",
		props: {
			position: "fixed",
			top: "0",
			left: "0",
			bottom: "0",
			right: "0",
			z: "60",
			background: "white"
		}
	},
	Image: {
		kind: "Image",
		props: {
			"transform-origin": "0 0",
			src: "https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
		}
	},
	Figure: {
		kind: "Figure"
	},
	Figcaption: {
		kind: "Figcaption"
	},
	Text: {
		kind: "Text",
		props: {
			children: "Watermelon salad with feta is an unexpected combination at first sight: salty cheese and sweet juicy watermelon, refreshing mint, and citrus sourness, but it is tasty.",
			"max-width": "720px"
		}
	},
	Authorship: {
		kind: "Text",
		props: {
			children: "Photo by Ralph (Ravi) Kayden",
			"max-width": "720px",
			"font-size": 14,
			opacity: 0.6
		}
	},
	Icon: {
		kind: "Icon",
		props: {}
	},
	"Icon :open": {
		kind: "Icon",
		props: {
			color: "white",
			size: "24px",
			defaultIcon: BsArrowsAngleExpand
		}
	},
	"Icon :close": {
		kind: "Icon",
		props: {
			color: "black",
			size: "24px",
			defaultIcon: BsArrowsAngleContract
		}
	},
	Button: {
		kind: "Button",
		props: {
			"focus-box-shadow": "none",
			"active-box-shadow": "none",
			"box-shadow": "none"
		}
	},
	"Button :open": {
		kind: "Button",
		props: {
			position: "absolute",
			opacity: "0",
			transition: "100ms",
			right: "10px",
			bottom: "10px",
			background: "rgba(0, 0, 0, 0.4)",
			padding: "16px",
			"border-radius": "50%"
		}
	},
	"Button :close": {
		kind: "Button",
		props: {
			position: "fixed",
			transition: "100ms",
			z: "10000",
			right: "10px",
			top: "10px",
			padding: "16px",
			"border-radius": "50%",
			border: "1px solid transparent",
			"hover-border": "1px solid #F0EFEF",
			background: "rgba(255, 255, 255, 0.6);",
			"hover-background": "rgba(248, 248, 248, 0.96)"
		}
	},
	"Caption Container": {
		kind: "Box",
		props: {
			position: "fixed",
			display: "flex",
			"align-items": "center",
			padding: "20px",
			background: "transparent",
			right: "0",
			bottom: "0",
			"z-index": "9999"
		}
	},
	"Caption Container :vertical": {
		kind: "Box",
		props: {
			width: "200px",
			height: "auto",
			top: "0",
			"justify-content": "center"
		}
	},
	"Caption Container :horizontal": {
		kind: "Box",
		props: {
			height: "150px",
			width: "auto",
			left: "0",
			"justify-content": "flex-start"
		}
	}
}; // src/ImageViewer/utils.js

import { useState, useCallback, useEffect } from "react";

var useIsTransitioning = ref => {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const startTransition = useCallback(() => {
		setIsTransitioning(true);

		if (window.getComputedStyle(ref.current).transitionDuration === "0s") {
			setIsTransitioning(false);
		}
	}, [ref]);
	const stopTransition = useCallback(() => {
		setIsTransitioning(false);
	}, []);
	useEffect(() => {
		const el = ref.current;

		const onTransitionStart = () => {
			setIsTransitioning(true);
		};

		const onTransitionEnd = () => {
			setIsTransitioning(false);
		};

		if (el) {
			el.addEventListener("transitionstart", onTransitionStart);
			el.addEventListener("transitionend", onTransitionEnd);
			return () => {
				el.current.removeEventListener("transitionstart", onTransitionStart);
				el.current.removeEventListener("transitionend", onTransitionEnd);
			};
		}
	}, [ref]);
	return [isTransitioning, startTransition, stopTransition];
};

var getDiff = (imageContainerRect, scale, captionContainerRect, isTextBottom) => {
	const measure = isTextBottom ? "height" : "width";
	const viewportLength = getVieportWithoutScrollbars()[measure];
	const imageContainerLength = imageContainerRect[measure];
	const captionContainerLength = captionContainerRect[measure];
	const centerOfViewport = viewportLength / 2;
	const centerOfImage = imageContainerLength * scale / 2;
	return Math.min(centerOfViewport - centerOfImage - captionContainerLength, 0);
};

var getVieportWithoutScrollbars = () => {
	return {
		height: document.documentElement.clientHeight,
		width: document.documentElement.clientWidth
	};
};

var getXY = (imageContainerRect, scale, diff, isTextBottom) => {
	const {
		top,
		left,
		height,
		width
	} = imageContainerRect;
	const viewport = getVieportWithoutScrollbars();
	const X = viewport.width / 2 - left - width * scale / 2;
	const Y = viewport.height / 2 - top - height * scale / 2;
	if (isTextBottom) return {
		X,
		Y: Y + diff
	};
	return {
		X: X + diff,
		Y
	};
};

var getScale = (imageContainerRect, captionContainerRect, isTextBottom) => {
	const {
		height,
		width
	} = getVieportWithoutScrollbars();
	let scale = Math.min(height / imageContainerRect.height, width / imageContainerRect.width);
	const imageHeight = imageContainerRect.height * scale;
	const imageWidth = imageContainerRect.width * scale;

	if (isTextBottom) {
		scale *= Math.min((height - captionContainerRect.height) / imageHeight, width / imageWidth);
	} else {
		scale *= Math.min((width - captionContainerRect.width) / imageWidth, height / imageHeight);
	}

	return scale;
}; // src/ImageViewer/ImageViewer.js


var Figure = atomize.figure();
var Figcaption = atomize.figcaption();
var Overlay = atomize.div({
	effects: {
		hover: ":hover",
		focus: ":focus",
		active: ":active",
		disabled: ":disabled",
		"hover-button": ":hover button"
	}
});

var ImageViewer = ({
	src,
	transition,
	duration,
	timingFunction,
	showCaption,
	showLightbox,
	showButtonOpen,
	size,
	...props
}) => {
	const [isOpen, setOpen] = useState2(showLightbox);
	const [scale, setScale] = useState2(1);
	const [translateXY, setTranslateXY] = useState2([0, 0]);
	const [captionContainerMode, setCaptionContainerMode] = useState2(":vertical");
	const imageContainerRef = useRef();
	const transitioningRef = useRef();
	const captionContainerRef = useRef();
	const [isTransitioning, startTransition] = useIsTransitioning(transitioningRef);
	const {
		override,
		rest
	} = useOverrides(props, overrides_default);
	const mode = useConstructorMode();
	useEffect2(() => {
		if (showLightbox) {
			calculateScaleAndXY();
		}

		setOpen(showLightbox);
	}, [calculateScaleAndXY, showLightbox]);
	const calculateScaleAndXY = useCallback2(() => {
		const isTextBottom = window.innerWidth / window.innerHeight <= 1.5;
		setTimeout(() => {
			const imageContainerRect = imageContainerRef.current.getBoundingClientRect();
			const captionContainerRect = captionContainerRef.current?.getBoundingClientRect() ?? {
				top: 0,
				left: 0,
				height: 0,
				width: 0
			};
			const newScale = getScale(imageContainerRect, captionContainerRect, isTextBottom);
			const diff = getDiff(imageContainerRect, newScale, captionContainerRect, isTextBottom);
			const {
				X,
				Y
			} = getXY(imageContainerRect, newScale, diff, isTextBottom);
			setTranslateXY([X, Y]);
			setScale(newScale);
		}, 10);
		setCaptionContainerMode(isTextBottom ? ":horizontal" : ":vertical");
	}, []);
	useEffect2(() => {
		calculateScaleAndXY();
	}, [calculateScaleAndXY, showCaption]);
	const onImageOverlayClick = useCallback2(() => {
		if (mode !== "constructor") {
			calculateScaleAndXY();
			setOpen(true);
		}
	}, [calculateScaleAndXY, mode]);
	const onOutsideOverlayClick = useCallback2(() => {
		if (mode !== "constructor") {
			setOpen(false);
			startTransition(true);
		}
	}, [mode, startTransition]);
	const scrollHandler = useCallback2(() => {
		if (isOpen) {
			startTransition(true);
		}

		setOpen(false);
	}, [isOpen, startTransition]);
	const resizeHandler = useCallback2(() => {
		if (isOpen) {
			calculateScaleAndXY();
		}
	}, [calculateScaleAndXY, isOpen]);
	useEffect2(() => {
		window.addEventListener("scroll", scrollHandler);
		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
			window.removeEventListener("resize", resizeHandler);
		};
	}, [scrollHandler, resizeHandler]);
	const isRealOpened = isOpen || isTransitioning;
	return <Box padding="20px" {...rest}>
		    
		<Box position="relative">
			<Figure margin="none" {...override("Figure")}>
				      
				<Box ref={imageContainerRef} position="relative" width={size === "scale" ? "100%" : "fit-content"} style={{
					zIndex: isRealOpened ? "100" : "40",
					pointerEvents: isRealOpened && "none"
				}}>
					        
					<Overlay
						{...override("Overlay")}
						display={isRealOpened && "none"}
						onClick={onImageOverlayClick}
						z="10"
						hover-button-opacity="1"
					>
						<Button {...override("Button", "Button :open", {
							defaultKey: "Button :open"
						})} opacity={showButtonOpen ? "1" : "0"}>
							<Icon {...override("Icon", "Icon :open", {
								defaultKey: "Icon :open"
							})} />
						</Button>
					</Overlay>
					        
					<Box font-size="0" line-height="0">
						<Image
							width={size === "scale" ? "100%" : "fit-content"}
							{...override("Image")}
							transition-duration={duration}
							transition-timing-function={timingFunction}
							ref={transitioningRef}
							src={src}
							style={{
								transform: isOpen && `translate(${translateXY[0]}px, ${translateXY[1]}px) scale(${scale})`,
								zIndex: isOpen ? "200" : "",
								pointerEvents: isRealOpened ? "all" : "",
								width: isOpen && "100%"
							}}
						/>
					</Box>
					      
				</Box>
				      
				<Figcaption {...override("Figcaption")}>
					        
					<Text {...override("Text")} />
					        
					<Text {...override("Authorship")} />
					      
				</Figcaption>
				    
			</Figure>
		</Box>
		    
		<Box
			{...override("Lightbox Overlay")}
			transition-duration={duration}
			transition-timing-function={timingFunction}
			style={{
				opacity: isOpen ? 1 : 0,
				pointerEvents: !isOpen && "none"
			}}
			onClick={onOutsideOverlayClick}
		/>
		    
		<Button {...override("Button", "Button :close", {
			defaultKey: "Button :close"
		})} style={{
			opacity: isOpen ? 1 : 0,
			pointerEvents: !isOpen && "none"
		}} onClick={onOutsideOverlayClick}>
			<Icon {...override("Icon", "Icon :close", {
				defaultKey: "Icon :close"
			})} style={{
				opacity: isOpen ? 1 : 0,
				pointerEvents: !isOpen && "none"
			}} />
		</Button>
		    
		{showCaption && <Box
			ref={captionContainerRef}
			{...override("Caption Container", `Caption Container ${captionContainerMode}`, {
				defaultKey: `Caption Container ${captionContainerMode}`
			})}
			transition-duration={duration}
			transition-timing-function={timingFunction}
			style={{
				opacity: isOpen ? 1 : 0,
				pointerEvents: "none"
			}}
		>
			{isRealOpened && <Box>
				      
				<Text {...override("Text")} />
				      
				<Text {...override("Authorship")} />
				    
			</Box>}
		</Box>}
		  
	</Box>;
};

Object.assign(ImageViewer, {
	title: "ImageViewer",
	description: {
		en: "The component is a picture with a caption. When you click on the picture, it opens to full screen.",
		ru: "Компонент является картинкой с подписью. При клике на картинку она открывается на полный экран."
	},
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default,
	overrides: overrides_default
});
var ImageViewer_default = ImageViewer;
export { ImageViewer_default as default };