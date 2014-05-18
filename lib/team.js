module.exports = TeamFactory

TeamFactory.$inject = [
	'machina'
]

function TeamFactory(machina){
	var Team = machina.Fsm.extend({
		namespace: 'team'
		,name: undefined
		,cap: undefined
		,initialNumber: undefined
		,discharged: undefined
		,score: undefined
		,_checkCap: function(){
			return this.initialNumber + this.admitted.length >= this.cap ?
				this.transition('ineligible') :
				this.transition('eligible')
		}
		,_store: function(cfg){
			this.name = cfg.name
			this.cap = cfg.cap
			this.admitted = []
			this.initialNumber = cfg.initialNumber || 0
			this.discharged = cfg.discharged || 0
			this._checkCap()
		}
		,states: {
			uninitialized: {
				'initialize': function(cfg){
					this._store(cfg)
				}
			}
			,eligible:{

			}
			,ineligible:{

			}
		}
	})
	Team.create = function(cfg){
		var team = new Team()
		team.handle('initialize', cfg)
		return team
	}
	return Team
}
