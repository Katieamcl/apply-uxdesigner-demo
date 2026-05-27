//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post ('/new/email-address', (req,res) => {

    res.redirect ('/new/code')

})

router.post ('/new/code', (req,res) => {

        res.redirect ('/new/name')

})

router.post ('/new/name', (req,res) => {

    res.redirect ('/new/experience')

})