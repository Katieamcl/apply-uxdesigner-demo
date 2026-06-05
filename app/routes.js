//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Experience level constants
const EXPERIENCE_NONE = 'None'
const EXPERIENCE_LESS_THAN_YEAR = 'Less than a year'

// Add your routes here


router.post ('/new/email-address', (req,res) => {
  if (req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
  } else {
    res.redirect ('/new/code')
  }
})

router.post ('/new/code', (req,res) => {

        res.redirect ('/new/name')

})

router.post('/new/name', (req,res) => {
  if (req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
  } else {
    res.redirect('/new/experience')
  }
})

router.post('/new/experience', function (req, res) {
  console.log(req.query.returnUrl)
  if (req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
  } else {
    const answer = req.session.data['new'] && req.session.data['new']['yearsOfExperience']

    console.log('Years of experience selected:', answer)
    if (answer === EXPERIENCE_NONE || answer === EXPERIENCE_LESS_THAN_YEAR) {
      return res.redirect('/new/ineligible')
    }
  
    return res.redirect('/new/expertise')
  }
})

router.post ('/new/expertise', (req,res) => {
if (req.query.returnUrl) {
    res.redirect(req.query.returnUrl)
  } else {
    res.redirect ('/new/skills')
  }
})

router.post ('/new/skills', (req,res) => {

    res.redirect ('/new/check')

})

router.post ('/new/check', (req,res) => {
    console.log('Check your answers page data:', req.session.data['new'])
    res.redirect ('/new/confirmation')

})