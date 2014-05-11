module.exports = TeamFactory

TeamFactory.$inject = [
	'lodash'
	,'machina'
]

function TeamFactory(_, machina){
	var team = machina.Fsm.extend({})
	return team
}
