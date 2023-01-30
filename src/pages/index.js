import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
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
		<Components.QuarklycommunityKitCsvToTable data="#,Product, Date Applied,Date Payment Received,Number of shares, Face Value, Date of Allotment, Status\n 1, 7.5% Convertible Preference Shares ​,24/01/2023, 24/01/2023,100, 500000, 24/01/2023, Pending" hasHeader />
		<Components.QuarklycommunityKitCsvToTable data="#;Product; Date Applied;Date Payment Received;Number of shares; Face Value; Date of Allotment; Status\n1;7.5% Convertible Preference Shares;24/01/2023;24/01/2023;100;500000;24/01/2023; Pending" hasHeader csvDelimiter=";" />
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
		<Components.CsvToTable2 data="#,Product, Date Applied,Date Payment Received,Number of shares, Face Value, Date of Allotment, Status\n 1, 7.5% Convertible Preference Shares ​,24/01/2023, 24/01/2023,100, 500000, 24/01/2023, Pending" />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63d15c40f2f031001fb77bf3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});