import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"test"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-width="100px" min-height="500px" background="--color-green" />
		<Box min-width="100px" min-height="500px" background="--color-secondary" />
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