const skills = [
    {id: 123719, skill: 'Javascript', learned: true},
    {id: 983794, skill: 'HTML', learned: true},
    {id: 778608, skill: 'EJS', learned: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }