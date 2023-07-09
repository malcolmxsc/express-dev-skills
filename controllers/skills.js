// controllers/skills.js



module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };

const Skill = require('../models/skills');

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()

    });
}

function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }

  function newSkill(req,res) {
    res.render('skills/new', {title: 'skill to add'});
  }

  function create(req,res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills'); // not sure what step 2 and 3 mean by index view but to return to home page change this line to '/' instead of '/skills'
  }