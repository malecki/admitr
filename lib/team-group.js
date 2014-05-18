module.exports = TeamGroupFactory

TeamGroupFactory.$inject = [
	'machina'
	,'Team'
]

function TeamGroupFactory(machina, Team){
	var TeamGroup = machina.Fsm.extend({
		namespace: 'teamGroup'
		,name: undefined
		,states: {
			uninitialized: {
				'initialize': function(cfg){
					var self=this
					this.name = cfg.name
					this.teams = []
					cfg.teams.map(function(team){
						var t = Team.create(team)
						self.teams.push(t)
					}.bind(this))
					this.transition('initialized')
				}
			}
			,initialized:{
				'sort': function(){
					var teams = this.teams
					if(this.teams.length>2){
						var last = this.teams.pop()
					}
					this.teams.sort(function(a, b){
						var diff = a.has() - b.has()
						return diff >= 4 ? diff : 0
					})
					if(last){
						this.teams.push(last)
					}
				}
				,'addTeam': function(team){
					this.teams.push(Team.create(team))
				}
				,'removeTeam': function(name){
					var names = this.teams.map(function(t){
						return t.name
					})
					var thisOne = names.indexOf(name)
					this.teams.splice(thisOne, 1)
				}
			}
		}
	})
	TeamGroup.create = function(cfg){
		var service = new TeamGroup()
		service.handle('initialize', cfg)
		return service
	}
	return TeamGroup
}
