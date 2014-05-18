module.exports = TeamFactory

TeamFactory.$inject = [
	'machina'
]

function TeamFactory(machina){
	var Team = machina.Fsm.extend({
		namespace: 'team'
		,name: undefined
		,cap: undefined
		,stepdown: undefined
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
			this.cap = cfg.cap || 0
			this.stepdown = cfg.stepdown || 0
			this.admitted = cfg.patients || []
			this.initialNumber = cfg.initialNumber || 0
			this.discharged = cfg.discharged || 0
			this._checkCap()
		}
		,_admit: function(pt) {
			this.admitted.push(pt)
			if(pt.stepdown){
				this.stepdown = Math.max(0, --this.stepdown)
			}
			this._checkCap()
		}
		,has: function(){
			return this.initialNumber + this.admitted.length
		}
		,states: {
			uninitialized: {
				'initialize': function(cfg){
					this._store(cfg)
				}
			}
			,eligible:{
				'admit': function(pt){
					this._admit(pt)
				}
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
