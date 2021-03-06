module.exports = (app) => {
	const applicants = require('../controllers/applicant.controller.js');

	// Create a new Applicant
	app.post('/applicants', applicants.create);

	// Retreive all Applicants
	app.get('/applicants', applicants.findAll);

	// Retrieve a single Applicant with applicantId
	app.get('/applicants/:applicantId', applicants.findOne);

	// Update an Applicant with applicantId
	app.post('/update/:applicantId', applicants.update);

	// Delete an Applicant with applicantId
	app.post('/delete/:applicantId', applicants.delete);
}
