module.exports = AdmitterFactory

AdmitterFactory.$inject = [
	'lodash'
	,'machina'
	,'Team'
	,'Patient'
]

function AdmitterFactory(_, machina, Team, Patient){
	var ad = machina.Fsm.extend({
		name: 'admitr'
		,initialState: 'uninitialized'
		,_allTeams: {}
		,teams: []
		,_eligibleTeams: function(){
			return this.teams.filter(function(t){
				return t.state==='eligible'
			})
		}
		,states: {
			uninitialized: {
				'initialize': function(cfg){

				}
			}
			,initialized: {

			}
		}
	})
	ad.create = function(cfg){
		fsm = new AdmitrFactory()
		fsm.handle('initialize', cfg)
		return fsm
	}
	return ad
}
