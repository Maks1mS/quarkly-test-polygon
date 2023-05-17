import React from 'react';
import atomize from "@quarkly/atomize";

const MyButton = props => <div {...props}>
	Say hello MyButton
</div>;

export default atomize(MyButton)({
	name: "MyButton",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "MyButton — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});