import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

interface Props {
	label: string;
}
const CheckboxWithLabel = (props: Props) => {
	const { label } = props;

	return (
		<FormGroup>
			<FormControlLabel control={<Checkbox />} label={label} />
		</FormGroup>
	);
}

export default CheckboxWithLabel;