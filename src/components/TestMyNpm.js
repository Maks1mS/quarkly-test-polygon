import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Input } from "@quarkly/widgets";
import atomize from '@quarkly/atomize';
import MyButton from './MyButton';
const overrides = {
	"Form Input": {
		kind: "Input"
	},
	"Form Button": {
		kind: "MyButton",
		props: {
			src: "override_src_property"
		}
	}
};

const MyForm = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		      
		<Input {...override("Form Input", "First Input")} />
		      
		<Input {...override("Form Input", "Second Input")} />
		      
		<MyButton {...override("Form Button")} />
		    
	</Box>;
};

export default Object.assign(MyForm, {
	title: "My Form",
	overrides
});