// src/BoxCarousel/BoxCarousel.js
import React13, { useState as useState8, useEffect as useEffect6 } from "react";
import { useOverrides } from "@quarkly/components";
import { Box as Box7 } from "@quarkly/widgets";
import styled from "styled-components"; // src/BoxCarousel/components/Swiper.js

import { Swiper } from "swiper/react";
import atomize from "@quarkly/atomize";
var AtomizedSwiper = atomize(Swiper)();
AtomizedSwiper.displayName = "Swiper";
var Swiper_default = AtomizedSwiper; // src/BoxCarousel/components/Slide.js

import React2, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useConstructorMode, Placeholder, LinkBox, Box } from "@quarkly/widgets"; // src/BoxCarousel/contexts/BoxCarouselData/BoxCarouselDataContextContext.js

import { createContext } from "react";
var BoxCarouselDataContext = createContext({
	override: () => ({})
});
var BoxCarouselDataContextContext_default = BoxCarouselDataContext; // src/BoxCarousel/contexts/BoxCarouselData/BoxCarouselDataProvider.js

var BoxCarouselDataProvider_default = BoxCarouselDataContextContext_default.Provider; // src/BoxCarousel/contexts/BoxCarouselData/useBoxCarouselData.js

import { useContext } from "react";

var useBoxCarouselData = () => useContext(BoxCarouselDataContextContext_default);

var useBoxCarouselData_default = useBoxCarouselData; // src/utils/isEmptyChildren.js

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

var pick_default = pick; // src/utils/getNumber.js

var getNumber = (value, defaultValue, validator = () => true) => {
	const parsed = parseFloat(value);
	return !Number.isNaN(parsed) && validator(parsed) ? parsed : parseFloat(defaultValue);
};

var getNumber_default = getNumber; // src/BoxCarousel/components/Slide.js

var containerComponents = Object.freeze({
	linkbox: LinkBox,
	box: Box
});

var Slide = ({
	index,
	swiper,
	slidesAs,
	className,
	...props
}) => {
	const ref = useRef(null);
	const {
		override,
		ChildPlaceholder
	} = useBoxCarouselData_default();
	const [slideClasses, setSlideClasses] = useState(["swiper-slide"]);
	const updateClasses = useCallback((_s, el, classNames) => {
		if (el === ref.current) {
			setSlideClasses(classNames.split(" "));
		}
	}, []);
	useLayoutEffect(() => {
		swiper.on("_slideClass", updateClasses);
		return () => {
			if (!swiper) return;
			swiper.off("_slideClass", updateClasses);
		};
	}, [updateClasses, swiper]);
	useLayoutEffect(() => {
		if (ref.current) {
			setSlideClasses(ref.current.className.split(" "));
		}
	}, []);
	const isDuplicateActive = slideClasses.includes("swiper-slide-duplicate-active");
	const isActive = slideClasses.includes("swiper-slide-active");
	const isDuplicate = slideClasses.includes("swiper-slide-duplicate");
	const uniqueOverride = `Slide ${index}`;
	const mode = useConstructorMode();
	const hideSlide = !(mode !== "constructor") && (isDuplicateActive || isDuplicate && !isActive);
	const clearOverride = hideSlide && {
		"data-qoverride": void 0,
		"data-child-placeholder": void 0
	};
	const ContainerComponent = containerComponents[slidesAs] ?? Box;
	return <ContainerComponent
		ref={ref}
		{...override("Slide", uniqueOverride, {
			defaultKey: uniqueOverride
		})}
		className={`${slideClasses.join(" ")}${className ? ` ${className}` : ""}`}
		{...clearOverride}
		{...props}
	>
		    
		{isEmptyChildren(override(uniqueOverride).children) && <Placeholder message="Drop content here" width="100%" box-sizing="border-box" />}
		    
		{!hideSlide && <ChildPlaceholder slot={uniqueOverride} />}
		  
	</ContainerComponent>;
};

Object.assign(Slide, {
	displayName: "SwiperSlide",
	title: "Slide",
	propInfo: {},
	defaultProps: {}
});
var Slide_default = Slide; // src/BoxCarousel/hooks/useCSS.js

import { useState as useState2, useEffect } from "react";

var useCSS = () => {
	const [state, setState] = useState2({
		loaded: false,
		error: false
	});
	useEffect(() => {
		let styleTag = document.getElementById("swiper-css");

		if (!styleTag) {
			styleTag = document.createElement("link");
			Object.assign(styleTag, {
				rel: "stylesheet",
				href: "https://unpkg.com/swiper@8.4.7/swiper-bundle.min.css"
			});
		} else if (styleTag.getAttribute("data-status")) {
			setState({
				loaded: true,
				error: window.status === "error"
			});
		}

		const onChangeEvent = event => {
			styleTag.setAttribute("data-status", event.type);
			setState({
				loaded: true,
				error: event.type === "error"
			});
		};

		styleTag.addEventListener("load", onChangeEvent);
		styleTag.addEventListener("error", onChangeEvent);
		document.head.insertBefore(styleTag, document.head.firstChild);
		return () => {
			styleTag.removeEventListener("load", onChangeEvent);
			styleTag.removeEventListener("error", onChangeEvent);
		};
	}, []);
	return [state.loaded, state.error];
};

var useCSS_default = useCSS; // src/BoxCarousel/hooks/useNavigationModule.js

import React4, { useCallback as useCallback3, useState as useState3 } from "react"; // src/BoxCarousel/components/navigation/Arrow.js

import atomize2 from "@quarkly/atomize";
import { Icon, Button as QButton } from "@quarkly/widgets";
import React3, { forwardRef, useCallback as useCallback2 } from "react"; // src/BoxCarousel/hooks/useSubscribe.js

import { useEffect as useEffect2 } from "react";

var useSubscribe = (eventEmmiter, event, cb) => {
	useEffect2(() => {
		eventEmmiter?.on?.(event, cb);
		return () => {
			eventEmmiter?.off?.(event, cb);
		};
	}, [eventEmmiter, event, cb]);
};

var useSubscribe_default = useSubscribe; // src/BoxCarousel/components/navigation/Arrow.js

var Button = atomize2.button(pick_default(QButton, "name", "description", "effects", "propInfo"), QButton.defaultProps);
var Arrow = forwardRef(({
	direction,
	...props
}, ref) => {
	const {
		override,
		swiper
	} = useBoxCarouselData_default();
	const onDestroy = useCallback2(() => {
		console.log("onDestroy", ref);

		if (ref.current) {
			ref.current.disabled = false;
		}
	}, [ref]);
	useSubscribe_default(swiper, "destroy", onDestroy);
	return <Button ref={ref} {...override("Arrow", `Arrow ${direction}`, {
		defaultKey: `Arrow ${direction}`
	})} {...props}>
		<Icon {...override(`Arrow Icon`, `Arrow Icon ${direction}`, {
			defaultKey: `Arrow Icon ${direction}`
		})} />
	</Button>;
});
Arrow.displayName = "Arrow";
var Arrow_default = Arrow; // src/BoxCarousel/hooks/useNavigationModule.js

var useNavigationModule = showArrows => {
	const [navigation, setNavigation] = useState3({
		prevEl: null,
		nextEl: null
	});
	const prevRef = useCallback3(el => {
		setNavigation(v => ({ ...v,
			prevEl: el
		}));
	}, []);
	const nextRef = useCallback3(el => {
		setNavigation(v => ({ ...v,
			nextEl: el
		}));
	}, []);
	const LeftArrow = useCallback3(function PrevArrow(props) {
		return <Arrow_default ref={prevRef} data-swiper-navigation-button="prev" direction="Prev" {...props} />;
	}, [prevRef]);
	const RightArrow = useCallback3(function NextArrow(props) {
		return <Arrow_default ref={nextRef} data-swiper-navigation-button="next" direction="Next" {...props} />;
	}, [nextRef]);
	const navigationButtons = {
		LeftArrow: showArrows ? LeftArrow : () => null,
		RightArrow: showArrows ? RightArrow : () => null
	};
	return [showArrows ? navigation : null, navigationButtons];
};

var useNavigationModule_default = useNavigationModule; // src/BoxCarousel/hooks/usePaginationModule.js

import React11, { useMemo as useMemo2 } from "react"; // src/BoxCarousel/components/pagination/Pagination.js

import React10, { useEffect as useEffect4, useState as useState6 } from "react"; // src/BoxCarousel/components/pagination/Bullets.js

import React6 from "react";
import { Box as Box2 } from "@quarkly/widgets"; // src/BoxCarousel/components/pagination/Bullet.js

import { Button as Button2 } from "@quarkly/widgets";
import React5 from "react"; // src/BoxCarousel/components/pagination/utils.js

import { useConstructorMode as useConstructorMode2 } from "@quarkly/widgets";
import { useCallback as useCallback4, useLayoutEffect as useLayoutEffect2, useState as useState4 } from "react";

var getCurrent = swiper => {
	if (!swiper || swiper?.destroyed) return 0;
	let current;
	const slidesLength = swiper.slides.length;
	const total = getTotal(swiper);

	if (swiper.params.loop) {
		current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

		if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
			current -= slidesLength - swiper.loopedSlides * 2;
		}

		if (current > total - 1) current -= total;
		if (current < 0) current = total + current;
	} else if (typeof swiper.snapIndex !== "undefined") {
		current = swiper.snapIndex;
	} else {
		current = swiper.activeIndex || 0;
	}

	return current;
};

var getTotal = swiper => {
	if (!swiper) return 0;
	const slidesLength = swiper.slides.length;
	const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	return total;
};

var usePageButtonProps = index => {
	const {
		swiper
	} = useBoxCarouselData_default();
	const mode = useConstructorMode2();
	const current = useCurrentSlide(swiper);
	const isCurrent = current === index;
	const clickHandler = useCallback4(e => {
		if (mode !== "constuctor") {
			e.preventDefault();
			let realIndex = index * swiper.params.slidesPerGroup;
			if (swiper.params.loop) realIndex += swiper.loopedSlides;
			swiper.slideTo(realIndex);
		}
	}, [swiper, index, mode]);
	return {
		clickHandler,
		isCurrent
	};
};

var useCurrentSlide = swiper => {
	const [current, setCurrent] = useState4(getCurrent(swiper));
	useLayoutEffect2(() => {
		if (!swiper) return;

		const updateCurrent = () => {
			setCurrent(getCurrent(swiper));
		};

		updateCurrent();
		swiper.on("init activeIndexChange slidesLengthChange", updateCurrent);
		return () => {
			swiper.off("init activeIndexChange slidesLengthChange", updateCurrent);
		};
	}, [swiper]);
	return current;
}; // src/BoxCarousel/components/pagination/Bullet.js


var Bullet = ({
	index,
	...props
}) => {
	const {
		override
	} = useBoxCarouselData_default();
	const {
		isCurrent,
		clickHandler
	} = usePageButtonProps(index);
	return <Button2 {...override("Bullet Button", `Bullet Button ${index + 1}`, isCurrent && "Bullet Button :active", {
		defaultKey: `Bullet Button ${index + 1}`
	})} onClick={clickHandler} {...props} />;
};

var Bullet_default = Bullet; // src/BoxCarousel/components/pagination/Bullets.js

var diffToScale = Object.freeze({
	0: 1,
	1: 0.75,
	2: 0.5,
	3: 0.25
});

var getBulletOffset = ({
	dynamic,
	current,
	swiper,
	total,
	dynamicBulletIndex,
	dynamicMainBullets,
	bulletSize,
	dynamicBulletsLength
}) => {
	if (!dynamic) return 0;
	if (!swiper) return 0;

	if (swiper.previousIndex !== void 0) {
		dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

		if (dynamicBulletIndex > 0) {
			dynamicBulletIndex = dynamicMainBullets - 1;
		} else if (dynamicBulletIndex < 0) {
			dynamicBulletIndex = 0;
		}
	}

	const firstIndex = Math.max(current - dynamicBulletIndex, 0);
	const lastIndex = firstIndex + (Math.min(total, dynamicMainBullets) - 1);
	const midIndex = (lastIndex + firstIndex) / 2;
	const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize + bulletSize / dynamicBulletsLength;
	return bulletsOffset;
};

var getWrapperProps = ({
	dynamic,
	bulletSize,
	dynamicMainBullets
}) => {
	if (dynamic) return {
		width: bulletSize * (dynamicMainBullets + 4)
	};
};

var getButtonProps = ({
	index,
	current,
	dynamic,
	bulletsOffset
}) => {
	const props = {
		isCurrent: index === current
	};

	if (dynamic) {
		props.style = {
			left: `${bulletsOffset}px`,
			transform: `scale(${diffToScale[Math.abs(index - current)]})`
		};
	}

	return props;
};

var Bullets = ({
	dynamic
}) => {
	const {
		swiper,
		slidesCount
	} = useBoxCarouselData_default();
	const total = slidesCount;
	const current = useCurrentSlide(swiper);
	const bulletSize = 24;
	const dynamicBulletsLength = 4;
	const dynamicBulletIndex = 0;
	const dynamicMainBullets = 1;
	const bulletsOffset = getBulletOffset({
		dynamic,
		current,
		swiper,
		total,
		dynamicBulletIndex,
		dynamicMainBullets,
		bulletSize,
		dynamicBulletsLength
	});
	return <Box2 white-space="nowrap" overflow="hidden" {...getWrapperProps({
		dynamic,
		bulletSize,
		dynamicMainBullets
	})}>
		{[...Array(slidesCount)].map((_, index) => <Bullet_default key={index} position="relative" index={index} {...getButtonProps({
			index,
			current,
			dynamic,
			bulletsOffset
		})} />)}
	</Box2>;
};

var Bullets_default = Bullets; // src/BoxCarousel/components/pagination/LabelsAndThumbnails.js

import React7 from "react";
import { Box as Box3, Image, Text } from "@quarkly/widgets";

var Item = ({
	index,
	labels,
	thumbnails
}) => {
	const {
		override
	} = useBoxCarouselData_default();
	const {
		isCurrent,
		clickHandler
	} = usePageButtonProps(index);
	return <Box3 {...override("Pagination Item", `Pagination Item ${index + 1}`)}>
		    
		{thumbnails && <Image {...override("Thumbnail", `Thumbnail ${index + 1}`, isCurrent && "Thumbnail :active", {
			defaultKey: `Thumbnail ${index + 1}`
		})} onClick={clickHandler} />}
		    
		{labels && <Text {...override("Label", `Label ${index + 1}`, isCurrent && "Label :active", {
			defaultKey: `Label ${index + 1}`
		})} onClick={clickHandler} />}
		    
		<Box3 {...override("Pagination Underline", `Pagination Underline ${index + 1}`, isCurrent && "Pagination Underline :active", {
			defaultKey: `Pagination Underline ${index + 1}`
		})} />
		  
	</Box3>;
};

var LabelsAndThumbnails = ({
	labels,
	thumbnails
}) => {
	const {
		slidesCount
	} = useBoxCarouselData_default();
	return <Box3 display="flex">
		{[...Array(slidesCount)].map((_, index) => <Item key={index} labels={labels} thumbnails={thumbnails} index={index} />)}
	</Box3>;
};

var LabelsAndThumbnails_default = LabelsAndThumbnails; // src/BoxCarousel/components/pagination/Fraction.js

import React8 from "react";
import { Box as Box4 } from "@quarkly/widgets";

var Fraction = () => {
	const {
		swiper,
		slidesCount
	} = useBoxCarouselData_default();
	const total = slidesCount;
	const current = useCurrentSlide(swiper);
	return <Box4 display="flex" align-items="center" padding="0px 10px">
		    
		{current + 1}
		    {" / "}    
		{total}
		  
	</Box4>;
};

var Fraction_default = Fraction; // src/BoxCarousel/components/pagination/constants.js

var paginationType = Object.freeze({
	none: "none",
	labelsin: "labelsin",
	labelsout: "labelsout",
	thumbnailsin: "thumbnailsin",
	thumbnailsout: "thumbnailsout",
	dotsin: "dotsin",
	dotsout: "dotsout",
	dynamicdotsin: "dynamicdotsin",
	dynamicdotsout: "dynamicdotsout",
	fractionin: "fractionin",
	fractionout: "fractionout",
	progress: "progress"
});
var inTypes = [paginationType.labelsin, paginationType.thumbnailsin, paginationType.dotsin, paginationType.dynamicdotsin, paginationType.fractionin, paginationType.progress];

var isPaginationIn = type => {
	if (type === paginationType.none || inTypes.includes(type)) {
		return true;
	}

	return false;
};

var isProgress = type => {
	return type === paginationType.progress;
}; // src/BoxCarousel/components/pagination/Progress.js


import React9 from "react";
import { Box as Box5 } from "@quarkly/widgets";

var Progress = () => {
	const {
		swiper,
		slidesCount
	} = useBoxCarouselData_default();
	const current = useCurrentSlide(swiper);
	return <Box5
		position="absolute"
		top="0"
		width="100%"
		height="12px"
		z="100"
	>
		<Box5
			height="100%"
			background-color="--color-primary"
			transition-property="width"
			transition-duration="300ms"
			style={{
				width: `${(current + 1) / slidesCount * 100}%`
			}}
		/>
	</Box5>;
};

var Progress_default = Progress; // src/utils/useBreakpoint.js

import { useEffect as useEffect3, useMemo, useState as useState5 } from "react";
import { useTheme } from "styled-components";

var createBreakpointRule = point => point.map(({
	type,
	value
}) => value === true ? `(${type})` : `(${type}: ${value}px)`).join(" and ");

var useBreakpoint = breakpoints3 => {
	const theme = useTheme();

	const getMatches = queries2 => {
		if (typeof window !== "undefined") {
			return Object.keys(queries2).find(key => window.matchMedia(queries2[key]).matches) || false;
		}

		return false;
	};

	const queries = useMemo(() => {
		return breakpoints3.reduce((obj, breakpoint) => ({ ...obj,
			[breakpoint]: createBreakpointRule(theme.breakpoints[breakpoint])
		}), {});
	}, [theme.breakpoints, breakpoints3]);
	const [matches, setMatches] = useState5(getMatches(queries));

	const handleChange = () => {
		setMatches(getMatches(queries));
	};

	useEffect3(() => {
		const medias = Object.values(queries).map(q => window.matchMedia(q));
		handleChange();
		medias.forEach(media => media.addEventListener("change", handleChange));
		return () => {
			medias.forEach(media => media.removeEventListener("change", handleChange));
		};
	}, [queries]);
	return matches;
};

var useBreakpoint_default = useBreakpoint; // src/BoxCarousel/components/pagination/Pagination.js

var breakpoints = ["sm"];

var Pagination = ({
	showPagination
}) => {
	const [pagination, setPagination] = useState6(showPagination);
	const breakpoint = useBreakpoint_default(breakpoints);
	useEffect4(() => {
		if (breakpoint === "sm") {
			if (isPaginationIn(showPagination)) {
				setPagination(paginationType.dynamicdotsin);
			} else {
				setPagination(paginationType.dynamicdotsout);
			}
		} else {
			setPagination(showPagination);
		}
	}, [breakpoint, showPagination]);

	switch (pagination) {
		case paginationType.labelsin:
		case paginationType.labelsout:
			return <LabelsAndThumbnails_default labels />;

		case paginationType.thumbnailsin:
		case paginationType.thumbnailsout:
			return <LabelsAndThumbnails_default thumbnails />;

		case paginationType.dotsin:
		case paginationType.dotsout:
			return <Bullets_default />;

		case paginationType.dynamicdotsin:
		case paginationType.dynamicdotsout:
			return <Bullets_default dynamic />;

		case paginationType.fractionin:
		case paginationType.fractionout:
			return <Fraction_default />;

		case paginationType.progress:
			return <Progress_default />;

		case paginationType.none:
		default:
			return null;
	}
};

var Pagination_default = Pagination; // src/BoxCarousel/hooks/usePaginationModule.js

var usePaginationModule = showPagination => {
	const PaginationComponent = useMemo2(() => {
		const PaginationWrapper = props => <Pagination_default showPagination={showPagination} {...props} />;

		return PaginationWrapper;
	}, [showPagination]);
	return [PaginationComponent];
};

var usePaginationModule_default = usePaginationModule; // src/BoxCarousel/components/autoplay/AutoPlayButton.js

import React12, { useRef as useRef2, useCallback as useCallback5, useState as useState7, useEffect as useEffect5 } from "react";
import { Box as Box6, Button as Button3, Icon as Icon2 } from "@quarkly/widgets";
import atomized from "@quarkly/atomize";
var Svg = atomized.svg({
	useAliases: false
});
var Circle = atomized.circle({
	useAliases: false
});

var AutoPlayButton = ({
	autoplay,
	autoPlayEnabled,
	show
}) => {
	const {
		override
	} = useBoxCarouselData_default();
	const ref = useRef2();
	const animStateRef = useRef2();
	const animate = useCallback5((remaining, isPaused2, percent) => {
		if (!ref.current) return;

		if (!isPaused2) {
			Object.assign(ref.current.style, {
				transition: "none",
				strokeDashoffset: percent * 283
			});
			setTimeout(() => {
				Object.assign(ref.current.style, {
					transition: `stroke-dashoffset ${remaining}ms linear`,
					strokeDashoffset: "0"
				});
				animStateRef.current = "283";
			}, 0);
		} else {
			animStateRef.current = percent * 283;
			Object.assign(ref.current.style, {
				transition: null,
				strokeDashoffset: animStateRef.current
			});
		}
	}, []);
	const [isPaused, setPaused] = useState7(false);
	const pauseHandle = useCallback5(() => {
		setPaused(true);
	}, []);
	const resumeHandle = useCallback5(() => {
		setPaused(false);
	}, []);
	const onClick = useCallback5(() => {
		if (autoplay.isPaused) {
			autoplay.resume();
		} else {
			autoplay.pause();
		}
	}, [autoplay]);
	useSubscribe_default(autoplay, "animate", animate);
	useSubscribe_default(autoplay, "pause", pauseHandle);
	useSubscribe_default(autoplay, "resume", resumeHandle);
	useEffect5(() => {
		if (autoPlayEnabled && show) {
			animate(...autoplay.getAnimateOptions());
		}
	}, [animate, autoPlayEnabled, autoplay, show]);
	if (!show || !autoPlayEnabled) return null;
	return <Box6 position="relative" display="flex" justify-content="center" align-items="center">
		<Button3 onClick={onClick} position="relative" {...override("AutoPlay Button")}>
			    
			<Icon2 {...override("AutoPlay Button Icon", `AutoPlay Button Icon ${isPaused ? "Play" : "Pause"}`, {
				defaultKey: `AutoPlay Button Icon ${isPaused ? "Play" : "Pause"}`
			})} />
			    
			<Svg
				position="absolute"
				top="0"
				left="0"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				      
				<Circle
					cx="50"
					cy="50"
					r="45"
					fill="transparent"
					stroke="#C4C4C4"
					strokeWidth="6"
				/>
				      
				<Circle
					ref={ref}
					cx="50"
					cy="50"
					r="45"
					fill="transparent"
					stroke=" #2f3d4c"
					strokeWidth="10"
					strokeLincecap="round"
					strokeDasharray="283"
					transform-origin="50% 50%"
					strokeDashoffset="283"
					transform="rotate(-90deg)"
				/>
				    
			</Svg>
			  
		</Button3>
	</Box6>;
};

var AutoPlayButton_default = AutoPlayButton; // src/BoxCarousel/components/autoplay/useAutoPlay.js

import { useRef as useRef3, useLayoutEffect as useLayoutEffect3 } from "react";
import { useConstructorMode as useConstructorMode3 } from "@quarkly/widgets"; // src/BoxCarousel/utils/EventEmitter.js

var EventEmitter = class {
	constructor() {
		this.events = {};
	}

	on(event, cb) {
		if (!this.events[event]) {
			this.events[event] = [];
		}

		this.events[event].push(cb);
		return () => this.off(event, cb);
	}

	emit(event, ...args) {
		if (this.events[event]) {
			this.events[event].forEach(cb => cb(...args));
		}
	}

	off(event, cb) {
		if (this.events[event]) {
			this.events[event] = this.events[event].filter(c => c !== cb);
		}
	}

};
var EventEmitter_default = EventEmitter; // src/BoxCarousel/components/autoplay/useAutoPlay.js

var AutoPlay = class extends EventEmitter_default {
	constructor(options) {
		super();
		this._enabled = false;
		this._isPaused = true;
		this._isInteractionPause = false;
		this._timeout = null;
		this._start = null;
		this.init(options);
	}

	get remaining() {
		return this._remaining;
	}

	get delay() {
		return this._delay;
	}

	get isPaused() {
		return this._isPaused;
	}

	get enabled() {
		return this._enabled;
	}

	init({
		remaining,
		delay,
		swiper,
		enabled
	}) {
		this._remaining = remaining;
		this._delay = delay;
		this._swiper = swiper;
		this._enabled = enabled;

		if (this._enabled) {
			clearTimeout(this._timeout);
			this._start = null;
		}
	}

	pause(reset, isInteraction = false) {
		this._isInteractionPause = isInteraction;
		if (this._isPaused === true) return;
		this._isPaused = true;
		this.emit("pause");
		clearTimeout(this._timeout);

		if (reset) {
			this._remaining = this.delay;
		} else {
			this._remaining -= Date.now() - this._start;
		}

		this.emit("animate", ...this.getAnimateOptions());
	}

	resume() {
		if (!this._enabled) return;
		this._isPaused = false;
		this._isInteractionPause = null;
		this._start = Date.now();

		if (!this._swiper.params.loop && this._swiper.isEnd) {
			this.pause(true);
			return;
		}

		this.emit("resume");
		this.emit("animate", ...this.getAnimateOptions());

		const run = () => {
			this._swiper.loopFix();

			this._swiper.slideNext(this._swiper.params.speed, true, true);
		};

		clearTimeout(this._timeout);
		this._timeout = setTimeout(() => {
			this._remaining = this._delay;
			run();
			this.resume();
		}, this.remaining);
	}

	getAnimateOptions() {
		if (this._isPaused) {
			return [this.remaining, this.isPaused, this.remaining / this.delay];
		}

		const remaining = this.remaining - (new Date() - this._start);
		return [remaining, this.isPaused, remaining / this.delay];
	}

	hoverResume() {
		if (this._isInteractionPause) return;
		this.resume();
	}

	hoverPause() {
		if (this._isInteractionPause) return;
		this.pause();
	}

};

var useAutoPlay = (autoPlay, swiper, delay) => {
	const autoPlayRef = useRef3(new AutoPlay({
		remaining: delay,
		delay,
		swiper
	}));
	const mode = useConstructorMode3();
	useLayoutEffect3(() => {
		if (!swiper) return;
		autoPlayRef.current.init({
			remaining: delay,
			swiper,
			delay,
			enabled: autoPlay
		});

		if (autoPlay && mode !== "constructor") {
			setTimeout(() => autoPlayRef.current.resume(), 0);
		} else {
			autoPlayRef.current.pause(true);
		}
	}, [swiper, autoPlay, delay, mode]);
	useLayoutEffect3(() => {
		if (!swiper) return;

		const sliderFirstMove = () => {
			autoPlayRef.current.pause(false, true);
		};

		const beforeTransitionStart = (_s, speed, internal) => {
			if (!internal) {
				autoPlayRef.current.pause(false, true);
			}
		};

		swiper.on("sliderFirstMove", sliderFirstMove);
		swiper.on("beforeTransitionStart", beforeTransitionStart);
		return () => {
			swiper.off("sliderFirstMove", sliderFirstMove);
			swiper.off("beforeTransitionStart", beforeTransitionStart);
		};
	}, [swiper, autoPlay]);
	return autoPlayRef.current;
};

var useAutoPlay_default = useAutoPlay; // src/BoxCarousel/hooks/useAutoPlayModule.js

var useAutoPlayModule = () => {
	return [useAutoPlay_default, AutoPlayButton_default];
};

var useAutoPlayModule_default = useAutoPlayModule; // src/BoxCarousel/hooks/useAutoPlayHoverCallbacks.js

import { useCallback as useCallback6, useRef as useRef4 } from "react";

var useAutoPlayHoverCallbacks = (autoplay, autoPlayHoverPause) => {
	const timeoutRef = useRef4();
	const onMouseEnter = useCallback6(() => {
		if (!autoPlayHoverPause) return;
		autoplay.hoverPause();
	}, [autoPlayHoverPause, autoplay]);
	const onMouseLeave = useCallback6(() => {
		if (!autoPlayHoverPause) return;
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			autoplay.hoverResume();
		}, 2e3);
	}, [autoPlayHoverPause, autoplay]);
	return {
		onMouseEnter,
		onMouseLeave
	};
};

var useAutoPlayHoverCallbacks_default = useAutoPlayHoverCallbacks; // src/BoxCarousel/components/navigation/constants.js

var navigationType = Object.freeze({
	none: "none",
	arrowsin: "arrowsin",
	arrowsout: "arrowsout"
}); // src/BoxCarousel/utils/convertCssTimingToMs.js

var convertCssTimingToMs = timing => {
	const value = parseFloat(timing);
	const [unit] = timing.match(/m?s/) ?? [];
	return unit === "s" ? value * 1e3 : value;
};

var convertCssTimingToMs_default = convertCssTimingToMs; // src/BoxCarousel/utils/getModules.js

import { Navigation, Pagination as Pagination2, Keyboard, EffectFade, Autoplay } from "swiper";

var getModules = ({
	effect,
	showArrows,
	showPagination,
	keyboardControl
}) => {
	const modules = [Autoplay];

	if (showArrows) {
		modules.push(Navigation);
	}

	if (showPagination && showPagination !== paginationType.none) {
		modules.push(Pagination2);
	}

	if (keyboardControl) {
		modules.push(Keyboard);
	}

	const effectModule = {
		fade: EffectFade,
		slide: null
	}[effect];

	if (effectModule) {
		modules.push(effectModule);
	}

	return modules;
};

var getModules_default = getModules; // src/BoxCarousel/props/propsInfo.js

var propsInfo_default = {
	slidesCount: {
		title: {
			en: "Number of slides",
			ru: "Количество слайдов"
		},
		control: "input",
		type: "number",
		category: "Slides",
		weight: 0.5
	},
	slidesAs: {
		title: {
			en: "Use as slides",
			ru: "Использовать в качестве слайдов"
		},
		control: "select",
		variants: [{
			title: "Box",
			value: "box"
		}, {
			title: "LinkBox",
			value: "linkbox"
		}],
		category: "Slides",
		weight: 0.5
	},
	showArrows: {
		title: {
			en: "Show arrows",
			ru: "Показывать стрелки"
		},
		description: {
			en: "Show arrow for slider navigation",
			ru: "Отображать стрелки навигации по слайдам"
		},
		control: "select",
		variants: [{
			title: "None",
			value: navigationType.none
		}, {
			title: "Arrows In",
			value: navigationType.arrowsin
		}, {
			title: "Arrows Out",
			value: navigationType.arrowsout
		}],
		category: "Navigation",
		weight: 0.5
	},
	showPagination: {
		title: {
			en: "Show pagination",
			ru: "Показывать pagination"
		},
		control: "select",
		category: "Navigation",
		variants: [{
			title: "None",
			value: paginationType.none
		}, {
			title: "Labels In",
			value: paginationType.labelsin
		}, {
			title: "Labels Out",
			value: paginationType.labelsout
		}, {
			title: "Thumbnails In",
			value: paginationType.thumbnailsin
		}, {
			title: "Thumbnails Out",
			value: paginationType.thumbnailsout
		}, {
			title: "Dots in",
			value: paginationType.dotsin
		}, {
			title: "Dots out",
			value: paginationType.dotsout
		}, {
			title: "Dynamic dots in",
			value: paginationType.dynamicdotsin
		}, {
			title: "Dynamic dots out",
			value: paginationType.dynamicdotsout
		}, {
			title: "Fraction in",
			value: paginationType.fractionin
		}, {
			title: "Fraction out",
			value: paginationType.fractionout
		}, {
			title: "Progress",
			value: paginationType.progress
		}],
		weight: 0.5
	},
	draggable: {
		title: {
			en: "Draggable",
			ru: "Показывать стрелки"
		},
		description: {
			en: "Show arrow for slider navigation",
			ru: "Отображать стрелки навигации по слайдам"
		},
		category: "Navigation",
		control: "checkbox",
		weight: 0.5
	},
	infinityMode: {
		title: {
			en: "Infinity mode",
			ru: "Показывать стрелки"
		},
		control: "checkbox",
		category: "Navigation",
		weight: 0.5
	},
	keyboardControl: {
		title: {
			en: "Keyboard control",
			ru: "Показывать стрелки"
		},
		control: "checkbox",
		category: "Navigation",
		weight: 0.5
	},
	autoPlay: {
		title: {
			en: "Autoplay"
		},
		control: "checkbox",
		category: "Autoplay",
		weight: 0.5
	},
	autoPlaySpeed: {
		title: {
			en: "Autoplay speed"
		},
		control: "input",
		category: "Autoplay",
		type: "string",
		weight: 0.5
	},
	autoPlayHoverPause: {
		title: {
			en: "Pause on hover"
		},
		control: "checkbox",
		category: "Autoplay",
		weight: 0.5
	},
	showAutoPlayButton: {
		title: {
			en: "Show autoplay button"
		},
		control: "checkbox",
		category: "Autoplay",
		weight: 0.5
	},
	effect: {
		title: {
			en: "Effect",
			ru: "Эффект"
		},
		control: "select",
		variants: [{
			title: "Slide",
			value: "slide"
		}, {
			title: "Fade",
			value: "fade"
		}],
		category: "Animation",
		weight: 0.5
	},
	animDuration: {
		title: {
			en: "Duration",
			ru: "Длительность"
		},
		control: "input",
		category: "Animation",
		type: "string",
		weight: 0.5
	},
	animFunction: {
		title: {
			en: "Function",
			ru: "Функция"
		},
		control: "input",
		variants: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"],
		type: "text",
		category: "Animation",
		weight: 1
	}
}; // src/BoxCarousel/props/propsDefault.js

var propsDefault_default = {
	slidesCount: "3",
	slidesAs: "box",
	showArrows: navigationType.arrowsin,
	showPagination: paginationType.labelsin,
	draggable: true,
	infinityMode: true,
	keyboardControl: true,
	autoPlay: false,
	autoPlaySpeed: "1500ms",
	autoPlayHoverPause: true,
	showAutoPlayButton: false,
	effect: "slide",
	animDuration: "300ms",
	animFunction: "ease"
}; // src/BoxCarousel/props/overrides.js

import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdPause, MdPlayArrow } from "react-icons/md";
var overrides_default = {
	Slides: {
		kind: "Box",
		props: {
			position: "relative",
			display: "flex",
			overflow: "visible"
		}
	},
	Slide: {
		kind: "Slide"
	},
	"Navigation Container": {
		kind: "Box",
		props: {
			display: "flex",
			"justify-content": "center",
			"align-items": "center",
			padding: "0 25px"
		}
	},
	"Navigation Container Inside": {
		kind: "Box",
		props: {
			position: "absolute",
			height: "100%",
			top: "0"
		}
	},
	"Navigation Container Outside": {
		kind: "Box",
		props: {}
	},
	"Navigation Container Left": {
		kind: "Box",
		props: {
			left: "0",
			padding: "0 18px 0 25px",
			"sm-display": "none"
		}
	},
	"Navigation Container Right": {
		kind: "Box",
		props: {
			right: "0",
			padding: "0 25px 0 18px",
			"sm-padding": "0px",
			"sm-position": "static"
		}
	},
	Arrow: {
		kind: "Button",
		props: {
			background: "--color-lightD1",
			color: "--color-darkL2",
			padding: 0,
			"border-radius": "50%",
			z: "100"
		}
	},
	"Arrow Prev": {
		kind: "Button",
		props: {}
	},
	"Arrow Next": {
		kind: "Button",
		props: {}
	},
	"Arrow Icon": {
		kind: "Icon",
		props: {
			size: 48
		}
	},
	"Arrow Icon Prev": {
		kind: "Icon",
		props: {
			category: "md",
			defaultIcon: MdKeyboardArrowLeft,
			left: "7.5%"
		}
	},
	"Arrow Icon Next": {
		kind: "Icon",
		props: {
			category: "md",
			defaultIcon: MdKeyboardArrowRight,
			right: "7.5%"
		}
	},
	"Bullet Button": {
		kind: "Button",
		props: {
			background: "--color-darkL2",
			width: 8,
			height: 8,
			margin: 8,
			padding: 0,
			"border-radius": "50%",
			transition: ".3s",
			"box-shadow": "none",
			"focus-box-shadow": "none",
			border: "1px solid rgba(0,0,0,0)"
		}
	},
	"Bullet Button :active": {
		kind: "Button",
		props: {
			background: "#FFFFFF",
			border: "1px solid #000000",
			"box-shadow": "none",
			"focus-box-shadow": "none"
		}
	},
	"AutoPlay Button": {
		kind: "Button",
		props: {
			padding: 0,
			"box-shadow": "none",
			"focus-box-shadow": "none",
			background: "transparent"
		}
	},
	"AutoPlay Button Icon": {
		kind: "Icon",
		props: {
			color: "black",
			size: "16px",
			margin: "4px 4px 4px 4px"
		}
	},
	"AutoPlay Button Icon Pause": {
		kind: "Icon",
		props: {
			category: "md",
			defaultIcon: MdPause
		}
	},
	"AutoPlay Button Icon Play": {
		kind: "Icon",
		props: {
			category: "md",
			defaultIcon: MdPlayArrow
		}
	},
	Label: {
		kind: "Text",
		props: {
			children: "Label",
			margin: "0 0 2px 0"
		}
	},
	Thumbnail: {
		kind: "Image",
		props: {
			width: "100%",
			height: "100%",
			src: "https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
			margin: "0 0 2px 0"
		}
	},
	"Pagination Underline": {
		kind: "Box",
		props: {
			height: "2px",
			width: "100%",
			"border-radius": "2px",
			opacity: "0.2",
			background: "black"
		}
	},
	"Pagination Underline :active": {
		kind: "Box",
		props: {
			opacity: 1
		}
	},
	"Pagination Item": {
		kind: "Box",
		props: {
			margin: "0 10px",
			height: "50px",
			display: "flex",
			"flex-direction": "column",
			"justify-content": "center"
		}
	},
	"Pagination Container": {
		kind: "Box",
		props: {
			display: "flex",
			bottom: "0px",
			width: "100%",
			"justify-content": "center",
			padding: "20px 0",
			"sm-justify-content": "space-between",
			"sm-align-items": "center",
			"sm-padding-left": "24px",
			"sm-padding-right": "24px"
		}
	},
	"Pagination Container Inside": {
		kind: "Box",
		props: {
			left: "50%",
			position: "absolute",
			transform: "translateX(-50%)",
			"z-index": "2000"
		}
	},
	"Pagination Container Outside": {
		kind: "Box",
		props: {}
	}
}; // src/BoxCarousel/BoxCarousel.js

var SwiperBox = styled(Box7)`
    & .swiper-wrapper {
        transition-timing-function: ${props => props.swiperTransitionTimingFunction};
    }
`;
var breakpoints2 = ["sm"];

var BoxCarousel = ({
	effect,
	slidesCount: slidesProp,
	slidesAs,
	showArrows,
	showPagination,
	draggable,
	infinityMode,
	keyboardControl,
	showAutoPlayButton,
	autoPlay: autoPlayEnabled,
	autoPlaySpeed,
	autoPlayHoverPause,
	animDuration: animDurationProp,
	animFunction,
	...props
}) => {
	useCSS_default();
	const {
		override,
		ChildPlaceholder,
		rest
	} = useOverrides(props, overrides_default, {});
	const [swiper, setSwiper] = useState8(null);
	const slidesCount = getNumber_default(slidesProp, propsDefault_default.slidesCount, x => x > 0);
	const animDuration = convertCssTimingToMs_default(animDurationProp);
	const [navigation, Navigation2] = useNavigationModule_default(showArrows);
	const [Pagination3] = usePaginationModule_default(showPagination);
	const [useAutoPlay2, AutoPlay2] = useAutoPlayModule_default();
	const autoPlaySpeedInt = convertCssTimingToMs_default(autoPlaySpeed);
	const autoplay = useAutoPlay2(autoPlayEnabled, swiper, autoPlaySpeedInt);
	const hoverCallbacks = useAutoPlayHoverCallbacks_default(autoplay, autoPlayHoverPause);
	const breakpoint = useBreakpoint_default(breakpoints2);
	const key = `${infinityMode}${showArrows}${draggable}${keyboardControl}${effect}${animDuration}`;
	useEffect6(() => {
		if (swiper && !swiper.destroyed) {
			Object.assign(swiper.params.navigation, navigation);
			swiper.navigation.destroy();
			swiper.navigation.init();
			swiper.navigation.update();
		}
	}, [navigation]);
	return <SwiperBox
		position="relative"
		display="flex"
		flex-direction="column"
		height="500px"
		min-height="200px"
		swiperTransitionTimingFunction={animFunction}
		{...rest}
	>
		<BoxCarouselDataProvider_default value={{
			ChildPlaceholder,
			override,
			swiper,
			slidesCount
		}}>
			    
			<Box7 position="relative" display="flex" flex-grow="1" {...hoverCallbacks}>
				      
				{showArrows !== navigationType.none && <Box7 {...override("Navigation Container", `Navigation Container ${showArrows === navigationType.arrowsin ? "Inside" : "Outside"}`, "Navigation Container Left")}>
					<Navigation2.LeftArrow />
				</Box7>}
				      
				<Swiper_default
					key={key}
					effect={effect}
					spaceBetween={50}
					slidesPerView={1}
					onInit={sw => {
						setSwiper(sw);
					}}
					navigation={navigation}
					modules={getModules_default({
						effect,
						showArrows,
						keyboardControl
					})}
					allowTouchMove={draggable}
					loop={infinityMode}
					keyboard={keyboardControl}
					speed={animDuration}
					fadeEffect={{
						crossFade: true
					}}
					onBeforeInit={sw => {
						Object.assign(sw.params.navigation, navigation);
					}}
				>
					{[...Array(slidesCount)].map((_, index) => <Slide_default key={`${index}slide`} index={index + 1} slidesAs={slidesAs} />)}
				</Swiper_default>
				      
				{showArrows !== navigationType.none && breakpoint !== "sm" && <Box7 {...override("Navigation Container", `Navigation Container ${showArrows === navigationType.arrowsin ? "Inside" : "Outside"}`, "Navigation Container Right")}>
					<Navigation2.RightArrow />
				</Box7>}
				      
				{isProgress(showPagination) && <Pagination3 />}
				    
			</Box7>
			    
			<Box7 {...override("Pagination Container", `Pagination Container ${isPaginationIn(showPagination) ? "Inside" : "Outside"}`)}>
				      
				{!isProgress(showPagination) && <Pagination3 />}
				      
				<AutoPlay2 show={showAutoPlayButton} autoPlayEnabled={autoPlayEnabled} autoplay={autoplay} />
				      
				{showArrows !== navigationType.none && breakpoint === "sm" && <Box7 {...override("Navigation Container", `Navigation Container ${showArrows === navigationType.arrowsin ? "Inside" : "Outside"}`, "Navigation Container Right")}>
					<Navigation2.RightArrow />
				</Box7>}
				    
			</Box7>
			  
		</BoxCarouselDataProvider_default>
	</SwiperBox>;
};

Object.assign(BoxCarousel, {
	title: "BoxCarousel",
	description: {
		en: "This component is a counter that increases or decreases to a certain value",
		ru: "Компонент представляет из себя счетчик, который увеличивается или уменьшается до определенного значения"
	},
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default
});
var BoxCarousel_default = BoxCarousel;
export { BoxCarousel_default as default };