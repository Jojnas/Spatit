// events

Template.new_review.events({
    "submit .new_review": function(event){
        var rating = event.target.rating.value;
        var body = event.target.body.value;

        Meteor.call('addReview', this_id, rating, body);

        FlashMessages.sendSuccess('Review added');
        Router.go('/');

        event.preventDefault();
    }
});