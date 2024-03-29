import React from "react";
import theme from "theme";
import { Theme, Text, Image, Box, Icon, Link, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text margin="0px 0px 0px 0px" font="--headline2">
			Full Menu
		</Text>
		<Components.MyMenu filterMode="exclude" depth="5" exact-active-match />
		<Text margin="0px 0px 0px 0px" font="--headline2">
			Hide pages
		</Text>
		<Components.MyMenu filterMode="exclude" depth="5" exact-active-match filterPages="/testpage,/index" />
		<Text margin="0px 0px 0px 0px" font="--headline2">
			Show only pages
		</Text>
		<Components.MyMenu filterMode="include" depth="5" exact-active-match filterPages="/testpage,/index" />
		<Components.QuarklycommunityKitCsvToTable data="#,Product, Date Applied,Date Payment Received,Number of shares, Face Value, Date of Allotment, Status\\\\\\\\\\\\\\\\n 1, 7.5% Convertible Preference Shares ​,24/01/2023, 24/01/2023,100, 500000, 24/01/2023, Pending" hasHeader>
			<Override slot="Cell THead" background="#974c4c" />
		</Components.QuarklycommunityKitCsvToTable>
		<Components.QuarklycommunityKitCsvToTable data="#;Product; Date Applied;Date Payment Received;Number of shares; Face Value; Date of Allotment; Status\\\\\\\\\\\\\\\\n1;7.5% Convertible Preference Shares;24/01/2023;24/01/2023;100;500000;24/01/2023; Pending" hasHeader csvDelimiter=";" />
		<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" />
		<Components.Table showHeader showFooter>
			<Override slot="Text TBody Row-1 Col-3">
				asdasd
			</Override>
			<Override slot="Text TBody Row-2 Col-4">
				asdasd
			</Override>
			<Override slot="Text TBody Row-2 Col-6">
				asds
			</Override>
			<Override slot="Text TBody Row-2 Col-7">
				sds
			</Override>
			<Override slot="Text TBody Row-3 Col-7">
				asdasd
			</Override>
			<Override slot="Text TBody Row-1 Col-7">
				asdas
			</Override>
			<Override slot="Text TBody Row-0 Col-7">
				asdas
			</Override>
			<Override slot="Text TFoot Col-7">
				Footer
			</Override>
			<Override slot="Text THead Col-0">
				Header
			</Override>
			<Override slot="Text TBody Row-0 Col-3">
				фывфыв
			</Override>
			<Override slot="Text TBody Row-0 Col-4">
				фывфыв
			</Override>
			<Override slot="Text TBody Row-1 Col-5">
				фывф выфвы фвфы фывффывфывфыв
			</Override>
		</Components.Table>
		<Text margin="0px 0px 0px 0px">
			\n
		</Text>
		<Components.QuarklycommunityKitCsvToTable data="#,Product, Date Applied,Date Payment Received,Number of shares, Face Value, Date of Allotment, Status\\\\\\\\\\\\\\\\n 1, 7.5% Convertible Preference Shares ​,24/01/2023, 24/01/2023,100, 500000, 24/01/2023, Pending" hasHeader />
		<Text margin="0px 0px 0px 0px">
			\\n
		</Text>
		<Components.CsvToTable2 data="#,Product, Date Applied,Date Payment Received,Number of shares, Face Value, Date of Allotment, Status\\\\\\\\\\\\\\\\n 1, 7.5% Convertible Preference Shares ​,24/01/2023, 24/01/2023,100, 500000, 24/01/2023, Pending" />
		<Components.QuarklycommunityKitPopup />
		<Components.QuarklycommunityKitTimeline>
			<Override slot="Descr 0">
				ASDasdasdasdasdasd
			</Override>
		</Components.QuarklycommunityKitTimeline>
		<Components.Carousel
			autoPlay={false}
			autoPlayBehavior="range"
			showDots
			showArrows
			autoPlayIntervalProp="1s"
			autoPlayDelayProp="0s"
		>
			<Override slot="Slide 1">
				<Box min-width="100px" min-height="100px" background="--color-orange" />
			</Override>
			<Override slot="Slide Content 1">
				<Box min-width="100px" min-height="100px" background="#db0808" />
				<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" />
			</Override>
			<Override
				slot="Slide Content"
				width="100%"
				height="100%"
				position="absolute"
				background="--color-green"
			/>
			<Override slot="Slide Content 2">
				<Box min-width="100px" min-height="100px" background="--primaryGradient" />
			</Override>
			<Override slot="Slide Content 3">
				<Icon category="md" icon={MdFace} size="64px" />
			</Override>
			<Override slot="Slides" overflow-x="visible" overflow-y="visible" />
		</Components.Carousel>
		<Components.QuarklycommunityKitVideo
			src="https://res.cloudinary.com/the-coach/video/upload/v1658134587/1920x1080_falwk7.mp4"
			autoPlay
			loop
			muted
			poster="https://i.imgur.com/76Dri6N.png"
			controls
			lg-width="100%"
		/>
		<Components.QuarklycommunityKitMenu />
		<Link href="#" color="#000000">
			Some text
		</Link>
		<List
			margin="0px 0px 0px 0px"
			padding="0px 0px 0px 20px"
			list-style-type="disc"
			as="ul"
			color="--grey"
		>
			<Text margin="0px 0px 0px 0px">
				First item
			</Text>
			<Text margin="0px 0px 0px 0px">
				Second item
			</Text>
			<Text margin="0px 0px 0px 0px">
				Third item
			</Text>
		</List>
		<Components.Popup>
			<Link href="/testpage" color="#000000">
				Some text
			</Link>
		</Components.Popup>
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