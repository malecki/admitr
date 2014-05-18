var mainModule = require('../lib/index.js')
var should = require('chai').should()
describe('Admitr app', function(){
    var sut
    beforeEach(function(){
        var mod = mainModule('mod.test')
        angular.mock.module('mod.test')
    })
    describe('a Team', function(){
        beforeEach(function(){
            inject(function(Team, TeamGroup){
                var config = {
                    name: 'A'
                    ,cap: 2
                    ,initialNumber: 0
                    ,discharged: 0

                }
                sut = Team.create(config)
            })
        })
        it('should exist', function(){
            sut.namespace.should.equal('team')
        })
        it('should be initialized with config stuff', function(){
            sut.name.should.equal('A')
            sut.cap.should.equal(2)
            sut.state.should.equal('eligible')
        })
        it('should handle admissions and then be ineligible when full', function(){
            var pt = {
                name: 'Mr Jenkins'
                ,service: ['Medicine']
            }
            sut.handle('admit', pt)
            sut.handle('admit', pt)

            sut.admitted.length.should.equal(2)
            sut.admitted[0].name.should.equal('Mr Jenkins')
            sut.state.should.equal('ineligible')
        })
    })
    describe('A group of teams', function(){
        beforeEach(function(){
            inject(function(TeamGroup, Configurator){
                var config = {name: 'Medicine', teams: [
                    {name: 'A', cap: 10}
                    ,{name: 'B', cap: 10}
                ]}
                sut = TeamGroup.create(config)
            })
        })
        it('should have a service with teams A and B', function(){
            sut.teams.length.should.equal(2)
            var t = sut.teams.map(function(i){ return i.name })
            t.should.eql(['A','B'])
        })
        it('should move a team upon admission to the bottom of the list', function(){

        })
        describe('Given a difference of < 4 patients', function(){
            it('the order should be unchanged', function(){
                sut.teams[0].initialNumber = 1
                sut.handle('sort')
                sut.teams[0].name.should.equal('A')
            })
        })
        describe('Given a difference of ≥ 4 patients', function(){
            it('should admit to the smaller team', function(){
                sut.teams[0].initialNumber = 4
                sut.handle('sort')
                sut.teams[0].name.should.equal('B')
            })
        })
    })
})
