// ../community-kit/src/CSVToTable/CSVToTable.js
import React2, { useMemo } from "react";
import atomize2 from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components"; // ../community-kit/src/ComponentNotice.js

import React from "react";
import atomize from "@quarkly/atomize"; // ../community-kit/src/CSVToTable/props/propsInfo.js

var propsInfo_default = {
	data: {
		title: {
			en: "CSV Data",
			ru: "CSV \u0414\u0430\u043D\u043D\u044B\u0435"
		},
		control: "text-area",
		type: "text",
		weight: 1
	},
	csvDelimiter: {
		title: {
			en: "Delimiter",
			ru: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C"
		},
		control: "input",
		type: "text"
	},
	hasHeader: {
		title: {
			en: "Has header",
			ru: "\u0415\u0441\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
		},
		control: "checkbox",
		weight: 1
	}
}; // ../community-kit/src/CSVToTable/props/propsDefault.js

var propsDefault_default = {
	data: "",
	csvDelimiter: ",",
	hasHeader: true
}; // ../community-kit/src/CSVToTable/props/overrides.js

var overrides_default = {
	TBody: {
		kind: "TBody"
	},
	THead: {
		kind: "THead",
		props: {
			color: "white",
			background: "--color-primary"
		}
	},
	Row: {
		kind: "Row"
	},
	Cell: {
		kind: "Cell",
		props: {
			padding: "8px",
			"border-color": "black",
			"border-width": "1px",
			"border-style": "solid"
		}
	},
	"Cell THead": {
		kind: "Cell",
		props: {
			padding: "12px"
		}
	}
}; // ../community-kit/src/utils/getAPI.js

var getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

var getAPI_default = getAPI; // ../community-kit/src/CSVToTable/utils/parseCSV.js

var parseCSV_default = (csvText, csvColumnDelimiter = ",") => {
	const newline = getAPI_default().mode === "development" ? "\n" : "\\n";
	const rows = csvText.split(newline);
	return rows.map(row => row.split(csvColumnDelimiter));
};

var Message = atomize.div();

var ComponentNotice = ({
	message,
	...props
}) => /* @__PURE__ */React.createElement(Message, {
	padding: "16px",
	width: "100%",
	font: "--font-base",
	"font-style": "italic",
	color: "--color-grey",
	"background-color": "--color-light",
	border: "1px dashed --color-lightD2",
	"box-sizing": "border-box",
	...props
}, message || "Some Text");

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
}); // ../community-kit/src/CSVToTable/CSVToTable.js

var Table = atomize2.table();
var THead = atomize2.thead();
var TBody = atomize2.tbody();
var Tr = atomize2.tr();
var Th = atomize2.th();
var Td = atomize2.td();

var CSVToTable = ({
	data,
	csvDelimiter,
	hasHeader,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides_default);
	const rowsWithColumns = useMemo(() => parseCSV_default(data?.trim?.() || "", csvDelimiter), [data, csvDelimiter]);
	const [header, body] = useMemo(() => hasHeader ? [rowsWithColumns[0], rowsWithColumns.slice(1)] : [void 0, rowsWithColumns], [hasHeader, rowsWithColumns]);
	const isNotEmpty = (data?.trim?.() || "") !== "";
	return /* @__PURE__ */React2.createElement(Table, {
		"border-collapse": "collapse",
		...rest
	}, isNotEmpty ? /* @__PURE__ */React2.createElement(React2.Fragment, null, header && /* @__PURE__ */React2.createElement(THead, { ...override("THead")
	}, /* @__PURE__ */React2.createElement(Tr, { ...override("Row", `Row THead`)
	}, header.map((cell, colIdx) => /* @__PURE__ */React2.createElement(Th, {
		key: `cell-thead-${colIdx}`,
		...override("Cell", `Cell Col-${colIdx}`, "Cell THead", `Cell THead Col-${colIdx}`)
	}, cell)))), /* @__PURE__ */React2.createElement(TBody, { ...override("TBody")
	}, body.map((row, rowIdx) => /* @__PURE__ */React2.createElement(Tr, {
		key: `row-${rowIdx}`,
		...override("Row", `Row TBody-${rowIdx}`)
	}, row.map((cell, colIdx) => /* @__PURE__ */React2.createElement(Td, {
		key: `cell-tbody-${rowIdx}-${colIdx}`,
		...override("Cell", `Cell Col-${colIdx}`, "Cell TBody", `Cell TBody Col-${colIdx}`, `Cell TBody Row-${rowIdx}`, `Cell TBody Row-${rowIdx} Col-${colIdx}`)
	}, cell)))))) : /* @__PURE__ */React2.createElement(ComponentNotice_default, {
		message: "Add your CSV Data in the Props panel"
	}));
};

Object.assign(CSVToTable, {
	title: "CSVToTable",
	description: {
		en: "This component helps display a table from a CSV file.",
		ru: "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0438\u0437 CSV-\u0444\u0430\u0439\u043B\u0430."
	},
	propInfo: propsInfo_default,
	defaultProps: propsDefault_default,
	overrides: overrides_default
});
var CSVToTable_default = CSVToTable;
export { CSVToTable_default as default };