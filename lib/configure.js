'use strict';

module.exports = Config

Config.$inject = [
]

function Config(){
    var cfg = {
        teams: {
            Medicine: [
                {name: 'East A'}
                ,{name: 'East B'}
                ,{name: 'c'}
                ,{name: 'd'}
                ,{name: 'e'}
                ,{name: 'f'}
                ,{name: 'g'}
                ,{name: 'h'}
            ]
            ,HIV: []
            ,Liver: [
                {name: 'a'}
                ,{name: 'b'}
            ]
            ,Cardiology: [
                {name: 'a'}
                ,{name: 'b'}
            ]
            ,Oncology: [
                {name: 'a'}
                ,{name: 'b'}
            ]
        }
    }

    return function(){ return cfg }
}
