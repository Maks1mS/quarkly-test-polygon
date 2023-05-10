import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"testpage/a/b"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MyMenu filterMode="exclude" depth="5" exact-active-match filterPages="/index,/testpage/a/b" />
		<Components.MyMenu filterMode="include" depth="5" exact-active-match filterPages="/asasd" />
		<Components.QuarklycommunityKitPopup>
			<Link href="/testpage" color="#000000">
				Some text
			</Link>
		</Components.QuarklycommunityKitPopup>
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