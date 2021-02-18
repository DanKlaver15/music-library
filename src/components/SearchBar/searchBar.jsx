import React from 'react';
import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap'




function SearchBar() {
	return (
		<Form inline>
		<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
			Title
		</Form.Label>
		<InputGroup className="mb-2 mr-sm-2">
			<InputGroup.Prepend>
				<InputGroup.Text>Title</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl id="inlineFormInputGroupUsername2" placeholder="" />
		</InputGroup>
		<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
			Album
		</Form.Label>
		<InputGroup className="mb-2 mr-sm-2">
			<InputGroup.Prepend>
				<InputGroup.Text>Album</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl id="inlineFormInputGroupUsername2" placeholder="" />
		</InputGroup>
		<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
			Album
		</Form.Label>
		<InputGroup className="mb-2 mr-sm-2">
			<InputGroup.Prepend>
				<InputGroup.Text>Artist</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl id="inlineFormInputGroupUsername2" placeholder="" />
		</InputGroup>
		<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
			Album
		</Form.Label>
		<InputGroup className="mb-2 mr-sm-2">
			<InputGroup.Prepend>
				<InputGroup.Text>Genre</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl id="inlineFormInputGroupUsername2" placeholder="" />
		</InputGroup>
		<Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
			Album
		</Form.Label>
		<InputGroup className="mb-2 mr-sm-2">
			<InputGroup.Prepend>
				<InputGroup.Text>Release Date</InputGroup.Text>
			</InputGroup.Prepend>
			<FormControl id="inlineFormInputGroupUsername2" placeholder="" />
		</InputGroup>
		</Form>
	)
}

export default SearchBar;