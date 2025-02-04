
module.exports = router => {

  router.get('/profile/teaching-status/qts', (req, res) => {
    let profile = req.session.user.profile

    let options = [{
      value: 'Yes',
      text: 'Yes',
      checked: profile.qts && profile.qts.includes('Yes')
    }, {
      value: 'No',
      text: 'No',
      checked: profile.qts && profile.qts.includes('No')
    }, {
      value: 'I’m on track to receive QTS',
      text: 'I’m on track to receive QTS',
      checked: profile.qts && profile.qts.includes('I’m on track to receive QTS')
    }]

    let qtsAwardedYear = profile.qtsAwardedYear

    res.render('profile/teaching-status/qts', {
      options,
      qtsAwardedYear
    })
  })

  router.post('/profile/teaching-status/qts', (req, res) => {
    let profile = req.session.user.profile
    profile.qts = req.body.profile.qts
    profile.qtsAwardedYear = req.body.profile.qtsAwardedYear
    res.redirect('/profile/teaching-status/review')
  })

  router.get('/profile/teaching-status/review', (req, res) => {
    let profile = req.session.user.profile

    res.render('profile/teaching-status/review', {
      profile
    })
  })

}