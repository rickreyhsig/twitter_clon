export default class TweetBox extends React.Component{
	render() {
		return(
			<form>
			  <div className="input-field">
				<textarea className="materialize-textarea" />
				<label> Whats happening? </label>
				<button className="btn right"> Tweet </button>
			  </div>
			</form>
		)
	}
}