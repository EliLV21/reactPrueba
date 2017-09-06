function Hola(props) {
	const name = props.name;
	return (
		<h1 id="Title" onClick={props.onClick} onMouseEnter={props.onMouseEnter}>
			Hola {props.name} {props.count}
		</h1>
	);
}

class MiComponente extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			count: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount(){
		console.log('el componente se va a montar');
	}
	componentDidMount(){
		document.addEventListener('click', this.handleClick);
	}
	// componentWillReciveProps(nextProps){
	// 	this.setState({
	// 		count: this.state.count * 2,
	// 	});
	// }

	shouldComponentUpdate(nextProps, nextState){
		if (nextState.count !== this.state.count) return true
		return false;
	}

	componentWillUpdate() {
		console.log('el componente se va a actualizar');
	}

	componentDidUpdate(){
		console.log('el componente se actualizo');
	}

	componentWillUnmount(){
		document.removeEventListener('click', this.handleClick);
	}
	handleClick(){
		this.setState({
			count: this.state.count +1,
		});
	}

	handleMouseEnter(event){
		console.log(event);
	}

	render(props) {
		const name = this.props.name;
		return (
			<Hola
				name={this.props.name}
				count={this.state.count}
				onClick={this.handleClick}
				onMouseEnter={this.handleMouseEnter}
			/>
		);
	}
}

ReactDOM.render(
	<MiComponente name = 'Eli'/>,
	document.getElementById('app')
);
