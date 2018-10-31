const Agenda = require('agenda')
const {mongodb} = require('../config')
const agenda = new Agenda({db: {address: mongodb.address, collection: mongodb.collection}})
const jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(',') : []
if (jobTypes.length) {
  // 加载job processor
  jobTypes.forEach(type => {
    require(`../job/${type}`)(agenda)
  })
  agenda.start()
}
module.exports = agenda