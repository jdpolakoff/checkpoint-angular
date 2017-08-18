angular
.module('musingsApp', [])
.factory( 'musings', [
  musingsService
])
.controller('musingsController', ['musings', MusingsControllerFunction])


function MusingsControllerFunction (musings) {
  this.musings = musings.all()
  this.newMusing = {
    title: '',
    content: '',
    author: ''
  }

  function createMusing (newMusing) {
    musings.create(newMusing)
      }

  function removeMusing (i) {
    musings.slice(i)
      }
}

function musingsService (musingsController){
const musings = [
  {
    title: "Musing1",
    content: "Musing1",
    author: "John"
  },
  {
    title: "Musing2",
    content: "Musing2",
    author: "Andy"
  },
  {
    title: "Musing3",
    content: "Musing3",
    author: "Juan"
  }
]

return {
  all: all,
  create: create,
  remove: remove
  }

function all () {
  return musings
    }


function create (musing) {
  musings.push(musing)
    }

function remove (musing[i]) {
  musings.slice(musing[i])
    }

}
