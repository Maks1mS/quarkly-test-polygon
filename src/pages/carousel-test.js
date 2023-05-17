import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button, Section, Icon, Strong, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdDone } from "react-icons/md";
import { GiLongAntennaeBug, GiSpottedBug, GiSeatedMouse } from "react-icons/gi";
import { FaSeedling, FaGifts, FaShoppingBag, FaPlaneDeparture, FaMapMarkedAlt, FaDice } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"carousel-test"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.BoxCarousel
			height="640px"
			showAutoPlayButton
			autoPlay={false}
			showPagination="labelsin"
			lg-height="384px"
		>
			<Override slot="Slide 1">
				<Section
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
						padding="108px 0px 108px 0px"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 1
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Mountains
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Label" color="white" margin="0px 0px 6px 0px" />
			<Override slot="Pagination Underline" background="white" />
			<Override slot="Label 1">
				Tour 1
			</Override>
			<Override slot="Label 2">
				Tour 2
			</Override>
			<Override slot="Label 3">
				Tour 3
			</Override>
			<Override slot="Slide 2">
				<Section
					margin
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1592859600972-1b0834d83747?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						padding="108px 0px 108px 0px"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 2
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Forest
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Slide 3">
				<Section
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						padding="108px 0px 108px 0px"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 3
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Sea
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Arrow Icon Next" />
			<Override slot="Arrow Icon" size="36px" width="48px" height="48px" />
			<Override slot="Bullet Button 2" />
			<Override slot="Pagination Container" />
			<Override slot="Navigation Container" sm-position="static" />
			<Override slot="Navigation Container Right" />
			<Override slot="AutoPlay Button Icon Pause" color="--light" />
			<Override slot="AutoPlay Button Icon" color="#ffffff" />
			<Override slot="Slide" />
		</Components.BoxCarousel>
		<Components.BoxCarousel
			height="600px"
			showAutoPlayButton
			autoPlay={false}
			showPagination="labelsin"
			lg-height="384px"
		>
			<Override slot="Slide 1">
				<Section
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1608876873794-772af7ce5a9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
						padding="108px 0px 108px 0px"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 1
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Mountains
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Label" color="white" margin="0px 0px 6px 0px" />
			<Override slot="Pagination Underline" background="white" />
			<Override slot="Label 1">
				Tour 1
			</Override>
			<Override slot="Label 2">
				Tour 2
			</Override>
			<Override slot="Label 3">
				Tour 3
			</Override>
			<Override slot="Slide 2">
				<Section
					margin
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1592859600972-1b0834d83747?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						padding="108px 0px 108px 0px"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 2
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Forest
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Slide 3">
				<Section
					background="linear-gradient(0deg,rgba(16, 53, 65, 0.6) 0%,rgba(16, 53, 65, 0.6) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
					min-height="100%"
					padding="0px 0 0px 0"
					inner-width="80%"
					inner-min-width="280px"
					inner-max-width="--cmp-section-maxWidth-default"
					lg-height="384px"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						padding="108px 0px 108px 0px"
						lg-flex-direction="column"
						lg-justify-content="flex-end"
					/>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-end"
						lg-margin="0px 0px 18px 0px"
						md-width="100%"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="white" lg-font="--base">
							Tour 3
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline1" color="white" lg-font="--headline2">
							Sea
						</Text>
					</Box>
					<Box
						width="50%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						md-width="100%"
					>
						<Text
							margin="0px 0px 36px 0px"
							color="white"
							font="--base"
							max-width="360px"
							lg-margin="0px 0px 24px 0px"
						>
							Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
						</Text>
						<Box display="flex" grid-gap="24px">
							<Button
								border-width="2px"
								border-style="solid"
								border-color="white"
								background="none"
								padding="6px 34px 8px 34px"
								border-radius="50px"
								hover-background="--color-darkL2"
								transition="background-color 0.1s ease-in-out 0s"
								font="--lead"
								md-font="--base"
								sm-padding="4px 22px 6px 22px"
								sm-height="auto"
							>
								Let’s go!
							</Button>
							<Button
								background="none"
								padding="8px 24px 10px 24px"
								border-radius="50px"
								hover-background="rgba(25, 30, 34, 0.6)"
								transition="background-color 0.1s ease-in-out 0s"
								font="italic 300 1.25rem/1.5 --fontFamily-sans"
								md-font="italic 300 16px/1.5 --fontFamily-sans"
								sm-padding="8px 18px 10px 18px"
							>
								Read about
							</Button>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Arrow Icon Next" />
			<Override slot="Arrow Icon" size="36px" width="48px" height="48px" />
			<Override slot="Bullet Button 2" />
			<Override slot="Pagination Container" />
			<Override slot="Navigation Container" sm-position="static" />
			<Override slot="Navigation Container Right" />
			<Override slot="AutoPlay Button Icon Pause" color="--light" />
			<Override slot="AutoPlay Button Icon" color="#ffffff" />
			<Override slot="Slide" />
		</Components.BoxCarousel>
		<Components.BoxCarousel height="auto">
			<Override slot="Slide 1">
				<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px">
					<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						justify-content="flex-start"
						align-items="flex-start"
						lg-width="100%"
						lg-align-items="flex-start"
						lg-margin="0px 0px 60px 0px"
						sm-margin="0px 0px 40px 0px"
						sm-padding="0px 0px 0px 0px"
						lg-flex-direction="row"
						lg-flex-wrap="wrap"
					>
						<Text
							margin="0px 0px 16px 0px"
							font="--base"
							lg-text-align="center"
							lg-width="100%"
							text-transform="uppercase"
						>
							How can we help?
						</Text>
						<Text
							margin="0px 0px 48px 0px"
							color="--dark"
							font="--headline2"
							lg-text-align="center"
							sm-font="--headline3"
							lg-width="100%"
						>
							We equip leaders from strategy
through execution.
						</Text>
						<Box
							display="flex"
							align-items="flex-start"
							margin="0px 0px 32px 0px"
							lg-width="100%"
							md-width="100%"
							md-margin="0px 0px 32px 0px"
							md-padding="0px 0px 0px 0px"
						>
							<Icon
								category="md"
								icon={MdDone}
								size="48px"
								background="--color-orange"
								color="--light"
								border-radius="50%"
								padding="8px 8px 8px 8px"
							/>
							<Box margin="0px 0px 0px 22px">
								<Text
									margin="0px 0px 6px 0px"
									color="--darkL2"
									font="--headline3"
									lg-text-align="left"
									sm-font="--lead"
								>
									Seeing Things Differently
								</Text>
								<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
									Cras dapibus vivams clementum senisiesel
									<br />
									Aenean vulputate clcifend tellus
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							align-items="flex-start"
							margin="0px 0px 32px 0px"
							lg-width="100%"
							md-width="100%"
							md-margin="0px 0px 32px 0px"
							md-padding="0px 0px 0px 0px"
						>
							<Icon
								category="md"
								icon={MdDone}
								size="48px"
								background="--color-orange"
								color="--light"
								border-radius="50%"
								padding="8px 8px 8px 8px"
							/>
							<Box margin="0px 0px 0px 22px">
								<Text
									margin="0px 0px 6px 0px"
									color="--darkL2"
									font="--headline3"
									lg-text-align="left"
									sm-font="--lead"
								>
									Freedom to Succeed
								</Text>
								<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
									Cras dapibus vivams clementum senisiesel
									<br />
									Aenean vulputate clcifend tellus
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							align-items="flex-start"
							lg-width="100%"
							md-width="100%"
							md-padding="0px 0px 0px 0px"
						>
							<Icon
								category="md"
								icon={MdDone}
								size="48px"
								background="--color-orange"
								color="--light"
								border-radius="50%"
								padding="8px 8px 8px 8px"
							/>
							<Box margin="0px 0px 0px 22px">
								<Text
									margin="0px 0px 6px 0px"
									color="--darkL2"
									font="--headline3"
									lg-text-align="left"
									sm-font="--lead"
								>
									For Businesses
								</Text>
								<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
									Cras dapibus vivams clementum senisiesel
									<br />
									Aenean vulputate clcifend tellus
								</Text>
							</Box>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Slide 2">
				<Section
					padding="88px 0 88px 0"
					sm-padding="60px 0 60px 0"
					box-shadow="--m"
					background="--color-light"
					md-padding="45px 0 45px 0"
				>
					<Override slot="SectionContent" max-width="1220px" />
					<Box
						width="100%"
						flex-direction="column"
						md-width="100%"
						md-align-items="center"
						md-justify-content="center"
						margin="0px 0px 64px 0px"
						display="flex"
						lg-width="100%"
						align-items="center"
						lg-margin="0px 0px 48px 0px"
						md-margin="0px 0px 24px 0px"
					>
						<Text
							margin="0px 0px 16px 0px"
							font="--headline2"
							color="--dark"
							md-text-align="center"
							sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
							text-align="center"
							md-font="--headline3"
						>
							What We Do for Customers
						</Text>
						<Text
							color="--darkL2"
							text-align="center"
							lg-width="100%"
							margin="0px 0px 0px 0px"
							font="--base"
							width="70%"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada pellentesque elit.
						</Text>
					</Box>
					<Box
						display="grid"
						lg-flex-wrap="wrap"
						grid-template-columns="repeat(3, 1fr)"
						grid-gap="24px"
						lg-grid-gap="16px"
						md-grid-template-columns="1fr"
					>
						<Box
							display="flex"
							padding="46px 46px 47px 46px"
							background="#FFFFFF"
							flex-direction="column"
							justify-content="flex-start"
							box-shadow="--l"
							align-items="center"
							lg-padding="24px 24px 24px 24px"
						>
							<Icon
								margin="0px 0px 30px 0px"
								color="--orange"
								size="64px"
								category="gi"
								icon={GiLongAntennaeBug}
								lg-font="48px sans-serif"
							/>
							<Text font="--lead" margin="0px 0px 18px 0px" color="--darkL2" text-align="center">
								<Strong letter-spacing="0.5px" text-transform="uppercase" text-align="center">
									Roaches Invasions
								</Strong>
							</Text>
							<Text
								flex="1 0 auto"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								font="--base"
								text-align="center"
							>
								Lorem ipsum dolor sit amet, consectetur
adipiscing eit Nulla nunc ex iaculis id

libero at, placerat posuere nul.
							</Text>
							<Link
								href="#"
								color="--orange"
								text-decoration-line="initial"
								font="--base"
								margin="32px 0px 0px 0px"
								letter-spacing="0.3px"
								transition="--opacityOut"
								hover-opacity=".7"
							>
								Learn more
							</Link>
						</Box>
						<Box
							justify-content="flex-start"
							flex-direction="column"
							padding="46px 46px 47px 46px"
							background="#FFFFFF"
							display="flex"
							box-shadow="--l"
							align-items="center"
							lg-padding="24px 24px 24px 24px"
						>
							<Icon
								icon={GiSpottedBug}
								margin="0px 0px 30px 0px"
								color="--orange"
								size="64px"
								category="gi"
								lg-font="48px sans-serif"
							/>
							<Text color="--darkL2" font="--lead" margin="0px 0px 18px 0px" text-align="center">
								<Strong letter-spacing="0.5px" text-transform="uppercase" text-align="center">
									Bed Bug Pest Control
								</Strong>
							</Text>
							<Text
								font="--base"
								flex="1 0 auto"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								text-align="center"
							>
								Donec sagittis nulla sit amet enim
posuere, eu feugiat purus tempor

Phasellus condimecongu.
							</Text>
							<Link
								href="#"
								color="--orange"
								text-decoration-line="initial"
								font="--base"
								margin="32px 0px 0px 0px"
								letter-spacing="0.3px"
								transition="--opacityOut"
								hover-opacity=".7"
							>
								Learn more
							</Link>
						</Box>
						<Box
							display="flex"
							background="#FFFFFF"
							justify-content="flex-start"
							flex-direction="column"
							padding="46px 46px 47px 46px"
							box-shadow="--l"
							align-items="center"
							lg-padding="24px 24px 24px 24px"
						>
							<Icon
								size="64px"
								category="gi"
								icon={GiSeatedMouse}
								margin="0px 0px 30px 0px"
								color="--orange"
								lg-font="48px sans-serif"
							/>
							<Text margin="0px 0px 18px 0px" color="--darkL2" font="--lead" text-align="center">
								<Strong letter-spacing="0.5px" text-transform="uppercase">
									Commensal Rodents
								</Strong>
							</Text>
							<Text
								flex="1 0 auto"
								margin="0px 0px 0px 0px"
								color="--darkL2"
								font="--base"
								text-align="center"
							>
								Nom eget dui consectetur, venenatis elit
in, rutrum nist Nunc consectetur elit nec

it sodales, at dignissim.
							</Text>
							<Link
								href="#"
								color="--orange"
								font="--base"
								text-decoration-line="initial"
								margin="32px 0px 0px 0px"
								letter-spacing="0.3px"
								transition="--opacityOut"
								hover-opacity=".7"
							>
								Learn more
							</Link>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Slide 3">
				<Section
					padding="60px 0 90px 0"
					sm-padding="40px 0"
					min-height="600px"
					sm-min-height="auto"
					background="--color-lightD1"
					display="flex"
					lg-padding="45px 0 45px 0"
				>
					<Override
						slot="SectionContent"
						flex-direction="row"
						flex-wrap="wrap"
						grid-gap="5%"
						max-width="1200px"
					/>
					<Box
						display="flex"
						width="100%"
						flex-direction="column"
						align-items="center"
						lg-width="100%"
						sm-margin="0px 0px 40px 0px"
						sm-padding="0px 0px 0px 0px"
						lg-flex-direction="row"
						lg-flex-wrap="wrap"
						lg-justify-content="center"
					>
						<Text
							as="h1"
							margin="0px"
							font="normal 600 40px/1.5 --fontFamily-sans"
							color="--dark"
							width="100%"
							md-width="100%"
							sm-font="normal 600 40px/1.2 --fontFamily-sans"
							text-align="center"
						>
							We specialize in your industry.
						</Text>
						<Text margin="8px 0px 0px 0px" font="--base" text-align="center" color="--darkL2">
							Learn how we ae ceivering personalization st scal scross sectors
						</Text>
						<Box
							display="grid"
							width="100%"
							grid-template-columns="repeat(2, 1fr)"
							grid-gap="24px"
							margin="36px 0px 0px 0px"
							max-width="1000px"
							md-grid-template-columns="1fr"
						>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaSeedling} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Beauty and cosmetics
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaGifts} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Fashion
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaShoppingBag} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Luxury
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaPlaneDeparture} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Airlines
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaMapMarkedAlt} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Travel & tourism
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
							<Box
								padding="24px 24px 48px 24px"
								background="--color-darkL2"
								border-radius="8px"
								border-width="0px 0px 0px 4px"
								border-style="solid"
								border-color="--color-red"
								box-shadow="--m"
							>
								<Box display="flex" align-items="center">
									<Icon category="fa" icon={FaDice} size="42px" color="--red" />
									<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
										Online betting
									</Text>
								</Box>
								<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
								</Text>
							</Box>
						</Box>
					</Box>
				</Section>
			</Override>
			<Override slot="Label 1">
				How can we help?
			</Override>
			<Override slot="Label 2">
				What We Do
			</Override>
			<Override slot="Label 3">
				We specialize{" "}
			</Override>
			<Override slot="Arrow Icon Next" />
			<Override slot="Navigation Container" sm-position="static" />
		</Components.BoxCarousel>
		<Components.QuarklycommunityKitCsvToTable />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63d15c40f2f031001fb77bf3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<style place={"endOfHead"} rawKey={"6422ec9a8bbada3429bbb695"}>
				{"html {\n  scroll-behavior: smooth;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});