const rules = {
	user: {
		static: [],
	},
	admin: {
		static: [
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"sign-message:disable",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"user-table:editTricked",
			"ticket-options:deleteTicket",
			"ticket-options:transferWhatsapp",
			"contacts-page:deleteContact",
		],
	},
};

export default rules;