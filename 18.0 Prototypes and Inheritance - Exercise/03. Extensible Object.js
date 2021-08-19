function extensibleObject() {
    const proto = {}
    const instance = Object.create(proto)
  
    instance.extend = function (templates) {
      Object.entries(templates).map(([key, value]) => {
      typeof value == 'function' ? proto[key] = value : instance[key] = value    
      })
    }
  
    return instance
}

// console.log(extensibleObject())