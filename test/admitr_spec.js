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
            inject(function(Team){
                config = {
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
    })
})
