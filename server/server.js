exports = {

  events: [
    { event: 'onContactCreate', callback: 'onTicketCreateHandler' }
  ],

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
  onTicketCreateHandler: function(args) {
    console.log('Hello ' + args['data']['contact']['name']);
  }
  
};