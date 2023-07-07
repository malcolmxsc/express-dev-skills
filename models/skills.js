const skills = [
    {id: 123719, skill: 'Javascript', learned: true},
    {id: 983794, skill: 'HTML', learned: true},
    {id: 778608, skill: 'EJS', learned: false},
    
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find((skill) => skill.id === id);
    
}