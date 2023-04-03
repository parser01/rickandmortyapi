import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export function SearchInput({ characters, search, setSearch }) {
	const [open, setOpen] = useState(false);
	const loading = open && characters.length === 0;
	const [options, setOptions] = useState(() => [...characters]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		} else if (characters.length > 0) {
			setOptions(characters);
		}
	}, [open, characters]);

	console.log(options, "options");

	return (
		<Autocomplete
			id="search"
			inputValue={search}
			onInputChange={(event, newInputValue) => {
				setSearch(newInputValue);
			}}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			options={options}
			loading={loading}
			getOptionLabel={(option) => option.name}
			renderInput={(params) => (
				<TextField {...params} label="Search" variant="outlined" />
			)}
		/>
	);
}
