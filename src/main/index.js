import React, { Component } from 'react'
import { connect } from 'react-redux'
import SoundMixer from '../soundmixer'
import { PLAY_MUSIC, STOP_MUSIC } from '../store/actions'

const mapStateToProps = (state) => {
	return {
		mainWrapper: state.classNames.mainWrapper,
		welcome: state.messages.welcome
	}
}
const mapDispatch = (dispatch) => {
	return {
		playMusic: ()=>dispatch(PLAY_MUSIC()),
		stopMusic: ()=>dispatch(STOP_MUSIC())
	}
}


class Game extends Component {
	render() {
		const { 
			mainWrapper, 
			welcome, 
			playMusic,
		  stopMusic
		} = this.props
		return (
			<div className={mainWrapper}>
				<SoundMixer />
			  <h1>Redux Blank</h1>
			  <p>{welcome}</p>
			  <button onClick={playMusic}>Play Music</button>
			  <button onClick={stopMusic}>Stop Music</button>
			</div>
		)
	}
}
const game = connect(
	mapStateToProps, mapDispatch)(Game)
export default game
