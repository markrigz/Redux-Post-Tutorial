import React, { useState } from "react";

function PostForm(props) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	return (
		<div>
			<h1>Add Post</h1>
			<form>
				<div>
					<label>Title: </label>
					<br />
					<input
						type="text"
						name="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<br />
				<div>
					<label>Body: </label>
					<br />
					<textarea
						name="body"
						onChange={(e) => setBody(e.target.value)}
						value={body}
					/>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default PostForm;
