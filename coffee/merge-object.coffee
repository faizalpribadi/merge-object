###*
Merge object functional

@type {object}
@return {object}

@author      Faizal Pribadi  <ical.rabbit@gmail.com>
@version     0.1.0
###
exports = module.exports = (object1, object2) ->
  "use strict"
  keys = undefined
  
  # TODO: fix no input argument object to default object
  if typeof object1 isnt "object" and typeof object2 isnt "object"
    object1 = {}
    object2 = {}
  for keys of object2
    object1[keys] = object2[keys]  if object2.hasOwnProperty(keys)
  object1
